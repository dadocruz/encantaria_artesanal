import { siteConfig } from "@/config/site";

/**
 * Camada de tracking unificada e segura.
 * Cada evento é despachado para Meta Pixel, gtag (GA4 / Google Ads) e
 * dataLayer (GTM) — apenas quando os respectivos scripts estiverem carregados.
 * Nenhuma chamada quebra o site se o script não existir.
 */

export type TrackEventName =
  | "view_item"
  | "view_product"
  | "add_to_cart"
  | "begin_checkout"
  | "generate_lead"
  | "contact_whatsapp"
  | "purchase_intent"
  | "submit_contact_form";

export interface TrackPayload {
  product_id?: string;
  product_name?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

// Mapeia nossos eventos internos para os eventos padrão do Meta Pixel.
const META_EVENT_MAP: Partial<Record<TrackEventName, string>> = {
  view_item: "ViewContent",
  view_product: "ViewContent",
  add_to_cart: "AddToCart",
  begin_checkout: "InitiateCheckout",
  generate_lead: "Lead",
  contact_whatsapp: "Contact",
  purchase_intent: "Contact",
  submit_contact_form: "Lead",
};

type Gtag = (...args: unknown[]) => void;

interface TrackingWindow extends Window {
  fbq?: (...args: unknown[]) => void;
  gtag?: Gtag;
  dataLayer?: Record<string, unknown>[];
}

function getWindow(): TrackingWindow | null {
  if (typeof window === "undefined") return null;
  return window as TrackingWindow;
}

/** Dispara um evento para todas as plataformas configuradas. */
export function trackEvent(
  name: TrackEventName,
  payload: TrackPayload = {},
): void {
  const w = getWindow();
  if (!w) return;

  const data: TrackPayload = { currency: "BRL", ...payload };

  // 1) Meta Pixel
  try {
    if (typeof w.fbq === "function") {
      const metaEvent = META_EVENT_MAP[name];
      if (metaEvent) {
        w.fbq("track", metaEvent, {
          content_name: data.product_name,
          content_ids: data.product_id ? [data.product_id] : undefined,
          value: data.value,
          currency: data.currency,
        });
      }
    }
  } catch {
    // silencioso
  }

  // 2) GA4 (gtag)
  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", name, data);
    }
  } catch {
    // silencioso
  }

  // 3) GTM (dataLayer)
  try {
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: name, ...data });
    }
  } catch {
    // silencioso
  }
}

/**
 * Dispara uma conversão do Google Ads.
 * Usada em: clique no WhatsApp, finalização de pedido e envio de formulário.
 */
export function trackGoogleAdsConversion(payload: TrackPayload = {}): void {
  const w = getWindow();
  if (!w || typeof w.gtag !== "function") return;

  const { googleAdsId, googleAdsConversionLabel } = siteConfig.tracking;
  if (!googleAdsId || !googleAdsConversionLabel) return;

  try {
    w.gtag("event", "conversion", {
      send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
      value: payload.value,
      currency: payload.currency ?? "BRL",
    });
  } catch {
    // silencioso
  }
}

/** Atalho: clique no WhatsApp = evento + conversão. */
export function trackWhatsAppContact(payload: TrackPayload = {}): void {
  trackEvent("contact_whatsapp", payload);
  trackGoogleAdsConversion(payload);
}

/** Atalho: intenção de compra (finalizar pedido) = evento + conversão. */
export function trackPurchaseIntent(payload: TrackPayload = {}): void {
  trackEvent("purchase_intent", payload);
  trackEvent("begin_checkout", payload);
  trackGoogleAdsConversion(payload);
}
