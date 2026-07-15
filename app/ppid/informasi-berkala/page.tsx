import { PpidInformasiIndex } from '@/components/ppid/informasi-index';
import { PPID_BERKALA } from '@/lib/ppid-informasi';

export const metadata = {
  title: 'Informasi Wajib Diumumkan Secara Berkala — PPID Disdukcapil Tana Tidung',
  description: PPID_BERKALA.deskripsi,
};

// Jumlah dokumen dihitung dari unggahan Dokumen Publikasi di DB.
export const dynamic = 'force-dynamic';

export default function InformasiBerkalaPage() {
  return <PpidInformasiIndex grup={PPID_BERKALA} />;
}
