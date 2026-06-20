import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Obrigada",
    description: "Recebemos seu pedido. Obrigada por encantar seu dia conosco.",
    path: "/obrigado",
  }),
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-xl rounded-[2rem] border border-cobre/20 bg-creme/60 p-12 text-center shadow-soft">
          <span className="text-4xl">✦</span>
          <h1 className="mt-4 font-display text-4xl text-vinho">
            Pedido enviado!
          </h1>
          <p className="mt-4 leading-relaxed text-marrom/80">
            Obrigada por escolher a Encantaria Artesanal. Continue a conversa no
            WhatsApp para combinar pagamento e envio. Que seu ritual floresça ✦
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/produtos">Ver mais produtos</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Voltar ao início
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
