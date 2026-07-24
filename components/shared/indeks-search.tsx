'use client';

import { useEffect, useRef, useState } from 'react';
import { LayoutGrid, Search, X } from 'lucide-react';

/**
 * Kotak pencarian ringan untuk halaman indeks kartu.
 *
 * Alih-alih mengangkat data kartu ke client (ikon tiap kartu adalah komponen —
 * tak bisa diserialisasi lintas batas server/client), komponen ini menyaring
 * langsung DOM: tiap kartu server-render diberi atribut `data-cari` berisi teks
 * (judul + deskripsi) huruf kecil, lalu input di sini menampilkan/menyembunyikan
 * kartu sesuai kata kunci. Elemen ber-atribut `data-cari-kosong` ditampilkan
 * ketika tidak ada kartu yang cocok.
 */
export function IndeksSearch({
  children,
  placeholder = 'Cari…',
  label = 'Daftar Kategori',
  total,
}: {
  children: React.ReactNode;
  placeholder?: string;
  /** Judul kecil di kiri header (mis. "Daftar Kategori"). */
  label?: string;
  /** Jumlah total kartu — ditampilkan sebagai lencana di samping judul. */
  total?: number;
}) {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const term = q.trim().toLowerCase();
    let terlihat = 0;
    root.querySelectorAll<HTMLElement>('[data-cari]').forEach((el) => {
      const cocok = !term || (el.dataset.cari ?? '').includes(term);
      el.style.display = cocok ? '' : 'none';
      if (cocok) terlihat += 1;
    });
    const kosong = root.querySelector<HTMLElement>('[data-cari-kosong]');
    if (kosong) kosong.style.display = terlihat === 0 ? '' : 'none';
  }, [q]);

  return (
    <div>
      {/* Header seksi: judul + jumlah di kiri, kotak cari di kanan — supaya
          input tidak tampak "menggantung" sendirian di atas grid. */}
      <div className="mb-6 flex flex-col gap-3 border-b border-slate-200/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold text-slate-800">{label}</h2>
          {typeof total === 'number' && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
              {total}
            </span>
          )}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-700 shadow-sm outline-none transition-colors placeholder:text-slate-400 focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ('')}
              aria-label="Hapus pencarian"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      <div ref={ref}>{children}</div>
    </div>
  );
}
