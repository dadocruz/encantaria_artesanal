import Link from "next/link";
import type { Collection } from "@/types/product";

const ICONS: Record<string, string> = {
  Limpeza: "✦",
  Proteção: "◆",
  "Amor-Próprio": "❀",
  Intuição: "☾",
  Lua: "☽",
  "Fases da Lua": "☽",
  Elementais: "✶",
};

export function CollectionCard({
  collection,
  href = "/produtos",
}: {
  collection: Collection;
  href?: string;
}) {
  const icon = ICONS[collection.name] ?? "✧";
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-3xl border border-cobre/20 bg-gradient-to-br from-creme/80 to-rosa-claro/20 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="text-3xl text-cobre transition-transform group-hover:scale-110">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-xl text-vinho">{collection.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-marrom/75">
        {collection.description}
      </p>
    </Link>
  );
}
