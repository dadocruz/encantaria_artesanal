"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { ProductGrid } from "./ProductGrid";

interface Filter {
  label: string;
  // match recebe um produto e decide se ele entra no filtro
  match: (p: Product) => boolean;
}

const FILTERS: Filter[] = [
  { label: "Todos", match: () => true },
  { label: "Kits", match: (p) => p.category === "Kit Feitiço" },
  { label: "Velas", match: (p) => p.category === "Vela" },
  { label: "Banhos", match: (p) => p.category === "Banho" },
  { label: "Sprays", match: (p) => p.category === "Spray" },
  { label: "Incensos", match: (p) => p.category === "Incenso" },
  { label: "Sais", match: (p) => p.category === "Sal Mágico" },
  { label: "Pós Mágicos", match: (p) => p.category === "Pó Mágico" },
  { label: "Lua", match: (p) => p.collection === "Lua" || p.category === "Fases da Lua" },
  { label: "Amor", match: (p) => /amor/i.test(p.collection) || /amor/i.test(p.intention) },
  { label: "Proteção", match: (p) => /prote/i.test(p.collection) || /prote/i.test(p.intention) },
  { label: "Limpeza", match: (p) => /limpeza/i.test(p.intention) },
  { label: "Intuição", match: (p) => /intui/i.test(p.collection) || /intui/i.test(p.intention) },
  { label: "Altar", match: (p) => p.collection === "Altar" },
];

export function ProductsExplorer({ products }: { products: Product[] }) {
  const [active, setActive] = useState("Todos");

  const filtered = useMemo(() => {
    const filter = FILTERS.find((f) => f.label === active) ?? FILTERS[0];
    return products.filter((p) => p.status === "ativo" && filter.match(p));
  }, [active, products]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.label}
            onClick={() => setActive(f.label)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === f.label
                ? "border-vinho bg-vinho text-creme"
                : "border-cobre/40 text-marrom hover:border-cobre"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ProductGrid products={filtered} />
    </div>
  );
}
