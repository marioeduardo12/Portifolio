import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonStyleOptions = {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
};

type ButtonLinkProps = ComponentProps<"a"> &
  ButtonStyleOptions & {
    external?: boolean;
  };

const variants = {
  primary:
    "bg-primary-strong text-white shadow-[0_10px_30px_-10px_rgb(37_99_235/0.85),inset_0_1px_0_rgb(255_255_255/0.18)] hover:bg-[#2c69ec] hover:shadow-[0_16px_40px_-12px_rgb(59_130_246/0.9),inset_0_1px_0_rgb(255_255_255/0.22)]",
  secondary:
    "border border-border-strong bg-white/2 text-foreground hover:border-primary/50 hover:bg-primary/10",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

export function buttonStyles({ variant = "primary", size = "md" }: ButtonStyleOptions = {}) {
  return cn(
    "group/button inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-[translate,scale,background-color,border-color,box-shadow,color] duration-300 ease-out-quint hover:-translate-y-0.5 active:scale-[0.98]",
    variants[variant],
    sizes[size],
  );
}

export function ButtonLink({
  variant,
  size,
  external = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonStyles({ variant, size }), className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    >
      {children}
      {external && <span className="sr-only">(abre em uma nova aba)</span>}
    </a>
  );
}
