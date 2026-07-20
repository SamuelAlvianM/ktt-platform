import { navigationItems, type NavItem, type NavMenu } from './navigation';

/**
 * Menu navbar tambahan yang dibuat admin lewat dashboard.
 *
 * PENTING — cara menu bawaan dilindungi:
 * yang disimpan di database HANYA tambahan admin. Menu bawaan hidup di
 * lib/navigation.ts (kode) dan tidak pernah masuk ke store, sehingga secara
 * struktural mustahil dihapus lewat editor — bukan sekadar dicegah oleh
 * pengecekan flag yang bisa terlewat. Menghapus tambahan = membuang entri dari
 * daftar ini; menu bawaan tetap utuh.
 */

export const KUNCI_NAVIGASI = 'navigasi.tambahan';

export interface MenuTambahan {
  /** Identitas stabil supaya edit/hapus tidak salah sasaran saat urutan berubah. */
  id: string;
  /**
   * Judul menu utama tempat item ini digantung, mis. "PPID".
   * Bila tidak cocok dengan menu bawaan mana pun, sebuah menu utama BARU
   * dengan nama itu akan dibuat.
   */
  menuInduk: string;
  judul: string;
  deskripsi: string;
  /** Slug halaman yang dibuat otomatis: /halaman/<slug>. */
  slug: string;
  /** Bila diisi, item menuju URL ini alih-alih halaman yang dikelola dashboard. */
  tautanLuar?: string;
}

/** Judul menu utama bawaan — dipakai editor untuk menandai yang tak bisa dihapus. */
export const JUDUL_MENU_BAWAAN = navigationItems.map((m) => m.title);

export function hrefTambahan(m: MenuTambahan): string {
  const luar = m.tautanLuar?.trim();
  return luar || `/halaman/${m.slug}`;
}

/** Kunci blok konten untuk halaman yang dibuat otomatis. */
export function kunciHalamanTambahan(slug: string) {
  return `halaman.${slug}`;
}

export function buatSlug(teks: string): string {
  return teks
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

/**
 * Gabungkan menu bawaan (kode) dengan tambahan admin (database).
 * Bawaan selalu jadi dasar, tambahan hanya menempel di atasnya.
 */
export function gabungNavigasi(tambahan: MenuTambahan[] = []): NavMenu[] {
  // Salin dalam supaya array `items` bawaan tidak ikut termutasi antar-render.
  const hasil: NavMenu[] = navigationItems.map((m) => ({
    ...m,
    items: m.items ? m.items.map((i) => ({ ...i })) : undefined,
  }));

  const menuBaru = new Map<string, NavItem[]>();

  for (const t of tambahan) {
    if (!t?.judul?.trim()) continue;

    const item: NavItem = {
      title: t.judul.trim(),
      href: hrefTambahan(t),
      description: t.deskripsi?.trim() ?? '',
    };

    const induk = hasil.find((m) => m.title === t.menuInduk);
    if (induk) {
      // Menu bawaan tanpa dropdown (mis. "Hubungi Kami") hanya punya href.
      // Begitu diberi anak, ia harus berubah jadi dropdown — tautan aslinya
      // dipertahankan sebagai item pertama agar tidak hilang dari navigasi.
      if (!induk.items) {
        induk.items = induk.href
          ? [{ title: induk.title, href: induk.href, description: '' }]
          : [];
        delete induk.href;
      }
      induk.items.push(item);
    } else {
      const namaMenuBaru = t.menuInduk?.trim() || item.title;
      if (!menuBaru.has(namaMenuBaru)) menuBaru.set(namaMenuBaru, []);
      menuBaru.get(namaMenuBaru)!.push(item);
    }
  }

  for (const [judul, items] of menuBaru) {
    // Satu item yang namanya sama dengan menunya = tautan langsung, bukan
    // dropdown berisi satu anak yang mengulang dirinya sendiri.
    hasil.push(
      items.length === 1 && items[0].title === judul
        ? { title: judul, href: items[0].href }
        : { title: judul, items },
    );
  }

  return hasil;
}
