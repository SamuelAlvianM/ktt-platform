'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Search,
  Loader2,
  CheckCircle2,
  Clock,
  XCircle,
  ShieldAlert,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { STATUS_AKUN, infoStatus } from '@/lib/akun-status';
import { labelKolom } from '@/lib/akun-tolak';

interface Hasil {
  ada: boolean;
  nama?: string | null;
  status?: number;
  alasan?: string | null;
  /** Key kolom pendaftaran yang ditandai petugas perlu diperbaiki. */
  kolom?: string[];
  terdaftar?: string;
  diperbarui?: string;
}

const IKON: Record<number, React.ElementType> = {
  [STATUS_AKUN.MENUNGGU]: Clock,
  [STATUS_AKUN.AKTIF]: CheckCircle2,
  [STATUS_AKUN.DITOLAK]: XCircle,
  [STATUS_AKUN.NONAKTIF]: ShieldAlert,
};

export function CekStatusClient() {
  const params = useSearchParams();
  const [nik, setNik] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasil, setHasil] = useState<Hasil | null>(null);

  const cek = useCallback(async (nikCek: string) => {
    const clean = nikCek.replace(/\D/g, '');
    if (!/^\d{16}$/.test(clean)) {
      toast.error('NIK harus 16 digit angka');
      return;
    }
    setLoading(true);
    setHasil(null);
    try {
      const res = await fetch('/api/auth/cek-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nik: clean }),
      });
      const json = await res.json();
      if (json.error?.length) {
        toast.error(json.error[0]);
        return;
      }
      setHasil(json.data as Hasil);
    } catch {
      toast.error('Gagal memeriksa status. Coba lagi.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-cek bila datang dari form daftar (redirect membawa ?nik=).
  useEffect(() => {
    const q = params.get('nik');
    if (q && /^\d{16}$/.test(q)) {
      setNik(q);
      cek(q);
    }
  }, [params, cek]);

  // Daftar ulang setelah ditolak dilakukan lewat FORM pendaftaran (bukan sekali
  // klik) supaya warga benar-benar memperbaiki datanya. NIK & bagian yang perlu
  // diperbaiki dibawa via query agar form bisa mengisi & menyorotnya.
  const nikBersih = (hasil && nik.replace(/\D/g, '')) || '';
  const linkDaftarUlang =
    `/register?nik=${nikBersih}` +
    (hasil?.kolom?.length ? `&perbaiki=${hasil.kolom.join(',')}` : '');

  const info = hasil?.ada && hasil.status != null ? infoStatus(hasil.status) : null;
  const Ikon = hasil?.status != null ? IKON[hasil.status] ?? Clock : Clock;

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h1 className="text-lg font-semibold text-slate-900">Cek Status Pendaftaran</h1>
          <p className="mt-0.5 text-sm text-slate-500">
            Masukkan NIK untuk melihat status pendaftaran akun baru Anda.
          </p>
        </div>

        <div className="space-y-4 px-6 py-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              cek(nik);
            }}
            className="flex gap-2"
          >
            <Input
              value={nik}
              onChange={(e) => setNik(e.target.value.replace(/\D/g, '').slice(0, 16))}
              inputMode="numeric"
              placeholder="Nomor Induk Kependudukan (16 digit)"
              className="flex-1"
            />
            <Button type="submit" disabled={loading} className="gap-1.5">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              Cek
            </Button>
          </form>

          {/* Hasil */}
          {hasil && !hasil.ada && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-600">
                NIK ini belum terdaftar sebagai akun warga.
              </p>
              <Link
                href="/register"
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Daftar akun baru <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {hasil?.ada && info && (
            <div className="space-y-3">
              <div className={`flex items-start gap-3 rounded-xl p-4 ring-1 ${info.badge}`}>
                <Ikon className="mt-0.5 h-5 w-5 shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold">
                    {hasil.nama ? `${hasil.nama} — ` : ''}
                    {info.label}
                  </p>
                  <p className="mt-0.5 text-sm opacity-90">{info.pesan}</p>
                </div>
              </div>

              {/* Alasan penolakan + daftar bagian yang perlu diperbaiki + ajukan ulang */}
              {hasil.status === STATUS_AKUN.DITOLAK && (
                <>
                  {(hasil.alasan || hasil.kolom?.length) && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                        Alasan penolakan
                      </p>
                      {hasil.alasan && (
                        <p className="mt-1 text-sm text-rose-800">{hasil.alasan}</p>
                      )}
                      {!!hasil.kolom?.length && (
                        <div className="mt-3">
                          <p className="text-xs font-medium text-rose-600">
                            Bagian yang perlu diperbaiki:
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {labelKolom(hasil.kolom).map((l) => (
                              <span
                                key={l}
                                className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-700 ring-1 ring-rose-200"
                              >
                                {l}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <Link href={linkDaftarUlang} className="block">
                    <Button className="w-full gap-1.5">
                      <RotateCcw className="h-4 w-4" />
                      Perbaiki Data &amp; Ajukan Ulang
                    </Button>
                  </Link>
                  <p className="text-center text-xs text-slate-400">
                    Anda akan diarahkan ke formulir pendaftaran untuk memperbaiki data.
                    Setelah dikirim, petugas meninjau kembali pendaftaran Anda.
                  </p>
                </>
              )}

              {hasil.status === STATUS_AKUN.AKTIF && (
                <Link href="/login">
                  <Button className="w-full gap-1.5">
                    Masuk ke akun <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Kembali ke Login
        </Link>
      </div>
    </div>
  );
}
