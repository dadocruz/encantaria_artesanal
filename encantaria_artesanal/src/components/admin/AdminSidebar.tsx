"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { mockLogout } from "@/lib/mockAuth";

const NAV = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "◈" },
  { label: "Produtos", href: "/admin/produtos", icon: "✦" },
  { label: "Pedidos", href: "/admin/pedidos", icon: "❖" },
  { label: "Leads", href: "/admin/leads", icon: "✉" },
  { label: "Configurações", href: "/admin/configuracoes", icon: "⚙" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    mockLogout();
    router.push("/admin/login");
  }

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-cobre/20 bg-marrom text-creme">
      <div className="border-b border-creme/10 px-6 py-5">
        <p className="font-display text-xl text-dourado">Encantaria</p>
        <p className="text-xs uppercase tracking-[0.3em] text-creme/50">
          Painel
        </p>
      </div>
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    active
                      ? "bg-creme/15 text-dourado"
                      : "text-creme/80 hover:bg-creme/10"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-creme/10 p-3">
        <Link
          href="/"
          className="block rounded-xl px-3 py-2 text-sm text-creme/70 hover:bg-creme/10"
        >
          ← Ver o site
        </Link>
        <button
          onClick={handleLogout}
          className="mt-1 block w-full rounded-xl px-3 py-2 text-left text-sm text-creme/70 hover:bg-creme/10"
        >
          Sair
        </button>
      </div>
    </aside>
  );
}
