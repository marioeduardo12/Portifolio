import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navItems, profile, socialLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-border bg-background/60 sm:mt-14">
      <Container className="grid grid-cols-1 gap-10 py-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        <div className="max-w-sm">
          <a href="#inicio" className="inline-flex items-center gap-2.5 rounded-lg">
            <Logo className="size-7" />
            <span className="font-semibold tracking-tight">{profile.name}</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {profile.role} com foco em back-end, baseado em {profile.location}.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          <nav aria-label="Rodapé">
            <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted uppercase">
              Navegação
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="link-underline text-foreground/80 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted uppercase">
              Redes profissionais
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[socialLinks.github, socialLinks.linkedin].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-foreground/80 hover:text-foreground"
                  >
                    {link.label}
                    <span className="sr-only"> (abre em uma nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col-reverse gap-4 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-1.5 self-start rounded-md transition-colors duration-300 hover:text-foreground sm:self-auto"
          >
            Voltar ao topo
            <ArrowUp
              aria-hidden="true"
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
