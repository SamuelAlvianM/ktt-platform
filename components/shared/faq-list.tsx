'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStaticContent } from '@/lib/use-static-content';
import { cn } from '@/lib/utils';

interface FaqItem {
  pertanyaan?: string;
  jawaban?: string;
}

/**
 * Daftar tanya-jawab untuk /pusat-bantuan/faq.
 *
 * Isinya dari blok StaticContent `pusat-bantuan.faq` (dashboard → Konten
 * Halaman) sehingga admin bisa menambah/mengubah pertanyaan tanpa deploy.
 * Dirender sebagai `extra` di bawah body halaman, bukan menggantikannya.
 */
export function FaqList() {
  const cms = useStaticContent(['pusat-bantuan.faq']);
  const data = cms['pusat-bantuan.faq'] as { daftar?: FaqItem[] } | undefined;
  const items = (data?.daftar ?? []).filter((f) => f?.pertanyaan);

  // Yang pertama dibuka duluan supaya halaman tidak terbaca sebagai
  // tumpukan baris tertutup yang tak jelas bisa diklik.
  const [terbuka, setTerbuka] = useState<number | null>(0);

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center">
        <HelpCircle className="mx-auto h-8 w-8 text-slate-300" />
        <p className="mt-3 text-sm text-slate-500">
          Daftar pertanyaan belum diisi.
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Admin dapat mengisinya lewat Dashboard → Konten Halaman → &ldquo;Pusat
          Bantuan — Daftar FAQ&rdquo;.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const aktif = terbuka === i;
        return (
          <div
            key={i}
            className={cn(
              'overflow-hidden rounded-2xl border bg-white transition-colors',
              aktif ? 'border-primary/30 shadow-sm' : 'border-slate-200/70',
            )}
          >
            <button
              type="button"
              onClick={() => setTerbuka(aktif ? null : i)}
              aria-expanded={aktif}
              className="flex w-full items-start gap-3 px-5 py-4 text-left"
            >
              <span
                className={cn(
                  'mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-lg text-[0.7rem] font-bold',
                  aktif
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-500',
                )}
              >
                {i + 1}
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium text-slate-900">
                {item.pertanyaan}
              </span>
              <ChevronDown
                className={cn(
                  'mt-0.5 h-4 w-4 flex-none text-slate-400 transition-transform duration-200',
                  aktif && 'rotate-180 text-primary',
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {aktif && item.jawaban && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="whitespace-pre-line border-t border-slate-100 px-5 py-4 pl-14 text-sm leading-relaxed text-slate-600">
                    {item.jawaban}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
