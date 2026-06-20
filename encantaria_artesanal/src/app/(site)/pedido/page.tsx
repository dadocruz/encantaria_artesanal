import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CheckoutForm } from "@/components/cart/CheckoutForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Seu pedido",
  description: "Finalize seu pedido da Encantaria Artesanal pelo WhatsApp.",
  path: "/pedido",
});

export default function PedidoPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Pedido"
          title="Finalize seu ritual"
          subtitle="Confira os itens, preencha seus dados e finalize de forma simples pelo WhatsApp."
        />
        <div className="mt-12">
          <CheckoutForm />
        </div>
      </Container>
    </section>
  );
}
