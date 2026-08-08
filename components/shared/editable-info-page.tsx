"use client";

import { InfoPage, type InfoBerkas, type InfoPageContent } from "@/components/shared/info-page";
import { EditableBlock } from "@/components/konten/inline-edit";
import { useStaticContent } from "@/lib/use-static-content";

/**
 * Halaman info yang bisa diedit admin (Mode Edit / dashboard Konten Halaman).
 * Konten = default lib/info-content.ts di-merge override DB (blok `kunci`).
 * `links` tidak ikut diedit — tetap dari konfigurasi statis.
 */
export function EditableInfoPage({
  kunci,
  fallback,
  berkas,
  dokumenJenis,
  extra,
  tanpaBerkas,
  sembunyikanKonten,
  variant = 'page',
}: {
  kunci: string;
  fallback: InfoPageContent;
  berkas?: InfoBerkas[];
  /** Kategori dokumen (t_produk.jenis) — aktifkan unggah PDF di mode edit. */
  dokumenJenis?: string;
  /** Konten tambahan setelah kartu utama, sebelum footer (mis. form khusus). */
  extra?: React.ReactNode;
  /** Halaman tanpa daftar berkas (mis. diganti galeri) — sembunyikan pesan kosong. */
  tanpaBerkas?: boolean;
  /** Sembunyikan kartu teks utama (hanya gambar galeri yang tampil). */
  sembunyikanKonten?: boolean;
  /** Diteruskan ke InfoPage: `section` = kartu saja tanpa Footer/hero besar. */
  variant?: 'page' | 'section';
}) {
  const data = useStaticContent([kunci])[kunci] as {
    title?: string;
    description?: string;
    body?: string[];
    list?: string[];
    image?: string;
    gambar?: { judul?: string; gambar?: string }[];
  };

  const content: InfoPageContent = {
    ...fallback,
    title: data.title || fallback.title,
    description: data.description || fallback.description,
    body: Array.isArray(data.body) && data.body.length > 0 ? data.body : fallback.body,
    list: Array.isArray(data.list) && data.list.length > 0 ? data.list : fallback.list,
    image: data.image || fallback.image,
    gambar:
      Array.isArray(data.gambar) && data.gambar.length > 0
        ? data.gambar
        : fallback.gambar,
  };

  return (
    <EditableBlock kunci={kunci} label="Konten Halaman">
      <InfoPage
        content={content}
        berkas={berkas}
        dokumenJenis={dokumenJenis}
        extra={extra}
        tanpaBerkas={tanpaBerkas}
        sembunyikanKonten={sembunyikanKonten}
        variant={variant}
      />
    </EditableBlock>
  );
}
