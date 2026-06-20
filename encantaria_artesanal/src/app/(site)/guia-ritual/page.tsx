import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SafetyNotice } from "@/components/SafetyNotice";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Guia Ritual",
  description:
    "Um guia simples para escolher sua intenção, preparar seu espaço e viver seus rituais com velas, banhos, sprays e incensos.",
  path: "/guia-ritual",
});

const SECTIONS = [
  {
    title: "Como escolher sua intenção",
    text: "Comece ouvindo o que você precisa agora: limpeza, proteção, amor-próprio, intuição ou conexão. A intenção é o coração de qualquer ritual.",
  },
  {
    title: "Como preparar seu espaço",
    text: "Escolha um canto tranquilo, respire fundo e organize o ambiente. Luz suave, silêncio e presença já transformam o momento.",
  },
  {
    title: "Como usar velas",
    text: "Acenda a vela firmando sua intenção. Deixe queimar em local seguro, ventilado e nunca sem supervisão.",
  },
  {
    title: "Como usar banhos",
    text: "Após o banho habitual, despeje o preparo do pescoço para baixo, sentindo a água como um símbolo de renovação.",
  },
  {
    title: "Como usar sprays",
    text: "Borrife no ambiente ou sobre tecidos, perfumando o espaço com a energia simbólica que você deseja cultivar.",
  },
  {
    title: "Como usar incensos",
    text: "Acenda a vareta, apague a chama e conduza a fumaça pelo ambiente com a sua intenção. Use sempre sobre suporte adequado.",
  },
  {
    title: "Como escolher pela fase da lua",
    text: "Lua Nova para começos, Crescente para expansão, Cheia para celebração e manifestação, Minguante para soltar e encerrar.",
  },
  {
    title: "Cuidados importantes",
    text: "Produtos de uso simbólico e sensorial. Mantenha longe de crianças e animais, faça teste de sensibilidade na pele e nunca deixe velas ou incensos acesos sem supervisão.",
  },
];

export default function GuiaRitualPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Guia Ritual"
          title="Pequenos rituais, grandes presenças"
          subtitle="Um ritual não precisa ser complexo. Ele precisa ter presença, intenção e cuidado."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SECTIONS.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-cobre/20 bg-creme/60 p-6 shadow-soft"
            >
              <h2 className="font-display text-xl text-vinho">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-marrom/80">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <SafetyNotice />
        </div>
      </Container>
    </section>
  );
}
