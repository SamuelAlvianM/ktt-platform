/**
 * Struktur menu navbar publik — satu sumber untuk Navbar dan editor
 * Konten Halaman di dashboard (sidebar + submenu preview).
 */

export interface NavSubItem {
  title: string;
  href: string;
  description: string;
}

export interface NavItem {
  title: string;
  href: string;
  description: string;
  subItems?: NavSubItem[];
}

export interface NavMenu {
  title: string;
  /** Link langsung (menu tanpa dropdown). Abaikan bila `items` diisi. */
  href?: string;
  items?: NavItem[];
}

export const navigationItems: NavMenu[] = [
  // "Pelayanan Online" dihapus dari navbar publik — pembuatan permohonan
  // dipindah ke dashboard (warga & OPD) sebagai halaman penuh, bukan modal.
  {
    // Dulu bernama "Produk"; diganti jadi "Informasi Produk" atas permintaan
    // dinas (Document from S.A.M, poin 1). Path `/produk/*` sengaja TIDAK ikut
    // berubah supaya tautan lama & berkas yang sudah diunggah tetap hidup.
    title: "Informasi Produk",
    items: [
      {
        title: "Produk Disdukcapil",
        href: "/produk/produk-disdukcapil",
        description: "Produk dan layanan Disdukcapil",
      },
      {
        title: "Formulir Persyaratan",
        href: "/produk/formulir-persyaratan",
        description: "Persyaratan pengurusan dokumen kependudukan",
      },
      {
        title: "Hukum",
        href: "/produk/hukum",
        description: "Produk hukum terkait kependudukan",
      },

      {
        title: "Standar Operasional Prosedur (SOP)",
        href: "/produk/sop",
        description: "Standar operasional prosedur pelayanan",
      },
    ],
  },
  {
    title: "Media Informasi",
    items: [
      {
        title: "Berita",
        href: "/media/berita",
        description: "Berita dan informasi terkini",
      },
      {
        title: "Galeri",
        href: "/galeri",
        description: "Dokumentasi kegiatan Disdukcapil",
      },
      // "Data Demografi" (submenu per kategori) dihapus — sudah tercakup
      // halaman indeks "Laporan Data Demografi" di bawah.
      // "Peta" dihapus dari menu — sudah tercakup GIS Dukcapil di bawah.
      // "Survey Kepuasan Masyarakat" dipindah ke halaman Hubungi Kami.
      {
        title: "GIS Dukcapil — Peta Sebaran Penduduk",
        href: "/media/gis",
        description: "Peta sebaran jumlah penduduk per kecamatan",
      },
      {
        // Langsung ke halaman data ber-tab kategori (tanpa halaman indeks kartu).
        title: "Laporan Data Demografi",
        href: "/media/demografi",
        description: "Laporan lengkap data demografi",
      },
    ],
  },
  {
    // Disederhanakan dari 3 item jadi 2 menu utama — tiap menu mendarat di
    // halaman yang punya sub-tab sendiri (lihat components/ppid/ppid-subnav.tsx):
    // "Tentang PPID" → 6 tab (profil, pembentukan, visi-misi, struktur,
    // maklumat, tugas). "Informasi Publik" → 2 tab (Setiap Saat / Berkala),
    // menggabungkan dua halaman indeks kartu yang sebelumnya terpisah di navbar.
    title: "PPID",
    items: [
      {
        title: "Tentang PPID",
        href: "/ppid/profil-ppid",
        description:
          "Profil, gambaran pembentukan, visi-misi, struktur organisasi, maklumat, serta tugas dan tanggung jawab PPID",
      },
      {
        title: "Informasi Publik",
        href: "/ppid/informasi-setiap-saat",
        description:
          "Daftar Informasi Publik yang wajib tersedia setiap saat maupun diumumkan secara berkala (UU No. 14 Tahun 2008)",
      },
      {
        title: "Layanan & Formulir PPID",
        href: "/ppid/formulir-ppid",
        description:
          "Formulir permohonan & keberatan, SK, register, uji konsekuensi, penyelesaian sengketa, dan inovasi layanan PPID",
      },
    ],
  },
  {
    // Menu Pengaduan & WBS disatukan atas permintaan user: dua kanal ini isinya
    // sama dan menuju endpoint yang sama (/api/pengaduan), jadi cukup satu menu
    // langsung (tanpa dropdown) ke halaman WBS. Halaman /pengaduan lama
    // di-redirect ke sini agar tautan lama tidak mati.
    title: "WBS",
    href: "/wbs/tentang-wbs",
  },
  {
    // Permintaan dinas (Document from S.A.M, poin 3): menu baru SETELAH WBS.
    // Pengaduan & Konsultasi memakai formulir yang sama dengan WBS
    // (/api/pengaduan) — bedanya kanal umum vs pelaporan pelanggaran.
    title: "Pusat Bantuan",
    items: [
      {
        title: "FAQ",
        href: "/pusat-bantuan/faq",
        description: "Pertanyaan yang sering diajukan seputar layanan adminduk",
      },
      {
        title: "Pengaduan & Konsultasi",
        href: "/pusat-bantuan/pengaduan-konsultasi",
        description:
          "Alur layanan pengaduan dan konsultasi beserta formulir pengajuannya",
      },
      {
        title: "Penipuan IKD",
        href: "/pusat-bantuan/penipuan-ikd",
        description:
          "Waspada modus penipuan yang mengatasnamakan Disdukcapil Tana Tidung",
      },
    ],
  },
  {
    // Tanpa dropdown — mendarat di halaman internal kita dulu (bukan langsung
    // melempar ke skm.go.id). Halaman itu menyematkan formulir SKM resmi lewat
    // iframe + tombol untuk membukanya penuh di tab baru. Lihat
    // app/survei-kepuasan/page.tsx.
    //
    // Label dipendekkan dari "Survei Kepuasan Masyarakat" (231px — item
    // terlebar di navbar) jadi "Survei Kepuasan" saat menu "Pusat Bantuan"
    // ditambahkan, supaya deretan menu desktop tetap muat. Judul halaman &
    // metadata-nya TETAP lengkap. Kalau label ini diubah, ubah juga kunci peta
    // ikon di components/shared/navbar.tsx.
    title: "Survei Kepuasan",
    href: "/survei-kepuasan",
  },
  // "Hubungi Kami" dihapus dari navbar atas permintaan user — informasi kontak
  // (alamat, email, jam layanan) sudah tersedia permanen di footer. Halaman
  // /hubungi-kami tetap ada dan dapat diakses lewat tautan footer.
];
