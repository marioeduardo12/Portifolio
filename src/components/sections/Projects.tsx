import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { TechIcon } from "@/components/icons/TechIcon";
import {
  AnimatedSection,
  Reveal,
  RevealItem,
  RevealList,
} from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/TagList";
import { projects, projectsSection, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import type { Project, TechIconName } from "@/types/portfolio";

export function Projects() {
  return (
    <Container>
      <AnimatedSection
        id="projetos"
        aria-labelledby="projetos-titulo"
        className="panel p-5 sm:p-10 lg:p-14"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="projetos-titulo"
            eyebrow={projectsSection.eyebrow}
            title={projectsSection.title}
            highlight={projectsSection.highlight}
            description={projectsSection.description}
          />
          <Reveal className="shrink-0">
            <a
              href={socialLinks.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary-soft transition-colors duration-300 hover:text-foreground"
            >
              <span className="link-underline">Ver todos no GitHub</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="sr-only">(abre em uma nova aba)</span>
            </a>
          </Reveal>
        </div>

        <RevealList className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <RevealItem
              key={project.title}
              className={cn("h-full", project.featured && "md:col-span-2")}
            >
              {project.featured ? (
                <FeaturedProjectCard project={project} />
              ) : (
                <ProjectCard project={project} />
              )}
            </RevealItem>
          ))}
          <RevealItem className="h-full md:col-span-2 lg:col-span-1">
            <GitHubCard />
          </RevealItem>
        </RevealList>
      </AnimatedSection>
    </Container>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <SpotlightCard className="h-full bg-linear-to-br from-primary/8 via-surface/80 to-surface/70">
      <article className="relative grid h-full grid-cols-1 gap-8 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid size-12 place-items-center rounded-xl border border-primary/30 bg-primary/15 text-primary-soft">
              <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
            </span>
            {project.status && <StatusBadge tone="progress">{project.status}</StatusBadge>}
            {project.context && (
              <span className="text-sm text-muted">{project.context}</span>
            )}
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-balance sm:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{project.description}</p>

          <TagList tags={project.tags} label="Tecnologias utilizadas" className="mt-6" />

          {project.note && (
            <p className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-muted">
              <LockKeyhole aria-hidden="true" className="size-4 text-primary-soft/80" />
              {project.note}
            </p>
          )}
        </div>

        <StackOrbit />
      </article>
    </SpotlightCard>
  );
}

const orbitIcons: TechIconName[] = [
  "python",
  "fastapi",
  "nextjs",
  "postgresql",
  "clickhouse",
];

/** Ilustração da stack do projeto: tecnologias orbitando o núcleo de IA. */
function StackOrbit() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto hidden size-56 shrink-0 self-center sm:block"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.22),transparent)]" />
      <div className="absolute inset-7 rounded-full border border-dashed border-primary/25" />
      <div className="absolute inset-19 grid place-items-center rounded-full border border-primary/40 bg-primary/15 shadow-[0_0_40px_rgb(59_130_246/0.45)]">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary-soft">
          IA
        </span>
      </div>
      {orbitIcons.map((icon, index) => {
        const angle = (index / orbitIcons.length) * 2 * Math.PI - Math.PI / 2;
        const radius = 84;

        return (
          <span
            key={icon}
            className="absolute grid size-11 place-items-center rounded-xl border border-border-strong bg-surface shadow-[0_10px_24px_-12px_rgb(0_0_0/0.9)] transition-transform duration-500 ease-out-quint group-hover/card:scale-105"
            style={{
              left: `calc(50% + ${Math.round(Math.cos(angle) * radius)}px - 1.375rem)`,
              top: `calc(50% + ${Math.round(Math.sin(angle) * radius)}px - 1.375rem)`,
            }}
          >
            <TechIcon name={icon} className="size-6" />
          </span>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const href = project.repositoryUrl ?? project.liveUrl;

  return (
    <SpotlightCard className="h-full">
      <article className="relative flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary-soft transition-colors duration-500 group-hover/card:border-primary/40">
            <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
          </span>
          {href && (
            <ArrowUpRight
              aria-hidden="true"
              className="size-5 text-muted transition-[translate,color] duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-primary-soft"
            />
          )}
        </div>

        <h3 className="mt-5 text-lg font-semibold tracking-tight">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary-soft"
            >
              {project.title}
              <span className="sr-only"> (abre em uma nova aba)</span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <TagList tags={project.tags} label="Tecnologias utilizadas" className="mt-5" />

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4 text-sm">
          <span className="inline-flex items-center gap-2 text-muted">
            {project.repositoryUrl && <GitHubIcon className="size-4" />}
            {project.year && <span className="font-mono text-xs">{project.year}</span>}
          </span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 rounded-md font-medium text-primary-soft transition-colors duration-300 hover:text-foreground"
            >
              Ver online
              <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only">(abre em uma nova aba)</span>
            </a>
          )}
        </div>
      </article>
    </SpotlightCard>
  );
}

function GitHubCard() {
  return (
    <a
      href={socialLinks.github.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full min-h-60 flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-dashed border-border-strong p-6 transition-[translate,border-color,background-color] duration-500 ease-out-quint hover:-translate-y-1 hover:border-primary/45 hover:bg-primary/5"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-xl border border-border-strong bg-white/3">
          <GitHubIcon className="size-5" />
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 text-muted transition-[translate,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-soft"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tight">Mais projetos no GitHub</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Exercícios, estudos e outros projetos acadêmicos e pessoais.
        </p>
        <p className="mt-5 font-mono text-xs text-primary-soft">
          {socialLinks.github.handle}
        </p>
      </div>
      <span className="sr-only">(abre em uma nova aba)</span>
    </a>
  );
}
