'use client';

import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Footer } from '@/components/shared/footer';
import { Images, X, Plus, Trash2, Loader2, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ImagePickerField } from '@/components/media/image-picker-field';
import { useInlineEdit } from '@/components/konten/inline-edit';
import { useStaticContent, refreshStaticContent } from '@/lib/use-static-content';

/** Kategori bawaan; admin tetap boleh membuat kategori lain. */
const KATEGORI_BAWAAN = ['PELAYANAN', 'BUPATI'];

/** Radix SelectItem tidak boleh bernilai "" → pakai sentinel. */
const SENTINEL_TANPA = '__tanpa__';
const SENTINEL_BARU = '__baru__';

/** Urutan tampilan galeri. */
const URUTAN = [
  { nilai: 'terbaru', label: 'Terbaru' },
  { nilai: 'terlama', label: 'Terlama' },
  { nilai: 'judul', label: 'Judul A–Z' },
] as const;
type Urutan = (typeof URUTAN)[number]['nilai'];

/**
 * Jumlah kolom grid, disimpan sebagai StaticContent supaya pilihan admin
 * berlaku juga untuk pengunjung — bukan cuma di layar admin.
 * Pola & rentangnya mengikuti galeri PPID (components/ppid/galeri-profil.tsx).
 */
const KUNCI_TAMPILAN = 'galeri.tampilan';
const KOLOM_PILIHAN = [2, 3, 4] as const;
const clampKolom = (n: unknown) => Math.min(4, Math.max(2, Number(n) || 4));

interface GalleryItem {
  id: number;
  judul: string;
  gambar: string;
  kategori: string | null;
  createdAt: string;
}

export default function GaleriPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('Semua');
  const [urutan, setUrutan] = useState<Urutan>('terbaru');

  // ── Mode Edit: tambah/hapus foto langsung dari halaman ini ──
  // Sebelumnya foto HANYA bisa diunggah lewat Dashboard → Galeri, sehingga di
  // Mode Edit halaman ini tidak ada tombol apa pun dan terkesan tidak bisa
  // diisi. `editMode` sudah dijaga InlineEditProvider: hanya admin level 1 di
  // halaman publik — sama dengan syarat POST /api/galeri & DELETE-nya.
  const { editMode } = useInlineEdit();
  const [formBuka, setFormBuka] = useState(false);
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('');
  /** true = admin sedang mengetik kategori baru, bukan memilih yang sudah ada. */
  const [kategoriLain, setKategoriLain] = useState(false);
  const [gambar, setGambar] = useState('');
  const [menyimpan, setMenyimpan] = useState(false);
  const [menghapusId, setMenghapusId] = useState<number | null>(null);

  // Jumlah kolom grid — tersimpan, jadi pilihan admin ikut terlihat pengunjung.
  const tampilan = useStaticContent([KUNCI_TAMPILAN])[KUNCI_TAMPILAN] as
    | { kolom?: number }
    | undefined;
  const kolom = clampKolom(tampilan?.kolom);

  const gantiKolom = async (k: number) => {
    const res = await fetch('/api/admin/static-content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kunci: KUNCI_TAMPILAN, konten: { ...tampilan, kolom: k } }),
    });
    const j = await res.json();
    if (j.error?.length) {
      toast.error(j.error[0]);
      return;
    }
    refreshStaticContent();
  };

  const muat = useCallback(() => {
    setIsLoading(true);
    fetch('/api/galeri')
      .then((r) => r.json())
      .then((j) => setItems(j.data?.items ?? []))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    muat();
  }, [muat]);

  const bukaForm = () => {
    setJudul('');
    setKategori('');
    setKategoriLain(false);
    setGambar('');
    setFormBuka(true);
  };

  const simpan = async () => {
    if (!judul.trim() || !gambar) {
      toast.error('Judul dan foto wajib diisi');
      return;
    }
    setMenyimpan(true);
    try {
      const res = await fetch('/api/galeri', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // "Tanpa kategori" dikirim sebagai STRING KOSONG, bukan null.
        // Kolom `Gallery.kategori` di skema NOT NULL (`String @default("PELAYANAN")`),
        // jadi null ditolak Prisma → 500. Mengosongkannya juga tidak boleh
        // dihilangkan dari payload, karena default skema akan diam-diam
        // menandainya "PELAYANAN" — foto tanpa kategori jadi salah kelompok.
        // String kosong disaring di sisi tampilan (lihat `kategoriTerpakai`),
        // sehingga foto itu hanya muncul di "Semua".
        body: JSON.stringify({
          judul: judul.trim(),
          kategori: kategori.trim(),
          gambar,
        }),
      });
      const j = await res.json();
      if (j.error?.length) {
        toast.error(j.error[0]);
        return;
      }
      toast.success(j.success?.[0] ?? 'Foto ditambahkan');
      setFormBuka(false);
      muat();
    } finally {
      setMenyimpan(false);
    }
  };

  const hapus = async (item: GalleryItem) => {
    if (!confirm(`Hapus foto "${item.judul}" dari galeri?`)) return;
    setMenghapusId(item.id);
    try {
      const res = await fetch(`/api/admin/galeri/${item.id}`, { method: 'DELETE' });
      const j = await res.json();
      if (j.error?.length) {
        toast.error(j.error[0]);
        return;
      }
      toast.success('Foto dihapus');
      setItems((prev) => prev.filter((i) => i.id !== item.id));
    } finally {
      setMenghapusId(null);
    }
  };

  // Foto TANPA kategori tidak lagi membentuk kelompok "Umum" sendiri — ia cukup
  // ikut "Semua". Kategori memang cuma alat pengelompokan, bukan keharusan.
  const kategoriTerpakai = Array.from(
    new Set(items.map((i) => i.kategori?.trim()).filter(Boolean) as string[]),
  ).sort((a, b) => a.localeCompare(b, 'id'));
  const categories = ['Semua', ...kategoriTerpakai];

  const disaring =
    filter === 'Semua' ? items : items.filter((i) => (i.kategori ?? '') === filter);

  const filtered = [...disaring].sort((a, b) => {
    if (urutan === 'judul') return a.judul.localeCompare(b.judul, 'id');
    const selisih =
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return urutan === 'terbaru' ? selisih : -selisih;
  });

  // Pilihan kategori di form: bawaan + yang sudah dipakai, tanpa duplikat.
  const saranKategori = Array.from(
    new Set([...KATEGORI_BAWAAN, ...kategoriTerpakai]),
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl glass-card-blue flex items-center justify-center">
              <Images className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Galeri</h1>
              <p className="text-primary-foreground/80 mt-1">Dokumentasi kegiatan Disdukcapil Kabupaten Tana Tidung</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Batang aksi Mode Edit — hanya tampil untuk admin yang menyalakan
            Mode Edit; warga tidak pernah melihatnya. */}
        {editMode && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 px-4 py-3">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-primary">Mode Edit aktif.</span>{' '}
              Tambah foto dokumentasi kegiatan langsung dari halaman ini.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {/* Jumlah kolom per baris — pola & rentang sama dengan galeri PPID. */}
              {items.length > 0 && (
                <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-0.5">
                  <span className="px-1.5 text-[0.7rem] font-medium text-slate-400">
                    Kolom
                  </span>
                  {KOLOM_PILIHAN.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => gantiKolom(k)}
                      title={`Tampilkan ${k} foto per baris`}
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
              <Button
                onClick={bukaForm}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                <span className="ml-1">Tambah Foto</span>
              </Button>
            </div>
          </div>
        )}

        {/* Penyaring kategori + pengurutan. Ditampilkan selama masih ada foto —
            pengurutan tetap berguna walau kategorinya cuma satu. */}
        {items.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? 'text-white shadow-md'
                      : 'bg-white/60 text-slate-600 border border-slate-200 hover:border-primary/40'
                  }`}
                  style={filter === cat ? { background: 'linear-gradient(90deg, #2e6da4, #1b4b72)' } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <ArrowUpDown className="h-3.5 w-3.5" />
                Urutkan
              </span>
              <Select value={urutan} onValueChange={(v) => setUrutan(v as Urutan)}>
                <SelectTrigger className="h-9 w-[150px] bg-white text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {URUTAN.map((u) => (
                    <SelectItem key={u.nilai} value={u.nilai}>
                      {u.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Jumlah yang sedang tampil — supaya jelas penyaringnya berpengaruh. */}
        {!isLoading && items.length > 0 && (
          <p className="-mt-4 mb-6 text-xs text-slate-500">
            Menampilkan <span className="font-semibold text-slate-700">{filtered.length}</span> foto
            {filter !== 'Semua' && (
              <>
                {' '}pada kategori <span className="font-semibold text-slate-700">{filter}</span>
              </>
            )}
            {' '}dari total {items.length}.
          </p>
        )}

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-slate-200 animate-pulse" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            <Images className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>Belum ada foto dalam galeri.</p>
            {editMode && (
              <Button
                onClick={bukaForm}
                className="mt-5 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                <span className="ml-1">Tambah Foto Pertama</span>
              </Button>
            )}
          </div>
        ) : (
          /* Grid mengikuti pola galeri PPID: jumlah kolom dari var `--k`
             (2/3/4), tetap 1 kolom di ponsel & 2 di tablet. */
          <div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:[grid-template-columns:repeat(var(--k),minmax(0,1fr))]"
            style={{ ['--k' as string]: kolom } as React.CSSProperties}
          >
            {filtered.map((item) => (
              <figure
                key={item.id}
                className="group relative cursor-zoom-in overflow-hidden rounded-md border border-slate-200/70 bg-white shadow-sm transition-shadow hover:shadow-md"
                onClick={() => setSelected(item)}
              >
                <div className="relative">
                  {/* Gambar tampil apa adanya (tinggi mengikuti rasio aslinya),
                      BUKAN dipaksa ke kotak 4:3 dengan object-contain — pola
                      lama itu menyisakan bidang putih di kiri-kanan/atas-bawah
                      setiap foto yang rasionya beda. Sama seperti galeri PPID. */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- gambar unggahan admin, dimensi tak diketahui */}
                  <img
                    src={item.gambar.startsWith('/') ? item.gambar : `/uploads/gallery/${item.gambar}`}
                    alt={item.judul}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                    <p className="line-clamp-2 text-xs font-medium text-white">{item.judul}</p>
                  </div>

                  {/* Hapus — stopPropagation supaya tidak ikut membuka lightbox. */}
                  {editMode && (
                    <button
                      type="button"
                      title={`Hapus "${item.judul}"`}
                      disabled={menghapusId === item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        hapus(item);
                      }}
                      className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-destructive shadow transition-colors hover:bg-white disabled:opacity-60"
                    >
                      {menghapusId === item.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              </figure>
            ))}
          </div>
        )}
      </div>

      {/* Form tambah foto (Mode Edit) — pola & komponen sama dengan
          Dashboard → Galeri supaya perilakunya seragam. */}
      {editMode && formBuka && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4"
          onClick={() => setFormBuka(false)}
        >
          <div
            className="my-8 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Tambah Foto Galeri</h3>
              <button
                onClick={() => setFormBuka(false)}
                className="text-slate-400 hover:text-slate-600"
                title="Tutup"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="galeri-judul">Judul</Label>
                <Input
                  id="galeri-judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Mis. Pelayanan jemput bola di Kec. Sesayap"
                />
              </div>

              <div className="space-y-1.5">
                <Label>Kategori <span className="font-normal text-slate-400">(opsional)</span></Label>
                {/* Dropdown, bukan deretan pil: kategori bisa tumbuh banyak dan
                    pil akan meluber. Memakai Select milik aplikasi (Radix), BUKAN
                    <input list=datalist> — dropdown bawaan browser tampil sebagai
                    kotak hitam OS yang keluar dari desain situs.
                    Radix melarang SelectItem bernilai "" → dipakai sentinel. */}
                <Select
                  value={kategoriLain ? SENTINEL_BARU : kategori || SENTINEL_TANPA}
                  onValueChange={(v) => {
                    if (v === SENTINEL_BARU) {
                      setKategoriLain(true);
                      setKategori('');
                      return;
                    }
                    setKategoriLain(false);
                    setKategori(v === SENTINEL_TANPA ? '' : v);
                  }}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={SENTINEL_TANPA}>Tanpa kategori</SelectItem>
                    {saranKategori.map((k) => (
                      <SelectItem key={k} value={k}>
                        {k}
                      </SelectItem>
                    ))}
                    <SelectItem value={SENTINEL_BARU}>+ Buat kategori baru…</SelectItem>
                  </SelectContent>
                </Select>

                {kategoriLain && (
                  <Input
                    autoFocus
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    placeholder="Ketik nama kategori baru"
                    className="mt-2"
                  />
                )}

                <p className="text-[0.7rem] leading-relaxed text-slate-500">
                  Kategori hanya untuk mengelompokkan foto — ia muncul sebagai tombol
                  penyaring di atas galeri. Dikosongkan pun tidak apa-apa; fotonya
                  tetap tampil di &ldquo;Semua&rdquo;.
                </p>
              </div>

              <div className="space-y-1.5">
                <Label>Foto</Label>
                <ImagePickerField
                  label="Foto"
                  title="Pilih Foto Galeri"
                  value={gambar}
                  onChange={setGambar}
                  className="aspect-video w-full"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setFormBuka(false)}>
                  Batal
                </Button>
                <Button
                  onClick={simpan}
                  disabled={menyimpan}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {menyimpan ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  <span className={menyimpan ? 'ml-1.5' : ''}>Simpan</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sama seperti kartunya: gambar apa adanya, bukan dipaksa 16:9
                dengan object-contain yang menyisakan bidang kosong. */}
            {/* eslint-disable-next-line @next/next/no-img-element -- gambar unggahan admin */}
            <img
              src={selected.gambar.startsWith('/') ? selected.gambar : `/uploads/gallery/${selected.gambar}`}
              alt={selected.judul}
              className="max-h-[75vh] w-full object-contain"
            />
            <div className="p-4">
              <h3 className="font-semibold text-slate-900">{selected.judul}</h3>
              {selected.kategori && (
                <span className="text-xs text-primary font-medium">{selected.kategori}</span>
              )}
              <p className="text-xs text-slate-400 mt-1">
                {new Date(selected.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
