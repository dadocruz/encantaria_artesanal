import { notFound } from "next/navigation";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminProductForm } from "@/components/admin/AdminProductForm";
import { listProducts } from "@/services/products";

export async function generateStaticParams() {
  const products = await listProducts();
  return products.map((p) => ({ id: p.id }));
}

export default async function EditarProdutoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = await listProducts();
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <div>
      <AdminHeader
        title={`Editar: ${product.name}`}
        description="Atualize as informações do produto."
      />
      <AdminProductForm product={product} />
    </div>
  );
}
