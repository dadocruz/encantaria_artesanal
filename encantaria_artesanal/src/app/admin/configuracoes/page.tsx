"use client";

import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const inputClass =
  "w-full rounded-xl border border-cobre/30 bg-white px-4 py-2.5 text-sm text-marrom outline-none focus:border-cobre";
const labelClass = "mb-1 block text-sm font-medium text-marrom/70";

/**
 * Configurações do site.
 * No MVP os valores iniciais vêm de siteConfig (env). O "Salvar" é visual.
 * Futuro: persistir na tabela `settings` do Supabase e ler dela em runtime.
 */
export default function ConfiguracoesPage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    whatsapp: siteConfig.whatsappNumber,
    instagram: siteConfig.instagram,
    email: siteConfig.email,
    notice: siteConfig.noticeText,
    metaPixelId: siteConfig.tracking.metaPixelId,
    gtmId: siteConfig.tracking.gtmId,
    ga4Id: siteConfig.tracking.ga4Id,
    googleAdsId: siteConfig.tracking.googleAdsId,
    googleAdsLabel: siteConfig.tracking.googleAdsConversionLabel,
  });

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: persistir via Supabase (tabela settings). Hoje é demonstração.
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <AdminHeader
        title="Configurações"
        description="Contato e integrações de tracking. (No MVP estes valores vêm do .env; ajuste lá para produção.)"
      />

      {saved && (
        <div className="mb-6 rounded-xl bg-emerald-100 px-4 py-3 text-sm text-emerald-700">
          Configurações salvas (demonstração).
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset className="grid gap-5 rounded-2xl border border-cobre/20 bg-white p-6 sm:grid-cols-2">
          <legend className="px-2 font-display text-lg text-vinho">
            Contato
          </legend>
          <div>
            <label className={labelClass}>WhatsApp (somente dígitos)</label>
            <input
              className={inputClass}
              value={form.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Instagram</label>
            <input
              className={inputClass}
              value={form.instagram}
              onChange={(e) => update("instagram", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>E-mail</label>
            <input
              className={inputClass}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Texto de aviso</label>
            <textarea
              rows={3}
              className={inputClass}
              value={form.notice}
              onChange={(e) => update("notice", e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset className="grid gap-5 rounded-2xl border border-cobre/20 bg-white p-6 sm:grid-cols-2">
          <legend className="px-2 font-display text-lg text-vinho">
            Tracking e conversões
          </legend>
          <div>
            <label className={labelClass}>Meta Pixel ID</label>
            <input
              className={inputClass}
              value={form.metaPixelId}
              onChange={(e) => update("metaPixelId", e.target.value)}
              placeholder="000000000000000"
            />
          </div>
          <div>
            <label className={labelClass}>Google Tag Manager ID</label>
            <input
              className={inputClass}
              value={form.gtmId}
              onChange={(e) => update("gtmId", e.target.value)}
              placeholder="GTM-XXXXXXX"
            />
          </div>
          <div>
            <label className={labelClass}>GA4 Measurement ID</label>
            <input
              className={inputClass}
              value={form.ga4Id}
              onChange={(e) => update("ga4Id", e.target.value)}
              placeholder="G-XXXXXXXXXX"
            />
          </div>
          <div>
            <label className={labelClass}>Google Ads Conversion ID</label>
            <input
              className={inputClass}
              value={form.googleAdsId}
              onChange={(e) => update("googleAdsId", e.target.value)}
              placeholder="AW-XXXXXXXXX"
            />
          </div>
          <div>
            <label className={labelClass}>Google Ads Conversion Label</label>
            <input
              className={inputClass}
              value={form.googleAdsLabel}
              onChange={(e) => update("googleAdsLabel", e.target.value)}
            />
          </div>
        </fieldset>

        <Button type="submit">Salvar configurações</Button>
      </form>
    </div>
  );
}
