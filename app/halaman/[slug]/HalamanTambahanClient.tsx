'use client';

import { useStaticContent } from '@/lib/use-static-content';
import { EditableBlock } from '@/components/konten/inline-edit';
import { kunciHalamanTambahan } from '@/lib/navigasi-tambahan';

/**
 * Isi halaman yang dibuat lewat editor Menu Navigasi.
 * Kontennya diedit di tempat (inline) oleh admin, pola sama dengan halaman
 * info lain — jadi begitu sub-menu dibuat, halamannya langsung bisa diisi.
 */
export function HalamanTambahanClient({
  slug,
  judulCadangan,
}: {
  slug: string;
  judulCadangan: string;
}) {
  const kunci = kunciHalamanTambahan(slug);
  const data = useStaticContent([kunci])[kunci] as {
    title?: string;
    intro?: string;
    html?: string;
  };

  const judul = data?.title?.trim() || judulCadangan;
  const adaIsi = Boolean(data?.intro?.trim() || data?.html?.trim());

  return (
    <EditableBlock kunci={kunci} label="Konten Halaman">
      <article className="prose prose-slate max-w-none">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">{judul}</h1>

        {data?.intro?.trim() && (
          <p className="lead text-slate-600">{data.intro}</p>
        )}

        {data?.html?.trim() && (
          <div dangerouslySetInnerHTML={{ __html: data.html }} />
        )}

        {!adaIsi && (
          // Halaman baru selalu lahir kosong — beri petunjuk alih-alih layar
          // hampa, supaya admin tahu langkah berikutnya.
          <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center text-sm text-slate-500">
            Halaman ini belum berisi. Petugas dapat mengisinya lewat tombol
            edit di dashboard.
          </p>
        )}
      </article>
    </EditableBlock>
  );
}
