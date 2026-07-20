import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { Footer } from '@/components/shared/footer';
import { BackButton } from '@/components/shared/back-button';
import {
  KUNCI_NAVIGASI,
  type MenuTambahan,
} from '@/lib/navigasi-tambahan';
import { HalamanTambahanClient } from './HalamanTambahanClient';

export const dynamic = 'force-dynamic';

/**
 * Halaman tujuan sub-menu buatan admin (/halaman/<slug>).
 *
 * Slug divalidasi terhadap daftar menu tambahan di database, bukan dibiarkan
 * menerima apa saja — supaya /halaman/apapun tidak menghasilkan halaman kosong
 * yang bisa diindeks mesin pencari.
 */
async function cariMenu(slug: string): Promise<MenuTambahan | undefined> {
  const baris = await prisma.staticContent.findUnique({
    where: { kunci: KUNCI_NAVIGASI },
  });
  const konten = baris?.konten as { menu?: MenuTambahan[] } | null;
  return konten?.menu?.find((m) => m.slug === slug && !m.tautanLuar?.trim());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const menu = await cariMenu(slug);
  return { title: menu?.judul ?? 'Halaman' };
}

export default async function HalamanTambahanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const menu = await cariMenu(slug);
  if (!menu) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-10 md:px-8">
        <BackButton href="/" />
        <div className="mt-4">
          <HalamanTambahanClient slug={slug} judulCadangan={menu.judul} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
