import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminStatsCard } from "@/components/admin/AdminStatsCard";
import { OrderStatusBadge } from "@/components/admin/OrderStatusBadge";
import { listProducts } from "@/services/products";
import { listOrders } from "@/services/orders";
import { listLeads } from "@/services/leads";
import { formatPrice, formatDate } from "@/lib/formatters";

export default async function DashboardPage() {
  const products = await listProducts();
  const orders = await listOrders();
  const leads = await listLeads();

  const activeProducts = products.filter((p) => p.status === "ativo").length;
  const featuredProducts = products.filter((p) => p.featured).length;
  const pendingOrders = orders.filter((o) =>
    ["novo", "em_atendimento", "aguardando_pagamento"].includes(o.status),
  ).length;

  return (
    <div>
      <AdminHeader
        title="Dashboard"
        description="Visão geral da loja Encantaria Artesanal."
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <AdminStatsCard label="Total de produtos" value={products.length} />
        <AdminStatsCard label="Produtos ativos" value={activeProducts} />
        <AdminStatsCard label="Produtos em destaque" value={featuredProducts} />
        <AdminStatsCard label="Total de pedidos" value={orders.length} />
        <AdminStatsCard
          label="Pedidos pendentes"
          value={pendingOrders}
          hint="Novos, em atendimento e aguardando pagamento"
        />
        <AdminStatsCard label="Leads recebidos" value={leads.length} />
      </div>

      <section className="mt-10">
        <h2 className="mb-4 font-display text-xl text-vinho">
          Pedidos recentes
        </h2>
        <div className="overflow-hidden rounded-2xl border border-cobre/20 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-creme/60 text-marrom/70">
              <tr>
                <th className="px-4 py-3">Pedido</th>
                <th className="px-4 py-3">Cliente</th>
                <th className="px-4 py-3">Valor</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Data</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((o) => (
                <tr key={o.id} className="border-t border-cobre/10">
                  <td className="px-4 py-3 font-medium text-vinho">{o.id}</td>
                  <td className="px-4 py-3">{o.customerName}</td>
                  <td className="px-4 py-3">{formatPrice(o.total)}</td>
                  <td className="px-4 py-3">
                    <OrderStatusBadge status={o.status} />
                  </td>
                  <td className="px-4 py-3 text-marrom/60">
                    {formatDate(o.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
