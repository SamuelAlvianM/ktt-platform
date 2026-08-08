'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, ImagePlus, X } from 'lucide-react';

/**
 * Form pengaduan Whistle Blowing System (WBS) — field mengikuti alur resmi
 * di infografis "Tata Cara Pengaduan Penyalahgunaan Wewenang melalui WBS":
 * identitas pelapor, uraian kejadian, waktu & tempat, pihak terlibat, dan
 * BUKTI FOTO (opsional, maks 4 @5MB).
 *
 * Disimpan lewat /api/pengaduan (tabel Pengaduan) — TIDAK pakai tabel baru
 * supaya tanpa migrasi DB (SIDAKO live). Foto diunggah dulu ke
 * /api/pengaduan/upload (publik → storage privat, hanya petugas yang bisa
 * melihat), lalu URL-nya disisipkan ke `isi` dengan penanda "Bukti Foto:".
 * Pratinjau thumbnail di form memakai objectURL LOKAL karena berkas di server
 * bersifat privat (pelapor anonim tidak bisa membukanya kembali).
 *
 * TIDAK memakai reCAPTCHA (permintaan user).
 *
 * VARIAN. Sejak menu Pusat Bantuan ditambahkan (permintaan dinas poin 3),
 * formulir yang sama dipakai dua tempat dengan nada berbeda:
 *   - `wbs`       → pelaporan dugaan pelanggaran (default, /wbs/tentang-wbs)
 *   - `pengaduan` → pengaduan & konsultasi umum (/pusat-bantuan/…)
 * Yang berubah hanya label, placeholder, subjek, dan dua field khusus WBS
 * (waktu/tempat kejadian & pihak terlibat) yang disembunyikan pada varian
 * `pengaduan` — menanyakan "pihak yang diduga terlibat" kepada warga yang
 * cuma ingin bertanya jelas tidak pada tempatnya. Endpoint & tabelnya sama.
 */

export type VarianPengaduan = 'wbs' | 'pengaduan';

const TEKS: Record<VarianPengaduan, {
  judul: string;
  petunjuk: string;
  labelNama: string;
  labelUraian: string;
  placeholderUraian: string;
  subjek: string;
  namaKosong: string;
  wajibDiisi: string;
  gagal: string;
  judulSukses: string;
  pesanSukses: string;
  tombolLagi: string;
}> = {
  wbs: {
    judul: 'Formulir Laporan WBS',
    petunjuk:
      'Isi sesuai fakta yang Anda ketahui. Nama boleh dikosongkan bila Anda ingin melapor secara anonim.',
    labelNama: 'Nama Pelapor (opsional)',
    labelUraian: 'Uraian Kejadian',
    placeholderUraian:
      'Jelaskan dugaan penyalahgunaan wewenang/pelanggaran yang Anda ketahui secara detail...',
    subjek: '[WBS] Laporan Whistle Blowing System',
    namaKosong: 'Pelapor Anonim',
    wajibDiisi: 'Uraian kejadian wajib diisi.',
    gagal: 'Gagal mengirim laporan',
    judulSukses: 'Laporan Terkirim',
    pesanSukses:
      'Terima kasih. Laporan WBS Anda akan diverifikasi dan ditindaklanjuti sesuai ketentuan. Identitas Anda dijamin kerahasiaannya.',
    tombolLagi: 'Kirim Laporan Lain',
  },
  pengaduan: {
    judul: 'Formulir Pengaduan & Konsultasi',
    petunjuk:
      'Sampaikan pengaduan atau pertanyaan Anda. Isi kontak agar kami dapat menyampaikan jawabannya.',
    labelNama: 'Nama (opsional)',
    labelUraian: 'Pengaduan / Pertanyaan Anda',
    placeholderUraian:
      'Tuliskan pengaduan atau hal yang ingin Anda konsultasikan selengkap mungkin...',
    subjek: '[Pengaduan & Konsultasi] Pengajuan dari portal',
    namaKosong: 'Tanpa Nama',
    wajibDiisi: 'Pengaduan atau pertanyaan wajib diisi.',
    gagal: 'Gagal mengirim pengaduan',
    judulSukses: 'Pengaduan Terkirim',
    pesanSukses:
      'Terima kasih. Pengaduan atau konsultasi Anda dicatat, diverifikasi, lalu diteruskan kepada bidang terkait. Jawaban akan disampaikan melalui kontak yang Anda isi.',
    tombolLagi: 'Kirim Lagi',
  },
};

interface FotoBukti {
  /** URL di server (dipakai saat submit). */
  url: string;
  /** objectURL lokal untuk pratinjau thumbnail. */
  preview: string;
  name: string;
}

const MAKS_FOTO = 4;

export function WbsForm({ varian = 'wbs' }: { varian?: VarianPengaduan } = {}) {
  const t = TEKS[varian];
  const wbs = varian === 'wbs';
  const [nama, setNama] = useState('');
  const [kontak, setKontak] = useState('');
  const [uraian, setUraian] = useState('');
  const [waktuTempat, setWaktuTempat] = useState('');
  const [pihakTerlibat, setPihakTerlibat] = useState('');
  const [fotos, setFotos] = useState<FotoBukti[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setError(null);
    const sisa = MAKS_FOTO - fotos.length;
    if (sisa <= 0) {
      setError(`Maksimal ${MAKS_FOTO} foto.`);
      return;
    }
    const dipilih = Array.from(files).slice(0, sisa);
    setUploading(true);
    for (const f of dipilih) {
      if (!/\.(jpe?g|png)$/i.test(f.name)) {
        setError('Foto harus berformat JPG atau PNG.');
        continue;
      }
      if (f.size > 5 * 1024 * 1024) {
        setError(`Foto "${f.name}" melebihi 5 MB.`);
        continue;
      }
      const fd = new FormData();
      fd.append('file', f);
      try {
        const res = await fetch('/api/pengaduan/upload', { method: 'POST', body: fd });
        const json = await res.json();
        if (!res.ok || json.error?.length) {
          setError(json.error?.[0] ?? 'Gagal mengunggah foto');
          continue;
        }
        setFotos((prev) => [
          ...prev,
          { url: json.data.url, preview: URL.createObjectURL(f), name: f.name },
        ]);
      } catch {
        setError('Gagal mengunggah foto.');
      }
    }
    setUploading(false);
  };

  const hapusFoto = (idx: number) => {
    setFotos((prev) => {
      const target = prev[idx];
      if (target) URL.revokeObjectURL(target.preview);
      return prev.filter((_, i) => i !== idx);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!uraian.trim()) {
      setError(t.wajibDiisi);
      return;
    }

    setIsLoading(true);
    try {
      let isiLengkap = [
        `${wbs ? 'Uraian kejadian' : 'Isi pengaduan/konsultasi'}: ${uraian.trim()}`,
        wbs && waktuTempat.trim() && `Waktu & tempat kejadian: ${waktuTempat.trim()}`,
        wbs && pihakTerlibat.trim() && `Pihak yang terlibat: ${pihakTerlibat.trim()}`,
      ]
        .filter(Boolean)
        .join('\n');

      if (fotos.length) {
        isiLengkap += `\n\nBukti Foto:\n${fotos.map((f) => f.url).join('\n')}`;
      }

      const res = await fetch('/api/pengaduan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama: nama.trim() || t.namaKosong,
          hp: kontak.trim(),
          subjek: t.subjek,
          isi: isiLengkap,
        }),
      });
      const json = await res.json();
      if (!res.ok || json.error?.length) {
        throw new Error(json.error?.[0] ?? 'Gagal mengirim laporan');
      }
      setSuccess(true);
      setNama('');
      setKontak('');
      setUraian('');
      setWaktuTempat('');
      setPihakTerlibat('');
      fotos.forEach((f) => URL.revokeObjectURL(f.preview));
      setFotos([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.gagal);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="glass-card rounded-2xl p-10 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle2 className="h-8 w-8 text-success" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-900">{t.judulSukses}</h3>
        <p className="mb-6 text-slate-500">{t.pesanSukses}</p>
        <Button onClick={() => setSuccess(false)}>{t.tombolLagi}</Button>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <h3 className="mb-1 text-lg font-semibold text-slate-900">{t.judul}</h3>
      <p className="mb-6 text-sm text-slate-500">{t.petunjuk}</p>

      {error && (
        <Alert variant="destructive" className="mb-5">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="wbs-nama">{t.labelNama}</Label>
            <Input
              id="wbs-nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder={wbs ? 'Kosongkan untuk anonim' : 'Nama Anda'}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="wbs-kontak">Kontak (opsional)</Label>
            <Input
              id="wbs-kontak"
              value={kontak}
              onChange={(e) => setKontak(e.target.value)}
              placeholder="Email / No. WhatsApp untuk tindak lanjut"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="wbs-uraian">
            {t.labelUraian} <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="wbs-uraian"
            value={uraian}
            onChange={(e) => setUraian(e.target.value)}
            placeholder={t.placeholderUraian}
            rows={5}
            required
          />
        </div>

        {/* Dua field khusus pelaporan pelanggaran — tidak relevan (dan terkesan
            menuduh) pada varian pengaduan & konsultasi umum. */}
        {wbs && (
          <>
            <div className="space-y-1.5">
              <Label htmlFor="wbs-waktu">Waktu & Tempat Kejadian (opsional)</Label>
              <Input
                id="wbs-waktu"
                value={waktuTempat}
                onChange={(e) => setWaktuTempat(e.target.value)}
                placeholder="Mis. Senin, 20 Juli 2026, Kantor Disdukcapil"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="wbs-pihak">Pihak yang Terlibat (opsional)</Label>
              <Input
                id="wbs-pihak"
                value={pihakTerlibat}
                onChange={(e) => setPihakTerlibat(e.target.value)}
                placeholder="Nama/jabatan pihak yang diduga terlibat"
              />
            </div>
          </>
        )}

        {/* Bukti foto (opsional, maks 4 @5MB) */}
        <div className="space-y-2">
          <Label>
            Bukti Foto (opsional){' '}
            <span className="font-normal text-slate-400">— maks {MAKS_FOTO} foto, @5MB (JPG/PNG)</span>
          </Label>

          {fotos.length > 0 && (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {fotos.map((f, idx) => (
                <div
                  key={f.url}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- pratinjau objectURL lokal */}
                  <img src={f.preview} alt={f.name} className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => hapusFoto(idx)}
                    aria-label={`Hapus ${f.name}`}
                    className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover:opacity-100"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png"
            multiple
            className="hidden"
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = '';
            }}
          />
          {fotos.length < MAKS_FOTO && (
            <Button
              type="button"
              variant="outline"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="w-full border-dashed"
            >
              {uploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengunggah foto...
                </>
              ) : (
                <>
                  <ImagePlus className="mr-2 h-4 w-4" /> Tambah Foto ({fotos.length}/{MAKS_FOTO})
                </>
              )}
            </Button>
          )}
        </div>

        <div className="flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/10 p-4 text-xs text-primary">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Identitas pelapor dijamin kerahasiaannya sesuai ketentuan yang berlaku. Laporan yang
            tidak benar/palsu dapat dikenakan sanksi sesuai ketentuan hukum.
          </span>
        </div>

        <Button type="submit" disabled={isLoading || uploading} className="w-full font-semibold">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengirim...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Kirim Laporan
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
