import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { mainNav, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-cobre/20 bg-marrom text-creme">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-creme/70">
            Produtos místicos artesanais para pequenos rituais de autocuidado,
            proteção, amor-próprio e conexão com os ciclos da natureza.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-dourado">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-creme/80">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-dourado">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-dourado">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-creme/80">
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-dourado"
              >
                Instagram {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition hover:text-dourado"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link href="/contato" className="transition hover:text-dourado">
                Fale conosco
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-creme/10 px-5 py-6 text-center text-xs text-creme/50 sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. Feito à mão, com
        intenção.
      </div>
    </footer>
  );
}
