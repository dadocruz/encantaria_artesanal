"use client";

import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppContact } from "@/lib/tracking";
import type { Product } from "@/types/product";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200";
const variants = {
  primary: "bg-vinho text-creme hover:bg-rosa-queimado shadow-soft",
  secondary:
    "border border-cobre/50 bg-creme/60 text-marrom hover:border-cobre",
  gold: "bg-dourado text-marrom hover:bg-cobre hover:text-creme shadow-soft",
};

/** Botão "Pedir pelo WhatsApp" para a página/cartão de produto. */
export function WhatsAppButton({
  product,
  quantity = 1,
  variant = "gold",
  className = "",
  label = "Pedir pelo WhatsApp",
}: {
  product: Product;
  quantity?: number;
  variant?: keyof typeof variants;
  className?: string;
  label?: string;
}) {
  const price = product.promoPrice ?? product.price;
  const link = getWhatsAppLink({
    items: [
      {
        productName: product.name,
        quantity,
        unitPrice: price,
        url: `${siteConfig.url}/produtos/${product.slug}`,
      },
    ],
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      onClick={() =>
        trackWhatsAppContact({
          product_id: product.id,
          product_name: product.name,
          value: price * quantity,
        })
      }
    >
      {label}
    </a>
  );
}
