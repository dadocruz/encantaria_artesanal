import type { Product } from "@/types/product";

/**
 * Catálogo fictício inicial.
 * Quando o Supabase estiver ligado, troque o uso desta lista pela camada
 * em src/services/products.ts (que já encapsula o acesso aos dados).
 */
export const products: Product[] = [
  {
    id: "1",
    name: "A Bruxa do Amor",
    slug: "a-bruxa-do-amor",
    category: "Kit Feitiço",
    collection: "Amor-Próprio",
    intention: "Amor-próprio",
    price: 89.9,
    promoPrice: null,
    shortDescription:
      "Kit ritualístico para autocuidado, presença e florescimento interior.",
    longDescription:
      "Um kit artesanal criado para momentos de amor-próprio, beleza e presença. Inspirado na energia do florescimento interior, ele une elementos simbólicos, aroma, cor e intenção para transformar seu autocuidado em um pequeno ritual.",
    items: [
      "Vela ritualística rosa",
      "Vela ritualística vermelha",
      "Ervas secas",
      "Carta/guia simbólico",
      "Elementos aromáticos",
      "Embalagem especial",
    ],
    usage:
      "Prepare um ambiente tranquilo, respire profundamente e firme sua intenção de autocuidado. Use os elementos do kit como símbolos para cultivar amor-próprio e presença.",
    care:
      "Nunca deixe velas acesas sem supervisão. Mantenha longe de crianças, animais e materiais inflamáveis.",
    images: [],
    status: "ativo",
    featured: true,
    stock: 24,
    tags: ["amor-próprio", "kit", "presente"],
    seoTitle: "A Bruxa do Amor | Kit de Amor-Próprio — Encantaria Artesanal",
    seoDescription:
      "Kit artesanal de amor-próprio, presença e florescimento interior. Você é seu próprio feitiço.",
  },
  {
    id: "2",
    name: "Vela Essencial de Limpeza",
    slug: "vela-essencial-de-limpeza",
    category: "Vela",
    collection: "Linha Essencial",
    intention: "Limpeza",
    price: 29.9,
    shortDescription:
      "Vela artesanal para rituais simbólicos de renovação energética.",
    longDescription:
      "Uma vela criada para momentos de pausa, limpeza simbólica e recomeço. Ideal para abrir espaço, renovar intenções e trazer leveza ao ambiente.",
    items: ["Vela artesanal", "Guia de intenção"],
    usage:
      "Acenda em um momento de pausa, firmando a intenção de renovar e abrir espaço. Deixe queimar em local seguro e ventilado.",
    care:
      "Nunca deixe a vela acesa sem supervisão. Mantenha longe de materiais inflamáveis.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 60,
    tags: ["limpeza", "vela", "essencial"],
  },
  {
    id: "3",
    name: "Incenso de Proteção",
    slug: "incenso-de-protecao",
    category: "Incenso",
    collection: "Proteção",
    intention: "Proteção",
    price: 24.9,
    shortDescription:
      "Incenso artesanal para criar uma atmosfera de firmeza e cuidado.",
    longDescription:
      "Incenso pensado para envolver o ambiente em uma atmosfera simbólica de proteção, firmeza e cuidado. Ideal para preparar o espaço antes de um ritual.",
    items: ["Varetas de incenso artesanal"],
    usage:
      "Acenda a vareta, aguarde a brasa e apague a chama. Conduza a fumaça pelo ambiente com a intenção de proteção.",
    care:
      "Use em local ventilado e sobre suporte adequado. Nunca deixe sem supervisão.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 80,
    tags: ["proteção", "incenso"],
  },
  {
    id: "4",
    name: "Spray do Amor",
    slug: "spray-do-amor",
    category: "Spray",
    collection: "Amor",
    intention: "Amor",
    price: 39.9,
    shortDescription:
      "Spray aromático para momentos de afeto, delicadeza e presença.",
    longDescription:
      "Spray energético aromático criado para perfumar momentos de afeto, delicadeza e presença, trazendo aconchego simbólico ao ambiente.",
    items: ["Spray aromático 60ml"],
    usage:
      "Borrife no ambiente ou sobre tecidos, firmando a intenção de afeto e presença.",
    care: "Evite contato com os olhos. Mantenha fora do alcance de crianças.",
    images: [],
    status: "ativo",
    featured: true,
    stock: 40,
    tags: ["amor", "spray"],
  },
  {
    id: "5",
    name: "Banho de Intuição",
    slug: "banho-de-intuicao",
    category: "Banho",
    collection: "Intuição",
    intention: "Intuição",
    price: 34.9,
    shortDescription:
      "Banho ritualístico para conexão interior e escuta sensível.",
    longDescription:
      "Banho de ervas pensado para momentos de conexão interior e escuta sensível. Um convite simbólico para silenciar o externo e ouvir a própria intuição.",
    items: ["Mix de ervas para banho", "Guia de uso"],
    usage:
      "Após o banho habitual, despeje o preparo do pescoço para baixo, firmando a intenção de conexão e escuta interior.",
    care:
      "Produto de uso externo e simbólico. Faça teste de sensibilidade na pele.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 50,
    tags: ["intuição", "banho"],
  },
  {
    id: "6",
    name: "Sal Mágico de Altar",
    slug: "sal-magico-de-altar",
    category: "Sal Mágico",
    collection: "Altar",
    intention: "Altar",
    price: 27.9,
    shortDescription:
      "Sal simbólico para composição de espaços ritualísticos.",
    longDescription:
      "Sal mágico criado para compor altares e espaços ritualísticos, marcando simbolicamente o lugar de intenção e cuidado.",
    items: ["Pote de sal mágico", "Colher de madeira"],
    usage:
      "Disponha pequenas porções no altar ou ao redor do espaço ritual, firmando sua intenção.",
    care: "Uso simbólico. Não ingerir.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 35,
    tags: ["altar", "sal"],
  },
  {
    id: "7",
    name: "Pó Mágico de Amor-Próprio",
    slug: "po-magico-de-amor-proprio",
    category: "Pó Mágico",
    collection: "Amor-Próprio",
    intention: "Amor-próprio",
    price: 32.9,
    shortDescription:
      "Produto simbólico para rituais de autoestima e encantamento pessoal.",
    longDescription:
      "Pó mágico criado para rituais simbólicos de autoestima e encantamento pessoal, celebrando a própria beleza e presença.",
    items: ["Frasco de pó mágico"],
    usage:
      "Use pequenas porções em seus rituais de autocuidado, firmando a intenção de amor-próprio.",
    care: "Uso simbólico e externo.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 45,
    tags: ["amor-próprio", "pó mágico"],
  },
  {
    id: "8",
    name: "Kit Lua Cheia",
    slug: "kit-lua-cheia",
    category: "Fases da Lua",
    collection: "Lua",
    intention: "Potência e manifestação",
    price: 79.9,
    shortDescription: "Kit inspirado na energia simbólica da lua cheia.",
    longDescription:
      "Kit ritualístico inspirado na energia simbólica da lua cheia, momento de potência, plenitude e manifestação. Reúne elementos para celebrar a colheita de intenções.",
    items: ["Vela", "Ervas", "Carta simbólica", "Guia de ritual lunar"],
    usage:
      "Realize o ritual na noite de lua cheia, firmando intenções de manifestação e gratidão.",
    care: "Nunca deixe velas acesas sem supervisão.",
    images: [],
    status: "ativo",
    featured: true,
    stock: 20,
    tags: ["lua", "kit", "manifestação"],
  },
  {
    id: "9",
    name: "Kit Lua Nova",
    slug: "kit-lua-nova",
    category: "Fases da Lua",
    collection: "Lua",
    intention: "Novos começos",
    price: 79.9,
    shortDescription:
      "Kit ritualístico para abrir caminhos simbólicos e iniciar novos ciclos.",
    longDescription:
      "Kit inspirado na lua nova, tempo de plantar sementes simbólicas e iniciar novos ciclos. Reúne elementos para rituais de intenção e recomeço.",
    items: ["Vela", "Ervas", "Carta simbólica", "Guia de ritual lunar"],
    usage:
      "Realize o ritual na fase de lua nova, plantando intenções para o ciclo que se inicia.",
    care: "Nunca deixe velas acesas sem supervisão.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 20,
    tags: ["lua", "kit", "recomeço"],
  },
  {
    id: "10",
    name: "Vela Elemental do Fogo",
    slug: "vela-elemental-do-fogo",
    category: "Vela",
    collection: "Elementais",
    intention: "Coragem e movimento",
    price: 31.9,
    shortDescription:
      "Vela artesanal inspirada no elemento fogo, criada para intenção, coragem e ação.",
    longDescription:
      "Vela inspirada no elemento fogo, símbolo de coragem, transformação e movimento. Criada para rituais de impulso e ação.",
    items: ["Vela elemental do fogo"],
    usage:
      "Acenda firmando intenções de coragem e movimento. Deixe queimar em local seguro.",
    care: "Nunca deixe a vela acesa sem supervisão.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 38,
    tags: ["fogo", "elementais", "vela"],
  },
  {
    id: "11",
    name: "Banho Elemental da Água",
    slug: "banho-elemental-da-agua",
    category: "Banho",
    collection: "Elementais",
    intention: "Emoção e acolhimento",
    price: 36.9,
    shortDescription:
      "Banho simbólico inspirado nas águas, para momentos de sensibilidade e cuidado interior.",
    longDescription:
      "Banho elemental inspirado nas águas, símbolo de emoção, fluidez e acolhimento. Ideal para momentos de sensibilidade e cuidado interior.",
    items: ["Mix de ervas para banho", "Guia de uso"],
    usage:
      "Após o banho habitual, despeje o preparo do pescoço para baixo, acolhendo suas emoções.",
    care:
      "Produto de uso externo e simbólico. Faça teste de sensibilidade na pele.",
    images: [],
    status: "ativo",
    featured: false,
    stock: 42,
    tags: ["água", "elementais", "banho"],
  },
  {
    id: "12",
    name: "Kit Proteção do Lar",
    slug: "kit-protecao-do-lar",
    category: "Kit Feitiço",
    collection: "Proteção",
    intention: "Proteção simbólica",
    price: 94.9,
    shortDescription:
      "Kit artesanal para criar uma atmosfera simbólica de proteção, firmeza e cuidado no lar.",
    longDescription:
      "Kit pensado para envolver o lar em uma atmosfera simbólica de proteção, firmeza e cuidado. Reúne elementos para preparar e cuidar do seu espaço.",
    items: ["Vela", "Incenso", "Sal mágico", "Ervas", "Guia de ritual"],
    usage:
      "Use os elementos para preparar cantos do lar, firmando a intenção de proteção e cuidado.",
    care: "Nunca deixe velas ou incensos acesos sem supervisão.",
    images: [],
    status: "ativo",
    featured: true,
    stock: 18,
    tags: ["proteção", "lar", "kit"],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.status === "ativo");
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.collection === product.collection ||
          p.category === product.category),
    )
    .slice(0, limit);
}
