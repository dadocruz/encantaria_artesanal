import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductMockImage } from "@/components/product/ProductMockImage";
import { ProductPurchasePanel } from "@/components/product/ProductPurchasePanel";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SafetyNotice } from "@/components/SafetyNotice";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import {
  listProducts,
  findProductBySlug,
  listRelatedProducts,
} from "@/services/products";
import { formatPrice } from "@/lib/formatters";
import { buildMetadata, productJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const products = await listProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await findProductBySlug(slug);
  if (!product) return buildMetadata({ title: "Produto não encontrado" });
  return buildMetadata({
    title: product.seoTitle ?? product.name,
    description: product.seoDescription ?? product.shortDescription,
    path: `/produtos/${product.slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await findProductBySlug(slug);
  if (!product) notFound();

  const related = await listRelatedProducts(product);
  const price = product.promoPrice ?? product.price;

  return (
    <article className="py-10">
      <SEOJsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Início", url: "/" },
            { name: "Produtos", url: "/produtos" },
            { name: product.name, url: `/produtos/${product.slug}` },
          ]),
        ]}
      />
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-marrom/60">
          <Link href="/" className="hover:text-vinho">
            Início
          </Link>{" "}
          /{" "}
          <Link href="/produtos" className="hover:text-vinho">
            Produtos
          </Link>{" "}
          / <span className="text-marrom">{product.name}</span>
        </nav>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Galeria */}
          <div className="overflow-hidden rounded-[2rem] border border-cobre/20 shadow-soft">
            {product.images[0] ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={product.images[0]}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
            ) : (
              <ProductMockImage
                category={product.category}
                className="aspect-square"
              />
            )}
          </div>

          {/* Informações */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cobre">
              {product.category} · {product.intention}
            </p>
            <h1 className="mt-2 font-display text-4xl text-vinho">
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-display text-3xl text-vinho">
                {formatPrice(price)}
              </span>
              {product.promoPrice != null && (
                <span className="text-lg text-marrom/40 line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-marrom/80">
              {product.longDescription}
            </p>

            <div className="mt-8">
              <ProductPurchasePanel product={product} />
            </div>

            <div className="mt-8 space-y-6">
              {product.items && product.items.length > 0 && (
                <div>
                  <h2 className="font-display text-lg text-vinho">
                    O que vem
                  </h2>
                  <ul className="mt-2 list-inside list-disc text-sm text-marrom/80">
                    {product.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {product.usage && (
                <div>
                  <h2 className="font-display text-lg text-vinho">
                    Modo de uso
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-marrom/80">
                    {product.usage}
                  </p>
                </div>
              )}
              {product.care && (
                <div>
                  <h2 className="font-display text-lg text-vinho">Cuidados</h2>
                  <p className="mt-2 text-sm leading-relaxed text-marrom/80">
                    {product.care}
                  </p>
                </div>
              )}
              <SafetyNotice />
            </div>
          </div>
        </div>

        {/* Relacionados */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-8 font-display text-2xl text-vinho">
              Você também pode gostar
            </h2>
            <ProductGrid products={related} />
          </section>
        )}
      </Container>
    </article>
  );
}
