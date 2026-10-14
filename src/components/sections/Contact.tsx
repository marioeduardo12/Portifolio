import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import {
  AnimatedSection,
  Reveal,
  RevealItem,
  RevealList,
} from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/ui/Parallax";
import { contact, profile, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/cn";

type ContactChannel = {
  label: string;
  value: string;
  icon: ReactNode;
  href?: string;
};

const channels: ContactChannel[] = [
  {
    label: socialLinks.linkedin.label,
    value: socialLinks.linkedin.handle,
    href: socialLinks.linkedin.href,
    icon: <LinkedInIcon className="size-4" />,
  },
  {
    label: socialLinks.github.label,
    value: socialLinks.github.handle,
    href: socialLinks.github.href,
    icon: <GitHubIcon className="size-4.5" />,
  },
  ...(contact.email
    ? [
        {
          label: "E-mail",
          value: contact.email,
          href: `mailto:${contact.email}`,
          icon: <Mail aria-hidden="true" className="size-4.5" />,
        },
      ]
    : []),
  {
    label: "Localização",
    value: profile.location,
    icon: <MapPin aria-hidden="true" className="size-4.5" />,
  },
];

export function Contact() {
  return (
    <Container>
      <AnimatedSection
        id="contato"
        aria-labelledby="contato-titulo"
        className="relative isolate overflow-hidden rounded-[1.75rem] border border-primary/20 bg-[linear-gradient(160deg,#0f1d36_0%,#0a1426_45%,#081020_100%)] px-5 py-14 shadow-[0_40px_80px_-48px_rgb(37_99_235/0.6)] sm:px-12 sm:py-20 lg:px-16"
      >
        <ContactBackdrop />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-x-16">
          <div>
            <Reveal>
              <p className="eyebrow">{contact.eyebrow}</p>
            </Reveal>
            <Reveal>
              <h2
                id="contato-titulo"
                className="mt-5 text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance"
              >
                {contact.title} <span className="text-gradient">{contact.highlight}</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {contact.description}
              </p>
            </Reveal>
            <Reveal className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={socialLinks.linkedin.href} external size="lg">
                <LinkedInIcon className="size-4" />
                Conversar no LinkedIn
              </ButtonLink>
              <ButtonLink
                href={socialLinks.github.href}
                external
                variant="secondary"
                size="lg"
              >
                <GitHubIcon className="size-4.5" />
                Ver GitHub
              </ButtonLink>
            </Reveal>
          </div>

          <RevealList delayChildren={0.2} className="space-y-3">
            {channels.map((channel) => (
              <RevealItem key={channel.label}>
                <ContactCard channel={channel} />
              </RevealItem>
            ))}
          </RevealList>
        </div>
      </AnimatedSection>
    </Container>
  );
}

function ContactCard({ channel }: { channel: ContactChannel }) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary-soft">
        {channel.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.6875rem] tracking-[0.16em] text-muted uppercase">
          {channel.label}
        </span>
        <span className="mt-1 block text-[0.9375rem] font-medium text-foreground wrap-anywhere">
          {channel.value}
        </span>
      </span>
    </>
  );

  const baseClassName =
    "flex items-center gap-4 rounded-2xl border border-border bg-background/40 p-4 backdrop-blur-sm";

  if (!channel.href) {
    return <div className={baseClassName}>{content}</div>;
  }

  const isExternal = channel.href.startsWith("http");

  return (
    <a
      href={channel.href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group transition-[translate,border-color,background-color] duration-500 ease-out-quint hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/7",
        baseClassName,
      )}
    >
      {content}
      <ArrowUpRight
        aria-hidden="true"
        className="size-5 shrink-0 text-muted transition-[translate,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-soft"
      />
      {isExternal && <span className="sr-only">(abre em uma nova aba)</span>}
    </a>
  );
}

function ContactBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_80%_70%_at_25%_0%,#000,transparent_75%)]" />
      <Parallax offset={40} className="absolute -bottom-56 -left-32 size-136">
        <div className="size-full rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.38),transparent)]" />
      </Parallax>
      <Parallax offset={60} className="absolute -right-40 -bottom-64 size-160">
        <div className="size-full rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.3),transparent)]" />
      </Parallax>
      <div className="absolute inset-x-[10%] top-0 h-px bg-linear-to-r from-transparent via-primary-soft/70 to-transparent" />
    </div>
  );
}
