# Encantaria Artesanal

Site oficial da **Encantaria Artesanal** — marca de produtos místicos,
ritualísticos e artesanais. Funciona como site institucional premium, catálogo
de produtos, loja inicial com pedidos via WhatsApp, base para tráfego pago e
painel administrativo (com CRM) para as sócias.

> Domínio oficial: **https://encantariaartesanal.com**
> Instagram: **https://www.instagram.com/encantaria_artesanal**

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3
- SEO técnico (Metadata API, sitemap, robots, JSON-LD)
- Tracking configurável por ENV (Meta Pixel, GTM, GA4, Google Ads)
- Carrinho local + pedidos via WhatsApp
- Painel admin + CRM (mockados, prontos para Supabase)

## Como rodar localmente

```bash
npm install
cp .env.example .env.local   # preencha os valores
npm run dev                  # http://localhost:3000
```

Outros comandos:

```bash
npm run build   # build de produção
npm run lint    # checagem de lint
npm start       # serve o build
```

## Estrutura

```
src/
  app/
    (site)/          # páginas públicas (com Header/Footer/carrinho)
      page.tsx       # Home
      produtos/      # catálogo + página de produto
      colecoes/      sobre/  contato/  guia-ritual/  pedido/  obrigado/
    admin/           # painel administrativo + CRM
    layout.tsx       # layout raiz (fontes + scripts de tracking)
    sitemap.ts  robots.ts
  components/        # UI, produto, carrinho, admin, tracking, layout
  config/site.ts     # configuração central do site
  context/CartContext.tsx
  data/              # produtos, coleções e mocks de pedidos/leads
  lib/               # whatsapp, tracking, seo, formatters, mockAuth
  services/          # camada de dados (troque mock -> Supabase aqui)
  types/             # Product, Order, Lead, Customer, SiteSettings
```

## Onde mexer em cada coisa

| O quê | Onde |
|---|---|
| **Número do WhatsApp** | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` (fallback em `src/config/site.ts`) |
| **Meta Pixel** | `.env.local` → `NEXT_PUBLIC_META_PIXEL_ID` |
| **Google Tag Manager** | `.env.local` → `NEXT_PUBLIC_GTM_ID` |
| **GA4** | `.env.local` → `NEXT_PUBLIC_GA4_ID` |
| **Google Ads (conversão)** | `.env.local` → `NEXT_PUBLIC_GOOGLE_ADS_ID` + `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` |
| **Instagram / e-mail / aviso** | `src/config/site.ts` |
| **Produtos** | `src/data/products.ts` (e visualmente em `/admin/produtos`) |
| **Coleções** | `src/data/collections.ts` |
| **Logo** | `public/brand/logo-encantaria.png` |
| **Fotos de produto** | `public/products/` + campo `images` em `src/data/products.ts` |
| **Imagem Open Graph** | `public/og/encantaria-og.jpg` |

Os scripts de tracking só são carregados quando o respectivo ID está
preenchido — nada é injetado em branco. A lógica de eventos está em
`src/lib/tracking.ts` (Meta Pixel + gtag + dataLayer, de forma segura).

## Painel administrativo

- Acesse em **`/admin`** (redireciona para o login).
- Acesso de demonstração (MVP):
  - **e-mail:** `admin@encantariaartesanal.com`
  - **senha:** `encantaria123`
- Telas: Dashboard, Produtos (listar / novo / editar), Pedidos (CRM),
  Leads (CRM) e Configurações.

> ⚠️ O login é **mock** (proteção apenas visual, em `src/lib/mockAuth.ts`).
> Não use como segurança real. Os formulários de produto/configurações
> salvam de forma simulada (não persistem ainda).

## Eventos de tracking disponíveis

`view_item`, `view_product`, `add_to_cart`, `begin_checkout`,
`generate_lead`, `contact_whatsapp`, `purchase_intent`, `submit_contact_form`.

Conversões do Google Ads disparam em: clique no WhatsApp, finalização de
pedido e envio do formulário de contato.

## Próximos passos — ligar o Supabase

A camada de dados está isolada em `src/services/*` para facilitar a migração.

1. Crie um projeto no Supabase e preencha em `.env.local`:
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` e
   `SUPABASE_SERVICE_ROLE_KEY`.
2. Crie as tabelas: `products`, `orders`, `order_items`, `leads`,
   `customers`, `settings`, `media_assets` (os `types/` já refletem esse
   formato).
3. Substitua o conteúdo de `src/services/products.ts`, `orders.ts` e
   `leads.ts` por chamadas ao Supabase (a assinatura das funções não muda).
4. Troque `src/lib/mockAuth.ts` por **Supabase Auth** e proteja `/admin`
   com middleware (veja os comentários `TODO` no código).
5. Troque o upload mock (`src/components/admin/ImageUpload.tsx`) por
   **Supabase Storage** ou Cloudinary.

## Próximos passos — publicar (Vercel / Cloudflare)

1. Suba o repositório no GitHub (`dadocruz/encantaria_artesanal`).
2. **Vercel:** importe o repo, defina as variáveis de ambiente do
   `.env.example` e faça o deploy (preset Next.js detectado automaticamente).
3. **Cloudflare Pages:** use o adapter `@cloudflare/next-on-pages` ou
   o framework preset de Next.js; configure as mesmas variáveis.
4. Aponte o domínio `encantariaartesanal.com` para o provedor escolhido e
   confirme `NEXT_PUBLIC_SITE_URL=https://encantariaartesanal.com`.
