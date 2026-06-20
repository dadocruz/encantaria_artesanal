import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { MetaPixel } from "@/components/tracking/MetaPixel";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/tracking/GoogleTagManager";
import { GoogleAnalytics } from "@/components/tracking/GoogleAnalytics";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Produtos Místicos e Rituais Artesanais`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description:
      "Produtos místicos artesanais para pequenos rituais de autocuidado, proteção, amor-próprio e conexão.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable}`}
    >
      <head>
        <GoogleTagManager />
      </head>
      <body className="font-sans">
        <GoogleTagManagerNoScript />
        <MetaPixel />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
