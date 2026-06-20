import type { Lead } from "@/types/lead";

/** Leads fictícios para o CRM do admin (MVP). */
export const mockLeads: Lead[] = [
  {
    id: "LEAD-301",
    name: "Patrícia Gomes",
    whatsapp: "5511912345678",
    email: "patricia@email.com",
    interest: "Kits de amor-próprio",
    message: "Gostaria de saber se fazem kits personalizados.",
    origin: "Formulário de contato",
    utmSource: "instagram",
    utmCampaign: "amor-proprio-junho",
    createdAt: "2026-06-19T11:22:00.000Z",
  },
  {
    id: "LEAD-300",
    name: "Fernanda Dias",
    whatsapp: "5521988887777",
    email: "fernanda@email.com",
    interest: "Fases da Lua",
    message: "Quando sai a coleção de lua nova?",
    origin: "Formulário de contato",
    utmSource: "google",
    utmCampaign: "lua-search",
    createdAt: "2026-06-18T09:14:00.000Z",
  },
  {
    id: "LEAD-299",
    name: "Aline Martins",
    whatsapp: "5531999990000",
    interest: "Proteção",
    message: "Tem kit de proteção para presente?",
    origin: "Botão WhatsApp",
    utmSource: "direto",
    createdAt: "2026-06-16T20:40:00.000Z",
  },
];
