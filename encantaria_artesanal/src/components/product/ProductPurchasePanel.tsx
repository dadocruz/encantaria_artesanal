"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Dispara view_item / ViewContent ao abrir a página do produto.
  useEffect(() => {
    trackEvent("view_item", {
      product_id: product.id,
      product_name: product.name,
      value: product.promoPrice ?? product.price,
    });
  }, [product]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-marrom/70">Quantidade</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-9 w-9 rounded-full border border-cobre/40 text-marrom"
            aria-label="Diminuir"
          >
            −
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="h-9 w-9 rounded-full border border-cobre/40 text-marrom"
            aria-label="Aumentar"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button onClick={() => addItem(product, quantity)}>
          Adicionar ao pedido
        </Button>
        <WhatsAppButton product={product} quantity={quantity} />
      </div>
    </div>
  );
}
