"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
} from "motion/react";
import { useRef } from "react";

type ParallaxProps = HTMLMotionProps<"div"> & {
  /** Deslocamento máximo, em pixels, enquanto o elemento atravessa a tela. */
  offset?: number;
};

/** Parallax sutil para elementos decorativos, desativado com prefers-reduced-motion. */
export function Parallax({ offset = 60, style, ...props }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      style={shouldReduceMotion ? style : { ...style, y }}
      {...props}
    />
  );
}
