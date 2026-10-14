"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowRight, MapPin, Quote } from "lucide-react";
import type { CSSProperties } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { IconLink } from "@/components/ui/IconLink";
import { RichText } from "@/components/ui/RichText";
import { profile, socialLinks } from "@/data/portfolio";

/** Atraso de cada elemento na sequência de entrada (animações definidas em globals.css). */
const delay = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const slabsY = useTransform(scrollY, [0, 900], [0, -110]);
  const glowY = useTransform(scrollY, [0, 900], [0, 80]);

  const parallax = (value: MotionValue<number>) =>
    shouldReduceMotion ? undefined : { y: value };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-36 lg:pt-40 lg:pb-24"
    >
      <HeroBackdrop />

      <Container className="grid grid-cols-1 items-center gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="order-2 lg:order-1">
          <p className="eyebrow animate-fade-up" style={delay(0.15)}>
            {profile.greeting}
          </p>

          <h1
            id="hero-title"
            className="mt-5 text-[clamp(3rem,9vw,5.75rem)] leading-[0.95] font-bold tracking-[-0.04em]"
          >
            <span className="mt-[-0.15em] inline-block overflow-hidden pt-[0.15em] pb-[0.06em] align-bottom">
              <span className="inline-block animate-reveal-up" style={delay(0.25)}>
                {profile.firstName}
              </span>
            </span>{" "}
            <span className="mt-[-0.15em] inline-block overflow-hidden pt-[0.15em] pb-[0.06em] align-bottom">
              <span
                className="text-gradient inline-block animate-reveal-up pr-[0.04em]"
                style={delay(0.37)}
              >
                {profile.lastName}
              </span>
            </span>
          </h1>

          <p
            className="mt-6 animate-fade-up text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.15] font-semibold tracking-tight text-primary-soft"
            style={delay(0.5)}
          >
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
          </p>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-muted sm:text-lg"
            style={delay(0.6)}
          >
            <RichText text={profile.summary} />
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            style={delay(0.7)}
          >
            <ButtonLink href="#projetos" size="lg" className="w-full sm:w-auto">
              Ver meus projetos
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
              />
            </ButtonLink>
            <ButtonLink
              href="#contato"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Entrar em contato
            </ButtonLink>
          </div>

          <div className="mt-10 flex animate-fade-up items-center gap-2" style={delay(0.8)}>
            <IconLink href={socialLinks.github.href} label={socialLinks.github.label}>
              <GitHubIcon className="size-4.5" />
            </IconLink>
            <IconLink
              href={socialLinks.linkedin.href}
              label={socialLinks.linkedin.label}
            >
              <LinkedInIcon className="size-4" />
            </IconLink>
          </div>
        </div>

        <div
          className="relative order-1 mx-auto w-full max-w-72 animate-portrait-in sm:max-w-88 lg:order-2 lg:max-w-md"
          style={delay(0.15)}
        >
          <div className="relative aspect-10/11">
            <motion.div
              aria-hidden="true"
              style={parallax(glowY)}
              className="absolute inset-[-30%] -z-10 bg-[radial-gradient(closest-side,rgb(59_130_246/0.4),rgb(37_99_235/0.14)_50%,transparent)]"
            />

            <motion.div
              aria-hidden="true"
              style={parallax(slabsY)}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 animate-slide-in" style={delay(0.35)}>
                <span className="hero-slab top-[8%] left-[-14%] h-[80%] w-[46%]" />
                <span className="hero-slab top-[-10%] right-[-24%] h-[64%] w-[40%] opacity-60" />
              </div>
            </motion.div>

            <div className="portrait-mask absolute inset-0">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                preload
                fetchPriority="high"
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 22rem, 18rem"
                className="object-cover object-[54%_50%] brightness-[1.1] contrast-[1.08] saturate-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(215deg,#060b14_10%,transparent_40%),linear-gradient(140deg,#060b14_2%,transparent_26%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_70%_62%_at_54%_40%,#0a172c_0%,#08101d_58%,#060b14_100%)] mix-blend-lighten"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_12%,rgb(59_130_246/0.22),transparent_55%)] mix-blend-screen"
              />
            </div>

            <figure
              className="absolute top-[12%] right-[-44%] hidden w-44 animate-fade-up md:block lg:right-[-16%] lg:w-48 xl:right-[-24%]"
              style={delay(1)}
            >
              <div className="rounded-2xl border border-border-strong bg-background/60 p-4 shadow-[0_20px_40px_-24px_rgb(0_0_0/0.9)] backdrop-blur-md">
                <Quote aria-hidden="true" className="size-4 text-primary-soft" />
                <blockquote className="mt-2 text-sm leading-relaxed text-foreground/85 italic">
                  “{profile.quote}”
                </blockquote>
              </div>
            </figure>

            <p
              className="absolute bottom-[10%] left-[-4%] inline-flex animate-fade-up items-center gap-2 rounded-full border border-border-strong bg-background/60 py-2 pr-4 pl-3 text-xs text-foreground/85 shadow-[0_20px_40px_-24px_rgb(0_0_0/0.9)] backdrop-blur-md sm:left-[-10%] sm:text-sm md:left-[-28%] lg:left-[-10%]"
              style={delay(1.15)}
            >
              <MapPin aria-hidden="true" className="size-4 text-primary-soft" />
              {profile.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
      <div className="bg-grid absolute inset-0 opacity-60 mask-[radial-gradient(ellipse_65%_55%_at_70%_30%,#000_15%,transparent_75%)]" />
      <div className="absolute -top-48 right-[-15%] size-192 rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.2),transparent)]" />
      <div className="absolute top-1/3 -left-64 size-144 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.07),transparent)]" />
    </div>
  );
}
