"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/shared/footer";
import { EditableBlock } from "@/components/konten/inline-edit";
import { useStaticContent } from "@/lib/use-static-content";
import { SyaratLayananTabs } from "@/components/shared/syarat-layanan-tabs";
import {
  BookText,
  UserCheck,
  FileStack,
  ShieldCheck,
  ClipboardCheck,
  FileCheck2,
  Ban,
  Scale,
  FileSignature,
} from "lucide-react";

/**
 * Syarat & Ketentuan — blok `info.syarat-ketentuan` (editable, sama pola dengan
 * Kebijakan & Privasi). Tiap bagian = daftar poin bernomor dengan ikon.
 */

type Data = {
  intro?: string;
  pembaruan?: string;
  umum?: string[];
  akun?: string[];
  layanan?: string[];
  kewajiban?: string[];
  verifikasi?: string[];
  dokumen?: string[];
  larangan?: string[];
  penutup?: string[];
  image?: string;
};

// Urutan + judul + ikon tiap bagian. `key` cocok dengan field blok.
const BAGIAN: { key: keyof Data; title: string; icon: React.ElementType }[] = [
  { key: "umum", title: "Ketentuan Umum", icon: BookText },
  { key: "akun", title: "Pendaftaran & Akun Pengguna", icon: UserCheck },
  { key: "layanan", title: "Layanan Permohonan Online", icon: FileStack },
  { key: "kewajiban", title: "Kewajiban & Tanggung Jawab Pemohon", icon: ShieldCheck },
  { key: "verifikasi", title: "Verifikasi, Pemrosesan & Jam Pelayanan", icon: ClipboardCheck },
  { key: "dokumen", title: "Penerbitan & Pengambilan Dokumen", icon: FileCheck2 },
  { key: "larangan", title: "Larangan Penggunaan", icon: Ban },
  { key: "penutup", title: "Ketentuan Penutup", icon: Scale },
];

function Bagian({
  title,
  icon: Icon,
  items,
  index,
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
  index: number;
}) {
  if (!items.length) return null;
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        {title}
      </h2>
      <ol className="space-y-2.5">
        {items.map((p, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {i + 1}
            </span>
            <span className="pt-0.5">{p}</span>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}

/** Syarat & Ketentuan — halaman /syarat. */
export function SyaratKetentuanView() {
  const data = useStaticContent(["info.syarat-ketentuan"])[
    "info.syarat-ketentuan"
  ] as Data;

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50/30">
      <EditableBlock kunci="info.syarat-ketentuan" label="Syarat & Ketentuan">
        <div className="container mx-auto flex-1 px-4 py-12 md:px-8 lg:px-16 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-start gap-4"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <FileSignature className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Syarat &amp; Ketentuan
              </h1>
              {data.intro && (
                <p className="mt-1 max-w-2xl text-sm text-slate-500">{data.intro}</p>
              )}
              {data.pembaruan && (
                <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                  {data.pembaruan}
                </p>
              )}
            </div>
          </motion.div>

          {/* Persyaratan per layanan (tab bisa dicari) — di atas S&K umum. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-6 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm md:p-8"
          >
            <SyaratLayananTabs />
          </motion.div>

          {/* Pemisah menuju ketentuan umum */}
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">
              Ketentuan Umum Penggunaan Portal
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm md:p-8"
          >
            {data.image && (
              // eslint-disable-next-line @next/next/no-img-element -- infografis opsional, dimensi tak diketahui
              <img
                src={data.image}
                alt="Infografis Syarat & Ketentuan"
                className="h-auto w-full rounded-xl border border-slate-100"
              />
            )}
            {BAGIAN.map((b, i) => (
              <Bagian
                key={b.key}
                title={b.title}
                icon={b.icon}
                items={Array.isArray(data[b.key]) ? (data[b.key] as string[]) : []}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </EditableBlock>
      <Footer />
    </div>
  );
}
