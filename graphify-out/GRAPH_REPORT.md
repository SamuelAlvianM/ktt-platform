# Graph Report - sidako-platform  (2026-09-01)

## Corpus Check
- 333 files · ~308,254 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1758 nodes · 4951 edges · 153 communities (67 shown, 79 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0304e5b8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- AdminUsers.tsx
- inline-edit.tsx
- AdminPermohonan.tsx
- users/route.ts
- devDependencies
- layanan-forms.ts
- getSession
- prisma.ts
- ok
- stats.tsx
- input.tsx
- KKNumpangModal.tsx
- statistik-kartu-editor.tsx
- static-content-registry.ts
- AktaKelahiranNikTidakAdaModal.tsx
- cn
- footer.tsx
- informasi-index.tsx
- compilerOptions
- jam-layanan.ts
- notifyError
- App\Http\Controllers\Controller
- send/route.ts
- Illuminate\Http\Request
- AktaNikahModal.tsx
- navbar.tsx
- Auth
- accessibility-widget.tsx
- fail
- ktp/route.ts
- halaman/[slug]/page.tsx
- LoginContent.tsx
- profile-tabs.tsx
- useAppSelector
- Validator
- parse/route.ts
- components.json
- struktur-editor.tsx
- back-button.tsx
- dashboard-sidebar.tsx
- ppid-layanan-halaman.tsx
- App\Models\Fronts\Permohonans\KedatanganModel
- users/[id]/route.ts
- app/page.tsx
- [layanan]/page.tsx
- admin/demografi/export/route.ts
- authSlice.ts
- AdminBerita.tsx
- RegisterContent.tsx
- api/permohonan/route.ts
- galeri-profil.tsx
- syarat-ketentuan-view.tsx
- ppid/[...slug]/page.tsx
- peta-demografi.tsx
- AktaKelahiranNikAdaModal.tsx
- CLAUDE.md
- utils.ts
- pengajuan/page.tsx
- dependencies
- AdminPengaduan.tsx
- skm/page.tsx
- pengaturan-pelayanan.tsx
- KIAModal.tsx
- [action]/route.ts
- produk/[...slug]/page.tsx
- carousel.tsx
- prisma
- dashboard/kritik-saran/page.tsx
- log/page.tsx
- produk/page.tsx
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
3. `getSession()` - 144 edges
4. `fail()` - 137 edges
5. `prisma` - 70 edges
6. `Button()` - 68 edges
7. `Input()` - 54 edges
8. `catatAktivitas()` - 43 edges
9. `Label()` - 40 edges
10. `notifyError()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `DashboardUsersPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/users/page.tsx → lib/auth.ts
- `ProfilPage()` --calls--> `getSession()`  [EXTRACTED]
  app/profil/page.tsx → lib/auth.ts
- `Toggle()` --calls--> `cn()`  [EXTRACTED]
  components/dashboard/jam-layanan-editor.tsx → lib/utils.ts
- `TileButton()` --calls--> `cn()`  [EXTRACTED]
  components/shared/accessibility-widget.tsx → lib/utils.ts
- `LabelSidebar()` --calls--> `cn()`  [EXTRACTED]
  components/shared/dashboard-sidebar.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (153 total, 79 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 1 - "AdminUsers.tsx"
Cohesion: 0.05
Nodes (41): dynamic, POST(), CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers() (+33 more)

### Community 2 - "inline-edit.tsx"
Cohesion: 0.09
Nodes (32): clampKolom(), GaleriPage(), GalleryItem, KATEGORI_BAWAAN, KOLOM_PILIHAN, URUTAN, HalamanTambahanClient(), FieldEditor() (+24 more)

### Community 3 - "AdminPermohonan.tsx"
Cohesion: 0.07
Nodes (44): AdminPermohonan(), ALASAN_TOLAK, BerkasItem, Detail, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+36 more)

### Community 4 - "users/route.ts"
Cohesion: 0.10
Nodes (41): PATCH(), STATUS_VALID, PATCH(), STATUS_VALID, GET(), NAMA_LEVEL, PATCH(), POST() (+33 more)

### Community 5 - "devDependencies"
Cohesion: 0.04
Nodes (48): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prisma, puppeteer-core, tailwindcss (+40 more)

### Community 6 - "layanan-forms.ts"
Cohesion: 0.09
Nodes (24): StaffPengajuanForm(), useStatusJamLayanan(), useImageViewer(), catatanSection, f(), FieldDef, FieldType, kelahiranDokumen (+16 more)

### Community 7 - "getSession"
Cohesion: 0.09
Nodes (30): dynamic, GET(), GET(), GET(), GET(), PATCH(), dynamic, GET() (+22 more)

### Community 8 - "prisma.ts"
Cohesion: 0.09
Nodes (31): DELETE(), PUT(), requireAdmin(), uniqueSlug(), DELETE(), dynamic, GET(), PUT() (+23 more)

### Community 9 - "ok"
Cohesion: 0.09
Nodes (26): GET(), POST(), POST(), GET(), GET(), GET(), dynamic, POST() (+18 more)

### Community 10 - "stats.tsx"
Cohesion: 0.06
Nodes (42): EditorNavigasi(), KOSONG, IconColumnInput(), DemografiMetric(), fmt(), Row, OFFICE_LAT, OFFICE_LNG (+34 more)

### Community 11 - "input.tsx"
Cohesion: 0.13
Nodes (21): AdminMedia(), fmtSize(), Props, Values, AktaKematianModalProps, FormData, UploadedFile, KkScanFieldProps (+13 more)

### Community 12 - "KKNumpangModal.tsx"
Cohesion: 0.11
Nodes (30): Dialog(), DialogClose, DialogContent(), DialogDescription(), DialogFooter, DialogHeader(), DialogTitle(), DialogTrigger (+22 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.10
Nodes (35): BULAN_PENDEK, GET(), AdminDemografi(), downloadFile(), DemografiKategoriPage(), Conflict, DemografiEditor(), digits() (+27 more)

### Community 14 - "static-content-registry.ts"
Cohesion: 0.11
Nodes (23): HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), EditableInfoPage(), PosterIkd(), WbsForm(), hubungiKamiContent (+15 more)

### Community 15 - "AktaKelahiranNikTidakAdaModal.tsx"
Cohesion: 0.16
Nodes (15): ProfilInitial, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, FormData, KKCetakUlangModalProps, UploadedFile, ASPEK (+7 more)

### Community 16 - "cn"
Cohesion: 0.09
Nodes (30): NotFound(), ImageColumnInput(), EditModeToggle(), IconPicker(), WarnaPicker(), MapCard(), ServiceCard(), TrendChart() (+22 more)

### Community 17 - "footer.tsx"
Cohesion: 0.09
Nodes (16): INFO, metadata, ArticleCard(), BeritaListPage(), News, tglID(), News, metadata (+8 more)

### Community 18 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (20): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+12 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "jam-layanan.ts"
Cohesion: 0.13
Nodes (23): dynamic, GET(), JamLayananEditor(), Toggle(), URUTAN_HARI, formatTanggalId(), hariIniZona(), PanelJamTutup() (+15 more)

### Community 21 - "notifyError"
Cohesion: 0.13
Nodes (25): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), KIAModal(), KKCetakUlangModal() (+17 more)

### Community 23 - "send/route.ts"
Cohesion: 0.16
Nodes (22): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, fonnteAktif() (+14 more)

### Community 25 - "AktaNikahModal.tsx"
Cohesion: 0.15
Nodes (21): AKSI_STYLE, LogItem, Petugas, GROUPS, Produk, AktaNikahModalProps, FormData, UploadedFile (+13 more)

### Community 26 - "navbar.tsx"
Cohesion: 0.11
Nodes (21): DashboardPengajuanBaruPage(), dynamic, ICONS, PengajuanBaruClient(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon() (+13 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.12
Nodes (20): cormorant, geistMono, geistSans, metadata, montserrat, AccessibilityWidget(), SPACING_LABEL, TileButton() (+12 more)

### Community 29 - "fail"
Cohesion: 0.16
Nodes (19): GET(), POST(), requireAdmin(), uniqueSlug(), cekPetugas(), DELETE(), dynamic, GET() (+11 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "halaman/[slug]/page.tsx"
Cohesion: 0.13
Nodes (18): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, cariMenu(), dynamic (+10 more)

### Community 32 - "LoginContent.tsx"
Cohesion: 0.19
Nodes (13): LoginPage(), ResetPasswordPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardContent(), CardDescription() (+5 more)

### Community 33 - "profile-tabs.tsx"
Cohesion: 0.08
Nodes (25): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+17 more)

### Community 34 - "useAppSelector"
Cohesion: 0.17
Nodes (17): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif(), useAppSelector (+9 more)

### Community 36 - "parse/route.ts"
Cohesion: 0.15
Nodes (17): dynamic, maxDuration, POST(), runtime, Conflict, dynamic, maxDuration, POST() (+9 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "struktur-editor.tsx"
Cohesion: 0.18
Nodes (18): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), StrukturChart, OrgBox() (+10 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.10
Nodes (16): DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic, DashboardMediaPage(), dynamic, DashboardNavigasiPage() (+8 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.15
Nodes (17): DashboardLayout(), dynamic, ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DashboardSidebar(), DesktopSidebar(), GROUPS, groupsForLevel() (+9 more)

### Community 41 - "ppid-layanan-halaman.tsx"
Cohesion: 0.16
Nodes (9): dynamic, metadata, dynamic, metadata, PpidLayananHalaman(), PpidSeksi, InfoBerkas, InfoPage() (+1 more)

### Community 43 - "users/[id]/route.ts"
Cohesion: 0.19
Nodes (15): DELETE(), dynamic, GET(), DELETE(), dynamic, PUT(), adalahDataUrlGambar(), DIR_KTP (+7 more)

### Community 44 - "app/page.tsx"
Cohesion: 0.15
Nodes (11): smoothEase, AlurLayanan(), ease, STEPS, News, QuickHighlights(), tglID(), RelasiTerkait() (+3 more)

### Community 45 - "[layanan]/page.tsx"
Cohesion: 0.16
Nodes (14): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient() (+6 more)

### Community 46 - "admin/demografi/export/route.ts"
Cohesion: 0.19
Nodes (13): dynamic, GET(), runtime, dynamic, GET(), runtime, dynamic, GET() (+5 more)

### Community 47 - "authSlice.ts"
Cohesion: 0.15
Nodes (15): ForgotPasswordPage(), Providers(), SessionHydrator(), InlineEditProvider(), isPublicPage(), AuthArea(), useAppDispatch(), authSlice (+7 more)

### Community 48 - "AdminBerita.tsx"
Cohesion: 0.16
Nodes (10): AdminBerita(), EMPTY, FormState, News, DashboardBeritaPage(), dynamic, RichEditor(), RichEditorProps (+2 more)

### Community 49 - "RegisterContent.tsx"
Cohesion: 0.17
Nodes (8): Kecamatan, namaWilayah, RegisterPage(), ImageUploadField(), kecilkan(), TIPE_DITERIMA, labelKolom(), registerUser

### Community 50 - "api/permohonan/route.ts"
Cohesion: 0.24
Nodes (10): POST(), POST(), GET(), POST(), GET(), POST(), pesanLoginStatus(), createSession() (+2 more)

### Community 51 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

### Community 52 - "syarat-ketentuan-view.tsx"
Cohesion: 0.21
Nodes (8): BAGIAN, Data, SyaratKetentuanView(), SyaratLayananTabs(), KasusLayanan, LayananSyarat, SYARAT_KATEGORI, SYARAT_LAYANAN

### Community 53 - "ppid/[...slug]/page.tsx"
Cohesion: 0.19
Nodes (11): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, PpidCampur(), TAB (+3 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.16
Nodes (14): metadata, fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA (+6 more)

### Community 55 - "AktaKelahiranNikAdaModal.tsx"
Cohesion: 0.50
Nodes (3): AktaKelahiranNikAdaModalProps, FormData, UploadedFile

### Community 57 - "utils.ts"
Cohesion: 0.14
Nodes (19): Foto, KATEGORI, AktaPerceraianModalProps, FormData, UploadedFile, FormData, JenisBiodataOption, KKPerubahanBiodataModalProps (+11 more)

### Community 58 - "pengajuan/page.tsx"
Cohesion: 0.23
Nodes (7): dynamic, UserPengajuanPage(), Permohonan, RiwayatList(), STATUS_CONFIG, TABS, useInfiniteScroll()

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-dom, react-leaflet, @reduxjs/toolkit (+3 more)

### Community 61 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "pengaturan-pelayanan.tsx"
Cohesion: 0.31
Nodes (6): PengaturanPelayanan(), Checkbox(), PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem

### Community 64 - "KIAModal.tsx"
Cohesion: 0.18
Nodes (10): d(), FORM_PERMOHONAN, FormPermohonanProps, memuat(), EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps (+2 more)

### Community 65 - "[action]/route.ts"
Cohesion: 0.32
Nodes (7): ALLOWED_EXT, FETCH_ACTIONS, LAYANAN_KODE, POST(), SUBMIT_ACTIONS, validatePayload(), validateLayananPayload()

### Community 66 - "produk/[...slug]/page.tsx"
Cohesion: 0.32
Nodes (6): dynamic, ProdukPage(), DOKUMEN_KATEGORI, DOKUMEN_KEYS, dokumenJenisForPath(), DokumenKategori

### Community 67 - "carousel.tsx"
Cohesion: 0.25
Nodes (6): CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps, TODO: ganti `image` dengan foto asli SIDAKO/Disdukcapil Tana Tidung —, TEXT_VARIANTS

### Community 68 - "prisma"
Cohesion: 0.48
Nodes (4): GET(), prisma, SKM_ASPEK, SKM_SKALA_MAX

### Community 69 - "dashboard/kritik-saran/page.tsx"
Cohesion: 0.40
Nodes (4): AdminKritikSaran(), Item, DashboardKritikSaranPage(), dynamic

### Community 71 - "log/page.tsx"
Cohesion: 0.40
Nodes (4): fmtWaktu(), LogAktivitasClient(), DashboardLogPage(), dynamic

### Community 72 - "produk/page.tsx"
Cohesion: 0.40
Nodes (4): AdminProduk(), DashboardProdukPage(), dynamic, getDokumenKategori()

### Community 74 - "eslint.config.mjs"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 75 - "seed-berita.ts"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

## Knowledge Gaps
- **531 isolated node(s):** `Props`, `Values`, `TabConfig`, `TABS`, `GAMBAR_OVERRIDE_TABS` (+526 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 661 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **79 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminUsers.tsx`, `inline-edit.tsx`, `AdminPermohonan.tsx`, `layanan-forms.ts`, `stats.tsx`, `input.tsx`, `KKNumpangModal.tsx`, `statistik-kartu-editor.tsx`, `AktaKelahiranNikTidakAdaModal.tsx`, `informasi-index.tsx`, `jam-layanan.ts`, `notifyError`, `AktaNikahModal.tsx`, `navbar.tsx`, `accessibility-widget.tsx`, `halaman/[slug]/page.tsx`, `LoginContent.tsx`, `profile-tabs.tsx`, `useAppSelector`, `struktur-editor.tsx`, `dashboard-sidebar.tsx`, `ppid-layanan-halaman.tsx`, `[layanan]/page.tsx`, `authSlice.ts`, `AdminBerita.tsx`, `RegisterContent.tsx`, `AktaKelahiranNikAdaModal.tsx`, `utils.ts`, `pengaturan-pelayanan.tsx`, `KIAModal.tsx`, `log/page.tsx`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `statistik-export.ts`, `AdminUsers.tsx`, `AdminPermohonan.tsx`, `users/route.ts`, `prisma.ts`, `ok`, `footer.tsx`, `informasi-index.tsx`, `navbar.tsx`, `fail`, `ktp/route.ts`, `halaman/[slug]/page.tsx`, `parse/route.ts`, `back-button.tsx`, `dashboard-sidebar.tsx`, `users/[id]/route.ts`, `[layanan]/page.tsx`, `admin/demografi/export/route.ts`, `AdminBerita.tsx`, `api/permohonan/route.ts`, `pengajuan/page.tsx`, `AdminPengaduan.tsx`, `skm/page.tsx`, `[action]/route.ts`, `prisma`, `dashboard/kritik-saran/page.tsx`, `log/page.tsx`, `produk/page.tsx`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma` to `statistik-export.ts`, `AdminUsers.tsx`, `AdminPermohonan.tsx`, `users/route.ts`, `getSession`, `prisma.ts`, `ok`, `statistik-kartu-editor.tsx`, `informasi-index.tsx`, `jam-layanan.ts`, `fail`, `halaman/[slug]/page.tsx`, `parse/route.ts`, `ppid-layanan-halaman.tsx`, `users/[id]/route.ts`, `admin/demografi/export/route.ts`, `api/permohonan/route.ts`, `ppid/[...slug]/page.tsx`, `[action]/route.ts`, `produk/[...slug]/page.tsx`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **What connects `Props`, `Values`, `TabConfig` to the rest of the system?**
  _531 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `AdminUsers.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05451127819548872 - nodes in this community are weakly interconnected._
- **Should `inline-edit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08502415458937199 - nodes in this community are weakly interconnected._