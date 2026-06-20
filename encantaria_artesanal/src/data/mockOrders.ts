import type { Order } from "@/types/order";

/** Pedidos fictícios para o CRM do admin (MVP). */
export const mockOrders: Order[] = [
  {
    id: "PED-1042",
    customerName: "Mariana Alves",
    whatsapp: "5511991234567",
    items: [
      { productId: "1", productName: "A Bruxa do Amor", quantity: 1, unitPrice: 89.9 },
    ],
    total: 89.9,
    status: "novo",
    createdAt: "2026-06-18T14:32:00.000Z",
    notes: "Quer embrulho para presente.",
    origin: "Instagram",
    cep: "01310-100",
  },
  {
    id: "PED-1041",
    customerName: "Júlia Ferreira",
    whatsapp: "5521997654321",
    items: [
      { productId: "8", productName: "Kit Lua Cheia", quantity: 1, unitPrice: 79.9 },
      { productId: "3", productName: "Incenso de Proteção", quantity: 2, unitPrice: 24.9 },
    ],
    total: 129.7,
    status: "pago",
    createdAt: "2026-06-17T10:05:00.000Z",
    origin: "Google Ads",
    cep: "22041-001",
  },
  {
    id: "PED-1040",
    customerName: "Camila Souza",
    whatsapp: "5531988887777",
    items: [
      { productId: "12", productName: "Kit Proteção do Lar", quantity: 1, unitPrice: 94.9 },
    ],
    total: 94.9,
    status: "producao",
    createdAt: "2026-06-15T19:20:00.000Z",
    origin: "Site",
    cep: "30130-000",
  },
  {
    id: "PED-1039",
    customerName: "Beatriz Lima",
    whatsapp: "5541999990000",
    items: [
      { productId: "4", productName: "Spray do Amor", quantity: 1, unitPrice: 39.9 },
      { productId: "7", productName: "Pó Mágico de Amor-Próprio", quantity: 1, unitPrice: 32.9 },
    ],
    total: 72.8,
    status: "enviado",
    createdAt: "2026-06-12T08:45:00.000Z",
    origin: "Instagram",
    cep: "80010-000",
  },
  {
    id: "PED-1038",
    customerName: "Renata Castro",
    whatsapp: "5551988776655",
    items: [
      { productId: "5", productName: "Banho de Intuição", quantity: 3, unitPrice: 34.9 },
    ],
    total: 104.7,
    status: "finalizado",
    createdAt: "2026-06-08T16:10:00.000Z",
    origin: "Site",
    cep: "90010-000",
  },
];
