import { cn } from "@/lib/cn";

type TagListProps = {
  tags: string[];
  label: string;
  className?: string;
};

export function TagList({ tags, label, className }: TagListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-lg border border-border bg-white/3 px-2.5 py-1 text-xs font-medium text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
