import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatters";
import { ProductMockImage } from "./ProductMockImage";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  const price = product.promoPrice ?? product.price;
  const hasPromo = product.promoPrice != null && product.promoPrice < product.price;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-cobre/20 bg-creme/60 shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <Link
        href={`/produtos/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        {product.images[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProductMockImage category={product.category} />
        )}
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-dourado/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-marrom">
            Destaque
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-cobre">
          {product.category} · {product.intention}
        </p>
        <h3 className="mt-1 font-display text-xl text-vinho">
          <Link href={`/produtos/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-marrom/75">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="font-display text-lg text-vinho">
            {formatPrice(price)}
          </span>
          {hasPromo && (
            <span className="text-sm text-marrom/40 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={`/produtos/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-cobre/50 px-4 py-2 text-xs font-medium text-marrom transition hover:border-cobre"
          >
            Ver detalhes
          </Link>
          <AddToCartButton
            product={product}
            label="Adicionar"
            variant="primary"
            className="px-4 py-2 text-xs"
          />
        </div>
      </div>
    </article>
  );
}
