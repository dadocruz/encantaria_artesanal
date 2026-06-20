import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminProductForm } from "@/components/admin/AdminProductForm";

export default function NovoProdutoPage() {
  return (
    <div>
      <AdminHeader
        title="Novo produto"
        description="Cadastre um novo produto no catálogo."
      />
      <AdminProductForm />
    </div>
  );
}
