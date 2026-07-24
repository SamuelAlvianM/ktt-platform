'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import {
  ArrowDown,
  ArrowUp,
  CalendarDays,
  ExternalLink,
  GripVertical,
  HelpCircle,
  ImagePlus,
  Images,
  Link2,
  Loader2,
  MoveHorizontal,
  Pencil,
  Plus,
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

/** Tautan terkait: yang tampil adalah judul, klik → buka `url` di tab baru. */
interface LinkItem {
  id: string;
  judul: string;
  url: string;
}

/** Lengkapi URL tanpa skema agar aman dibuka di tab baru (mis. "disdukcapil.go.id"). */
function rapikanUrl(url: string): string {
  const u = url.trim();
  if (!u) return '';
  if (/^(https?:|mailto:|tel:)/i.test(u)) return u;
  if (u.startsWith('/')) return u; // tautan internal
  return `https://${u}`;
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

/** Daftar tautan terkait — tampil sebagai chip judul, klik → buka di tab baru. */
function TautanTerkait({ links }: { links: LinkItem[] }) {
  if (links.length === 0) return null;
  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <h3 className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
        <Link2 className="h-4 w-4 text-primary" /> Tautan Terkait
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {links.map((l) => (
          <a
            key={l.id}
            href={rapikanUrl(l.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-white px-4 py-2.5 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/5"
          >
            {l.judul || l.url}
            <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export function GaleriProfilPpid({ kunci }: { kunci: string }) {
  const { editMode } = useInlineEdit();
  const raw = useStaticContent([kunci])[kunci] as {
    items?: GaleriItem[];
    kolom?: number;
    links?: LinkItem[];
    [k: string]: unknown;
  };
  const items = useMemo<GaleriItem[]>(
    () => (Array.isArray(raw?.items) ? raw.items : []),
    [raw],
  );
  const links = useMemo<LinkItem[]>(
    () => (Array.isArray(raw?.links) ? raw.links : []),
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

  // Simpan HANYA sebagian konten (merge dengan sisa data seperti mode &
  // sembunyikanKonten) supaya penyimpanan galeri tidak menghapus pilihan mode.
  const simpanPatch = async (patch: Record<string, unknown>) => {
    const res = await fetch('/api/admin/static-content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kunci, konten: { ...raw, ...patch } }),
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
    await simpanPatch({ kolom: k });
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
    await simpanPatch({ items: lokal });
    setSimpanUrutan(false);
  };

  // Sembunyikan seluruh blok bila kosong (tanpa gambar & tautan) & bukan mode
  // edit — tanpa sisa.
  if (items.length === 0 && links.length === 0 && !editMode) return null;

  const gridStyle = { ['--k']: kolom } as React.CSSProperties;

  return (
    <section className="mt-8">
      {editMode && (
        <div className="mb-4 flex flex-wrap items-center justify-end gap-3">
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

      <TautanTerkait links={links} />

      {tutorial && <TutorialSusun onTutup={tutupTutorial} />}

      {kelola && (
        <PanelKelola
          kunci={kunci}
          awal={items}
          awalLinks={links}
          onTutupTanpaSimpan={() => setKelola(false)}
          onSelesai={() => setKelola(false)}
          simpanPatch={simpanPatch}
        />
      )}
    </section>
  );
}

/** Panel/dialog pengelolaan galeri (unggah gambar, nama/desc, lebar, urutan,
 *  hapus) + daftar tautan terkait (judul + URL). */
function PanelKelola({
  kunci,
  awal,
  awalLinks,
  onTutupTanpaSimpan,
  onSelesai,
  simpanPatch,
}: {
  kunci: string;
  awal: GaleriItem[];
  awalLinks: LinkItem[];
  onTutupTanpaSimpan: () => void;
  onSelesai: () => void;
  simpanPatch: (patch: Record<string, unknown>) => Promise<boolean>;
}) {
  const [draft, setDraft] = useState<GaleriItem[]>(() =>
    awal.map((i) => ({ ...i })),
  );
  const [draftLinks, setDraftLinks] = useState<LinkItem[]>(() =>
    awalLinks.map((l) => ({ ...l })),
  );
  const [mengunggah, setMengunggah] = useState(false);
  const [menyimpan, setMenyimpan] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const ubah = (id: string, patch: Partial<GaleriItem>) =>
    setDraft((d) => d.map((it) => (it.id === id ? { ...it, ...patch } : it)));

  const hapus = (id: string) => setDraft((d) => d.filter((it) => it.id !== id));

  // ── Tautan ──
  const tambahLink = () =>
    setDraftLinks((l) => [...l, { id: idBaru(), judul: '', url: '' }]);
  const ubahLink = (id: string, patch: Partial<LinkItem>) =>
    setDraftLinks((l) => l.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  const hapusLink = (id: string) =>
    setDraftLinks((l) => l.filter((it) => it.id !== id));
  const geserLink = (i: number, arah: -1 | 1) => {
    setDraftLinks((l) => {
      const j = i + arah;
      if (j < 0 || j >= l.length) return l;
      const salin = [...l];
      [salin[i], salin[j]] = [salin[j], salin[i]];
      return salin;
    });
  };

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
      // Tautan tanpa URL dibuang; judul kosong → pakai URL sebagai label.
      const links = draftLinks
        .map((l) => ({ id: l.id, judul: l.judul.trim(), url: l.url.trim() }))
        .filter((l) => l.url);
      const ok = await simpanPatch({ items, links });
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

          {/* ── Tautan terkait ── */}
          <div className="border-t border-slate-100 pt-4">
            <div className="mb-2 flex items-center gap-2">
              <Link2 className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-slate-800">Tautan Terkait</h3>
            </div>
            <p className="mb-3 text-[0.7rem] text-muted-foreground">
              Yang tampil adalah <b>judul</b>; saat diklik akan membuka URL di tab baru.
            </p>

            {draftLinks.length > 0 && (
              <ul className="mb-3 space-y-2">
                {draftLinks.map((l, i) => (
                  <li
                    key={l.id}
                    className="flex items-start gap-2 rounded-xl border border-slate-200 p-2.5"
                  >
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <Input
                        value={l.judul}
                        onChange={(e) => ubahLink(l.id, { judul: e.target.value })}
                        placeholder="Judul tautan (mis. Portal Resmi)"
                        className="h-8"
                      />
                      <Input
                        value={l.url}
                        onChange={(e) => ubahLink(l.id, { url: e.target.value })}
                        placeholder="https://…"
                        className="h-8"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7"
                        disabled={i === 0}
                        onClick={() => geserLink(i, -1)}
                        aria-label="Naikkan urutan tautan"
                      >
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7"
                        disabled={i === draftLinks.length - 1}
                        onClick={() => geserLink(i, 1)}
                        aria-label="Turunkan urutan tautan"
                      >
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        onClick={() => hapusLink(l.id)}
                        aria-label="Hapus tautan"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <Button
              type="button"
              variant="outline"
              onClick={tambahLink}
              className="w-full border-dashed"
            >
              <Plus className="mr-1.5 h-4 w-4" /> Tambah Tautan
            </Button>
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
