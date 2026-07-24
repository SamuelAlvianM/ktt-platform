import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { type InfoBerkas } from '@/components/shared/info-page';
import { EditableInfoPage } from '@/components/shared/editable-info-page';
import { ppidContent } from '@/lib/info-content';
import { dokumenJenisForPath } from '@/lib/dokumen-registry';
import { infoBlockKey } from '@/lib/static-content-registry';
import { PpidSubnav } from '@/components/ppid/ppid-subnav';
import { GaleriProfilPpid } from '@/components/ppid/galeri-profil';
import { PpidModeSelector } from '@/components/ppid/ppid-mode';
import { PpidCampur } from '@/components/ppid/ppid-campur';
import { ProfilTerhubung, type ProfilJenis } from '@/components/ppid/profil-terhubung';
import { ppidGaleriKunci, type PpidTabMode } from '@/lib/static-content-registry';
import { TENTANG_PPID_TABS, LAYANAN_PPID_TABS } from '@/lib/ppid-informasi';

// Dinamis: menampilkan berkas unggahan dashboard (Dokumen Publikasi).
export const dynamic = 'force-dynamic';

const TENTANG_PPID_SLUGS = new Set(
  TENTANG_PPID_TABS.map((t) => t.href.replace('/ppid/', '')),
);
const LAYANAN_PPID_SLUGS = new Set(
  LAYANAN_PPID_TABS.map((t) => t.href.replace('/ppid/', '')),
);

// Tab "Tentang PPID" yang datanya DISATUKAN dengan beranda (seksi Profil
// Instansi) → dirender oleh ProfilTerhubung (baca/tulis kunci profil.* yang
// sama). Sisanya (profil-ppid, gambaran-pembentukan-ppid) memakai sistem mode
// gambar/tabel/campur.
const PROFIL_TERHUBUNG: Record<string, ProfilJenis> = {
  'visi-misi-ppid': 'visi-misi',
  'maklumat-ppid': 'maklumat',
  'tugas-tanggungjawab-ppid': 'tugas',
  'struktur-organisasi-ppid': 'struktur',
};

/** Baca konfigurasi tab (mode + sembunyikan kartu teks) dari StaticContent. */
async function bacaKonfigTab(
  slug: string,
): Promise<{ mode: PpidTabMode; sembunyikanKonten: boolean }> {
  const row = await prisma.staticContent.findUnique({
    where: { kunci: ppidGaleriKunci(slug) },
    select: { konten: true },
  });
  const k = row?.konten as { mode?: string; sembunyikanKonten?: boolean } | null;
  const mode: PpidTabMode =
    k?.mode === 'gambar' || k?.mode === 'campur' ? k.mode : 'tabel';
  return { mode, sembunyikanKonten: !!k?.sembunyikanKonten };
}

export default async function PpidPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join('/');
  const content = ppidContent[path];
  if (!content) notFound();

  const profilJenis = PROFIL_TERHUBUNG[path];

  // Mode tampilan (gambar/tabel/campur) hanya untuk tab "Tentang PPID" yang
  // BUKAN tab terhubung-beranda.
  const bisaPilihMode = TENTANG_PPID_SLUGS.has(path) && !profilJenis;
  const { mode, sembunyikanKonten } = bisaPilihMode
    ? await bacaKonfigTab(path)
    : { mode: 'tabel' as PpidTabMode, sembunyikanKonten: false };
  const pakaiTabel = mode === 'tabel';
  const pakaiGambar = mode === 'gambar';
  const pakaiCampur = mode === 'campur';
  // Sembunyikan kartu teks hanya relevan di mode gambar (hanya gambar tampil).
  const sembunyikanKartu = mode === 'gambar' && sembunyikanKonten;

  const jenis = dokumenJenisForPath(`/ppid/${path}`);
  // Berkas dibutuhkan mode Tabel (tabel di kartu) & Campur (panel Dokumen).
  const perluBerkas = !profilJenis && (pakaiTabel || pakaiCampur);
  const berkas: InfoBerkas[] =
    perluBerkas && jenis.length
      ? (
          await prisma.produk.findMany({
            where: { jenis: { in: jenis }, file: { not: null } },
            orderBy: { createdAt: 'desc' },
            select: { id: true, judul: true, file: true, createdAt: true },
          })
        ).map((b) => ({
          id: b.id,
          judul: b.judul,
          file: b.file as string,
          createdAt: b.createdAt.toISOString(),
        }))
      : [];

  return (
    <>
      {TENTANG_PPID_SLUGS.has(path) && (
        <div className="container mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <PpidSubnav items={TENTANG_PPID_TABS} layoutId="tentang-ppid" />
        </div>
      )}
      {LAYANAN_PPID_SLUGS.has(path) && (
        <div className="container mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <PpidSubnav items={LAYANAN_PPID_TABS} layoutId="layanan-ppid" />
        </div>
      )}

      {profilJenis ? (
        <ProfilTerhubung
          jenis={profilJenis}
          judul={content.title}
          deskripsi={content.description}
        />
      ) : (
        <>
          {bisaPilihMode && <PpidModeSelector kunci={ppidGaleriKunci(path)} />}
          <EditableInfoPage
            kunci={infoBlockKey('ppid', path)}
            fallback={content}
            berkas={pakaiTabel ? berkas : undefined}
            dokumenJenis={pakaiTabel ? jenis[0] : undefined}
            tanpaBerkas={!pakaiTabel}
            sembunyikanKonten={sembunyikanKartu}
            extra={
              pakaiCampur ? (
                <PpidCampur kunci={ppidGaleriKunci(path)} berkas={berkas} />
              ) : pakaiGambar ? (
                <GaleriProfilPpid kunci={ppidGaleriKunci(path)} />
              ) : undefined
            }
          />
        </>
      )}
    </>
  );
}
