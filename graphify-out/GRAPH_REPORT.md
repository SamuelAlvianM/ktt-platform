# Graph Report - sidako-platform  (2026-09-02)

## Corpus Check
- 333 files · ~308,254 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1782 nodes · 4974 edges · 155 communities (69 shown, 79 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3153921e`
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
- tiket/[id]/route.ts
- getSession
- ok
- dialog.tsx
- KKPerubahanBiodataModal.tsx
- KKTambahAnakModal.tsx
- statistik-kartu-editor.tsx
- static-content-registry.ts
- button.tsx
- cn
- footer.tsx
- informasi-index.tsx
- compilerOptions
- jam-layanan.ts
- Journal — SIDAKO (`sidako-platform`)
- App\Http\Controllers\Controller
- send/route.ts
- Illuminate\Http\Request
- KIAModal.tsx
- navbar.tsx
- Auth
- accessibility-widget.tsx
- berita/[id]/route.ts
- ktp/route.ts
- EditorNavigasi.tsx
- RegisterContent.tsx
- profil-terhubung.tsx
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
- demografi-kategori.ts
- demografi-view.tsx
- app/layout.tsx
- dashboard/berita/page.tsx
- notification-bell.tsx
- verifyRecaptcha
- galeri-profil.tsx
- syarat-ketentuan-view.tsx
- ppid/[...slug]/page.tsx
- peta-demografi.tsx
- stats.tsx
- CLAUDE.md
- kelola-kartu.tsx
- pengajuan/page.tsx
- dependencies
- editable-info-page.tsx
- AdminPengaduan.tsx
- skm/page.tsx
- pengaturan-pelayanan.tsx
- admin/skm/route.ts
- prisma.ts
- AdminMedia.tsx
- navigasi/page.tsx
- dashboard/kritik-saran/page.tsx
- SIDAKO Platform
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
- utils.ts
- react-day-picker
- react-dropzone
- react-google-recaptcha-v3
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
- users
- Zip
- gis/page.tsx

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
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts
- `ScrollColumn()` --calls--> `cn()`  [EXTRACTED]
  components/ui/time-picker.tsx → lib/utils.ts
- `IconPicker()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/statistik-kartu-editor.tsx → lib/utils.ts
- `WarnaPicker()` --calls--> `cn()`  [EXTRACTED]
  components/landingpage/statistik-kartu-editor.tsx → lib/utils.ts
- `ProfilPage()` --calls--> `getSession()`  [EXTRACTED]
  app/profil/page.tsx → lib/auth.ts

## Import Cycles
- None detected.

## Communities (155 total, 79 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 1 - "AdminUsers.tsx"
Cohesion: 0.06
Nodes (41): dynamic, POST(), CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers() (+33 more)

### Community 2 - "inline-edit.tsx"
Cohesion: 0.11
Nodes (24): clampKolom(), GaleriPage(), HalamanTambahanClient(), Ctx, EditableBlock(), EditModeToggle(), InlineEditCtx, InlineEditProvider() (+16 more)

### Community 3 - "AdminPermohonan.tsx"
Cohesion: 0.06
Nodes (46): AdminPermohonan(), ALASAN_TOLAK, BerkasItem, Detail, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+38 more)

### Community 4 - "users/route.ts"
Cohesion: 0.18
Nodes (25): PATCH(), STATUS_VALID, GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST() (+17 more)

### Community 5 - "devDependencies"
Cohesion: 0.04
Nodes (48): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prisma, puppeteer-core, tailwindcss (+40 more)

### Community 6 - "layanan-forms.ts"
Cohesion: 0.06
Nodes (39): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient() (+31 more)

### Community 7 - "tiket/[id]/route.ts"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 8 - "getSession"
Cohesion: 0.08
Nodes (42): POST(), DELETE(), dynamic, GET(), PUT(), dynamic, passwordCocok(), POST() (+34 more)

### Community 9 - "ok"
Cohesion: 0.07
Nodes (46): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, dynamic, GET() (+38 more)

### Community 10 - "dialog.tsx"
Cohesion: 0.14
Nodes (20): AdminDemografi(), downloadFile(), DashboardDemografiPage(), dynamic, DemografiMetric(), fmt(), Row, ImageCropperDialog() (+12 more)

### Community 11 - "KKPerubahanBiodataModal.tsx"
Cohesion: 0.11
Nodes (16): EMPTY, FormState, News, Foto, KATEGORI, ImagePickerField(), ImagePickerFieldProps, MediaPicker() (+8 more)

### Community 12 - "KKTambahAnakModal.tsx"
Cohesion: 0.09
Nodes (40): d(), FORM_PERMOHONAN, FormPermohonanProps, memuat(), Dialog(), DialogClose, DialogContent(), DialogDescription() (+32 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.13
Nodes (25): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+17 more)

### Community 14 - "static-content-registry.ts"
Cohesion: 0.20
Nodes (13): GET(), BlockEditorDialog(), blokGaleriPpid(), blokHalamanTambahan(), blokInfoHalaman(), DKB_PERIODE_KUNCI, getStaticBlock(), getStaticDefaults() (+5 more)

### Community 15 - "button.tsx"
Cohesion: 0.12
Nodes (25): NotFound(), ProfilInitial, AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile (+17 more)

### Community 16 - "cn"
Cohesion: 0.09
Nodes (41): FieldEditor(), IconColumnInput(), ImageColumnInput(), AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal() (+33 more)

### Community 17 - "footer.tsx"
Cohesion: 0.12
Nodes (12): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+4 more)

### Community 18 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (20): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+12 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "jam-layanan.ts"
Cohesion: 0.13
Nodes (23): dynamic, GET(), JamLayananEditor(), Toggle(), URUTAN_HARI, formatTanggalId(), hariIniZona(), PanelJamTutup() (+15 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.12
Nodes (16): 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO, 8. Permintaan dinas — `Document from S.A.M` (dibaca 8 Agu 2026) (+8 more)

### Community 23 - "send/route.ts"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 25 - "KIAModal.tsx"
Cohesion: 0.12
Nodes (27): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, GROUPS, Produk, GalleryItem (+19 more)

### Community 26 - "navbar.tsx"
Cohesion: 0.09
Nodes (25): DashboardPengajuanBaruPage(), dynamic, ICONS, PengajuanBaruClient(), DropdownItem(), DropdownMenu(), isExternalHref(), MobileItemIcon() (+17 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.23
Nodes (13): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS, FONT_DEFAULT_IDX (+5 more)

### Community 29 - "berita/[id]/route.ts"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "EditorNavigasi.tsx"
Cohesion: 0.14
Nodes (21): AdminKonten(), flatten(), Leaf, MenuEntry, EditorNavigasi(), KOSONG, cariMenu(), dynamic (+13 more)

### Community 32 - "RegisterContent.tsx"
Cohesion: 0.09
Nodes (28): ForgotPasswordPage(), LoginPage(), SessionHydrator(), Kecamatan, namaWilayah, RegisterPage(), ResetPasswordPage(), MenuItem (+20 more)

### Community 33 - "profil-terhubung.tsx"
Cohesion: 0.17
Nodes (7): IKON_JENIS, KUNCI_PROFIL, LABEL_BERANDA, MaklumatPanel(), ProfilJenis, StrukturEditor, ProfilGambar()

### Community 34 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

### Community 36 - "parse/route.ts"
Cohesion: 0.15
Nodes (16): dynamic, maxDuration, runtime, Conflict, dynamic, maxDuration, POST(), runtime (+8 more)

### Community 37 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 38 - "struktur-editor.tsx"
Cohesion: 0.08
Nodes (34): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), BulletItem(), CONTENT (+26 more)

### Community 39 - "back-button.tsx"
Cohesion: 0.14
Nodes (11): AdminGaleri(), DashboardGaleriPage(), dynamic, DashboardKontenPage(), dynamic, DashboardLogPage(), dynamic, DashboardUsersPage() (+3 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.14
Nodes (19): DashboardLayout(), dynamic, ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DashboardSidebar(), DesktopSidebar(), GROUPS, groupsForLevel() (+11 more)

### Community 41 - "ppid-layanan-halaman.tsx"
Cohesion: 0.21
Nodes (7): dynamic, metadata, dynamic, metadata, PpidLayananHalaman(), PpidSeksi, InfoPageContent

### Community 43 - "users/[id]/route.ts"
Cohesion: 0.19
Nodes (14): dynamic, GET(), DELETE(), dynamic, PUT(), adalahDataUrlGambar(), DIR_KTP, DIR_SELFIE (+6 more)

### Community 44 - "app/page.tsx"
Cohesion: 0.08
Nodes (21): smoothEase, AlurLayanan(), ease, STEPS, CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps (+13 more)

### Community 45 - "demografi-kategori.ts"
Cohesion: 0.23
Nodes (12): dynamic, GET(), runtime, dynamic, GET(), runtime, addSheet(), buildDemografiWorkbook() (+4 more)

### Community 46 - "demografi-view.tsx"
Cohesion: 0.29
Nodes (9): DemografiKategoriPage(), DemografiView(), fmt(), KOLOM_LABEL, labelKolom(), Row, sumKolom(), DEMOGRAFI_KATEGORI (+1 more)

### Community 47 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), A11Y_INIT_SCRIPT

### Community 48 - "dashboard/berita/page.tsx"
Cohesion: 0.50
Nodes (3): AdminBerita(), DashboardBeritaPage(), dynamic

### Community 49 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 50 - "verifyRecaptcha"
Cohesion: 0.46
Nodes (5): POST(), POST(), pesanLoginStatus(), createSession(), verifyRecaptcha()

### Community 51 - "galeri-profil.tsx"
Cohesion: 0.18
Nodes (12): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+4 more)

### Community 52 - "syarat-ketentuan-view.tsx"
Cohesion: 0.21
Nodes (8): BAGIAN, Data, SyaratKetentuanView(), SyaratLayananTabs(), KasusLayanan, LayananSyarat, SYARAT_KATEGORI, SYARAT_LAYANAN

### Community 53 - "ppid/[...slug]/page.tsx"
Cohesion: 0.14
Nodes (13): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, PpidCampur(), TAB (+5 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.24
Nodes (11): fmt(), Marker, PetaDemografi(), Row, GEO_BY_NAMA, geoForWilayah(), KECAMATAN_GEO, KecamatanGeo (+3 more)

### Community 55 - "stats.tsx"
Cohesion: 0.11
Nodes (14): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+6 more)

### Community 57 - "kelola-kartu.tsx"
Cohesion: 0.26
Nodes (10): StatCard(), FormKartu(), simpan(), keSlug(), PpidAksiKartu(), hapus(), simpanDaftar(), getIcon() (+2 more)

### Community 58 - "pengajuan/page.tsx"
Cohesion: 0.23
Nodes (7): dynamic, UserPengajuanPage(), Permohonan, RiwayatList(), STATUS_CONFIG, TABS, useInfiniteScroll()

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-advanced-cropper, react-organizational-chart, sharp (+3 more)

### Community 60 - "editable-info-page.tsx"
Cohesion: 0.11
Nodes (19): HubungiKamiPage(), dynamic, ProdukPage(), PusatBantuanPage(), sections, WbsPage(), EditableInfoPage(), PosterIkd() (+11 more)

### Community 61 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "pengaturan-pelayanan.tsx"
Cohesion: 0.38
Nodes (5): PengaturanPelayanan(), PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem

### Community 64 - "admin/skm/route.ts"
Cohesion: 0.32
Nodes (5): GET(), POST(), destroySession(), SKM_ASPEK, SKM_SKALA_MAX

### Community 65 - "prisma.ts"
Cohesion: 0.12
Nodes (25): PATCH(), STATUS_VALID, dynamic, POST(), POST(), ALLOWED_EXT, FETCH_ACTIONS, LAYANAN_KODE (+17 more)

### Community 66 - "AdminMedia.tsx"
Cohesion: 0.47
Nodes (4): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic

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
Cohesion: 0.09
Nodes (34): Values, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModalProps, FormData, UploadedFile, KkScanFieldProps (+26 more)

### Community 165 - "gis/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, PetaDemografi, PetaDemografiLoader()

## Knowledge Gaps
- **547 isolated node(s):** `1. Identitas project`, `2. Keadaan repo per 8 Agu 2026`, `3. Status deploy — **sudah di-deploy**`, `4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR`, `Wajib` (+542 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 679 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **79 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminUsers.tsx`, `inline-edit.tsx`, `AdminPermohonan.tsx`, `layanan-forms.ts`, `dialog.tsx`, `KKPerubahanBiodataModal.tsx`, `KKTambahAnakModal.tsx`, `statistik-kartu-editor.tsx`, `static-content-registry.ts`, `button.tsx`, `informasi-index.tsx`, `jam-layanan.ts`, `KIAModal.tsx`, `navbar.tsx`, `accessibility-widget.tsx`, `EditorNavigasi.tsx`, `RegisterContent.tsx`, `profil-terhubung.tsx`, `struktur-editor.tsx`, `dashboard-sidebar.tsx`, `ppid-layanan-halaman.tsx`, `demografi-view.tsx`, `notification-bell.tsx`, `stats.tsx`, `kelola-kartu.tsx`, `pengaturan-pelayanan.tsx`, `utils.ts`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `statistik-export.ts`, `AdminUsers.tsx`, `AdminPermohonan.tsx`, `users/route.ts`, `layanan-forms.ts`, `tiket/[id]/route.ts`, `ok`, `dialog.tsx`, `footer.tsx`, `informasi-index.tsx`, `navbar.tsx`, `berita/[id]/route.ts`, `ktp/route.ts`, `parse/route.ts`, `back-button.tsx`, `dashboard-sidebar.tsx`, `users/[id]/route.ts`, `demografi-kategori.ts`, `dashboard/berita/page.tsx`, `pengajuan/page.tsx`, `AdminPengaduan.tsx`, `skm/page.tsx`, `admin/skm/route.ts`, `prisma.ts`, `AdminMedia.tsx`, `navigasi/page.tsx`, `dashboard/kritik-saran/page.tsx`, `produk/page.tsx`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `statistik-export.ts`, `AdminUsers.tsx`, `AdminPermohonan.tsx`, `users/route.ts`, `tiket/[id]/route.ts`, `getSession`, `ok`, `statistik-kartu-editor.tsx`, `static-content-registry.ts`, `informasi-index.tsx`, `jam-layanan.ts`, `berita/[id]/route.ts`, `EditorNavigasi.tsx`, `parse/route.ts`, `ppid-layanan-halaman.tsx`, `users/[id]/route.ts`, `demografi-kategori.ts`, `verifyRecaptcha`, `ppid/[...slug]/page.tsx`, `editable-info-page.tsx`, `admin/skm/route.ts`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `1. Identitas project`, `2. Keadaan repo per 8 Agu 2026`, `3. Status deploy — **sudah di-deploy**` to the rest of the system?**
  _547 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `AdminUsers.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05779220779220779 - nodes in this community are weakly interconnected._
- **Should `inline-edit.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10634920634920635 - nodes in this community are weakly interconnected._