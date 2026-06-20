import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-creme px-6 text-center">
      <span className="text-4xl">☾</span>
      <h1 className="mt-4 font-display text-4xl text-vinho">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-marrom/70">
        O caminho que você procura se perdeu entre as estrelas. Vamos voltar?
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-vinho px-6 py-3 text-sm text-creme transition hover:bg-rosa-queimado"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
