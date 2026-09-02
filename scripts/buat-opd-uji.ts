/**
 * Akun Operator OPD untuk pengujian LOKAL.
 *
 * Peran OPD tidak punya akun demo di seeder, jadi tidak ada cara memeriksa
 * sidebar dua-menunya, penyaringan lingkup, maupun halaman detailnya tanpa
 * membuat satu. Sengaja TIDAK dimasukkan ke `prisma/seed.ts`: akun berkata
 * sandi tetap tidak boleh ikut ke basis data mana pun selain laptop.
 *
 * ⚠️ id 999001 dan nama ber-"lokal" dipilih supaya mencolok bila tak
 * sengaja terbawa: ia tidak akan tertukar dengan akun instansi sungguhan.
 *
 *     npm run opd:uji      # user opd.uji.lokal / sandi opd12345
 */
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const p = new PrismaClient();

async function main() {
  const kec = await p.wilayah.findFirst({
    where: { jenis: 'KECAMATAN' },
    select: { nama: true },
    orderBy: { nama: 'asc' },
  });

  const u = await p.user.upsert({
    where: { id: 999001 },
    update: { password: await bcrypt.hash('opd12345', 10), status: 1 },
    create: {
      id: 999001,
      userId: 'opd.uji.lokal',
      password: await bcrypt.hash('opd12345', 10),
      userlevelId: 4,
      userFullname: 'Operator OPD (uji lokal)',
      userKecamatan: kec?.nama ?? null,
      status: 1,
      activationTime: new Date(),
    },
  });
  console.log('akun OPD uji:', u.userId, '| level', u.userlevelId, '| kecamatan', u.userKecamatan);
}

main().catch(console.error).finally(() => p.$disconnect());
