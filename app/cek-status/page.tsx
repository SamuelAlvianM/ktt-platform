import { Suspense } from 'react';
import { CekStatusClient } from './CekStatusClient';

export const metadata = {
  title: 'Cek Status Pendaftaran',
  description: 'Periksa status pendaftaran akun baru Anda dengan NIK.',
};

export default function CekStatusPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <Suspense fallback={null}>
        <CekStatusClient />
      </Suspense>
    </main>
  );
}
