"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatters";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ameixa-profundo/50 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden
      />

      {/* Painel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-creme shadow-soft transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Carrinho"
      >
        <header className="flex items-center justify-between border-b border-cobre/20 px-6 py-5">
          <h2 className="font-display text-xl text-vinho">Seu pedido</h2>
          <button
            onClick={closeCart}
            className="text-marrom/60 hover:text-vinho"
            aria-label="Fechar"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-marrom/60">
              Seu pedido está vazio. Escolha seu ritual ✦
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 rounded-2xl border border-cobre/20 bg-white/40 p-3"
                >
                  <div className="flex-1">
                    <p className="font-display text-vinho">{item.name}</p>
                    <p className="text-sm text-marrom/70">
                      {formatPrice(item.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() =>
                          setQuantity(item.id, item.quantity - 1)
                        }
                        className="h-7 w-7 rounded-full border border-cobre/40 text-marrom"
                        aria-label="Diminuir"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          setQuantity(item.id, item.quantity + 1)
                        }
                        className="h-7 w-7 rounded-full border border-cobre/40 text-marrom"
                        aria-label="Aumentar"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-xs text-marrom/50 hover:text-rosa-queimado"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-cobre/20 px-6 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-marrom/70">Subtotal</span>
            <span className="font-display text-xl text-vinho">
              {formatPrice(subtotal)}
            </span>
          </div>
          <Link
            href="/pedido"
            onClick={closeCart}
            className={`block w-full rounded-full bg-vinho px-6 py-3 text-center text-sm font-medium text-creme transition hover:bg-rosa-queimado ${
              items.length === 0 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Finalizar pelo WhatsApp
          </Link>
        </footer>
      </aside>
    </>
  );
}
