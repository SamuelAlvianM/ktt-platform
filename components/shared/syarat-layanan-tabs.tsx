"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ListChecks,
  ClipboardList,
  Info,
  FileStack,
  X,
} from "lucide-react";
import { useStaticContent } from "@/lib/use-static-content";
import { SYARAT_KATEGORI, type LayananSyarat } from "@/lib/syarat-layanan";

/**
 * Persyaratan per layanan — tab (dikelompokkan per kategori) yang bisa dicari.
 * Klik tab → tampil Persyaratan + Penjelasan (+ Catatan) layanan tsb.
 * Data dari blok `info.syarat-layanan` (default lib/syarat-layanan.ts).
 */
export function SyaratLayananTabs() {
  const data = useStaticContent(["info.syarat-layanan"])[
    "info.syarat-layanan"
  ] as { layanan?: LayananSyarat[] };
  const layanan = useMemo<LayananSyarat[]>(
    () => (Array.isArray(data?.layanan) ? data.layanan : []),
    [data],
  );

  const [query, setQuery] = useState("");
  const [aktifId, setAktifId] = useState<string>("");

  const cocok = (l: LayananSyarat) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    if (l.nama.toLowerCase().includes(q)) return true;
    return l.kasus.some(
      (k) =>
        (k.judul ?? "").toLowerCase().includes(q) ||
        k.persyaratan.some((p) => p.toLowerCase().includes(q)) ||
        (k.penjelasan ?? []).some((p) => p.toLowerCase().includes(q)),
    );
  };

  const terfilter = useMemo(
    () => layanan.filter(cocok),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [layanan, query],
  );

  // Layanan aktif: pilihan pengguna bila masih ada di hasil filter, jika tidak
  // pakai hasil pertama.
  const aktif =
    terfilter.find((l) => l.id === aktifId) ?? terfilter[0] ?? null;

  // Kelompokkan hasil filter per kategori (urutan mengikuti SYARAT_KATEGORI).
  const grup = useMemo(() => {
    const g: Record<string, LayananSyarat[]> = {};
    for (const l of terfilter) (g[l.kategori] ??= []).push(l);
    return g;
  }, [terfilter]);

  if (layanan.length === 0) return null;

  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
          <FileStack className="h-4 w-4 text-primary" aria-hidden />
        </span>
        <h2 className="text-sm font-bold uppercase tracking-wide text-primary">
          Persyaratan per Layanan
        </h2>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">
        Pilih layanan untuk melihat persyaratan dan penjelasannya. Ketik untuk
        mencari layanan.
      </p>

      {/* Pencarian */}
      <div className="relative mb-5">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari layanan… (mis. Kartu Keluarga, Akta Kelahiran, KTP)"
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-9 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            aria-label="Bersihkan pencarian"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {terfilter.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-200 py-8 text-center text-sm text-slate-400">
          Layanan “{query}” tidak ditemukan.
        </p>
      ) : (
        <>
          {/* Tab layanan (dikelompokkan per kategori) */}
          <div className="mb-6 space-y-3">
            {Object.keys(SYARAT_KATEGORI)
              .filter((kat) => grup[kat]?.length)
              .map((kat) => (
                <div key={kat}>
                  <p className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
                    {SYARAT_KATEGORI[kat]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {grup[kat].map((l) => {
                      const on = aktif?.id === l.id;
                      return (
                        <button
                          key={l.id}
                          type="button"
                          onClick={() => setAktifId(l.id)}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                            on
                              ? "border-primary bg-primary text-primary-foreground shadow-sm"
                              : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                          }`}
                        >
                          {l.nama}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>

          {/* Isi layanan aktif */}
          {aktif && (
            <div
              key={aktif.id}
              className="animate-in fade-in slide-in-from-bottom-2 space-y-4 duration-300"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {aktif.nama}
              </h3>
              {aktif.kasus.map((k, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 md:p-5 dark:border-slate-800 dark:bg-slate-900/40"
                >
                  {k.judul && (
                    <h4 className="mb-3 text-sm font-bold text-slate-800 dark:text-slate-100">
                      {k.judul}
                    </h4>
                  )}

                  <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary">
                    <ListChecks className="h-3.5 w-3.5" /> Persyaratan
                  </p>
                  <ul className="mb-4 space-y-1.5">
                    {k.persyaratan.map((p, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {k.penjelasan && k.penjelasan.length > 0 && (
                    <>
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary">
                        <ClipboardList className="h-3.5 w-3.5" /> Penjelasan
                      </p>
                      <ol className="mb-3 space-y-1.5">
                        {k.penjelasan.map((p, j) => (
                          <li
                            key={j}
                            className="flex gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                          >
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-[0.7rem] font-bold text-primary">
                              {j + 1}
                            </span>
                            {p}
                          </li>
                        ))}
                      </ol>
                    </>
                  )}

                  {k.catatan && k.catatan.length > 0 && (
                    <div className="mt-3 flex gap-2 rounded-xl border border-amber-200/70 bg-amber-50/70 p-3 dark:border-amber-900/40 dark:bg-amber-950/20">
                      <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                      <ul className="space-y-1 text-[0.78rem] leading-relaxed text-amber-800 dark:text-amber-300">
                        {k.catatan.map((c, j) => (
                          <li key={j}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
