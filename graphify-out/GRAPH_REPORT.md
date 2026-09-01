# Graph Report - sidako-platform  (2026-09-01)

## Corpus Check
- 344 files · ~639,279 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1790 nodes · 4991 edges · 154 communities (63 shown, 81 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a100c96a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- KIAModal.tsx
- statistik-export.ts
- input.tsx
- ok
- AdminPermohonan.tsx
- AdminUsers.tsx
- devDependencies
- layanan-forms.ts
- prisma.ts
- profile-tabs.tsx
- notifyError
- statistik-kartu-editor.tsx
- useStaticContent
- struktur-chart.tsx
- static-content-registry.ts
- send/route.ts
- auth.ts
- footer.tsx
- button.tsx
- back-button.tsx
- utils.ts
- ppid/[...slug]/page.tsx
- App\Http\Controllers\Controller
- compilerOptions
- Illuminate\Http\Request
- users/route.ts
- halaman/[slug]/page.tsx
- Auth
- navbar.tsx
- informasi-index.tsx
- accessibility-widget.tsx
- app/page.tsx
- jam-layanan.ts
- PengajuanBaruClient.tsx
- ktp/route.ts
- Validator
- dashboard-sidebar.tsx
- parse/route.ts
- components.json
- stats.tsx
- profil/page.tsx
- RegisterContent.tsx
- App\Models\Fronts\Permohonans\KedatanganModel
- peta-demografi.tsx
- dashboard/kritik-saran/page.tsx
- gis/page.tsx
- FormKartu
- tiket/[id]/route.ts
- cn
- users/[id]/route.ts
- log/page.tsx
- berita/[id]/route.ts
- produk/page.tsx
- useAppSelector
- dependencies
- navigasi/page.tsx
- CLAUDE.md
- AdminPengaduan.tsx
- skm/page.tsx
- uploads/[...path]/route.ts
- notification-bell.tsx
- pengaturan-pelayanan.tsx
- AdminMedia.tsx
- demografi-data.ts
- dashboard/demografi/page.tsx
- deploy.sh
- server-bootstrap.sh
- eslint.config.mjs
- seed-berita.ts
- seed.ts
- prosedur-informasi-images.tsx
- server-db-setup.sh
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
- react-advanced-cropper
- react-day-picker
- react-dropzone
- react-google-recaptcha-v3
- react-organizational-chart
- react-redux
- sharp
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
- postcss.config.mjs
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
- DataTables
- DB
- Exception
- File
- GoogleReCaptchaV3
- Hash
- Illuminate\Support\Facades\Storage
- users
- Zip

## God Nodes (most connected - your core abstractions)
1. `cn()` - 202 edges
2. `ok()` - 147 edges
3. `getSession()` - 146 edges
4. `fail()` - 137 edges
5. `prisma` - 70 edges
6. `Button()` - 68 edges
7. `Input()` - 54 edges
8. `catatAktivitas()` - 43 edges
9. `Label()` - 40 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `Toggle()` --calls--> `cn()`  [EXTRACTED]
  components/dashboard/jam-layanan-editor.tsx → lib/utils.ts
- `ScrollColumn()` --calls--> `cn()`  [EXTRACTED]
  components/ui/time-picker.tsx → lib/utils.ts
- `MapCard()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `ServiceCard()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts
- `TrendChart()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/stats.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (154 total, 81 thin omitted)

### Community 0 - "KIAModal.tsx"
Cohesion: 0.08
Nodes (74): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModalProps, FormData (+66 more)

### Community 1 - "statistik-export.ts"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 2 - "input.tsx"
Cohesion: 0.12
Nodes (20): EMPTY, FormState, News, Foto, KATEGORI, GROUPS, Produk, ProfilInitial (+12 more)

### Community 3 - "ok"
Cohesion: 0.08
Nodes (50): POST(), cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, dynamic (+42 more)

### Community 4 - "AdminPermohonan.tsx"
Cohesion: 0.07
Nodes (44): AdminPermohonan(), ALASAN_TOLAK, BerkasItem, Detail, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+36 more)

### Community 5 - "AdminUsers.tsx"
Cohesion: 0.06
Nodes (40): POST(), CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers(), DetailUser (+32 more)

### Community 6 - "devDependencies"
Cohesion: 0.04
Nodes (48): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prisma, puppeteer-core, tailwindcss (+40 more)

### Community 7 - "layanan-forms.ts"
Cohesion: 0.06
Nodes (39): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient() (+31 more)

### Community 8 - "prisma.ts"
Cohesion: 0.09
Nodes (32): dynamic, PATCH(), STATUS_VALID, dynamic, POST(), dynamic, POST(), samarkanNama() (+24 more)

### Community 9 - "profile-tabs.tsx"
Cohesion: 0.08
Nodes (25): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+17 more)

### Community 10 - "notifyError"
Cohesion: 0.10
Nodes (31): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), EMPTY_FORM, FILE_FIELDS, FormData (+23 more)

### Community 11 - "statistik-kartu-editor.tsx"
Cohesion: 0.15
Nodes (22): Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid(), ParsedRow, toEdit() (+14 more)

### Community 12 - "useStaticContent"
Cohesion: 0.11
Nodes (18): HalamanTambahanClient(), EditableBlock(), ProdukDisdukcapilView(), ProdukItem, FaqItem, FaqList(), KebijakanPrivasiView(), BAGIAN (+10 more)

### Community 13 - "struktur-chart.tsx"
Cohesion: 0.13
Nodes (18): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+10 more)

### Community 14 - "static-content-registry.ts"
Cohesion: 0.06
Nodes (38): BULAN_PENDEK, GET(), HubungiKamiPage(), dynamic, metadata, dynamic, metadata, dynamic (+30 more)

### Community 15 - "send/route.ts"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 16 - "auth.ts"
Cohesion: 0.08
Nodes (33): DELETE(), dynamic, passwordCocok(), POST(), runtime, dynamic, VALID, DELETE() (+25 more)

### Community 17 - "footer.tsx"
Cohesion: 0.08
Nodes (19): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+11 more)

### Community 18 - "button.tsx"
Cohesion: 0.08
Nodes (41): KOSONG, clampKolom(), GaleriPage(), GalleryItem, KATEGORI_BAWAAN, KOLOM_PILIHAN, URUTAN, FieldEditor() (+33 more)

### Community 19 - "back-button.tsx"
Cohesion: 0.12
Nodes (14): AdminBerita(), DashboardBeritaPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic, DashboardKontenPage(), dynamic (+6 more)

### Community 20 - "utils.ts"
Cohesion: 0.16
Nodes (14): AKSI_STYLE, LogItem, Petugas, Values, OcrUploadButton(), OcrUploadButtonProps, OcrUploadResult, buttonVariants (+6 more)

### Community 21 - "ppid/[...slug]/page.tsx"
Cohesion: 0.10
Nodes (24): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, useInlineEdit(), ProfileTabs() (+16 more)

### Community 23 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 25 - "users/route.ts"
Cohesion: 0.12
Nodes (33): PATCH(), STATUS_VALID, GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), dynamic (+25 more)

### Community 26 - "halaman/[slug]/page.tsx"
Cohesion: 0.13
Nodes (19): AdminKonten(), flatten(), Leaf, MenuEntry, EditorNavigasi(), cariMenu(), dynamic, generateMetadata() (+11 more)

### Community 28 - "navbar.tsx"
Cohesion: 0.15
Nodes (14): DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon(), MobileMenuItem(), Navbar(), navigationIcons, SubDropdownItem() (+6 more)

### Community 29 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (20): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+12 more)

### Community 30 - "accessibility-widget.tsx"
Cohesion: 0.12
Nodes (20): cormorant, geistMono, geistSans, metadata, montserrat, AccessibilityWidget(), SPACING_LABEL, TileButton() (+12 more)

### Community 31 - "app/page.tsx"
Cohesion: 0.08
Nodes (21): smoothEase, AlurLayanan(), ease, STEPS, CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps (+13 more)

### Community 32 - "jam-layanan.ts"
Cohesion: 0.14
Nodes (24): dynamic, GET(), JamLayananEditor(), Toggle(), URUTAN_HARI, formatTanggalId(), hariIniZona(), PanelJamTutup() (+16 more)

### Community 33 - "PengajuanBaruClient.tsx"
Cohesion: 0.21
Nodes (11): DashboardPengajuanBaruPage(), dynamic, ICONS, PengajuanBaruClient(), SheetDescription(), SheetHeader(), Tabs(), TabsContent() (+3 more)

### Community 34 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 36 - "dashboard-sidebar.tsx"
Cohesion: 0.13
Nodes (20): DashboardLayout(), dynamic, ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DashboardSidebar(), DesktopSidebar(), GROUPS, groupsForLevel() (+12 more)

### Community 37 - "parse/route.ts"
Cohesion: 0.09
Nodes (30): dynamic, GET(), runtime, dynamic, maxDuration, runtime, Conflict, dynamic (+22 more)

### Community 38 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 39 - "stats.tsx"
Cohesion: 0.09
Nodes (19): DemografiKategoriPage(), DemografiMetric(), fmt(), OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi (+11 more)

### Community 40 - "profil/page.tsx"
Cohesion: 0.24
Nodes (8): ChangePasswordForm(), FotoProfilCard(), dynamic, ProfilPage(), ProfilForm(), CameraCapture(), CameraCaptureProps, keDataUrl()

### Community 41 - "RegisterContent.tsx"
Cohesion: 0.09
Nodes (29): ForgotPasswordPage(), LoginPage(), Providers(), SessionHydrator(), Kecamatan, namaWilayah, RegisterPage(), ResetPasswordPage() (+21 more)

### Community 43 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 44 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 45 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

### Community 46 - "FormKartu"
Cohesion: 0.33
Nodes (6): FormKartu(), simpan(), keSlug(), PpidAksiKartu(), hapus(), simpanDaftar()

### Community 47 - "tiket/[id]/route.ts"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 48 - "cn"
Cohesion: 0.11
Nodes (23): NotFound(), ImageColumnInput(), EditModeToggle(), IconPicker(), WarnaPicker(), ImageUploadField(), kecilkan(), TIPE_DITERIMA (+15 more)

### Community 49 - "users/[id]/route.ts"
Cohesion: 0.21
Nodes (14): DELETE(), dynamic, DELETE(), dynamic, PUT(), adalahDataUrlGambar(), DIR_KTP, DIR_SELFIE (+6 more)

### Community 50 - "log/page.tsx"
Cohesion: 0.40
Nodes (4): fmtWaktu(), LogAktivitasClient(), DashboardLogPage(), dynamic

### Community 51 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 52 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

### Community 53 - "useAppSelector"
Cohesion: 0.22
Nodes (12): InlineEditProvider(), isPublicPage(), useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch (+4 more)

### Community 54 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-dom, react-leaflet, @reduxjs/toolkit (+3 more)

### Community 55 - "navigasi/page.tsx"
Cohesion: 0.50
Nodes (3): DashboardNavigasiPage(), dynamic, metadata

### Community 57 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 58 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 59 - "uploads/[...path]/route.ts"
Cohesion: 0.28
Nodes (8): FOLDER_PUBLIK, GET(), MIME_BY_EXT, ROOT_PRIVAT, ROOT_PROFIL, ROOT_PUBLIK, tidakDitemukan(), isStaff()

### Community 60 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 61 - "pengaturan-pelayanan.tsx"
Cohesion: 0.31
Nodes (6): PengaturanPelayanan(), Checkbox(), PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem

### Community 64 - "AdminMedia.tsx"
Cohesion: 0.23
Nodes (9): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic, ImageCropperDialog(), MediaPickerProps, MediaItem, MediaUpload() (+1 more)

### Community 65 - "demografi-data.ts"
Cohesion: 0.40
Nodes (3): demografiData, DemografiDataset, TODO: ganti dengan query Prisma nyata setelah model demografi tersedia.

### Community 66 - "dashboard/demografi/page.tsx"
Cohesion: 0.40
Nodes (4): AdminDemografi(), downloadFile(), DashboardDemografiPage(), dynamic

### Community 68 - "deploy.sh"
Cohesion: 0.70
Nodes (4): err(), log(), deploy.sh script, warn()

### Community 69 - "server-bootstrap.sh"
Cohesion: 0.60
Nodes (4): DEBIAN_FRONTEND, log(), server-bootstrap.sh script, warn()

### Community 70 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 71 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

## Knowledge Gaps
- **536 isolated node(s):** `graphify`, `AktaKelahiranNikAdaModalProps`, `FormData`, `UploadedFile`, `AktaNikahModalProps` (+531 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 671 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **81 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `KIAModal.tsx`, `input.tsx`, `AdminPermohonan.tsx`, `AdminUsers.tsx`, `layanan-forms.ts`, `profile-tabs.tsx`, `notifyError`, `statistik-kartu-editor.tsx`, `useStaticContent`, `struktur-chart.tsx`, `static-content-registry.ts`, `button.tsx`, `utils.ts`, `ppid/[...slug]/page.tsx`, `halaman/[slug]/page.tsx`, `navbar.tsx`, `informasi-index.tsx`, `accessibility-widget.tsx`, `jam-layanan.ts`, `PengajuanBaruClient.tsx`, `dashboard-sidebar.tsx`, `stats.tsx`, `RegisterContent.tsx`, `log/page.tsx`, `notification-bell.tsx`, `pengaturan-pelayanan.tsx`, `AdminMedia.tsx`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Why does `getSession()` connect `ok` to `statistik-export.ts`, `AdminPermohonan.tsx`, `layanan-forms.ts`, `prisma.ts`, `auth.ts`, `footer.tsx`, `back-button.tsx`, `users/route.ts`, `informasi-index.tsx`, `PengajuanBaruClient.tsx`, `ktp/route.ts`, `dashboard-sidebar.tsx`, `parse/route.ts`, `profil/page.tsx`, `dashboard/kritik-saran/page.tsx`, `tiket/[id]/route.ts`, `users/[id]/route.ts`, `log/page.tsx`, `berita/[id]/route.ts`, `produk/page.tsx`, `navigasi/page.tsx`, `AdminPengaduan.tsx`, `skm/page.tsx`, `uploads/[...path]/route.ts`, `AdminMedia.tsx`, `dashboard/demografi/page.tsx`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `jam-layanan.ts`, `statistik-export.ts`, `ok`, `AdminPermohonan.tsx`, `parse/route.ts`, `profil/page.tsx`, `static-content-registry.ts`, `tiket/[id]/route.ts`, `auth.ts`, `users/[id]/route.ts`, `berita/[id]/route.ts`, `ppid/[...slug]/page.tsx`, `users/route.ts`, `halaman/[slug]/page.tsx`, `informasi-index.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **What connects `graphify`, `AktaKelahiranNikAdaModalProps`, `FormData` to the rest of the system?**
  _536 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `KIAModal.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08097079037800688 - nodes in this community are weakly interconnected._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `input.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11746031746031746 - nodes in this community are weakly interconnected._