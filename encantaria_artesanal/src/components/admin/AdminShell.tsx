"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isMockAuthenticated } from "@/lib/mockAuth";
import { AdminSidebar } from "./AdminSidebar";

/**
 * Shell do painel admin.
 * - A rota /admin/login é renderizada sem proteção (é onde se autentica).
 * - As demais rotas exigem mockAuth (proteção VISUAL do MVP).
 *
 * ⚠️ Para segurança real, substitua por middleware/Supabase Auth.
 */
export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const ok = isMockAuthenticated();
    setAuthed(ok);
    setChecked(true);
    if (!ok && !isLogin) {
      router.replace("/admin/login");
    }
  }, [isLogin, router, pathname]);

  if (isLogin) {
    return <>{children}</>;
  }

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center text-marrom/60">
        Carregando painel…
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center text-marrom/60">
        Redirecionando para o login…
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-creme/40">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden p-6 sm:p-10">{children}</main>
    </div>
  );
}
