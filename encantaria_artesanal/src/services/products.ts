/**
 * Camada de dados de produtos.
 *
 * Hoje lê do mock em src/data/products.ts. Para ligar o Supabase no futuro,
 * basta trocar a implementação destas funções (a assinatura permanece igual),
 * por exemplo:
 *
 *   const { data } = await supabase.from('products').select('*');
 *   return data;
 *
 * Os componentes/páginas só conhecem estas funções — não o mock direto.
 */
import {
  getAllProducts,
  getFeaturedProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import type { Product } from "@/types/product";

export async function listProducts(): Promise<Product[]> {
  return getAllProducts();
}

export async function findProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  return getProductBySlug(slug);
}

export async function listFeaturedProducts(): Promise<Product[]> {
  return getFeaturedProducts();
}

export async function listRelatedProducts(
  product: Product,
): Promise<Product[]> {
  return getRelatedProducts(product);
}
