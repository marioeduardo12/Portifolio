"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import { ArrowRight, MapPin, Quote } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { IconLink } from "@/components/ui/IconLink";
import { RichText } from "@/components/ui/RichText";
import { profile, socialLinks } from "@/data/portfolio";
import { easeOutQuint, fadeUp } from "@/lib/motion";

const intro: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const nameGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const nameWord: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1.1, ease: easeOutQuint } },
};

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

      <Container className="grid items-center gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={intro}
          className="order-2 lg:order-1"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            {profile.greeting}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={nameGroup}
            className="mt-5 text-[clamp(3rem,9vw,5.75rem)] leading-[0.95] font-bold tracking-[-0.04em]"
          >
            <span className="-mt-[0.15em] inline-block overflow-hidden pt-[0.15em] pb-[0.06em] align-bottom">
              <motion.span variants={nameWord} className="inline-block">
                {profile.firstName}
              </motion.span>
            </span>{" "}
            <span className="-mt-[0.15em] inline-block overflow-hidden pt-[0.15em] pb-[0.06em] align-bottom">
              <motion.span
                variants={nameWord}
                className="text-gradient inline-block pr-[0.04em]"
              >
                {profile.lastName}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[clamp(1.5rem,3.2vw,2rem)] leading-[1.15] font-semibold tracking-tight text-primary-soft"
          >
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            <RichText text={profile.summary} />
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
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
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-2">
            <IconLink href={socialLinks.github.href} label={socialLinks.github.label}>
              <GitHubIcon className="size-[1.125rem]" />
            </IconLink>
            <IconLink
              href={socialLinks.linkedin.href}
              label={socialLinks.linkedin.label}
            >
              <LinkedInIcon className="size-4" />
            </IconLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.15, ease: easeOutQuint }}
          className="relative order-1 mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:order-2 lg:max-w-[28rem]"
        >
          <div className="relative aspect-[10/11]">
            <motion.div
              aria-hidden="true"
              style={parallax(glowY)}
              className="absolute -inset-[30%] -z-10 bg-[radial-gradient(closest-side,rgb(59_130_246/0.4),rgb(37_99_235/0.14)_50%,transparent)]"
            />

            <motion.div
              aria-hidden="true"
              style={parallax(slabsY)}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.35, ease: easeOutQuint }}
              className="absolute inset-0 -z-10"
            >
              <span className="hero-slab -left-[14%] top-[8%] h-[80%] w-[46%]" />
              <span className="hero-slab -top-[10%] -right-[24%] h-[64%] w-[40%] opacity-60" />
            </motion.div>

            <div className="portrait-mask absolute inset-0">
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                preload
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

            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: easeOutQuint }}
              className="absolute top-[12%] -right-[44%] hidden w-44 md:block lg:-right-[16%] lg:w-48 xl:-right-[24%]"
            >
              <div className="rounded-2xl border border-border-strong bg-background/60 p-4 shadow-[0_20px_40px_-24px_rgb(0_0_0/0.9)] backdrop-blur-md">
                <Quote aria-hidden="true" className="size-4 text-primary-soft" />
                <blockquote className="mt-2 text-sm leading-relaxed text-foreground/85 italic">
                  “{profile.quote}”
                </blockquote>
              </div>
            </motion.figure>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.8, ease: easeOutQuint }}
              className="absolute bottom-[10%] -left-[4%] inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/60 py-2 pr-4 pl-3 text-xs text-foreground/85 shadow-[0_20px_40px_-24px_rgb(0_0_0/0.9)] backdrop-blur-md sm:-left-[10%] sm:text-sm md:-left-[28%] lg:-left-[10%]"
            >
              <MapPin aria-hidden="true" className="size-4 text-primary-soft" />
              {profile.location}
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_65%_55%_at_70%_30%,#000_15%,transparent_75%)]" />
      <div className="absolute -top-48 -right-[15%] size-[48rem] rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.2),transparent)]" />
      <div className="absolute top-1/3 -left-64 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.07),transparent)]" />
    </div>
  );
}
