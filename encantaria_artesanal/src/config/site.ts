/**
 * Configuração central do site.
 * Valores sensíveis vêm de variáveis de ambiente (.env.local).
 * Veja .env.example para a lista completa.
 */
export const siteConfig = {
  name: "Encantaria Artesanal",
  shortName: "Encantaria",
  description:
    "Velas, banhos, incensos, sprays, sais e kits místicos artesanais para autocuidado, proteção, amor-próprio, intuição e conexão com os ciclos da natureza.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://encantariaartesanal.com",
  ogImage: "/og/encantaria-og.jpg",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/encantaria_artesanal",
  instagramHandle: "@encantaria_artesanal",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000",
  email: "contato@encantariaartesanal.com",
  noticeText:
    "Produto artesanal de uso simbólico, sensorial e ritualístico. Não substitui cuidados médicos, terapêuticos ou profissionais. Use com responsabilidade. Nunca deixe velas acesas sem supervisão.",
  keywords: [
    "produtos místicos",
    "loja mística",
    "velas artesanais",
    "banho energético",
    "kit ritualístico",
    "bruxaria natural",
    "autocuidado espiritual",
    "fases da lua",
    "incensos artesanais",
    "produtos ritualísticos",
    "magia cotidiana",
    "encantaria artesanal",
    "produtos esotéricos artesanais",
    "kit místico",
    "vela ritualística",
    "banho de ervas",
    "altar místico",
  ],
  // IDs de tracking — carregados apenas se preenchidos.
  tracking: {
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
  },
} as const;

export const mainNav = [
  { label: "Produtos", href: "/produtos" },
  { label: "Coleções", href: "/colecoes" },
  { label: "Guia Ritual", href: "/guia-ritual" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export type SiteConfig = typeof siteConfig;
