"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product, ProductCategory } from "@/types/product";
import { collections } from "@/data/collections";
import { slugify } from "@/lib/formatters";
import { Button } from "@/components/ui/Button";
import { ImageUpload } from "./ImageUpload";

const CATEGORIES: ProductCategory[] = [
  "Kit Feitiço",
  "Vela",
  "Banho",
  "Spray",
  "Incenso",
  "Sal Mágico",
  "Pó Mágico",
  "Fases da Lua",
];

const inputClass =
  "w-full rounded-xl border border-cobre/30 bg-white px-4 py-2.5 text-sm text-marrom outline-none focus:border-cobre";
const labelClass = "mb-1 block text-sm font-medium text-marrom/70";

/**
 * Formulário de produto (novo/editar).
 * No MVP, ao salvar apenas mostra um aviso (não persiste).
 * Futuro: supabase.from('products').insert/update(...).
 */
export function AdminProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const [name, setName] = useState(product?.name ?? "");
  const [slug, setSlug] = useState(product?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(product));
  const [saved, setSaved] = useState(false);

  function handleNameChange(value: string) {
    setName(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: persistir via Supabase. Hoje é apenas demonstração visual.
    setSaved(true);
    setTimeout(() => router.push("/admin/produtos"), 1200);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {saved && (
        <div className="rounded-xl bg-emerald-100 px-4 py-3 text-sm text-emerald-700">
          Produto salvo (demonstração). Redirecionando…
        </div>
      )}

      <fieldset className="grid gap-5 rounded-2xl border border-cobre/20 bg-white p-6 sm:grid-cols-2">
        <legend className="px-2 font-display text-lg text-vinho">
          Informações principais
        </legend>
        <div>
          <label className={labelClass}>Nome do produto</label>
          <input
            required
            className={inputClass}
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </div>
        <div>
          <label className={labelClass}>Slug</label>
          <input
            className={inputClass}
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setSlugTouched(true);
            }}
          />
        </div>
        <div>
          <label className={labelClass}>Categoria</label>
          <select
            className={inputClass}
            defaultValue={product?.category ?? CATEGORIES[0]}
          >
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Coleção</label>
          <select
            className={inputClass}
            defaultValue={product?.collection ?? collections[0].name}
          >
            {collections.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Intenção</label>
          <input
            className={inputClass}
            defaultValue={product?.intention ?? ""}
          />
        </div>
        <div>
          <label className={labelClass}>Tags (separadas por vírgula)</label>
          <input
            className={inputClass}
            defaultValue={product?.tags.join(", ") ?? ""}
          />
        </div>
      </fieldset>

      <fieldset className="grid gap-5 rounded-2xl border border-cobre/20 bg-white p-6 sm:grid-cols-3">
        <legend className="px-2 font-display text-lg text-vinho">
          Preço e estoque
        </legend>
        <div>
          <label className={labelClass}>Preço (R$)</label>
          <input
            type="number"
            step="0.01"
            className={inputClass}
            defaultValue={product?.price ?? ""}
          />
        </div>
        <div>
          <label className={labelClass}>Preço promocional (R$)</label>
          <input
            type="number"
            step="0.01"
            className={inputClass}
            defaultValue={product?.promoPrice ?? ""}
          />
        </div>
        <div>
          <label className={labelClass}>Estoque</label>
          <input
            type="number"
            className={inputClass}
            defaultValue={product?.stock ?? 0}
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-marrom/70">
          <input
            type="checkbox"
            defaultChecked={product ? product.status === "ativo" : true}
          />
          Produto ativo
        </label>
        <label className="flex items-center gap-2 text-sm text-marrom/70">
          <input type="checkbox" defaultChecked={product?.featured ?? false} />
          Produto em destaque
        </label>
      </fieldset>

      <fieldset className="space-y-5 rounded-2xl border border-cobre/20 bg-white p-6">
        <legend className="px-2 font-display text-lg text-vinho">
          Descrições
        </legend>
        <div>
          <label className={labelClass}>Descrição curta</label>
          <input
            className={inputClass}
            defaultValue={product?.shortDescription ?? ""}
          />
        </div>
        <div>
          <label className={labelClass}>Descrição longa</label>
          <textarea
            rows={4}
            className={inputClass}
            defaultValue={product?.longDescription ?? ""}
          />
        </div>
        <div>
          <label className={labelClass}>Itens inclusos (um por linha)</label>
          <textarea
            rows={3}
            className={inputClass}
            defaultValue={product?.items?.join("\n") ?? ""}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Modo de uso</label>
            <textarea
              rows={3}
              className={inputClass}
              defaultValue={product?.usage ?? ""}
            />
          </div>
          <div>
            <label className={labelClass}>Cuidados</label>
            <textarea
              rows={3}
              className={inputClass}
              defaultValue={product?.care ?? ""}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5 rounded-2xl border border-cobre/20 bg-white p-6">
        <legend className="px-2 font-display text-lg text-vinho">
          Imagens
        </legend>
        <ImageUpload />
      </fieldset>

      <fieldset className="grid gap-5 rounded-2xl border border-cobre/20 bg-white p-6 sm:grid-cols-2">
        <legend className="px-2 font-display text-lg text-vinho">SEO</legend>
        <div>
          <label className={labelClass}>SEO title</label>
          <input
            className={inputClass}
            defaultValue={product?.seoTitle ?? ""}
          />
        </div>
        <div>
          <label className={labelClass}>SEO description</label>
          <input
            className={inputClass}
            defaultValue={product?.seoDescription ?? ""}
          />
        </div>
      </fieldset>

      <div className="flex gap-3">
        <Button type="submit">
          {product ? "Salvar alterações" : "Cadastrar produto"}
        </Button>
        <button
          type="button"
          onClick={() => router.push("/admin/produtos")}
          className="rounded-full border border-cobre/40 px-6 py-3 text-sm text-marrom hover:border-cobre"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
