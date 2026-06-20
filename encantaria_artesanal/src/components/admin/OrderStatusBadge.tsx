import type { OrderStatus } from "@/types/order";
import { ORDER_STATUS_LABEL } from "@/types/order";

const STYLES: Record<OrderStatus, string> = {
  novo: "bg-blue-100 text-blue-700",
  em_atendimento: "bg-amber-100 text-amber-700",
  aguardando_pagamento: "bg-orange-100 text-orange-700",
  pago: "bg-emerald-100 text-emerald-700",
  producao: "bg-purple-100 text-purple-700",
  enviado: "bg-cyan-100 text-cyan-700",
  finalizado: "bg-green-100 text-green-700",
  cancelado: "bg-rose-100 text-rose-700",
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${STYLES[status]}`}
    >
      {ORDER_STATUS_LABEL[status]}
    </span>
  );
}
