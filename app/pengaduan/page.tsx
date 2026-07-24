import { redirect } from 'next/navigation';

/**
 * Halaman Pengaduan lama di-redirect ke halaman WBS.
 *
 * Atas permintaan user, kanal Pengaduan Masyarakat dan Whistle Blowing System
 * (WBS) disatukan: isinya sama dan keduanya menyimpan ke endpoint yang sama
 * (/api/pengaduan). Tautan /pengaduan yang masih dipakai footer/histori tetap
 * bekerja lewat redirect ini. Versi form pengaduan lama ada di riwayat git.
 */
export default function PengaduanPage() {
  redirect('/wbs/tentang-wbs');
}
