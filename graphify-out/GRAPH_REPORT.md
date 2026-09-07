# Graph Report - sidako-platform  (2026-09-07)

## Corpus Check
- 356 files · ~254,875 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1940 nodes · 5698 edges · 142 communities (82 shown, 52 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0b06eca2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- inline-edit.tsx
- [jenis]/route.ts
- riwayat/[id]/page.tsx
- baru/page.tsx
- devDependencies
- PengajuanBaruClient.tsx
- react-advanced-cropper
- RegisterContent.tsx
- dashboard/page.tsx
- stats.tsx
- auth.ts
- AktaNikahModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- admin/demografi/kategori/route.ts
- informasi-index.tsx
- footer.tsx
- tiket/[id]/route.ts
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- ppid-layanan-halaman.tsx
- berita/[id]/route.ts
- prisma.ts
- permohonan/[id]/route.ts
- PilihLayananClient.tsx
- admin/demografi/route.ts
- accessibility-widget.tsx
- LoginContent.tsx
- ktp/route.ts
- editable-info-page.tsx
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
- AdminPengaduan.tsx
- react-organizational-chart
- static-content-registry.ts
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
- profil/page.tsx
- CLAUDE.md
- package.json
- hooks.ts
- dependencies
- kunjungan/route.ts
- uji-visibilitas.ts
- skm/page.tsx
- authSlice.ts
- @types/node
- catatAktivitas
- AdminKonten.tsx
- AktaKelahiranNikTidakAdaModal.tsx
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
- CekStatusClient.tsx
- sonner
- tailwind-merge
- tesseract.js
- @tiptap/extension-image
- @tiptap/extension-link
- KIAModal.tsx
- @tiptap/extension-underline
- react-leaflet
- @tiptap/pm
- @tiptap/react
- @tiptap/starter-kit
- @types/leaflet
- app/layout.tsx
- pelayanan-list.ts
- KKPerubahanBiodataModal.tsx
- app/page.tsx
- akun-tolak.ts
- AktaKematianModal.tsx
- navigasi/page.tsx
- image-upload-field.tsx
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

## Communities (142 total, 52 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.09
Nodes (44): dynamic, GET(), runtime, buildDemografiWorkbook(), DbRow, kolomNilai(), susunBaris(), susunKolom() (+36 more)

### Community 1 - "inline-edit.tsx"
Cohesion: 0.09
Nodes (32): AdminMedia(), fmtSize(), Ctx, EditModeToggle(), InlineEditCtx, InlineEditProvider(), isPublicPage(), DemografiMetric() (+24 more)

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

### Community 6 - "PengajuanBaruClient.tsx"
Cohesion: 0.19
Nodes (14): ICONS, PengajuanBaruClient(), Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger(), KATEGORI_SLUG (+6 more)

### Community 8 - "RegisterContent.tsx"
Cohesion: 0.21
Nodes (5): Kecamatan, namaWilayah, RegisterPage(), labelKolom(), registerUser

### Community 9 - "dashboard/page.tsx"
Cohesion: 0.15
Nodes (17): BULAN_PENDEK, DashboardPage(), dynamic, fmt(), pct(), ProgressRow(), STATUS_PENGADUAN, dasar (+9 more)

### Community 10 - "stats.tsx"
Cohesion: 0.11
Nodes (13): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+5 more)

### Community 11 - "auth.ts"
Cohesion: 0.15
Nodes (11): dynamic, VALID, POST(), POST(), DashboardTiketPage(), dynamic, pesanLoginStatus(), createSession() (+3 more)

### Community 12 - "AktaNikahModal.tsx"
Cohesion: 0.07
Nodes (60): AktaNikahModalProps, FormData, UploadedFile, AktaPerceraianModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN (+52 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.10
Nodes (36): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+28 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.20
Nodes (16): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), OrgBox(), adalahPuncak() (+8 more)

### Community 15 - "admin/demografi/kategori/route.ts"
Cohesion: 0.12
Nodes (30): DELETE(), dynamic, GET(), PATCH(), POST(), PUT(), terkunci(), dynamic (+22 more)

### Community 16 - "informasi-index.tsx"
Cohesion: 0.10
Nodes (23): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+15 more)

### Community 17 - "footer.tsx"
Cohesion: 0.07
Nodes (19): INFO, metadata, ArticleCard(), BeritaListPage(), News, tglID(), News, metadata (+11 more)

### Community 18 - "tiket/[id]/route.ts"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.11
Nodes (12): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, GRUP_AKUN, GrupKey, Kecamatan, PermohonanRingkas (+4 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "ppid-layanan-halaman.tsx"
Cohesion: 0.11
Nodes (12): dynamic, metadata, dynamic, metadata, PpidCampur(), TAB, Tampil, PpidLayananHalaman() (+4 more)

### Community 23 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 24 - "prisma.ts"
Cohesion: 0.11
Nodes (25): dynamic, PATCH(), STATUS_VALID, dynamic, POST(), dynamic, POST(), samarkanNama() (+17 more)

### Community 25 - "permohonan/[id]/route.ts"
Cohesion: 0.21
Nodes (16): GET(), PATCH(), STATUS_VALID, formDariKode(), ALASAN, labelSah(), perluRincian(), pilihanRincian() (+8 more)

### Community 26 - "PilihLayananClient.tsx"
Cohesion: 0.24
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "admin/demografi/route.ts"
Cohesion: 0.09
Nodes (46): dynamic, GET(), runtime, periodeDariForm(), Conflict, dynamic, maxDuration, periodeDariForm() (+38 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.21
Nodes (14): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_INIT_SCRIPT, A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS (+6 more)

### Community 29 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): LoginPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "editable-info-page.tsx"
Cohesion: 0.12
Nodes (18): HubungiKamiPage(), dynamic, ProdukPage(), PusatBantuanPage(), sections, WbsPage(), EditableInfoPage(), FaqItem (+10 more)

### Community 32 - "AdminDemografi.tsx"
Cohesion: 0.14
Nodes (33): AdminDemografi(), AntreImpor, downloadFile(), HitunganPeriode, usulJudul(), DemografiView(), fmt(), KOLOM_LABEL (+25 more)

### Community 33 - "button.tsx"
Cohesion: 0.11
Nodes (26): EMPTY, FormState, News, Foto, KATEGORI, KOSONG, ProfilInitial, FieldEditor() (+18 more)

### Community 34 - "[action]/route.ts"
Cohesion: 0.16
Nodes (17): dynamic, GET(), PUT(), dynamic, GET(), ALLOWED_EXT, FETCH_ACTIONS, POST() (+9 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "peran.ts"
Cohesion: 0.08
Nodes (36): GET(), DELETE(), dynamic, PUT(), dynamic, POST(), DashboardLayout(), dynamic (+28 more)

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
Cohesion: 0.13
Nodes (26): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+18 more)

### Community 41 - "ppid/[...slug]/page.tsx"
Cohesion: 0.13
Nodes (13): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, IKON_JENIS, KUNCI_PROFIL (+5 more)

### Community 42 - "AdminPengaduan.tsx"
Cohesion: 0.21
Nodes (8): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic, GambarItem, ImageViewer()

### Community 44 - "static-content-registry.ts"
Cohesion: 0.10
Nodes (22): BlockEditorDialog(), MODE, BAGIAN, Data, SyaratKetentuanView(), SyaratLayananTabs(), blokGaleriPpid(), blokHalamanTambahan() (+14 more)

### Community 45 - "cn"
Cohesion: 0.10
Nodes (38): NotFound(), Toggle(), AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal() (+30 more)

### Community 46 - "ok"
Cohesion: 0.09
Nodes (49): dynamic, GET(), POST(), GET(), GET(), PUT(), GET(), GET() (+41 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.11
Nodes (19): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+11 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "profile-tabs.tsx"
Cohesion: 0.13
Nodes (16): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MottoPanel(), NumberedItem(), PejabatPanel() (+8 more)

### Community 51 - "halaman/[slug]/page.tsx"
Cohesion: 0.22
Nodes (11): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), JUDUL_MENU_BAWAAN, KUNCI_NAVIGASI, MenuTambahan, navigationItems (+3 more)

### Community 52 - "utils.ts"
Cohesion: 0.11
Nodes (27): JamLayananEditor(), URUTAN_HARI, AktaKelahiranNikAdaModalProps, FormData, UploadedFile, norm(), SearchSelect(), SearchSelectOption (+19 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.20
Nodes (14): formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan(), HARI_LABEL, JAM_TIMEZONE (+6 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "profil/page.tsx"
Cohesion: 0.24
Nodes (8): ChangePasswordForm(), FotoProfilCard(), dynamic, ProfilPage(), ProfilForm(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "hooks.ts"
Cohesion: 0.29
Nodes (9): useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore(), RootState (+1 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, highcharts, highcharts-react-official, dependencies, animejs, highcharts, highcharts-react-official, @reduxjs/toolkit (+3 more)

### Community 60 - "kunjungan/route.ts"
Cohesion: 0.36
Nodes (7): dynamic, GET(), POST(), runtime, ONLINE_WINDOW_MS, statsKunjungan(), tanggalHariIni()

### Community 61 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "authSlice.ts"
Cohesion: 0.17
Nodes (12): ForgotPasswordPage(), SessionHydrator(), ResetPasswordPage(), useAppDispatch(), authSlice, AuthState, checkNikKk, forgotPassword (+4 more)

### Community 65 - "catatAktivitas"
Cohesion: 0.11
Nodes (23): dynamic, maxDuration, runtime, DELETE(), dynamic, passwordCocok(), POST(), runtime (+15 more)

### Community 66 - "AdminKonten.tsx"
Cohesion: 0.28
Nodes (7): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, PPID_INFORMASI_GRUP

### Community 67 - "AktaKelahiranNikTidakAdaModal.tsx"
Cohesion: 0.09
Nodes (34): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, ALASAN_TOLAK, FINAL_STATUS, Item (+26 more)

### Community 69 - "galeri-profil.tsx"
Cohesion: 0.09
Nodes (28): clampKolom(), GaleriPage(), GalleryItem, KATEGORI_BAWAAN, KOLOM_PILIHAN, URUTAN, HalamanTambahanClient(), EditableBlock() (+20 more)

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "navbar.tsx"
Cohesion: 0.12
Nodes (17): DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons, SubDropdownItem() (+9 more)

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 87 - "users/route.ts"
Cohesion: 0.08
Nodes (51): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST(), dynamic, POST() (+43 more)

### Community 88 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 103 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 109 - "CekStatusClient.tsx"
Cohesion: 0.17
Nodes (13): dynamic, POST(), CekStatusClient(), Hasil, IKON, metadata, fmtTanggal(), IsiDetail() (+5 more)

### Community 115 - "KIAModal.tsx"
Cohesion: 0.29
Nodes (6): EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile

### Community 122 - "app/layout.tsx"
Cohesion: 0.22
Nodes (7): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing()

### Community 123 - "pelayanan-list.ts"
Cohesion: 0.47
Nodes (4): PengaturanPelayanan(), PELAYANAN_KATEGORI, PELAYANAN_LIST, PelayananItem

### Community 124 - "KKPerubahanBiodataModal.tsx"
Cohesion: 0.40
Nodes (4): FormData, JenisBiodataOption, KKPerubahanBiodataModalProps, UploadedFile

### Community 125 - "app/page.tsx"
Cohesion: 0.08
Nodes (21): smoothEase, AlurLayanan(), ease, STEPS, CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps (+13 more)

### Community 126 - "akun-tolak.ts"
Cohesion: 0.40
Nodes (4): KEY_BY_LABEL, KOLOM_TOLAK, KolomTolak, LABEL_BY_KEY

### Community 127 - "AktaKematianModal.tsx"
Cohesion: 0.50
Nodes (3): AktaKematianModalProps, FormData, UploadedFile

### Community 128 - "navigasi/page.tsx"
Cohesion: 0.29
Nodes (6): EditorNavigasi(), DashboardNavigasiPage(), dynamic, metadata, buatSlug(), hrefTambahan()

### Community 129 - "image-upload-field.tsx"
Cohesion: 0.67
Nodes (3): ImageUploadField(), kecilkan(), TIPE_DITERIMA

### Community 135 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

## Knowledge Gaps
- **599 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+594 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 707 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `inline-edit.tsx`, `image-upload-field.tsx`, `baru/page.tsx`, `PengajuanBaruClient.tsx`, `stats.tsx`, `AktaNikahModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `informasi-index.tsx`, `footer.tsx`, `ppid-layanan-halaman.tsx`, `PilihLayananClient.tsx`, `accessibility-widget.tsx`, `LoginContent.tsx`, `editable-info-page.tsx`, `AdminDemografi.tsx`, `button.tsx`, `dashboard-sidebar.tsx`, `AdminPengaduan.tsx`, `static-content-registry.ts`, `profile-tabs.tsx`, `utils.ts`, `jam-layanan.ts`, `AdminKonten.tsx`, `AktaKelahiranNikTidakAdaModal.tsx`, `galeri-profil.tsx`, `navbar.tsx`, `KIAModal.tsx`, `pelayanan-list.ts`, `KKPerubahanBiodataModal.tsx`, `AktaKematianModal.tsx`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `navigasi/page.tsx`, `riwayat/[id]/page.tsx`, `baru/page.tsx`, `produk/page.tsx`, `dashboard/page.tsx`, `auth.ts`, `admin/demografi/kategori/route.ts`, `informasi-index.tsx`, `footer.tsx`, `tiket/[id]/route.ts`, `AdminUsers.tsx`, `berita/[id]/route.ts`, `prisma.ts`, `permohonan/[id]/route.ts`, `PilihLayananClient.tsx`, `admin/demografi/route.ts`, `ktp/route.ts`, `[action]/route.ts`, `peran.ts`, `back-button.tsx`, `AdminPengaduan.tsx`, `profil/page.tsx`, `skm/page.tsx`, `catatAktivitas`, `AdminKonten.tsx`, `users/route.ts`, `dashboard/kritik-saran/page.tsx`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `statistik-export.ts`, `riwayat/[id]/page.tsx`, `dashboard/page.tsx`, `auth.ts`, `statistik-kartu-editor.tsx`, `admin/demografi/kategori/route.ts`, `informasi-index.tsx`, `tiket/[id]/route.ts`, `ppid-layanan-halaman.tsx`, `berita/[id]/route.ts`, `permohonan/[id]/route.ts`, `admin/demografi/route.ts`, `editable-info-page.tsx`, `[action]/route.ts`, `peran.ts`, `ppid/[...slug]/page.tsx`, `ok`, `halaman/[slug]/page.tsx`, `profil/page.tsx`, `kunjungan/route.ts`, `catatAktivitas`, `users/route.ts`, `CekStatusClient.tsx`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _599 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09158186864014801 - nodes in this community are weakly interconnected._
- **Should `inline-edit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08879492600422834 - nodes in this community are weakly interconnected._
- **Should `riwayat/[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._