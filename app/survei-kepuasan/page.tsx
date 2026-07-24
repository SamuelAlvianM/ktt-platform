import { Footer } from '@/components/shared/footer';
import { ExternalLink, Gauge, Info } from 'lucide-react';

export const metadata = {
  title: 'Survei Kepuasan Masyarakat — Disdukcapil Tana Tidung',
  description:
    'Isi Survei Kepuasan Masyarakat (SKM) Disdukcapil Kabupaten Tana Tidung langsung dari portal ini.',
};

/**
 * Halaman Survei Kepuasan Masyarakat.
 *
 * Alih-alih melempar pengunjung langsung ke skm.go.id, formulir resmi
 * disematkan (iframe) di halaman kita sendiri sehingga bisa diisi tanpa
 * meninggalkan portal. Tetap disediakan tombol untuk membuka formulir penuh
 * di tab baru — berguna bila skm.go.id memasang header anti-embed
 * (X-Frame-Options / CSP frame-ancestors) sehingga iframe tampil kosong.
 */
const SKM_URL =
  'https://skm.go.id/share/instansi/af1421eb-abba-46f4-9050-4af6205421e8/1';

export default function SurveiKepuasanPage() {
  return (
    <div className="relative min-h-screen bg-slate-50/30">
      {/* Hero */}
      <div className="border-b border-slate-100 bg-gradient-to-b from-primary/[0.07] via-slate-50 to-transparent">
        <div className="container mx-auto px-4 pt-12 pb-10 md:px-8 lg:px-16 lg:pt-16">
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-primary">
            <Gauge className="h-3.5 w-3.5" />
            Layanan Publik · Disdukcapil
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Survei Kepuasan Masyarakat
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Penilaian Anda membantu kami meningkatkan mutu pelayanan administrasi
            kependudukan. Isi formulir Survei Kepuasan Masyarakat (SKM) resmi di
            bawah ini — cukup beberapa menit dan identitas Anda dijaga sesuai
            ketentuan.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={SKM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:gap-3 hover:shadow-md"
            >
              Buka di website SKM <ExternalLink className="h-4 w-4" />
            </a>
            <span className="text-xs text-slate-500">
              Formulir tidak muncul? Klik tombol di atas untuk membukanya penuh.
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:px-8 lg:px-16">
        {/* Bingkai formulir SKM tersemat */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
            <div className="flex items-center gap-2">
              <ClipboardIndicator />
              <h2 className="text-sm font-semibold text-slate-900">
                Formulir Survei Kepuasan Masyarakat
              </h2>
            </div>
            <a
              href={SKM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              Buka di tab baru <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <iframe
            src={SKM_URL}
            title="Survei Kepuasan Masyarakat Disdukcapil Tana Tidung"
            className="h-[1100px] w-full border-0 bg-white"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Catatan bantuan */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-sky-200/70 bg-sky-50/60 p-4 text-sm text-slate-600">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
          <p>
            Formulir di atas dilayani oleh portal resmi <b>skm.go.id</b>. Bila
            formulir tampak kosong (beberapa perangkat/browser memblokir konten
            tersemat), gunakan tombol{' '}
            <a
              href={SKM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Buka di website SKM
            </a>{' '}
            untuk mengisinya di tab baru. Anda juga dapat memindai QR code SKM
            yang tersedia di loket pelayanan kantor Disdukcapil.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ClipboardIndicator() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Gauge className="h-4 w-4" />
    </span>
  );
}
