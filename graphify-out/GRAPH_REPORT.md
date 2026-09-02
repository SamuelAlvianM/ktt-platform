# Graph Report - sidako-platform  (2026-09-02)

## Corpus Check
- 347 files · ~234,894 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1846 nodes · 5299 edges · 138 communities (78 shown, 53 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7f474270`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- CekStatusClient.tsx
- input.tsx
- riwayat/[id]/page.tsx
- utils.ts
- devDependencies
- PengajuanBaruClient.tsx
- dashboard/page.tsx
- catatAktivitas
- ok
- inline-edit.tsx
- cn
- AktaKelahiranNikAdaModal.tsx
- statistik-kartu-editor.tsx
- profile-tabs.tsx
- label.tsx
- AktaKematianModal.tsx
- footer.tsx
- informasi-index.tsx
- compilerOptions
- AdminUsers.tsx
- Journal — SIDAKO (`sidako-platform`)
- struktur-editor.tsx
- send/route.ts
- users/route.ts
- ppid/[...slug]/page.tsx
- PilihLayananClient.tsx
- demografi-view.tsx
- accessibility-widget.tsx
- EditorNavigasi.tsx
- ktp/route.ts
- syarat-ketentuan-view.tsx
- RegisterContent.tsx
- static-content-registry.ts
- useAppSelector
- 1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN
- auth.ts
- components.json
- Yang Harus Dibuat
- back-button.tsx
- dashboard-sidebar.tsx
- profil/page.tsx
- ppid-layanan-halaman.tsx
- users/[id]/route.ts
- galeri-profil.tsx
- parse/route.ts
- uji-visibilitas.ts
- layanan-forms.ts
- scripts
- navbar.tsx
- produk/[...slug]/page.tsx
- pengaturan-pelayanan.tsx
- notification-bell.tsx
- jam-layanan.ts
- peta-demografi.tsx
- stats.tsx
- CLAUDE.md
- package.json
- time-picker.tsx
- dependencies
- pusat-bantuan/[...slug]/page.tsx
- AdminPengaduan.tsx
- skm/page.tsx
- berita/[id]/route.ts
- @types/node
- prisma.ts
- relasi-terkait.tsx
- AktaNikahModal.tsx
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
- pilih-rincian.tsx
- react-day-picker
- react-dropzone
- react-google-recaptcha-v3
- tailwindcss
- react-redux
- KIAModal.tsx
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
- admin/skm/route.ts
- baru/page.tsx
- image-upload-field.tsx
- react-dom
- react-leaflet
- @reduxjs/toolkit
- postcss.config.mjs
- @tailwindcss/postcss
- @types/pdfkit
- typescript
- app/layout.tsx
- app/page.tsx
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
- `DashboardUsersPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/users/page.tsx → lib/auth.ts
- `ProfilPage()` --calls--> `getSession()`  [EXTRACTED]
  app/profil/page.tsx → lib/auth.ts
- `Toggle()` --calls--> `cn()`  [EXTRACTED]
  components/dashboard/jam-layanan-editor.tsx → lib/utils.ts
- `ScrollColumn()` --calls--> `cn()`  [EXTRACTED]
  components/ui/time-picker.tsx → lib/utils.ts
- `TileButton()` --calls--> `cn()`  [EXTRACTED]
  components/shared/accessibility-widget.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (138 total, 53 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.10
Nodes (39): dynamic, GET(), runtime, BAGIAN_STATISTIK, BagianStatistik, bagianValid(), barisBernomor(), buatWorkbookStatistik() (+31 more)

### Community 1 - "CekStatusClient.tsx"
Cohesion: 0.16
Nodes (13): CekStatusClient(), Hasil, IKON, metadata, fmtTanggal(), IsiDetail(), infoStatus, KEY_BY_LABEL (+5 more)

### Community 2 - "input.tsx"
Cohesion: 0.11
Nodes (16): EMPTY, FormState, News, Foto, KATEGORI, AdminMedia(), fmtSize(), ImagePickerField() (+8 more)

### Community 3 - "riwayat/[id]/page.tsx"
Cohesion: 0.07
Nodes (41): PermohonanDetail(), dynamic, RiwayatDetailPage(), STATUS_CONFIG, AlasanDitolak(), UraianTolak, BerkasGallery(), BerkasView (+33 more)

### Community 4 - "utils.ts"
Cohesion: 0.16
Nodes (18): Values, FormData, KKTambahAnakModalProps, UploadedFile, OcrUploadButton(), OcrUploadButtonProps, OcrUploadResult, CheckStatus (+10 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/nodemailer, @types/react, @types/react-dom (+5 more)

### Community 6 - "PengajuanBaruClient.tsx"
Cohesion: 0.18
Nodes (12): ICONS, SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle(), Tabs() (+4 more)

### Community 7 - "dashboard/page.tsx"
Cohesion: 0.15
Nodes (17): BULAN_PENDEK, DashboardPage(), dynamic, fmt(), pct(), ProgressRow(), STATUS_PENGADUAN, dasar (+9 more)

### Community 8 - "catatAktivitas"
Cohesion: 0.10
Nodes (26): dynamic, maxDuration, POST(), runtime, DELETE(), dynamic, passwordCocok(), POST() (+18 more)

### Community 9 - "ok"
Cohesion: 0.06
Nodes (70): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, dynamic, GET() (+62 more)

### Community 10 - "inline-edit.tsx"
Cohesion: 0.12
Nodes (26): AdminDemografi(), downloadFile(), FieldEditor(), Ctx, InlineEditCtx, Row, ImageCropperDialog(), ImageCropperDialogProps (+18 more)

### Community 11 - "cn"
Cohesion: 0.07
Nodes (32): NotFound(), ImageColumnInput(), EditModeToggle(), MenuPopuler(), IconPicker(), WarnaPicker(), MapCard(), ServiceCard() (+24 more)

### Community 12 - "AktaKelahiranNikAdaModal.tsx"
Cohesion: 0.09
Nodes (41): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaPerceraianModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN (+33 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.14
Nodes (24): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+16 more)

### Community 14 - "profile-tabs.tsx"
Cohesion: 0.08
Nodes (24): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+16 more)

### Community 15 - "label.tsx"
Cohesion: 0.15
Nodes (19): ProfilInitial, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, FormData, KKCetakUlangModalProps, UploadedFile, FormData (+11 more)

### Community 16 - "AktaKematianModal.tsx"
Cohesion: 0.12
Nodes (28): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaKematianModalProps, FormData, UploadedFile, AktaNikahModal(), AktaPerceraianModal() (+20 more)

### Community 17 - "footer.tsx"
Cohesion: 0.09
Nodes (16): INFO, metadata, ArticleCard(), BeritaListPage(), News, tglID(), News, metadata (+8 more)

### Community 18 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (20): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+12 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "AdminUsers.tsx"
Cohesion: 0.13
Nodes (12): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, GRUP_AKUN, GrupKey, Kecamatan, PermohonanRingkas (+4 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.12
Nodes (16): 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO, 8. Permintaan dinas — `Document from S.A.M` (dibaca 8 Agu 2026) (+8 more)

### Community 22 - "struktur-editor.tsx"
Cohesion: 0.18
Nodes (18): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+10 more)

### Community 23 - "send/route.ts"
Cohesion: 0.16
Nodes (22): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, fonnteAktif() (+14 more)

### Community 24 - "users/route.ts"
Cohesion: 0.14
Nodes (28): GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), dynamic, POST(), POST() (+20 more)

### Community 25 - "ppid/[...slug]/page.tsx"
Cohesion: 0.17
Nodes (12): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, PpidCampur(), TAB (+4 more)

### Community 26 - "PilihLayananClient.tsx"
Cohesion: 0.24
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 27 - "demografi-view.tsx"
Cohesion: 0.26
Nodes (10): DemografiKategoriPage(), DemografiView(), fmt(), KOLOM_LABEL, labelKolom(), Row, sumKolom(), DEMOGRAFI_KATEGORI (+2 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "EditorNavigasi.tsx"
Cohesion: 0.10
Nodes (28): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, EditorNavigasi(), KOSONG (+20 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "syarat-ketentuan-view.tsx"
Cohesion: 0.21
Nodes (8): BAGIAN, Data, SyaratKetentuanView(), SyaratLayananTabs(), KasusLayanan, LayananSyarat, SYARAT_KATEGORI, SYARAT_LAYANAN

### Community 32 - "RegisterContent.tsx"
Cohesion: 0.10
Nodes (26): ForgotPasswordPage(), LoginPage(), SessionHydrator(), Kecamatan, namaWilayah, RegisterPage(), ResetPasswordPage(), MenuItem (+18 more)

### Community 33 - "static-content-registry.ts"
Cohesion: 0.20
Nodes (13): GET(), BlockEditorDialog(), blokGaleriPpid(), blokHalamanTambahan(), blokInfoHalaman(), DKB_PERIODE_KUNCI, getStaticBlock(), getStaticDefaults() (+5 more)

### Community 34 - "useAppSelector"
Cohesion: 0.22
Nodes (12): InlineEditProvider(), isPublicPage(), useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch (+4 more)

### Community 35 - "1. SELESAI & TERVERIFIKASI — wajib di-port ke SAIBATIN"
Cohesion: 0.14
Nodes (13): 0. Peta dua project — BACA DULU, 1.1 Sisa branding Pesisir Barat di SIDAKO, 1.2 Carousel landing page — kurang besar & kepotong, 1.3 Permohonan Online pindah ke dashboard, tanpa modal, 1.4 Input tanggal tidak bisa diketik, 1.5 Upload — batas ukuran, OOM, dan path traversal, 1.6 Animasi transisi, 1.7 Sub-menu navbar yang bisa dibuat admin (+5 more)

### Community 36 - "auth.ts"
Cohesion: 0.08
Nodes (44): dynamic, GET(), PUT(), VALID, GET(), PATCH(), STATUS_VALID, GET() (+36 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "Yang Harus Dibuat"
Cohesion: 0.18
Nodes (10): 1. Komponen `AccessibilityWidget` (client component), 2. Daftar Kontrol Aksesibilitas (minimal set berikut), 3. Persistensi & anti-flicker, 4. Aksesibilitas dari widget itu sendiri (jangan ironis), 5. Integrasi & batasan, Deliverable, Konteks Teknis (WAJIB diikuti, sudah diverifikasi di codebase), Kualitas & Verifikasi (lakukan sebelum selesai) (+2 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.09
Nodes (18): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic (+10 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "profil/page.tsx"
Cohesion: 0.24
Nodes (8): ChangePasswordForm(), FotoProfilCard(), dynamic, ProfilPage(), ProfilForm(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 42 - "ppid-layanan-halaman.tsx"
Cohesion: 0.16
Nodes (10): dynamic, metadata, dynamic, metadata, PpidLayananHalaman(), PpidSeksi, EditableInfoPage(), InfoBerkas (+2 more)

### Community 43 - "users/[id]/route.ts"
Cohesion: 0.09
Nodes (27): DELETE(), dynamic, GET(), PUT(), dynamic, POST(), DELETE(), dynamic (+19 more)

### Community 44 - "galeri-profil.tsx"
Cohesion: 0.08
Nodes (28): clampKolom(), GaleriPage(), useInlineEdit(), ProfileTabs(), StatsGrid(), clampKolom(), fmtTanggal(), GaleriItem (+20 more)

### Community 45 - "parse/route.ts"
Cohesion: 0.11
Nodes (24): dynamic, GET(), runtime, Conflict, dynamic, maxDuration, POST(), runtime (+16 more)

### Community 46 - "uji-visibilitas.ts"
Cohesion: 0.22
Nodes (8): Props, LAYANAN_FORMS, LayananForm, LAYANAN_KODE, SLUG_DARI_KODE, dariRute, nyata, slugForm

### Community 47 - "layanan-forms.ts"
Cohesion: 0.09
Nodes (23): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer(), catatanSection, f(), FieldDef, FieldType, kelahiranDokumen (+15 more)

### Community 48 - "scripts"
Cohesion: 0.14
Nodes (14): scripts, akun:uji, build, db:generate, db:migrate, db:push, db:seed, db:studio (+6 more)

### Community 49 - "navbar.tsx"
Cohesion: 0.19
Nodes (12): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+4 more)

### Community 50 - "produk/[...slug]/page.tsx"
Cohesion: 0.32
Nodes (6): dynamic, ProdukPage(), DOKUMEN_KATEGORI, DOKUMEN_KEYS, dokumenJenisForPath(), DokumenKategori

### Community 51 - "pengaturan-pelayanan.tsx"
Cohesion: 0.31
Nodes (7): PengaturanPelayanan(), PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem, slugTersembunyi(), layananTersembunyi()

### Community 52 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 53 - "jam-layanan.ts"
Cohesion: 0.14
Nodes (24): dynamic, GET(), JamLayananEditor(), Toggle(), URUTAN_HARI, formatTanggalId(), hariIniZona(), PanelJamTutup() (+16 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.16
Nodes (14): metadata, fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA (+6 more)

### Community 55 - "stats.tsx"
Cohesion: 0.11
Nodes (13): DemografiMetric(), fmt(), OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, OfficeMap (+5 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "time-picker.tsx"
Cohesion: 0.32
Nodes (7): HOURS, isJam(), masker(), MINUTES, ScrollColumn(), TimePicker(), TimePickerProps

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-advanced-cropper, react-organizational-chart, sharp (+3 more)

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
Cohesion: 0.09
Nodes (35): PATCH(), STATUS_VALID, dynamic, POST(), POST(), POST(), POST(), dynamic (+27 more)

### Community 66 - "relasi-terkait.tsx"
Cohesion: 0.38
Nodes (4): RelasiTerkait(), SectionHeading(), Relasi, relasiTerkait

### Community 67 - "AktaNikahModal.tsx"
Cohesion: 0.11
Nodes (27): AKSI_STYLE, LogItem, Petugas, ALASAN_TOLAK, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+19 more)

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

### Community 103 - "pilih-rincian.tsx"
Cohesion: 0.27
Nodes (8): PilihRincian(), norm(), SearchSelect(), SearchSelectOption, SearchSelectProps, Popover(), PopoverContent(), PopoverTrigger()

### Community 109 - "KIAModal.tsx"
Cohesion: 0.29
Nodes (6): EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile

### Community 122 - "admin/skm/route.ts"
Cohesion: 0.60
Nodes (3): GET(), SKM_ASPEK, SKM_SKALA_MAX

### Community 123 - "baru/page.tsx"
Cohesion: 0.40
Nodes (4): dynamic, metadata, PilihLayananPage(), PilihLayananClient()

### Community 124 - "image-upload-field.tsx"
Cohesion: 0.67
Nodes (3): ImageUploadField(), kecilkan(), TIPE_DITERIMA

### Community 164 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

### Community 166 - "app/page.tsx"
Cohesion: 0.10
Nodes (18): smoothEase, EditableBlock(), AlurLayanan(), ease, STEPS, CarouselSlide, DEFAULT_SLIDES, ElegantCarousel() (+10 more)

## Knowledge Gaps
- **584 isolated node(s):** `dynamic`, `dynamic`, `EMPTY_FORM`, `PermohonanRingkas`, `Kecamatan` (+579 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 689 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `input.tsx`, `utils.ts`, `PengajuanBaruClient.tsx`, `inline-edit.tsx`, `AktaKelahiranNikAdaModal.tsx`, `statistik-kartu-editor.tsx`, `profile-tabs.tsx`, `label.tsx`, `AktaKematianModal.tsx`, `informasi-index.tsx`, `AdminUsers.tsx`, `struktur-editor.tsx`, `PilihLayananClient.tsx`, `demografi-view.tsx`, `accessibility-widget.tsx`, `EditorNavigasi.tsx`, `RegisterContent.tsx`, `static-content-registry.ts`, `auth.ts`, `app/page.tsx`, `back-button.tsx`, `dashboard-sidebar.tsx`, `ppid-layanan-halaman.tsx`, `galeri-profil.tsx`, `layanan-forms.ts`, `navbar.tsx`, `pengaturan-pelayanan.tsx`, `notification-bell.tsx`, `jam-layanan.ts`, `stats.tsx`, `time-picker.tsx`, `AktaNikahModal.tsx`, `pilih-rincian.tsx`, `KIAModal.tsx`, `baru/page.tsx`, `image-upload-field.tsx`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `riwayat/[id]/page.tsx`, `dashboard/page.tsx`, `catatAktivitas`, `footer.tsx`, `informasi-index.tsx`, `users/route.ts`, `PilihLayananClient.tsx`, `EditorNavigasi.tsx`, `ktp/route.ts`, `auth.ts`, `back-button.tsx`, `profil/page.tsx`, `users/[id]/route.ts`, `parse/route.ts`, `AdminPengaduan.tsx`, `skm/page.tsx`, `berita/[id]/route.ts`, `prisma.ts`, `dashboard/kritik-saran/page.tsx`, `produk/page.tsx`, `admin/skm/route.ts`, `baru/page.tsx`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `statistik-export.ts`, `riwayat/[id]/page.tsx`, `dashboard/page.tsx`, `catatAktivitas`, `ok`, `statistik-kartu-editor.tsx`, `informasi-index.tsx`, `users/route.ts`, `ppid/[...slug]/page.tsx`, `EditorNavigasi.tsx`, `static-content-registry.ts`, `auth.ts`, `profil/page.tsx`, `ppid-layanan-halaman.tsx`, `users/[id]/route.ts`, `parse/route.ts`, `produk/[...slug]/page.tsx`, `pengaturan-pelayanan.tsx`, `jam-layanan.ts`, `berita/[id]/route.ts`, `admin/skm/route.ts`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **What connects `dynamic`, `dynamic`, `EMPTY_FORM` to the rest of the system?**
  _584 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10365853658536585 - nodes in this community are weakly interconnected._
- **Should `input.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11396011396011396 - nodes in this community are weakly interconnected._
- **Should `riwayat/[id]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06775510204081632 - nodes in this community are weakly interconnected._