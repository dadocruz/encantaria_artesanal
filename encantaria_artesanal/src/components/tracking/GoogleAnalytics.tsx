"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site";

/**
 * Google Analytics 4 (gtag) — carregado apenas se NEXT_PUBLIC_GA4_ID
 * estiver definido. A mesma instância gtag é usada para conversões do
 * Google Ads (src/lib/tracking.ts -> trackGoogleAdsConversion).
 */
export function GoogleAnalytics() {
  const { ga4Id, googleAdsId } = siteConfig.tracking;
  // Carrega o gtag se houver GA4 OU Google Ads configurado.
  const loaderId = ga4Id || googleAdsId;
  if (!loaderId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${ga4Id ? `gtag('config', '${ga4Id}');` : ""}
          ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
        `}
      </Script>
    </>
  );
}
