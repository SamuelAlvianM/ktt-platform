'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Plus, Trash2, Lock, ExternalLink, Pencil } from 'lucide-react';
import {
  KUNCI_NAVIGASI,
  JUDUL_MENU_BAWAAN,
  buatSlug,
  hrefTambahan,
  type MenuTambahan,
} from '@/lib/navigasi-tambahan';
import { navigationItems } from '@/lib/navigation';
import { refreshStaticContent } from '@/lib/use-static-content';

const KOSONG: MenuTambahan = {
  id: '',
  menuInduk: 'PPID',
  judul: '',
  deskripsi: '',
  slug: '',
  tautanLuar: '',
};

export function EditorNavigasi() {
  const [menu, setMenu] = useState<MenuTambahan[]>([]);
  const [memuat, setMemuat] = useState(true);
  const [menyimpan, setMenyimpan] = useState(false);
  const [buka, setBuka] = useState(false);
  const [draf, setDraf] = useState<MenuTambahan>(KOSONG);
  const [slugDisentuh, setSlugDisentuh] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/static-content?keys=${KUNCI_NAVIGASI}`);
        const j = await res.json();
        setMenu(j.data?.items?.[KUNCI_NAVIGASI]?.menu ?? []);
      } catch {
        toast.error('Gagal memuat menu tambahan');
      } finally {
        setMemuat(false);
      }
    })();
  }, []);

  const simpan = async (baru: MenuTambahan[]) => {
    setMenyimpan(true);
    try {
      const res = await fetch('/api/admin/static-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kunci: KUNCI_NAVIGASI, konten: { menu: baru } }),
      });
      const j = await res.json();
      if (j.error?.length) {
        toast.error(j.error[0]);
        return false;
      }
      setMenu(baru);
      // Navbar memakai useStaticContent — beri tahu agar ikut segar tanpa reload.
      refreshStaticContent();
      toast.success(j.success?.[0] ?? 'Tersimpan');
      return true;
    } catch {
      toast.error('Gagal menghubungi server');
      return false;
    } finally {
      setMenyimpan(false);
    }
  };

  const bukaBaru = () => {
    setDraf({ ...KOSONG });
    setSlugDisentuh(false);
    setBuka(true);
  };

  const bukaEdit = (m: MenuTambahan) => {
    setDraf({ ...m });
    setSlugDisentuh(true);
    setBuka(true);
  };

  const simpanDraf = async () => {
    const judul = draf.judul.trim();
    if (!judul) return toast.error('Judul menu wajib diisi');

    const slug = (draf.slug || buatSlug(judul)).trim();
    if (!draf.tautanLuar?.trim() && !slug) {
      return toast.error('Slug halaman wajib diisi');
    }
    // Slug menentukan URL sekaligus kunci konten — bentrok berarti dua menu
    // berbagi halaman yang sama tanpa disadari.
    if (menu.some((m) => m.slug === slug && m.id !== draf.id)) {
      return toast.error(`Slug "${slug}" sudah dipakai menu lain`);
    }

    const isi: MenuTambahan = {
      ...draf,
      judul,
      slug,
      id: draf.id || `menu-${Date.now()}`,
      tautanLuar: draf.tautanLuar?.trim() || undefined,
    };

    const baru = draf.id
      ? menu.map((m) => (m.id === draf.id ? isi : m))
      : [...menu, isi];

    if (await simpan(baru)) setBuka(false);
  };

  const hapus = async (m: MenuTambahan) => {
    if (!confirm(`Hapus menu "${m.judul}"? Halamannya ikut tidak bisa diakses.`))
      return;
    await simpan(menu.filter((x) => x.id !== m.id));
  };

  return (
    <>
      {/* Menu bawaan — ditampilkan supaya admin paham apa yang ada, dengan
          gembok yang menjelaskan kenapa tak bisa dihapus. */}
      <section className="mb-8">
        <h2 className="mb-1 text-sm font-semibold text-slate-900">
          Menu bawaan sistem
        </h2>
        <p className="mb-3 text-xs text-slate-500">
          Menu inti portal. Tidak bisa dihapus atau diubah dari sini agar
          navigasi utama tidak rusak — Anda tetap bisa menambah sub-menu di
          dalamnya.
        </p>
        <div className="flex flex-wrap gap-2">
          {navigationItems.map((m) => (
            <span
              key={m.title}
              className="inline-flex items-center gap-1.5 rounded-full border bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              <Lock className="h-3 w-3 text-slate-400" />
              {m.title}
              {m.items?.length ? (
                <span className="text-slate-400">({m.items.length})</span>
              ) : null}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Sub-menu tambahan
            </h2>
            <p className="text-xs text-slate-500">
              Menu yang Anda buat sendiri — hanya ini yang bisa diubah & dihapus.
            </p>
          </div>
          <Button onClick={bukaBaru} size="sm" className="shrink-0">
            <Plus className="mr-1.5 h-4 w-4" /> Tambah sub-menu
          </Button>
        </div>

        {memuat ? (
          <div className="flex items-center gap-2 py-10 text-sm text-slate-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Memuat…
          </div>
        ) : menu.length === 0 ? (
          <p className="rounded-xl border border-dashed py-12 text-center text-sm text-slate-500">
            Belum ada sub-menu tambahan. Klik “Tambah sub-menu” untuk membuat
            yang pertama.
          </p>
        ) : (
          <ul className="divide-y rounded-xl border">
            {menu.map((m) => (
              <li
                key={m.id}
                className="flex items-center justify-between gap-3 p-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">
                    <span className="text-slate-400">{m.menuInduk} › </span>
                    {m.judul}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-slate-500">
                    {m.tautanLuar ? (
                      <ExternalLink className="h-3 w-3 shrink-0" />
                    ) : null}
                    {hrefTambahan(m)}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <Button variant="ghost" size="icon" onClick={() => bukaEdit(m)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => hapus(m)}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Dialog open={buka} onOpenChange={setBuka}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {draf.id ? 'Ubah sub-menu' : 'Tambah sub-menu'}
            </DialogTitle>
            <DialogDescription>
              Sub-menu muncul di navbar publik. Bila tidak diisi tautan luar,
              halamannya dibuat otomatis dan bisa diisi lewat dashboard.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Dipasang di menu</Label>
              <Select
                value={draf.menuInduk}
                onValueChange={(v) => setDraf({ ...draf, menuInduk: v })}
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {JUDUL_MENU_BAWAAN.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="judul">Judul sub-menu</Label>
              <Input
                id="judul"
                value={draf.judul}
                onChange={(e) => {
                  const judul = e.target.value;
                  setDraf((d) => ({
                    ...d,
                    judul,
                    // Slug ikut judul sampai admin mengetiknya sendiri.
                    slug: slugDisentuh ? d.slug : buatSlug(judul),
                  }));
                }}
                placeholder="mis. Laporan Tahunan"
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="deskripsi">Keterangan singkat</Label>
              <Textarea
                id="deskripsi"
                value={draf.deskripsi}
                onChange={(e) => setDraf({ ...draf, deskripsi: e.target.value })}
                placeholder="Muncul sebagai penjelasan di bawah judul menu"
                rows={2}
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="slug">Alamat halaman</Label>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="shrink-0 text-sm text-slate-400">/halaman/</span>
                <Input
                  id="slug"
                  value={draf.slug}
                  onChange={(e) => {
                    setSlugDisentuh(true);
                    setDraf({ ...draf, slug: buatSlug(e.target.value) });
                  }}
                  placeholder="laporan-tahunan"
                  disabled={Boolean(draf.tautanLuar?.trim())}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="luar">Atau arahkan ke tautan luar (opsional)</Label>
              <Input
                id="luar"
                value={draf.tautanLuar ?? ''}
                onChange={(e) => setDraf({ ...draf, tautanLuar: e.target.value })}
                placeholder="https://…"
                className="mt-1.5"
              />
              <p className="mt-1 text-xs text-slate-500">
                Bila diisi, halaman otomatis tidak dibuat dan menu langsung
                menuju alamat ini.
              </p>
            </div>
          </div>

          <div className="mt-2 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setBuka(false)}>
              Batal
            </Button>
            <Button onClick={simpanDraf} disabled={menyimpan}>
              {menyimpan && <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />}
              Simpan
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
