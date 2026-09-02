/**
 * Pastikan `lib/peran.ts` masih cocok dengan `m_userlevels` di basis data.
 *
 * 🔴 KENAPA PERLU. Seluruh pembatasan akses portal ini berdiri di atas angka
 * level yang dipetakan di `lib/peran.ts`. Peta itu ditulis tangan dari seeder;
 * kalau seseorang mengubah `m_userlevels` lewat SQL — menyisipkan peran baru,
 * menukar urutan, mengganti nama — petanya jadi bohong TANPA satu pun galat.
 * Yang terjadi bukan portal rusak, melainkan portal yang tetap jalan sambil
 * memberi akses kepada peran yang keliru.
 *
 * Dijalankan manual sebelum rilis, bukan saat boot: ia menyentuh basis data,
 * dan kegagalan koneksi tidak boleh menjatuhkan portal yang sedang melayani.
 *
 *     npm run peran:periksa
 */
import { PrismaClient } from '@prisma/client';
import { NAMA_PERAN } from '../lib/peran';

const prisma = new PrismaClient();

async function main() {
  const baris = await prisma.userLevel.findMany({ orderBy: { id: 'asc' } });
  const adaDiDb = new Map(baris.map((b) => [b.id, b.nama]));

  let bermasalah = false;

  for (const [idStr, nama] of Object.entries(NAMA_PERAN)) {
    const id = Number(idStr);
    const diDb = adaDiDb.get(id);

    if (diDb === undefined) {
      console.error(`❌ level ${id} ("${nama}") TIDAK ADA di m_userlevels`);
      bermasalah = true;
    } else if (diDb !== nama) {
      console.error(`❌ level ${id}: lib/peran.ts "${nama}" ≠ basis data "${diDb}"`);
      bermasalah = true;
    } else {
      console.log(`✓  level ${id}  ${nama}`);
    }
  }

  // Peran yang ada di basis data tapi tidak dikenal peta — bukan kesalahan
  // fatal (portal tetap menolaknya), tapi patut dilihat: biasanya pertanda
  // peran baru ditambahkan tanpa memperbarui lib/peran.ts.
  for (const b of baris) {
    if (!(b.id in NAMA_PERAN)) {
      console.warn(`⚠️  level ${b.id} ("${b.nama}") ada di basis data tapi tidak dikenal lib/peran.ts`);
    }
  }

  if (bermasalah) {
    console.error('\nPeta peran TIDAK cocok dengan basis data. Perbaiki sebelum rilis.');
    process.exit(1);
  }
  console.log('\nPeta peran cocok dengan basis data.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
