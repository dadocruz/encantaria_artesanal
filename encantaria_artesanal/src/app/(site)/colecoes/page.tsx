import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { collections } from "@/data/collections";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Coleções",
  description:
    "Conheça as coleções da Encantaria Artesanal: Linha Essencial, Kit Feitiços, Sabbats, Fases da Lua, Elementais e Divindades.",
  path: "/colecoes",
});

export default function CollectionsPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Coleções"
          title="Linhas e universos da Encantaria"
          subtitle="Cada coleção é um convite a um tipo de ritual e de intenção."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {collections.map((c) => (
            <div
              key={c.slug}
              className="rounded-3xl border border-cobre/20 bg-creme/60 p-7 shadow-soft"
            >
              <h2 className="font-display text-2xl text-vinho">{c.name}</h2>
              <p className="mt-3 leading-relaxed text-marrom/80">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
