import { prisma } from '@/lib/prisma';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/shared/footer';
import { PpidSubnav } from '@/components/ppid/ppid-subnav';
import { EditableInfoPage } from '@/components/shared/editable-info-page';
import { LAYANAN_PPID_TABS } from '@/lib/ppid-informasi';
import { infoBlockKey } from '@/lib/static-content-registry';
import type { InfoBerkas, InfoPageContent } from '@/components/shared/info-page';

/**
 * Kerangka halaman "Layanan & Formulir PPID" yang isinya BEBERAPA seksi editable
 * dalam satu halaman (mis. Formulir PPID = Permohonan + Keberatan; Register =
 * Permintaan Informasi + Keberatan). Tiap seksi memakai `EditableInfoPage`
 * varian `section` sehingga admin bisa mengubah judul/deskripsi/gambar dan
 * mengunggah PDF-nya sendiri — persis seperti halaman info PPID lain, hanya
 * ditumpuk. Halaman satu-seksi cukup pakai catch-all /ppid/[...slug].
 */

export interface PpidSeksi {
  /** Slug unik untuk kunci konten editable `info.ppid.<slug>`. Tidak boleh
   *  bentrok dengan slug halaman PPID lain. */
  slug: string;
  fallback: InfoPageContent;
  /** Kategori dokumen (t_produk.jenis) untuk unggah PDF seksi ini. */
  dokumenJenis: string;
}

export async function PpidLayananHalaman({
  eyebrow = 'PPID · Layanan & Formulir',
  judul,
  deskripsi,
  seksi,
  duaKolom = false,
}: {
  eyebrow?: string;
  judul: string;
  deskripsi: string;
  seksi: PpidSeksi[];
  /** true → seksi disusun 2 kolom (masing-masing w-1/2) dalam satu baris di
   *  layar md+; default menumpuk vertikal. Cocok utk seksi ringkas tanpa
   *  gambar besar (mis. Register). */
  duaKolom?: boolean;
}) {
  // Ambil berkas semua kategori sekaligus, lalu kelompokkan per `jenis`.
  const semuaJenis = seksi.map((s) => s.dokumenJenis);
  const rows = semuaJenis.length
    ? await prisma.produk.findMany({
        where: { jenis: { in: semuaJenis }, file: { not: null } },
        orderBy: { createdAt: 'desc' },
        select: { id: true, judul: true, file: true, createdAt: true, jenis: true },
      })
    : [];
  const berkasByJenis = new Map<string, InfoBerkas[]>();
  for (const s of seksi) berkasByJenis.set(s.dokumenJenis, []);
  for (const r of rows) {
    berkasByJenis.get(r.jenis)?.push({
      id: r.id,
      judul: r.judul,
      file: r.file as string,
      createdAt: r.createdAt.toISOString(),
    });
  }

  return (
    <div className="relative min-h-screen bg-slate-50/30">
      {/* Hero + subnav grup */}
      <div className="border-b border-slate-100 bg-gradient-to-b from-primary/[0.07] via-slate-50 to-transparent">
        <div className="container mx-auto px-4 pt-12 pb-10 md:px-8 lg:px-16 lg:pt-16">
          <p className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {judul}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            {deskripsi}
          </p>
          <div className="mt-8">
            <PpidSubnav items={LAYANAN_PPID_TABS} layoutId="layanan-ppid" />
          </div>
        </div>
      </div>

      {/* Seksi-seksi editable */}
      <div
        className={cn(
          'container mx-auto px-4 py-10 md:px-8 lg:px-16',
          duaKolom
            ? 'grid grid-cols-1 items-start gap-6 md:grid-cols-2'
            : 'space-y-8',
        )}
      >
        {seksi.map((s) => (
          <EditableInfoPage
            key={s.slug}
            variant="section"
            kunci={infoBlockKey('ppid', s.slug)}
            fallback={s.fallback}
            berkas={berkasByJenis.get(s.dokumenJenis) ?? []}
            dokumenJenis={s.dokumenJenis}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
