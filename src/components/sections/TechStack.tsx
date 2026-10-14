import { TechIcon } from "@/components/icons/TechIcon";
import {
  AnimatedSection,
  Reveal,
  RevealItem,
  RevealList,
} from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techGroups, techSection } from "@/data/portfolio";

export function TechStack() {
  return (
    <Container>
      <AnimatedSection
        id="tecnologias"
        aria-labelledby="tecnologias-titulo"
        className="panel p-5 sm:p-10 lg:p-14"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-x-16">
          <SectionHeading
            id="tecnologias-titulo"
            eyebrow={techSection.eyebrow}
            title={techSection.title}
            highlight={techSection.highlight}
            description={techSection.description}
          />

          <div className="space-y-10">
            {techGroups.map((group) => (
              <div key={group.title}>
                <Reveal>
                  <h3 className="flex items-center gap-4 font-mono text-xs tracking-[0.16em] text-muted uppercase">
                    {group.title}
                    <span aria-hidden="true" className="h-px flex-1 bg-border" />
                  </h3>
                </Reveal>
                <RevealList
                  staggerChildren={0.05}
                  className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-3"
                >
                  {group.items.map((item) => (
                    <RevealItem key={item.name}>
                      <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface/70 px-2 py-5 text-center transition-[translate,border-color,background-color,box-shadow] duration-500 ease-out-quint hover:-translate-y-1 hover:border-primary/40 hover:bg-surface hover:shadow-[0_18px_40px_-24px_rgb(37_99_235/0.75)]">
                        <TechIcon
                          name={item.icon}
                          className="size-9 transition-transform duration-500 ease-out-quint group-hover:scale-110"
                        />
                        <span className="text-[0.8125rem] font-medium text-foreground/90">
                          {item.name}
                        </span>
                      </div>
                    </RevealItem>
                  ))}
                </RevealList>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
