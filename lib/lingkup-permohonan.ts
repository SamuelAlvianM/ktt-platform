import type { Prisma } from '@prisma/client';
import type { SessionPayload } from '@/lib/auth';
import { bolehSemuaWilayah, isOpd } from '@/lib/peran';

/**
 * Sejauh mana sebuah sesi boleh melihat daftar permohonan.
 *
 * Petugas dinas (admin & staf) melihat seluruh kabupaten. Operator OPD hanya
 * melihat permohonan yang IA sendiri ajukan — ia instansi luar yang diberi
 * jendela ke dashboard, bukan pegawai dinas.
 *
 * 🔴 HASILNYA HARUS MASUK KE `where` DASAR, bukan ditempel belakangan pada
 * query baris saja. Halaman permohonan menjalankan TIGA query dari satu
 * saringan: baris halaman, total untuk paginasi, dan hitungan per status untuk
 * chip filter. Menyaring baris saja membuat daftarnya benar sementara
 * angka-angkanya masih menghitung seluruh kabupaten — OPD melihat "12 baris"
 * di atas tulisan "dari 11.919 permohonan", dan chip statusnya membocorkan
 * berapa banyak permohonan milik kecamatan lain.
 *
 * Kebocorannya diam: tidak ada galat, dan daftar yang tampil memang benar.
 */
export function lingkupPermohonan(
  session: SessionPayload,
): Prisma.PermohonanWhereInput {
  if (bolehSemuaWilayah(session.level)) return {};
  if (isOpd(session.level)) return { userId: session.uid };

  // Peran lain (warga, atau peran baru yang belum dipikirkan) tidak berhak
  // atas daftar ini sama sekali. Mengembalikan saringan yang tidak pernah
  // cocok lebih aman daripada `{}` — kalau kelak ada pemanggil yang lupa
  // memeriksa peran lebih dulu, yang bocor adalah daftar kosong, bukan
  // seluruh kabupaten.
  return { id: -1 };
}

/**
 * Boleh membuka SATU permohonan ini?
 *
 * ⚠️ Jawabannya 404, bukan 403, bila tidak boleh — lihat pemanggilnya.
 * "Terlarang" mengonfirmasi bahwa nomor registrasi itu ada; "tidak ditemukan"
 * tidak mengonfirmasi apa pun. Untuk data kependudukan, keberadaan sebuah
 * permohonan pun bukan kabar yang boleh bocor ke instansi lain.
 */
export function bolehLihatPermohonan(
  session: SessionPayload,
  pemilikUid: number,
): boolean {
  if (bolehSemuaWilayah(session.level)) return true;
  if (isOpd(session.level)) return pemilikUid === session.uid;
  return false;
}
