# Graph Report - sidako-platform  (2026-09-02)

## Corpus Check
- 345 files · ~231,903 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1836 nodes · 5246 edges · 135 communities (72 shown, 55 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a8bb8a70`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- AdminUsers.tsx
- carousel.tsx
- riwayat/[id]/page.tsx
- admin/demografi/export/route.ts
- devDependencies
- PengajuanBaruClient.tsx
- tiket/[id]/route.ts
- catatAktivitas
- ok
- dialog.tsx
- cn
- AktaKematianModal.tsx
- statistik-kartu-editor.tsx
- profile-tabs.tsx
- input.tsx
- KTPELModal.tsx
- footer.tsx
- ppid-informasi.ts
- compilerOptions
- authSlice.ts
- Journal — SIDAKO (`sidako-platform`)
- struktur-editor.tsx
- send/route.ts
- users/route.ts
- ppid/[...slug]/page.tsx
- AdminKonten.tsx
- kelola-kartu.tsx
- accessibility-widget.tsx
- EditorNavigasi.tsx
- ktp/route.ts
- fail
- RegisterContent.tsx
- static-content-registry.ts
- useAppSelector
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- permohonan/[id]/route.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- formulir-ppid/page.tsx
- ppid-layanan-halaman.tsx
- users/[id]/route.ts
- inline-edit.tsx
- parse/route.ts
- hubungi-kami/page.tsx
- layanan-forms.ts
- scripts
- navbar.tsx
- produk/[...slug]/page.tsx
- galeri-profil.tsx
- notification-bell.tsx
- jam-layanan.ts
- peta-demografi.tsx
- stats.tsx
- CLAUDE.md
- package.json
- produk-disdukcapil-view.tsx
- dependencies
- pusat-bantuan/[...slug]/page.tsx
- AdminPengaduan.tsx
- skm/page.tsx
- berita/[id]/route.ts
- @types/node
- prisma.ts
- react-advanced-cropper
- KIAModal.tsx
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
- utils.ts
- react-day-picker
- react-dropzone
- react-google-recaptcha-v3
- tailwindcss
- react-redux
- react-organizational-chart
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
- sharp
- postcss.config.mjs
- @tailwindcss/postcss
- @types/pdfkit
- typescript
- app/layout.tsx
- app/page.tsx
- buat-opd-uji.ts
- @tailwindcss/typography
- @types/bcryptjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 206 edges
2. `ok()` - 147 edges
3. `getSession()` - 146 edges
4. `fail()` - 137 edges
5. `prisma` - 72 edges
6. `Button()` - 69 edges
7. `Input()` - 55 edges
8. `catatAktivitas()` - 44 edges
9. `Label()` - 41 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `GET()` --calls--> `ok()`  [EXTRACTED]
  app/api/berita/route.ts → lib/api-response.ts
- `GET()` --calls--> `ok()`  [EXTRACTED]
  app/api/jenis-permohonan/route.ts → lib/api-response.ts
- `GET()` --calls--> `ok()`  [EXTRACTED]
  app/api/wilayah/route.ts → lib/api-response.ts
- `DashboardBeritaPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/berita/page.tsx → lib/auth.ts
- `DashboardDemografiPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/demografi/page.tsx → lib/auth.ts

## Import Cycles
- None detected.

## Communities (135 total, 55 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 1 - "AdminUsers.tsx"
Cohesion: 0.06
Nodes (38): dynamic, POST(), CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers() (+30 more)

### Community 2 - "carousel.tsx"
Cohesion: 0.25
Nodes (6): CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS

### Community 3 - "riwayat/[id]/page.tsx"
Cohesion: 0.06
Nodes (46): PermohonanDetail(), dynamic, RiwayatDetailPage(), STATUS_CONFIG, StaffPengajuanForm(), useStatusJamLayanan(), AlasanDitolak(), UraianTolak (+38 more)

### Community 4 - "admin/demografi/export/route.ts"
Cohesion: 0.19
Nodes (13): dynamic, GET(), runtime, dynamic, GET(), runtime, dynamic, GET() (+5 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "PengajuanBaruClient.tsx"
Cohesion: 0.17
Nodes (13): ICONS, Sheet(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle(), SheetTrigger() (+5 more)

### Community 7 - "tiket/[id]/route.ts"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 8 - "catatAktivitas"
Cohesion: 0.11
Nodes (25): DELETE(), dynamic, passwordCocok(), POST(), runtime, DELETE(), GET(), JENIS_VALID (+17 more)

### Community 9 - "ok"
Cohesion: 0.09
Nodes (36): dynamic, GET(), PUT(), dynamic, GET(), dynamic, GET(), PUT() (+28 more)

### Community 10 - "dialog.tsx"
Cohesion: 0.12
Nodes (27): AdminDemografi(), downloadFile(), DemografiMetric(), fmt(), Row, DemografiView(), fmt(), KOLOM_LABEL (+19 more)

### Community 11 - "cn"
Cohesion: 0.08
Nodes (34): EMPTY, FormState, News, Foto, KATEGORI, NotFound(), PengaturanPelayanan(), FieldEditor() (+26 more)

### Community 12 - "AktaKematianModal.tsx"
Cohesion: 0.07
Nodes (50): AktaKematianModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile, AktaPerceraianModalProps, FormData (+42 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.13
Nodes (25): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+17 more)

### Community 14 - "profile-tabs.tsx"
Cohesion: 0.12
Nodes (18): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+10 more)

### Community 15 - "input.tsx"
Cohesion: 0.12
Nodes (26): ProfilInitial, MediaUpload(), AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, FormData, JenisBiodataOption, KKPerubahanBiodataModalProps (+18 more)

### Community 16 - "KTPELModal.tsx"
Cohesion: 0.12
Nodes (28): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), KIAModal(), KKCetakUlangModal() (+20 more)

### Community 17 - "footer.tsx"
Cohesion: 0.11
Nodes (12): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+4 more)

### Community 18 - "ppid-informasi.ts"
Cohesion: 0.13
Nodes (16): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidSubnav(), INFORMASI_PUBLIK_TABS, LAYANAN_PPID_TABS (+8 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "authSlice.ts"
Cohesion: 0.17
Nodes (12): ForgotPasswordPage(), LoginPage(), SessionHydrator(), useAppDispatch(), authSlice, AuthState, checkNikKk, forgotPassword (+4 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.12
Nodes (16): 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO, 8. Permintaan dinas — `Document from S.A.M` (dibaca 8 Agu 2026) (+8 more)

### Community 22 - "struktur-editor.tsx"
Cohesion: 0.11
Nodes (23): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), OrgBox(), IKON_JENIS (+15 more)

### Community 23 - "send/route.ts"
Cohesion: 0.16
Nodes (22): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, fonnteAktif() (+14 more)

### Community 24 - "users/route.ts"
Cohesion: 0.20
Nodes (22): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST(), susunAlasanTolak(), simpanFotoKtp() (+14 more)

### Community 25 - "ppid/[...slug]/page.tsx"
Cohesion: 0.20
Nodes (11): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, PpidCampur(), TAB (+3 more)

### Community 26 - "AdminKonten.tsx"
Cohesion: 0.32
Nodes (6): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic

### Community 27 - "kelola-kartu.tsx"
Cohesion: 0.16
Nodes (16): StatCard(), FormKartu(), simpan(), keSlug(), PpidAksiKartu(), hapus(), PpidTambahKartu(), simpanDaftar() (+8 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.21
Nodes (14): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_INIT_SCRIPT, A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS (+6 more)

### Community 29 - "EditorNavigasi.tsx"
Cohesion: 0.15
Nodes (18): EditorNavigasi(), KOSONG, DashboardNavigasiPage(), dynamic, metadata, cariMenu(), dynamic, generateMetadata() (+10 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "fail"
Cohesion: 0.11
Nodes (21): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, POST(), GET() (+13 more)

### Community 32 - "RegisterContent.tsx"
Cohesion: 0.14
Nodes (16): Kecamatan, namaWilayah, RegisterPage(), ResetPasswordPage(), MenuItem, menuItems, MenuPopuler(), Card() (+8 more)

### Community 33 - "static-content-registry.ts"
Cohesion: 0.20
Nodes (13): GET(), blokGaleriPpid(), blokHalamanTambahan(), blokInfoHalaman(), DKB_PERIODE_KUNCI, getStaticBlock(), getStaticDefaults(), INFO_SECTIONS (+5 more)

### Community 34 - "useAppSelector"
Cohesion: 0.22
Nodes (12): InlineEditProvider(), isPublicPage(), useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch (+4 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "permohonan/[id]/route.ts"
Cohesion: 0.08
Nodes (41): GET(), PATCH(), STATUS_VALID, GET(), DashboardLayout(), dynamic, DashboardPengajuanBaruPage(), dynamic (+33 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.09
Nodes (19): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic (+11 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "formulir-ppid/page.tsx"
Cohesion: 0.22
Nodes (5): dynamic, metadata, dynamic, metadata, PpidLayananHalaman()

### Community 42 - "ppid-layanan-halaman.tsx"
Cohesion: 0.36
Nodes (4): PpidSeksi, EditableInfoPage(), InfoPage(), InfoPageContent

### Community 43 - "users/[id]/route.ts"
Cohesion: 0.19
Nodes (15): DELETE(), dynamic, GET(), DELETE(), dynamic, PUT(), adalahDataUrlGambar(), DIR_KTP (+7 more)

### Community 44 - "inline-edit.tsx"
Cohesion: 0.08
Nodes (31): clampKolom(), GaleriPage(), HalamanTambahanClient(), BlockEditorDialog(), Ctx, EditableBlock(), EditModeToggle(), InlineEditCtx (+23 more)

### Community 45 - "parse/route.ts"
Cohesion: 0.15
Nodes (17): dynamic, maxDuration, POST(), runtime, Conflict, dynamic, maxDuration, POST() (+9 more)

### Community 46 - "hubungi-kami/page.tsx"
Cohesion: 0.28
Nodes (4): INFO, metadata, SurveyKepuasanForm(), SiteConfig

### Community 47 - "layanan-forms.ts"
Cohesion: 0.05
Nodes (46): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient() (+38 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, build, db:generate, db:migrate, db:push, db:seed, db:studio, dev (+6 more)

### Community 49 - "navbar.tsx"
Cohesion: 0.21
Nodes (12): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+4 more)

### Community 50 - "produk/[...slug]/page.tsx"
Cohesion: 0.32
Nodes (6): dynamic, ProdukPage(), DOKUMEN_KATEGORI, DOKUMEN_KEYS, dokumenJenisForPath(), DokumenKategori

### Community 51 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

### Community 52 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 53 - "jam-layanan.ts"
Cohesion: 0.16
Nodes (21): dynamic, GET(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan() (+13 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.16
Nodes (14): metadata, fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA (+6 more)

### Community 55 - "stats.tsx"
Cohesion: 0.11
Nodes (14): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+6 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-dom, react-leaflet, @reduxjs/toolkit (+3 more)

### Community 60 - "pusat-bantuan/[...slug]/page.tsx"
Cohesion: 0.15
Nodes (12): HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), PosterIkd(), WbsForm(), hubungiKamiContent, ppidContent (+4 more)

### Community 61 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 65 - "prisma.ts"
Cohesion: 0.10
Nodes (36): PATCH(), STATUS_VALID, GET(), dynamic, POST(), POST(), POST(), POST() (+28 more)

### Community 67 - "KIAModal.tsx"
Cohesion: 0.07
Nodes (38): AKSI_STYLE, LogItem, Petugas, ALASAN_TOLAK, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+30 more)

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

### Community 103 - "utils.ts"
Cohesion: 0.11
Nodes (26): JamLayananEditor(), Toggle(), URUTAN_HARI, Values, AktaKelahiranNikAdaModalProps, FormData, UploadedFile, norm() (+18 more)

### Community 164 - "app/layout.tsx"
Cohesion: 0.22
Nodes (7): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing()

### Community 166 - "app/page.tsx"
Cohesion: 0.15
Nodes (11): smoothEase, AlurLayanan(), ease, STEPS, News, QuickHighlights(), tglID(), RelasiTerkait() (+3 more)

## Knowledge Gaps
- **582 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime`, `dynamic` (+577 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 686 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **55 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `riwayat/[id]/page.tsx`, `PengajuanBaruClient.tsx`, `dialog.tsx`, `AktaKematianModal.tsx`, `statistik-kartu-editor.tsx`, `profile-tabs.tsx`, `input.tsx`, `KTPELModal.tsx`, `ppid-informasi.ts`, `struktur-editor.tsx`, `AdminKonten.tsx`, `kelola-kartu.tsx`, `accessibility-widget.tsx`, `RegisterContent.tsx`, `permohonan/[id]/route.ts`, `back-button.tsx`, `dashboard-sidebar.tsx`, `formulir-ppid/page.tsx`, `ppid-layanan-halaman.tsx`, `inline-edit.tsx`, `layanan-forms.ts`, `navbar.tsx`, `notification-bell.tsx`, `jam-layanan.ts`, `stats.tsx`, `produk-disdukcapil-view.tsx`, `KIAModal.tsx`, `utils.ts`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `AdminUsers.tsx`, `riwayat/[id]/page.tsx`, `admin/demografi/export/route.ts`, `tiket/[id]/route.ts`, `catatAktivitas`, `footer.tsx`, `ppid-informasi.ts`, `users/route.ts`, `AdminKonten.tsx`, `kelola-kartu.tsx`, `EditorNavigasi.tsx`, `ktp/route.ts`, `fail`, `permohonan/[id]/route.ts`, `back-button.tsx`, `users/[id]/route.ts`, `parse/route.ts`, `layanan-forms.ts`, `AdminPengaduan.tsx`, `skm/page.tsx`, `berita/[id]/route.ts`, `prisma.ts`, `dashboard/kritik-saran/page.tsx`, `produk/page.tsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `statistik-export.ts`, `AdminUsers.tsx`, `riwayat/[id]/page.tsx`, `admin/demografi/export/route.ts`, `tiket/[id]/route.ts`, `catatAktivitas`, `ok`, `statistik-kartu-editor.tsx`, `users/route.ts`, `ppid/[...slug]/page.tsx`, `kelola-kartu.tsx`, `EditorNavigasi.tsx`, `fail`, `static-content-registry.ts`, `permohonan/[id]/route.ts`, `ppid-layanan-halaman.tsx`, `users/[id]/route.ts`, `parse/route.ts`, `produk/[...slug]/page.tsx`, `jam-layanan.ts`, `berita/[id]/route.ts`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _582 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `AdminUsers.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06184012066365008 - nodes in this community are weakly interconnected._
- **Should `riwayat/[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06079664570230608 - nodes in this community are weakly interconnected._