import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatters";

/** Metadata base reutilizado por páginas. */
export function buildMetadata(opts: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const title = opts.title
    ? `${opts.title} | ${siteConfig.name}`
    : `${siteConfig.name} | Produtos Místicos e Rituais Artesanais`;
  const description = opts.description ?? siteConfig.description;
  const url = `${siteConfig.url}${opts.path ?? ""}`;
  const image = opts.image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** JSON-LD: Organization. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-encantaria.png`,
    sameAs: [siteConfig.instagram],
  };
}

/** JSON-LD: WebSite. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

/** JSON-LD: Product. */
export function productJsonLd(product: Product) {
  const price = product.promoPrice ?? product.price;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.length
      ? product.images.map((i) => `${siteConfig.url}${i}`)
      : [`${siteConfig.url}${siteConfig.ogImage}`],
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/produtos/${product.slug}`,
      priceCurrency: "BRL",
      price: price.toFixed(2),
      availability:
        product.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };
}

/** JSON-LD: BreadcrumbList. */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/** String legível de preço para uso em metadata. */
export function productPriceLabel(product: Product): string {
  return formatPrice(product.promoPrice ?? product.price);
}
