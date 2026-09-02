/**
 * Peran pengguna SIDAKO — SATU SUMBER KEBENARAN.
 *
 * 🔴 ANGKANYA BERBEDA DI TIAP PORTAL. SAIBATIN, HALMAHERA, TIDORE, dan SIDAKO
 * tumbuh terpisah, dan `m_userlevels` masing-masing diisi dengan urutan sendiri
 * (di TIDORE, level 4 justru "developer" — bukan OPD). Karena itu yang dipakai
 * sebagai acuan adalah NAMA peran; angka di bawah ini cuma nama itu setelah
 * diterjemahkan untuk portal INI, dan tidak boleh disalin apa adanya ke portal
 * lain.
 *
 * Sumbernya `prisma/seed.ts` → `m_userlevels`:
 *
 *     1  Super Admin     admin dinas, akses penuh
 *     2  Operator        staf loket
 *     3  Warga           pemohon
 *     4  Operator OPD    instansi/kecamatan (istilah legacy)
 *
 * Jalankan `npm run peran:periksa` untuk memastikan nama di basis data masih
 * sama dengan tabel ini — kalau seseorang mengubah `m_userlevels` lewat SQL,
 * berkas inilah yang jadi bohong, dan seluruh pembatasan akses ikut bohong.
 */

export const PERAN = {
  ADMIN: 1,
  STAF: 2,
  WARGA: 3,
  OPD: 4,
} as const;

/** Nama resmi tiap peran di `m_userlevels` — dipakai pemeriksa & tampilan. */
export const NAMA_PERAN: Record<number, string> = {
  [PERAN.ADMIN]: 'Super Admin',
  [PERAN.STAF]: 'Operator',
  [PERAN.WARGA]: 'Warga',
  [PERAN.OPD]: 'Operator OPD',
};

/** Admin dinas — akses penuh, tanpa kecuali. */
export const isAdmin = (level?: number | null) => level === PERAN.ADMIN;

/** Staf loket. */
export const isStaf = (level?: number | null) => level === PERAN.STAF;

/** Operator OPD — instansi/kecamatan, hanya melihat wilayahnya sendiri. */
export const isOpd = (level?: number | null) => level === PERAN.OPD;

/** Pemohon. */
export const isWarga = (level?: number | null) => level === PERAN.WARGA;

/**
 * Petugas dinas = admin ATAU staf.
 *
 * 🔴 OPD SENGAJA TIDAK TERMASUK, dan jangan pernah ditambahkan ke sini.
 * Predikat ini menjaga hal-hal yang memang milik dinas: manajemen akun,
 * konten situs, log aktivitas, pengaturan layanan. OPD adalah instansi LUAR
 * yang kebetulan diberi jendela ke dashboard — memberinya akses petugas
 * berarti membuka data seluruh kabupaten kepada satu kecamatan.
 *
 * Kalau yang Anda maksud "boleh masuk dashboard", itu `bolehDashboard`.
 */
export const isPetugas = (level?: number | null) =>
  isAdmin(level) || isStaf(level);

/**
 * Siapa yang mendapat kerangka dashboard (sidebar + header).
 *
 * Sebelumnya `layout.tsx` memakai `level > 2` untuk menyingkirkan warga —
 * ungkapan yang ikut menyingkirkan OPD (level 4) tanpa disengaja, sehingga
 * akun OPD masuk dashboard TANPA sidebar sama sekali dan harus menebak URL.
 * Menyebut perannya, bukan membandingkan angka, membuat kekeliruan itu tidak
 * bisa terulang saat peran baru ditambahkan.
 */
export const bolehDashboard = (level?: number | null) =>
  isPetugas(level) || isOpd(level);

/**
 * Boleh melihat SELURUH permohonan kabupaten. OPD hanya wilayahnya sendiri —
 * penyaringnya di `lib/lingkup-permohonan.ts`, bukan di sini.
 */
export const bolehSemuaWilayah = (level?: number | null) => isPetugas(level);
