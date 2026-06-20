"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/formatters";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackPurchaseIntent } from "@/lib/tracking";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-xl border border-cobre/30 bg-white/60 px-4 py-3 text-sm text-marrom outline-none focus:border-cobre";

export function CheckoutForm() {
  const { items, subtotal, setQuantity, removeItem, clear } = useCart();
  const router = useRouter();
  const [customer, setCustomer] = useState({
    name: "",
    whatsapp: "",
    cep: "",
    notes: "",
  });

  function update(field: keyof typeof customer, value: string) {
    setCustomer((c) => ({ ...c, [field]: value }));
  }

  function handleFinish() {
    const link = getWhatsAppLink({
      customerName: customer.name,
      cep: customer.cep,
      notes: customer.notes,
      items: items.map((i) => ({
        productName: i.name,
        quantity: i.quantity,
        unitPrice: i.price,
        url: `${siteConfig.url}/produtos/${i.slug}`,
      })),
    });

    // Dispara evento + conversão (purchase_intent / begin_checkout).
    trackPurchaseIntent({ value: subtotal });

    // Abre o WhatsApp.
    window.open(link, "_blank", "noopener,noreferrer");

    // Limpa o carrinho e leva para a página de obrigado.
    clear();
    router.push("/obrigado");
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-cobre/20 bg-creme/60 p-12 text-center shadow-soft">
        <p className="text-marrom/70">Seu pedido está vazio.</p>
        <Link
          href="/produtos"
          className="mt-4 inline-flex rounded-full bg-vinho px-6 py-3 text-sm text-creme transition hover:bg-rosa-queimado"
        >
          Escolher produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* Resumo */}
      <div>
        <h2 className="font-display text-2xl text-vinho">Resumo do pedido</h2>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-cobre/20 bg-creme/60 p-4"
            >
              <div>
                <p className="font-display text-vinho">{item.name}</p>
                <p className="text-sm text-marrom/70">
                  {formatPrice(item.price)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(item.id, item.quantity - 1)}
                  className="h-7 w-7 rounded-full border border-cobre/40"
                  aria-label="Diminuir"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{item.quantity}</span>
                <button
                  onClick={() => setQuantity(item.id, item.quantity + 1)}
                  className="h-7 w-7 rounded-full border border-cobre/40"
                  aria-label="Aumentar"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-2 text-xs text-marrom/50 hover:text-rosa-queimado"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between border-t border-cobre/20 pt-4">
          <span className="text-marrom/70">Subtotal</span>
          <span className="font-display text-2xl text-vinho">
            {formatPrice(subtotal)}
          </span>
        </div>
      </div>

      {/* Dados da cliente */}
      <div>
        <h2 className="font-display text-2xl text-vinho">Seus dados</h2>
        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-marrom/70">Nome</label>
            <input
              className={inputClass}
              value={customer.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-marrom/70">WhatsApp</label>
            <input
              className={inputClass}
              value={customer.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-marrom/70">CEP</label>
            <input
              className={inputClass}
              value={customer.cep}
              onChange={(e) => update("cep", e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-marrom/70">
              Observações
            </label>
            <textarea
              rows={3}
              className={inputClass}
              value={customer.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Embrulho para presente, preferências, etc."
            />
          </div>
          <Button onClick={handleFinish} className="w-full">
            Finalizar pelo WhatsApp
          </Button>
          <p className="text-center text-xs text-marrom/60">
            Você será levada ao WhatsApp com o resumo do pedido já preenchido.
          </p>
        </div>
      </div>
    </div>
  );
}
