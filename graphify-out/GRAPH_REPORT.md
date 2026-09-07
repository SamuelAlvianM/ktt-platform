# Graph Report - sidako-platform  (2026-09-07)

## Corpus Check
- 356 files · ~253,380 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1934 nodes · 5671 edges · 138 communities (79 shown, 52 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ea37f6e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
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
- label.tsx
- KIAModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- demografi-registri.ts
- kelola-kartu.tsx
- footer.tsx
- PengajuanBaruClient.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- ppid-layanan-halaman.tsx
- send/route.ts
- auth.ts
- permohonan/[id]/route.ts
- PilihLayananClient.tsx
- admin/demografi/route.ts
- accessibility-widget.tsx
- RegisterContent.tsx
- ktp/route.ts
- static-content-registry.ts
- AdminDemografi.tsx
- button.tsx
- [action]/route.ts
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- peran.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- ppid/[...slug]/page.tsx
- demografi-export.ts
- react-organizational-chart
- inline-edit.tsx
- cn
- ok
- layanan-forms.ts
- scripts
- profile-tabs.tsx
- sharp
- halaman/[slug]/page.tsx
- utils.ts
- jam-layanan.ts
- peta-demografi.tsx
- parse/route.ts
- CLAUDE.md
- package.json
- useAppSelector
- dependencies
- carousel.tsx
- uji-visibilitas.ts
- skm/page.tsx
- authSlice.ts
- @types/node
- catatAktivitas
- AdminKonten.tsx
- select.tsx
- eslint-config-next
- galeri-profil.tsx
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
- dashboard/kritik-saran/page.tsx
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
- app/page.tsx
- notification-bell.tsx
- navigasi/page.tsx
- migrasi-periode-demografi.ts
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
- `EditModeToggle()` --calls--> `cn()`  [EXTRACTED]
  components/konten/inline-edit.tsx → lib/utils.ts
- `MapCard()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `ServiceCard()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `TrendChart()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (138 total, 52 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.06
Nodes (57): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+49 more)

### Community 1 - "demografi-view.tsx"
Cohesion: 0.13
Nodes (21): AdminMedia(), fmtSize(), Row, DemografiView(), fmt(), KOLOM_LABEL, labelKolom(), Row (+13 more)

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
Cohesion: 0.16
Nodes (16): Values, KkScanFieldProps, FormData, KKPisahKKModalProps, UploadedFile, FormData, KKTambahAnakModalProps, UploadedFile (+8 more)

### Community 10 - "stats.tsx"
Cohesion: 0.09
Nodes (20): DemografiMetric(), fmt(), OFFICE_LAT, OFFICE_LNG, pulseIcon, BadgePeriode(), BadgePeriodeEdit(), FALLBACK (+12 more)

### Community 11 - "label.tsx"
Cohesion: 0.13
Nodes (21): KOSONG, ProfilInitial, AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile (+13 more)

### Community 12 - "KIAModal.tsx"
Cohesion: 0.08
Nodes (39): AktaPerceraianModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN, FormPermohonanProps, memuat(), Dialog() (+31 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.12
Nodes (28): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+20 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.18
Nodes (18): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+10 more)

### Community 15 - "demografi-registri.ts"
Cohesion: 0.15
Nodes (22): DELETE(), dynamic, POST(), PUT(), dynamic, GET(), DemografiKategoriPage(), dynamic (+14 more)

### Community 16 - "kelola-kartu.tsx"
Cohesion: 0.08
Nodes (32): dynamic, metadata, dynamic, metadata, MaklumatPanel(), StatCard(), PpidInformasiIndex(), FormKartu() (+24 more)

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
Nodes (33): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, fmtTanggal(), GRUP_AKUN, GrupKey, Kecamatan (+25 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "ppid-layanan-halaman.tsx"
Cohesion: 0.19
Nodes (8): dynamic, metadata, dynamic, metadata, PpidLayananHalaman(), PpidSeksi, InfoPageContent, LAYANAN_PPID_TABS

### Community 23 - "send/route.ts"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 24 - "auth.ts"
Cohesion: 0.11
Nodes (16): dynamic, dynamic, POST(), dynamic, POST(), samarkanNama(), dynamic, GET() (+8 more)

### Community 25 - "permohonan/[id]/route.ts"
Cohesion: 0.20
Nodes (17): GET(), PATCH(), STATUS_VALID, GET(), formDariKode(), ALASAN, labelSah(), perluRincian() (+9 more)

### Community 26 - "PilihLayananClient.tsx"
Cohesion: 0.24
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "admin/demografi/route.ts"
Cohesion: 0.13
Nodes (34): dynamic, GET(), runtime, dynamic, maxDuration, periodeDariForm(), POST(), runtime (+26 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "RegisterContent.tsx"
Cohesion: 0.20
Nodes (12): Kecamatan, namaWilayah, MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent() (+4 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "static-content-registry.ts"
Cohesion: 0.09
Nodes (30): GET(), HubungiKamiPage(), dynamic, ProdukPage(), PusatBantuanPage(), sections, WbsPage(), EditableInfoPage() (+22 more)

### Community 32 - "AdminDemografi.tsx"
Cohesion: 0.20
Nodes (18): AdminDemografi(), AntreImpor, downloadFile(), HitunganPeriode, KategoriAdmin, usulJudul(), StatsData, PemilihPeriode() (+10 more)

### Community 33 - "button.tsx"
Cohesion: 0.07
Nodes (28): EMPTY, FormState, News, Foto, KATEGORI, NotFound(), PengaturanPelayanan(), FieldEditor() (+20 more)

### Community 34 - "[action]/route.ts"
Cohesion: 0.14
Nodes (22): PATCH(), STATUS_VALID, dynamic, POST(), POST(), ALLOWED_EXT, FETCH_ACTIONS, POST() (+14 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "peran.ts"
Cohesion: 0.07
Nodes (42): GET(), GET(), dynamic, GET(), PUT(), VALID, GET(), DELETE() (+34 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.13
Nodes (13): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic (+5 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "ppid/[...slug]/page.tsx"
Cohesion: 0.08
Nodes (25): clampKolom(), GaleriPage(), bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS (+17 more)

### Community 42 - "demografi-export.ts"
Cohesion: 0.18
Nodes (16): dynamic, GET(), runtime, buildDemografiWorkbook(), DbRow, kolomNilai(), susunBaris(), susunKolom() (+8 more)

### Community 44 - "inline-edit.tsx"
Cohesion: 0.08
Nodes (29): HalamanTambahanClient(), BlockEditorDialog(), Ctx, EditableBlock(), EditModeToggle(), InlineEditCtx, InlineEditProvider(), isPublicPage() (+21 more)

### Community 45 - "cn"
Cohesion: 0.10
Nodes (39): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), KIAModal(), KKCetakUlangModal() (+31 more)

### Community 46 - "ok"
Cohesion: 0.09
Nodes (50): dynamic, GET(), PUT(), GET(), GET(), GET(), JENIS_VALID, POST() (+42 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.11
Nodes (19): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+11 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "profile-tabs.tsx"
Cohesion: 0.14
Nodes (15): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MottoPanel(), NumberedItem(), PejabatPanel() (+7 more)

### Community 51 - "halaman/[slug]/page.tsx"
Cohesion: 0.22
Nodes (11): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), JUDUL_MENU_BAWAAN, KUNCI_NAVIGASI, MenuTambahan, navigationItems (+3 more)

### Community 52 - "utils.ts"
Cohesion: 0.11
Nodes (25): AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModalProps, FormData, UploadedFile, norm(), SearchSelect() (+17 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.14
Nodes (24): dynamic, GET(), JamLayananEditor(), Toggle(), URUTAN_HARI, formatTanggalId(), hariIniZona(), PanelJamTutup() (+16 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "parse/route.ts"
Cohesion: 0.18
Nodes (15): Conflict, dynamic, maxDuration, POST(), runtime, sig(), Variant, bacaLembar() (+7 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, highcharts, highcharts-react-official, dependencies, animejs, highcharts, highcharts-react-official, @reduxjs/toolkit (+3 more)

### Community 60 - "carousel.tsx"
Cohesion: 0.25
Nodes (6): CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS

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
Cohesion: 0.10
Nodes (31): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+23 more)

### Community 66 - "AdminKonten.tsx"
Cohesion: 0.28
Nodes (7): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, PPID_INFORMASI_GRUP

### Community 67 - "select.tsx"
Cohesion: 0.08
Nodes (34): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, ALASAN_TOLAK, FINAL_STATUS, Item (+26 more)

### Community 69 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

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
Cohesion: 0.12
Nodes (34): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST(), POST(), DELETE() (+26 more)

### Community 88 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 103 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 109 - "akun-status.ts"
Cohesion: 0.23
Nodes (11): dynamic, POST(), POST(), IsiDetail(), INFO_STATUS, infoStatus, pesanLoginStatus(), STATUS_AKUN (+3 more)

### Community 115 - "StaffPengajuanForm"
Cohesion: 0.67
Nodes (3): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer()

### Community 122 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

### Community 125 - "app/page.tsx"
Cohesion: 0.15
Nodes (11): smoothEase, AlurLayanan(), ease, STEPS, News, QuickHighlights(), tglID(), RelasiTerkait() (+3 more)

### Community 126 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 128 - "navigasi/page.tsx"
Cohesion: 0.29
Nodes (6): EditorNavigasi(), DashboardNavigasiPage(), dynamic, metadata, buatSlug(), hrefTambahan()

### Community 130 - "migrasi-periode-demografi.ts"
Cohesion: 0.60
Nodes (4): adaIndeks(), adaKolom(), main(), prisma

### Community 135 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

## Knowledge Gaps
- **601 isolated node(s):** `HitunganPeriode`, `AntreImpor`, `KategoriAdmin`, `Kategori`, `Layanan` (+596 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 708 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `demografi-view.tsx`, `baru/page.tsx`, `pelayanan-list.ts`, `input.tsx`, `stats.tsx`, `label.tsx`, `KIAModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `kelola-kartu.tsx`, `PengajuanBaruClient.tsx`, `AdminUsers.tsx`, `ppid-layanan-halaman.tsx`, `PilihLayananClient.tsx`, `accessibility-widget.tsx`, `RegisterContent.tsx`, `AdminDemografi.tsx`, `button.tsx`, `dashboard-sidebar.tsx`, `ppid/[...slug]/page.tsx`, `inline-edit.tsx`, `profile-tabs.tsx`, `utils.ts`, `jam-layanan.ts`, `AdminKonten.tsx`, `select.tsx`, `navbar.tsx`, `StaffPengajuanForm`, `notification-bell.tsx`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `navigasi/page.tsx`, `riwayat/[id]/page.tsx`, `baru/page.tsx`, `produk/page.tsx`, `demografi-registri.ts`, `kelola-kartu.tsx`, `footer.tsx`, `AdminUsers.tsx`, `auth.ts`, `permohonan/[id]/route.ts`, `PilihLayananClient.tsx`, `admin/demografi/route.ts`, `ktp/route.ts`, `[action]/route.ts`, `peran.ts`, `back-button.tsx`, `parse/route.ts`, `skm/page.tsx`, `catatAktivitas`, `AdminKonten.tsx`, `users/route.ts`, `dashboard/kritik-saran/page.tsx`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Why does `prisma` connect `auth.ts` to `statistik-export.ts`, `riwayat/[id]/page.tsx`, `pelayanan-list.ts`, `statistik-kartu-editor.tsx`, `demografi-registri.ts`, `kelola-kartu.tsx`, `AdminUsers.tsx`, `ppid-layanan-halaman.tsx`, `permohonan/[id]/route.ts`, `admin/demografi/route.ts`, `static-content-registry.ts`, `[action]/route.ts`, `peran.ts`, `ppid/[...slug]/page.tsx`, `demografi-export.ts`, `ok`, `halaman/[slug]/page.tsx`, `jam-layanan.ts`, `parse/route.ts`, `catatAktivitas`, `users/route.ts`, `akun-status.ts`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **What connects `HitunganPeriode`, `AntreImpor`, `KategoriAdmin` to the rest of the system?**
  _601 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05874125874125874 - nodes in this community are weakly interconnected._
- **Should `demografi-view.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13118279569892474 - nodes in this community are weakly interconnected._
- **Should `riwayat/[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._