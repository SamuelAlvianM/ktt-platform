import { NextRequest } from "next/server";
import { mkdir, unlink } from "fs/promises";
import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
import type { ReadableStream as WebReadableStream } from "stream/web";
import { join, extname } from "path";
import { ok, fail } from "@/lib/api-response";

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB per foto
const ALLOWED_EXT = [".jpg", ".jpeg", ".png"];

/**
 * Upload bukti foto pengaduan / WBS — PUBLIK (pelapor boleh anonim, tidak wajib
 * login), berbeda dari /api/upload yang menuntut sesi.
 *
 * Disimpan ke `storage/permohonan/pengaduan/` (DI LUAR public/), sehingga hanya
 * dapat dilihat petugas lewat route `/uploads/pengaduan/<file>` yang mengecek
 * sesi (lihat app/uploads/[...path]/route.ts — folder di luar FOLDER_PUBLIK =
 * privat; nama berkas berawalan "wbs_" bukan uid, jadi hanya staff yang boleh).
 * Dialirkan ke disk (tidak dimuat utuh ke memori) agar tidak OOM di VPS.
 */
export async function POST(req: NextRequest) {
  let tujuan: string | null = null;
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file) return fail(["File tidak ditemukan"]);

    const ext = extname(file.name).toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      return fail(["Format foto harus JPG atau PNG"]);
    }
    if (file.size > MAX_SIZE) {
      return fail(["Ukuran foto maksimal 5 MB"]);
    }

    // Nama acak berawalan "wbs_" (bukan uid) → serving route hanya izinkan staff.
    const nama = `wbs_${Date.now()}_${Math.random().toString(36).slice(2, 8)}${ext}`;
    const dir = join(process.cwd(), "storage", "permohonan", "pengaduan");
    await mkdir(dir, { recursive: true });
    tujuan = join(dir, nama);

    await pipeline(
      Readable.fromWeb(file.stream() as WebReadableStream<Uint8Array>),
      createWriteStream(tujuan),
    );

    return ok({ url: `/uploads/pengaduan/${nama}` }, ["Foto berhasil diunggah"]);
  } catch (err) {
    console.error("Upload bukti pengaduan error:", err);
    if (tujuan) await unlink(tujuan).catch(() => {});
    return fail(["Gagal mengunggah foto"], 500);
  }
}
