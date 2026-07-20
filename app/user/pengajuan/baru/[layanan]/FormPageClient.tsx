"use client";

import { useRouter } from "next/navigation";
import { FormPageMode } from "@/components/permohonan-online/form-shell";
import { FORM_PERMOHONAN } from "@/components/permohonan-online/form-map";

/**
 * Merender form permohonan sebagai HALAMAN PENUH.
 *
 * Komponen form-nya sama persis dengan yang dulu dipakai sebagai modal —
 * <FormPageMode> yang membuat primitif Dialog di dalamnya dirender inline.
 * Saat form ditutup/selesai (onOpenChange(false)) kita kembalikan pengguna ke
 * daftar riwayat, menggantikan perilaku "modal tertutup" yang lama.
 */
export function FormPageClient({ slug }: { slug: string }) {
  const router = useRouter();
  const Form = FORM_PERMOHONAN[slug];

  if (!Form) return null;

  return (
    <FormPageMode>
      <Form
        open
        onOpenChange={(open) => {
          if (!open) router.push("/user/pengajuan");
        }}
      />
    </FormPageMode>
  );
}
