# Graph Report - sidako-platform  (2026-09-07)

## Corpus Check
- 356 files · ~253,144 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1935 nodes · 5673 edges · 144 communities (84 shown, 52 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1810ecef`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- dashboard/page.tsx
- demografi-view.tsx
- [jenis]/route.ts
- riwayat/[id]/page.tsx
- baru/page.tsx
- devDependencies
- pelayanan-list.ts
- react-advanced-cropper
- CekStatusClient.tsx
- input.tsx
- stats.tsx
- office-map.tsx
- KKPerubahanBiodataModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- AdminDemografi.tsx
- informasi-index.tsx
- footer.tsx
- PengajuanBaruClient.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- ppid-layanan-halaman.tsx
- send/route.ts
- getSession
- permohonan/[id]/route.ts
- PilihLayananClient.tsx
- periode-demografi.ts
- accessibility-widget.tsx
- RegisterContent.tsx
- ktp/route.ts
- static-content-registry.ts
- statistik-export.ts
- utils.ts
- fail
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- peran.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- ppid/[...slug]/page.tsx
- demografi-export.ts
- react-organizational-chart
- galeri-profil.tsx
- cn
- ok
- layanan-forms.ts
- scripts
- syarat-ketentuan-view.tsx
- sharp
- halaman/[slug]/page.tsx
- date-picker.tsx
- jam-layanan.ts
- peta-demografi.tsx
- demografi-import.ts
- CLAUDE.md
- package.json
- useAppSelector
- dependencies
- hero-section.tsx
- uji-visibilitas.ts
- skm/page.tsx
- authSlice.ts
- @types/node
- catatAktivitas
- AdminKonten.tsx
- KTPELModal.tsx
- eslint-config-next
- berita/[id]/route.ts
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
- akun-status.ts
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
- app/layout.tsx
- buatWorkbookStatistik
- kunjungan/route.ts
- app/page.tsx
- notification-bell.tsx
- statistik/export/route.ts
- navigasi/page.tsx
- media/page.tsx
- migrasi-periode-demografi.ts
- dashboard/berita/page.tsx
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
1. `cn()` - 212 edges
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
- `AntreImpor` --references--> `Periode`  [EXTRACTED]
  app/dashboard/demografi/AdminDemografi.tsx → lib/periode-demografi.ts
- `DashboardDemografiPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/demografi/page.tsx → lib/auth.ts
- `DashboardGaleriPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/galeri/page.tsx → lib/auth.ts
- `DashboardKontenPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/konten/page.tsx → lib/auth.ts

## Import Cycles
- None detected.

## Communities (144 total, 52 thin omitted)

### Community 0 - "dashboard/page.tsx"
Cohesion: 0.15
Nodes (17): BULAN_PENDEK, DashboardPage(), dynamic, fmt(), pct(), ProgressRow(), STATUS_PENGADUAN, dasar (+9 more)

### Community 1 - "demografi-view.tsx"
Cohesion: 0.19
Nodes (20): DemografiView(), fmt(), KOLOM_LABEL, labelKolom(), Row, sumKolom(), BadgePeriode(), BadgePeriodeEdit() (+12 more)

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

### Community 6 - "pelayanan-list.ts"
Cohesion: 0.17
Nodes (13): PengajuanBaruClient(), KATEGORI_SLUG, kategoriSlug(), WARNA_KATEGORI, WARNA_MATI, WARNA_NETRAL, WarnaKategori, PELAYANAN_KATEGORI (+5 more)

### Community 8 - "CekStatusClient.tsx"
Cohesion: 0.20
Nodes (7): CekStatusClient(), Hasil, IKON, metadata, RegisterPage(), labelKolom(), registerUser

### Community 9 - "input.tsx"
Cohesion: 0.13
Nodes (22): Values, AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, KkScanFieldProps (+14 more)

### Community 10 - "stats.tsx"
Cohesion: 0.09
Nodes (32): Ctx, EditModeToggle(), InlineEditCtx, DemografiMetric(), fmt(), Row, FALLBACK, KartuDemografi (+24 more)

### Community 11 - "office-map.tsx"
Cohesion: 0.29
Nodes (4): OFFICE_LAT, OFFICE_LNG, pulseIcon, OfficeMap

### Community 12 - "KKPerubahanBiodataModal.tsx"
Cohesion: 0.07
Nodes (64): ProfilInitial, AktaKematianModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile, AktaPerceraianModalProps (+56 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.12
Nodes (29): Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid(), ParsedRow, petaKartuLain() (+21 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.06
Nodes (40): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), BulletItem(), CONTENT (+32 more)

### Community 15 - "AdminDemografi.tsx"
Cohesion: 0.12
Nodes (25): dynamic, GET(), AdminDemografi(), AntreImpor, downloadFile(), HitunganPeriode, KategoriAdmin, usulJudul() (+17 more)

### Community 16 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (20): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+12 more)

### Community 17 - "footer.tsx"
Cohesion: 0.11
Nodes (13): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, metadata, dynamic (+5 more)

### Community 18 - "PengajuanBaruClient.tsx"
Cohesion: 0.18
Nodes (13): ICONS, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+5 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.05
Nodes (35): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, fmtTanggal(), GRUP_AKUN, GrupKey, IsiDetail() (+27 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "ppid-layanan-halaman.tsx"
Cohesion: 0.11
Nodes (16): dynamic, metadata, dynamic, metadata, dynamic, ProdukPage(), PpidLayananHalaman(), PpidSeksi (+8 more)

### Community 23 - "send/route.ts"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 24 - "getSession"
Cohesion: 0.08
Nodes (32): dynamic, GET(), dynamic, GET(), GET(), GET(), GET(), POST() (+24 more)

### Community 25 - "permohonan/[id]/route.ts"
Cohesion: 0.21
Nodes (16): GET(), PATCH(), STATUS_VALID, formDariKode(), ALASAN, labelSah(), perluRincian(), pilihanRincian() (+8 more)

### Community 26 - "PilihLayananClient.tsx"
Cohesion: 0.24
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "periode-demografi.ts"
Cohesion: 0.10
Nodes (42): dynamic, maxDuration, periodeDariForm(), POST(), runtime, Conflict, dynamic, maxDuration (+34 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.21
Nodes (14): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_INIT_SCRIPT, A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS (+6 more)

### Community 29 - "RegisterContent.tsx"
Cohesion: 0.20
Nodes (12): Kecamatan, namaWilayah, MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent() (+4 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "static-content-registry.ts"
Cohesion: 0.11
Nodes (22): HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), BlockEditorDialog(), PosterIkd(), WbsForm(), hubungiKamiContent (+14 more)

### Community 32 - "statistik-export.ts"
Cohesion: 0.16
Nodes (20): BAGIAN_STATISTIK, barisBernomor(), BULAN_PENDEK, dataAkun(), dataAspirasi(), dataHarian(), dataKonten(), dataLayanan() (+12 more)

### Community 33 - "utils.ts"
Cohesion: 0.08
Nodes (29): EMPTY, FormState, News, Foto, KATEGORI, NotFound(), PengaturanPelayanan(), FieldEditor() (+21 more)

### Community 34 - "fail"
Cohesion: 0.13
Nodes (27): PATCH(), STATUS_VALID, dynamic, POST(), GET(), POST(), ALLOWED_EXT, FETCH_ACTIONS (+19 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "peran.ts"
Cohesion: 0.08
Nodes (37): dynamic, GET(), PUT(), VALID, GET(), dynamic, PUT(), dynamic (+29 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.12
Nodes (14): DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic, DashboardKontenPage(), dynamic, AdminKritikSaran() (+6 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "ppid/[...slug]/page.tsx"
Cohesion: 0.17
Nodes (12): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, PpidCampur(), TAB (+4 more)

### Community 42 - "demografi-export.ts"
Cohesion: 0.22
Nodes (13): dynamic, GET(), runtime, buildDemografiWorkbook(), DbRow, kolomNilai(), susunBaris(), susunKolom() (+5 more)

### Community 44 - "galeri-profil.tsx"
Cohesion: 0.08
Nodes (29): clampKolom(), GaleriPage(), HalamanTambahanClient(), EditableBlock(), useInlineEdit(), clampKolom(), fmtTanggal(), GaleriItem (+21 more)

### Community 45 - "cn"
Cohesion: 0.11
Nodes (36): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), KIAModal(), KKCetakUlangModal() (+28 more)

### Community 46 - "ok"
Cohesion: 0.11
Nodes (30): dynamic, GET(), PUT(), POST(), POST(), GET(), GET(), dynamic (+22 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.11
Nodes (19): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+11 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "syarat-ketentuan-view.tsx"
Cohesion: 0.21
Nodes (8): BAGIAN, Data, SyaratKetentuanView(), SyaratLayananTabs(), KasusLayanan, LayananSyarat, SYARAT_KATEGORI, SYARAT_LAYANAN

### Community 51 - "halaman/[slug]/page.tsx"
Cohesion: 0.22
Nodes (11): EditorNavigasi(), cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), buatSlug(), hrefTambahan(), JUDUL_MENU_BAWAAN (+3 more)

### Community 52 - "date-picker.tsx"
Cohesion: 0.19
Nodes (14): PilihRincian(), norm(), SearchSelect(), SearchSelectOption, SearchSelectProps, DatePicker(), DatePickerProps, keTampilan() (+6 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.14
Nodes (24): dynamic, GET(), JamLayananEditor(), Toggle(), URUTAN_HARI, formatTanggalId(), hariIniZona(), PanelJamTutup() (+16 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "demografi-import.ts"
Cohesion: 0.43
Nodes (7): bacaLembar(), cellNum(), classifyKode(), klasifikasiKode(), norm(), parseDemografiExcel(), ParseResult

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "useAppSelector"
Cohesion: 0.22
Nodes (12): InlineEditProvider(), isPublicPage(), useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch (+4 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, highcharts, highcharts-react-official, dependencies, animejs, highcharts, highcharts-react-official, @reduxjs/toolkit (+3 more)

### Community 60 - "hero-section.tsx"
Cohesion: 0.17
Nodes (10): CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS, ease, HeroSection() (+2 more)

### Community 61 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "authSlice.ts"
Cohesion: 0.13
Nodes (14): ForgotPasswordPage(), LoginPage(), SessionHydrator(), ResetPasswordPage(), useAppDispatch(), authSlice, AuthState, checkNikKk (+6 more)

### Community 65 - "catatAktivitas"
Cohesion: 0.09
Nodes (32): DELETE(), dynamic, GET(), POST(), PUT(), DELETE(), dynamic, passwordCocok() (+24 more)

### Community 66 - "AdminKonten.tsx"
Cohesion: 0.27
Nodes (8): AdminKonten(), flatten(), Leaf, MenuEntry, navigationItems, NavMenu, NavSubItem, PPID_INFORMASI_GRUP

### Community 67 - "KTPELModal.tsx"
Cohesion: 0.08
Nodes (36): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, KOSONG, ALASAN_TOLAK, FINAL_STATUS (+28 more)

### Community 69 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "navbar.tsx"
Cohesion: 0.21
Nodes (12): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+4 more)

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 87 - "users/route.ts"
Cohesion: 0.11
Nodes (37): DELETE(), GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST(), POST() (+29 more)

### Community 88 - "KIAModal.tsx"
Cohesion: 0.29
Nodes (6): EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile

### Community 103 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 109 - "akun-status.ts"
Cohesion: 0.27
Nodes (8): dynamic, POST(), POST(), INFO_STATUS, infoStatus, pesanLoginStatus(), StatusAkun, createSession()

### Community 115 - "StaffPengajuanForm"
Cohesion: 0.67
Nodes (3): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer()

### Community 122 - "app/layout.tsx"
Cohesion: 0.22
Nodes (7): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing()

### Community 123 - "buatWorkbookStatistik"
Cohesion: 0.38
Nodes (10): buatWorkbookStatistik(), detailAkun(), detailAspirasi(), detailKonten(), detailPermohonan(), detailUntuk(), fmtWaktu(), kolomHuruf() (+2 more)

### Community 124 - "kunjungan/route.ts"
Cohesion: 0.36
Nodes (7): dynamic, GET(), POST(), runtime, ONLINE_WINDOW_MS, statsKunjungan(), tanggalHariIni()

### Community 125 - "app/page.tsx"
Cohesion: 0.14
Nodes (12): smoothEase, AlurLayanan(), ease, STEPS, ProfileTabs(), News, QuickHighlights(), tglID() (+4 more)

### Community 126 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 127 - "statistik/export/route.ts"
Cohesion: 0.38
Nodes (6): dynamic, GET(), runtime, BagianStatistik, bagianValid(), workbookStatistikResponse()

### Community 128 - "navigasi/page.tsx"
Cohesion: 0.50
Nodes (3): DashboardNavigasiPage(), dynamic, metadata

### Community 129 - "media/page.tsx"
Cohesion: 0.40
Nodes (4): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic

### Community 130 - "migrasi-periode-demografi.ts"
Cohesion: 0.60
Nodes (4): adaIndeks(), adaKolom(), main(), prisma

### Community 131 - "dashboard/berita/page.tsx"
Cohesion: 0.50
Nodes (3): AdminBerita(), DashboardBeritaPage(), dynamic

### Community 135 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

## Knowledge Gaps
- **599 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+594 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 707 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `demografi-view.tsx`, `baru/page.tsx`, `pelayanan-list.ts`, `input.tsx`, `stats.tsx`, `KKPerubahanBiodataModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `AdminDemografi.tsx`, `informasi-index.tsx`, `PengajuanBaruClient.tsx`, `AdminUsers.tsx`, `ppid-layanan-halaman.tsx`, `PilihLayananClient.tsx`, `accessibility-widget.tsx`, `RegisterContent.tsx`, `static-content-registry.ts`, `utils.ts`, `dashboard-sidebar.tsx`, `galeri-profil.tsx`, `date-picker.tsx`, `jam-layanan.ts`, `AdminKonten.tsx`, `KTPELModal.tsx`, `navbar.tsx`, `KIAModal.tsx`, `StaffPengajuanForm`, `app/page.tsx`, `notification-bell.tsx`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `navigasi/page.tsx`, `media/page.tsx`, `dashboard/page.tsx`, `dashboard/berita/page.tsx`, `riwayat/[id]/page.tsx`, `baru/page.tsx`, `produk/page.tsx`, `informasi-index.tsx`, `footer.tsx`, `AdminUsers.tsx`, `permohonan/[id]/route.ts`, `PilihLayananClient.tsx`, `periode-demografi.ts`, `ktp/route.ts`, `fail`, `peran.ts`, `back-button.tsx`, `demografi-export.ts`, `ok`, `skm/page.tsx`, `catatAktivitas`, `berita/[id]/route.ts`, `users/route.ts`, `statistik/export/route.ts`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `prisma` connect `ok` to `dashboard/page.tsx`, `riwayat/[id]/page.tsx`, `pelayanan-list.ts`, `AdminDemografi.tsx`, `informasi-index.tsx`, `AdminUsers.tsx`, `ppid-layanan-halaman.tsx`, `getSession`, `permohonan/[id]/route.ts`, `periode-demografi.ts`, `statistik-export.ts`, `fail`, `peran.ts`, `ppid/[...slug]/page.tsx`, `demografi-export.ts`, `halaman/[slug]/page.tsx`, `jam-layanan.ts`, `catatAktivitas`, `berita/[id]/route.ts`, `users/route.ts`, `akun-status.ts`, `kunjungan/route.ts`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _599 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dashboard/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1471861471861472 - nodes in this community are weakly interconnected._
- **Should `riwayat/[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._
- **Should `input.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12643678160919541 - nodes in this community are weakly interconnected._