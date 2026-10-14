"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { fadeUp, sectionReveal, stagger } from "@/lib/motion";

const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

type StaggerOptions = {
  staggerChildren?: number;
  delayChildren?: number;
};

/** Seção que surge ao entrar na viewport e revela os filhos `Reveal` em sequência. */
export function AnimatedSection(props: HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={sectionReveal}
      {...props}
    />
  );
}

type RevealProps = HTMLMotionProps<"div"> & { variants?: Variants };

/** Elemento animado pelo grupo pai mais próximo (seção ou lista). */
export function Reveal({ variants = fadeUp, ...props }: RevealProps) {
  return <motion.div variants={variants} {...props} />;
}

type RevealItemProps = HTMLMotionProps<"li"> & { variants?: Variants };

export function RevealItem({ variants = fadeUp, ...props }: RevealItemProps) {
  return <motion.li variants={variants} {...props} />;
}

/** Lista com gatilho próprio: os itens aparecem em sequência quando a lista entra na tela. */
export function RevealList({
  staggerChildren = 0.08,
  delayChildren = 0,
  ...props
}: HTMLMotionProps<"ul"> & StaggerOptions) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      inherit={false}
      variants={stagger(staggerChildren, delayChildren)}
      {...props}
    />
  );
}
