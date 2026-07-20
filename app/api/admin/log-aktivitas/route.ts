import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, fail } from "@/lib/api-response";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

const PER_PAGE = 25;

/**
 * Daftar log aktivitas petugas — KHUSUS ADMIN (level 1).
 * Mendukung paginasi + filter per akun petugas (userId) dan pencarian teks.
 */
export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session || session.level !== 1) return fail(["Akses ditolak"], 403);

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
  const userIdParam = searchParams.get("userId");
  const q = searchParams.get("q")?.trim();

  const where = {
    ...(userIdParam && /^\d+$/.test(userIdParam)
      ? { userId: Number(userIdParam) }
      : {}),
    ...(q ? { ringkasan: { contains: q } } : {}),
  };

  const [items, total, petugas] = await Promise.all([
    prisma.logAktivitas.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
      include: {
        user: { select: { userFullname: true, userId: true, userlevelId: true } },
      },
    }),
    prisma.logAktivitas.count({ where }),
    // Opsi filter: petugas yang PERNAH punya log (biar dropdown tidak kosong/ramai).
    prisma.logAktivitas
      .findMany({
        distinct: ["userId"],
        select: { userId: true, user: { select: { userFullname: true, userId: true } } },
        orderBy: { userId: "asc" },
      })
      .then((rows) =>
        rows.map((r) => ({
          id: r.userId,
          nama: r.user?.userFullname ?? r.user?.userId ?? `#${r.userId}`,
        })),
      ),
  ]);

  return ok({
    items,
    total,
    page,
    totalPages: Math.max(1, Math.ceil(total / PER_PAGE)),
    petugas,
  });
}
