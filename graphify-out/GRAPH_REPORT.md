# Graph Report - sidako-platform  (2026-09-04)

## Corpus Check
- 348 files · ~236,282 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1859 nodes · 5321 edges · 138 communities (77 shown, 53 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1e7e979e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- akun-status.ts
- button.tsx
- PermohonanDetail.tsx
- KIAModal.tsx
- devDependencies
- PengajuanBaruClient.tsx
- react-advanced-cropper
- auth.ts
- getSession
- dialog.tsx
- utils.ts
- AktaKematianModal.tsx
- statistik-kartu-editor.tsx
- struktur-editor.tsx
- ok
- cn
- footer.tsx
- informasi-index.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- [action]/route.ts
- send/route.ts
- users/route.ts
- galeri-profil.tsx
- [layanan]/page.tsx
- demografi-kategori.ts
- accessibility-widget.tsx
- halaman/[slug]/page.tsx
- ktp/route.ts
- ppid/[...slug]/page.tsx
- LoginContent.tsx
- syarat-ketentuan-view.tsx
- useAppSelector
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- permohonan/[id]/route.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- authSlice.ts
- formulir-ppid/page.tsx
- react-organizational-chart
- inline-edit.tsx
- parse/route.ts
- uji-visibilitas.ts
- layanan-forms.ts
- scripts
- navbar.tsx
- sharp
- PilihLayananClient.tsx
- notification-bell.tsx
- jam-layanan.ts
- peta-demografi.tsx
- stats.tsx
- CLAUDE.md
- package.json
- AktaKelahiranNikAdaModal.tsx
- dependencies
- static-content-registry.ts
- AdminPengaduan.tsx
- SkmDashboard.tsx
- berita/[id]/route.ts
- @types/node
- prisma.ts
- app/page.tsx
- staff-pengajuan-form.tsx
- eslint-config-next
- dashboard/kritik-saran/page.tsx
- SIDAKO Platform
- prisma
- produk/page.tsx
- puppeteer-core
- eslint.config.mjs
- seed-berita.ts
- seed.ts
- class-variance-authority
- clsx
- date-fns
- exceljs
- framer-motion
- highcharts
- highcharts-react-official
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
- react-day-picker
- react-dropzone
- react-google-recaptcha-v3
- tailwindcss
- react-redux
- kelola-kartu.tsx
- sonner
- tailwind-merge
- tesseract.js
- @tiptap/extension-image
- @tiptap/extension-link
- @tiptap/extension-text-align
- @tiptap/extension-underline
- @tiptap/extensions
- @tiptap/pm
- @tiptap/react
- @tiptap/starter-kit
- @types/leaflet
- RegisterContent.tsx
- baru/page.tsx
- navigasi/page.tsx
- gis/page.tsx
- media/page.tsx
- dashboard/berita/page.tsx
- StaffPengajuanForm
- postcss.config.mjs
- @tailwindcss/postcss
- @types/pdfkit
- typescript
- app/layout.tsx
- @tailwindcss/typography
- @types/bcryptjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 206 edges
2. `ok()` - 150 edges
3. `getSession()` - 149 edges
4. `fail()` - 140 edges
5. `prisma` - 73 edges
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

## Communities (138 total, 53 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 1 - "akun-status.ts"
Cohesion: 0.25
Nodes (8): dynamic, POST(), POST(), INFO_STATUS, pesanLoginStatus(), STATUS_AKUN, StatusAkun, createSession()

### Community 2 - "button.tsx"
Cohesion: 0.10
Nodes (31): EMPTY, FormState, News, Foto, KATEGORI, KOSONG, GalleryItem, KATEGORI_BAWAAN (+23 more)

### Community 3 - "PermohonanDetail.tsx"
Cohesion: 0.05
Nodes (57): Detail, FINAL, PermohonanDetail(), STATUS, dynamic, RiwayatDetailPage(), STATUS_CONFIG, AlasanDitolak() (+49 more)

### Community 4 - "KIAModal.tsx"
Cohesion: 0.14
Nodes (17): JamLayananEditor(), Toggle(), URUTAN_HARI, EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS (+9 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "PengajuanBaruClient.tsx"
Cohesion: 0.18
Nodes (13): ICONS, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+5 more)

### Community 8 - "auth.ts"
Cohesion: 0.08
Nodes (35): dynamic, maxDuration, POST(), runtime, DELETE(), dynamic, passwordCocok(), POST() (+27 more)

### Community 9 - "getSession"
Cohesion: 0.09
Nodes (42): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, dynamic, GET() (+34 more)

### Community 10 - "dialog.tsx"
Cohesion: 0.15
Nodes (19): AdminDemografi(), downloadFile(), DemografiMetric(), fmt(), Row, DemografiView(), fmt(), KOLOM_LABEL (+11 more)

### Community 11 - "utils.ts"
Cohesion: 0.18
Nodes (9): NotFound(), FormData, JenisBiodataOption, KKPerubahanBiodataModalProps, UploadedFile, deretHalaman(), OPSI_PER_HALAMAN, Pagination() (+1 more)

### Community 12 - "AktaKematianModal.tsx"
Cohesion: 0.07
Nodes (60): AktaKematianModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile, AktaPerceraianModalProps, FormData (+52 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.12
Nodes (26): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+18 more)

### Community 14 - "struktur-editor.tsx"
Cohesion: 0.06
Nodes (41): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), BulletItem(), CONTENT (+33 more)

### Community 15 - "ok"
Cohesion: 0.09
Nodes (23): POST(), POST(), GET(), GET(), GET(), dynamic, POST(), samarkanNama() (+15 more)

### Community 16 - "cn"
Cohesion: 0.09
Nodes (41): FieldEditor(), IconColumnInput(), ImageColumnInput(), AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal() (+33 more)

### Community 17 - "footer.tsx"
Cohesion: 0.11
Nodes (13): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, metadata, dynamic (+5 more)

### Community 18 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (20): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+12 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.05
Nodes (44): CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers(), DetailUser, EMPTY_FORM (+36 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.09
Nodes (21): 10. Sembilan poin rapat — SELESAI 2 Sep 2026, 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO (+13 more)

### Community 22 - "[action]/route.ts"
Cohesion: 0.16
Nodes (17): dynamic, GET(), PUT(), dynamic, GET(), ALLOWED_EXT, FETCH_ACTIONS, POST() (+9 more)

### Community 23 - "send/route.ts"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 24 - "users/route.ts"
Cohesion: 0.11
Nodes (38): PATCH(), DELETE(), GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST() (+30 more)

### Community 25 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

### Community 26 - "[layanan]/page.tsx"
Cohesion: 0.23
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "demografi-kategori.ts"
Cohesion: 0.19
Nodes (15): dynamic, GET(), runtime, dynamic, GET(), runtime, DemografiKategoriPage(), addSheet() (+7 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "halaman/[slug]/page.tsx"
Cohesion: 0.13
Nodes (18): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, cariMenu(), dynamic (+10 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "ppid/[...slug]/page.tsx"
Cohesion: 0.11
Nodes (18): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, dynamic, ProdukPage() (+10 more)

### Community 32 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): ResetPasswordPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 33 - "syarat-ketentuan-view.tsx"
Cohesion: 0.21
Nodes (8): BAGIAN, Data, SyaratKetentuanView(), SyaratLayananTabs(), KasusLayanan, LayananSyarat, SYARAT_KATEGORI, SYARAT_LAYANAN

### Community 34 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "permohonan/[id]/route.ts"
Cohesion: 0.08
Nodes (36): GET(), STATUS_VALID, GET(), dynamic, GET(), PUT(), dynamic, POST() (+28 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.12
Nodes (14): DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic, DashboardLogPage(), dynamic, DashboardPengaduanPage() (+6 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "authSlice.ts"
Cohesion: 0.17
Nodes (12): ForgotPasswordPage(), LoginPage(), SessionHydrator(), useAppDispatch(), authSlice, AuthState, checkNikKk, forgotPassword (+4 more)

### Community 42 - "formulir-ppid/page.tsx"
Cohesion: 0.22
Nodes (5): dynamic, metadata, dynamic, metadata, PpidLayananHalaman()

### Community 44 - "inline-edit.tsx"
Cohesion: 0.09
Nodes (31): clampKolom(), GaleriPage(), HalamanTambahanClient(), BlockEditorDialog(), Ctx, EditableBlock(), EditModeToggle(), InlineEditCtx (+23 more)

### Community 45 - "parse/route.ts"
Cohesion: 0.20
Nodes (13): Conflict, dynamic, maxDuration, POST(), runtime, sig(), Variant, cellNum() (+5 more)

### Community 46 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 47 - "layanan-forms.ts"
Cohesion: 0.11
Nodes (19): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+11 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "navbar.tsx"
Cohesion: 0.21
Nodes (12): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+4 more)

### Community 51 - "PilihLayananClient.tsx"
Cohesion: 0.18
Nodes (13): PengajuanBaruClient(), PilihLayananClient(), PengaturanPelayanan(), KATEGORI_SLUG, kategoriSlug(), WARNA_KATEGORI, WARNA_MATI, WARNA_NETRAL (+5 more)

### Community 52 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 53 - "jam-layanan.ts"
Cohesion: 0.20
Nodes (14): formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan(), HARI_LABEL, JAM_TIMEZONE (+6 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "stats.tsx"
Cohesion: 0.11
Nodes (14): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+6 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "AktaKelahiranNikAdaModal.tsx"
Cohesion: 0.16
Nodes (13): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, HOURS, isJam() (+5 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-dom, react-leaflet, @reduxjs/toolkit (+3 more)

### Community 60 - "static-content-registry.ts"
Cohesion: 0.13
Nodes (20): HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), PpidSeksi, EditableInfoPage(), InfoPageContent, PosterIkd() (+12 more)

### Community 61 - "AdminPengaduan.tsx"
Cohesion: 0.40
Nodes (4): AdminPengaduan(), FILTERS, Item, pisahBukti()

### Community 62 - "SkmDashboard.tsx"
Cohesion: 0.40
Nodes (5): AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 65 - "prisma.ts"
Cohesion: 0.11
Nodes (23): PATCH(), STATUS_VALID, GET(), dynamic, POST(), POST(), POST(), POST() (+15 more)

### Community 66 - "app/page.tsx"
Cohesion: 0.08
Nodes (21): smoothEase, AlurLayanan(), ease, STEPS, CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps (+13 more)

### Community 67 - "staff-pengajuan-form.tsx"
Cohesion: 0.13
Nodes (23): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, ALASAN_TOLAK, FINAL_STATUS, Item (+15 more)

### Community 69 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 70 - "SIDAKO Platform"
Cohesion: 0.29
Nodes (6): Akun demo (setelah seed), Deploy ke cPanel (ringkas), Menjalankan (lokal), SIDAKO Platform, Status migrasi, Struktur

### Community 72 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

### Community 109 - "kelola-kartu.tsx"
Cohesion: 0.26
Nodes (10): StatCard(), FormKartu(), simpan(), keSlug(), PpidAksiKartu(), hapus(), simpanDaftar(), getIcon() (+2 more)

### Community 122 - "RegisterContent.tsx"
Cohesion: 0.22
Nodes (4): Kecamatan, namaWilayah, RegisterPage(), registerUser

### Community 123 - "baru/page.tsx"
Cohesion: 0.50
Nodes (3): dynamic, metadata, PilihLayananPage()

### Community 128 - "navigasi/page.tsx"
Cohesion: 0.29
Nodes (6): EditorNavigasi(), DashboardNavigasiPage(), dynamic, metadata, buatSlug(), hrefTambahan()

### Community 130 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 131 - "media/page.tsx"
Cohesion: 0.40
Nodes (4): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic

### Community 132 - "dashboard/berita/page.tsx"
Cohesion: 0.50
Nodes (3): AdminBerita(), DashboardBeritaPage(), dynamic

### Community 133 - "StaffPengajuanForm"
Cohesion: 0.67
Nodes (3): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer()

### Community 164 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

## Knowledge Gaps
- **591 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+586 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 697 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `button.tsx`, `KIAModal.tsx`, `StaffPengajuanForm`, `PengajuanBaruClient.tsx`, `dialog.tsx`, `utils.ts`, `AktaKematianModal.tsx`, `statistik-kartu-editor.tsx`, `struktur-editor.tsx`, `informasi-index.tsx`, `AdminUsers.tsx`, `accessibility-widget.tsx`, `halaman/[slug]/page.tsx`, `LoginContent.tsx`, `dashboard-sidebar.tsx`, `formulir-ppid/page.tsx`, `inline-edit.tsx`, `navbar.tsx`, `PilihLayananClient.tsx`, `notification-bell.tsx`, `jam-layanan.ts`, `stats.tsx`, `AktaKelahiranNikAdaModal.tsx`, `static-content-registry.ts`, `staff-pengajuan-form.tsx`, `kelola-kartu.tsx`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `statistik-export.ts`, `navigasi/page.tsx`, `media/page.tsx`, `dashboard/berita/page.tsx`, `PermohonanDetail.tsx`, `auth.ts`, `ok`, `footer.tsx`, `informasi-index.tsx`, `AdminUsers.tsx`, `[action]/route.ts`, `users/route.ts`, `[layanan]/page.tsx`, `demografi-kategori.ts`, `halaman/[slug]/page.tsx`, `ktp/route.ts`, `permohonan/[id]/route.ts`, `back-button.tsx`, `parse/route.ts`, `berita/[id]/route.ts`, `prisma.ts`, `dashboard/kritik-saran/page.tsx`, `produk/page.tsx`, `baru/page.tsx`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `statistik-export.ts`, `akun-status.ts`, `PermohonanDetail.tsx`, `permohonan/[id]/route.ts`, `auth.ts`, `getSession`, `parse/route.ts`, `statistik-kartu-editor.tsx`, `ok`, `static-content-registry.ts`, `informasi-index.tsx`, `AdminUsers.tsx`, `[action]/route.ts`, `users/route.ts`, `demografi-kategori.ts`, `ppid/[...slug]/page.tsx`, `halaman/[slug]/page.tsx`, `berita/[id]/route.ts`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _591 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `button.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09740259740259741 - nodes in this community are weakly interconnected._
- **Should `PermohonanDetail.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.051106639839034206 - nodes in this community are weakly interconnected._