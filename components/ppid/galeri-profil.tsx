'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import {
  ArrowDown,
  ArrowUp,
  CalendarDays,
  GripVertical,
  HelpCircle,
  ImagePlus,
  Images,
  Loader2,
  MoveHorizontal,
  Pencil,
  Trash2,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useInlineEdit } from '@/components/konten/inline-edit';
import { useStaticContent, refreshStaticContent } from '@/lib/use-static-content';

/**
 * Galeri gambar untuk halaman PPID (mis. "Profil PPID Pelaksana").
 *
 * Tampilan publik: gambar tampil langsung. Nama & deskripsi OPSIONAL — bila
 * kosong, fieldnya tidak dirender (tanpa " - " atau placeholder). Deskripsi
 * panjang dipangkas ~3 baris dengan tombol "Selengkapnya" beranimasi halus.
 *
 * Mode edit (admin):
 * - "Kelola Galeri": unggah gambar, isi nama/deskripsi, atur lebar & hapus.
 * - "Susun": aktifkan mode seret (drag) untuk mengubah urutan langsung di
 *   halaman; saat diaktifkan muncul tutorial beranimasi (bisa disembunyikan
 *   & dinyalakan lagi lewat tombol tanya).
 * - Jumlah kolom per baris (2/3/4) diatur lewat segmented control.
 *
 * Data disimpan sebagai StaticContent (kunci `ppid.galeri.<slug>`), berkas
 * gambar diunggah ke folder publik `ppid`.
 */

type Lebar = 1 | 2 | 'full';

interface GaleriItem {
  id: string;
  src: string;
  nama?: string;
  desc?: string;
  /** Rentang kolom: 1, 2, atau 'full' (selebar baris). */
  span?: Lebar;
  /** Tanggal unggah (ISO) — ditampilkan sebagai tanggal posting. */
  tanggal?: string;
}

/** Tanggal posting → "24 Juli 2026"; kosong bila tidak valid. */
function fmtTanggal(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const KOLOM_PILIHAN = [2, 3, 4] as const;
const TUTORIAL_OFF_KEY = 'ppid-galeri-susun-tutorial-off';

const idBaru = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `g_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const clampKolom = (n: unknown) => Math.min(4, Math.max(2, Number(n) || 2));
const spanAngka = (span: Lebar | undefined, kolom: number) =>
  span === 'full' ? kolom : Math.min(span ?? 1, kolom);

/** Deskripsi dengan pangkas ~3 baris + buka/tutup beranimasi. */
function Deskripsi({ teks }: { teks: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [buka, setBuka] = useState(false);
  const [tinggiPenuh, setTinggiPenuh] = useState(0);
  const [perluTombol, setPerluTombol] = useState(false);
  const RINGKAS = 66; // px ≈ 3 baris

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTinggiPenuh(el.scrollHeight);
    setPerluTombol(el.scrollHeight > RINGKAS + 4);
  }, [teks]);

  return (
    <div>
      <p
        ref={ref}
        className="overflow-hidden text-sm leading-relaxed text-slate-600 transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: buka ? tinggiPenuh : RINGKAS }}
      >
        {teks}
      </p>
      {perluTombol && (
        <button
          type="button"
          onClick={() => setBuka((v) => !v)}
          className="mt-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {buka ? 'Ringkas' : 'Selengkapnya'}
        </button>
      )}
    </div>
  );
}

/** Tutorial beranimasi cara menyeret gambar. */
function TutorialSusun({
  onTutup,
}: {
  onTutup: (janganTampilkanLagi: boolean) => void;
}) {
  const [jangan, setJangan] = useState(false);
  return (
    <Dialog open onOpenChange={(o) => !o && onTutup(jangan)}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MoveHorizontal className="h-5 w-5 text-primary" /> Cara Menyusun Gambar
          </DialogTitle>
        </DialogHeader>

        {/* Peraga animasi: satu kartu "terangkat" lalu berpindah posisi. */}
        <style>{`
          @keyframes galeri-demo-lift {
            0%, 12%   { transform: translateX(0) translateY(0) scale(1); box-shadow: 0 1px 2px rgba(0,0,0,.08); }
            20%, 30%  { transform: translateX(0) translateY(-6px) scale(1.06); box-shadow: 0 12px 22px rgba(0,0,0,.18); z-index: 5; }
            55%, 65%  { transform: translateX(132px) translateY(-6px) scale(1.06); box-shadow: 0 12px 22px rgba(0,0,0,.18); z-index: 5; }
            78%, 100% { transform: translateX(132px) translateY(0) scale(1); box-shadow: 0 1px 2px rgba(0,0,0,.08); }
          }
          @keyframes galeri-demo-shift {
            0%, 40%   { transform: translateX(0); }
            60%, 100% { transform: translateX(-66px); }
          }
          .galeri-demo-lift { animation: galeri-demo-lift 3.2s ease-in-out infinite; }
          .galeri-demo-shift { animation: galeri-demo-shift 3.2s ease-in-out infinite; }
        `}</style>
        <div className="flex items-center justify-center gap-3 rounded-2xl bg-slate-50 py-8">
          <div className="galeri-demo-lift flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-white">
            <GripVertical className="h-5 w-5" />
          </div>
          <div className="galeri-demo-shift h-16 w-16 rounded-lg bg-sky-200" />
          <div className="h-16 w-16 rounded-lg bg-slate-200" />
        </div>

        <p className="text-sm leading-relaxed text-slate-600">
          Di mode <b>Susun</b>, tahan lalu <b>seret</b> gambar ke posisi yang
          diinginkan, kemudian lepaskan. Urutan baru langsung tersimpan.
        </p>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <Checkbox
            checked={jangan}
            onCheckedChange={(v) => setJangan(v === true)}
          />
          Jangan tampilkan tutorial ini lagi
        </label>

        <DialogFooter>
          <Button onClick={() => onTutup(jangan)}>Mengerti</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function GaleriProfilPpid({ kunci }: { kunci: string }) {
  const { editMode } = useInlineEdit();
  const raw = useStaticContent([kunci])[kunci] as {
    items?: GaleriItem[];
    kolom?: number;
  };
  const items = useMemo<GaleriItem[]>(
    () => (Array.isArray(raw?.items) ? raw.items : []),
    [raw],
  );
  const kolom = clampKolom(raw?.kolom);
  const itemsKey = JSON.stringify(items);

  const [kelola, setKelola] = useState(false);
  const [susun, setSusun] = useState(false);
  const [tutorial, setTutorial] = useState(false);
  // Salinan lokal supaya urutan berubah mulus saat diseret sebelum tersimpan.
  const [lokal, setLokal] = useState<GaleriItem[]>(items);
  const [seret, setSeret] = useState<number | null>(null);
  const [simpanUrutan, setSimpanUrutan] = useState(false);

  useEffect(() => {
    setLokal(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsKey]);

  const tampil = susun ? lokal : items;

  const simpan = async (nextItems: GaleriItem[], nextKolom: number) => {
    const res = await fetch('/api/admin/static-content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kunci, konten: { items: nextItems, kolom: nextKolom } }),
    });
    const json = await res.json();
    if (json.error?.length) {
      toast.error(json.error[0]);
      return false;
    }
    refreshStaticContent();
    return true;
  };

  const gantiKolom = async (k: number) => {
    await simpan(items, k);
  };

  const nyalakanSusun = () => {
    setSusun(true);
    const off =
      typeof window !== 'undefined' &&
      window.localStorage.getItem(TUTORIAL_OFF_KEY) === '1';
    if (!off) setTutorial(true);
  };

  const tutupTutorial = (janganLagi: boolean) => {
    if (janganLagi && typeof window !== 'undefined') {
      window.localStorage.setItem(TUTORIAL_OFF_KEY, '1');
    }
    setTutorial(false);
  };

  const bukaTutorialManual = () => {
    // Tombol tanya selalu bisa menampilkan tutorial lagi.
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(TUTORIAL_OFF_KEY);
    }
    setTutorial(true);
  };

  // ── Drag & drop urutan (mode Susun) ──
  const onDragStart = (i: number) => setSeret(i);
  const onDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault();
    if (seret === null || seret === i) return;
    setLokal((prev) => {
      const a = [...prev];
      const [m] = a.splice(seret, 1);
      a.splice(i, 0, m);
      return a;
    });
    setSeret(i);
  };
  const selesaiSeret = async () => {
    if (seret === null) return;
    setSeret(null);
    setSimpanUrutan(true);
    await simpan(lokal, kolom);
    setSimpanUrutan(false);
  };

  // Sembunyikan seluruh blok bila kosong & bukan mode edit — tanpa sisa.
  if (items.length === 0 && !editMode) return null;

  const gridStyle = { ['--k']: kolom } as React.CSSProperties;

  return (
    <section className="mt-8">
      {editMode && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Images className="h-4 w-4 text-primary" /> Galeri Gambar
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {/* Jumlah kolom per baris */}
            {items.length > 0 && (
              <div className="flex items-center gap-1 rounded-lg border border-slate-200 p-0.5">
                <span className="px-1.5 text-[0.7rem] font-medium text-slate-400">
                  Kolom
                </span>
                {KOLOM_PILIHAN.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => gantiKolom(k)}
                    className={`h-6 w-6 rounded-md text-xs font-semibold transition-colors ${
                      kolom === k
                        ? 'bg-primary text-primary-foreground'
                        : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            )}

            {/* Toggle mode Susun + tombol tutorial */}
            {items.length > 1 && (
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant={susun ? 'default' : 'outline'}
                  onClick={() => (susun ? setSusun(false) : nyalakanSusun())}
                >
                  <GripVertical className="mr-1.5 h-4 w-4" />
                  {susun ? 'Selesai Susun' : 'Susun'}
                </Button>
                {susun && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-slate-500"
                    onClick={bukaTutorialManual}
                    aria-label="Tampilkan tutorial menyusun"
                  >
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}

            <Button size="sm" variant="outline" onClick={() => setKelola(true)}>
              <Pencil className="mr-1.5 h-4 w-4" /> Kelola Galeri
            </Button>
          </div>
        </div>
      )}

      {susun && (
        <p className="mb-3 flex items-center gap-1.5 text-xs text-primary">
          {simpanUrutan ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <MoveHorizontal className="h-3.5 w-3.5" />
          )}
          {simpanUrutan
            ? 'Menyimpan urutan…'
            : 'Seret gambar untuk mengubah urutannya.'}
        </p>
      )}

      {items.length === 0 ? (
        editMode && (
          <button
            type="button"
            onClick={() => setKelola(true)}
            className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 py-12 text-slate-400 transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ImagePlus className="h-8 w-8" />
            <span className="text-sm">Belum ada gambar. Klik untuk menambah.</span>
          </button>
        )
      ) : (
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:[grid-template-columns:repeat(var(--k),minmax(0,1fr))]"
          style={gridStyle}
        >
          {tampil.map((it, i) => (
            <figure
              key={it.id}
              draggable={susun}
              onDragStart={() => onDragStart(i)}
              onDragOver={(e) => onDragOver(e, i)}
              onDragEnd={selesaiSeret}
              onDrop={selesaiSeret}
              style={{ gridColumn: `span ${spanAngka(it.span, kolom)}` }}
              className={`animate-in fade-in slide-in-from-bottom-2 overflow-hidden rounded-md border bg-white shadow-sm duration-500 ${
                susun
                  ? 'cursor-grab border-primary/40 ring-1 ring-primary/20 active:cursor-grabbing'
                  : 'border-slate-200/70'
              } ${seret === i ? 'opacity-60' : ''}`}
            >
              <div className="relative">
                {/* Gambar unggahan runtime → <img> biasa (bukan next/image). */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={it.src}
                  alt={it.nama || 'Gambar galeri PPID'}
                  className="h-auto w-full"
                  draggable={false}
                  loading="lazy"
                />
                {susun && (
                  <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2 py-1 text-[0.65rem] font-medium text-white">
                    <GripVertical className="h-3.5 w-3.5" /> Seret
                  </span>
                )}
              </div>
              {(it.nama || it.desc || it.tanggal) && (
                <figcaption className="space-y-1.5 p-4">
                  {it.nama && (
                    <h3 className="font-semibold text-slate-900">{it.nama}</h3>
                  )}
                  {fmtTanggal(it.tanggal) && (
                    <p className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {fmtTanggal(it.tanggal)}
                    </p>
                  )}
                  {it.desc && <Deskripsi teks={it.desc} />}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {tutorial && <TutorialSusun onTutup={tutupTutorial} />}

      {kelola && (
        <PanelKelola
          kunci={kunci}
          awal={items}
          kolom={kolom}
          onTutupTanpaSimpan={() => setKelola(false)}
          onSelesai={() => setKelola(false)}
          simpan={simpan}
        />
      )}
    </section>
  );
}

/** Panel/dialog pengelolaan galeri (unggah, nama/desc, lebar, urutan, hapus). */
function PanelKelola({
  kunci,
  awal,
  kolom,
  onTutupTanpaSimpan,
  onSelesai,
  simpan,
}: {
  kunci: string;
  awal: GaleriItem[];
  kolom: number;
  onTutupTanpaSimpan: () => void;
  onSelesai: () => void;
  simpan: (items: GaleriItem[], kolom: number) => Promise<boolean>;
}) {
  const [draft, setDraft] = useState<GaleriItem[]>(() =>
    awal.map((i) => ({ ...i })),
  );
  const [mengunggah, setMengunggah] = useState(false);
  const [menyimpan, setMenyimpan] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const ubah = (id: string, patch: Partial<GaleriItem>) =>
    setDraft((d) => d.map((it) => (it.id === id ? { ...it, ...patch } : it)));

  const hapus = (id: string) => setDraft((d) => d.filter((it) => it.id !== id));

  const geser = (i: number, arah: -1 | 1) => {
    setDraft((d) => {
      const j = i + arah;
      if (j < 0 || j >= d.length) return d;
      const salin = [...d];
      [salin[i], salin[j]] = [salin[j], salin[i]];
      return salin;
    });
  };

  const pilihBerkas = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = '';
    if (files.length === 0) return;
    setMengunggah(true);
    try {
      for (const file of files) {
        if (!file.type.startsWith('image/')) {
          toast.error(`"${file.name}" bukan gambar, dilewati.`);
          continue;
        }
        const fd = new FormData();
        fd.append('file', file);
        fd.append('folder', 'ppid');
        const res = await fetch('/api/upload', { method: 'POST', body: fd });
        const json = await res.json();
        if (json.error?.length || !json.data?.url) {
          toast.error(json.error?.[0] ?? `Gagal mengunggah "${file.name}".`);
          continue;
        }
        setDraft((d) => [
          ...d,
          {
            id: idBaru(),
            src: json.data.url as string,
            // Tanggal posting = saat gambar diunggah.
            tanggal: new Date().toISOString(),
          },
        ]);
      }
    } finally {
      setMengunggah(false);
    }
  };

  const LEBAR_PILIHAN: { nilai: Lebar; label: string }[] = [
    { nilai: 1, label: '1 kolom' },
    { nilai: 2, label: '2 kolom' },
    { nilai: 'full', label: 'Penuh' },
  ];

  const simpanSemua = async () => {
    setMenyimpan(true);
    try {
      // Normalkan: buang nama/desc kosong & span default supaya tampilan bersih.
      const items = draft.map((it) => ({
        id: it.id,
        src: it.src,
        ...(it.nama?.trim() ? { nama: it.nama.trim() } : {}),
        ...(it.desc?.trim() ? { desc: it.desc.trim() } : {}),
        ...(it.span && it.span !== 1 ? { span: it.span } : {}),
        ...(it.tanggal ? { tanggal: it.tanggal } : {}),
      }));
      const ok = await simpan(items, kolom);
      if (ok) {
        toast.success('Galeri disimpan');
        onSelesai();
      }
    } catch {
      toast.error('Gagal menyimpan galeri, coba lagi.');
    } finally {
      setMenyimpan(false);
    }
  };

  return (
    <Dialog open onOpenChange={(o) => !o && onTutupTanpaSimpan()}>
      <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Images className="h-5 w-5 text-primary" /> Kelola Galeri Gambar
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {draft.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-300 py-8 text-center text-sm text-slate-400">
              Belum ada gambar. Unggah gambar untuk memulai.
            </p>
          ) : (
            <ul className="space-y-3">
              {draft.map((it, i) => (
                <li
                  key={it.id}
                  className="flex gap-3 rounded-xl border border-slate-200 p-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.src}
                    alt=""
                    className="h-20 w-20 shrink-0 rounded-lg border border-slate-200 object-cover"
                  />
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="space-y-1">
                      <Label className="text-[0.7rem] text-slate-500">
                        Nama (opsional)
                      </Label>
                      <Input
                        value={it.nama ?? ''}
                        onChange={(e) => ubah(it.id, { nama: e.target.value })}
                        placeholder="mis. Struktur PPID"
                        className="h-8"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[0.7rem] text-slate-500">
                        Deskripsi (opsional)
                      </Label>
                      <Textarea
                        value={it.desc ?? ''}
                        onChange={(e) => ubah(it.id, { desc: e.target.value })}
                        placeholder="Keterangan singkat gambar…"
                        rows={2}
                      />
                    </div>
                    {/* Lebar gambar (stretch) */}
                    <div className="flex items-center gap-2">
                      <span className="text-[0.7rem] text-slate-500">Lebar</span>
                      <div className="flex gap-1">
                        {LEBAR_PILIHAN.map((l) => (
                          <button
                            key={String(l.nilai)}
                            type="button"
                            onClick={() => ubah(it.id, { span: l.nilai })}
                            className={`rounded-md border px-2 py-0.5 text-[0.7rem] font-medium transition-colors ${
                              (it.span ?? 1) === l.nilai
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-slate-200 text-slate-500 hover:border-primary/40'
                            }`}
                          >
                            {l.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7"
                      disabled={i === 0}
                      onClick={() => geser(i, -1)}
                      aria-label="Naikkan urutan"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7"
                      disabled={i === draft.length - 1}
                      onClick={() => geser(i, 1)}
                      aria-label="Turunkan urutan"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => hapus(it.id)}
                      aria-label="Hapus gambar"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              onChange={pilihBerkas}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => fileRef.current?.click()}
              disabled={mengunggah}
              className="w-full border-dashed"
            >
              {mengunggah ? (
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
              ) : (
                <ImagePlus className="mr-1.5 h-4 w-4" />
              )}
              {mengunggah ? 'Mengunggah…' : 'Tambah Gambar'}
            </Button>
            <p className="mt-1.5 text-[0.7rem] text-muted-foreground">
              Format JPG/PNG, maksimal 5 MB per gambar. Bisa memilih beberapa sekaligus.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onTutupTanpaSimpan} disabled={menyimpan}>
            Batal
          </Button>
          <Button onClick={simpanSemua} disabled={menyimpan || mengunggah}>
            {menyimpan && <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />}
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
