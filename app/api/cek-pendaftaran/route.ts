import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, fail } from "@/lib/api-response";

export const dynamic = "force-dynamic";

/** Samarkan nama untuk konfirmasi tanpa membuka data penuh: "Budi S*****". */
function samarkanNama(nama: string | null): string {
  if (!nama) return "-";
  return nama
    .trim()
    .split(/\s+/)
    .map((w) =>
      w.length <= 2 ? w : w.slice(0, 2) + "*".repeat(Math.min(w.length - 2, 6)),
    )
    .join(" ");
}

/**
 * Cek status pendaftaran akun warga berdasarkan NIK (publik, tanpa login).
 * Mengembalikan tahap akun: belum terdaftar / menunggu verifikasi / aktif /
 * ditolak (beserta alasan). Nama disamarkan untuk mengurangi risiko enumerasi.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const nik = String((body as { nik?: unknown })?.nik ?? "").trim();

  if (!/^\d{16}$/.test(nik)) {
    return fail(["NIK harus berupa 16 digit angka."]);
  }

  const user = await prisma.user.findFirst({
    where: { userId: nik, userlevelId: 3 },
    orderBy: { id: "desc" },
    select: {
      userFullname: true,
      status: true,
      ket: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    return ok({ found: false });
  }

  return ok({
    found: true,
    status: user.status, // 0 = menunggu, 1 = aktif, 2 = ditolak
    nama: samarkanNama(user.userFullname),
    alasan: user.status === 2 ? user.ket ?? null : null,
    tanggalDaftar: user.createdAt,
    tanggalUpdate: user.updatedAt,
  });
}
