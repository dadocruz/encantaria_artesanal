"use client";

import Script from "next/script";
import { siteConfig } from "@/config/site";

/**
 * Google Tag Manager — carregado apenas se NEXT_PUBLIC_GTM_ID estiver definido.
 */
export function GoogleTagManager() {
  const id = siteConfig.tracking.gtmId;
  if (!id) return null;

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${id}');
      `}
    </Script>
  );
}

/** Fallback <noscript> do GTM, para colocar logo após a abertura do <body>. */
export function GoogleTagManagerNoScript() {
  const id = siteConfig.tracking.gtmId;
  if (!id) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}
