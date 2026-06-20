import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description:
    "A Encantaria Artesanal nasceu do desejo de transformar o cotidiano em ritual. Conheça as quatro presenças da marca.",
  path: "/sobre",
});

const SOCIAS = [
  {
    name: "Verônica",
    symbol: "A lamparina e o tarot",
    text: "Luz, leitura e direção.",
  },
  {
    name: "Thaís",
    symbol: "A bruxa",
    text: "Força, criação e sabedoria artesanal.",
  },
  {
    name: "Aline",
    symbol: "O cristal",
    text: "Intuição, clareza e conexão mística.",
  },
  {
    name: "Marisia Sahra",
    symbol: "A concha",
    text: "Mar, sensibilidade e mistério das águas.",
  },
];

export default function SobrePage() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Sobre"
          title="Feito à mão, com intenção"
          subtitle="A Encantaria Artesanal nasceu do desejo de transformar o cotidiano em ritual. Cada produto é feito à mão com cuidado, intenção e beleza, unindo símbolos, aromas, cores e elementos naturais em experiências místicas e sensoriais."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-cobre/20 bg-creme/60 p-8 shadow-soft">
            <h2 className="font-display text-2xl text-vinho">
              Beleza nos detalhes
            </h2>
            <p className="mt-4 leading-relaxed text-marrom/80">
              Acreditamos que o cuidado mora nos pequenos gestos. Por isso cada
              vela, banho, spray, incenso ou kit é pensado para despertar
              presença, afeto e conexão com os ciclos da natureza.
            </p>
          </div>
          <div className="rounded-3xl border border-cobre/20 bg-gradient-to-br from-rosa-claro/25 to-creme/60 p-8 shadow-soft">
            <h2 className="font-display text-2xl text-vinho">
              Magia cotidiana
            </h2>
            <p className="mt-4 leading-relaxed text-marrom/80">
              Não vendemos promessas. Oferecemos símbolos, beleza e intenção
              para que cada pessoa viva seus próprios rituais de autocuidado.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center font-display text-3xl text-vinho">
            As quatro presenças da Encantaria
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIAS.map((s) => (
              <div
                key={s.name}
                className="rounded-3xl border border-cobre/20 bg-creme/60 p-6 text-center shadow-soft"
              >
                <h3 className="font-display text-xl text-vinho">{s.name}</h3>
                <p className="mt-2 text-sm font-medium text-cobre">
                  {s.symbol}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-marrom/75">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
