import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductsExplorer } from "@/components/product/ProductsExplorer";
import { listProducts } from "@/services/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Produtos",
  description:
    "Velas, banhos, incensos, sprays, sais, pós mágicos e kits ritualísticos artesanais. Escolha pela sua intenção.",
  path: "/produtos",
});

export default async function ProductsPage() {
  const products = await listProducts();
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Nossos produtos"
          subtitle="Cada item é feito à mão, com intenção, aroma e símbolo. Use os filtros para encontrar o seu ritual."
        />
        <div className="mt-12">
          <ProductsExplorer products={products} />
        </div>
      </Container>
    </section>
  );
}
