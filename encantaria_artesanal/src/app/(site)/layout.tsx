import type { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <SEOJsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Header />
      <CartDrawer />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </CartProvider>
  );
}
