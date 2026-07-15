/**
 * Titik perkiraan pusat tiap kecamatan Kabupaten Tana Tidung (Kalimantan Utara)
 * untuk peta sebaran penduduk. Koordinat bersifat PERKIRAAN (indikatif) — silakan
 * sesuaikan bila perlu. Pencocokan dengan data demografi memakai nama wilayah
 * yang dinormalisasi (huruf besar tanpa spasi berlebih).
 */
export interface KecamatanGeo {
  nama: string;
  lat: number;
  lng: number;
}

// Pusat peta (sekitar Tideng Pale / Kecamatan Sesayap).
export const TANA_TIDUNG_CENTER: [number, number] = [3.58, 117.25];
export const TANA_TIDUNG_ZOOM = 9;

export const KECAMATAN_GEO: KecamatanGeo[] = [
  { nama: "SESAYAP", lat: 3.551, lng: 117.148 },
  { nama: "SESAYAP HILIR", lat: 3.583, lng: 117.335 },
  { nama: "TANA LIA", lat: 3.72, lng: 117.48 },
  { nama: "BETAYAU", lat: 3.42, lng: 117.06 },
  { nama: "MURUK RIAN", lat: 3.63, lng: 116.98 },
];

const normNama = (s: string) => s.trim().toUpperCase().replace(/\s+/g, " ");

const GEO_BY_NAMA = new Map(KECAMATAN_GEO.map((k) => [normNama(k.nama), k]));

/** Cari koordinat kecamatan dari nama wilayah data demografi. */
export function geoForWilayah(wilayah: string): KecamatanGeo | undefined {
  return GEO_BY_NAMA.get(normNama(wilayah));
}
