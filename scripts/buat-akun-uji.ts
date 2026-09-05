/**
 * Akun uji LOKAL untuk peran yang tidak punya akun demo di seeder.
 *
 * Seeder hanya menyediakan `admin` dan satu warga. Tanpa akun Operator OPD dan
 * Operator staf, tidak ada cara memeriksa sidebar dua-menu OPD, penyaringan
 * lingkup permohonan, maupun penjagaan "hanya Super Admin yang boleh menyunting
 * akun petugas" — dan justru penjagaan itulah yang paling mahal bila salah.
 *
 * Sengaja TIDAK dimasukkan ke `prisma/seed.ts`: akun bersandi tetap tidak boleh
 * ikut ke basis data mana pun selain laptop.
 *
 * ⚠️ Id 999001/999002 dan nama ber-"uji lokal" dipilih supaya mencolok bila tak
 * sengaja terbawa — keduanya tidak akan tertukar dengan akun sungguhan.
 *
 *     npm run akun:uji
 *
 *     opd.uji.lokal  / opd12345    (Operator OPD)
 *     staf.uji.lokal / staf12345   (Operator staf)
 */
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { PERAN } from '../lib/peran';

const prisma = new PrismaClient();

async function main() {
  const kec = await prisma.wilayah.findFirst({
    where: { jenis: 'KECAMATAN' },
    select: { nama: true },
    orderBy: { nama: 'asc' },
  });

  const akun = [
    {
      id: 999001,
      userId: 'opd.uji.lokal',
      sandi: 'opd12345',
      level: PERAN.OPD,
      nama: 'Operator OPD (uji lokal)',
      kecamatan: kec?.nama ?? null,
    },
    {
      id: 999002,
      userId: 'staf.uji.lokal',
      sandi: 'staf12345',
      level: PERAN.STAF,
      nama: 'Operator Staf (uji lokal)',
      kecamatan: null,
    },
    {
      id: 999003,
      userId: 'admin.uji.lokal',
      sandi: 'adm12345',
      level: PERAN.ADMIN,
      nama: 'Super Admin (uji lokal)',
      kecamatan: null,
    },
    /*
     * ⚠️ Warga masuk memakai NIK, bukan username — itulah sebabnya `userId`-nya
     * 16 digit. NIK ini sengaja diawali angka yang mustahil dipakai wilayah
     * mana pun, supaya tidak bertabrakan dengan warga sungguhan.
     */
    {
      id: 999004,
      userId: '9999000000000001',
      sandi: 'warga12345',
      level: PERAN.WARGA,
      nama: 'Warga Uji (uji lokal)',
      kecamatan: kec?.nama ?? null,
    },
  ];

  for (const a of akun) {
    const hash = await bcrypt.hash(a.sandi, 10);
    const u = await prisma.user.upsert({
      where: { id: a.id },
      update: { password: hash, status: 1, userlevelId: a.level },
      create: {
        id: a.id,
        userId: a.userId,
        password: hash,
        userlevelId: a.level,
        userFullname: a.nama,
        userKecamatan: a.kecamatan,
        status: 1,
        activationTime: new Date(),
      },
      select: { userId: true, userlevelId: true, userKecamatan: true },
    });
    console.log(
      `✓  ${u.userId.padEnd(16)} level ${u.userlevelId}  sandi ${a.sandi}` +
        (u.userKecamatan ? `  · ${u.userKecamatan}` : ''),
    );
  }

  console.log('\n⚠️  Akun ini hanya untuk laptop. Jangan pernah ada di produksi.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
