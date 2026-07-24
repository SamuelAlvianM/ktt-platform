import { PpidLayananHalaman } from '@/components/ppid/ppid-layanan-halaman';

export const metadata = {
  title: 'Formulir PPID — Disdukcapil Tana Tidung',
  description:
    'Formulir permohonan informasi publik dan pernyataan keberatan PPID Disdukcapil Kabupaten Tana Tidung, lengkap dengan infografis alur dan berkas PDF yang dapat diunduh.',
};

// Menampilkan berkas PDF unggahan dashboard → dinamis.
export const dynamic = 'force-dynamic';

export default function FormulirPpidPage() {
  return (
    <PpidLayananHalaman
      judul="Formulir PPID"
      deskripsi="Unduh formulir permohonan informasi publik dan formulir pernyataan keberatan. Ikuti alur pada infografis, lengkapi formulir, lalu ajukan sesuai ketentuan layanan PPID."
      seksi={[
        {
          slug: 'formulir-permohonan',
          dokumenJenis: 'FORMULIR_PERMOHONAN',
          fallback: {
            title: 'Formulir Permohonan Informasi',
            description:
              'Alur dan formulir untuk mengajukan permohonan informasi publik kepada PPID Disdukcapil Tana Tidung.',
            image: '/ppid/prosedur-permohonan-informasi.jpg',
            body: [
              'Pemohon mengajukan permohonan informasi kepada PPID, baik secara langsung maupun melalui surat/email/telepon. PPID mencatat, memverifikasi, dan menyampaikan informasi paling lama 10 hari kerja sesuai ketentuan. Unduh formulir permohonan pada tabel berkas di bawah dan lampirkan fotokopi KTP.',
            ],
          },
        },
        {
          slug: 'formulir-keberatan',
          dokumenJenis: 'FORMULIR_KEBERATAN',
          fallback: {
            title: 'Formulir Pernyataan Keberatan Atas Permohonan Informasi',
            description:
              'Alur dan formulir untuk mengajukan keberatan bila permohonan informasi tidak dipenuhi atau tidak sesuai.',
            image: '/ppid/mekanisme-pengajuan-keberatan.jpg',
            body: [
              'Jika pemohon informasi tidak puas dengan jawaban/keputusan PPID, pemohon dapat mengajukan keberatan kepada Atasan PPID paling lambat 30 hari kerja sejak ditemukannya alasan keberatan. Unduh formulir pernyataan keberatan pada tabel berkas di bawah.',
            ],
          },
        },
      ]}
    />
  );
}
