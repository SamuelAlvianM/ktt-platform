import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, fail } from "@/lib/api-response";
import { STATUS_AKUN } from "@/lib/akun-status";
import { notifyPetugas, safeNotify } from "@/lib/notifikasi";

export const dynamic = "force-dynamic";

/**
 * Warga yang pendaftarannya DITOLAK mengajukan ulang → status kembali MENUNGGU
 * dan petugas dinotifikasi untuk meninjau lagi. Inilah loop tolak → ajukan
 * ulang → tinjau. Hanya berlaku bila status saat ini DITOLAK.
 */
export async function POST(req: NextRequest) {
  const { nik } = (await req.json().catch(() => ({}))) as { nik?: string };
  const clean = (nik ?? "").replace(/\D/g, "");
  if (!/^\d{16}$/.test(clean)) return fail(["Info: NIK harus 16 digit angka"]);

  const user = await prisma.user.findFirst({
    where: { userId: clean, userlevelId: 3 },
    orderBy: { id: "desc" },
  });
  if (!user) return fail(["Info: NIK tidak ditemukan"]);
  if (user.status !== STATUS_AKUN.DITOLAK) {
    return fail(["Info: Pengajuan ulang hanya untuk pendaftaran yang ditolak"]);
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { status: STATUS_AKUN.MENUNGGU },
  });

  await safeNotify(() =>
    notifyPetugas({
      tipe: "AKUN_BARU",
      judul: "Pengajuan ulang pendaftaran",
      isi: `${user.userFullname ?? user.userId} (NIK ${clean}) mengajukan ulang pendaftaran setelah ditolak — mohon ditinjau kembali.`,
      link: "/dashboard/users",
      refType: "User",
      refId: user.id,
    }),
  );

  return ok(null, [
    "Info: Pengajuan ulang terkirim. Akun Anda kembali menunggu verifikasi petugas.",
  ]);
}
