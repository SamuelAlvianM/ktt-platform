import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { Footer } from '@/components/shared/footer';
import { IndeksSearch } from '@/components/shared/indeks-search';

/**
 * Halaman indeks kartu — daftar kategori yang menonjol dan jelas bisa diklik.
 * Dipakai Laporan Data Demografi dan dua halaman klasifikasi Informasi PPID
 * agar bentukannya seragam.
 */

export interface KartuIndeksItem {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Kelas gradien Tailwind untuk kotak ikon (mis. "from-sky-400 to-sky-600"). */
  gradasi: string;
  /** Keterangan kecil di kaki kartu (mis. "170.207 jiwa", "3 dokumen"). */
  stat?: string;
  /**
   * Kontrol admin (ubah/hapus) yang ditumpuk di pojok kartu. Dirender sebagai
   * SAUDARA dari <Link>, bukan anaknya, agar tidak ada tombol di dalam tautan.
   */
  aksi?: React.ReactNode;
}

export function HalamanIndeksKartu({
  eyebrow,
  judul,
  deskripsi,
  items,
  aksiTambah,
  subnav,
  extra,
}: {
  /** Label kecil di atas judul (mis. "PPID · Keterbukaan Informasi Publik"). */
  eyebrow?: string;
  judul: string;
  deskripsi: string;
  items: KartuIndeksItem[];
  /** Area "Tambah menu baru" (hanya dirender untuk admin). */
  aksiTambah?: React.ReactNode;
  /** Bar sub-tab (mis. PpidSubnav) — dirender di bawah judul, di atas kartu. */
  subnav?: React.ReactNode;
  /** Konten tambahan setelah grid kartu, sebelum footer (mis. panduan/infografis). */
  extra?: React.ReactNode;
}) {
  // Search muncul otomatis saat kartunya banyak (mis. daftar PPID) — untuk
  // indeks kecil (mis. demografi) tidak perlu.
  const pakaiCari = items.length > 6;

  const kartuGrid = (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.href}
            data-cari={`${item.title} ${item.description}`.toLowerCase()}
            className="relative"
          >
            {item.aksi}
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 ${item.gradasi}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-primary">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-5">
                {item.stat ? (
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {item.stat}
                  </span>
                ) : (
                  <span />
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-300 group-hover:gap-2.5 group-hover:shadow-md">
                  Lihat Detail <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-slate-50/30">
      {/* Hero */}
      <div className="border-b border-slate-100 bg-gradient-to-b from-primary/[0.07] via-slate-50 to-transparent">
        <div className="container mx-auto px-4 pt-12 pb-10 md:px-8 lg:px-16 lg:pt-16">
          {eyebrow && (
            <p className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {judul}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            {deskripsi}
          </p>
          {subnav && <div className="mt-8">{subnav}</div>}
        </div>
      </div>

      {/* Kartu kategori */}
      <div className="container mx-auto px-4 py-10 md:px-8 lg:px-16">
        {pakaiCari ? (
          <IndeksSearch placeholder="Cari kategori…" total={items.length}>
            {kartuGrid}
            <p
              data-cari-kosong
              style={{ display: 'none' }}
              className="rounded-2xl border border-dashed border-slate-200 bg-white/60 px-6 py-10 text-center text-sm text-slate-500"
            >
              Tidak ada kategori yang cocok dengan pencarian Anda.
            </p>
          </IndeksSearch>
        ) : (
          kartuGrid
        )}
        {aksiTambah}
        {extra}
      </div>
      <Footer />
    </div>
  );
}
