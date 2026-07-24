import Image from 'next/image';

const GAMBAR = [
  {
    src: '/ppid/prosedur-permohonan-informasi.jpg',
    alt: 'Prosedur Permohonan Informasi Publik',
    width: 1104,
    height: 441,
  },
  {
    src: '/ppid/mekanisme-pengajuan-keberatan.jpg',
    alt: 'Mekanisme Pengajuan Keberatan',
    width: 1133,
    height: 453,
  },
  {
    src: '/ppid/tata-cara-sengketa-informasi.jpg',
    alt: 'Tata Cara Permohonan Penyelesaian Sengketa Informasi',
    width: 1182,
    height: 473,
  },
];

/**
 * Panduan bergambar (prosedur permohonan, mekanisme keberatan, tata cara
 * sengketa informasi) — dari materi resmi Disdukcapil, dipasang di halaman
 * Informasi Publik agar pemohon tahu alur lengkap sebelum mengunduh dokumen.
 */
export function ProsedurInformasiImages() {
  return (
    <div className="mt-12 space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Prosedur & Mekanisme Layanan Informasi
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Alur permohonan informasi, pengajuan keberatan, hingga penyelesaian sengketa informasi publik.
        </p>
      </div>
      <div className="space-y-4">
        {GAMBAR.map((g) => (
          <div
            key={g.src}
            className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm"
          >
            <Image
              src={g.src}
              alt={g.alt}
              width={g.width}
              height={g.height}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
