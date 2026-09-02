# Graph Report - sidako-platform  (2026-09-02)

## Corpus Check
- 339 files · ~228,524 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1824 nodes · 5116 edges · 168 communities (72 shown, 89 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5b0ebfe9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- AdminUsers.tsx
- useStaticContent
- AdminPermohonan.tsx
- permohonan/[id]/route.ts
- devDependencies
- PengajuanBaruClient.tsx
- prisma.ts
- auth.ts
- ok
- dialog.tsx
- KKPerubahanBiodataModal.tsx
- AktaNikahModal.tsx
- statistik-kartu-editor.tsx
- profile-tabs.tsx
- KIAModal.tsx
- cn
- footer.tsx
- ppid/[...slug]/page.tsx
- compilerOptions
- authSlice.ts
- Journal — SIDAKO (`sidako-platform`)
- App\Http\Controllers\Controller
- send/route.ts
- Illuminate\Http\Request
- AktaPerceraianModal.tsx
- getSession
- Auth
- accessibility-widget.tsx
- [layanan]/page.tsx
- ktp/route.ts
- navigasi-tambahan.ts
- LoginContent.tsx
- inline-edit.tsx
- useAppSelector
- Validator
- parse/route.ts
- components.json
- struktur-editor.tsx
- back-button.tsx
- dashboard-sidebar.tsx
- formulir-ppid/page.tsx
- App\Models\Fronts\Permohonans\KedatanganModel
- users/route.ts
- app/page.tsx
- demografi-view.tsx
- RegisterContent.tsx
- navbar.tsx
- scripts
- notification-bell.tsx
- halaman/[slug]/page.tsx
- galeri-profil.tsx
- input.tsx
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
- admin/skm/route.ts
- prisma
- kelola-kartu.tsx
- navigasi/page.tsx
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
- @types/react
- @types/react-dom
- typescript
- app/layout.tsx
- profil/page.tsx
- relasi-terkait.tsx
- AdminMedia.tsx

## God Nodes (most connected - your core abstractions)
1. `cn()` - 202 edges
2. `ok()` - 147 edges
3. `getSession()` - 144 edges
4. `fail()` - 137 edges
5. `prisma` - 70 edges
6. `Button()` - 68 edges
7. `Input()` - 54 edges
8. `catatAktivitas()` - 44 edges
9. `Label()` - 40 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `ProfilPage()` --calls--> `getSession()`  [EXTRACTED]
  app/profil/page.tsx → lib/auth.ts
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts
- `NotFound()` --calls--> `cn()`  [EXTRACTED]
  app/not-found.tsx → lib/utils.ts
- `Toggle()` --calls--> `cn()`  [EXTRACTED]
  components/dashboard/jam-layanan-editor.tsx → lib/utils.ts
- `ScrollColumn()` --calls--> `cn()`  [EXTRACTED]
  components/ui/time-picker.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (168 total, 89 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.10
Nodes (39): dynamic, GET(), runtime, BAGIAN_STATISTIK, BagianStatistik, bagianValid(), barisBernomor(), buatWorkbookStatistik() (+31 more)

### Community 1 - "AdminUsers.tsx"
Cohesion: 0.11
Nodes (18): AdminUser, AdminUsers(), DetailUser, EMPTY_FORM, fmtTanggal(), GRUP_AKUN, GrupKey, IsiDetail() (+10 more)

### Community 2 - "useStaticContent"
Cohesion: 0.07
Nodes (29): HalamanTambahanClient(), EditableBlock(), CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS (+21 more)

### Community 3 - "AdminPermohonan.tsx"
Cohesion: 0.06
Nodes (46): AdminPermohonan(), ALASAN_TOLAK, BerkasItem, Detail, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+38 more)

### Community 4 - "permohonan/[id]/route.ts"
Cohesion: 0.12
Nodes (32): GET(), PATCH(), STATUS_VALID, POST(), formDariKode(), appUrl(), getTransporter(), mailEnabled() (+24 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, @tailwindcss/typography, tsx, tw-animate-css, @types/bcryptjs, @types/node (+5 more)

### Community 6 - "PengajuanBaruClient.tsx"
Cohesion: 0.06
Nodes (40): ICONS, PengaturanPelayanan(), Props, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader() (+32 more)

### Community 7 - "prisma.ts"
Cohesion: 0.24
Nodes (13): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+5 more)

### Community 8 - "auth.ts"
Cohesion: 0.09
Nodes (32): dynamic, maxDuration, POST(), runtime, DELETE(), dynamic, passwordCocok(), POST() (+24 more)

### Community 9 - "ok"
Cohesion: 0.07
Nodes (45): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, dynamic, GET() (+37 more)

### Community 10 - "dialog.tsx"
Cohesion: 0.16
Nodes (16): DemografiMetric(), fmt(), Row, ImageCropperDialog(), ImageCropperDialogProps, MediaPickerProps, MediaItem, MediaUpload() (+8 more)

### Community 11 - "KKPerubahanBiodataModal.tsx"
Cohesion: 0.13
Nodes (12): EMPTY, FormState, News, MediaPicker(), FormData, JenisBiodataOption, KKPerubahanBiodataModalProps, UploadedFile (+4 more)

### Community 12 - "AktaNikahModal.tsx"
Cohesion: 0.09
Nodes (49): AktaNikahModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN, FormPermohonanProps, memuat(), Dialog() (+41 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.13
Nodes (26): BULAN_PENDEK, GET(), AdminDemografi(), downloadFile(), Conflict, DemografiEditor(), digits(), EditGrid() (+18 more)

### Community 14 - "profile-tabs.tsx"
Cohesion: 0.12
Nodes (17): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+9 more)

### Community 15 - "KIAModal.tsx"
Cohesion: 0.15
Nodes (13): ProfilInitial, EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile, ASPEK (+5 more)

### Community 16 - "cn"
Cohesion: 0.09
Nodes (42): FieldEditor(), IconColumnInput(), ImageColumnInput(), AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal() (+34 more)

### Community 17 - "footer.tsx"
Cohesion: 0.08
Nodes (20): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+12 more)

### Community 18 - "ppid/[...slug]/page.tsx"
Cohesion: 0.08
Nodes (31): dynamic, metadata, dynamic, metadata, bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage() (+23 more)

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
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 25 - "AktaPerceraianModal.tsx"
Cohesion: 0.15
Nodes (22): AKSI_STYLE, LogItem, Petugas, KOSONG, GROUPS, Produk, GalleryItem, KATEGORI_BAWAAN (+14 more)

### Community 26 - "getSession"
Cohesion: 0.13
Nodes (20): dynamic, GET(), PUT(), dynamic, GET(), PUT(), VALID, GET() (+12 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "[layanan]/page.tsx"
Cohesion: 0.16
Nodes (14): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient() (+6 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "navigasi-tambahan.ts"
Cohesion: 0.15
Nodes (16): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, EditorNavigasi(), buatSlug() (+8 more)

### Community 32 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): ResetPasswordPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 33 - "inline-edit.tsx"
Cohesion: 0.08
Nodes (25): clampKolom(), GaleriPage(), BlockEditorDialog(), Ctx, EditModeToggle(), InlineEditCtx, InlineEditProvider(), isPublicPage() (+17 more)

### Community 34 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

### Community 36 - "parse/route.ts"
Cohesion: 0.20
Nodes (13): Conflict, dynamic, maxDuration, POST(), runtime, sig(), Variant, cellNum() (+5 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "struktur-editor.tsx"
Cohesion: 0.18
Nodes (18): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+10 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.11
Nodes (16): AdminBerita(), DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic (+8 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "formulir-ppid/page.tsx"
Cohesion: 0.22
Nodes (5): dynamic, metadata, dynamic, metadata, PpidLayananHalaman()

### Community 43 - "users/route.ts"
Cohesion: 0.14
Nodes (22): DELETE(), dynamic, GET(), GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin() (+14 more)

### Community 44 - "app/page.tsx"
Cohesion: 0.21
Nodes (8): smoothEase, AlurLayanan(), ease, STEPS, ProfileTabs(), News, QuickHighlights(), tglID()

### Community 45 - "demografi-view.tsx"
Cohesion: 0.14
Nodes (22): dynamic, GET(), runtime, dynamic, GET(), runtime, DemografiKategoriPage(), DemografiView() (+14 more)

### Community 46 - "RegisterContent.tsx"
Cohesion: 0.13
Nodes (9): CekStatusClient(), Hasil, IKON, metadata, Kecamatan, namaWilayah, RegisterPage(), labelKolom() (+1 more)

### Community 47 - "navbar.tsx"
Cohesion: 0.21
Nodes (11): AuthArea(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons (+3 more)

### Community 48 - "scripts"
Cohesion: 0.17
Nodes (12): scripts, build, db:generate, db:migrate, db:push, db:seed, db:studio, dev (+4 more)

### Community 49 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 50 - "halaman/[slug]/page.tsx"
Cohesion: 0.38
Nodes (6): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), KUNCI_NAVIGASI, MenuTambahan

### Community 51 - "galeri-profil.tsx"
Cohesion: 0.13
Nodes (15): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+7 more)

### Community 52 - "input.tsx"
Cohesion: 0.15
Nodes (18): StaffPengajuanForm(), Values, AktaKelahiranNikAdaModalProps, FormData, UploadedFile, useStatusJamLayanan(), KkScanFieldProps, OcrUploadButton() (+10 more)

### Community 53 - "jam-layanan.ts"
Cohesion: 0.16
Nodes (16): dynamic, GET(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan() (+8 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.16
Nodes (14): metadata, fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA (+6 more)

### Community 55 - "stats.tsx"
Cohesion: 0.11
Nodes (14): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+6 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "dashboard/page.tsx"
Cohesion: 0.06
Nodes (42): dynamic, GET(), POST(), runtime, DashboardLayout(), dynamic, BULAN_PENDEK, DashboardPage() (+34 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-advanced-cropper, react-organizational-chart, sharp (+3 more)

### Community 60 - "static-content-registry.ts"
Cohesion: 0.10
Nodes (25): HubungiKamiPage(), dynamic, ProdukPage(), PusatBantuanPage(), sections, WbsPage(), PpidSeksi, EditableInfoPage() (+17 more)

### Community 61 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 64 - "admin/skm/route.ts"
Cohesion: 0.60
Nodes (3): GET(), SKM_ASPEK, SKM_SKALA_MAX

### Community 65 - "prisma"
Cohesion: 0.10
Nodes (34): PATCH(), STATUS_VALID, dynamic, POST(), dynamic, POST(), POST(), POST() (+26 more)

### Community 66 - "kelola-kartu.tsx"
Cohesion: 0.26
Nodes (10): StatCard(), FormKartu(), simpan(), keSlug(), PpidAksiKartu(), hapus(), simpanDaftar(), getIcon() (+2 more)

### Community 67 - "navigasi/page.tsx"
Cohesion: 0.50
Nodes (3): DashboardNavigasiPage(), dynamic, metadata

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
Cohesion: 0.07
Nodes (39): Foto, KATEGORI, NotFound(), JamLayananEditor(), Toggle(), URUTAN_HARI, AktaKelahiranNikTidakAdaModalProps, FormData (+31 more)

### Community 164 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

### Community 165 - "profil/page.tsx"
Cohesion: 0.24
Nodes (8): ChangePasswordForm(), FotoProfilCard(), dynamic, ProfilPage(), ProfilForm(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 166 - "relasi-terkait.tsx"
Cohesion: 0.38
Nodes (4): RelasiTerkait(), SectionHeading(), Relasi, relasiTerkait

### Community 167 - "AdminMedia.tsx"
Cohesion: 0.47
Nodes (4): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic

## Knowledge Gaps
- **558 isolated node(s):** `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `STATUS_VALID`, `dynamic` (+553 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 692 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **89 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `useStaticContent`, `AdminPermohonan.tsx`, `PengajuanBaruClient.tsx`, `dialog.tsx`, `KKPerubahanBiodataModal.tsx`, `AktaNikahModal.tsx`, `statistik-kartu-editor.tsx`, `profile-tabs.tsx`, `KIAModal.tsx`, `ppid/[...slug]/page.tsx`, `AktaPerceraianModal.tsx`, `accessibility-widget.tsx`, `[layanan]/page.tsx`, `navigasi-tambahan.ts`, `LoginContent.tsx`, `inline-edit.tsx`, `struktur-editor.tsx`, `back-button.tsx`, `dashboard-sidebar.tsx`, `formulir-ppid/page.tsx`, `app/page.tsx`, `demografi-view.tsx`, `navbar.tsx`, `notification-bell.tsx`, `input.tsx`, `jam-layanan.ts`, `stats.tsx`, `static-content-registry.ts`, `kelola-kartu.tsx`, `utils.ts`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `statistik-export.ts`, `AdminPermohonan.tsx`, `permohonan/[id]/route.ts`, `prisma.ts`, `auth.ts`, `ok`, `footer.tsx`, `ppid/[...slug]/page.tsx`, `[layanan]/page.tsx`, `ktp/route.ts`, `navigasi-tambahan.ts`, `parse/route.ts`, `profil/page.tsx`, `back-button.tsx`, `AdminMedia.tsx`, `users/route.ts`, `demografi-view.tsx`, `dashboard/page.tsx`, `AdminPengaduan.tsx`, `skm/page.tsx`, `berita/[id]/route.ts`, `admin/skm/route.ts`, `prisma`, `navigasi/page.tsx`, `dashboard/kritik-saran/page.tsx`, `produk/page.tsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma` to `admin/skm/route.ts`, `statistik-export.ts`, `AdminPermohonan.tsx`, `parse/route.ts`, `permohonan/[id]/route.ts`, `dashboard/page.tsx`, `prisma.ts`, `auth.ts`, `ok`, `profil/page.tsx`, `users/route.ts`, `statistik-kartu-editor.tsx`, `demografi-view.tsx`, `halaman/[slug]/page.tsx`, `ppid/[...slug]/page.tsx`, `getSession`, `static-content-registry.ts`, `berita/[id]/route.ts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT` to the rest of the system?**
  _558 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10365853658536585 - nodes in this community are weakly interconnected._
- **Should `AdminUsers.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11462450592885376 - nodes in this community are weakly interconnected._
- **Should `useStaticContent` be split into smaller, more focused modules?**
  _Cohesion score 0.06845513413506013 - nodes in this community are weakly interconnected._