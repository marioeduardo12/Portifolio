"use client";

import { useRef, type ComponentProps, type PointerEvent } from "react";
import { cn } from "@/lib/cn";

/**
 * Card com luz que acompanha o cursor. A posição é escrita direto em variáveis CSS,
 * sem estado do React, para não gerar novas renderizações a cada movimento.
 */
export function SpotlightCard({ className, children, ...props }: ComponentProps<"div">) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType !== "mouse") return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={cn(
        "group/card relative overflow-hidden rounded-2xl border border-border bg-surface/70 transition-[translate,border-color,background-color,box-shadow] duration-500 ease-out-quint hover:-translate-y-1 hover:border-primary/35 hover:bg-surface hover:shadow-[0_24px_48px_-28px_rgb(37_99_235/0.6)]",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="spotlight-layer pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
      />
      {children}
    </div>
  );
}
