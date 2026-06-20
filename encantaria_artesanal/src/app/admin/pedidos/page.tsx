import { AdminHeader } from "@/components/admin/AdminHeader";
import { OrderStatusBadge } from "@/components/admin/OrderStatusBadge";
import { listOrders } from "@/services/orders";
import { formatPrice, formatDate } from "@/lib/formatters";

export default async function AdminOrdersPage() {
  const orders = await listOrders();

  return (
    <div>
      <AdminHeader
        title="Pedidos"
        description="CRM de pedidos recebidos via site e WhatsApp."
      />

      <div className="overflow-x-auto rounded-2xl border border-cobre/20 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-creme/60 text-marrom/70">
            <tr>
              <th className="px-4 py-3">Pedido</th>
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">WhatsApp</th>
              <th className="px-4 py-3">Produtos</th>
              <th className="px-4 py-3">Valor</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Origem</th>
              <th className="px-4 py-3">Data</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-cobre/10 align-top">
                <td className="px-4 py-3 font-medium text-vinho">{o.id}</td>
                <td className="px-4 py-3">
                  {o.customerName}
                  {o.notes && (
                    <span className="mt-1 block text-xs text-marrom/50">
                      {o.notes}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-marrom/70">{o.whatsapp}</td>
                <td className="px-4 py-3 text-marrom/70">
                  {o.items.map((it) => (
                    <span key={it.productId} className="block">
                      {it.quantity}× {it.productName}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-3">{formatPrice(o.total)}</td>
                <td className="px-4 py-3">
                  <OrderStatusBadge status={o.status} />
                </td>
                <td className="px-4 py-3 text-marrom/60">{o.origin ?? "—"}</td>
                <td className="px-4 py-3 text-marrom/60">
                  {formatDate(o.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
