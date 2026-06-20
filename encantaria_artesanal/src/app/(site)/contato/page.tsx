import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com a Encantaria Artesanal. Tire dúvidas, peça kits personalizados ou faça seu pedido pelo WhatsApp.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Contato"
              title="Vamos conversar?"
              subtitle="Conte o que você procura. Respondemos com carinho e ajudamos a escolher o ritual ideal."
            />
            <div className="mt-8 space-y-3 text-sm text-marrom/80">
              <p>
                Instagram:{" "}
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cobre hover:underline"
                >
                  {siteConfig.instagramHandle}
                </a>
              </p>
              <p>
                E-mail:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cobre hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
