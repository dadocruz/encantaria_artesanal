"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

/**
 * Logo da marca.
 * Tenta carregar /brand/logo-encantaria.png. Se o arquivo não existir,
 * mostra um fallback textual elegante. Basta colocar o arquivo final em
 * public/brand/logo-encantaria.png para a imagem aparecer automaticamente.
 */
export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const textColor = variant === "light" ? "text-creme" : "text-vinho";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      {!imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/brand/logo-encantaria.png"
          alt={siteConfig.name}
          className="h-12 w-auto"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-xl tracking-wide ${textColor}`}
          >
            Encantaria
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-cobre">
            Artesanal
          </span>
        </span>
      )}
    </Link>
  );
}
