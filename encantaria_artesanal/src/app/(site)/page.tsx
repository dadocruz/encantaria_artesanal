import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductMockImage } from "@/components/product/ProductMockImage";
import { CollectionCard } from "@/components/CollectionCard";
import { RitualStep } from "@/components/RitualStep";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { WhatsAppButton } from "@/components/product/WhatsAppButton";
import { listProducts, listFeaturedProducts } from "@/services/products";
import { collections } from "@/data/collections";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/formatters";

const HOME_COLLECTIONS = [
  "Limpeza",
  "Proteção",
  "Amor-Próprio",
  "Intuição",
  "Fases da Lua",
  "Elementais",
];

export default async function HomePage() {
  const all = await listProducts();
  const featured = await listFeaturedProducts();
  const hero = featured.find((p) => p.slug === "a-bruxa-do-amor") ?? all[0];
  const mostWanted = featured.slice(0, 3);
  const homeCollections = collections.filter((c) =>
    HOME_COLLECTIONS.includes(c.name),
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cobre">
              Magia cotidiana · feita à mão
            </p>
            <h1 className="font-display text-4xl leading-tight text-vinho sm:text-5xl">
              Rituais artesanais para encantar sua energia.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-marrom/80">
              Produtos místicos feitos à mão para autocuidado, proteção,
              amor-próprio, intuição e conexão com os ciclos da natureza.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/produtos">Conhecer produtos</ButtonLink>
              {hero && (
                <WhatsAppButton
                  product={hero}
                  variant="secondary"
                  label="Pedir pelo WhatsApp"
                />
              )}
            </div>
          </div>

          {/* Mock visual premium */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-[2rem] border border-cobre/30 shadow-glow">
              {hero && <ProductMockImage category={hero.category} className="aspect-square" />}
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-cobre/30 bg-creme px-5 py-3 shadow-soft sm:block">
              <p className="font-display text-vinho">Você é seu próprio feitiço.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* PRODUTO DESTAQUE */}
      {hero && (
        <section className="py-12">
          <Container>
            <div className="grid items-center gap-10 rounded-[2rem] border border-cobre/20 bg-gradient-to-br from-rosa-claro/25 to-creme/60 p-8 md:grid-cols-2 md:p-12">
              <div className="overflow-hidden rounded-3xl border border-cobre/20 shadow-soft">
                <ProductMockImage category={hero.category} className="aspect-[4/3]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cobre">
                  Produto em destaque
                </p>
                <h2 className="mt-2 font-display text-3xl text-vinho sm:text-4xl">
                  {hero.name}
                </h2>
                <p className="mt-4 leading-relaxed text-marrom/80">
                  Um kit artesanal criado para rituais de amor-próprio, presença
                  e florescimento interior.
                </p>
                <p className="mt-4 font-display text-xl italic text-rosa-queimado">
                  “O amor floresce de dentro.”
                </p>
                <div className="mt-3 font-display text-2xl text-vinho">
                  {formatPrice(hero.promoPrice ?? hero.price)}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={`/produtos/${hero.slug}`}>
                    Ver produto
                  </ButtonLink>
                  <AddToCartButton product={hero} variant="gold" />
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* COLEÇÕES EM DESTAQUE */}
      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Coleções"
            title="Escolha pela sua intenção"
            subtitle="Cada coleção reúne produtos pensados para um momento e um sentimento."
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeCollections.map((c) => (
              <CollectionCard
                key={c.slug}
                collection={c}
                href="/colecoes"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUTOS MAIS PEDIDOS */}
      <section className="py-12">
        <Container>
          <SectionTitle
            eyebrow="Favoritos"
            title="Produtos mais pedidos"
            subtitle="Os rituais que mais encantam a nossa comunidade."
          />
          <div className="mt-10">
            <ProductGrid products={mostWanted} />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/produtos" variant="secondary">
              Ver todos os produtos
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Como funciona"
            title="Quatro passos para o seu ritual"
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <RitualStep number={1} title="Escolha sua intenção" description="Limpeza, proteção, amor-próprio, intuição… ouça o que você precisa agora." />
            <RitualStep number={2} title="Prepare seu espaço" description="Reserve um momento tranquilo, respire e crie um ambiente acolhedor." />
            <RitualStep number={3} title="Viva seu ritual" description="Use os elementos como símbolos de presença, cuidado e conexão." />
            <RitualStep number={4} title="Faça seu pedido" description="Finalize de forma simples e direta pelo WhatsApp." />
          </div>
        </Container>
      </section>

      {/* SOBRE */}
      <section className="py-16">
        <Container>
          <div className="rounded-[2rem] bg-marrom px-8 py-14 text-center text-creme md:px-16">
            <p className="text-xs uppercase tracking-[0.3em] text-dourado">
              Sobre a Encantaria
            </p>
            <p className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-relaxed sm:text-3xl">
              A Encantaria Artesanal nasceu para transformar pequenos momentos em
              rituais de presença. Cada vela, banho, spray, incenso ou kit é
              criado com intenção, beleza e cuidado manual, unindo aroma, símbolo
              e afeto em uma experiência mística e sensorial.
            </p>
            <div className="mt-8">
              <ButtonLink href="/sobre" variant="gold">
                Conheça nossa história
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* INSTAGRAM */}
      <section className="py-12">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionTitle
              eyebrow="Comunidade"
              title="Acompanhe nossos bastidores"
              subtitle="Lançamentos, pequenos rituais e a vida da marca no Instagram."
              center
            />
            <ButtonLink href={siteConfig.instagram} external variant="secondary">
              Seguir {siteConfig.instagramHandle}
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-16">
        <Container>
          <div className="rounded-[2rem] border border-cobre/30 bg-gradient-to-br from-rosa-claro/30 to-dourado/10 px-8 py-14 text-center">
            <h2 className="font-display text-3xl text-vinho sm:text-4xl">
              Leve mais encanto para o seu dia.
            </h2>
            <div className="mt-8">
              <ButtonLink href="/produtos">Escolher meu ritual</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
