# Handoff SIDAKO — sesi 2026-07-20/21

Dokumen ini punya dua tujuan: (a) melanjutkan pekerjaan di SIDAKO, dan (b) jadi
daftar belanja untuk **mem-port perubahan ini ke SAIBATIN** (`saibatin-platform`).

---

## 0. Peta dua project — BACA DULU

| | SAIBATIN (ayah) | SIDAKO (anak) |
|---|---|---|
| Folder lokal | `C:/sam/SAM-AMANDA-GALANG/saibatin/saibatin-platform` | `C:/sam/SAM-AMANDA-GALANG/sidako-platform` |
| Client | Disdukcapil Kab. **Pesisir Barat** | Disdukcapil Kab. **Tana Tidung** |
| Deploy | **cPanel** (engineType=client, adapter-mariadb, `next build --webpack`, `deploy.sh`) | **VPS 76.13.19.247** (Ubuntu, PM2 + Nginx). Path server tetap `/root/ktt-platform` |
| DB lokal | — | `mysql://root@localhost:3306/tanatidung` |
| Dev server | — | `npm run dev -- -p 3300` (ada di `.claude/launch.json`, nama `sidako-dev`) |

**ATURAN KERAS: jangan pernah menyentuh sistem deploy.** Keduanya berbeda dan
sudah jalan. Perbaikan deploy cPanel di SAIBATIN **tidak berlaku** untuk SIDAKO.
Yang di-port antar-project hanya **FITUR & UI**, bukan deployment.

**Arah port sesi ini terbalik dari biasanya:** biasanya SAIBATIN pionir → SIDAKO
ikut. Sesi ini user minta dikerjakan **di SIDAKO dulu**, baru disalin ke SAIBATIN.

Akun uji lokal SIDAKO (dari `prisma/seed.ts`):
- admin / `admin123` (level 1)
- `6504010101900001` / `warga123` (level 3, "Budi Warga")

---

## 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN

### 1.1 Sisa branding Pesisir Barat di SIDAKO
Ketemu di **`public/relasi/dinas.png`** — masih lambang Kab. Pesisir Barat,
tampil di seksi "Relasi Terkait" landing page. Label & link sudah Tana Tidung,
gambarnya kelewat waktu rebranding.

- `lib/relasi-content.ts` → logo diarahkan ke `/LOGO-dinas_sidako.png`.
- Logo relasi lain (LPSE, Kemendagri, LAPOR, Ombudsman, PANRB, Kotaku, SIAPP) generik → aman.
- **Bukan di PDF.** Kalau nanti masih ada sisa branding, cek `public/relasi/`.

> **Port ke SAIBATIN: TIDAK PERLU** (di sana Pesisir Barat memang benar).

### 1.2 Carousel landing page — kurang besar & kepotong
- `components/landingpage/hero-section.tsx` → kolom `lg:w-[46%]` → `lg:w-[52%]`;
  tinggi `h-[240px] sm:h-[320px] md:h-[380px]` → `h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px]`.
  Terukur: bingkai 568×499 px (dari ~380 px).
- `components/landingpage/carousel.tsx` → **penyebab kepotong = `bg-cover`**.
  Sekarang dua lapis: latar `bg-cover` di-blur (mengisi bingkai, tak ada bilah
  kosong) + foto utama **`bg-contain`** (seluruh isi foto terlihat).

⚠️ **Catatan:** 4 slide bawaan di `carousel.tsx` masih **placeholder Unsplash**
(ada TODO di kode). Foto asli diunggah lewat dashboard → Konten → Carousel Hero.

> **Port ke SAIBATIN: YA.**

### 1.3 Permohonan Online pindah ke dashboard, tanpa modal
Ini perubahan terbesar sesi ini.

- `lib/navigation.ts` → entri navbar **"Pelayanan Online" dihapus**.
- `app/permohonan-online/page.tsx` → sekarang **redirect** ke `/user/pengajuan/baru`
  (URL lama tidak mati). Versi modal lamanya ada di riwayat git (commit `0f559e1` dst).
- **Rute baru:**
  - `app/user/pengajuan/baru/page.tsx` + `PilihLayananClient.tsx` — pemilih 15 layanan
    (pencarian, filter kategori, hormati `pelayanan.visibilitas`).
  - `app/user/pengajuan/baru/[layanan]/page.tsx` + `FormPageClient.tsx` — form halaman penuh.
- `lib/permohonan-layanan.ts` **(BARU)** — registry 15 layanan (slug, judul, ikon, kategori).
- `lib/icon-map.ts` → tambah ikon `UserPlus`, `Printer`, `ScrollText`, `Book`
  (di import **dan** `ICON_MAP`).

**Trik utama — jangan dibongkar waktu port:**
`components/permohonan-online/form-shell.tsx` **(BARU)** meniru API `Dialog`
(`Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`).
Tiap form (15 berkas `*Modal.tsx`, masing-masing ~700 baris) cukup **ganti satu
baris import** dari `@/components/ui/dialog` → `@/components/permohonan-online/form-shell`.
Di dalam `<FormPageMode>` dirender sebagai halaman; tanpa itu tetap modal.
Jadi 15 form tidak perlu dibedah sama sekali.

`components/permohonan-online/form-map.tsx` **(BARU)** — peta slug → komponen
form via `next/dynamic` (`ssr:false`) supaya satu rute tidak memuat 15 form.

**Titik masuk:**
- Warga/OPD: tombol di `/user/pengajuan` → `/user/pengajuan/baru`.
- Petugas: sidebar dashboard → "Pengajuan Baru" (`/dashboard/pengajuan-baru`, sudah ada).
- Hero beranda (pencarian + tombol cepat) → `/user/pengajuan/baru?q=...`;
  belum login otomatis dilempar ke `/login?redirect=...`.
- **Dropdown akun navbar SENGAJA tidak memuat "Ajukan Permohonan"** (permintaan user):
  admin & staff → Dashboard + Pengaturan Akun; warga & OPD → Pengajuan Saya + Pengaturan Akun.

> **Port ke SAIBATIN: YA, seluruhnya.**

### 1.4 Input tanggal tidak bisa diketik
`components/ui/date-picker.tsx` — dulu **hanya tombol + kalender popover, tanpa
kotak teks**. Tanggal lahir 1965 harus diklik lewat dropdown.

Sekarang ada kotak ketik bermasker: `17081965` → `17/08/1965`, tombol kalender
di kanan. Ketikan setengah jadi tidak di-commit (biar `17/08/19` tidak jadi
tahun 19); `maxToday` juga ditegakkan saat diketik.

**Penting:** form warga & form staff dashboard memakai komponen yang **sama**,
jadi satu perbaikan ini kena dua-duanya.

> **Port ke SAIBATIN: YA.**

### 1.5 Upload — batas ukuran, OOM, dan path traversal
`app/api/upload/route.ts` (dipakai PPID/Dokumen Publikasi):

1. **Batas 5 MB untuk semua jenis** → dokumen PPID hasil pindai (LKJIP, Renstra,
   DPA, Buku Profil) selalu ditolak. Sekarang gambar 5 MB, **PDF 25 MB**.
2. **AKAR "500 tanpa response" di server**: route memuat seluruh berkas ke memori
   (`Buffer.from(await file.arrayBuffer())` = dua salinan). Dengan batas 25 MB
   itu lonjakan ~50 MB RAM per unggahan → proses Node kena **OOM** di VPS ber-PM2
   → Nginx balas 500 **tanpa body**. Sekarang **streaming ke disk**
   (`pipeline(Readable.fromWeb(file.stream()), createWriteStream(...))`).
   Berkas separuh tertulis dihapus bila aliran putus.
   Terverifikasi: PDF 6 MB masuk utuh (6.291.456 byte keluar = masuk).
3. **Path traversal**: `folder` dari klien langsung di-`join` ke path.
   `folder=../../../keluar` bisa menulis di luar direktori unggahan.
   Sekarang disanitasi (`folderAman()`), sudah diuji tertahan.

Klien juga diperbaiki — dulu `res.json()` pada respons non-JSON (413/502 HTML)
melempar, sehingga **spinner menggantung selamanya tanpa pesan** atau muncul
pesan generik "Gagal mengunggah file" yang menutupi penyebab asli:
- `app/dashboard/produk/AdminProduk.tsx`
- `components/media/media-upload.tsx` (dipakai unggah gambar carousel)

⚠️ **DI LUAR KODE — perlu dicek manual di VPS:** kalau `client_max_body_size`
Nginx masih bawaan **1 MB**, unggahan besar ditolak sebelum sampai aplikasi.
Ini bagian deployment, user minta jangan disentuh.

> **Port ke SAIBATIN: YA** (SAIBATIN punya masalah upload serupa; cek juga
> apakah di sana `/api/upload` sudah menulis ke `storage/permohonan/`).

### 1.6 Animasi transisi
- `components/shared/dashboard-sidebar.tsx`:
  - Label menu dulu di-*unmount* (`{!collapsed && label}`) → berkedip hilang
    sementara lebar sidebar masih beranimasi. Sekarang komponen `LabelSidebar`
    memudar + meluncur lewat **`max-width`** (`width:auto` tidak bisa ditransisi).
  - Ikon chevron dulu **bertukar dua komponen** → sekarang satu ikon diputar 180°.
  - **Jank saat muat halaman**: `collapsed` mulai `false` lalu `useEffect` baca
    localStorage → sidebar terlihat melebar dulu baru menciut. Ditambah penanda
    `siapAnimasi` (via `requestAnimationFrame`) supaya transisi mati khusus
    penyetelan awal.
  - **Gap saat menciut (bug turunan!)**: label selebar 0 **tetap flex item**,
    jadi `gap-2.5` menyisakan ruang di kanan dan ikon tidak di tengah →
    `collapsed && 'gap-0'`. Di footer (`flex-col`) `max-width:0` tidak
    meniadakan **tinggi**, jadi label harus benar-benar dilepas.
    Terverifikasi: sisa kiri 24px = sisa kanan 24px, selisih dari tengah 0.
- `components/ui/tabs.tsx` → `TabsContent` dulu bertukar mendadak; sekarang fade+slide.
- `app/template.tsx` **(BARU)** + keyframe di `app/globals.css` → transisi masuk
  antar-halaman. **HANYA opacity, tanpa transform** — `transform` pada leluhur
  membuat containing block baru dan **merusak `position: sticky` sidebar**.
  Sudah diuji: setelah scroll 600px sidebar tetap menempel di top 0.
- Sudah bagus, sengaja **tidak** disentuh: tab Profil Instansi (`AnimatePresence`
  + `layoutId` berpegas), popover/dialog/sheet/select (Radix `animate-in`),
  dropdown navbar, kartu landing, carousel.
- `prefers-reduced-motion` **dan** kelas `a11y-no-motion` dari widget
  aksesibilitas sudah terpasang global di `globals.css` → semua animasi baru
  otomatis patuh, tidak perlu tambahan.

> **Port ke SAIBATIN: YA.**

### 1.7 Sub-menu navbar yang bisa dibuat admin
- `lib/navigasi-tambahan.ts` **(BARU)** — tipe `MenuTambahan`, `gabungNavigasi()`,
  `buatSlug()`, `hrefTambahan()`, `kunciHalamanTambahan()`.
- `lib/static-content-registry.ts` → blok `navigasi.tambahan`, plus
  `blokHalamanTambahan()` yang **membentuk blok saat diminta** untuk kunci
  `halaman.<slug>` (slug baru ada saat runtime, tak bisa didaftarkan di muka;
  pola slug dibatasi ketat agar kunci sembarangan ditolak).
- `components/shared/navbar.tsx` → pakai `gabungNavigasi()` + `useStaticContent`.
  **Navbar sudah mendukung `subItems` sejak awal** — tidak perlu diubah.
- `app/halaman/[slug]/` **(BARU)** — halaman tujuan otomatis. Slug divalidasi
  terhadap daftar menu di DB → `/halaman/ngawur` **404**, bukan halaman kosong.
- `app/dashboard/navigasi/` **(BARU)** — editor (superadmin saja).
- Sidebar dashboard → entri "Menu Navigasi".

**Desain penting:** yang disimpan di DB **hanya tambahan admin**. Menu bawaan
tetap di `lib/navigation.ts` (kode) dan tidak pernah masuk store → **mustahil
terhapus lewat editor**. Perlindungan **struktural**, bukan pengecekan flag.
Menu bawaan tanpa dropdown (mis. "Hubungi Kami") otomatis jadi dropdown begitu
diberi anak, tautan aslinya dipertahankan sebagai item pertama.

Terverifikasi ujung-ke-ujung: sub-menu muncul di navbar, halamannya 200,
slug asing 404, menu bawaan utuh.

⚠️ **Ada data uji tersisa di DB lokal**: sub-menu "Laporan Tahunan" di bawah
PPID, dan mungkin "hi-sam". Hapus lewat dashboard → Menu Navigasi.

> **Port ke SAIBATIN: YA.**

---

## 2. BELUM SELESAI — antrean berikutnya

Diurut sesuai permintaan user terakhir (sesi dihentikan sebelum dikerjakan).

1. **Carousel — gambar tersemat belum bisa diedit.** User minta bisa mengganti
   gambar yang sudah dipasang, **dan** ada info dimensi yang disarankan supaya
   seragam. Perlu ditentukan angkanya; bingkai sekarang ~568×499 px
   (rasio ±1.14:1), jadi saran wajar **1200×1050 px**. Konfirmasi dulu ke user.
2. **Form pengajuan warga/OPD dibuat seperti dashboard** — jangan step-by-step,
   **satu halaman dengan segmen-segmen**. Rujukan: form staff di
   `components/dashboard/staff-pengajuan-form.tsx` + `lib/layanan-forms.ts`
   (sudah tersegmentasi, lihat commit `fa13e9f`).
3. **Download PDF gelap / tidak keluar apa-apa** — `app/api/permohonan/[id]/pdf/route.ts`.
   Belum didiagnosis sama sekali.
4. **Log aktivitas admin di dashboard** (admin-only): "admin A melakukan X pada
   tanggal Y". Perlu tabel baru → **migrasi DB**.
5. **Chart di dashboard masih jelek** — perlu dipercantik.
6. **Rename menu sidebar "Dashboard" → "Statistik Rekap"**
   (`components/shared/dashboard-sidebar.tsx`, `GROUPS` & `MOBILE_MAIN`). Kecil.
7. **Foto profil pengguna** — perlu kolom `userFoto` (nullable) di model User →
   **migrasi Prisma**. Rencana: unggah lewat `/api/media/upload` (sudah auto
   WebP + resize), tampil di avatar navbar & footer sidebar.
   **Ditahan karena SIDAKO live di VPS — user belum menyetujui migrasi.**
8. **Tab tambahan di Profil Instansi.** ⚠️ Sudah diselidiki: tab-nya **hardcoded
   5 buah** di `components/landingpage/profile-tabs.tsx` dengan panel bespoke
   masing-masing (`activeTab === 'x' && <XPanel/>`). Menambah tab **bukan**
   sekadar menambah entri array — butuh panel baru atau panel generik.
9. **SKM: link dari Ombudsman** — menunggu ketentuan/URL dari client.
10. **Bug terlihat di screenshot user:** modal "Edit Konten Halaman" untuk
    halaman buatan navigasi (`halaman.<slug>`) **spinner menggantung**. Kemungkinan
    editor belum tahu cara merender field `richtext` untuk blok yang dibentuk
    runtime. **Perlu dicek** — ini bagian dari fitur 1.7 yang saya buat.

---

## 3. CATATAN KEBERSIHAN REPO

`git status` SIDAKO menunjukkan **banyak berkas termodifikasi yang bukan dari
sesi ini** (`README.md`, `.env.example`, `app/api/otp/send/route.ts`,
`app/privasi/page.tsx`, `PANDUAN-UI-KTT.pdf` terhapus + `PANDUAN-UI-SIDAKO.pdf`
baru, dll). Itu sudah ada di working tree sebelum sesi dimulai.
**Periksa dulu sebelum commit** — jangan asal `git add -A`.

Berkas uji unggahan sudah dibersihkan dari `public/uploads/produk/`.

---

## 4. PROMPT UNTUK SESI BERIKUTNYA

> Lanjutkan pekerjaan SIDAKO di `C:/sam/SAM-AMANDA-GALANG/sidako-platform`.
> Baca `HANDOFF-SIDAKO-2026-07-21.md` lebih dulu — di situ ada peta project
> SIDAKO vs SAIBATIN, apa yang sudah selesai, dan antrean berikutnya.
>
> **Jangan ubah sistem deploy** (SIDAKO = VPS + PM2/Nginx; SAIBATIN = cPanel).
> Dev server: `npm run dev -- -p 3300`. Login uji: `admin` / `admin123`.
>
> Kerjakan bagian 2 (BELUM SELESAI) sesuai urutan, kecuali user minta lain.
> Mulai dari nomor 10 (bug modal edit konten menggantung) karena itu regresi
> dari fitur yang baru dibuat, lalu nomor 6 (rename sidebar, cepat), baru
> sisanya. Untuk yang butuh migrasi DB (nomor 4 & 7), **konfirmasi ke user dulu**
> karena SIDAKO sedang live.
>
> Setelah semua beres di SIDAKO, port bagian 1 ke SAIBATIN
> (`C:/sam/SAM-AMANDA-GALANG/saibatin/saibatin-platform`) — daftar berkasnya
> ada di tiap sub-bagian, dan yang perlu di-port sudah ditandai
> "**Port ke SAIBATIN: YA**".
