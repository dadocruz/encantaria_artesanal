import type { Collection } from "@/types/product";

export const collections: Collection[] = [
  {
    slug: "linha-essencial",
    name: "Linha Essencial",
    description:
      "Produtos base para pequenos rituais cotidianos, criados para trazer presença, beleza e intenção ao dia a dia.",
  },
  {
    slug: "kit-feiticos",
    name: "Kit Feitiços",
    description:
      "Combinações artesanais pensadas para uma intenção específica, unindo elementos simbólicos, aroma, cor e ritual.",
  },
  {
    slug: "limpeza",
    name: "Limpeza",
    description:
      "Produtos para rituais simbólicos de renovação, leveza e abertura de espaço.",
  },
  {
    slug: "protecao",
    name: "Proteção",
    description:
      "Linha pensada para criar atmosferas simbólicas de firmeza, cuidado e proteção.",
  },
  {
    slug: "amor-proprio",
    name: "Amor-Próprio",
    description:
      "Produtos para cultivar autoestima, presença e florescimento interior.",
  },
  {
    slug: "amor",
    name: "Amor",
    description:
      "Linha dedicada ao afeto, à delicadeza e à presença nos vínculos.",
  },
  {
    slug: "intuicao",
    name: "Intuição",
    description:
      "Produtos para conexão interior, escuta sensível e clareza.",
  },
  {
    slug: "altar",
    name: "Altar",
    description:
      "Elementos para compor e cuidar de espaços ritualísticos.",
  },
  {
    slug: "sabbats",
    name: "Sabbats",
    description:
      "Coleções inspiradas nos ciclos sazonais e na roda do ano, celebrando mudanças, colheitas, recomeços e encerramentos.",
  },
  {
    slug: "fases-da-lua",
    name: "Fases da Lua",
    description:
      "Produtos pensados para acompanhar os ciclos lunares: Lua Nova, Crescente, Cheia e Minguante.",
  },
  {
    slug: "elementais",
    name: "Elementais",
    description:
      "Linha inspirada nos quatro elementos: Terra, Fogo, Água e Ar.",
  },
  {
    slug: "divindades",
    name: "Divindades",
    description:
      "Coleção futura inspirada em arquétipos, símbolos e forças espirituais, desenvolvida com cuidado, beleza e respeito.",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
