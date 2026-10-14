import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type IconLinkProps = Omit<ComponentProps<"a">, "aria-label"> & {
  label: string;
};

export function IconLink({ label, className, children, ...props }: IconLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre em uma nova aba)`}
      title={label}
      className={cn(
        "inline-grid size-10 place-items-center rounded-xl border border-border bg-white/[0.02] text-muted transition-[translate,color,background-color,border-color] duration-300 ease-out-quint hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
