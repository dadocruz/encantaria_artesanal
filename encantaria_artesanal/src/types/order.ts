export type OrderStatus =
  | "novo"
  | "em_atendimento"
  | "aguardando_pagamento"
  | "pago"
  | "producao"
  | "enviado"
  | "finalizado"
  | "cancelado";

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

/** Mapeia as futuras tabelas `orders` + `order_items` do Supabase. */
export interface Order {
  id: string;
  customerName: string;
  whatsapp: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  notes?: string;
  origin?: string;
  cep?: string;
}

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  novo: "Novo",
  em_atendimento: "Em atendimento",
  aguardando_pagamento: "Aguardando pagamento",
  pago: "Pago",
  producao: "Produção",
  enviado: "Enviado",
  finalizado: "Finalizado",
  cancelado: "Cancelado",
};
