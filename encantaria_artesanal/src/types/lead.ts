/** Mapeia a futura tabela `leads` do Supabase. */
export interface Lead {
  id: string;
  name: string;
  whatsapp?: string;
  email?: string;
  interest?: string;
  message?: string;
  origin?: string;
  utmSource?: string;
  utmCampaign?: string;
  createdAt: string;
}

/** Mapeia a futura tabela `customers` do Supabase. */
export interface Customer {
  id: string;
  name: string;
  whatsapp?: string;
  email?: string;
  createdAt: string;
}

/** Mapeia a futura tabela `settings` do Supabase. */
export interface SiteSettings {
  whatsappNumber: string;
  instagramUrl: string;
  email: string;
  noticeText: string;
  metaPixelId: string;
  gtmId: string;
  ga4Id: string;
  googleAdsId: string;
  googleAdsConversionLabel: string;
}
