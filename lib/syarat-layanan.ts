/**
 * Persyaratan & penjelasan tiap layanan permohonan — untuk halaman Syarat &
 * Ketentuan (tab per-layanan yang bisa dicari).
 *
 * SUMBER KEBENARAN: skema formulir permohonan yang BENAR-BENAR dipakai portal,
 * yaitu `lib/layanan-forms.ts` (bagian "Dokumen Syarat" tiap layanan). Daftar
 * "Persyaratan" di bawah mengikuti dokumen yang diminta form tersebut —
 * dilengkapi penanda (wajib)/(opsional) — sehingga konsisten dengan apa yang
 * harus diunggah pemohon. Isinya BRANDING-NETRAL (memakai kata "Dinas"), jadi
 * sama untuk semua daerah.
 *
 * `id`/`nama`/`kategori` selaras dengan lib/pelayanan-list.ts.
 */

export interface KasusLayanan {
  /** Judul sub-kasus (opsional bila layanan hanya punya satu kasus). */
  judul?: string;
  persyaratan: string[];
  penjelasan?: string[];
  catatan?: string[];
}

export interface LayananSyarat {
  id: string;
  nama: string;
  kategori: string;
  kasus: KasusLayanan[];
}

/** Label kategori (selaras dengan PELAYANAN_KATEGORI). */
export const SYARAT_KATEGORI: Record<string, string> = {
  data: "Data Kependudukan",
  akta: "Akta Pencatatan Sipil",
  kk: "Kartu Keluarga",
  identitas: "Identitas (KTP-el & KIA)",
  pindah: "Pindah / Datang",
};

const CATATAN_ONLINE =
  "Untuk pelayanan online/daring, berkas yang dipindai atau difoto untuk diunggah harus merupakan dokumen aslinya.";

export const SYARAT_LAYANAN: LayananSyarat[] = [
  // ── Data Kependudukan ──
  {
    id: "konsolidasi",
    nama: "Konsolidasi / Pemutakhiran Data",
    kategori: "data",
    kasus: [
      {
        persyaratan: [
          "File KTP (wajib)",
          "File Kartu Keluarga (KK) (wajib)",
          "File Dokumen Pendukung sesuai alasan konsolidasi — mis. BPJS, imigrasi, perbankan, telekomunikasi, vaksin (opsional)",
        ],
        penjelasan: [
          "Melengkapi data pemohon, nama kepala keluarga, dan alasan konsolidasi data.",
          "Mengunggah dokumen syarat (KTP dan KK).",
          "Dinas memeriksa dan menyesuaikan/konsolidasi data kependudukan.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },

  // ── Akta Pencatatan Sipil ──
  {
    id: "aktaKelahiranNikTidakAda",
    nama: "Akta Kelahiran (Belum Ada NIK)",
    kategori: "akta",
    kasus: [
      {
        persyaratan: [
          "File Buku Nikah / Kutipan Akta Perkawinan orang tua, atau SPTJM (asli) (wajib)",
          "File Kartu Keluarga (KK) (wajib)",
          "File Surat Keterangan Lahir, atau SPTJM (asli) (wajib)",
          "File KTP Saksi I (wajib)",
          "File KTP Saksi II (wajib)",
          "File KTP Ayah dan File KTP Ibu (opsional)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi biodata kelahiran, data kelahiran, serta data 2 (dua) orang saksi.",
          "Mengunggah dokumen syarat di atas.",
          "Dinas menerbitkan kutipan akta kelahiran sekaligus NIK dan memperbarui KK.",
        ],
        catatan: [
          "Dasar hukum: Perpres 96/2018 dan Permendagri 108/2019.",
          CATATAN_ONLINE,
        ],
      },
    ],
  },
  {
    id: "aktaKelahiranNikAda",
    nama: "Akta Kelahiran (Sudah Ada NIK)",
    kategori: "akta",
    kasus: [
      {
        persyaratan: [
          "File Buku Nikah / Kutipan Akta Perkawinan orang tua, atau SPTJM (asli) (wajib)",
          "File Kartu Keluarga (KK) (wajib)",
          "File Surat Keterangan Lahir, atau SPTJM (asli) (wajib)",
          "File KTP Saksi I (wajib)",
          "File KTP Saksi II (wajib)",
          "File KTP Ayah dan File KTP Ibu (opsional)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi biodata kelahiran termasuk NIK bayi yang sudah ada, data kelahiran, dan 2 (dua) saksi.",
          "Mengunggah dokumen syarat di atas.",
          "Dinas menerbitkan kutipan akta kelahiran.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "aktaPerkawinan",
    nama: "Akta Perkawinan",
    kategori: "akta",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) Suami (wajib)",
          "File KTP Suami (wajib)",
          "File Kartu Keluarga (KK) Istri (wajib)",
          "File KTP Istri (wajib)",
          "File Foto Suami & Istri (berdampingan) (wajib)",
          "File Foto Buku Nikah Agama / surat keterangan perkawinan dari pemuka agama (wajib)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi data kedua mempelai, 2 (dua) saksi, serta tanggal dan tempat pemberkatan.",
          "Mengunggah dokumen syarat di atas.",
          "Dinas mencatat perkawinan, menerbitkan kutipan akta perkawinan, serta memperbarui KK dan KTP-elektronik.",
        ],
        catatan: [
          "Pencatatan perkawinan pada Dinas berlaku bagi penduduk NON-muslim; bagi yang beragama Islam pencatatan dilakukan di KUA.",
          CATATAN_ONLINE,
        ],
      },
    ],
  },
  {
    id: "aktaPerceraian",
    nama: "Akta Perceraian",
    kategori: "akta",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) (wajib)",
          "File KTP Suami (wajib)",
          "File KTP Istri (wajib)",
          "File Putusan Pengadilan yang berkekuatan hukum tetap (wajib)",
          "File Dokumen Pendukung — mis. kutipan akta perkawinan (opsional)",
        ],
        penjelasan: [
          "Mengisi data (NIK suami & istri, pihak yang mengajukan, alasan cerai, nomor & tanggal putusan, instansi pemberi putusan).",
          "Mengunggah dokumen syarat di atas.",
          "Dinas mencatat perceraian, menerbitkan kutipan akta perceraian, serta memberi catatan pinggir pada akta perkawinan.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "aktaKematian",
    nama: "Akta Kematian",
    kategori: "akta",
    kasus: [
      {
        persyaratan: [
          "File Surat Keterangan Kematian (asli) (wajib)",
          "File Kartu Keluarga (KK) (wajib)",
          "File KTP Pelapor (wajib)",
          "File KTP Jenazah (wajib)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi data jenazah, tanggal/jam/tempat & sebab kematian, serta 2 (dua) orang saksi.",
          "Mengunggah dokumen syarat di atas.",
          "Dinas menerbitkan kutipan akta kematian dan memperbarui KK (menghapus data almarhum/almarhumah).",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },

  // ── Kartu Keluarga ──
  {
    id: "kartuKeluargaPerubahanData",
    nama: "Kartu Keluarga — Perubahan Biodata",
    kategori: "kk",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) (wajib)",
          "File Akta Lahir (opsional, sesuai elemen data yang diubah)",
          "File Ijazah (opsional, sesuai elemen data yang diubah)",
          "File Buku Nikah (opsional, sesuai elemen data yang diubah)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Memilih jenis biodata yang diubah dan mengisi nilai data yang baru.",
          "Mengunggah KK dan dokumen bukti perubahan data.",
          "Dinas menerbitkan KK baru.",
        ],
        catatan: ["Dasar hukum: Pasal 12 Perpres 96/2018.", CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "kartuKeluargaPisahKK",
    nama: "Kartu Keluarga — Pisah KK",
    kategori: "kk",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) (wajib)",
          "File KK Pasangan (opsional)",
          "File Buku Nikah (opsional, bila pisah karena menikah)",
          "File Surat Cerai (opsional, bila pisah karena cerai)",
          "File Akta Kematian (opsional, bila pisah karena kematian)",
        ],
        penjelasan: [
          "Memilih jenis & alasan pisah, mengisi NIK yang pisah dan alamat tujuan (bila sekaligus pindah).",
          "Mengunggah KK serta dokumen sesuai alasan pisah.",
          "Dinas menerbitkan KK baru.",
        ],
        catatan: ["Dasar hukum: Pasal 10 ayat (4) Permendagri 108/2019.", CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "kartuKeluargaNumpang",
    nama: "Kartu Keluarga — Numpang KK",
    kategori: "kk",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) Lama (wajib)",
          "File Kartu Keluarga (KK) Yang Ditempati/Ditumpangi (wajib)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi nomor KK lama, nomor KK yang ditempati, NIK yang menumpang, dan alasan numpang KK.",
          "Mengunggah kedua Kartu Keluarga.",
          "Dinas menerbitkan KK baru bagi keluarga yang ditumpangi.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "kartuKeluargaPenambahanAnak",
    nama: "Kartu Keluarga — Penambahan Anak",
    kategori: "kk",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) (wajib)",
          "File Akta / Surat Keterangan Lahir (wajib)",
          "File Buku Nikah (opsional)",
        ],
        penjelasan: [
          "Mengisi data anggota keluarga yang ditambahkan (nama, tempat & tanggal lahir, jenis kelamin).",
          "Mengunggah KK dan akta/surat keterangan lahir.",
          "Dinas menerbitkan KK baru dengan penambahan anggota keluarga.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "kartuKeluargaCetakUlang",
    nama: "Kartu Keluarga — Cetak Ulang (Hilang/Rusak)",
    kategori: "kk",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) lama (untuk alasan rusak / perubahan KK)",
          "File Surat Keterangan Kehilangan dari kepolisian (untuk alasan hilang)",
        ],
        penjelasan: [
          "Memilih alasan cetak ulang (Hilang / Rusak / Perubahan KK) dan mengisi nama serta alamat kepala keluarga.",
          "Mengunggah dokumen sesuai alasan.",
          "Dinas mencetak ulang KK.",
        ],
        catatan: ["Dasar hukum: Pasal 13 Perpres 96/2018.", CATATAN_ONLINE],
      },
    ],
  },

  // ── Identitas ──
  {
    id: "ktpElektronik",
    nama: "KTP Elektronik",
    kategori: "identitas",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) (wajib)",
          "File KTP Lama (opsional, untuk rusak/perubahan data/cetak ulang)",
          "File Surat Keterangan Kehilangan dari kepolisian (opsional, untuk hilang)",
          "File Surat Keterangan pendukung lain (opsional)",
        ],
        penjelasan: [
          "Memilih alasan cetak (Baru/Pemula, Hilang, Rusak, Pindah Datang, Perubahan Data, atau Cetak Ulang) dan mengisi nomor KK, NIK, serta nama.",
          "Mengunggah dokumen syarat di atas.",
          "Dinas menerbitkan KTP-elektronik. Perekaman biometrik dilakukan langsung di kantor apabila belum pernah merekam.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "kartuIdentitasAnak",
    nama: "Kartu Identitas Anak (KIA)",
    kategori: "identitas",
    kasus: [
      {
        persyaratan: [
          "File Akta Kelahiran anak (wajib)",
          "File Foto Anak Terbaru (wajib)",
          "File Kartu Keluarga (KK) (wajib)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi data anak (NIK, nama, tempat & tanggal lahir, jenis kelamin) serta data orang tua.",
          "Mengunggah dokumen syarat di atas.",
          "Dinas menerbitkan Kartu Identitas Anak (KIA).",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },

  // ── Pindah / Datang ──
  {
    id: "perpindahanPenduduk",
    nama: "Perpindahan Penduduk (Pindah Keluar)",
    kategori: "pindah",
    kasus: [
      {
        persyaratan: [
          "File Kartu Keluarga (KK) (wajib)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi klasifikasi & jenis kepindahan, NIK yang pindah, alasan pindah, serta alamat tujuan (provinsi/kabupaten/kecamatan/kelurahan/RT/RW).",
          "Mengunggah Kartu Keluarga.",
          "Dinas menerbitkan Surat Keterangan Pindah WNI (SKPWNI) yang dipakai untuk melapor kedatangan di daerah tujuan.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },
  {
    id: "kedatanganPenduduk",
    nama: "Kedatangan Penduduk (Pindah Datang)",
    kategori: "pindah",
    kasus: [
      {
        persyaratan: [
          "File Surat Pindah / SKPWNI dari daerah asal (wajib)",
          "File Buku Nikah / SPTJM (opsional, bila ada)",
          "File Dokumen Pendukung (opsional)",
        ],
        penjelasan: [
          "Mengisi nomor Surat Pindah/SKPWNI, data penduduk yang pindah, dan alamat tujuan (kecamatan/desa/dusun).",
          "Mengunggah Surat Pindah (SKPWNI).",
          "Dinas menerbitkan KK dengan alamat baru serta pemutakhiran KTP-elektronik.",
        ],
        catatan: [CATATAN_ONLINE],
      },
    ],
  },
];
