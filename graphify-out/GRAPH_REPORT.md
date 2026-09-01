# Graph Report - sidako-platform  (2026-09-01)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1789 nodes · 4990 edges · 159 communities (67 shown, 81 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `79d61a5a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57
- Community 58
- Community 59
- Community 60
- Community 61
- Community 62
- Community 63
- Community 64
- Community 65
- Community 66
- Community 67
- Community 68
- Community 69
- Community 70
- Community 71
- Community 72
- Community 73
- Community 74
- Community 75
- Community 81
- Community 82
- Community 83
- Community 84
- Community 85
- Community 86
- Community 87
- Community 88
- Community 89
- Community 90
- Community 91
- Community 92
- Community 93
- Community 94
- Community 95
- Community 96
- Community 97
- Community 98
- Community 99
- Community 100
- Community 101
- Community 102
- Community 103
- Community 104
- Community 105
- Community 106
- Community 107
- Community 108
- Community 109
- Community 110
- Community 111
- Community 112
- Community 113
- Community 114
- Community 115
- Community 116
- Community 117
- Community 118
- Community 119
- Community 120
- Community 121
- Community 122
- Community 123
- Community 124
- Community 125
- Community 126
- Community 127
- Community 128
- Community 129
- Community 130
- Community 131
- Community 132
- Community 133
- Community 134
- Community 135
- Community 136
- Community 137
- Community 138
- Community 139
- Community 140
- Community 141
- Community 142
- Community 143
- Community 146
- Community 147
- Community 151
- Community 152
- Community 153
- Community 154
- Community 155
- Community 157
- Community 158

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

## Communities (159 total, 81 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (61): AktaKelahiranNikAdaModalProps, FormData, UploadedFile, AktaKelahiranNikTidakAdaModalProps, FormData, UploadedFile, AktaKematianModalProps, FormData (+53 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (63): dynamic, GET(), runtime, dynamic, GET(), POST(), runtime, BULAN_PENDEK (+55 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (35): EMPTY, FormState, News, Foto, KATEGORI, GalleryItem, KATEGORI_BAWAAN, KOLOM_PILIHAN (+27 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (41): cekPetugas(), DELETE(), dynamic, GET(), PUT(), SaveRow, dynamic, GET() (+33 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (46): AdminPermohonan(), ALASAN_TOLAK, BerkasItem, Detail, FINAL_STATUS, Item, STATUS, STATUS_KEYS (+38 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (36): CekStatusClient(), Hasil, IKON, metadata, AdminUser, AdminUsers(), DetailUser, EMPTY_FORM (+28 more)

### Community 6 - "Community 6"
Cohesion: 0.04
Nodes (48): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prisma, puppeteer-core, tailwindcss (+40 more)

### Community 7 - "Community 7"
Cohesion: 0.06
Nodes (39): FormPageClient(), AjukanPermohonanPage(), dynamic, generateMetadata(), dynamic, metadata, PilihLayananPage(), PilihLayananClient() (+31 more)

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (31): dynamic, POST(), dynamic, POST(), POST(), POST(), POST(), GET() (+23 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (33): EditorBox(), nextId(), parse(), Row, serialize(), StrukturEditor(), BulletItem(), CONTENT (+25 more)

### Community 10 - "Community 10"
Cohesion: 0.11
Nodes (38): Toggle(), AktaKelahiranNikAdaModal(), AktaKelahiranNikTidakAdaModal(), AktaKematianModal(), AktaNikahModal(), AktaPerceraianModal(), KedatanganPendudukModal(), KIAModal() (+30 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (30): BULAN_PENDEK, GET(), Conflict, DemografiEditor(), digits(), EditGrid(), EditRow, nid() (+22 more)

### Community 12 - "Community 12"
Cohesion: 0.09
Nodes (22): clampKolom(), GaleriPage(), HalamanTambahanClient(), MODE, PpidModeSelector(), ProdukDisdukcapilView(), ProdukItem, FaqItem (+14 more)

### Community 13 - "Community 13"
Cohesion: 0.10
Nodes (23): GET(), POST(), GET(), GET(), GET(), dynamic, POST(), samarkanNama() (+15 more)

### Community 14 - "Community 14"
Cohesion: 0.10
Nodes (25): GET(), HubungiKamiPage(), PusatBantuanPage(), sections, WbsPage(), BlockEditorDialog(), PosterIkd(), WbsForm() (+17 more)

### Community 15 - "Community 15"
Cohesion: 0.11
Nodes (26): dynamic, POST(), runtime, terakhirKirim, dynamic, POST(), runtime, INFO (+18 more)

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (24): DELETE(), dynamic, passwordCocok(), POST(), runtime, PATCH(), STATUS_VALID, DELETE() (+16 more)

### Community 17 - "Community 17"
Cohesion: 0.08
Nodes (19): ArticleCard(), BeritaListPage(), News, tglID(), News, metadata, dynamic, TiketPage() (+11 more)

### Community 18 - "Community 18"
Cohesion: 0.13
Nodes (22): DemografiMetric(), fmt(), Row, ImageCropperDialog(), ImageCropperDialogProps, MediaPickerProps, MediaItem, MediaUpload() (+14 more)

### Community 19 - "Community 19"
Cohesion: 0.09
Nodes (20): AdminBerita(), DashboardBeritaPage(), dynamic, AdminGaleri(), DashboardGaleriPage(), dynamic, AdminKritikSaran(), Item (+12 more)

### Community 20 - "Community 20"
Cohesion: 0.11
Nodes (21): NotFound(), EMPTY_FORM, FILE_FIELDS, FormData, KIAModalProps, NIK_FIELDS, UploadedFile, norm() (+13 more)

### Community 21 - "Community 21"
Cohesion: 0.09
Nodes (22): bacaKonfigTab(), dynamic, LAYANAN_PPID_SLUGS, PpidPage(), PROFIL_TERHUBUNG, TENTANG_PPID_SLUGS, ProdukPage(), IKON_JENIS (+14 more)

### Community 23 - "Community 23"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 25 - "Community 25"
Cohesion: 0.20
Nodes (23): PATCH(), STATUS_VALID, GET(), NAMA_LEVEL, PATCH(), POST(), requireAdmin(), POST() (+15 more)

### Community 26 - "Community 26"
Cohesion: 0.13
Nodes (23): EditorNavigasi(), KOSONG, DashboardNavigasiPage(), dynamic, metadata, DropdownItem(), DropdownMenu(), isExternalHref() (+15 more)

### Community 28 - "Community 28"
Cohesion: 0.12
Nodes (16): dynamic, metadata, dynamic, metadata, dynamic, Ctx, EditableBlock(), EditModeToggle() (+8 more)

### Community 29 - "Community 29"
Cohesion: 0.13
Nodes (18): dynamic, metadata, dynamic, metadata, PpidInformasiIndex(), PpidTambahKartu(), PpidSubnav(), HalamanIndeksKartu() (+10 more)

### Community 30 - "Community 30"
Cohesion: 0.12
Nodes (20): cormorant, geistMono, geistSans, metadata, montserrat, AccessibilityWidget(), SPACING_LABEL, TileButton() (+12 more)

### Community 31 - "Community 31"
Cohesion: 0.09
Nodes (19): smoothEase, AlurLayanan(), ease, STEPS, CarouselSlide, DEFAULT_SLIDES, ElegantCarousel(), ElegantCarouselProps (+11 more)

### Community 32 - "Community 32"
Cohesion: 0.16
Nodes (21): dynamic, GET(), formatTanggalId(), hariIniZona(), PanelJamTutup(), StatusJamLayanan, URUTAN_HARI, cekJamLayanan() (+13 more)

### Community 33 - "Community 33"
Cohesion: 0.12
Nodes (18): DashboardPengajuanBaruPage(), dynamic, ICONS, PengajuanBaruClient(), JamLayananEditor(), Sheet(), SheetContent(), SheetDescription() (+10 more)

### Community 34 - "Community 34"
Cohesion: 0.14
Nodes (19): dynamic, getWorker(), isValidNik(), KtpParsed, loadSharp(), maxDuration, normalizeDigits(), parseKtpText() (+11 more)

### Community 36 - "Community 36"
Cohesion: 0.14
Nodes (19): DashboardLayout(), dynamic, InlineEditProvider(), isPublicPage(), ADMIN_ONLY_GROUPS, ADMIN_ONLY_HREFS, DashboardSidebar(), DesktopSidebar() (+11 more)

### Community 37 - "Community 37"
Cohesion: 0.15
Nodes (17): dynamic, maxDuration, POST(), runtime, Conflict, dynamic, maxDuration, POST() (+9 more)

### Community 38 - "Community 38"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 39 - "Community 39"
Cohesion: 0.11
Nodes (14): OFFICE_LAT, OFFICE_LNG, pulseIcon, FALLBACK, KartuDemografi, MapCard(), OfficeMap, PelayananStat (+6 more)

### Community 40 - "Community 40"
Cohesion: 0.13
Nodes (15): clampKolom(), fmtTanggal(), GaleriItem, GaleriProfilPpid(), idBaru(), KOLOM_PILIHAN, Lebar, LinkItem (+7 more)

### Community 41 - "Community 41"
Cohesion: 0.23
Nodes (12): LoginPage(), MenuItem, menuItems, MenuPopuler(), Card(), CardAction(), CardContent(), CardDescription() (+4 more)

### Community 43 - "Community 43"
Cohesion: 0.16
Nodes (14): metadata, fmt(), PetaDemografi, PetaDemografiLoader(), Marker, PetaDemografi(), Row, GEO_BY_NAMA (+6 more)

### Community 44 - "Community 44"
Cohesion: 0.22
Nodes (13): dynamic, GET(), runtime, dynamic, GET(), runtime, addSheet(), buildDemografiWorkbook() (+5 more)

### Community 45 - "Community 45"
Cohesion: 0.15
Nodes (13): EMPTY_FORM, FILE_FIELDS, FormData, KedatanganPendudukModalProps, NUMERIC_FIELDS, UploadedFile, KkScanFieldProps, OcrUploadButton() (+5 more)

### Community 46 - "Community 46"
Cohesion: 0.17
Nodes (14): ForgotPasswordPage(), Providers(), SessionHydrator(), useLogout(), AuthArea(), useAppDispatch(), authSlice, AuthState (+6 more)

### Community 47 - "Community 47"
Cohesion: 0.27
Nodes (12): dynamic, findTiketFor(), GET(), PATCH(), POST(), Session, dynamic, GET() (+4 more)

### Community 48 - "Community 48"
Cohesion: 0.16
Nodes (12): AKSI_STYLE, fmtWaktu(), LogAktivitasClient(), LogItem, Petugas, GROUPS, Produk, SelectGroup() (+4 more)

### Community 49 - "Community 49"
Cohesion: 0.24
Nodes (12): DELETE(), dynamic, PUT(), adalahDataUrlGambar(), DIR_KTP, DIR_SELFIE, FOLDER_KTP, FOLDER_SELFIE (+4 more)

### Community 50 - "Community 50"
Cohesion: 0.27
Nodes (9): POST(), MIME_BY_EXT, MEDIA_ALLOWED_IMAGE, MEDIA_ALLOWED_OTHER, MEDIA_MAX_SIZE, MEDIA_STORAGE_ROOT, MEDIA_URL_PREFIX, mediaPublicUrl() (+1 more)

### Community 51 - "Community 51"
Cohesion: 0.32
Nodes (9): DELETE(), PUT(), requireAdmin(), uniqueSlug(), GET(), POST(), requireAdmin(), uniqueSlug() (+1 more)

### Community 52 - "Community 52"
Cohesion: 0.27
Nodes (9): DemografiKategoriPage(), DemografiView(), fmt(), KOLOM_LABEL, labelKolom(), Row, sumKolom(), StatistikKartuEditor() (+1 more)

### Community 53 - "Community 53"
Cohesion: 0.29
Nodes (9): useAuth(), useGuestOnly(), useRequireAuth(), useUser(), AppDispatch, AppStore, makeStore(), RootState (+1 more)

### Community 54 - "Community 54"
Cohesion: 0.18
Nodes (11): animejs, bcryptjs, dependencies, animejs, bcryptjs, react-dom, react-leaflet, @reduxjs/toolkit (+3 more)

### Community 55 - "Community 55"
Cohesion: 0.22
Nodes (4): Kecamatan, namaWilayah, RegisterPage(), registerUser

### Community 56 - "Community 56"
Cohesion: 0.28
Nodes (7): AdminKonten(), flatten(), Leaf, MenuEntry, DashboardKontenPage(), dynamic, PPID_INFORMASI_GRUP

### Community 57 - "Community 57"
Cohesion: 0.28
Nodes (6): AdminPengaduan(), FILTERS, Item, pisahBukti(), DashboardPengaduanPage(), dynamic

### Community 58 - "Community 58"
Cohesion: 0.28
Nodes (7): DashboardSkmPage(), dynamic, AspekRata, Data, mutu(), Responden, SkmDashboard()

### Community 59 - "Community 59"
Cohesion: 0.28
Nodes (8): FOLDER_PUBLIK, GET(), MIME_BY_EXT, ROOT_PRIVAT, ROOT_PROFIL, ROOT_PUBLIK, tidakDitemukan(), isStaff()

### Community 60 - "Community 60"
Cohesion: 0.43
Nodes (7): getAudioCtx(), NotificationBell(), Notifikasi, playDing(), TIPE_ICON, unlockAudio(), waktuRelatif()

### Community 61 - "Community 61"
Cohesion: 0.38
Nodes (5): PengaturanPelayanan(), PELAYANAN_KATEGORI, PELAYANAN_LIST, PELAYANAN_VISIBILITY_KEY, PelayananItem

### Community 62 - "Community 62"
Cohesion: 0.38
Nodes (4): RelasiTerkait(), SectionHeading(), Relasi, relasiTerkait

### Community 63 - "Community 63"
Cohesion: 0.33
Nodes (5): FormData, JenisBiodataOption, KKPerubahanBiodataModalProps, UploadedFile, Checkbox()

### Community 64 - "Community 64"
Cohesion: 0.47
Nodes (4): AdminMedia(), fmtSize(), DashboardMediaPage(), dynamic

### Community 65 - "Community 65"
Cohesion: 0.40
Nodes (3): demografiData, DemografiDataset, TODO: ganti dengan query Prisma nyata setelah model demografi tersedia.

### Community 66 - "Community 66"
Cohesion: 0.40
Nodes (4): AdminDemografi(), downloadFile(), DashboardDemografiPage(), dynamic

### Community 67 - "Community 67"
Cohesion: 0.60
Nodes (4): cariMenu(), dynamic, generateMetadata(), HalamanTambahanPage()

### Community 68 - "Community 68"
Cohesion: 0.70
Nodes (4): err(), log(), deploy.sh script, warn()

### Community 69 - "Community 69"
Cohesion: 0.60
Nodes (4): DEBIAN_FRONTEND, log(), server-bootstrap.sh script, warn()

### Community 70 - "Community 70"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 71 - "Community 71"
Cohesion: 0.50
Nodes (4): BERITA, main(), prisma, slugify()

## Knowledge Gaps
- **535 isolated node(s):** `LAYANAN_KODE`, `SUBMIT_ACTIONS`, `FETCH_ACTIONS`, `ALLOWED_EXT`, `runtime` (+530 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 670 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **81 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 10` to `Community 0`, `Community 2`, `Community 4`, `Community 5`, `Community 7`, `Community 9`, `Community 11`, `Community 12`, `Community 14`, `Community 18`, `Community 20`, `Community 26`, `Community 28`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 36`, `Community 39`, `Community 41`, `Community 45`, `Community 46`, `Community 48`, `Community 52`, `Community 56`, `Community 60`, `Community 61`, `Community 63`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Why does `getSession()` connect `Community 3` to `Community 1`, `Community 4`, `Community 5`, `Community 7`, `Community 8`, `Community 13`, `Community 16`, `Community 17`, `Community 19`, `Community 25`, `Community 26`, `Community 29`, `Community 33`, `Community 34`, `Community 36`, `Community 37`, `Community 44`, `Community 47`, `Community 49`, `Community 50`, `Community 51`, `Community 56`, `Community 57`, `Community 58`, `Community 59`, `Community 64`, `Community 66`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Why does `prisma` connect `Community 16` to `Community 1`, `Community 3`, `Community 4`, `Community 5`, `Community 8`, `Community 11`, `Community 13`, `Community 14`, `Community 21`, `Community 25`, `Community 28`, `Community 29`, `Community 32`, `Community 37`, `Community 44`, `Community 47`, `Community 49`, `Community 50`, `Community 51`, `Community 67`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **What connects `LAYANAN_KODE`, `SUBMIT_ACTIONS`, `FETCH_ACTIONS` to the rest of the system?**
  _535 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09588607594936709 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07985480943738657 - nodes in this community are weakly interconnected._