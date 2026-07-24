import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { type InfoBerkas } from '@/components/shared/info-page';
import { EditableInfoPage } from '@/components/shared/editable-info-page';
import { ppidContent } from '@/lib/info-content';
import { dokumenJenisForPath } from '@/lib/dokumen-registry';
import { infoBlockKey } from '@/lib/static-content-registry';
import { PpidSubnav } from '@/components/ppid/ppid-subnav';
import { GaleriProfilPpid } from '@/components/ppid/galeri-profil';
import { ppidGaleriKunci } from '@/lib/static-content-registry';
import { TENTANG_PPID_TABS, LAYANAN_PPID_TABS } from '@/lib/ppid-informasi';

// Halaman PPID yang menampilkan galeri gambar (bukan tabel unduhan berkas).
const SLUG_GALERI = new Set(['profil-ppid']);

// Dinamis: menampilkan berkas unggahan dashboard (Dokumen Publikasi).
export const dynamic = 'force-dynamic';

const TENTANG_PPID_SLUGS = new Set(
  TENTANG_PPID_TABS.map((t) => t.href.replace('/ppid/', '')),
);
const LAYANAN_PPID_SLUGS = new Set(
  LAYANAN_PPID_TABS.map((t) => t.href.replace('/ppid/', '')),
);

export default async function PpidPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join('/');
  const content = ppidContent[path];
  if (!content) notFound();

  // Tab tertentu (mis. Profil PPID Pelaksana) menampilkan galeri gambar
  // langsung, menggantikan tabel unduhan berkas.
  const pakaiGaleri = SLUG_GALERI.has(path);

  const jenis = pakaiGaleri ? [] : dokumenJenisForPath(`/ppid/${path}`);
  const berkas: InfoBerkas[] = jenis.length
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
      <EditableInfoPage
        kunci={infoBlockKey('ppid', path)}
        fallback={content}
        berkas={pakaiGaleri ? undefined : berkas}
        dokumenJenis={pakaiGaleri ? undefined : jenis[0]}
        tanpaBerkas={pakaiGaleri}
        extra={
          pakaiGaleri ? (
            <GaleriProfilPpid kunci={ppidGaleriKunci(path)} />
          ) : undefined
        }
      />
    </>
  );
}
