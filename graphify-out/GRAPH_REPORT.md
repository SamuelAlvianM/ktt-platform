# Graph Report - sidako-platform  (2026-09-08)

## Corpus Check
- 356 files · ~257,410 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1946 nodes · 5712 edges · 141 communities (82 shown, 52 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5abd9118`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- button.tsx
- inline-edit.tsx
- riwayat/[id]/page.tsx
- parse/route.ts
- devDependencies
- PengajuanBaruClient.tsx
- react-advanced-cropper
- RegisterContent.tsx
- stats/route.ts
- stats.tsx
- auth.ts
- AktaKelahiranNikAdaModal.tsx
- demografi-editor.tsx
- formulir-ppid/page.tsx
- demografi-registri.ts
- informasi-index.tsx
- footer.tsx
- tiket/[id]/route.ts
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- demografi-export.ts
- berita/[id]/route.ts
- prisma.ts
- permohonan/[id]/route.ts
- [layanan]/page.tsx
- admin/demografi/route.ts
- accessibility-widget.tsx
- LoginContent.tsx
- ktp/route.ts
- static-content-registry.ts
- AdminDemografi.tsx
- KIAModal.tsx
- import/route.ts
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- catatAktivitas
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- ppid/[...slug]/page.tsx
- AdminPengaduan.tsx
- react-organizational-chart
- KKPerubahanBiodataModal.tsx
- cn
- ok
- layanan-forms.ts
- scripts
- profile-tabs.tsx
- sharp
- navigasi-tambahan.ts
- utils.ts
- jam-layanan.ts
- peta-demografi.tsx
- profil/page.tsx
- CLAUDE.md
- package.json
- useAppSelector
- dependencies
- syarat-layanan-tabs.tsx
- uji-visibilitas.ts
- skm/page.tsx
- authSlice.ts
- @types/node
- [jenis]/route.ts
- halaman/[slug]/page.tsx
- cek-status/route.ts
- eslint-config-next
- useStaticContent
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
- cek-pendaftaran/route.ts
- bcryptjs
- react-dropzone
- react-dom
- tailwindcss
- react-redux
- CekStatusClient.tsx
- sonner
- tailwind-merge
- tesseract.js
- @tiptap/extension-image
- @tiptap/extension-link
- notification-bell.tsx
- @tiptap/extension-underline
- react-leaflet
- @tiptap/pm
- @tiptap/react
- @tiptap/starter-kit
- @types/leaflet
- app/layout.tsx
- PilihLayananClient.tsx
- media/page.tsx
- app/page.tsx
- akun-tolak.ts
- image-upload-field.tsx
- navigasi/page.tsx
- StaffPengajuanForm
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
1. `cn()` - 213 edges
2. `ok()` - 160 edges
3. `getSession()` - 157 edges
4. `fail()` - 149 edges
5. `prisma` - 77 edges
6. `Button()` - 69 edges
7. `Input()` - 55 edges
8. `catatAktivitas()` - 52 edges
9. `Label()` - 41 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `ToolbarButton()` --calls--> `cn()`  [EXTRACTED]
  components/shared/rich-editor.tsx → lib/utils.ts
- `MapCard()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `ServiceCard()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `TrendChart()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `DashboardTiketPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/tiket/page.tsx → lib/auth.ts

## Import Cycles
- None detected.

## Communities (141 total, 52 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.06
Nodes (60): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+52 more)

### Community 1 - "button.tsx"
Cohesion: 0.08
Nodes (43): EMPTY, FormState, News, Foto, KATEGORI, KOSONG, ProfilInitial, Row (+35 more)

### Community 2 - "inline-edit.tsx"
Cohesion: 0.08
Nodes (26): clampKolom(), GaleriPage(), FieldEditor(), BlockEditorDialog(), Ctx, EditModeToggle(), InlineEditCtx, InlineEditProvider() (+18 more)

### Community 3 - "riwayat/[id]/page.tsx"
Cohesion: 0.07
Nodes (41): PermohonanDetail(), dynamic, RiwayatDetailPage(), STATUS_CONFIG, AlasanDitolak(), UraianTolak, BerkasGallery(), BerkasView (+33 more)

### Community 4 - "parse/route.ts"
Cohesion: 0.18
Nodes (15): Conflict, dynamic, maxDuration, POST(), runtime, sig(), Variant, bacaLembar() (+7 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "PengajuanBaruClient.tsx"
Cohesion: 0.29
Nodes (9): ICONS, PengajuanBaruClient(), JamLayananEditor(), Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger() (+1 more)

### Community 8 - "RegisterContent.tsx"
Cohesion: 0.22
Nodes (4): Kecamatan, namaWilayah, RegisterPage(), registerUser

### Community 9 - "stats/route.ts"
Cohesion: 0.25
Nodes (12): selaraskanKartuBeranda(), dynamic, GET(), BULAN_PENDEK, GET(), StatistikKartuEditor(), normalizeKartu(), selaraskanKartu() (+4 more)

### Community 10 - "stats.tsx"
Cohesion: 0.10
Nodes (20): DemografiMetric(), fmt(), OFFICE_LAT, OFFICE_LNG, pulseIcon, BadgePeriode(), BadgePeriodeEdit(), FALLBACK (+12 more)

### Community 11 - "auth.ts"
Cohesion: 0.11
Nodes (20): POST(), POST(), DELETE(), POST(), dynamic, GET(), runtime, DashboardTiketPage() (+12 more)

### Community 12 - "AktaKelahiranNikAdaModal.tsx"
Cohesion: 0.07
Nodes (70): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData (+62 more)

### Community 13 - "demografi-editor.tsx"
Cohesion: 0.09
Nodes (30): Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid(), ParsedRow, petaKartuLain() (+22 more)

### Community 14 - "formulir-ppid/page.tsx"
Cohesion: 0.22
Nodes (5): dynamic, metadata, dynamic, metadata, PpidLayananHalaman()

### Community 15 - "demografi-registri.ts"
Cohesion: 0.14
Nodes (19): dynamic, GET(), KategoriAdmin, DemografiKategoriPage(), dynamic, DEMOGRAFI_KATEGORI, DEMOGRAFI_KATEGORI_KUNCI, DEMOGRAFI_SLUGS (+11 more)

### Community 16 - "informasi-index.tsx"
Cohesion: 0.11
Nodes (22): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), simpan(), PpidAksiKartu(), hapus() (+14 more)

### Community 17 - "footer.tsx"
Cohesion: 0.08
Nodes (19): INFO, metadata, ArticleCard(), BeritaListPage(), News, tglID(), News, metadata (+11 more)

### Community 18 - "tiket/[id]/route.ts"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.13
Nodes (10): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, GRUP_AKUN, GrupKey, Kecamatan, PermohonanRingkas (+2 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "demografi-export.ts"
Cohesion: 0.18
Nodes (17): dynamic, GET(), runtime, dynamic, GET(), runtime, buildDemografiWorkbook(), DbRow (+9 more)

### Community 23 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 24 - "prisma.ts"
Cohesion: 0.10
Nodes (29): PATCH(), STATUS_VALID, GET(), dynamic, POST(), POST(), ALLOWED_EXT, FETCH_ACTIONS (+21 more)

### Community 25 - "permohonan/[id]/route.ts"
Cohesion: 0.20
Nodes (17): GET(), PATCH(), STATUS_VALID, GET(), formDariKode(), ALASAN, labelSah(), perluRincian() (+9 more)

### Community 26 - "[layanan]/page.tsx"
Cohesion: 0.23
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "admin/demografi/route.ts"
Cohesion: 0.21
Nodes (19): periodeDariForm(), periodeDariForm(), cekPetugas(), DELETE(), dynamic, GET(), periodeDariBadan(), PUT() (+11 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.21
Nodes (14): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_INIT_SCRIPT, A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS (+6 more)

### Community 29 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): LoginPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "static-content-registry.ts"
Cohesion: 0.11
Nodes (24): HubungiKamiPage(), dynamic, PusatBantuanPage(), sections, WbsPage(), PpidSeksi, EditableInfoPage(), InfoBerkas (+16 more)

### Community 32 - "AdminDemografi.tsx"
Cohesion: 0.12
Nodes (30): AdminDemografi(), AntreImpor, downloadFile(), HitunganPeriode, usulJudul(), DemografiView(), fmt(), KOLOM_LABEL (+22 more)

### Community 33 - "KIAModal.tsx"
Cohesion: 0.08
Nodes (37): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, ALASAN_TOLAK, FINAL_STATUS, Item (+29 more)

### Community 34 - "import/route.ts"
Cohesion: 0.20
Nodes (8): dynamic, maxDuration, POST(), runtime, dynamic, passwordCocok(), POST(), runtime

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "catatAktivitas"
Cohesion: 0.07
Nodes (44): dynamic, GET(), PUT(), VALID, GET(), DELETE(), dynamic, PUT() (+36 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.10
Nodes (17): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic (+9 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "ppid/[...slug]/page.tsx"
Cohesion: 0.11
Nodes (20): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, ProdukPage(), clampKolom() (+12 more)

### Community 42 - "AdminPengaduan.tsx"
Cohesion: 0.21
Nodes (8): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic, GambarItem, ImageViewer()

### Community 44 - "KKPerubahanBiodataModal.tsx"
Cohesion: 0.33
Nodes (5): FormData, JenisBiodataOption, KKPerubahanBiodataModalProps, UploadedFile, Checkbox()

### Community 45 - "cn"
Cohesion: 0.09
Nodes (42): NotFound(), Toggle(), ImageColumnInput(), IconPicker(), WarnaPicker(), AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal() (+34 more)

### Community 46 - "ok"
Cohesion: 0.08
Nodes (57): dynamic, GET(), DELETE(), dynamic, GET(), PATCH(), POST(), PUT() (+49 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.11
Nodes (19): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+11 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "profile-tabs.tsx"
Cohesion: 0.06
Nodes (35): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), BulletItem(), CONTENT (+27 more)

### Community 51 - "navigasi-tambahan.ts"
Cohesion: 0.13
Nodes (18): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, EditorNavigasi(), buatSlug() (+10 more)

### Community 52 - "utils.ts"
Cohesion: 0.11
Nodes (27): URUTAN_HARI, Values, AktaKematianModalProps, FormData, UploadedFile, norm(), SearchSelect(), SearchSelectOption (+19 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.16
Nodes (21): dynamic, GET(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan() (+13 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.16
Nodes (14): metadata, fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA (+6 more)

### Community 55 - "profil/page.tsx"
Cohesion: 0.24
Nodes (8): ChangePasswordForm(), FotoProfilCard(), dynamic, ProfilPage(), ProfilForm(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, highcharts, highcharts-react-official, dependencies, animejs, highcharts, highcharts-react-official, @reduxjs/toolkit (+3 more)

### Community 60 - "syarat-layanan-tabs.tsx"
Cohesion: 0.38
Nodes (5): SyaratLayananTabs(), KasusLayanan, LayananSyarat, SYARAT_KATEGORI, SYARAT_LAYANAN

### Community 61 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "authSlice.ts"
Cohesion: 0.17
Nodes (12): ForgotPasswordPage(), SessionHydrator(), ResetPasswordPage(), useAppDispatch(), authSlice, AuthState, checkNikKk, forgotPassword (+4 more)

### Community 65 - "[jenis]/route.ts"
Cohesion: 0.40
Nodes (4): GET(), demografiData, DemografiDataset, TODO: ganti dengan query Prisma nyata setelah model demografi tersedia.

### Community 66 - "halaman/[slug]/page.tsx"
Cohesion: 0.60
Nodes (4): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage()

### Community 67 - "cek-status/route.ts"
Cohesion: 0.67
Nodes (3): dynamic, POST(), uraikanAlasanTolak()

### Community 69 - "useStaticContent"
Cohesion: 0.09
Nodes (20): HalamanTambahanClient(), EditableBlock(), CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS (+12 more)

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "navbar.tsx"
Cohesion: 0.12
Nodes (18): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+10 more)

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 87 - "users/route.ts"
Cohesion: 0.08
Nodes (52): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST(), POST(), dynamic (+44 more)

### Community 88 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 103 - "cek-pendaftaran/route.ts"
Cohesion: 0.67
Nodes (3): dynamic, POST(), samarkanNama()

### Community 109 - "CekStatusClient.tsx"
Cohesion: 0.19
Nodes (11): CekStatusClient(), Hasil, IKON, metadata, fmtTanggal(), IsiDetail(), INFO_STATUS, infoStatus (+3 more)

### Community 115 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 122 - "app/layout.tsx"
Cohesion: 0.22
Nodes (7): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing()

### Community 123 - "PilihLayananClient.tsx"
Cohesion: 0.20
Nodes (11): PilihLayananClient(), PengaturanPelayanan(), KATEGORI_SLUG, WARNA_KATEGORI, WARNA_MATI, WARNA_NETRAL, WarnaKategori, PELAYANAN_KATEGORI (+3 more)

### Community 124 - "media/page.tsx"
Cohesion: 0.40
Nodes (4): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic

### Community 125 - "app/page.tsx"
Cohesion: 0.14
Nodes (12): smoothEase, AlurLayanan(), ease, STEPS, HeroSection(), News, QuickHighlights(), tglID() (+4 more)

### Community 126 - "akun-tolak.ts"
Cohesion: 0.40
Nodes (4): KEY_BY_LABEL, KOLOM_TOLAK, KolomTolak, LABEL_BY_KEY

### Community 129 - "image-upload-field.tsx"
Cohesion: 0.67
Nodes (3): ImageUploadField(), kecilkan(), TIPE_DITERIMA

### Community 131 - "navigasi/page.tsx"
Cohesion: 0.50
Nodes (3): DashboardNavigasiPage(), dynamic, metadata

### Community 132 - "StaffPengajuanForm"
Cohesion: 0.67
Nodes (3): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer()

### Community 135 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

## Knowledge Gaps
- **601 isolated node(s):** `KategoriData`, `Kategori`, `Layanan`, `TitikLabel`, `Tabel` (+596 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 709 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `button.tsx`, `inline-edit.tsx`, `image-upload-field.tsx`, `StaffPengajuanForm`, `PengajuanBaruClient.tsx`, `stats/route.ts`, `stats.tsx`, `AktaKelahiranNikAdaModal.tsx`, `demografi-editor.tsx`, `formulir-ppid/page.tsx`, `informasi-index.tsx`, `accessibility-widget.tsx`, `LoginContent.tsx`, `static-content-registry.ts`, `AdminDemografi.tsx`, `KIAModal.tsx`, `dashboard-sidebar.tsx`, `AdminPengaduan.tsx`, `KKPerubahanBiodataModal.tsx`, `profile-tabs.tsx`, `navigasi-tambahan.ts`, `utils.ts`, `jam-layanan.ts`, `useStaticContent`, `navbar.tsx`, `notification-bell.tsx`, `PilihLayananClient.tsx`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `navigasi/page.tsx`, `parse/route.ts`, `riwayat/[id]/page.tsx`, `produk/page.tsx`, `auth.ts`, `informasi-index.tsx`, `footer.tsx`, `tiket/[id]/route.ts`, `demografi-export.ts`, `berita/[id]/route.ts`, `prisma.ts`, `permohonan/[id]/route.ts`, `[layanan]/page.tsx`, `admin/demografi/route.ts`, `ktp/route.ts`, `import/route.ts`, `catatAktivitas`, `back-button.tsx`, `AdminPengaduan.tsx`, `navigasi-tambahan.ts`, `profil/page.tsx`, `skm/page.tsx`, `users/route.ts`, `dashboard/kritik-saran/page.tsx`, `media/page.tsx`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `statistik-export.ts`, `riwayat/[id]/page.tsx`, `parse/route.ts`, `stats/route.ts`, `auth.ts`, `demografi-registri.ts`, `informasi-index.tsx`, `tiket/[id]/route.ts`, `demografi-export.ts`, `berita/[id]/route.ts`, `permohonan/[id]/route.ts`, `admin/demografi/route.ts`, `static-content-registry.ts`, `import/route.ts`, `catatAktivitas`, `ppid/[...slug]/page.tsx`, `ok`, `jam-layanan.ts`, `profil/page.tsx`, `halaman/[slug]/page.tsx`, `cek-status/route.ts`, `users/route.ts`, `cek-pendaftaran/route.ts`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **What connects `KategoriData`, `Kategori`, `Layanan` to the rest of the system?**
  _601 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.056692242114237 - nodes in this community are weakly interconnected._
- **Should `button.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07515734912995187 - nodes in this community are weakly interconnected._
- **Should `inline-edit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07954545454545454 - nodes in this community are weakly interconnected._