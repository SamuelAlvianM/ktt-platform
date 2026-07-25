import { cn } from '@/lib/utils';

/**
 * Menampilkan satu gambar unggahan admin untuk tab profil (Visi & Misi,
 * Maklumat, Tugas & Fungsi) yang memilih "mode gambar" — yaitu bila field
 * `gambar` pada blok `profil.*` diisi. Dimensi gambar tak diketahui (diunggah
 * admin), jadi memakai `<img>` polos, bukan next/image.
 */
export function ProfilGambar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn('flex justify-center', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- gambar diunggah admin, dimensi tak diketahui di sini */}
      <img
        src={src}
        alt={alt}
        className="h-auto max-w-full rounded-2xl border border-slate-100 shadow-sm dark:border-slate-700"
      />
    </div>
  );
}
