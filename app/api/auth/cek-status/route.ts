import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, fail } from "@/lib/api-response";
import { infoStatus, STATUS_AKUN } from "@/lib/akun-status";
import { uraikanAlasanTolak } from "@/lib/akun-tolak";

export const dynamic = "force-dynamic";

/**
 * Cek status pendaftaran akun warga berdasarkan NIK — tanpa login.
 * Dipakai halaman "Cek Status Pendaftaran": warga tahu apakah akunnya sedang
 * diproses, sudah aktif, atau ditolak (beserta alasannya).
 */
export async function POST(req: NextRequest) {
  const { nik } = (await req.json().catch(() => ({}))) as { nik?: string };
  const clean = (nik ?? "").replace(/\D/g, "");
  if (!/^\d{16}$/.test(clean)) return fail(["Info: NIK harus 16 digit angka"]);

  // Akun WARGA (level 3) terbaru dengan NIK ini.
  const user = await prisma.user.findFirst({
    where: { userId: clean, userlevelId: 3 },
    orderBy: { id: "desc" },
    select: {
      userFullname: true,
      status: true,
      ket: true,
      createdAt: true,
      updatedAt: true,
      userNokk: true,
      userHp: true,
      userEmail: true,
      userKecamatan: true,
    },
  });

  if (!user) return ok({ ada: false });

  const info = infoStatus(user.status);
  const ditolak = user.status === STATUS_AKUN.DITOLAK;
  // Saat DITOLAK, `ket` memuat alasan + daftar kolom yang perlu diperbaiki.
  const tolak = ditolak ? uraikanAlasanTolak(user.ket) : null;
  return ok({
    ada: true,
    nama: user.userFullname,
    status: user.status,
    label: info.label,
    pesan: info.pesan,
    // Alasan + kolom hanya relevan saat DITOLAK.
    alasan: tolak?.alasan || null,
    kolom: tolak?.kolom ?? [],
    // Prefill data pendaftaran dikirim HANYA saat DITOLAK — satu-satunya status
    // yang boleh daftar ulang. Dipakai form pendaftaran agar warga cukup
    // memperbaiki bagian yang ditandai, bukan mengetik ulang semuanya. Untuk
    // status lain data pribadi tidak diekspos.
    prefill: ditolak
      ? {
          nama: user.userFullname ?? "",
          kk: user.userNokk ?? "",
          hp: user.userHp ?? "",
          email: user.userEmail ?? "",
          kecamatan: user.userKecamatan ?? "",
        }
      : null,
    terdaftar: user.createdAt,
    diperbarui: user.updatedAt,
  });
}
