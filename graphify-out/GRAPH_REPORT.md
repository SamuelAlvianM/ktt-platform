# Graph Report - sidako-platform  (2026-09-06)

## Corpus Check
- 355 files · ~250,418 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1928 nodes · 5628 edges · 145 communities (85 shown, 52 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e5e48e26`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- demografi-registri.ts
- stats/route.ts
- riwayat/[id]/page.tsx
- admin/demografi/export/route.ts
- devDependencies
- pelayanan-list.ts
- react-advanced-cropper
- ok
- catatAktivitas
- field-editor.tsx
- stats.tsx
- AktaKelahiranNikAdaModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- periode-demografi.ts
- informasi-index.tsx
- footer.tsx
- PengajuanBaruClient.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- AdminPengaduan.tsx
- users/route.ts
- [action]/route.ts
- galeri-profil.tsx
- PilihLayananClient.tsx
- parse/route.ts
- accessibility-widget.tsx
- LoginContent.tsx
- ktp/route.ts
- pusat-bantuan/[...slug]/page.tsx
- input.tsx
- dashboard/page.tsx
- profile-tabs.tsx
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- permohonan/[id]/route.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- authSlice.ts
- ppid/[...slug]/page.tsx
- react-organizational-chart
- inline-edit.tsx
- KIAModal.tsx
- tiket/[id]/route.ts
- layanan-forms.ts
- scripts
- RegisterContent.tsx
- sharp
- halaman/[slug]/page.tsx
- utils.ts
- jam-layanan.ts
- peta-demografi.tsx
- navbar.tsx
- CLAUDE.md
- package.json
- akun-status.ts
- dependencies
- app/layout.tsx
- uji-visibilitas.ts
- SkmDashboard.tsx
- berita/[id]/route.ts
- @types/node
- prisma.ts
- app/page.tsx
- KKCetakUlangModal.tsx
- eslint-config-next
- dashboard/kritik-saran/page.tsx
- SIDAKO Platform
- prisma
- notification-bell.tsx
- puppeteer-core
- eslint.config.mjs
- seed-berita.ts
- seed.ts
- class-variance-authority
- clsx
- date-fns
- exceljs
- framer-motion
- users/[id]/route.ts
- admin/demografi/route.ts
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
- tolak-permohonan.ts
- bcryptjs
- react-dropzone
- react-dom
- tailwindcss
- react-redux
- static-content-registry.ts
- sonner
- tailwind-merge
- tesseract.js
- @tiptap/extension-image
- @tiptap/extension-link
- dashboard-charts.tsx
- @tiptap/extension-underline
- react-leaflet
- @tiptap/pm
- @tiptap/react
- @tiptap/starter-kit
- @types/leaflet
- CekStatusClient.tsx
- useAppSelector
- ppid-layanan-halaman.tsx
- carousel.tsx
- AdminKonten.tsx
- gis/page.tsx
- auth.ts
- akun-tolak.ts
- profil/page.tsx
- cn
- produk/page.tsx
- image-upload-field.tsx
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
2. `ok()` - 157 edges
3. `getSession()` - 154 edges
4. `fail()` - 145 edges
5. `prisma` - 76 edges
6. `Button()` - 69 edges
7. `Input()` - 55 edges
8. `catatAktivitas()` - 51 edges
9. `Label()` - 41 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `DashboardBeritaPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/berita/page.tsx → lib/auth.ts
- `DashboardDemografiPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/demografi/page.tsx → lib/auth.ts
- `DashboardGaleriPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/galeri/page.tsx → lib/auth.ts
- `DashboardKontenPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/konten/page.tsx → lib/auth.ts
- `DashboardKritikSaranPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/kritik-saran/page.tsx → lib/auth.ts

## Import Cycles
- None detected.

## Communities (145 total, 52 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.10
Nodes (39): dynamic, GET(), runtime, BAGIAN_STATISTIK, BagianStatistik, bagianValid(), barisBernomor(), buatWorkbookStatistik() (+31 more)

### Community 1 - "demografi-registri.ts"
Cohesion: 0.15
Nodes (15): dynamic, GET(), KategoriAdmin, DemografiKategoriPage(), dynamic, DEMOGRAFI_KATEGORI_KUNCI, DEMOGRAFI_SLUGS, DemografiKategori (+7 more)

### Community 2 - "stats/route.ts"
Cohesion: 0.22
Nodes (15): dynamic, GET(), BULAN_PENDEK, GET(), BadgePeriode(), periodeTersedia(), pilihPeriode(), labelPeriodePanjang() (+7 more)

### Community 3 - "riwayat/[id]/page.tsx"
Cohesion: 0.07
Nodes (41): PermohonanDetail(), dynamic, RiwayatDetailPage(), STATUS_CONFIG, AlasanDitolak(), UraianTolak, BerkasGallery(), BerkasView (+33 more)

### Community 4 - "admin/demografi/export/route.ts"
Cohesion: 0.26
Nodes (13): dynamic, GET(), runtime, dynamic, GET(), runtime, addSheet(), buildDemografiWorkbook() (+5 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "pelayanan-list.ts"
Cohesion: 0.19
Nodes (10): PengaturanPelayanan(), KATEGORI_SLUG, kategoriSlug(), WARNA_KATEGORI, WARNA_MATI, WARNA_NETRAL, WarnaKategori, PELAYANAN_KATEGORI (+2 more)

### Community 8 - "ok"
Cohesion: 0.06
Nodes (57): dynamic, GET(), PUT(), dynamic, GET(), GET(), GET(), JENIS_VALID (+49 more)

### Community 9 - "catatAktivitas"
Cohesion: 0.10
Nodes (29): DELETE(), dynamic, GET(), POST(), PUT(), DELETE(), dynamic, passwordCocok() (+21 more)

### Community 10 - "field-editor.tsx"
Cohesion: 0.09
Nodes (33): AdminMedia(), fmtSize(), EditorNavigasi(), KOSONG, FieldEditor(), IconColumnInput(), ImageColumnInput(), DemografiMetric() (+25 more)

### Community 11 - "stats.tsx"
Cohesion: 0.11
Nodes (13): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+5 more)

### Community 12 - "AktaKelahiranNikAdaModal.tsx"
Cohesion: 0.07
Nodes (59): AktaKelahiranNikAdaModal(), AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaNikahModal(), AktaNikahModalProps, FormData, UploadedFile (+51 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.09
Nodes (40): BerkasAsing, HitunganPeriode, Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+32 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.18
Nodes (18): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+10 more)

### Community 15 - "periode-demografi.ts"
Cohesion: 0.18
Nodes (14): AdminDemografi(), downloadFile(), usulJudul(), gabungPeriode(), kunciPeriode(), periodeDugaan(), ROMAWI, SEMESTER_BAWAAN (+6 more)

### Community 16 - "informasi-index.tsx"
Cohesion: 0.11
Nodes (21): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+13 more)

### Community 17 - "footer.tsx"
Cohesion: 0.10
Nodes (14): INFO, metadata, ArticleCard(), BeritaListPage(), News, tglID(), News, metadata (+6 more)

### Community 18 - "PengajuanBaruClient.tsx"
Cohesion: 0.18
Nodes (13): ICONS, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+5 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.13
Nodes (10): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, GRUP_AKUN, GrupKey, Kecamatan, PermohonanRingkas (+2 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "AdminPengaduan.tsx"
Cohesion: 0.19
Nodes (9): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic, GambarItem, ImageViewer() (+1 more)

### Community 23 - "users/route.ts"
Cohesion: 0.08
Nodes (52): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST(), POST(), dynamic (+44 more)

### Community 24 - "[action]/route.ts"
Cohesion: 0.26
Nodes (10): ALLOWED_EXT, FETCH_ACTIONS, POST(), SUBMIT_ACTIONS, validatePayload(), validateLayananPayload(), PELAYANAN_VISIBILITY_KEY, slugTersembunyi() (+2 more)

### Community 25 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

### Community 26 - "PilihLayananClient.tsx"
Cohesion: 0.16
Nodes (14): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient() (+6 more)

### Community 27 - "parse/route.ts"
Cohesion: 0.14
Nodes (21): dynamic, maxDuration, periodeDariForm(), POST(), runtime, Conflict, dynamic, maxDuration (+13 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "LoginContent.tsx"
Cohesion: 0.18
Nodes (14): LoginPage(), ResetPasswordPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent() (+6 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "pusat-bantuan/[...slug]/page.tsx"
Cohesion: 0.15
Nodes (12): HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), PosterIkd(), WbsForm(), hubungiKamiContent, ppidContent (+4 more)

### Community 32 - "input.tsx"
Cohesion: 0.11
Nodes (27): Foto, KATEGORI, ProfilInitial, AktaKelahiranNikTidakAdaModal(), AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModal() (+19 more)

### Community 33 - "dashboard/page.tsx"
Cohesion: 0.16
Nodes (15): dynamic, GET(), POST(), runtime, BULAN_PENDEK, DashboardPage(), dynamic, fmt() (+7 more)

### Community 34 - "profile-tabs.tsx"
Cohesion: 0.08
Nodes (25): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+17 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "permohonan/[id]/route.ts"
Cohesion: 0.10
Nodes (29): dynamic, GET(), PUT(), VALID, GET(), PATCH(), STATUS_VALID, GET() (+21 more)

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
Nodes (17): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DashboardSidebar(), DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH (+9 more)

### Community 41 - "authSlice.ts"
Cohesion: 0.19
Nodes (12): ForgotPasswordPage(), SessionHydrator(), InlineEditProvider(), isPublicPage(), useAppDispatch(), authSlice, AuthState, checkNikKk (+4 more)

### Community 42 - "ppid/[...slug]/page.tsx"
Cohesion: 0.12
Nodes (19): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, dynamic, ProdukPage() (+11 more)

### Community 44 - "inline-edit.tsx"
Cohesion: 0.07
Nodes (36): clampKolom(), GaleriPage(), HalamanTambahanClient(), BlockEditorDialog(), Ctx, EditableBlock(), EditModeToggle(), InlineEditCtx (+28 more)

### Community 45 - "KIAModal.tsx"
Cohesion: 0.14
Nodes (15): Values, EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile, KkScanFieldProps (+7 more)

### Community 46 - "tiket/[id]/route.ts"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.10
Nodes (21): StaffPengajuanForm(), useStatusJamLayanan(), catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections() (+13 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "RegisterContent.tsx"
Cohesion: 0.21
Nodes (5): Kecamatan, namaWilayah, RegisterPage(), labelKolom(), registerUser

### Community 51 - "halaman/[slug]/page.tsx"
Cohesion: 0.19
Nodes (13): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), gabungNavigasi(), hrefTambahan(), JUDUL_MENU_BAWAAN, KUNCI_NAVIGASI (+5 more)

### Community 52 - "utils.ts"
Cohesion: 0.10
Nodes (31): NotFound(), Toggle(), URUTAN_HARI, FormData, JenisBiodataOption, KKPerubahanBiodataModal(), KKPerubahanBiodataModalProps, UploadedFile (+23 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.15
Nodes (22): dynamic, GET(), JamLayananEditor(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI (+14 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "navbar.tsx"
Cohesion: 0.21
Nodes (11): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+3 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "akun-status.ts"
Cohesion: 0.27
Nodes (9): dynamic, POST(), fmtTanggal(), IsiDetail(), INFO_STATUS, infoStatus, STATUS_AKUN, StatusAkun (+1 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, highcharts, highcharts-react-official, dependencies, animejs, highcharts, highcharts-react-official, @reduxjs/toolkit (+3 more)

### Community 60 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

### Community 61 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 62 - "SkmDashboard.tsx"
Cohesion: 0.40
Nodes (5): AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 65 - "prisma.ts"
Cohesion: 0.13
Nodes (20): PATCH(), STATUS_VALID, GET(), dynamic, POST(), POST(), POST(), POST() (+12 more)

### Community 66 - "app/page.tsx"
Cohesion: 0.15
Nodes (11): smoothEase, AlurLayanan(), ease, STEPS, News, QuickHighlights(), tglID(), RelasiTerkait() (+3 more)

### Community 67 - "KKCetakUlangModal.tsx"
Cohesion: 0.07
Nodes (42): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, AdminPermohonan(), ALASAN_TOLAK, FINAL_STATUS (+34 more)

### Community 69 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 87 - "users/[id]/route.ts"
Cohesion: 0.16
Nodes (14): DELETE(), dynamic, GET(), PUT(), dynamic, POST(), hapusFotoKtp(), isAdmin() (+6 more)

### Community 88 - "admin/demografi/route.ts"
Cohesion: 0.40
Nodes (9): cekPetugas(), DELETE(), dynamic, GET(), periodeDariBadan(), PUT(), SaveRow, slugDikenal() (+1 more)

### Community 103 - "tolak-permohonan.ts"
Cohesion: 0.19
Nodes (12): formDariKode(), ALASAN, labelSah(), perluRincian(), pilihanRincian(), susun(), UraianTolak, WAJIB_RINCIAN (+4 more)

### Community 109 - "static-content-registry.ts"
Cohesion: 0.20
Nodes (13): GET(), blokGaleriPpid(), blokHalamanTambahan(), blokInfoHalaman(), DKB_PERIODE_KUNCI, getStaticBlock(), getStaticDefaults(), INFO_SECTIONS (+5 more)

### Community 115 - "dashboard-charts.tsx"
Cohesion: 0.25
Nodes (9): dasar, Kategori, Layanan, LayananPopulerChart(), PermohonanHarianChart(), ProgressPermohonanChart(), TitikLabel, TrenBulananChart() (+1 more)

### Community 122 - "CekStatusClient.tsx"
Cohesion: 0.33
Nodes (4): CekStatusClient(), Hasil, IKON, metadata

### Community 123 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

### Community 124 - "ppid-layanan-halaman.tsx"
Cohesion: 0.21
Nodes (7): dynamic, metadata, dynamic, metadata, PpidLayananHalaman(), PpidSeksi, InfoPageContent

### Community 125 - "carousel.tsx"
Cohesion: 0.25
Nodes (6): CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS

### Community 126 - "AdminKonten.tsx"
Cohesion: 0.32
Nodes (6): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic

### Community 127 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 128 - "auth.ts"
Cohesion: 0.15
Nodes (11): POST(), POST(), DashboardNavigasiPage(), dynamic, metadata, DashboardTiketPage(), dynamic, pesanLoginStatus() (+3 more)

### Community 129 - "akun-tolak.ts"
Cohesion: 0.40
Nodes (4): KEY_BY_LABEL, KOLOM_TOLAK, KolomTolak, LABEL_BY_KEY

### Community 131 - "profil/page.tsx"
Cohesion: 0.24
Nodes (8): ChangePasswordForm(), FotoProfilCard(), dynamic, ProfilPage(), ProfilForm(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 133 - "cn"
Cohesion: 0.11
Nodes (22): EMPTY, FormState, News, ImagePickerField(), ImagePickerFieldProps, MediaPicker(), deretHalaman(), OPSI_PER_HALAMAN (+14 more)

### Community 135 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

### Community 136 - "image-upload-field.tsx"
Cohesion: 0.67
Nodes (3): ImageUploadField(), kecilkan(), TIPE_DITERIMA

## Knowledge Gaps
- **600 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+595 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 708 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `stats/route.ts`, `pelayanan-list.ts`, `image-upload-field.tsx`, `field-editor.tsx`, `stats.tsx`, `AktaKelahiranNikAdaModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `periode-demografi.ts`, `informasi-index.tsx`, `PengajuanBaruClient.tsx`, `AdminPengaduan.tsx`, `PilihLayananClient.tsx`, `accessibility-widget.tsx`, `LoginContent.tsx`, `input.tsx`, `profile-tabs.tsx`, `permohonan/[id]/route.ts`, `dashboard-sidebar.tsx`, `inline-edit.tsx`, `KIAModal.tsx`, `layanan-forms.ts`, `utils.ts`, `jam-layanan.ts`, `navbar.tsx`, `KKCetakUlangModal.tsx`, `notification-bell.tsx`, `ppid-layanan-halaman.tsx`, `AdminKonten.tsx`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `auth.ts`, `profil/page.tsx`, `admin/demografi/export/route.ts`, `riwayat/[id]/page.tsx`, `produk/page.tsx`, `catatAktivitas`, `informasi-index.tsx`, `AdminPengaduan.tsx`, `users/route.ts`, `[action]/route.ts`, `PilihLayananClient.tsx`, `parse/route.ts`, `ktp/route.ts`, `dashboard/page.tsx`, `permohonan/[id]/route.ts`, `back-button.tsx`, `tiket/[id]/route.ts`, `berita/[id]/route.ts`, `prisma.ts`, `dashboard/kritik-saran/page.tsx`, `users/[id]/route.ts`, `admin/demografi/route.ts`, `AdminKonten.tsx`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `auth.ts`, `demografi-registri.ts`, `stats/route.ts`, `profil/page.tsx`, `riwayat/[id]/page.tsx`, `admin/demografi/export/route.ts`, `statistik-export.ts`, `ok`, `catatAktivitas`, `informasi-index.tsx`, `users/route.ts`, `[action]/route.ts`, `parse/route.ts`, `dashboard/page.tsx`, `permohonan/[id]/route.ts`, `ppid/[...slug]/page.tsx`, `tiket/[id]/route.ts`, `halaman/[slug]/page.tsx`, `jam-layanan.ts`, `akun-status.ts`, `berita/[id]/route.ts`, `users/[id]/route.ts`, `admin/demografi/route.ts`, `static-content-registry.ts`, `ppid-layanan-halaman.tsx`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _600 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10365853658536585 - nodes in this community are weakly interconnected._
- **Should `riwayat/[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._
- **Should `ok` be split into smaller, more focused modules?**
  _Cohesion score 0.06430745814307458 - nodes in this community are weakly interconnected._