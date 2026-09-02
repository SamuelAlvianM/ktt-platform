# Graph Report - sidako-platform  (2026-09-02)

## Corpus Check
- 343 files · ~230,410 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1837 nodes · 5175 edges · 177 communities (79 shown, 91 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0d82f046`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- AdminUsers.tsx
- hero-section.tsx
- riwayat/[id]/page.tsx
- permohonan/[id]/route.ts
- devDependencies
- EditorNavigasi.tsx
- prisma.ts
- auth.ts
- ok
- inline-edit.tsx
- cn
- KIAModal.tsx
- statistik-kartu-editor.tsx
- profile-tabs.tsx
- button.tsx
- notifyError
- footer.tsx
- kelola-kartu.tsx
- compilerOptions
- authSlice.ts
- Journal — SIDAKO (`sidako-platform`)
- App\Http\Controllers\Controller
- send/route.ts
- Illuminate\Http\Request
- ppid/[...slug]/page.tsx
- [action]/route.ts
- Auth
- accessibility-widget.tsx
- [layanan]/page.tsx
- ktp/route.ts
- fail
- LoginContent.tsx
- useAppSelector
- store.ts
- Validator
- peran.ts
- components.json
- struktur-editor.tsx
- back-button.tsx
- dashboard-sidebar.tsx
- formulir-ppid/page.tsx
- App\Models\Fronts\Permohonans\KedatanganModel
- users/route.ts
- useStaticContent
- parse/route.ts
- RegisterContent.tsx
- layanan-forms.ts
- scripts
- notification-bell.tsx
- demografi-view.tsx
- galeri-profil.tsx
- staff-pengajuan-form.tsx
- jam-layanan.ts
- peta-demografi.tsx
- stats.tsx
- CLAUDE.md
- package.json
- dashboard/page.tsx
- dependencies
- static-content-registry.ts
- AdminPengaduan.tsx
- skm/page.tsx
- berita/[id]/route.ts
- permohonan-pdf.ts
- prisma
- syarat-ketentuan-view.tsx
- AdminPermohonan.tsx
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
- react-dom
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
- App\Models\Fronts\Permohonans\Kelahiran1Model
- App\Models\Fronts\Permohonans\Kelahiran2Model
- App\Models\Fronts\Permohonans\KematianModel
- App\Models\Fronts\Permohonans\KIAModel
- App\Models\Fronts\Permohonans\KKCetakUlangModel
- App\Models\Fronts\Permohonans\KKNumpangModel
- App\Models\Fronts\Permohonans\KKPerubahhanBiodataModel
- App\Models\Fronts\Permohonans\KKPisahKKModel
- App\Models\Fronts\Permohonans\KKTambahAnakModel
- App\Models\Fronts\Permohonans\KonsolidasiUpdateDataModel
- App\Models\Fronts\Permohonans\KTPELModel
- App\Models\Fronts\Permohonans\PerceraianModel
- App\Models\Fronts\Permohonans\PerkawinanModel
- App\Models\Fronts\Permohonans\PindahModel
- App\Models\Fronts\Users\UserlevelModel
- App\Models\Fronts\Users\UsersModel
- App\Models\Imports\BiodataWNILcModel
- App\Models\Includes\MenuModel
- App\Models\Includes\OptionModel
- App\Models\Settings\OperasionalWaktuModel
- App\Quotation
- Carbon\Carbon
- postcss.config.mjs
- DataTables
- DB
- react-leaflet
- @reduxjs/toolkit
- Exception
- File
- GoogleReCaptchaV3
- Hash
- Illuminate\Support\Facades\Storage
- @tailwindcss/postcss
- users
- Zip
- @types/nodemailer
- @types/pdfkit
- mail-templates.ts
- riwayat-list.tsx
- typescript
- app/layout.tsx
- hubungi-kami/page.tsx
- relasi-terkait.tsx
- media/page.tsx
- media/berita/page.tsx
- gis/page.tsx
- log/page.tsx
- baru/page.tsx
- periksa-peran.ts
- StaffPengajuanForm
- buat-opd-uji.ts
- @tailwindcss/typography
- @types/bcryptjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 204 edges
2. `ok()` - 147 edges
3. `getSession()` - 146 edges
4. `fail()` - 137 edges
5. `prisma` - 71 edges
6. `Button()` - 69 edges
7. `Input()` - 55 edges
8. `catatAktivitas()` - 44 edges
9. `Label()` - 41 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts
- `NotFound()` --calls--> `cn()`  [EXTRACTED]
  app/not-found.tsx → lib/utils.ts
- `Toggle()` --calls--> `cn()`  [EXTRACTED]
  components/dashboard/jam-layanan-editor.tsx → lib/utils.ts
- `ScrollColumn()` --calls--> `cn()`  [EXTRACTED]
  components/ui/time-picker.tsx → lib/utils.ts
- `IconPicker()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/statistik-kartu-editor.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (177 total, 91 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.08
Nodes (46): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, ONLINE_WINDOW_MS (+38 more)

### Community 1 - "AdminUsers.tsx"
Cohesion: 0.05
Nodes (42): CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers(), DetailUser, EMPTY_FORM (+34 more)

### Community 2 - "hero-section.tsx"
Cohesion: 0.12
Nodes (12): EditableBlock(), CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS, ease (+4 more)

### Community 3 - "riwayat/[id]/page.tsx"
Cohesion: 0.21
Nodes (15): PermohonanDetail(), dynamic, RiwayatDetailPage(), STATUS_CONFIG, BERKAS_LABELS, CODE_VALUES, FIELD_LABELS, formatPayloadValue() (+7 more)

### Community 4 - "permohonan/[id]/route.ts"
Cohesion: 0.15
Nodes (21): GET(), PATCH(), STATUS_VALID, Props, LAYANAN_FORMS, LayananForm, formDariKode(), LAYANAN_KODE (+13 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, tsx, tw-animate-css, @types/node, @types/react, @types/react-dom (+5 more)

### Community 6 - "EditorNavigasi.tsx"
Cohesion: 0.05
Nodes (53): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, EditorNavigasi(), KOSONG (+45 more)

### Community 7 - "prisma.ts"
Cohesion: 0.24
Nodes (13): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+5 more)

### Community 8 - "auth.ts"
Cohesion: 0.10
Nodes (28): DELETE(), dynamic, passwordCocok(), POST(), runtime, DELETE(), GET(), JENIS_VALID (+20 more)

### Community 9 - "ok"
Cohesion: 0.08
Nodes (37): dynamic, GET(), dynamic, GET(), PUT(), VALID, GET(), GET() (+29 more)

### Community 10 - "inline-edit.tsx"
Cohesion: 0.16
Nodes (17): AdminDemografi(), downloadFile(), Ctx, EditModeToggle(), InlineEditCtx, DemografiMetric(), fmt(), Row (+9 more)

### Community 11 - "cn"
Cohesion: 0.09
Nodes (31): EMPTY, FormState, News, FieldEditor(), IconColumnInput(), ImageColumnInput(), ImagePickerField(), ImagePickerFieldProps (+23 more)

### Community 12 - "KIAModal.tsx"
Cohesion: 0.09
Nodes (72): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModalProps, FormData (+64 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.11
Nodes (28): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+20 more)

### Community 14 - "profile-tabs.tsx"
Cohesion: 0.08
Nodes (25): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+17 more)

### Community 15 - "button.tsx"
Cohesion: 0.10
Nodes (25): Foto, KATEGORI, AKSI_STYLE, LogItem, Petugas, GROUPS, Produk, GalleryItem (+17 more)

### Community 16 - "notifyError"
Cohesion: 0.10
Nodes (31): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), EMPTY_FORM, FILE_FIELDS, FormData (+23 more)

### Community 17 - "footer.tsx"
Cohesion: 0.14
Nodes (8): News, metadata, dynamic, TiketPage(), Footer(), grup, Stats, VisitorCount()

### Community 18 - "kelola-kartu.tsx"
Cohesion: 0.10
Nodes (26): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), FormKartu(), simpan(), keSlug() (+18 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "authSlice.ts"
Cohesion: 0.17
Nodes (12): ForgotPasswordPage(), LoginPage(), SessionHydrator(), useAppDispatch(), authSlice, AuthState, checkNikKk, forgotPassword (+4 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.12
Nodes (16): 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO, 8. Permintaan dinas — `Document from S.A.M` (dibaca 8 Agu 2026) (+8 more)

### Community 23 - "send/route.ts"
Cohesion: 0.16
Nodes (22): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, fonnteAktif() (+14 more)

### Community 25 - "ppid/[...slug]/page.tsx"
Cohesion: 0.11
Nodes (22): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, dynamic, ProdukPage() (+14 more)

### Community 26 - "[action]/route.ts"
Cohesion: 0.16
Nodes (17): dynamic, GET(), PUT(), PATCH(), STATUS_VALID, ALLOWED_EXT, FETCH_ACTIONS, POST() (+9 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "[layanan]/page.tsx"
Cohesion: 0.23
Nodes (10): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), getLayananForm(), getLayanan(), KATEGORI_LAYANAN, LAYANAN_PERMOHONAN (+2 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "fail"
Cohesion: 0.11
Nodes (21): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, POST(), GET() (+13 more)

### Community 32 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): ResetPasswordPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 33 - "useAppSelector"
Cohesion: 0.24
Nodes (11): InlineEditProvider(), isPublicPage(), MobileTopBar(), useLogout(), AuthArea(), useAppSelector, useAuth(), useGuestOnly() (+3 more)

### Community 34 - "store.ts"
Cohesion: 0.43
Nodes (5): AppDispatch, AppStore, makeStore(), RootState, StoreProvider()

### Community 36 - "peran.ts"
Cohesion: 0.19
Nodes (17): GET(), DashboardPengajuanBaruPage(), dynamic, DetailPermohonanPage(), dynamic, DashboardPermohonanPage(), dynamic, dynamic (+9 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "struktur-editor.tsx"
Cohesion: 0.18
Nodes (18): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+10 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.13
Nodes (14): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic (+6 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.14
Nodes (18): DashboardLayout(), dynamic, ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DashboardSidebar(), DesktopSidebar(), GROUPS, groupsForLevel() (+10 more)

### Community 41 - "formulir-ppid/page.tsx"
Cohesion: 0.22
Nodes (5): dynamic, metadata, dynamic, metadata, PpidLayananHalaman()

### Community 43 - "users/route.ts"
Cohesion: 0.14
Nodes (22): DELETE(), dynamic, GET(), GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin() (+14 more)

### Community 44 - "useStaticContent"
Cohesion: 0.09
Nodes (23): clampKolom(), GaleriPage(), smoothEase, BlockEditorDialog(), useInlineEdit(), AlurLayanan(), ease, STEPS (+15 more)

### Community 45 - "parse/route.ts"
Cohesion: 0.09
Nodes (31): dynamic, GET(), runtime, dynamic, maxDuration, POST(), runtime, Conflict (+23 more)

### Community 46 - "RegisterContent.tsx"
Cohesion: 0.22
Nodes (4): Kecamatan, namaWilayah, RegisterPage(), registerUser

### Community 47 - "layanan-forms.ts"
Cohesion: 0.11
Nodes (19): catatanSection, f(), FieldDef, FieldType, kelahiranDokumen, kelahiranSections(), OPT_AGAMA, OPT_GOLDAR (+11 more)

### Community 48 - "scripts"
Cohesion: 0.15
Nodes (13): scripts, build, db:generate, db:migrate, db:push, db:seed, db:studio, dev (+5 more)

### Community 49 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 50 - "demografi-view.tsx"
Cohesion: 0.22
Nodes (10): metadata, DemografiKategoriPage(), DemografiView(), fmt(), KOLOM_LABEL, labelKolom(), Row, sumKolom() (+2 more)

### Community 51 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

### Community 52 - "staff-pengajuan-form.tsx"
Cohesion: 0.29
Nodes (7): Values, OcrUploadButton(), OcrUploadButtonProps, OcrUploadResult, CheckStatus, PemohonAutoFill, PemohonNikFieldProps

### Community 53 - "jam-layanan.ts"
Cohesion: 0.16
Nodes (16): dynamic, GET(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan() (+8 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "stats.tsx"
Cohesion: 0.11
Nodes (14): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+6 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "dashboard/page.tsx"
Cohesion: 0.15
Nodes (17): BULAN_PENDEK, DashboardPage(), dynamic, fmt(), pct(), ProgressRow(), STATUS_PENGADUAN, dasar (+9 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-advanced-cropper, react-organizational-chart, sharp (+3 more)

### Community 60 - "static-content-registry.ts"
Cohesion: 0.11
Nodes (22): HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), PosterIkd(), WbsForm(), hubungiKamiContent, ppidContent (+14 more)

### Community 61 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 64 - "permohonan-pdf.ts"
Cohesion: 0.19
Nodes (13): bacaBerkas(), BerkasSiap, buatPermohonanPdf(), BULAN, DataPdf, gambarDokumen(), PermohonanPdfInput, rapikanNilai() (+5 more)

### Community 65 - "prisma"
Cohesion: 0.12
Nodes (28): dynamic, POST(), dynamic, POST(), POST(), POST(), POST(), POST() (+20 more)

### Community 66 - "syarat-ketentuan-view.tsx"
Cohesion: 0.21
Nodes (8): BAGIAN, Data, SyaratKetentuanView(), SyaratLayananTabs(), KasusLayanan, LayananSyarat, SYARAT_KATEGORI, SYARAT_LAYANAN

### Community 67 - "AdminPermohonan.tsx"
Cohesion: 0.20
Nodes (9): AdminPermohonan(), ALASAN_TOLAK, FINAL_STATUS, Item, STATUS, STATUS_KEYS, deretHalaman(), OPSI_PER_HALAMAN (+1 more)

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
Cohesion: 0.10
Nodes (28): Detail, FINAL, STATUS, JamLayananEditor(), Toggle(), URUTAN_HARI, PilihRincian(), norm() (+20 more)

### Community 161 - "mail-templates.ts"
Cohesion: 0.47
Nodes (10): appUrl(), esc(), layout(), MailContent, tplAkunDisetujui(), tplAkunDitolak(), tplPermohonanDitolak(), tplPermohonanSelesai() (+2 more)

### Community 162 - "riwayat-list.tsx"
Cohesion: 0.31
Nodes (7): AlasanDitolak(), UraianTolak, Permohonan, RiwayatList(), STATUS_CONFIG, TABS, useInfiniteScroll()

### Community 164 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

### Community 165 - "hubungi-kami/page.tsx"
Cohesion: 0.28
Nodes (4): INFO, metadata, SurveyKepuasanForm(), SiteConfig

### Community 166 - "relasi-terkait.tsx"
Cohesion: 0.38
Nodes (4): RelasiTerkait(), SectionHeading(), Relasi, relasiTerkait

### Community 167 - "media/page.tsx"
Cohesion: 0.40
Nodes (4): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic

### Community 168 - "media/berita/page.tsx"
Cohesion: 0.47
Nodes (4): ArticleCard(), BeritaListPage(), News, tglID()

### Community 169 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 170 - "log/page.tsx"
Cohesion: 0.40
Nodes (4): fmtWaktu(), LogAktivitasClient(), DashboardLogPage(), dynamic

### Community 171 - "baru/page.tsx"
Cohesion: 0.40
Nodes (4): dynamic, metadata, PilihLayananPage(), PilihLayananClient()

### Community 173 - "StaffPengajuanForm"
Cohesion: 0.67
Nodes (3): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer()

## Knowledge Gaps
- **560 isolated node(s):** `FINAL_STATUS`, `Item`, `ALASAN_TOLAK`, `STATUS`, `STATUS_KEYS` (+555 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 696 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **91 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminUsers.tsx`, `hero-section.tsx`, `EditorNavigasi.tsx`, `inline-edit.tsx`, `KIAModal.tsx`, `statistik-kartu-editor.tsx`, `profile-tabs.tsx`, `button.tsx`, `notifyError`, `kelola-kartu.tsx`, `ppid/[...slug]/page.tsx`, `accessibility-widget.tsx`, `[layanan]/page.tsx`, `LoginContent.tsx`, `useAppSelector`, `struktur-editor.tsx`, `dashboard-sidebar.tsx`, `formulir-ppid/page.tsx`, `log/page.tsx`, `baru/page.tsx`, `useStaticContent`, `StaffPengajuanForm`, `notification-bell.tsx`, `demografi-view.tsx`, `staff-pengajuan-form.tsx`, `jam-layanan.ts`, `stats.tsx`, `AdminPermohonan.tsx`, `utils.ts`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `AdminUsers.tsx`, `riwayat/[id]/page.tsx`, `permohonan/[id]/route.ts`, `EditorNavigasi.tsx`, `prisma.ts`, `auth.ts`, `footer.tsx`, `kelola-kartu.tsx`, `[action]/route.ts`, `[layanan]/page.tsx`, `ktp/route.ts`, `fail`, `peran.ts`, `back-button.tsx`, `dashboard-sidebar.tsx`, `media/page.tsx`, `log/page.tsx`, `users/route.ts`, `baru/page.tsx`, `parse/route.ts`, `dashboard/page.tsx`, `AdminPengaduan.tsx`, `skm/page.tsx`, `berita/[id]/route.ts`, `prisma`, `dashboard/kritik-saran/page.tsx`, `produk/page.tsx`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma` to `statistik-export.ts`, `AdminUsers.tsx`, `riwayat/[id]/page.tsx`, `permohonan/[id]/route.ts`, `peran.ts`, `dashboard/page.tsx`, `prisma.ts`, `auth.ts`, `ok`, `EditorNavigasi.tsx`, `users/route.ts`, `parse/route.ts`, `statistik-kartu-editor.tsx`, `kelola-kartu.tsx`, `ppid/[...slug]/page.tsx`, `[action]/route.ts`, `berita/[id]/route.ts`, `fail`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **What connects `FINAL_STATUS`, `Item`, `ALASAN_TOLAK` to the rest of the system?**
  _560 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08244897959183674 - nodes in this community are weakly interconnected._
- **Should `AdminUsers.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.053246753246753244 - nodes in this community are weakly interconnected._
- **Should `hero-section.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12418300653594772 - nodes in this community are weakly interconnected._