import { CircleCheck } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StatusBadgeProps = {
  tone: "progress" | "done";
  children: ReactNode;
  className?: string;
};

export function StatusBadge({ tone, children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        tone === "progress"
          ? "border-primary/25 bg-primary/10 text-primary-soft"
          : "border-border-strong bg-white/[0.03] text-foreground/80",
        className,
      )}
    >
      {tone === "progress" ? (
        <span aria-hidden="true" className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-soft opacity-70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-primary-soft" />
        </span>
      ) : (
        <CircleCheck aria-hidden="true" className="size-3.5 text-primary-soft" />
      )}
      {children}
    </span>
  );
}
