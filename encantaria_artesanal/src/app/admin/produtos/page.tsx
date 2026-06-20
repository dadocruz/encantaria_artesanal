import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { listProducts } from "@/services/products";
import { formatPrice } from "@/lib/formatters";

export default async function AdminProductsPage() {
  const products = await listProducts();

  return (
    <div>
      <AdminHeader
        title="Produtos"
        description="Cadastre e edite os produtos da loja."
        action={
          <Link
            href="/admin/produtos/novo"
            className="rounded-full bg-vinho px-5 py-2.5 text-sm text-creme transition hover:bg-rosa-queimado"
          >
            + Novo produto
          </Link>
        }
      />

      <div className="overflow-x-auto rounded-2xl border border-cobre/20 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-creme/60 text-marrom/70">
            <tr>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Categoria</th>
              <th className="px-4 py-3">Preço</th>
              <th className="px-4 py-3">Estoque</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Destaque</th>
              <th className="px-4 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-cobre/10">
                <td className="px-4 py-3 font-medium text-vinho">{p.name}</td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">{formatPrice(p.price)}</td>
                <td className="px-4 py-3">{p.stock}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs ${
                      p.status === "ativo"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {p.status === "ativo" ? "Ativo" : "Inativo"}
                  </span>
                </td>
                <td className="px-4 py-3">{p.featured ? "★" : "—"}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/produtos/${p.id}`}
                    className="text-cobre hover:underline"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
