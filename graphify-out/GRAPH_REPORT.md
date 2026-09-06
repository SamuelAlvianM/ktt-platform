# Graph Report - sidako-platform  (2026-09-06)

## Corpus Check
- 352 files · ~246,628 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1903 nodes · 5533 edges · 150 communities (89 shown, 53 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7d0c56e8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- users/route.ts
- field-editor.tsx
- PermohonanDetail.tsx
- AktaKelahiranNikTidakAdaModal.tsx
- devDependencies
- pelayanan-visibilitas/route.ts
- react-advanced-cropper
- ok
- auth.ts
- stats.tsx
- office-map.tsx
- AktaKelahiranNikAdaModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- [jenis]/route.ts
- informasi-index.tsx
- footer.tsx
- PengajuanBaruClient.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- AdminPengaduan.tsx
- send/route.ts
- mail-templates.ts
- galeri-profil.tsx
- PilihLayananClient.tsx
- AdminDemografi.tsx
- accessibility-widget.tsx
- RegisterContent.tsx
- ktp/route.ts
- editable-info-page.tsx
- button.tsx
- dashboard/page.tsx
- profile-tabs.tsx
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- peran.ts
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
- permohonan-pdf.ts
- sharp
- halaman/[slug]/page.tsx
- utils.ts
- jam-layanan.ts
- peta-demografi.tsx
- navbar.tsx
- CLAUDE.md
- package.json
- riwayat-list.tsx
- dependencies
- app/layout.tsx
- uji-visibilitas.ts
- skm/page.tsx
- berita/[id]/route.ts
- @types/node
- [action]/route.ts
- app/page.tsx
- KKCetakUlangModal.tsx
- eslint-config-next
- dashboard/kritik-saran/page.tsx
- SIDAKO Platform
- prisma
- useAppSelector
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
- media/upload/route.ts
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
- permohonan/[id]/route.ts
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
- AktaPerceraianModal.tsx
- hooks.ts
- ppid-layanan-halaman.tsx
- carousel.tsx
- AdminKonten.tsx
- dashboard/galeri/page.tsx
- navigasi/page.tsx
- admin/jam-layanan/route.ts
- kelola-kartu.tsx
- camera-capture.tsx
- baru/page.tsx
- cn
- cek-pendaftaran/route.ts
- AdminProduk.tsx
- image-upload-field.tsx
- pagination.tsx
- dashboard/tiket/page.tsx
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
2. `ok()` - 150 edges
3. `getSession()` - 149 edges
4. `fail()` - 140 edges
5. `prisma` - 74 edges
6. `Button()` - 69 edges
7. `Input()` - 55 edges
8. `catatAktivitas()` - 47 edges
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

## Communities (150 total, 53 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.11
Nodes (38): dynamic, GET(), runtime, BAGIAN_STATISTIK, BagianStatistik, bagianValid(), barisBernomor(), buatWorkbookStatistik() (+30 more)

### Community 1 - "users/route.ts"
Cohesion: 0.16
Nodes (19): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), DELETE(), dynamic, PUT() (+11 more)

### Community 2 - "field-editor.tsx"
Cohesion: 0.17
Nodes (9): IconColumnInput(), ImageColumnInput(), ImagePickerFieldProps, MediaPicker(), RichEditor(), RichEditorProps, ToolbarButton(), ICON_MAP (+1 more)

### Community 3 - "PermohonanDetail.tsx"
Cohesion: 0.11
Nodes (28): Detail, FINAL, PermohonanDetail(), STATUS, dynamic, RiwayatDetailPage(), STATUS_CONFIG, PilihRincian() (+20 more)

### Community 4 - "AktaKelahiranNikTidakAdaModal.tsx"
Cohesion: 0.16
Nodes (13): AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModalProps, FormData, UploadedFile, HOURS, isJam() (+5 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "pelayanan-visibilitas/route.ts"
Cohesion: 0.27
Nodes (8): dynamic, VALID, PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem, slugTersembunyi(), layananTersembunyi()

### Community 8 - "ok"
Cohesion: 0.09
Nodes (50): POST(), POST(), DELETE(), DELETE(), GET(), passwordCocok(), POST(), GET() (+42 more)

### Community 9 - "auth.ts"
Cohesion: 0.10
Nodes (22): dynamic, dynamic, runtime, POST(), POST(), dynamic, GET(), runtime (+14 more)

### Community 10 - "stats.tsx"
Cohesion: 0.08
Nodes (32): EditorNavigasi(), KOSONG, DemografiMetric(), fmt(), Row, FALLBACK, KartuDemografi, MapCard() (+24 more)

### Community 11 - "office-map.tsx"
Cohesion: 0.29
Nodes (4): OFFICE_LAT, OFFICE_LNG, pulseIcon, OfficeMap

### Community 12 - "AktaKelahiranNikAdaModal.tsx"
Cohesion: 0.10
Nodes (41): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile, Dialog(), DialogClose (+33 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.13
Nodes (26): Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid(), ParsedRow, petaKartuLain() (+18 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.11
Nodes (23): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+15 more)

### Community 15 - "[jenis]/route.ts"
Cohesion: 0.40
Nodes (4): GET(), demografiData, DemografiDataset, TODO: ganti dengan query Prisma nyata setelah model demografi tersedia.

### Community 16 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (19): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+11 more)

### Community 17 - "footer.tsx"
Cohesion: 0.08
Nodes (17): INFO, metadata, ArticleCard(), BeritaListPage(), News, tglID(), News, metadata (+9 more)

### Community 18 - "PengajuanBaruClient.tsx"
Cohesion: 0.16
Nodes (16): ICONS, PengajuanBaruClient(), PengaturanPelayanan(), SheetDescription(), SheetHeader(), Tabs(), TabsContent(), TabsList() (+8 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.07
Nodes (31): CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers(), DetailUser, EMPTY_FORM (+23 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 23 - "send/route.ts"
Cohesion: 0.16
Nodes (22): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, fonnteAktif() (+14 more)

### Community 24 - "mail-templates.ts"
Cohesion: 0.28
Nodes (15): POST(), appUrl(), getTransporter(), mailEnabled(), sendMail(), SendMailOptions, esc(), layout() (+7 more)

### Community 25 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

### Community 26 - "PilihLayananClient.tsx"
Cohesion: 0.27
Nodes (8): AjukanPermohonanPage(), dynamic, generateMetadata(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN, LayananPermohonan, ROUTE_KE_FORM_SLUG

### Community 27 - "AdminDemografi.tsx"
Cohesion: 0.05
Nodes (87): dynamic, GET(), runtime, dynamic, maxDuration, periodeDariForm(), runtime, Conflict (+79 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "RegisterContent.tsx"
Cohesion: 0.13
Nodes (15): Kecamatan, namaWilayah, RegisterPage(), ResetPasswordPage(), MenuItem, menuItems, Card(), CardAction() (+7 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "editable-info-page.tsx"
Cohesion: 0.15
Nodes (13): HubungiKamiPage(), dynamic, ProdukPage(), PusatBantuanPage(), WbsPage(), EditableInfoPage(), FaqItem, FaqList() (+5 more)

### Community 32 - "button.tsx"
Cohesion: 0.12
Nodes (21): EMPTY, FormState, News, Foto, KATEGORI, AdminMedia(), fmtSize(), NotFound() (+13 more)

### Community 33 - "dashboard/page.tsx"
Cohesion: 0.15
Nodes (16): dynamic, GET(), POST(), runtime, BULAN_PENDEK, DashboardPage(), dynamic, fmt() (+8 more)

### Community 34 - "profile-tabs.tsx"
Cohesion: 0.12
Nodes (19): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+11 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "peran.ts"
Cohesion: 0.12
Nodes (22): GET(), DashboardLayout(), dynamic, DashboardPengajuanBaruPage(), dynamic, AdminPermohonan(), DetailPermohonanPage(), dynamic (+14 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.14
Nodes (12): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, DashboardLogPage(), dynamic, DashboardMediaPage() (+4 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.11
Nodes (22): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+14 more)

### Community 41 - "authSlice.ts"
Cohesion: 0.17
Nodes (12): ForgotPasswordPage(), LoginPage(), SessionHydrator(), useAppDispatch(), authSlice, AuthState, checkNikKk, forgotPassword (+4 more)

### Community 42 - "ppid/[...slug]/page.tsx"
Cohesion: 0.13
Nodes (14): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, PpidCampur(), TAB (+6 more)

### Community 44 - "inline-edit.tsx"
Cohesion: 0.07
Nodes (38): clampKolom(), GaleriPage(), GalleryItem, KATEGORI_BAWAAN, KOLOM_PILIHAN, URUTAN, HalamanTambahanClient(), FieldEditor() (+30 more)

### Community 45 - "KIAModal.tsx"
Cohesion: 0.15
Nodes (14): EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile, FormData, JenisBiodataOption (+6 more)

### Community 46 - "tiket/[id]/route.ts"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.12
Nodes (17): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+9 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "permohonan-pdf.ts"
Cohesion: 0.19
Nodes (13): bacaBerkas(), BerkasSiap, buatPermohonanPdf(), BULAN, DataPdf, gambarDokumen(), PermohonanPdfInput, rapikanNilai() (+5 more)

### Community 51 - "halaman/[slug]/page.tsx"
Cohesion: 0.22
Nodes (11): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), JUDUL_MENU_BAWAAN, KUNCI_NAVIGASI, MenuTambahan, navigationItems (+3 more)

### Community 52 - "utils.ts"
Cohesion: 0.17
Nodes (16): StaffPengajuanForm(), Values, useStatusJamLayanan(), OcrUploadButton(), OcrUploadButtonProps, OcrUploadResult, ImageViewer(), useImageViewer() (+8 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.16
Nodes (18): JamLayananEditor(), Toggle(), URUTAN_HARI, formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI (+10 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.19
Nodes (13): fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah() (+5 more)

### Community 55 - "navbar.tsx"
Cohesion: 0.23
Nodes (11): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+3 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "riwayat-list.tsx"
Cohesion: 0.25
Nodes (8): dynamic, UserPengajuanPage(), UraianTolak, Permohonan, RiwayatList(), STATUS_CONFIG, TABS, useInfiniteScroll()

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, highcharts, highcharts-react-official, dependencies, animejs, highcharts, highcharts-react-official, @reduxjs/toolkit (+3 more)

### Community 60 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

### Community 61 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 65 - "[action]/route.ts"
Cohesion: 0.10
Nodes (30): PATCH(), STATUS_VALID, GET(), dynamic, POST(), POST(), POST(), ALLOWED_EXT (+22 more)

### Community 66 - "app/page.tsx"
Cohesion: 0.14
Nodes (12): smoothEase, AlurLayanan(), ease, STEPS, MenuPopuler(), News, QuickHighlights(), tglID() (+4 more)

### Community 67 - "KKCetakUlangModal.tsx"
Cohesion: 0.10
Nodes (28): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, ALASAN_TOLAK, FINAL_STATUS, Item (+20 more)

### Community 69 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "useAppSelector"
Cohesion: 0.23
Nodes (12): FormPageClient(), InlineEditProvider(), isPublicPage(), getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON (+4 more)

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 87 - "users/[id]/route.ts"
Cohesion: 0.24
Nodes (10): dynamic, GET(), PUT(), dynamic, POST(), isAdmin(), DataAkun, MASUK_NIK (+2 more)

### Community 88 - "media/upload/route.ts"
Cohesion: 0.38
Nodes (8): POST(), MEDIA_ALLOWED_IMAGE, MEDIA_ALLOWED_OTHER, MEDIA_MAX_SIZE, MEDIA_STORAGE_ROOT, MEDIA_URL_PREFIX, mediaPublicUrl(), mediaSubdir()

### Community 103 - "permohonan/[id]/route.ts"
Cohesion: 0.23
Nodes (15): GET(), PATCH(), STATUS_VALID, formDariKode(), ALASAN, labelSah(), perluRincian(), pilihanRincian() (+7 more)

### Community 109 - "static-content-registry.ts"
Cohesion: 0.16
Nodes (17): GET(), sections, hubungiKamiContent, ppidContent, produkContent, pusatBantuanContent, blokGaleriPpid(), blokHalamanTambahan() (+9 more)

### Community 115 - "dashboard-charts.tsx"
Cohesion: 0.25
Nodes (9): dasar, Kategori, Layanan, LayananPopulerChart(), PermohonanHarianChart(), ProgressPermohonanChart(), TitikLabel, TrenBulananChart() (+1 more)

### Community 122 - "AktaPerceraianModal.tsx"
Cohesion: 0.25
Nodes (7): AktaPerceraianModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN, FormPermohonanProps, memuat()

### Community 123 - "hooks.ts"
Cohesion: 0.29
Nodes (9): useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore(), RootState (+1 more)

### Community 124 - "ppid-layanan-halaman.tsx"
Cohesion: 0.19
Nodes (8): dynamic, metadata, dynamic, metadata, PpidLayananHalaman(), PpidSeksi, InfoPageContent, LAYANAN_PPID_TABS

### Community 125 - "carousel.tsx"
Cohesion: 0.25
Nodes (6): CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS

### Community 126 - "AdminKonten.tsx"
Cohesion: 0.32
Nodes (6): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic

### Community 127 - "dashboard/galeri/page.tsx"
Cohesion: 0.50
Nodes (3): AdminGaleri(), DashboardGaleriPage(), dynamic

### Community 128 - "navigasi/page.tsx"
Cohesion: 0.50
Nodes (3): DashboardNavigasiPage(), dynamic, metadata

### Community 129 - "admin/jam-layanan/route.ts"
Cohesion: 0.33
Nodes (8): dynamic, GET(), PUT(), dynamic, GET(), JAM_LAYANAN_KEY, sanitizeJamLayanan(), loadJamLayanan()

### Community 130 - "kelola-kartu.tsx"
Cohesion: 0.36
Nodes (7): FormKartu(), simpan(), keSlug(), PpidAksiKartu(), hapus(), simpanDaftar(), DialogFooter()

### Community 131 - "camera-capture.tsx"
Cohesion: 0.47
Nodes (4): FotoProfilCard(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 132 - "baru/page.tsx"
Cohesion: 0.40
Nodes (4): dynamic, metadata, PilihLayananPage(), PilihLayananClient()

### Community 133 - "cn"
Cohesion: 0.13
Nodes (31): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), KIAModal(), KKCetakUlangModal() (+23 more)

### Community 134 - "cek-pendaftaran/route.ts"
Cohesion: 0.67
Nodes (3): dynamic, POST(), samarkanNama()

### Community 135 - "AdminProduk.tsx"
Cohesion: 0.21
Nodes (10): AdminProduk(), GROUPS, Produk, DashboardProdukPage(), dynamic, SelectGroup(), DOKUMEN_KATEGORI, DOKUMEN_KEYS (+2 more)

### Community 136 - "image-upload-field.tsx"
Cohesion: 0.67
Nodes (3): ImageUploadField(), kecilkan(), TIPE_DITERIMA

### Community 137 - "pagination.tsx"
Cohesion: 0.67
Nodes (3): deretHalaman(), OPSI_PER_HALAMAN, Pagination()

## Knowledge Gaps
- **597 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+592 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 705 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `field-editor.tsx`, `PermohonanDetail.tsx`, `baru/page.tsx`, `AktaKelahiranNikTidakAdaModal.tsx`, `pelayanan-visibilitas/route.ts`, `kelola-kartu.tsx`, `image-upload-field.tsx`, `pagination.tsx`, `stats.tsx`, `AktaKelahiranNikAdaModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `informasi-index.tsx`, `PengajuanBaruClient.tsx`, `AdminUsers.tsx`, `PilihLayananClient.tsx`, `AdminDemografi.tsx`, `accessibility-widget.tsx`, `RegisterContent.tsx`, `editable-info-page.tsx`, `button.tsx`, `profile-tabs.tsx`, `dashboard-sidebar.tsx`, `inline-edit.tsx`, `KIAModal.tsx`, `utils.ts`, `jam-layanan.ts`, `navbar.tsx`, `app/page.tsx`, `KKCetakUlangModal.tsx`, `useAppSelector`, `AktaPerceraianModal.tsx`, `ppid-layanan-halaman.tsx`, `AdminKonten.tsx`?**
  _High betweenness centrality (0.136) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `admin/jam-layanan/route.ts`, `users/route.ts`, `navigasi/page.tsx`, `PermohonanDetail.tsx`, `baru/page.tsx`, `pelayanan-visibilitas/route.ts`, `AdminProduk.tsx`, `auth.ts`, `dashboard/tiket/page.tsx`, `informasi-index.tsx`, `footer.tsx`, `AdminPengaduan.tsx`, `PilihLayananClient.tsx`, `AdminDemografi.tsx`, `ktp/route.ts`, `dashboard/page.tsx`, `peran.ts`, `back-button.tsx`, `tiket/[id]/route.ts`, `riwayat-list.tsx`, `skm/page.tsx`, `berita/[id]/route.ts`, `[action]/route.ts`, `dashboard/kritik-saran/page.tsx`, `users/[id]/route.ts`, `media/upload/route.ts`, `permohonan/[id]/route.ts`, `AdminKonten.tsx`, `dashboard/galeri/page.tsx`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Why does `prisma` connect `auth.ts` to `statistik-export.ts`, `admin/jam-layanan/route.ts`, `users/route.ts`, `PermohonanDetail.tsx`, `pelayanan-visibilitas/route.ts`, `cek-pendaftaran/route.ts`, `ok`, `informasi-index.tsx`, `mail-templates.ts`, `AdminDemografi.tsx`, `editable-info-page.tsx`, `dashboard/page.tsx`, `peran.ts`, `ppid/[...slug]/page.tsx`, `tiket/[id]/route.ts`, `halaman/[slug]/page.tsx`, `berita/[id]/route.ts`, `[action]/route.ts`, `users/[id]/route.ts`, `media/upload/route.ts`, `permohonan/[id]/route.ts`, `static-content-registry.ts`, `ppid-layanan-halaman.tsx`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _597 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10512820512820513 - nodes in this community are weakly interconnected._
- **Should `PermohonanDetail.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10695187165775401 - nodes in this community are weakly interconnected._
- **Should `ok` be split into smaller, more focused modules?**
  _Cohesion score 0.09273182957393483 - nodes in this community are weakly interconnected._