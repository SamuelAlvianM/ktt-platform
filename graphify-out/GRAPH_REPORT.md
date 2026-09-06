# Graph Report - sidako-platform  (2026-09-07)

## Corpus Check
- 356 files · ~251,691 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1932 nodes · 5656 edges · 137 communities (77 shown, 52 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cdd5e893`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- AdminDemografi.tsx
- [jenis]/route.ts
- riwayat/[id]/page.tsx
- baru/page.tsx
- devDependencies
- PilihLayananClient.tsx
- react-advanced-cropper
- CekStatusClient.tsx
- media/upload/route.ts
- dialog.tsx
- stats.tsx
- AktaKelahiranNikAdaModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- demografi-registri.ts
- informasi-index.tsx
- footer.tsx
- PengajuanBaruClient.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- AdminPengaduan.tsx
- register/route.ts
- ok
- permohonan/[id]/route.ts
- [layanan]/page.tsx
- admin/demografi/route.ts
- accessibility-widget.tsx
- LoginContent.tsx
- ktp/route.ts
- ppid-layanan-halaman.tsx
- AktaKematianModal.tsx
- AdminBerita.tsx
- [action]/route.ts
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- auth.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- ppid/[...slug]/page.tsx
- galeri-profil.tsx
- react-organizational-chart
- inline-edit.tsx
- cn
- getSession
- layanan-forms.ts
- scripts
- static-content-registry.ts
- sharp
- halaman/[slug]/page.tsx
- utils.ts
- jam-layanan.ts
- peta-demografi.tsx
- parse/route.ts
- CLAUDE.md
- package.json
- AdminPermohonan.tsx
- dependencies
- profil/page.tsx
- uji-visibilitas.ts
- skm/page.tsx
- authSlice.ts
- @types/node
- catatAktivitas
- AdminKonten.tsx
- input.tsx
- eslint-config-next
- dashboard/kritik-saran/page.tsx
- SIDAKO Platform
- prisma
- navbar.tsx
- puppeteer-core
- eslint.config.mjs
- seed-berita.ts
- seed.ts
- class-variance-authority
- clsx
- date-fns
- exceljs
- framer-motion
- users/route.ts
- KIAModal.tsx
- jose
- leaflet
- lucide-react
- next
- next.config.ts
- nodemailer
- pdfkit
- @prisma/client
- radix-ui
- @radix-ui/react-dialog
- @radix-ui/react-navigation-menu
- @radix-ui/react-popover
- @radix-ui/react-slot
- react
- gis/page.tsx
- bcryptjs
- react-dropzone
- react-dom
- tailwindcss
- react-redux
- KKPerubahanBiodataModal.tsx
- sonner
- tailwind-merge
- tesseract.js
- @tiptap/extension-image
- @tiptap/extension-link
- StaffPengajuanForm
- @tiptap/extension-underline
- react-leaflet
- @tiptap/pm
- @tiptap/react
- @tiptap/starter-kit
- @types/leaflet
- app/page.tsx
- navigasi/page.tsx
- RegisterContent.tsx
- produk/page.tsx
- react-day-picker
- @tiptap/extensions
- postcss.config.mjs
- @tailwindcss/postcss
- @types/pdfkit
- typescript
- @tailwindcss/typography
- @types/bcryptjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 211 edges
2. `ok()` - 159 edges
3. `getSession()` - 156 edges
4. `fail()` - 147 edges
5. `prisma` - 77 edges
6. `Button()` - 69 edges
7. `Input()` - 55 edges
8. `catatAktivitas()` - 51 edges
9. `Label()` - 41 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `DashboardBeritaPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/berita/page.tsx → lib/auth.ts
- `KategoriAdmin` --inherits--> `DemografiKategori`  [EXTRACTED]
  app/dashboard/demografi/AdminDemografi.tsx → lib/demografi-kategori.ts
- `DashboardDemografiPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/demografi/page.tsx → lib/auth.ts
- `DashboardGaleriPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/galeri/page.tsx → lib/auth.ts
- `DashboardKontenPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/konten/page.tsx → lib/auth.ts

## Import Cycles
- None detected.

## Communities (137 total, 52 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 1 - "AdminDemografi.tsx"
Cohesion: 0.12
Nodes (36): AdminDemografi(), AntreImpor, downloadFile(), HitunganPeriode, KategoriAdmin, usulJudul(), DemografiView(), fmt() (+28 more)

### Community 2 - "[jenis]/route.ts"
Cohesion: 0.40
Nodes (4): GET(), demografiData, DemografiDataset, TODO: ganti dengan query Prisma nyata setelah model demografi tersedia.

### Community 3 - "riwayat/[id]/page.tsx"
Cohesion: 0.07
Nodes (41): PermohonanDetail(), dynamic, RiwayatDetailPage(), STATUS_CONFIG, AlasanDitolak(), UraianTolak, BerkasGallery(), BerkasView (+33 more)

### Community 4 - "baru/page.tsx"
Cohesion: 0.40
Nodes (4): dynamic, metadata, PilihLayananPage(), PilihLayananClient()

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "PilihLayananClient.tsx"
Cohesion: 0.17
Nodes (13): PengaturanPelayanan(), KATEGORI_SLUG, kategoriSlug(), WARNA_KATEGORI, WARNA_MATI, WARNA_NETRAL, WarnaKategori, PELAYANAN_KATEGORI (+5 more)

### Community 8 - "CekStatusClient.tsx"
Cohesion: 0.13
Nodes (18): dynamic, POST(), CekStatusClient(), Hasil, IKON, metadata, fmtTanggal(), IsiDetail() (+10 more)

### Community 9 - "media/upload/route.ts"
Cohesion: 0.30
Nodes (9): DELETE(), POST(), MEDIA_ALLOWED_IMAGE, MEDIA_ALLOWED_OTHER, MEDIA_MAX_SIZE, MEDIA_STORAGE_ROOT, MEDIA_URL_PREFIX, mediaPublicUrl() (+1 more)

### Community 10 - "dialog.tsx"
Cohesion: 0.13
Nodes (22): AdminMedia(), fmtSize(), Row, ImageCropperDialog(), ImageCropperDialogProps, MediaPickerProps, MediaItem, MediaUpload() (+14 more)

### Community 11 - "stats.tsx"
Cohesion: 0.09
Nodes (18): DemografiMetric(), fmt(), OFFICE_LAT, OFFICE_LNG, pulseIcon, StatistikKartuEditor(), FALLBACK, KartuDemografi (+10 more)

### Community 12 - "AktaKelahiranNikAdaModal.tsx"
Cohesion: 0.07
Nodes (50): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN, FormPermohonanProps, memuat(), Dialog() (+42 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.11
Nodes (33): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+25 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.08
Nodes (34): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), BulletItem(), CONTENT (+26 more)

### Community 15 - "demografi-registri.ts"
Cohesion: 0.18
Nodes (13): dynamic, GET(), DemografiKategoriPage(), dynamic, DEMOGRAFI_KATEGORI, DEMOGRAFI_KATEGORI_KUNCI, DEMOGRAFI_SLUGS, DemografiKategori (+5 more)

### Community 16 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (19): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+11 more)

### Community 17 - "footer.tsx"
Cohesion: 0.12
Nodes (12): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+4 more)

### Community 18 - "PengajuanBaruClient.tsx"
Cohesion: 0.18
Nodes (13): ICONS, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+5 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.12
Nodes (12): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, GRUP_AKUN, GrupKey, Kecamatan, PermohonanRingkas (+4 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 23 - "register/route.ts"
Cohesion: 0.08
Nodes (41): POST(), dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime (+33 more)

### Community 24 - "ok"
Cohesion: 0.08
Nodes (54): DELETE(), dynamic, GET(), GET(), GET(), PUT(), GET(), dynamic (+46 more)

### Community 25 - "permohonan/[id]/route.ts"
Cohesion: 0.21
Nodes (16): GET(), PATCH(), STATUS_VALID, formDariKode(), ALASAN, labelSah(), perluRincian(), pilihanRincian() (+8 more)

### Community 26 - "[layanan]/page.tsx"
Cohesion: 0.23
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "admin/demografi/route.ts"
Cohesion: 0.16
Nodes (25): dynamic, GET(), runtime, cekPetugas(), DELETE(), dynamic, GET(), periodeDariBadan() (+17 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.12
Nodes (20): cormorant, geistMono, geistSans, metadata, montserrat, AccessibilityWidget(), SPACING_LABEL, TileButton() (+12 more)

### Community 29 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): LoginPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "ppid-layanan-halaman.tsx"
Cohesion: 0.08
Nodes (24): HubungiKamiPage(), dynamic, metadata, dynamic, metadata, dynamic, PusatBantuanPage(), sections (+16 more)

### Community 32 - "AktaKematianModal.tsx"
Cohesion: 0.15
Nodes (16): ProfilInitial, AktaKematianModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile, ASPEK (+8 more)

### Community 33 - "AdminBerita.tsx"
Cohesion: 0.18
Nodes (8): EMPTY, FormState, News, ImagePickerFieldProps, MediaPicker(), RichEditor(), RichEditorProps, ToolbarButton()

### Community 34 - "[action]/route.ts"
Cohesion: 0.23
Nodes (11): PATCH(), STATUS_VALID, ALLOWED_EXT, FETCH_ACTIONS, POST(), SUBMIT_ACTIONS, validatePayload(), cekJamLayananSekarang() (+3 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "auth.ts"
Cohesion: 0.07
Nodes (43): dynamic, GET(), dynamic, GET(), PUT(), VALID, GET(), dynamic (+35 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.10
Nodes (16): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic (+8 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.16
Nodes (17): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+9 more)

### Community 41 - "ppid/[...slug]/page.tsx"
Cohesion: 0.08
Nodes (26): clampKolom(), GaleriPage(), bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS (+18 more)

### Community 42 - "galeri-profil.tsx"
Cohesion: 0.13
Nodes (15): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+7 more)

### Community 44 - "inline-edit.tsx"
Cohesion: 0.07
Nodes (29): HalamanTambahanClient(), Ctx, EditableBlock(), EditModeToggle(), InlineEditCtx, InlineEditProvider(), isPublicPage(), CarouselSlide (+21 more)

### Community 45 - "cn"
Cohesion: 0.10
Nodes (40): FieldEditor(), IconColumnInput(), ImageColumnInput(), AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal() (+32 more)

### Community 46 - "getSession"
Cohesion: 0.11
Nodes (25): dynamic, GET(), PUT(), GET(), dynamic, GET(), runtime, dynamic (+17 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.11
Nodes (19): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+11 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "static-content-registry.ts"
Cohesion: 0.14
Nodes (17): GET(), BlockEditorDialog(), blokGaleriPpid(), blokHalamanTambahan(), blokInfoHalaman(), DKB_PERIODE_KUNCI, getStaticBlock(), getStaticDefaults() (+9 more)

### Community 51 - "halaman/[slug]/page.tsx"
Cohesion: 0.17
Nodes (15): EditorNavigasi(), cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), buatSlug(), gabungNavigasi(), hrefTambahan() (+7 more)

### Community 52 - "utils.ts"
Cohesion: 0.09
Nodes (32): NotFound(), JamLayananEditor(), Toggle(), URUTAN_HARI, PilihRincian(), AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile (+24 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.16
Nodes (20): dynamic, GET(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan() (+12 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "parse/route.ts"
Cohesion: 0.11
Nodes (27): dynamic, maxDuration, periodeDariForm(), POST(), runtime, Conflict, dynamic, maxDuration (+19 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "AdminPermohonan.tsx"
Cohesion: 0.22
Nodes (8): ALASAN_TOLAK, FINAL_STATUS, Item, STATUS, STATUS_KEYS, deretHalaman(), OPSI_PER_HALAMAN, Pagination()

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, highcharts, highcharts-react-official, dependencies, animejs, highcharts, highcharts-react-official, @reduxjs/toolkit (+3 more)

### Community 60 - "profil/page.tsx"
Cohesion: 0.24
Nodes (8): ChangePasswordForm(), FotoProfilCard(), dynamic, ProfilPage(), ProfilForm(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 61 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "authSlice.ts"
Cohesion: 0.12
Nodes (18): ForgotPasswordPage(), Providers(), SessionHydrator(), ResetPasswordPage(), useAppDispatch(), authSlice, AuthState, checkNikKk (+10 more)

### Community 65 - "catatAktivitas"
Cohesion: 0.10
Nodes (31): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+23 more)

### Community 66 - "AdminKonten.tsx"
Cohesion: 0.28
Nodes (7): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, PPID_INFORMASI_GRUP

### Community 67 - "input.tsx"
Cohesion: 0.10
Nodes (36): Foto, KATEGORI, AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, KOSONG (+28 more)

### Community 69 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "navbar.tsx"
Cohesion: 0.14
Nodes (22): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+14 more)

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 87 - "users/route.ts"
Cohesion: 0.16
Nodes (20): DELETE(), GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), DELETE(), dynamic (+12 more)

### Community 88 - "KIAModal.tsx"
Cohesion: 0.29
Nodes (6): EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile

### Community 103 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 109 - "KKPerubahanBiodataModal.tsx"
Cohesion: 0.40
Nodes (4): FormData, JenisBiodataOption, KKPerubahanBiodataModalProps, UploadedFile

### Community 115 - "StaffPengajuanForm"
Cohesion: 0.67
Nodes (3): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer()

### Community 125 - "app/page.tsx"
Cohesion: 0.15
Nodes (11): smoothEase, AlurLayanan(), ease, STEPS, News, QuickHighlights(), tglID(), RelasiTerkait() (+3 more)

### Community 128 - "navigasi/page.tsx"
Cohesion: 0.50
Nodes (3): DashboardNavigasiPage(), dynamic, metadata

### Community 133 - "RegisterContent.tsx"
Cohesion: 0.17
Nodes (7): Kecamatan, namaWilayah, RegisterPage(), ImageUploadField(), kecilkan(), TIPE_DITERIMA, registerUser

### Community 135 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

## Knowledge Gaps
- **601 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+596 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 709 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminDemografi.tsx`, `baru/page.tsx`, `RegisterContent.tsx`, `PilihLayananClient.tsx`, `dialog.tsx`, `stats.tsx`, `AktaKelahiranNikAdaModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `informasi-index.tsx`, `PengajuanBaruClient.tsx`, `AdminUsers.tsx`, `accessibility-widget.tsx`, `LoginContent.tsx`, `ppid-layanan-halaman.tsx`, `AktaKematianModal.tsx`, `AdminBerita.tsx`, `auth.ts`, `dashboard-sidebar.tsx`, `ppid/[...slug]/page.tsx`, `inline-edit.tsx`, `static-content-registry.ts`, `utils.ts`, `jam-layanan.ts`, `AdminPermohonan.tsx`, `AdminKonten.tsx`, `input.tsx`, `navbar.tsx`, `KIAModal.tsx`, `KKPerubahanBiodataModal.tsx`, `StaffPengajuanForm`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `statistik-export.ts`, `navigasi/page.tsx`, `riwayat/[id]/page.tsx`, `baru/page.tsx`, `produk/page.tsx`, `media/upload/route.ts`, `informasi-index.tsx`, `footer.tsx`, `AdminPengaduan.tsx`, `ok`, `permohonan/[id]/route.ts`, `[layanan]/page.tsx`, `admin/demografi/route.ts`, `ktp/route.ts`, `[action]/route.ts`, `auth.ts`, `back-button.tsx`, `parse/route.ts`, `profil/page.tsx`, `skm/page.tsx`, `catatAktivitas`, `AdminKonten.tsx`, `dashboard/kritik-saran/page.tsx`, `users/route.ts`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `prisma` connect `ok` to `statistik-export.ts`, `riwayat/[id]/page.tsx`, `PilihLayananClient.tsx`, `CekStatusClient.tsx`, `media/upload/route.ts`, `statistik-kartu-editor.tsx`, `demografi-registri.ts`, `informasi-index.tsx`, `register/route.ts`, `permohonan/[id]/route.ts`, `admin/demografi/route.ts`, `ppid-layanan-halaman.tsx`, `[action]/route.ts`, `auth.ts`, `ppid/[...slug]/page.tsx`, `getSession`, `static-content-registry.ts`, `halaman/[slug]/page.tsx`, `jam-layanan.ts`, `parse/route.ts`, `profil/page.tsx`, `catatAktivitas`, `users/route.ts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _601 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `AdminDemografi.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12073170731707317 - nodes in this community are weakly interconnected._
- **Should `riwayat/[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._