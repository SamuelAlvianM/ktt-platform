'use client';

import { useState } from 'react';
import { Download, FileText, Images } from 'lucide-react';
import { GaleriProfilPpid } from '@/components/ppid/galeri-profil';
import type { InfoBerkas } from '@/components/shared/info-page';

/**
 * Mode "Campur" tab PPID: gambar galeri + slider (segmented) untuk berpindah
 * melihat daftar dokumen (tabel/PDF). Satu penggeser, dua panel:
 * "Galeri" (gambar) dan "Dokumen" (berkas unggahan). Untuk mengunggah dokumen
 * baru, admin cukup memakai mode "Tabel".
 */

type Tampil = 'galeri' | 'dokumen';

const TAB: { nilai: Tampil; label: string; ikon: React.ElementType }[] = [
  { nilai: 'galeri', label: 'Galeri', ikon: Images },
  { nilai: 'dokumen', label: 'Dokumen', ikon: FileText },
];

function DokumenTabel({ berkas }: { berkas: InfoBerkas[] }) {
  if (berkas.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
        Belum ada dokumen pada bagian ini.
      </p>
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <th className="px-4 py-3 font-semibold">Nama Berkas</th>
            <th className="whitespace-nowrap px-4 py-3 font-semibold">Tanggal Unggah</th>
          </tr>
        </thead>
        <tbody>
          {berkas.map((b) => (
            <tr
              key={b.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70"
            >
              <td className="px-4 py-3">
                <a
                  href={b.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  <Download className="h-4 w-4 flex-shrink-0" aria-hidden />
                  {b.judul}
                </a>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                {new Date(b.createdAt).toLocaleString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PpidCampur({ kunci, berkas }: { kunci: string; berkas: InfoBerkas[] }) {
  const [tampil, setTampil] = useState<Tampil>('galeri');
  return (
    <div>
      <div className="mb-5 inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
        {TAB.map((t) => {
          const aktif = tampil === t.nilai;
          const Ikon = t.ikon;
          return (
            <button
              key={t.nilai}
              type="button"
              onClick={() => setTampil(t.nilai)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                aktif
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Ikon className="h-4 w-4" />
              {t.label}
              {t.nilai === 'dokumen' && berkas.length > 0 && (
                <span className="ml-0.5 rounded-full bg-primary/10 px-1.5 text-[0.65rem] font-semibold text-primary">
                  {berkas.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        key={tampil}
        className="animate-in fade-in slide-in-from-right-2 duration-300"
      >
        {tampil === 'galeri' ? (
          <GaleriProfilPpid kunci={kunci} />
        ) : (
          <DokumenTabel berkas={berkas} />
        )}
      </div>
    </div>
  );
}
