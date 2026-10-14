"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";
import { ArrowUpRight, Building, CalendarDays, MapPin } from "lucide-react";
import { useRef } from "react";
import { AnimatedSection, Reveal } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/TagList";
import { experienceSection, experiences, socialLinks } from "@/data/portfolio";
import { easeOutQuint, stagger } from "@/lib/motion";
import type { CompanyLogo as CompanyLogoData, Experience } from "@/types/portfolio";

const markerVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 22 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOutQuint },
  },
};

export function ExperienceTimeline() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <Container>
      <AnimatedSection
        id="experiencia"
        aria-labelledby="experiencia-titulo"
        className="panel p-5 sm:p-10 lg:p-14"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-x-16">
          <div>
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                id="experiencia-titulo"
                eyebrow={experienceSection.eyebrow}
                title={experienceSection.title}
                highlight={experienceSection.highlight}
                description={experienceSection.description}
              />
              <Reveal>
                <a
                  href={socialLinks.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary-soft transition-colors duration-300 hover:text-foreground"
                >
                  Ver perfil completo no LinkedIn
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  <span className="sr-only">(abre em uma nova aba)</span>
                </a>
              </Reveal>
            </div>
          </div>

          <ol ref={timelineRef} className="relative space-y-6">
            <span
              aria-hidden="true"
              className="absolute top-3 bottom-3 left-[11px] w-px bg-border sm:left-[15px]"
            />
            <motion.span
              aria-hidden="true"
              style={{ scaleY: shouldReduceMotion ? 1 : lineProgress }}
              className="absolute top-3 bottom-3 left-[11px] w-px origin-top bg-linear-to-b from-primary-soft via-primary to-primary/10 shadow-[0_0_12px_rgb(59_130_246/0.6)] sm:left-[15px]"
            />
            {experiences.map((experience) => (
              <TimelineItem
                key={`${experience.company}-${experience.start.dateTime}`}
                experience={experience}
              />
            ))}
          </ol>
        </div>
      </AnimatedSection>
    </Container>
  );
}

function TimelineItem({ experience }: { experience: Experience }) {
  const isCurrent = !experience.end;

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      inherit={false}
      variants={stagger(0.1)}
      className="relative pl-8 sm:pl-12"
    >
      <motion.span
        aria-hidden="true"
        variants={markerVariants}
        className="absolute top-8 left-[6px] grid size-[11px] place-items-center sm:left-[10px]"
      >
        {isCurrent && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
        )}
        <span className="relative size-[11px] rounded-full border-2 border-primary-soft bg-background shadow-[0_0_0_4px_var(--color-surface),0_0_16px_rgb(59_130_246/0.85)]" />
      </motion.span>

      <motion.article
        variants={cardVariants}
        className="rounded-2xl border border-border bg-surface/60 p-4 transition-[border-color,background-color] duration-500 hover:border-primary/30 hover:bg-surface sm:p-6"
      >
        <div className="flex flex-col gap-5 sm:flex-row">
          <CompanyLogo logo={experience.logo} />

          <div className="min-w-0 flex-1">
            <header className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">{experience.role}</h3>
                <p className="mt-0.5 text-[0.9375rem] text-primary-soft">
                  {experience.company}
                  <span className="text-muted"> · {experience.employmentType}</span>
                </p>
              </div>
              {isCurrent && <StatusBadge tone="progress">Atual</StatusBadge>}
            </header>

            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
              <li className="inline-flex items-center gap-1.5">
                <CalendarDays aria-hidden="true" className="size-4 text-primary-soft/80" />
                <span>
                  <time dateTime={experience.start.dateTime}>
                    {experience.start.label}
                  </time>
                  {" – "}
                  {experience.end ? (
                    <time dateTime={experience.end.dateTime}>{experience.end.label}</time>
                  ) : (
                    "Atualmente"
                  )}
                </span>
              </li>
              <li className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-4 text-primary-soft/80" />
                {experience.location}
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Building aria-hidden="true" className="size-4 text-primary-soft/80" />
                {experience.workMode}
              </li>
            </ul>

            <p className="mt-4 leading-relaxed text-muted">{experience.description}</p>

            <TagList tags={experience.tags} label="Competências" className="mt-5" />
          </div>
        </div>
      </motion.article>
    </motion.li>
  );
}

function CompanyLogo({ logo }: { logo: CompanyLogoData }) {
  if (logo.type === "image") {
    return (
      <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_-12px_rgb(0_0_0/0.8)] ring-1 ring-white/10">
        <Image src={logo.src} alt={logo.alt} fill sizes="56px" className="object-contain p-0.5" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="grid size-14 shrink-0 place-items-center rounded-xl border border-primary/25 bg-linear-to-br from-primary/25 via-primary/10 to-transparent text-lg font-semibold tracking-tight text-primary-soft shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]"
    >
      {logo.initials}
    </div>
  );
}
