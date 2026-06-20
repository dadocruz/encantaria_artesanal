"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { getWhatsAppLinkWithText } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";
import { createLead } from "@/services/leads";

const inputClass =
  "w-full rounded-xl border border-cobre/30 bg-white/60 px-4 py-3 text-sm text-marrom outline-none focus:border-cobre";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    interest: "",
    message: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Registra lead mockado (futuro: Supabase).
    await createLead({
      ...form,
      origin: "Formulário de contato",
      createdAt: new Date().toISOString(),
    });

    // Dispara eventos de conversão.
    trackEvent("submit_contact_form", { product_name: form.interest });
    trackEvent("generate_lead", { product_name: form.interest });

    setSent(true);
  }

  if (sent) {
    const waText = `Olá! Sou ${form.name} e enviei uma mensagem pelo site da Encantaria Artesanal. Interesse: ${form.interest}`;
    return (
      <div className="rounded-3xl border border-cobre/30 bg-creme/70 p-8 text-center shadow-soft">
        <h2 className="font-display text-2xl text-vinho">
          Mensagem recebida ✦
        </h2>
        <p className="mt-3 text-marrom/80">
          Obrigada pelo contato, {form.name || "querida"}! Em breve
          responderemos. Se preferir, fale com a gente agora pelo WhatsApp.
        </p>
        <a
          href={getWhatsAppLinkWithText(waText)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full bg-dourado px-6 py-3 text-sm font-medium text-marrom transition hover:bg-cobre hover:text-creme"
        >
          Falar pelo WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-marrom/70">Nome</label>
          <input
            required
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-marrom/70">WhatsApp</label>
          <input
            className={inputClass}
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm text-marrom/70">E-mail</label>
          <input
            type="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-marrom/70">Interesse</label>
          <input
            className={inputClass}
            value={form.interest}
            onChange={(e) => update("interest", e.target.value)}
            placeholder="Ex.: kit de amor-próprio"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm text-marrom/70">Mensagem</label>
        <textarea
          required
          rows={4}
          className={inputClass}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Enviar mensagem</Button>
        <a
          href={getWhatsAppLinkWithText(
            `Olá! Vim pelo site da ${siteConfig.name} e gostaria de mais informações.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-cobre underline-offset-4 hover:underline"
        >
          ou fale direto no WhatsApp
        </a>
      </div>
    </form>
  );
}
