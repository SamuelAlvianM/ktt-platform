import type { InfoPageContent } from '@/components/shared/info-page';

/**
 * Konten statis untuk halaman informasi (Produk, PPID, WBS, Hubungi Kami).
 * Diisi placeholder yang relevan untuk Disdukcapil Tana Tidung (SIDAKO)
 * hingga konten asli dari portal lama tersedia untuk dipindahkan.
 */
export const produkContent: Record<string, InfoPageContent> = {
  'produk-disdukcapil': {
    title: 'Produk Disdukcapil',
    description: 'Daftar dokumen kependudukan dan pencatatan sipil yang diterbitkan.',
    list: [
      'Kartu Keluarga (KK)',
      'Kartu Tanda Penduduk Elektronik (KTP-el)',
      'Kartu Identitas Anak (KIA)',
      'Akta Kelahiran',
      'Akta Kematian',
      'Akta Perkawinan',
      'Akta Perceraian',
      'Surat Keterangan Pindah Datang',
    ],
  },
  'formulir-persyaratan': {
    title: 'Formulir & Persyaratan',
    description: 'Persyaratan dokumen untuk setiap jenis permohonan layanan adminduk.',
    body: [
      'Setiap permohonan layanan administrasi kependudukan memerlukan dokumen pendukung yang berbeda-beda sesuai jenis layanannya. Persyaratan lengkap dapat dilihat saat mengisi formulir Permohonan Online, atau ditanyakan langsung ke loket pelayanan.',
    ],
    list: [
      'KK & KTP-el: fotokopi KK lama, surat pengantar RT/RW',
      'Akta Kelahiran: surat keterangan lahir dari bidan/rumah sakit, KK orang tua',
      'Akta Kematian: surat keterangan kematian, KTP/KK almarhum',
      'Pindah Datang: surat pengantar dari daerah asal/tujuan',
    ],
  },
  hukum: {
    title: 'Produk Hukum',
    description: 'Dasar hukum penyelenggaraan administrasi kependudukan.',
    list: [
      'UU No. 23 Tahun 2006 tentang Administrasi Kependudukan',
      'UU No. 24 Tahun 2013 tentang Perubahan UU Adminduk',
      'Peraturan Pemerintah No. 40 Tahun 2019',
      'Peraturan Menteri Dalam Negeri terkait pelayanan Dukcapil',
      'Peraturan Daerah Kabupaten Tana Tidung terkait Disdukcapil',
    ],
  },
  sop: {
    title: 'Standar Operasional Prosedur (SOP)',
    description: 'SOP pelayanan administrasi kependudukan Disdukcapil Tana Tidung.',
    body: [
      'SOP pelayanan disusun untuk menjamin kepastian waktu, biaya (gratis), dan prosedur dalam setiap layanan adminduk.',
    ],
  },

  // ── Tiga sub-menu tambahan (permintaan dinas poin 1) ──
  // Ketiganya menerima DUA macam unggahan sekaligus:
  //   • dokumen PDF  → lewat kategori di lib/dokumen-registry.ts
  //   • gambar/infografis → lewat field `gambar` (blok info.produk.*)
  // Isi `body` sengaja singkat & netral; materi resminya menyusul dari dinas.
  'standar-pelayanan': {
    title: 'Standar Pelayanan (SP)',
    description:
      'Standar pelayanan publik Disdukcapil Tana Tidung — jenis layanan, persyaratan, jangka waktu, dan biaya.',
    body: [
      'Standar Pelayanan memuat ketentuan penyelenggaraan pelayanan publik: persyaratan, sistem dan prosedur, jangka waktu penyelesaian, biaya, produk layanan, serta penanganan pengaduan. Dokumen dan infografis resminya dapat dilihat atau diunduh di bawah ini.',
    ],
  },
  'alur-pelayanan': {
    title: 'Alur Pelayanan',
    description:
      'Tahapan pelayanan administrasi kependudukan dari pendaftaran sampai dokumen diserahkan.',
    body: [
      'Berikut alur pelayanan pada Disdukcapil Kabupaten Tana Tidung beserta perkiraan waktu tiap tahapannya.',
    ],
  },
  inovasi: {
    title: 'Inovasi',
    description:
      'Inovasi layanan Disdukcapil Tana Tidung untuk mempermudah dan mempercepat pelayanan kepada masyarakat.',
    body: [
      'Inovasi layanan dikembangkan agar pelayanan administrasi kependudukan makin dekat, cepat, dan mudah dijangkau masyarakat.',
    ],
  },
};

export const ppidContent: Record<string, InfoPageContent> = {
  'profil-ppid': {
    title: 'Profil PPID',
    description: 'Pejabat Pengelola Informasi dan Dokumentasi Disdukcapil Tana Tidung.',
    body: [
      'PPID (Pejabat Pengelola Informasi dan Dokumentasi) bertugas mengelola dan menyajikan informasi publik di lingkungan Dinas Kependudukan dan Pencatatan Sipil Kabupaten Tana Tidung, sesuai amanat UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.',
    ],
  },
  'gambaran-pembentukan-ppid': {
    title: 'Gambaran Singkat Pembentukan PPID',
    description: 'Latar belakang dan dasar hukum pembentukan PPID Disdukcapil Tana Tidung.',
    body: [
      'PPID dibentuk untuk melaksanakan amanat Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, yang mewajibkan setiap badan publik — termasuk Dinas Kependudukan dan Pencatatan Sipil Kabupaten Tana Tidung — menyediakan, memberikan, dan/atau menerbitkan informasi publik yang berada di bawah kewenangannya.',
      'Sebagai PPID Pelaksana, Disdukcapil Kabupaten Tana Tidung ditunjuk untuk menjalankan tugas pengelolaan dan pelayanan informasi publik di bawah koordinasi PPID Utama Pemerintah Kabupaten Tana Tidung.',
    ],
  },
  'visi-misi-ppid': {
    title: 'Visi dan Misi PPID',
    description: 'Arah dan komitmen PPID Disdukcapil Tana Tidung dalam keterbukaan informasi publik.',
    body: [
      'Visi: Terwujudnya layanan informasi publik Disdukcapil Kabupaten Tana Tidung yang cepat, akurat, dan akuntabel.',
    ],
    list: [
      'Menjamin hak masyarakat memperoleh informasi publik sesuai peraturan perundang-undangan',
      'Meningkatkan kualitas pelayanan informasi publik yang cepat, tepat waktu, dan biaya ringan',
      'Mewujudkan penyelenggaraan pemerintahan yang baik, transparan, efektif, dan akuntabel',
    ],
  },
  'struktur-organisasi-ppid': {
    title: 'Struktur Organisasi PPID',
    description: 'Susunan pengelola informasi dan dokumentasi Disdukcapil Tana Tidung.',
    list: [
      'Atasan PPID: Kepala Dinas Kependudukan dan Pencatatan Sipil',
      'PPID Pelaksana: Sekretaris Dinas',
      'Petugas Layanan Informasi: pejabat/staf yang ditunjuk pada tiap bidang',
    ],
  },
  'maklumat-ppid': {
    title: 'Maklumat PPID',
    description: 'Pernyataan komitmen PPID Disdukcapil Tana Tidung dalam layanan informasi publik.',
    body: [
      '"Kami PPID Disdukcapil Kabupaten Tana Tidung berkomitmen untuk memberikan pelayanan informasi publik yang cepat, tepat, mudah, dan transparan sesuai dengan peraturan perundang-undangan yang berlaku."',
    ],
  },
  'tugas-tanggungjawab-ppid': {
    title: 'Tugas dan Tanggung Jawab PPID',
    description: 'Wewenang dan kewajiban PPID dalam mengelola informasi publik.',
    list: [
      'Mengumpulkan, mengelola, dan mendokumentasikan seluruh informasi publik dari unit kerja',
      'Menyediakan, menyimpan, mendokumentasikan, dan mengamankan informasi publik',
      'Melakukan verifikasi bahan informasi publik',
      'Melakukan uji konsekuensi atas informasi yang dikecualikan',
      'Menyelesaikan sengketa informasi publik sesuai ketentuan yang berlaku',
    ],
  },
  'laporan-ppid-pelaksana': {
    title: 'Laporan PPID Pelaksana',
    description: 'Laporan pelaksanaan tugas PPID pelaksana tahunan.',
  },
  lkjip: {
    title: 'LKJIP',
    description: 'Laporan Kinerja Instansi Pemerintah Disdukcapil Tana Tidung.',
  },
  'survey-kepuasan-masyarakat': {
    title: 'Survey Kepuasan Masyarakat',
    description: 'Hasil survey kepuasan masyarakat terhadap pelayanan publik.',
  },
  'buku-profil-kependudukan': {
    title: 'Buku Profil Kependudukan',
    description: 'Buku profil data kependudukan Kabupaten Tana Tidung.',
  },
  dpa: {
    title: 'Dokumen Pelaksana Anggaran (DPA)',
    description: 'Dokumen pelaksanaan anggaran tahunan Disdukcapil.',
  },
  iki: {
    title: 'Indikator Kinerja Individu (IKI)',
    description: 'Indikator kinerja individu pegawai Disdukcapil Tana Tidung.',
  },
  rkt: {
    title: 'Rencana Kinerja Tahunan (RKT)',
    description: 'Rencana kinerja tahunan Disdukcapil Tana Tidung.',
  },
  renka: {
    title: 'Rencana Kerja (Renka)',
    description: 'Rencana kerja tahunan instansi.',
  },
  'perjanjian-kerjasama': {
    title: 'Perjanjian Kerjasama',
    description: 'Daftar perjanjian kerjasama Disdukcapil dengan pihak lain.',
  },
  rka: {
    title: 'Rencana Kerja dan Anggaran (RKA)',
    description: 'Dokumen rencana kerja dan anggaran tahunan perangkat daerah.',
  },
  lra: {
    title: 'Laporan Realisasi Anggaran (LRA)',
    description: 'Laporan realisasi anggaran pendapatan dan belanja instansi.',
  },
  rfk: {
    title: 'Realisasi Fisik dan Keuangan (RFK)',
    description: 'Laporan realisasi fisik dan keuangan pelaksanaan kegiatan.',
  },
  'rup-pengadaan': {
    title: 'RUP Pengadaan',
    description: 'Rencana Umum Pengadaan (RUP) barang/jasa Disdukcapil Tana Tidung.',
  },
  cakin: {
    title: 'Capaian Indikator Kinerja (Cakin)',
    description: 'Capaian indikator kinerja Disdukcapil Kabupaten Tana Tidung.',
  },
  lapkin: {
    title: 'Laporan Kinerja (Lapkin)',
    description: 'Laporan kinerja pelaksanaan program dan kegiatan Disdukcapil.',
  },
  sakip: {
    title: 'Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)',
    description: 'Dokumen SAKIP Disdukcapil Kabupaten Tana Tidung.',
  },
  lppd: {
    title: 'LPPD',
    description: 'Laporan Penyelenggaraan Pemerintahan Daerah (LPPD).',
  },
  'rencana-aksi': {
    title: 'Rencana Aksi (RA)',
    description: 'Rencana aksi pelaksanaan program dan kegiatan instansi.',
  },
  calk: {
    title: 'Catatan Atas Laporan Keuangan (CALK)',
    description: 'Catatan atas laporan keuangan Disdukcapil Tana Tidung.',
  },
  'pejabat-pelaksana-teknis': {
    title: 'Pejabat Pelaksana Teknis Kegiatan',
    description:
      'Daftar pejabat pelaksana teknis kegiatan (PPTK) di lingkungan Disdukcapil Tana Tidung.',
  },
  bmd: {
    title: 'Barang Milik Daerah (BMD)',
    description: 'Daftar dan pengelolaan barang milik daerah pada Disdukcapil.',
  },
  spip: {
    title: 'Sistem Pengendalian Intern Pemerintah (SPIP)',
    description: 'Penyelenggaraan Sistem Pengendalian Intern Pemerintah (SPIP) di Disdukcapil.',
  },
  'renstra-opd': {
    title: 'Renstra OPD',
    description: 'Rencana Strategis Organisasi Perangkat Daerah.',
  },
  'standar-pelayanan': {
    title: 'Standar Pelayanan',
    description: 'Standar pelayanan publik Disdukcapil Tana Tidung.',
  },
  iku: {
    title: 'Indikator Kinerja Utama (IKU)',
    description: 'Indikator kinerja utama instansi.',
  },
  'perjanjian-kinerja': {
    title: 'Perjanjian Kinerja',
    description: 'Perjanjian kinerja pejabat Disdukcapil Tana Tidung.',
  },
  'sop': {
    title: 'Standar Operasional Prosedur (SOP)',
    description: 'SOP PPID Disdukcapil Tana Tidung.',
  },
  lhkpn: {
    title: 'LHKPN',
    description:
      'Laporan Harta Kekayaan Penyelenggara Negara pejabat di lingkungan Disdukcapil Tana Tidung.',
    body: [
      'LHKPN (Laporan Harta Kekayaan Penyelenggara Negara) adalah laporan seluruh harta kekayaan yang wajib disampaikan penyelenggara negara kepada Komisi Pemberantasan Korupsi (KPK), sesuai UU No. 28 Tahun 1999 dan Peraturan KPK No. 2 Tahun 2020. Kewajiban ini berlaku antara lain bagi pejabat struktural di lingkungan Dinas Kependudukan dan Pencatatan Sipil Kabupaten Tana Tidung.',
      'Pelaporan dilakukan setiap tahun melalui aplikasi e-LHKPN milik KPK. Pengumuman harta kekayaan pejabat yang telah dilaporkan dapat diakses publik melalui menu e-Announcement pada situs resmi e-LHKPN.',
    ],
    list: [
      'Penyampaian LHKPN: paling lambat 31 Maret setiap tahun (periode pelaporan tahun sebelumnya)',
      'Wajib lapor: Kepala Dinas, Sekretaris, dan pejabat struktural sesuai ketentuan',
      'Kanal pelaporan: aplikasi e-LHKPN KPK (elhkpn.kpk.go.id)',
      'Pengumuman harta kekayaan dapat dicari publik melalui menu e-Announcement',
    ],
    links: [
      {
        label: 'Buka e-LHKPN KPK (e-Announcement)',
        href: 'https://elhkpn.kpk.go.id',
        external: true,
      },
    ],
  },
  'zona-integritas': {
    title: 'Zona Integritas',
    description: 'Pembangunan zona integritas menuju WBK/WBBM.',
  },
  'pengendalian-gratifikasi': {
    title: 'Pengendalian Gratifikasi',
    description: 'Kebijakan dan pelaporan pengendalian gratifikasi.',
  },

  // ── Layanan & Formulir PPID (grup ketiga) ──
  'sk-disdukcapil': {
    title: 'SK Disdukcapil',
    description:
      'Surat Keputusan Kepala Dinas terkait penetapan PPID dan pengelolaan informasi publik di lingkungan Disdukcapil Tana Tidung.',
    body: [
      'Surat Keputusan (SK) menjadi dasar hukum penetapan pejabat dan tim pengelola layanan informasi publik. Dokumen resmi dapat diunduh pada tabel berkas di bawah.',
    ],
  },
  'uji-konsekuensi': {
    title: 'Uji Konsekuensi',
    description:
      'Hasil uji konsekuensi atas informasi yang dikecualikan, sesuai Pasal 17 UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.',
    body: [
      'Uji konsekuensi adalah pengujian yang dilakukan PPID untuk menetapkan suatu informasi termasuk dikecualikan atau tidak, dengan mempertimbangkan konsekuensi yang timbul apabila informasi tersebut dibuka. Dokumen hasil uji konsekuensi dapat diunduh pada tabel berkas di bawah.',
    ],
  },
  'sengketa-informasi': {
    title: 'Tata Cara Penyelesaian Sengketa Informasi',
    description:
      'Mekanisme penyelesaian sengketa informasi publik bila pemohon tidak puas atas tanggapan keberatan.',
    image: '/ppid/tata-cara-sengketa-informasi.jpg',
    body: [
      'Apabila pemohon informasi tidak puas terhadap tanggapan atas keberatan, pemohon dapat mengajukan penyelesaian sengketa informasi kepada Komisi Informasi sesuai ketentuan yang berlaku. Alur lengkapnya ditampilkan pada infografis di atas.',
    ],
  },
  'inovasi-layanan': {
    title: 'Inovasi Layanan',
    description:
      'Inovasi layanan administrasi kependudukan dan keterbukaan informasi publik Disdukcapil Kabupaten Tana Tidung.',
    body: [
      'Disdukcapil Tana Tidung terus mengembangkan inovasi untuk mempercepat dan mempermudah layanan kepada masyarakat. Dokumen dan materi terkait inovasi layanan dapat diunduh pada tabel berkas di bawah.',
    ],
  },
};

export const wbsContent: Record<string, InfoPageContent> = {
  'tentang-wbs': {
    title: 'Tentang WBS',
    description: 'Whistle Blowing System Disdukcapil Tana Tidung.',
    image: '/wbs/tata-cara-pengaduan-wbs.png',
    body: [
      'Whistle Blowing System (WBS) adalah sarana pelaporan dugaan penyalahgunaan wewenang, pelanggaran kode etik, kecurangan, gratifikasi, atau perbuatan lain yang merugikan masyarakat/instansi di lingkungan Disdukcapil Tana Tidung. Identitas pelapor dijamin kerahasiaannya.',
    ],
  },
  'form-pengaduan': {
    title: 'Form Pengaduan WBS',
    description: 'Sampaikan laporan dugaan pelanggaran melalui form pengaduan resmi.',
    body: [
      'Untuk menyampaikan pengaduan masyarakat secara umum, gunakan halaman Pengaduan Masyarakat. Form WBS khusus untuk pelaporan dugaan pelanggaran/korupsi akan segera tersedia.',
    ],
  },
};

/**
 * Pusat Bantuan — menu baru atas permintaan dinas (Document from S.A.M, poin 3).
 * Tiga halaman: FAQ, Pengaduan & Konsultasi, Penipuan IKD.
 *
 * Isi FAQ TIDAK di sini — daftar tanya-jawabnya blok tersendiri
 * (`pusat-bantuan.faq` di static-content-registry) supaya admin bisa
 * menambah/mengubah pertanyaan lewat dashboard.
 */
export const pusatBantuanContent: Record<string, InfoPageContent> = {
  faq: {
    title: 'Pertanyaan yang Sering Diajukan (FAQ)',
    description:
      'Jawaban atas pertanyaan yang paling sering ditanyakan warga seputar layanan Disdukcapil Tana Tidung.',
    body: [
      'Belum menemukan jawabannya? Sampaikan lewat halaman Pengaduan & Konsultasi, atau hubungi kanal layanan yang tercantum di sana.',
    ],
  },
  'pengaduan-konsultasi': {
    title: 'Pengaduan & Konsultasi',
    description:
      'Sampaikan pengaduan atau konsultasi layanan kependudukan — kami siap mendengar dan membantu Anda.',
    image: '/pusat-bantuan/alur-pengaduan-konsultasi.jpg',
    body: [
      'Pengaduan dan konsultasi dapat disampaikan melalui kanal yang tersedia: datang langsung ke kantor Disdukcapil, WhatsApp, email, website, SP4N-Lapor, maupun media sosial resmi. Setiap laporan dicatat, diverifikasi, lalu diteruskan kepada bidang terkait untuk ditindaklanjuti.',
      'Anda juga dapat langsung mengisi formulir di bawah ini. Kami akan menyampaikan jawaban atau solusinya melalui kanal yang Anda gunakan.',
    ],
  },
  'penipuan-ikd': {
    title: 'Waspada Penipuan Aktivasi IKD',
    description:
      'Kenali modus penipuan yang mengatasnamakan Disdukcapil Tana Tidung dalam aktivasi Identitas Kependudukan Digital.',
    body: [
      'Beredar upaya penipuan berupa video call atau telepon dari pihak yang mengatasnamakan Disdukcapil Tana Tidung dengan dalih aktivasi Identitas Kependudukan Digital (IKD). Kenali ciri-cirinya agar Anda tidak menjadi korban.',
    ],
    list: [
      'Disdukcapil TIDAK melakukan panggilan video call atau telepon untuk aktivasi IKD.',
      'Disdukcapil TIDAK pernah meminta kata sandi, PIN, foto dokumen, atau data perbankan.',
      'Aktivasi IKD TIDAK dipungut biaya alias gratis.',
      'Aktivasi IKD hanya dilakukan di kantor Disdukcapil resmi atau melalui petugas resmi yang melakukan jemput bola.',
      'Unduh aplikasi IKD resmi hanya melalui PlayStore atau AppStore.',
    ],
  },
};

export const hubungiKamiContent: Record<string, InfoPageContent> = {
  alamat: {
    title: 'Alamat Disdukcapil',
    description: 'Alamat dan informasi kontak kantor Disdukcapil Tana Tidung.',
    body: [
      'Dinas Kependudukan dan Pencatatan Sipil Kabupaten Tana Tidung',
      'Jl. Perkantoran Pemda, Tideng Pale, Kecamatan Sesayap, Kabupaten Tana Tidung, Kalimantan Utara',
    ],
  },
  kontak: {
    title: 'Kontak Kami',
    description: 'Hubungi Disdukcapil Tana Tidung melalui kanal berikut.',
    list: [
      'Telepon: (0553) 2022XXX',
      'Email: disdukcapil@tanatidungkab.go.id',
      'Jam Layanan: Senin–Jumat, 08.00–16.00 WITA',
    ],
  },
  'kritik-saran': {
    title: 'Kritik & Saran',
    description: 'Sampaikan kritik dan saran Anda untuk peningkatan pelayanan Disdukcapil Tana Tidung.',
    body: [
      'Gunakan halaman Pengaduan Masyarakat untuk menyampaikan kritik, saran, atau keluhan terkait pelayanan. Setiap masukan akan menjadi bahan evaluasi peningkatan mutu layanan.',
    ],
  },
  'pengaduan-masyarakat': {
    title: 'Pengaduan Masyarakat',
    description: 'Sampaikan keluhan atau saran terkait pelayanan Disdukcapil.',
  },
};
