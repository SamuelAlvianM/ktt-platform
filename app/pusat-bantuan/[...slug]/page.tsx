import { notFound } from 'next/navigation';
import { EditableInfoPage } from '@/components/shared/editable-info-page';
import { pusatBantuanContent } from '@/lib/info-content';
import { infoBlockKey } from '@/lib/static-content-registry';
import { FaqList } from '@/components/shared/faq-list';
import { PosterIkd } from '@/components/shared/poster-ikd';
import { WbsForm } from '@/components/shared/wbs-form';

export function generateStaticParams() {
  return Object.keys(pusatBantuanContent).map((slug) => ({ slug: [slug] }));
}

/**
 * Pusat Bantuan — permintaan dinas (Document from S.A.M, poin 3).
 * Polanya sama dengan /wbs dan /produk: konten dari lib/info-content.ts,
 * bisa disunting admin lewat EditableInfoPage, dengan komponen tambahan
 * (`extra`) per halaman.
 */
export default async function PusatBantuanPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.join('/');
  const content = pusatBantuanContent[path];
  if (!content) notFound();

  // Pengaduan & Konsultasi memakai WbsForm yang sudah ada — kanal dan
  // endpoint-nya sama (/api/pengaduan), jadi tidak dibuat formulir kedua.
  const extra =
    path === 'faq' ? (
      <FaqList />
    ) : path === 'penipuan-ikd' ? (
      <PosterIkd />
    ) : path === 'pengaduan-konsultasi' ? (
      <WbsForm varian="pengaduan" />
    ) : undefined;

  return (
    <EditableInfoPage
      kunci={infoBlockKey('pusat-bantuan', path)}
      fallback={content}
      extra={extra}
      // Tak satu pun halaman Pusat Bantuan berisi unduhan dokumen — tanpa ini
      // muncul catatan "Dokumen resmi belum tersedia secara digital" yang tidak
      // nyambung, mis. di bawah daftar FAQ.
      tanpaBerkas
    />
  );
}
