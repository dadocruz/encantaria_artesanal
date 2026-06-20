/**
 * Camada de dados de pedidos (CRM).
 * Hoje retorna mocks. Futuro: tabelas `orders` + `order_items` no Supabase.
 */
import { mockOrders } from "@/data/mockOrders";
import type { Order } from "@/types/order";

export async function listOrders(): Promise<Order[]> {
  return mockOrders;
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  return mockOrders.find((o) => o.id === id);
}
