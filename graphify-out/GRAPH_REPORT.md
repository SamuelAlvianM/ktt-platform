# Graph Report - sidako-platform  (2026-09-02)

## Corpus Check
- 335 files · ~225,760 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1801 nodes · 5052 edges · 164 communities (68 shown, 89 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `489664fe`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- statistik-export.ts
- AdminUsers.tsx
- useStaticContent
- AdminPermohonan.tsx
- users/route.ts
- devDependencies
- staff-pengajuan-form.tsx
- getSession
- auth.ts
- ok
- dialog.tsx
- AdminBerita.tsx
- KIAModal.tsx
- statistik-kartu-editor.tsx
- profile-tabs.tsx
- input.tsx
- cn
- footer.tsx
- informasi-index.tsx
- compilerOptions
- authSlice.ts
- Journal — SIDAKO (`sidako-platform`)
- App\Http\Controllers\Controller
- send/route.ts
- Illuminate\Http\Request
- KTPELModal.tsx
- PengajuanBaruClient.tsx
- Auth
- accessibility-widget.tsx
- [layanan]/page.tsx
- ktp/route.ts
- navigasi-tambahan.ts
- LoginContent.tsx
- profil-terhubung.tsx
- useAppSelector
- Validator
- parse/route.ts
- components.json
- struktur-editor.tsx
- back-button.tsx
- dashboard-sidebar.tsx
- formulir-ppid/page.tsx
- App\Models\Fronts\Permohonans\KedatanganModel
- users/[id]/route.ts
- app/page.tsx
- admin/demografi/export/route.ts
- RegisterContent.tsx
- navbar.tsx
- scripts
- notification-bell.tsx
- halaman/[slug]/page.tsx
- inline-edit.tsx
- office-map.tsx
- ppid/[...slug]/page.tsx
- peta-demografi.tsx
- stats.tsx
- CLAUDE.md
- package.json
- dashboard/page.tsx
- dependencies
- static-content-registry.ts
- AdminPengaduan.tsx
- skm/page.tsx
- pengaturan-pelayanan.tsx
- admin/skm/route.ts
- prisma.ts
- KKPerubahanBiodataModal.tsx
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
- `LabelSidebar()` --calls--> `cn()`  [EXTRACTED]
  components/shared/dashboard-sidebar.tsx → lib/utils.ts
- `ProfilPage()` --calls--> `getSession()`  [EXTRACTED]
  app/profil/page.tsx → lib/auth.ts
- `DashboardDemografiPage()` --calls--> `getSession()`  [EXTRACTED]
  app/dashboard/demografi/page.tsx → lib/auth.ts
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  components/ui/dialog.tsx → lib/utils.ts
- `ScrollColumn()` --calls--> `cn()`  [EXTRACTED]
  components/ui/time-picker.tsx → lib/utils.ts

## Import Cycles
- None detected.

## Communities (164 total, 89 thin omitted)

### Community 0 - "statistik-export.ts"
Cohesion: 0.08
Nodes (46): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, ONLINE_WINDOW_MS (+38 more)

### Community 1 - "AdminUsers.tsx"
Cohesion: 0.05
Nodes (48): dynamic, POST(), CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers() (+40 more)

### Community 2 - "useStaticContent"
Cohesion: 0.10
Nodes (18): HalamanTambahanClient(), EditableBlock(), ProdukDisdukcapilView(), ProdukItem, FaqItem, FaqList(), KebijakanPrivasiView(), BAGIAN (+10 more)

### Community 3 - "AdminPermohonan.tsx"
Cohesion: 0.07
Nodes (44): AdminPermohonan(), ALASAN_TOLAK, BerkasItem, Detail, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+36 more)

### Community 4 - "users/route.ts"
Cohesion: 0.18
Nodes (25): PATCH(), STATUS_VALID, GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST() (+17 more)

### Community 5 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, devDependencies, eslint, @tailwindcss/typography, tsx, tw-animate-css, @types/bcryptjs, @types/node (+5 more)

### Community 6 - "staff-pengajuan-form.tsx"
Cohesion: 0.06
Nodes (50): dynamic, GET(), validatePayload(), FormPageClient(), Props, StaffPengajuanForm(), Values, formatTanggalId() (+42 more)

### Community 7 - "getSession"
Cohesion: 0.10
Nodes (27): GET(), GET(), GET(), GET(), dynamic, GET(), runtime, GET() (+19 more)

### Community 8 - "auth.ts"
Cohesion: 0.09
Nodes (32): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+24 more)

### Community 9 - "ok"
Cohesion: 0.07
Nodes (47): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, dynamic, GET() (+39 more)

### Community 10 - "dialog.tsx"
Cohesion: 0.16
Nodes (15): AdminDemografi(), downloadFile(), AdminMedia(), fmtSize(), ImageCropperDialog(), ImageCropperDialogProps, MediaPickerProps, MediaItem (+7 more)

### Community 11 - "AdminBerita.tsx"
Cohesion: 0.15
Nodes (11): AdminBerita(), EMPTY, FormState, News, ImagePickerField(), ImagePickerFieldProps, MediaPicker(), RichEditor() (+3 more)

### Community 12 - "KIAModal.tsx"
Cohesion: 0.07
Nodes (50): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaNikahModalProps, FormData, UploadedFile, d(), FORM_PERMOHONAN (+42 more)

### Community 13 - "statistik-kartu-editor.tsx"
Cohesion: 0.13
Nodes (25): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+17 more)

### Community 14 - "profile-tabs.tsx"
Cohesion: 0.13
Nodes (16): BulletItem(), CONTENT, easeCustom, fadeUp(), GAMBAR_OVERRIDE_TABS, MaklumatPanel(), MottoPanel(), NumberedItem() (+8 more)

### Community 15 - "input.tsx"
Cohesion: 0.13
Nodes (23): Foto, KATEGORI, ProfilInitial, FormData, KKNumpangModalProps, UploadedFile, FormData, KKPisahKKModalProps (+15 more)

### Community 16 - "cn"
Cohesion: 0.12
Nodes (35): AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), KIAModal(), KKCetakUlangModal() (+27 more)

### Community 17 - "footer.tsx"
Cohesion: 0.12
Nodes (12): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+4 more)

### Community 18 - "informasi-index.tsx"
Cohesion: 0.12
Nodes (19): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+11 more)

### Community 19 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 20 - "authSlice.ts"
Cohesion: 0.14
Nodes (14): ForgotPasswordPage(), LoginPage(), SessionHydrator(), InlineEditProvider(), isPublicPage(), useAppDispatch(), authSlice, AuthState (+6 more)

### Community 21 - "Journal — SIDAKO (`sidako-platform`)"
Cohesion: 0.12
Nodes (16): 1. Identitas project, 2. Keadaan repo per 8 Agu 2026, 3. Status deploy — **sudah di-deploy**, 4. ✅ Blocker migrasi kolom `users` — SUDAH GUGUR, 5. Antrean SIDAKO, 6. Yang sudah selesai (jangan dikerjakan ulang), 7. Jebakan khusus SIDAKO, 8. Permintaan dinas — `Document from S.A.M` (dibaca 8 Agu 2026) (+8 more)

### Community 23 - "send/route.ts"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 25 - "KTPELModal.tsx"
Cohesion: 0.11
Nodes (28): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, KOSONG, GROUPS, Produk (+20 more)

### Community 26 - "PengajuanBaruClient.tsx"
Cohesion: 0.15
Nodes (15): ICONS, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+7 more)

### Community 28 - "accessibility-widget.tsx"
Cohesion: 0.21
Nodes (14): AccessibilityWidget(), SPACING_LABEL, TileButton(), A11Y_INIT_SCRIPT, A11Y_STORAGE_KEY, A11yPrefs, applyPrefs(), DEFAULT_PREFS (+6 more)

### Community 29 - "[layanan]/page.tsx"
Cohesion: 0.17
Nodes (12): AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient(), getLayanan() (+4 more)

### Community 30 - "ktp/route.ts"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 31 - "navigasi-tambahan.ts"
Cohesion: 0.15
Nodes (16): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, EditorNavigasi(), buatSlug() (+8 more)

### Community 32 - "LoginContent.tsx"
Cohesion: 0.23
Nodes (12): ResetPasswordPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 33 - "profil-terhubung.tsx"
Cohesion: 0.10
Nodes (18): StatCard(), FormKartu(), simpan(), keSlug(), PpidAksiKartu(), hapus(), simpanDaftar(), IKON_JENIS (+10 more)

### Community 34 - "useAppSelector"
Cohesion: 0.27
Nodes (10): useAppSelector, useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore() (+2 more)

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
Cohesion: 0.11
Nodes (15): DashboardBeritaPage(), dynamic, DashboardDemografiPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic, DashboardLogPage() (+7 more)

### Community 40 - "dashboard-sidebar.tsx"
Cohesion: 0.18
Nodes (16): ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DesktopSidebar(), GROUPS, groupsForLevel(), GRUP_OPD, KOLOM_BILAH, LabelSidebar() (+8 more)

### Community 41 - "formulir-ppid/page.tsx"
Cohesion: 0.22
Nodes (5): dynamic, metadata, dynamic, metadata, PpidLayananHalaman()

### Community 43 - "users/[id]/route.ts"
Cohesion: 0.19
Nodes (15): DELETE(), dynamic, GET(), DELETE(), dynamic, PUT(), adalahDataUrlGambar(), DIR_KTP (+7 more)

### Community 44 - "app/page.tsx"
Cohesion: 0.08
Nodes (22): smoothEase, AlurLayanan(), ease, STEPS, CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps (+14 more)

### Community 45 - "admin/demografi/export/route.ts"
Cohesion: 0.25
Nodes (11): dynamic, GET(), runtime, dynamic, GET(), runtime, addSheet(), buildDemografiWorkbook() (+3 more)

### Community 46 - "RegisterContent.tsx"
Cohesion: 0.22
Nodes (4): Kecamatan, namaWilayah, RegisterPage(), registerUser

### Community 47 - "navbar.tsx"
Cohesion: 0.12
Nodes (17): cormorant, geistMono, geistSans, metadata, montserrat, Providers(), KunjunganPing(), AuthArea() (+9 more)

### Community 48 - "scripts"
Cohesion: 0.18
Nodes (11): scripts, build, db:generate, db:migrate, db:push, db:seed, db:studio, dev (+3 more)

### Community 49 - "notification-bell.tsx"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 50 - "halaman/[slug]/page.tsx"
Cohesion: 0.38
Nodes (6): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage(), KUNCI_NAVIGASI, MenuTambahan

### Community 51 - "inline-edit.tsx"
Cohesion: 0.11
Nodes (24): clampKolom(), GaleriPage(), BlockEditorDialog(), Ctx, EditModeToggle(), InlineEditCtx, useInlineEdit(), clampKolom() (+16 more)

### Community 52 - "office-map.tsx"
Cohesion: 0.29
Nodes (4): OFFICE_LAT, OFFICE_LNG, pulseIcon, OfficeMap

### Community 53 - "ppid/[...slug]/page.tsx"
Cohesion: 0.11
Nodes (22): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, dynamic, ProdukPage() (+14 more)

### Community 54 - "peta-demografi.tsx"
Cohesion: 0.16
Nodes (14): metadata, fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA (+6 more)

### Community 55 - "stats.tsx"
Cohesion: 0.10
Nodes (25): DemografiKategoriPage(), DemografiMetric(), fmt(), Row, DemografiView(), fmt(), KOLOM_LABEL, labelKolom() (+17 more)

### Community 57 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 58 - "dashboard/page.tsx"
Cohesion: 0.06
Nodes (45): GET(), GET(), DashboardLayout(), dynamic, BULAN_PENDEK, DashboardPage(), dynamic, fmt() (+37 more)

### Community 59 - "dependencies"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-advanced-cropper, react-organizational-chart, sharp (+3 more)

### Community 60 - "static-content-registry.ts"
Cohesion: 0.10
Nodes (24): GET(), HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), PosterIkd(), WbsForm(), hubungiKamiContent (+16 more)

### Community 61 - "AdminPengaduan.tsx"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 62 - "skm/page.tsx"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 63 - "pengaturan-pelayanan.tsx"
Cohesion: 0.31
Nodes (6): PengaturanPelayanan(), Checkbox(), PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem

### Community 64 - "admin/skm/route.ts"
Cohesion: 0.60
Nodes (3): GET(), SKM_ASPEK, SKM_SKALA_MAX

### Community 65 - "prisma.ts"
Cohesion: 0.11
Nodes (27): PATCH(), STATUS_VALID, dynamic, POST(), POST(), POST(), POST(), ALLOWED_EXT (+19 more)

### Community 66 - "KKPerubahanBiodataModal.tsx"
Cohesion: 0.40
Nodes (4): FormData, JenisBiodataOption, KKPerubahanBiodataModalProps, UploadedFile

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
Cohesion: 0.10
Nodes (30): NotFound(), JamLayananEditor(), Toggle(), URUTAN_HARI, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModalProps (+22 more)

## Knowledge Gaps
- **552 isolated node(s):** `LAYANAN_KODE`, `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `STATUS_VALID` (+547 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 685 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **89 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `AdminUsers.tsx`, `useStaticContent`, `AdminPermohonan.tsx`, `staff-pengajuan-form.tsx`, `dialog.tsx`, `AdminBerita.tsx`, `KIAModal.tsx`, `statistik-kartu-editor.tsx`, `profile-tabs.tsx`, `input.tsx`, `informasi-index.tsx`, `KTPELModal.tsx`, `PengajuanBaruClient.tsx`, `accessibility-widget.tsx`, `[layanan]/page.tsx`, `navigasi-tambahan.ts`, `LoginContent.tsx`, `profil-terhubung.tsx`, `struktur-editor.tsx`, `dashboard-sidebar.tsx`, `formulir-ppid/page.tsx`, `app/page.tsx`, `navbar.tsx`, `notification-bell.tsx`, `inline-edit.tsx`, `ppid/[...slug]/page.tsx`, `stats.tsx`, `pengaturan-pelayanan.tsx`, `KKPerubahanBiodataModal.tsx`, `utils.ts`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Why does `getSession()` connect `getSession` to `statistik-export.ts`, `AdminUsers.tsx`, `AdminPermohonan.tsx`, `users/route.ts`, `auth.ts`, `ok`, `footer.tsx`, `informasi-index.tsx`, `[layanan]/page.tsx`, `ktp/route.ts`, `navigasi-tambahan.ts`, `parse/route.ts`, `back-button.tsx`, `users/[id]/route.ts`, `admin/demografi/export/route.ts`, `dashboard/page.tsx`, `AdminPengaduan.tsx`, `skm/page.tsx`, `admin/skm/route.ts`, `prisma.ts`, `navigasi/page.tsx`, `dashboard/kritik-saran/page.tsx`, `produk/page.tsx`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `prisma` connect `prisma.ts` to `admin/skm/route.ts`, `AdminUsers.tsx`, `statistik-export.ts`, `AdminPermohonan.tsx`, `parse/route.ts`, `users/route.ts`, `staff-pengajuan-form.tsx`, `getSession`, `auth.ts`, `ok`, `users/[id]/route.ts`, `statistik-kartu-editor.tsx`, `admin/demografi/export/route.ts`, `halaman/[slug]/page.tsx`, `informasi-index.tsx`, `ppid/[...slug]/page.tsx`, `dashboard/page.tsx`, `static-content-registry.ts`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **What connects `LAYANAN_KODE`, `SUBMIT_ACTIONS`, `FETCH_ACTIONS` to the rest of the system?**
  _552 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `statistik-export.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08244897959183674 - nodes in this community are weakly interconnected._
- **Should `AdminUsers.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05096153846153846 - nodes in this community are weakly interconnected._
- **Should `useStaticContent` be split into smaller, more focused modules?**
  _Cohesion score 0.10416666666666667 - nodes in this community are weakly interconnected._