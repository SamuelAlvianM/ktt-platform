'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { Footer } from '@/components/shared/footer';
import { Images, X, Plus, Trash2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ImagePickerField } from '@/components/media/image-picker-field';
import { useInlineEdit } from '@/components/konten/inline-edit';

/** Kategori bawaan; admin tetap boleh mengetik kategori lain. */
const KATEGORI_BAWAAN = ['PELAYANAN', 'BUPATI'];

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

  // ── Mode Edit: tambah/hapus foto langsung dari halaman ini ──
  // Sebelumnya foto HANYA bisa diunggah lewat Dashboard → Galeri, sehingga di
  // Mode Edit halaman ini tidak ada tombol apa pun dan terkesan tidak bisa
  // diisi. `editMode` sudah dijaga InlineEditProvider: hanya admin level 1 di
  // halaman publik — sama dengan syarat POST /api/galeri & DELETE-nya.
  const { editMode } = useInlineEdit();
  const [formBuka, setFormBuka] = useState(false);
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState(KATEGORI_BAWAAN[0]);
  /** true = admin sedang mengetik kategori baru, bukan memilih yang sudah ada. */
  const [kategoriLain, setKategoriLain] = useState(false);
  const [gambar, setGambar] = useState('');
  const [menyimpan, setMenyimpan] = useState(false);
  const [menghapusId, setMenghapusId] = useState<number | null>(null);

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
    setKategori(KATEGORI_BAWAAN[0]);
    setKategoriLain(false);
    setGambar('');
    setFormBuka(true);
  };

  const simpan = async () => {
    if (!judul.trim() || !gambar) {
      toast.error('Judul dan foto wajib diisi');
      return;
    }
    if (!kategori.trim()) {
      toast.error('Kategori wajib diisi');
      return;
    }
    setMenyimpan(true);
    try {
      const res = await fetch('/api/galeri', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ judul: judul.trim(), kategori: kategori.trim(), gambar }),
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

  const categories = ['Semua', ...Array.from(new Set(items.map((i) => i.kategori ?? 'Umum')))];
  const filtered = filter === 'Semua' ? items : items.filter((i) => (i.kategori ?? 'Umum') === filter);
  // Pilihan kategori di form: bawaan + yang sudah dipakai, tanpa duplikat.
  const saranKategori = Array.from(
    new Set([...KATEGORI_BAWAAN, ...items.map((i) => i.kategori).filter(Boolean) as string[]]),
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
            <Button
              onClick={bukaForm}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" />
              <span className="ml-1">Tambah Foto</span>
            </Button>
          </div>
        )}

        {/* Filter tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition-all"
                onClick={() => setSelected(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                  <Image
                    src={item.gambar.startsWith('/') ? item.gambar : `/uploads/gallery/${item.gambar}`}
                    alt={item.judul}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium line-clamp-2">{item.judul}</p>
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
              </div>
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
                <Label>Kategori</Label>
                {/* Pilihan pil, bukan <datalist>: dropdown bawaan browser
                    tampilannya mentah (kotak hitam OS) dan tidak mengikuti
                    desain situs. Pola pil ini sama dengan Dashboard → Galeri. */}
                <div className="flex flex-wrap gap-2">
                  {saranKategori.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => {
                        setKategoriLain(false);
                        setKategori(k);
                      }}
                      className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                        !kategoriLain && kategori === k
                          ? 'border-transparent bg-primary text-primary-foreground'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-primary/40'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setKategoriLain(true);
                      setKategori('');
                    }}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                      kategoriLain
                        ? 'border-transparent bg-primary text-primary-foreground'
                        : 'border-dashed border-slate-300 bg-white text-slate-500 hover:border-primary/40'
                    }`}
                  >
                    + Lainnya
                  </button>
                </div>
                {kategoriLain && (
                  <Input
                    autoFocus
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    placeholder="Ketik nama kategori baru"
                    className="mt-2"
                  />
                )}
                <p className="text-[0.7rem] text-slate-500">
                  Kategori jadi tombol penyaring di atas galeri.
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
            className="max-w-4xl w-full glass-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selected.gambar.startsWith('/') ? selected.gambar : `/uploads/gallery/${selected.gambar}`}
                alt={selected.judul}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-white/80">
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
