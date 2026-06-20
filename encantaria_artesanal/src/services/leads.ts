/**
 * Camada de dados de leads (CRM).
 * Hoje retorna mocks. Futuro: tabela `leads` no Supabase.
 */
import { mockLeads } from "@/data/mockLeads";
import type { Lead } from "@/types/lead";

export async function listLeads(): Promise<Lead[]> {
  return mockLeads;
}

/**
 * Registro mockado de lead. Hoje apenas loga no console.
 * Futuro: supabase.from('leads').insert(...).
 */
export async function createLead(lead: Partial<Lead>): Promise<void> {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info("[mock] Lead registrado:", lead);
  }
}
