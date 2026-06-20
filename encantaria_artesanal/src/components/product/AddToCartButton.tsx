"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

export function AddToCartButton({
  product,
  quantity = 1,
  variant = "primary",
  className = "",
  label = "Adicionar ao pedido",
}: {
  product: Product;
  quantity?: number;
  variant?: "primary" | "secondary" | "gold";
  className?: string;
  label?: string;
}) {
  const { addItem } = useCart();
  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => addItem(product, quantity)}
    >
      {label}
    </Button>
  );
}
