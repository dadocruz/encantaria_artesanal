export type ProductCategory =
  | "Kit Feitiço"
  | "Vela"
  | "Banho"
  | "Spray"
  | "Incenso"
  | "Sal Mágico"
  | "Pó Mágico"
  | "Fases da Lua";

export type ProductStatus = "ativo" | "inativo";

/**
 * Estrutura de produto. Mapeia diretamente a futura tabela `products`
 * do Supabase, para facilitar a migração de mock -> banco real.
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  collection: string;
  intention: string;
  price: number;
  promoPrice?: number | null;
  shortDescription: string;
  longDescription: string;
  items?: string[];
  usage?: string;
  care?: string;
  images: string[];
  status: ProductStatus;
  featured: boolean;
  stock: number;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  intention?: string;
}
