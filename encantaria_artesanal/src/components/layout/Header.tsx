"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { mainNav } from "@/config/site";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cobre/20 bg-creme/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-marrom/80 transition hover:text-vinho"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative rounded-full border border-cobre/40 px-4 py-2 text-sm text-marrom transition hover:border-cobre"
            aria-label="Abrir carrinho"
          >
            Pedido
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-vinho text-[0.65rem] text-creme">
                {count}
              </span>
            )}
          </button>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="text-2xl text-vinho">☰</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-cobre/20 bg-creme px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-marrom/80 transition hover:text-vinho"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
