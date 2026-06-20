import type { ProductCategory } from "@/types/product";

/**
 * Imagem fictícia premium gerada via CSS/SVG, por categoria de produto.
 * Usada enquanto não há fotos reais. Para usar foto real, basta preencher
 * product.images — o ProductCard/página dão prioridade à imagem real.
 */

const PALETTES: Record<
  ProductCategory,
  { from: string; to: string; accent: string }
> = {
  "Kit Feitiço": { from: "#6F2638", to: "#3A241F", accent: "#C99A4A" },
  Vela: { from: "#B65B61", to: "#6F2638", accent: "#E8B7B7" },
  Banho: { from: "#7A7B52", to: "#3A241F", accent: "#E8B7B7" },
  Spray: { from: "#B65B61", to: "#1B1016", accent: "#C99A4A" },
  Incenso: { from: "#B86B38", to: "#3A241F", accent: "#F4E8D7" },
  "Sal Mágico": { from: "#E8B7B7", to: "#B65B61", accent: "#F4E8D7" },
  "Pó Mágico": { from: "#C99A4A", to: "#6F2638", accent: "#F4E8D7" },
  "Fases da Lua": { from: "#1B1016", to: "#6F2638", accent: "#C99A4A" },
};

function Stars({ color }: { color: string }) {
  return (
    <g fill={color} opacity="0.85">
      <circle cx="40" cy="50" r="2" />
      <circle cx="260" cy="40" r="1.6" />
      <circle cx="80" cy="90" r="1.2" />
      <circle cx="220" cy="80" r="2.2" />
      <circle cx="150" cy="35" r="1.4" />
      <circle cx="300" cy="110" r="1.6" />
    </g>
  );
}

function CategoryArt({ category, accent }: { category: ProductCategory; accent: string }) {
  switch (category) {
    case "Vela":
      return (
        <g>
          <rect x="160" y="150" width="32" height="90" rx="6" fill={accent} opacity="0.9" />
          <ellipse cx="176" cy="150" rx="16" ry="6" fill="#fff" opacity="0.6" />
          <path d="M176 110 C168 124 184 128 176 150 C170 134 184 130 176 110Z" fill="#F4E8D7" />
          <circle cx="176" cy="128" r="14" fill="#C99A4A" opacity="0.4" />
        </g>
      );
    case "Incenso":
      return (
        <g stroke={accent} strokeWidth="3" fill="none" opacity="0.9">
          <line x1="150" y1="120" x2="150" y2="250" />
          <line x1="176" y1="120" x2="176" y2="250" />
          <line x1="202" y1="120" x2="202" y2="250" />
          <path d="M150 120 C140 100 160 90 150 70" opacity="0.5" />
          <path d="M176 120 C166 100 186 90 176 70" opacity="0.5" />
        </g>
      );
    case "Spray":
    case "Pó Mágico":
      return (
        <g>
          <rect x="150" y="140" width="52" height="100" rx="12" fill={accent} opacity="0.9" />
          <rect x="166" y="118" width="20" height="26" rx="4" fill="#F4E8D7" />
          <rect x="158" y="170" width="36" height="30" rx="4" fill="#fff" opacity="0.4" />
        </g>
      );
    case "Banho":
      return (
        <g>
          <path d="M140 160 h72 l-10 80 a8 8 0 0 1 -8 7 h-36 a8 8 0 0 1 -8 -7 Z" fill={accent} opacity="0.9" />
          <ellipse cx="176" cy="160" rx="36" ry="9" fill="#F4E8D7" opacity="0.7" />
          <path d="M158 200 q18 14 36 0" stroke="#7A7B52" strokeWidth="3" fill="none" />
        </g>
      );
    case "Sal Mágico":
      return (
        <g>
          <rect x="146" y="150" width="60" height="90" rx="10" fill={accent} opacity="0.85" />
          <ellipse cx="176" cy="150" rx="30" ry="8" fill="#F4E8D7" />
          <circle cx="166" cy="190" r="3" fill="#fff" />
          <circle cx="184" cy="200" r="2.4" fill="#fff" />
          <circle cx="176" cy="210" r="2.8" fill="#fff" />
        </g>
      );
    case "Fases da Lua":
      return (
        <g>
          <circle cx="176" cy="150" r="46" fill="#F4E8D7" opacity="0.95" />
          <circle cx="196" cy="142" r="40" fill={accent} opacity="0.85" />
        </g>
      );
    case "Kit Feitiço":
    default:
      return (
        <g>
          <rect x="120" y="140" width="112" height="110" rx="10" fill={accent} opacity="0.9" />
          <rect x="138" y="160" width="76" height="72" rx="6" fill="#1B1016" opacity="0.25" />
          <path d="M176 168 l6 14 15 1 -11 10 4 15 -14 -8 -14 8 4 -15 -11 -10 15 -1Z" fill="#F4E8D7" />
        </g>
      );
  }
}

export function ProductMockImage({
  category,
  className = "",
}: {
  category: ProductCategory;
  className?: string;
}) {
  const palette = PALETTES[category] ?? PALETTES["Kit Feitiço"];
  return (
    <svg
      viewBox="0 0 352 300"
      className={`h-full w-full ${className}`}
      role="img"
      aria-label={`Ilustração de ${category}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${category}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
      </defs>
      <rect width="352" height="300" fill={`url(#g-${category})`} />
      <circle cx="290" cy="60" r="38" fill={palette.accent} opacity="0.18" />
      <Stars color={palette.accent} />
      <CategoryArt category={category} accent={palette.accent} />
    </svg>
  );
}
