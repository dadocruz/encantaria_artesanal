"use client";

/**
 * Autenticação MOCK para o painel admin (MVP).
 *
 * ⚠️ ISTO NÃO É SEGURANÇA REAL. Serve apenas para proteger visualmente as
 * rotas /admin durante o MVP. Quando o backend estiver pronto, substitua por:
 *   - Supabase Auth (supabase.auth.signInWithPassword)
 *   - Middleware Next.js validando sessão/cookie
 *   - Server Components verificando o usuário antes de renderizar
 */

const STORAGE_KEY = "encantaria_admin_auth";

// Credenciais de demonstração. Troque por Supabase Auth no futuro.
const DEMO_EMAIL = "admin@encantariaartesanal.com";
const DEMO_PASSWORD = "encantaria123";

export function mockLogin(email: string, password: string): boolean {
  const ok =
    email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD;
  if (ok && typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, "true");
  }
  return ok;
}

export function mockLogout(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export function isMockAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export const DEMO_CREDENTIALS = { email: DEMO_EMAIL, password: DEMO_PASSWORD };
