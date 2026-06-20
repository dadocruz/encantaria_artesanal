import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/formatters";

export interface WhatsAppItem {
  productName: string;
  quantity: number;
  unitPrice: number;
  url?: string;
}

export interface WhatsAppOrderData {
  items: WhatsAppItem[];
  customerName?: string;
  cep?: string;
  notes?: string;
}

/** Número do WhatsApp (apenas dígitos), vindo da config/env. */
export function getWhatsAppNumber(): string {
  return siteConfig.whatsappNumber.replace(/\D/g, "");
}

/** Monta a mensagem de um pedido para envio via WhatsApp. */
export function formatWhatsAppMessage(data: WhatsAppOrderData): string {
  const lines: string[] = [];
  lines.push("Olá! Vim pelo site da Encantaria Artesanal e quero fazer um pedido:");
  lines.push("");

  let total = 0;
  data.items.forEach((item) => {
    total += item.unitPrice * item.quantity;
    lines.push(`Produto: ${item.productName}`);
    lines.push(`Quantidade: ${item.quantity}`);
    lines.push(`Valor: ${formatPrice(item.unitPrice)}`);
    if (item.url) lines.push(`Link: ${item.url}`);
    lines.push("");
  });

  if (data.items.length > 1) {
    lines.push(`Total: ${formatPrice(total)}`);
    lines.push("");
  }

  lines.push(`Meu nome: ${data.customerName ?? ""}`);
  lines.push(`Meu CEP: ${data.cep ?? ""}`);
  lines.push(`Observações: ${data.notes ?? ""}`);

  return lines.join("\n");
}

/** Gera o link wa.me com a mensagem já codificada. */
export function getWhatsAppLink(data: WhatsAppOrderData): string {
  const number = getWhatsAppNumber();
  const message = formatWhatsAppMessage(data);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Link simples de WhatsApp com uma mensagem livre. */
export function getWhatsAppLinkWithText(text: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
