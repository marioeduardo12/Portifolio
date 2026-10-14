import {
  AnimatedSection,
  Reveal,
  RevealItem,
  RevealList,
} from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Container>
      <AnimatedSection
        id="sobre"
        aria-labelledby="sobre-titulo"
        className="panel p-5 sm:p-10 lg:p-14"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16">
          <SectionHeading
            id="sobre-titulo"
            eyebrow={about.eyebrow}
            title={about.title}
            highlight={about.highlight}
          />

          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-[1.0625rem] lg:pt-10">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>
                  <RichText text={paragraph} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <RevealList className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {about.highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <RevealItem key={highlight.title} className="h-full">
                <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-6 transition-[translate,border-color,background-color] duration-500 ease-out-quint hover:-translate-y-1 hover:border-primary/35 hover:bg-surface">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary-soft transition-colors duration-500 group-hover:border-primary/40">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    </span>
                    {highlight.status && (
                      <StatusBadge tone={highlight.status.tone}>
                        {highlight.status.label}
                      </StatusBadge>
                    )}
                  </div>
                  <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.16em] text-muted uppercase">
                    {highlight.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {highlight.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {highlight.description}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealList>
      </AnimatedSection>
    </Container>
  );
}
