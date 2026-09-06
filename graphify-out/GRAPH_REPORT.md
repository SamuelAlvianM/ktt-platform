# Graph Report - sidako-platform  (2026-09-07)

## Corpus Check
- 356 files · ~251,056 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1931 nodes · 5651 edges · 136 communities (76 shown, 52 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ee2ce1c9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- AdminDemografi.tsx
- [jenis]/route.ts
- PermohonanDetail.tsx
- baru/page.tsx
- devDependencies
- pelayanan-list.ts
- react-advanced-cropper
- catatAktivitas
- media/upload/route.ts
- inline-edit.tsx
- stats.tsx
- AktaKelahiranNikTidakAdaModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- demografi-registri.ts
- kelola-kartu.tsx
- footer.tsx
- PengajuanBaruClient.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- dashboard/pengaduan/page.tsx
- send/route.ts
- fail
- users/route.ts
- PilihLayananClient.tsx
- admin/demografi/route.ts
- accessibility-widget.tsx
- LoginContent.tsx
- ktp/route.ts
- static-content-registry.ts
- button.tsx
- utils.ts
- profile-tabs.tsx
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- permohonan/[id]/route.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- dashboard/galeri/page.tsx
- galeri-profil.tsx
- react-organizational-chart
- useStaticContent
- KIAModal.tsx
- getSession
- layanan-forms.ts
- scripts
- RegisterContent.tsx
- sharp
- halaman/[slug]/page.tsx
- AktaKematianModal.tsx
- jam-layanan.ts
- peta-demografi.tsx
- parse/route.ts
- CLAUDE.md
- package.json
- akun-status.ts
- dependencies
- app/layout.tsx
- uji-visibilitas.ts
- skm/page.tsx
- authSlice.ts
- @types/node
- ok
- AdminKonten.tsx
- staff-pengajuan-form.tsx
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
- users/[id]/route.ts
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
- uji-periode.ts
- bcryptjs
- react-dropzone
- react-dom
- tailwindcss
- react-redux
- admin/skm/route.ts
- sonner
- tailwind-merge
- tesseract.js
- @tiptap/extension-image
- @tiptap/extension-link
- @tiptap/extension-underline
- react-leaflet
- @tiptap/pm
- @tiptap/react
- @tiptap/starter-kit
- @types/leaflet
- useAppSelector
- carousel.tsx
- navigasi/page.tsx
- cn
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

## Communities (136 total, 52 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 1 - "AdminDemografi.tsx"
Cohesion: 0.15
Nodes (28): AdminDemografi(), BerkasAsing, downloadFile(), HitunganPeriode, KategoriAdmin, usulJudul(), DemografiView(), fmt() (+20 more)

### Community 2 - "[jenis]/route.ts"
Cohesion: 0.40
Nodes (4): GET(), demografiData, DemografiDataset, TODO: ganti dengan query Prisma nyata setelah model demografi tersedia.

### Community 3 - "PermohonanDetail.tsx"
Cohesion: 0.06
Nodes (47): Detail, FINAL, PermohonanDetail(), STATUS, dynamic, RiwayatDetailPage(), STATUS_CONFIG, PilihRincian() (+39 more)

### Community 4 - "baru/page.tsx"
Cohesion: 0.40
Nodes (4): dynamic, metadata, PilihLayananPage(), PilihLayananClient()

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "pelayanan-list.ts"
Cohesion: 0.36
Nodes (6): PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem, slugTersembunyi(), layananTersembunyi()

### Community 8 - "catatAktivitas"
Cohesion: 0.08
Nodes (34): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+26 more)

### Community 9 - "media/upload/route.ts"
Cohesion: 0.30
Nodes (9): DELETE(), POST(), MEDIA_ALLOWED_IMAGE, MEDIA_ALLOWED_OTHER, MEDIA_MAX_SIZE, MEDIA_STORAGE_ROOT, MEDIA_URL_PREFIX, mediaPublicUrl() (+1 more)

### Community 10 - "inline-edit.tsx"
Cohesion: 0.12
Nodes (23): AdminMedia(), fmtSize(), Ctx, EditModeToggle(), InlineEditCtx, InlineEditProvider(), isPublicPage(), DemografiMetric() (+15 more)

### Community 11 - "stats.tsx"
Cohesion: 0.10
Nodes (15): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+7 more)

### Community 12 - "AktaKelahiranNikTidakAdaModal.tsx"
Cohesion: 0.07
Nodes (59): AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN (+51 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.10
Nodes (34): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+26 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.11
Nodes (23): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+15 more)

### Community 15 - "demografi-registri.ts"
Cohesion: 0.15
Nodes (22): DELETE(), dynamic, POST(), PUT(), dynamic, GET(), DemografiKategoriPage(), dynamic (+14 more)

### Community 16 - "kelola-kartu.tsx"
Cohesion: 0.08
Nodes (30): dynamic, metadata, dynamic, metadata, dynamic, ProdukPage(), PpidInformasiIndex(), FormKartu() (+22 more)

### Community 17 - "footer.tsx"
Cohesion: 0.10
Nodes (14): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+6 more)

### Community 18 - "PengajuanBaruClient.tsx"
Cohesion: 0.18
Nodes (14): ICONS, SheetDescription(), SheetHeader(), Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger() (+6 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.06
Nodes (32): CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers(), DetailUser, EMPTY_FORM (+24 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "dashboard/pengaduan/page.tsx"
Cohesion: 0.40
Nodes (4): AdminPengaduan(), pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 23 - "send/route.ts"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 24 - "fail"
Cohesion: 0.14
Nodes (28): PATCH(), STATUS_VALID, dynamic, POST(), POST(), GET(), POST(), ALLOWED_EXT (+20 more)

### Community 25 - "users/route.ts"
Cohesion: 0.20
Nodes (22): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST(), susunAlasanTolak(), simpanFotoKtp() (+14 more)

### Community 26 - "PilihLayananClient.tsx"
Cohesion: 0.24
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "admin/demografi/route.ts"
Cohesion: 0.17
Nodes (24): dynamic, GET(), runtime, cekPetugas(), DELETE(), dynamic, GET(), periodeDariBadan() (+16 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): LoginPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "static-content-registry.ts"
Cohesion: 0.08
Nodes (32): HubungiKamiPage(), dynamic, metadata, dynamic, metadata, PusatBantuanPage(), sections, WbsPage() (+24 more)

### Community 32 - "button.tsx"
Cohesion: 0.13
Nodes (20): Foto, KATEGORI, FILTERS, Item, ProfilInitial, AktaKelahiranNikAdaModalProps, FormData, UploadedFile (+12 more)

### Community 33 - "utils.ts"
Cohesion: 0.14
Nodes (14): EMPTY, FormState, News, ImagePickerFieldProps, MediaPicker(), FormData, JenisBiodataOption, KKPerubahanBiodataModalProps (+6 more)

### Community 34 - "profile-tabs.tsx"
Cohesion: 0.07
Nodes (26): smoothEase, AlurLayanan(), ease, STEPS, BulletItem(), CONTENT, easeCustom, fadeUp() (+18 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "permohonan/[id]/route.ts"
Cohesion: 0.08
Nodes (39): GET(), GET(), GET(), PATCH(), STATUS_VALID, GET(), DashboardLayout(), dynamic (+31 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.10
Nodes (15): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, DashboardLogPage(), dynamic, DashboardMediaPage() (+7 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.11
Nodes (22): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+14 more)

### Community 41 - "dashboard/galeri/page.tsx"
Cohesion: 0.50
Nodes (3): AdminGaleri(), DashboardGaleriPage(), dynamic

### Community 42 - "galeri-profil.tsx"
Cohesion: 0.07
Nodes (34): clampKolom(), GaleriPage(), bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS (+26 more)

### Community 44 - "useStaticContent"
Cohesion: 0.10
Nodes (21): HalamanTambahanClient(), EditableBlock(), ease, HeroSection(), QUICK_ACTIONS, TRUST_BADGES, FaqItem, FaqList() (+13 more)

### Community 45 - "KIAModal.tsx"
Cohesion: 0.10
Nodes (31): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), EMPTY_FORM, FILE_FIELDS (+23 more)

### Community 46 - "getSession"
Cohesion: 0.11
Nodes (25): dynamic, GET(), PUT(), GET(), GET(), PATCH(), dynamic, GET() (+17 more)

### Community 47 - "layanan-forms.ts"
Cohesion: 0.12
Nodes (17): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+9 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "RegisterContent.tsx"
Cohesion: 0.22
Nodes (4): Kecamatan, namaWilayah, RegisterPage(), registerUser

### Community 51 - "halaman/[slug]/page.tsx"
Cohesion: 0.22
Nodes (11): EditorNavigasi(), cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), buatSlug(), hrefTambahan(), JUDUL_MENU_BAWAAN (+3 more)

### Community 52 - "AktaKematianModal.tsx"
Cohesion: 0.10
Nodes (27): JamLayananEditor(), Toggle(), URUTAN_HARI, AktaKematianModalProps, FormData, UploadedFile, norm(), SearchSelect() (+19 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.16
Nodes (20): dynamic, GET(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan() (+12 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.19
Nodes (13): fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah() (+5 more)

### Community 55 - "parse/route.ts"
Cohesion: 0.13
Nodes (20): Conflict, dynamic, maxDuration, periodeDariForm(), POST(), runtime, sig(), Variant (+12 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "akun-status.ts"
Cohesion: 0.43
Nodes (5): POST(), INFO_STATUS, pesanLoginStatus(), StatusAkun, createSession()

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

### Community 63 - "authSlice.ts"
Cohesion: 0.17
Nodes (12): ForgotPasswordPage(), SessionHydrator(), ResetPasswordPage(), useAppDispatch(), authSlice, AuthState, checkNikKk, forgotPassword (+4 more)

### Community 65 - "ok"
Cohesion: 0.08
Nodes (35): dynamic, dynamic, GET(), dynamic, POST(), POST(), POST(), POST() (+27 more)

### Community 66 - "AdminKonten.tsx"
Cohesion: 0.21
Nodes (10): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, navigationItems, NavMenu (+2 more)

### Community 67 - "staff-pengajuan-form.tsx"
Cohesion: 0.10
Nodes (32): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, KOSONG, ALASAN_TOLAK, FINAL_STATUS (+24 more)

### Community 69 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "navbar.tsx"
Cohesion: 0.15
Nodes (18): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+10 more)

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 87 - "users/[id]/route.ts"
Cohesion: 0.10
Nodes (25): DELETE(), dynamic, GET(), PUT(), dynamic, POST(), DELETE(), dynamic (+17 more)

### Community 103 - "uji-periode.ts"
Cohesion: 0.36
Nodes (9): periodeDariForm(), semesterSah(), tahunSah(), bersihkan(), cek(), main(), prisma, sama() (+1 more)

### Community 109 - "admin/skm/route.ts"
Cohesion: 0.60
Nodes (3): GET(), SKM_ASPEK, SKM_SKALA_MAX

### Community 123 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

### Community 125 - "carousel.tsx"
Cohesion: 0.25
Nodes (6): CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS

### Community 128 - "navigasi/page.tsx"
Cohesion: 0.50
Nodes (3): DashboardNavigasiPage(), dynamic, metadata

### Community 133 - "cn"
Cohesion: 0.10
Nodes (25): NotFound(), PengaturanPelayanan(), FieldEditor(), IconColumnInput(), ImageColumnInput(), ImageUploadField(), kecilkan(), TIPE_DITERIMA (+17 more)

### Community 135 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

## Knowledge Gaps
- **601 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+596 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 709 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminDemografi.tsx`, `PermohonanDetail.tsx`, `baru/page.tsx`, `inline-edit.tsx`, `stats.tsx`, `AktaKelahiranNikTidakAdaModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `kelola-kartu.tsx`, `footer.tsx`, `PengajuanBaruClient.tsx`, `PilihLayananClient.tsx`, `accessibility-widget.tsx`, `LoginContent.tsx`, `static-content-registry.ts`, `button.tsx`, `utils.ts`, `profile-tabs.tsx`, `permohonan/[id]/route.ts`, `dashboard-sidebar.tsx`, `galeri-profil.tsx`, `useStaticContent`, `KIAModal.tsx`, `AktaKematianModal.tsx`, `jam-layanan.ts`, `AdminKonten.tsx`, `staff-pengajuan-form.tsx`, `navbar.tsx`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `statistik-export.ts`, `navigasi/page.tsx`, `PermohonanDetail.tsx`, `baru/page.tsx`, `produk/page.tsx`, `catatAktivitas`, `media/upload/route.ts`, `demografi-registri.ts`, `kelola-kartu.tsx`, `footer.tsx`, `AdminUsers.tsx`, `dashboard/pengaduan/page.tsx`, `fail`, `users/route.ts`, `PilihLayananClient.tsx`, `admin/demografi/route.ts`, `ktp/route.ts`, `permohonan/[id]/route.ts`, `back-button.tsx`, `dashboard/galeri/page.tsx`, `parse/route.ts`, `skm/page.tsx`, `ok`, `AdminKonten.tsx`, `dashboard/kritik-saran/page.tsx`, `users/[id]/route.ts`, `admin/skm/route.ts`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Why does `prisma` connect `ok` to `statistik-export.ts`, `PermohonanDetail.tsx`, `pelayanan-list.ts`, `catatAktivitas`, `media/upload/route.ts`, `statistik-kartu-editor.tsx`, `demografi-registri.ts`, `kelola-kartu.tsx`, `AdminUsers.tsx`, `fail`, `users/route.ts`, `admin/demografi/route.ts`, `static-content-registry.ts`, `permohonan/[id]/route.ts`, `back-button.tsx`, `galeri-profil.tsx`, `getSession`, `halaman/[slug]/page.tsx`, `jam-layanan.ts`, `parse/route.ts`, `akun-status.ts`, `users/[id]/route.ts`, `admin/skm/route.ts`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _601 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `PermohonanDetail.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.060496067755595885 - nodes in this community are weakly interconnected._
- **Should `catatAktivitas` be split into smaller, more focused modules?**
  _Cohesion score 0.08013937282229965 - nodes in this community are weakly interconnected._