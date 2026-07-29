/**
 * Status akun pengguna (kolom `users.status`, tipe Int — tanpa migrasi).
 *
 * Alur:
 *   MENUNGGU → (Aktifkan) → AKTIF
 *   MENUNGGU → (Tolak+alasan) → DITOLAK → (user Ajukan Ulang) → MENUNGGU  (loop)
 *   AKTIF → (Nonaktifkan) → NONAKTIF  (hanya staff yang bisa mengaktifkan lagi)
 *
 * Login hanya mengizinkan AKTIF. Status lain memakai pesan masing-masing di
 * bawah agar warga tahu harus berbuat apa.
 */

export const STATUS_AKUN = {
  MENUNGGU: 0,
  AKTIF: 1,
  DITOLAK: 2,
  NONAKTIF: 3,
} as const;

export type StatusAkun = (typeof STATUS_AKUN)[keyof typeof STATUS_AKUN];

export interface InfoStatus {
  label: string;
  /** Warna badge (kelas Tailwind: teks + latar + ring). */
  badge: string;
  /** Pesan yang ditampilkan ke warga (login / cek status). */
  pesan: string;
}

export const INFO_STATUS: Record<number, InfoStatus> = {
  [STATUS_AKUN.MENUNGGU]: {
    label: "Menunggu",
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
    pesan:
      "Pendaftaran akun Anda sedang diproses dan menunggu verifikasi petugas. Silakan cek berkala.",
  },
  [STATUS_AKUN.AKTIF]: {
    label: "Aktif",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    pesan: "Akun Anda aktif. Silakan login untuk mengajukan permohonan.",
  },
  [STATUS_AKUN.DITOLAK]: {
    label: "Ditolak",
    badge: "bg-rose-50 text-rose-700 ring-rose-200",
    pesan:
      "Pendaftaran akun Anda ditolak. Perbaiki sesuai alasan di bawah lalu ajukan ulang.",
  },
  [STATUS_AKUN.NONAKTIF]: {
    label: "Nonaktif",
    badge: "bg-slate-100 text-slate-600 ring-slate-300",
    pesan:
      "Akun Anda tidak dapat digunakan beberapa saat karena alasan keamanan. Silakan hubungi Staff Disdukcapil untuk mengaktifkan akun kembali.",
  },
};

export function infoStatus(status: number): InfoStatus {
  return INFO_STATUS[status] ?? INFO_STATUS[STATUS_AKUN.MENUNGGU];
}

/** Pesan singkat saat login ditolak karena status akun belum/ tak aktif. */
export function pesanLoginStatus(status: number): string {
  return infoStatus(status).pesan;
}
