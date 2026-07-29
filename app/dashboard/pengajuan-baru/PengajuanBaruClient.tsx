"use client";

import { useState } from "react";
import {
  FileText,
  Baby,
  Users,
  UserPlus,
  Printer,
  ScrollText,
  Heart,
  Book,
  IdCard,
  MapPin,
  Home,
  Zap,
  Search,
  ArrowRight,
  FilePlus2,
  SlidersHorizontal,
  Clock,
  ListChecks,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { BackButton } from "@/components/shared/back-button";
import { useAppSelector } from "@/store/hooks";
import { LAYANAN_FORMS, type LayananForm } from "@/lib/layanan-forms";
import { StaffPengajuanForm } from "@/components/dashboard/staff-pengajuan-form";
import { PengaturanPelayanan } from "@/components/dashboard/pengaturan-pelayanan";
import { JamLayananEditor } from "@/components/dashboard/jam-layanan-editor";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ICONS: Record<string, React.ElementType> = {
  FileText,
  Baby,
  Users,
  UserPlus,
  Printer,
  ScrollText,
  Heart,
  Book,
  IdCard,
  MapPin,
  Home,
  Zap,
};

export function PengajuanBaruClient() {
  const [selected, setSelected] = useState<LayananForm | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [q, setQ] = useState("");
  // Pengaturan pelayanan (visibilitas + jam) hanya untuk admin (level 1).
  const { user } = useAppSelector((s) => s.auth);
  const isAdmin = (user?.level ?? 3) === 1;

  const filtered = q.trim()
    ? LAYANAN_FORMS.filter(
        (l) =>
          l.title.toLowerCase().includes(q.trim().toLowerCase()) ||
          l.desc.toLowerCase().includes(q.trim().toLowerCase()),
      )
    : LAYANAN_FORMS;

  // ── Form inline (menu grid disembunyikan) ──
  if (selected) {
    return (
      <StaffPengajuanForm layanan={selected} onBack={() => setSelected(null)} />
    );
  }

  // ── Grid pilihan layanan ──
  return (
    <div>
      <BackButton href="/dashboard" />
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
            <FilePlus2 className="h-6 w-6 text-primary" /> Pengajuan Baru
          </h1>
          <p className="text-sm text-slate-500">
            Bantu warga mengajukan permohonan. Pilih jenis layanan untuk membuka
            formulirnya.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cari layanan..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
            />
          </div>
          {isAdmin && (
            <Button
              variant="outline"
              onClick={() => setShowSettings(true)}
              title="Atur ketersediaan layanan & jam kerja permohonan"
              className="shrink-0 gap-1.5"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Pengaturan</span>
            </Button>
          )}
        </div>
      </div>

      {/* Drawer pengaturan: meluncur dari kanan dengan overlay gelap */}
      {isAdmin && (
        <Sheet open={showSettings} onOpenChange={setShowSettings}>
          <SheetContent
            side="right"
            className="w-full overflow-y-auto sm:max-w-xl"
          >
            <SheetHeader className="pb-0">
              <SheetTitle className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-primary" /> Kelola
                Layanan
              </SheetTitle>
              <SheetDescription>
                Atur ketersediaan jenis layanan &amp; jam kerja permohonan.
              </SheetDescription>
            </SheetHeader>
            <Tabs defaultValue="jam" className="px-4 ">
              <TabsList className="flex flex-row w-full gap-1 rounded-xl bg-slate-100 p-1">
                <TabsTrigger
                  value="jam"
                  className="cursor-pointer gap-1.5 rounded-lg py-2 font-medium text-slate-500 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  <Clock className="h-4 w-4" /> Jam Kerja
                </TabsTrigger>
                <TabsTrigger
                  value="layanan"
                  className="cursor-pointer gap-1.5 rounded-lg py-2 font-medium text-slate-500 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  <ListChecks className="h-4 w-4" /> Ketersediaan Layanan
                </TabsTrigger>
              </TabsList>
              <TabsContent value="jam" className="pt-5">
                <JamLayananEditor />
              </TabsContent>
              <TabsContent value="layanan" className="pt-5">
                <PengaturanPelayanan />
              </TabsContent>
            </Tabs>
          </SheetContent>
        </Sheet>
      )}

      {filtered.length === 0 ? (
        <div className="py-16 text-center text-sm text-slate-500">
          Tidak ada layanan cocok "{q}".
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l, i) => {
            const Icon = ICONS[l.icon] ?? FileText;
            return (
              <button
                key={l.slug}
                onClick={() => setSelected(l)}
                style={{ animationDelay: `${i * 35}ms` }}
                className="group flex animate-in fade-in slide-in-from-bottom-2 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900 group-hover:text-primary">
                    {l.title}
                  </p>
                  <p className="line-clamp-1 text-xs text-slate-500">
                    {l.desc}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
