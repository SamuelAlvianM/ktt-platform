# Journal — SIDAKO (`sidako-platform`)

> **Terakhir diperbarui: 2026-08-08** · anak dari [`../journal.md`](../journal.md) §3.2
>
> Berkas ini **keadaan sekarang** khusus SIDAKO: status, antrean, jebakan lokal.
> Riwayat per-sesi tetap di [`sync-sam-journals/ssj_*.md`](sync-sam-journals/)
> (folder itu **tidak pernah masuk GitHub** dan tidak ikut deploy).

## 1. Identitas project

| | |
|---|---|
| Client | Disdukcapil **Tana Tidung**, Kalimantan Utara |
| Peran di keluarga | **anak** dari SAIBATIN; **induk** dari TIDORE/DAGA |
| Stack | Next.js 16 (App Router) + React 19 + Prisma + MySQL, Tailwind v4 |
| Warna | oranye / amber |
| Port dev | **3102** (`sidako-dev`) — 🔴 DIPATENKAN, jangan digeser; sudah nyala → pakai yang itu (lihat `../journal.md` §1) |
| Deploy | **VPS `76.13.19.247`** — PM2 + **Nginx**, build di laptop, kirim `.next/standalone` |
| Cookie sesi | `sidako_session` · localStorage `sidako-dash-collapsed`, `sidako-a11y`, `sidako_vid` |
| Line ending | **LF** (SAIBATIN CRLF — pakai `diff --strip-trailing-cr` saat membandingkan) |

## 2. Keadaan repo per 8 Agu 2026

```
Branch aktif : feat/pendaftaran-foto-manajemen-akun
HEAD         : f0acfd8 "feat(galeri): tampilan polos + atur kolom 2/3/4 + penyaring & pengurutan"
vs origin/main: main tertinggal 10 commit → branch fitur BELUM pernah di-merge
```

**Paginasi + perbaikan navbar sudah di-commit** (8 Agu, `51c9d8b`). Sebelumnya 5 berkas
itu menggantung di working tree sejak 1–3 Agustus padahal kodenya sudah live:
`components/shared/pagination.tsx` (BARU), `app/api/admin/permohonan/route.ts`,
`AdminPermohonan.tsx`, `AdminUsers.tsx`, `components/shared/navbar.tsx`
(HISTORY §2.12-L & §2.12-N.4).

Lalu `5361e0d` + `dfffa90` (8 Agu) dan `ba9dc5d` (9 Agu) — **seluruh 6 butir
permintaan dinas**, lihat §8.

✅ **Semua sudah di-push & di-deploy.** Deploy 8 Agu diverifikasi di produksi:
beranda memuat "Total Pelayanan Online", "Informasi Produk", "Pusat Bantuan", dan
`latar-upun-taka.jpg`; `/pusat-bantuan/faq`, `/pusat-bantuan/penipuan-ikd`,
`/produk/alur-pelayanan` semuanya **200**. Deploy 9 Agu (`ba9dc5d`) diverifikasi
dengan memeriksa chunk `/_next/static/chunks/app/galeri/page-*.js` di produksi —
memuat penanda "Mode Edit aktif"/"Tambah Foto Galeri".

**Sengaja masih untracked:**
- `Document from S.A.M` — dokumen permintaan dinas (§8), Word 2,4 MB.
- `JOURNAL.md` — berkas ini sendiri; putuskan dulu mau ikut GitHub atau tidak.
- `public/uploads/ppid/1_1784890914676.jpg` — unggahan uji yatim (ssj 25 Juli §6),
  hapus saja bila mau bersih. **Jangan `git add -A` buta.**

## 3. Status deploy — **sudah di-deploy**

Dikonfirmasi user **8 Agu 2026**: paginasi bernomor + perbaikan dropdown navbar
**sudah di-deploy sendiri oleh user** ke VPS produksi. Catatan lama di HISTORY
(§2.12-L *"belum di-deploy"*, §2.12-N.4 *"belum di-deploy ulang"*) **tidak berlaku lagi**.

⚠️ Yang belum pernah dilakukan: **verifikasi di situs live**. Yang diverifikasi di produksi
sejauh ini hanya TIDORE. Kalau muncul gejala aneh di dashboard/navbar SIDAKO, mulai dari sini.

## 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR

**Diperiksa langsung di DB produksi 8 Agu 2026: `user_foto` DAN `user_kecamatan`
sudah ada.** Deploy 8 Agu berjalan tanpa masalah. Riwayat masalahnya disimpan di
bawah ini supaya tidak dibangkitkan lagi sebagai "blocker".

Cara memeriksanya lagi bila perlu (read-only, dari laptop):

```bash
ssh root@76.13.19.247 'set -a; . /root/ktt-platform/.env; set +a; mysql -u"$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" -e "SHOW COLUMNS FROM users LIKE \"user\_%\";"'
```

<details><summary>Riwayat (dicatat ssj 25 Juli §4b, kini sudah tidak berlaku)</summary>

- Commit `2c503e8` (foto profil) menambah **2 kolom nullable** di tabel `users`:
  `user_foto` dan `user_kecamatan` (`prisma/schema.prisma:33,36`).
- Project ini **tidak punya `prisma/migrations/`** — skema didorong lewat `db push`.
- Prisma meng-`SELECT` **semua** kolom model → kalau DB live belum punya dua kolom itu,
  **setiap query User (login & sesi) balas 500**.
- Perubahannya aditif & nullable jadi **aman**, tapi menyentuh **DB produksi yang live**
  → aturan keras journal induk §2.3: **wajib konfirmasi user dulu**.

**Yang perlu dipastikan sebelum deploy berikutnya:** apakah kolom ini sudah ada di DB live.
Kalau belum, jalankan lebih dulu (SQL bertarget, bukan `db push` buta):

```sql
ALTER TABLE users ADD COLUMN user_foto VARCHAR(255) NULL, ADD COLUMN user_kecamatan VARCHAR(255) NULL;
```

</details>

## 5. Antrean SIDAKO

### Wajib
1. ~~Commit 5 berkas yang menggantung~~ — **SELESAI** 8 Agu (`51c9d8b`), sudah di-push.
2. ~~Blocker kolom `users`~~ — **GUGUR**, kolomnya sudah ada di produksi (§4).
3. ~~Kerjakan permintaan dinas~~ — **SELESAI & SUDAH LIVE** 8 Agu, seluruh 6 butir (§8).
4. Pertimbangkan **merge branch fitur ke `main`** — `main` tertinggal 10 commit,
   sementara branch fitur inilah yang melayani warga.
5. **Uji sisi admin** — sebagian sudah: editor galeri diuji tuntas 9 Agu (tambah,
   pilih dari pustaka, simpan, hapus) memakai login `admin`/`admin123` di dev.
   **Belum diuji:** editor 3 tab profil, editor FAQ, editor halaman Pusat Bantuan
   & Informasi Produk, unggah infografis.

6. **Label zona di gerbang jam layanan sudah diperbaiki, belum di-deploy** (13 Agu,
   [HISTORY §M](../HISTORY.md)). Zona hitungnya memang sudah benar
   (`Asia/Makassar`/WITA — Tana Tidung UTC+8); yang salah cuma tabel jadwal yang
   menulis **"WIB"** hardcode. Kini pakai `JAM_TIMEZONE_LABEL = "WITA"`.
   Tidak mengubah perilaku, hanya teks.

### Warisan dari sesi lama yang belum tuntas
5. **Uji editor Struktur Organisasi dengan login admin** (ssj 25 Juli §3 & §7.1) —
   satu-satunya bagian fitur itu yang belum pernah dilihat mata langsung:
   toggle Bagan/Gambar tersimpan, selektor Tingkat mengubah warna, ganti mode tidak
   menghapus data mode lain.
6. **Isi konten resmi PPID** — 5 halaman "Tentang PPID" masih placeholder, PDF tiap
   kartu masih kosong. **Menunggu materi dari dinas.**
7. Label **"Rencana Kerja (Renka)"** di `lib/ppid-informasi.ts` & `lib/dokumen-registry.ts`
   — PDF panduan menulis "Renja". Cek juga perlu-tidaknya menu "SOP PPID" berdiri sendiri.
8. **ESLint project rusak** (pre-existing): `npm run lint` crash
   *"Converting circular structure to JSON"* / *"property 'react' closes the circle"*.
   Tidak menghambat `next build` (Next 16 tak lagi menjalankan eslint saat build).
9. **OTP pendaftaran masih dummy** (lihat pesan commit `4f609c2`).
10. `public/uploads/ppid/1_1784890914676.jpg` — unggahan uji yatim, hapus bila mau bersih.
11. **Jurnal sesi 24 Juli tidak pernah ditulis** (galeri PPID, slider campur, penyatuan
    profil beranda↔PPID, commit `5f96b51`) — riwayat keputusannya cuma ada di ingatan.

### Diserahkan ke user (aturan §2.1 journal induk — jangan dieksekusi sendiri)
12. Pola `storage/` ikut ke bundle deploy juga ada di SIDAKO (HISTORY §2.12-O).
    Isinya kecil & tak ada symlink jadi tidak merusak, tapi mengotori storage produksi.
    **Patch diserahkan, tidak dijalankan.**
13. 🔴 `saibatin/saibatin-platform/deploy/README.md` **menunjuk IP `76.13.19.247` — server ini.**
    `deploy.sh --provision --db-setup` dari folder SAIBATIN akan **menimpa provisioning
    & DB SIDAKO.** Bahaya buat SIDAKO, tapi berkasnya milik SAIBATIN → diserahkan ke user.

### Kandidat pekerjaan serempak tiga project
14. Tabel dashboard yang belum punya versi kartu mobile (pola sudah ada di `AdminUsers`
    & `AdminPermohonan`): `berita`, `produk`, `media`, `pengaduan`, `skm`, `galeri`,
    `log`, `kritik-saran`, `pengajuan-baru`, `demografi`, `konten`.
15. Beranda mengunduh Highcharts 273 KB + Leaflet 145 KB padahal keduanya di bawah layar
    → gerbang `IntersectionObserver` menunda **418 KB**. Menunggu keputusan user.
16. Dialog `max-w-4xl`/`max-w-2xl` **tanpa** varian `sm:` menempel ke tepi di layar sempit:
    `ppid/galeri-profil.tsx`, `media/image-cropper-dialog.tsx`, `EditorNavigasi.tsx`.

## 6. Yang sudah selesai (jangan dikerjakan ulang)

- **Widget aksesibilitas disabilitas** — `components/shared/accessibility-widget.tsx` +
  `lib/a11y.ts` sudah ada dan terpasang di `app/layout.tsx`. `PROMPT-DISABILITAS.md`
  di akar itu **prompt yang sudah dieksekusi**, bukan antrean.
- **Editor Struktur Organisasi** dua-mode (Bagan manual berwarna per tingkat / Gambar)
  + mode gambar untuk tab Visi&Misi, Maklumat, Tugas&Fungsi (ssj 25 Juli).
- **Halaman Syarat & Ketentuan** + tab persyaratan per-layanan (`395c4ab`).
- **Manajemen akun, halaman editable, PPID, daftar akun** (`4f609c2`).
- **Handoff lama `HANDOFF-SIDAKO-2026-07-21.md` sudah clear** — isinya sudah dikerjakan.

## 7. Jebakan khusus SIDAKO

- 🔴 **`components/shared/navbar.tsx`: deretan menu itu kotak ber-`overflow-x-auto`.**
  Overflow di satu sumbu memaksa sumbu lain jadi `auto` → apa pun yang mengambang
  sebagai anaknya (dropdown/tooltip/popover) **ter-clip total**: tak tergambar dan
  **tak bisa di-hit-test**. Pakai **portal ke `<body>`**. Komentar peringatan sudah
  ditanam di berkasnya.
- 🔴 **Tiap kali menu navbar berubah, ambang desktop WAJIB diukur ulang.** Sekarang
  **1460px** (TIDORE 1360 — jangan disamakan). Deret desktop **sengaja tanpa ikon**:
  ikon memakan ±132px dan membuat kebutuhannya jadi 1573px. Rumusnya:
  `logo 211 + isi menu + blok kanan (270 saat login) + padding 64 + gap`.
- **`PUT /api/admin/static-content` me-*replace* konten, bukan merge.** Editor harus
  mengirim `{mode, gambar, organisasi}` **sekaligus**; kirim sebagian = sisanya hilang.
  Jangan "optimalkan".
- **Modul yang dipakai lintas server/client jangan `'use client'`** — data polos yang
  diekspor dari modul `'use client'` tidak sampai utuh ke server (ssj 22 Juli §3.1).
  Karena itu `lib/struktur.ts` modul biasa.
- **`lib/use-infinite-scroll.ts` jangan dihapus** walau `AdminPermohonan` tak memakainya
  lagi — `riwayat-list.tsx` masih pakai.
- **Matikan dev server 3102 sebelum `prisma generate`/build**, kalau tidak EPERM
  (DLL query engine terkunci) / konflik `.next`.
- **Ukur di jalur yang benar:** deploy memakai `next build --webpack`, bukan Turbopack
  bawaan `npm run dev`/`npm run build`.
- **`NEXT_PUBLIC_*` di-bake saat build di laptop** — `.env` di server tidak berpengaruh.
  Nilai dev harus di `.env.development.local`.
- **Panel browser yang tidak ditampilkan berhenti meng-compositing** → transisi CSS beku,
  `getComputedStyle` bohong, klik nyata tidak sampai. Sudah dua kali membuat perbaikan
  yang benar terbaca seolah gagal. Suntik `transition:none` atau pakai `element.click()`.
- 🔴 **Berkas warga tidak pernah boleh masuk `public/`** — Next menyajikan `public/`
  tanpa cek sesi. Tempatnya `storage/permohonan` lewat `app/uploads/[...path]/route.ts`.

## 8. Permintaan dinas — `Document from S.A.M` (dibaca 8 Agu 2026)

Berkas Word 2,4 MB di akar project (**tanpa ekstensi**, tetap `.docx` yang sah), 7 gambar.
Judul aslinya *"To Do List SIDAKO Disdukcapil Tana Tidung"*. **6 butir:**

| # | Permintaan | Sifat | Titik sentuh |
|---|---|---|---|
| 1 | Menu **Produk** → **Informasi Produk**, + sub menu **Standar Pelayanan (SP)**, **Alur Pelayanan**, **Inovasi** | 1 rename + 3 halaman | `lib/navigation.ts:29`, `lib/info-content.ts` (`produkContent`), `lib/dokumen-registry.ts` |
| 2 | Galeri menampilkan **Dokumentasi Kegiatan Layanan** | ❓ perlu diperjelas | `app/galeri/page.tsx` — fiturnya **sudah ada** |
| 3 | Menu baru **Pusat Bantuan** setelah WBS: **FAQ**, **Pengaduan & Konsultasi**, **Penipuan IKD** | menu + 3 halaman | `lib/navigation.ts:118`, `components/shared/wbs-form.tsx` |
| 4 | **Motto**, **Profil Pejabat**, **Sejarah** bisa diedit/unggah gambar | perluasan pola lama | `lib/static-content-registry.ts`, `components/landingpage/profile-tabs.tsx` |
| 5 | **Ganti background** situs — 2 opsi motif *Upun Taka* | ❓ perlu keputusan | `components/landingpage/hero-section.tsx:93` |
| 6 | Judul kartu **"Total Pelayanan" → "Total Pelayanan Online"** | 1 baris | `components/landingpage/stats.tsx:220` |

**Temuan penting saat pemetaan:**

- **Butir 1 jauh lebih ringan dari kelihatannya.** Halaman produk sudah generik
  (`app/produk/[...slug]/page.tsx` + `produkContent` + `dokumen-registry`) → menambah
  halaman = menambah konfigurasi. Kategori `STANDAR_PELAYANAN` dan konten `inovasi-layanan`
  **sudah ada**, cuma baru dipetakan ke jalur PPID. **Unggah PDF/JPEG juga sudah didukung**
  (`AdminProduk.tsx:283` menerima `.pdf,image/png,image/jpeg`) — tak perlu diubah.
- **"Alur Pelayanan" beda sendiri**: bukan daftar berkas unduhan, melainkan *judul + gambar*
  yang tampil langsung. Pakai pola `modeGambar` yang sudah ada.
- **Butir 4 terbelah dua**: `profil.motto` sudah blok CMS, tinggal +`modeGambar` (**ringan**);
  tapi **Profil Pejabat & Sejarah gambarnya dipaku di kode** (`profile-tabs.tsx` →
  `GambarPanel`, `/ppid/profil-pejabat-kepala-dinas-v2.jpg`) — belum punya blok CMS sama
  sekali, jadi harus dibuatkan.
- **Butir 5 punya dua ganjalan**: dua gambar opsi itu diambil dari dalam Word →
  **sudah terkompres, hanya ~900 px**, sedangkan latar selebar layar butuh ≥1920 px.
  **Minta berkas asli ke dinas.** Lalu cakupannya (hero beranda saja / semua hero /
  seluruh halaman) belum diputuskan, dan latar seramai itu perlu lapisan peneduh
  supaya teks tetap terbaca.
- **Gambar butir 3 aman**: infografis alur pengaduan & poster IKD **sudah materi resmi
  Tana Tidung** (berlogo Disdukcapil KTT) — beda dengan kasus TIDORE yang mewarisi
  infografis Tana Tidung. Tapi nomor WA & alamat email di infografis **perlu dicek masih
  berlaku** sebelum tayang.
- 🔴 **Butir 3 menyentuh navbar** → ingat jebakan §7: dropdown wajib lewat portal, dan
  menambah menu menambah lebar deretan → **ambang desktop 1440px perlu diukur ulang**.

### Sudah dikerjakan — commit `5361e0d` (8 Agu 2026)

**4 dari 6 butir selesai & terverifikasi.** `tsc` bersih, `next build --webpack`
(jalur `deploy.sh`) hijau, diuji di browser. **Belum di-deploy.**

- **Butir 6** — judul kartu jadi "Total Pelayanan Online".
- **Butir 1 (sebagian)** — menu jadi "Informasi Produk". 🔴 **Path `/produk/*` sengaja
  TIDAK diubah** supaya tautan lama & berkas yang sudah diunggah tetap hidup.
- **Butir 4** — Motto dapat flag `modeGambar`; Profil Pejabat & Sejarah jadi blok CMS
  baru (`profil.profil-pejabat`, `profil.sejarah`) dengan default mode `gambar`
  menunjuk berkas lama → **tampilan yang belum disunting tidak berubah sama sekali**.
  Tombol Edit kini muncul di ketujuh tab.
- **Butir 3** — menu **Pusat Bantuan** + 3 halaman di `app/pusat-bantuan/[...slug]/`.
  `WbsForm` dapat varian `pengaduan` (dua field khusus WBS disembunyikan).
  Poster IKD lewat `<picture>`: landscape ≥768px, portrait di ponsel.

**🔴 Navbar diukur ulang** (ini yang paling gampang terlupa):
- **Ikon dibuang dari deret menu desktop** — hemat ±132px. Dengan ikon, kebutuhannya
  **1573px**, artinya laptop 1536px pun jatuh ke hamburger. Ikon **tetap ada** di panel
  hamburger. Menambah ikon kembali = menaikkan ambang lagi.
- Label navbar "Survei Kepuasan Masyarakat" → **"Survei Kepuasan"** (231px, item
  terlebar). Judul halaman & metadata tetap lengkap. **Kunci peta ikon di
  `navbar.tsx` ikut diubah** — kalau label diubah lagi, ubah juga di sana.
- **Ambang desktop 1440 → 1460** (terukur 1451px saat pengguna login).

**🔴 Isi FAQ bawaan masih DRAFT.** Sengaja dibatasi pada cara memakai portal +
ketentuan UU 24/2013 soal biaya. Jam layanan, nomor kontak, dan janji waktu
penyelesaian **tidak ditulis** karena harus datang dari dinas. **Perlu ditinjau dinas
sebelum dianggap resmi.** Admin menyunting lewat Dashboard → Konten Halaman →
"Pusat Bantuan — Daftar FAQ".

**Belum diuji:** penyuntingan lewat Mode Edit (butuh login admin) — tab profil baru,
editor FAQ, dan editor halaman Pusat Bantuan. Sama seperti jebakan lama di ssj 25 Juli §3.

### Selesai seluruhnya — commit `dfffa90` (8 Agu 2026)

Sisa 2 butir dituntaskan setelah user menjawab:

- **Butir 1 (lengkap)** — `/produk/standar-pelayanan`, `/produk/alur-pelayanan`,
  `/produk/inovasi`. Tanpa route baru; lewat `/produk/[...slug]` yang sudah generik.
  **Pemetaan dokumen diputuskan sendiri** (dinas menyerahkan): `STANDAR_PELAYANAN` &
  `INOVASI_LAYANAN` **dipakai ulang** — satu PDF yang diunggah tampil di jalur PPID
  *maupun* Informasi Produk, jadi tak perlu unggah dua kali dan tak ada risiko dua
  daftar berbeda isi. `ALUR_PELAYANAN` kategori baru.
- **Unggah gambar/infografis dibuat GENERIK**, bukan khusus tiga halaman itu:
  `InfoPageContent.gambar` = daftar `{judul, gambar}`, tampil di bawah paragraf.
  Field editornya dipasang di blok info bawaan **dan** di generator halaman buatan
  admin → halaman info mana pun bisa memuat infografis tanpa ubah kode.
  Beda dari `image` lama (satu gambar, di atas isi).
- **Butir 5** — latar motif Upun Taka **opsi lembut** di hero beranda
  (`public/latar-upun-taka.jpg`). Gradien brand dipertahankan sebagai dasar
  (mengisi layar sebelum gambar termuat + menutup sisi di layar sangat lebar),
  lalu gradien peneduh di atas gambar. Kekuatan peneduh dipilih dari dua percobaan:
  motif terlihat, tapi kontras teks putih di sisi kiri tetap **± 5,5:1** (WCAG AA
  minimal 4,5:1). ⚠️ Berkas **1600×900**; di monitor ≥1920 diregangkan.
  **Kalau dinas mengirim resolusi asli, cukup timpa berkasnya — nol perubahan kode.**
- **Butir 2 (galeri) — DIBUKA LAGI & DITUNTASKAN 9 Agu** (`ba9dc5d`, sudah live).
  Sebabnya ketahuan setelah user mengeceknya sendiri di produksi: foto galeri
  **hanya bisa diunggah lewat Dashboard → Galeri**, sehingga saat Mode Edit
  dinyalakan di `/galeri` halamannya kosong **tanpa satu pun tombol** — terbaca
  seolah galeri tidak bisa diisi. Besar kemungkinan **itulah** yang membuat dinas
  menulis permintaan butir 2, bukan minta fitur galeri baru.
  Yang ditambahkan (semua hanya saat Mode Edit): batang aksi + tombol Tambah Foto,
  tombol "Tambah Foto Pertama" pada keadaan kosong, tombol hapus per kartu, dan
  form tambah (judul/kategori/foto) yang memakai komponen & endpoint yang sama
  dengan dashboard. **Tidak ada endpoint baru & tidak ada pelonggaran hak akses** —
  `editMode` sudah dijaga admin level 1 + halaman publik, sama dengan syarat
  `POST /api/galeri` dan `DELETE /api/admin/galeri/[id]`.
  **Disempurnakan `f0acfd8` (9 Agu, sudah live)** setelah user memeriksa hasilnya:
  - 🔴 **Kartu jangan memaksa rasio.** Pola lama (`aspect-[4/3]` + `object-contain`
    + latar terang) menyisakan **bidang putih** di tiap foto yang rasionya beda —
    itulah "background putih" yang dikeluhkan. Sekarang gambar tampil apa adanya
    (`h-auto w-full`), acuannya **galeri PPID** (`components/ppid/galeri-profil.tsx`).
    Halaman itu memang rujukan terbaik untuk galeri yang bisa disunting.
  - **Atur kolom 2/3/4** — segmented control di Mode Edit, disimpan sebagai
    StaticContent `galeri.tampilan` supaya ikut berlaku bagi pengunjung.
    🔴 Kunci StaticContent **wajib didaftarkan** di `STATIC_BLOCKS`; `PUT
    /api/admin/static-content` menolak kunci tak dikenal → tombolnya diam saja.
  - **Kategori kembali DROPDOWN** (Radix Select), bukan pil — kategori bisa
    banyak dan pil akan meluber. Ada opsi "+ Buat kategori baru…".
    🔴 JANGAN pakai `<input list=datalist>`: dropdown bawaan browser tampil
    sebagai kotak hitam OS yang keluar dari desain situs.
  - **Kategori jadi opsional.** 🔴 Dikirim **string kosong**, BUKAN null —
    `Gallery.kategori` NOT NULL (`String @default("PELAYANAN")`), null → 500,
    dan menghilangkan field-nya membuat default skema diam-diam menandainya
    "PELAYANAN". Foto tanpa kategori cukup ikut "Semua".
  - **Penyaring + pengurutan** (Terbaru/Terlama/Judul A–Z) untuk semua pengunjung.

**Belum diuji:** penyuntingan lewat Mode Edit (butuh login admin) — tab profil baru,
editor FAQ, editor halaman Pusat Bantuan & Informasi Produk, dan unggah infografis.
Jebakan yang sama seperti ssj 25 Juli §3.

**Masih menunggu materi dinas** (halamannya sudah siap, tinggal diisi lewat dashboard):
daftar FAQ resmi, isi Standar Pelayanan, infografis Alur Pelayanan versi Tana Tidung,
dan materi Inovasi.

**Gambar dari dinas** ada di `../UNTUK-SIDAKO-GAMBAR/` (5 berkas WhatsApp). Empat sudah
dipakai (3 → `public/pusat-bantuan/`, 1 → `public/latar-upun-taka.jpg`); yang tersisa
background opsi tegas, tidak dipakai.

## 9. Referensi SIDAKO

| Berkas | Isi |
|---|---|
| [`sync-sam-journals/`](sync-sam-journals/) | jurnal per sesi (`ssj_*.md`) + `TEMPLATE-SSJ.md` — **tidak masuk GitHub, tidak ikut deploy** |
| `sync-sam-journals/referensi/ARSITEKTUR-SIDAKO.md` | peta frontend + backend (snapshot 21 Juli) |
| `sync-sam-journals/referensi/SIDAKO-vs-SAIBATIN.md` | beda antar-project + bukti terukur |
| `deploy/README.md` | 4 langkah deploy VPS (provision → db-setup → deploy) |
| `HANDOFF-SIDAKO-2026-07-21.md` | handoff lama — **sudah clear**, arsip |
| `PROMPT-DISABILITAS.md` | prompt widget a11y — **sudah dieksekusi**, arsip |
| [`../journal.md`](../journal.md) | keadaan seluruh workspace |
| [`../HISTORY.md`](../HISTORY.md) | arsip pekerjaan selesai (§2.12-L, §2.12-N.4 menyangkut SIDAKO) |
