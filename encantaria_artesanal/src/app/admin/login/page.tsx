"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockLogin, DEMO_CREDENTIALS } from "@/lib/mockAuth";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-xl border border-cobre/30 bg-white px-4 py-3 text-sm text-marrom outline-none focus:border-cobre";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: substituir mockLogin por Supabase Auth (signInWithPassword).
    if (mockLogin(email, password)) {
      router.push("/admin/dashboard");
    } else {
      setError("E-mail ou senha incorretos.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-marrom px-4">
      <div className="w-full max-w-sm rounded-3xl border border-cobre/30 bg-creme p-8 shadow-soft">
        <div className="mb-6 text-center">
          <p className="font-display text-2xl text-vinho">Encantaria</p>
          <p className="text-xs uppercase tracking-[0.3em] text-cobre">
            Painel Administrativo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-marrom/70">E-mail</label>
            <input
              type="email"
              required
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-marrom/70">Senha</label>
            <input
              type="password"
              required
              className={inputClass}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-rosa-queimado">{error}</p>}
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>

        {/* Credenciais de demonstração (remover quando ligar Supabase Auth). */}
        <div className="mt-6 rounded-xl bg-white/60 p-3 text-center text-xs text-marrom/60">
          <p className="font-medium">Acesso de demonstração</p>
          <p>{DEMO_CREDENTIALS.email}</p>
          <p>{DEMO_CREDENTIALS.password}</p>
        </div>
      </div>
    </div>
  );
}
