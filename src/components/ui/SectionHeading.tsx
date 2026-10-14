import { Reveal } from "@/components/ui/AnimatedSection";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal>
        <h2
          id={id}
          className="mt-5 text-[clamp(1.875rem,3.4vw,2.625rem)] leading-[1.1] font-semibold tracking-tight text-balance"
        >
          {title} <span className="text-gradient">{highlight}</span>
        </h2>
      </Reveal>
      {description && (
        <Reveal>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
