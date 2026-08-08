/**
 * Poster peringatan penipuan IKD.
 *
 * Dinas mengirim DUA versi poster dengan isi identik: landscape (1600×900) dan
 * portrait (1280×1600). Dipasang lewat <picture> supaya layar lebar memakai
 * versi landscape dan ponsel memakai versi portrait — poster landscape di
 * layar sempit membuat tulisannya mengecil sampai tak terbaca.
 *
 * Isi posternya juga ditulis ulang sebagai teks di `list` halaman
 * (lib/info-content.ts) — gambar saja tidak terbaca pembaca layar maupun
 * mesin pencari.
 */
export function PosterIkd() {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet="/pusat-bantuan/penipuan-ikd-landscape.jpg"
      />
      {/* eslint-disable-next-line @next/next/no-img-element -- dua sumber lewat <picture>, tak bisa pakai next/image */}
      <img
        src="/pusat-bantuan/penipuan-ikd-portrait.jpg"
        alt="Peringatan waspada penipuan aktivasi IKD yang mengatasnamakan Disdukcapil Tana Tidung"
        className="h-auto w-full rounded-2xl border border-slate-200/60 shadow-sm"
      />
    </picture>
  );
}
