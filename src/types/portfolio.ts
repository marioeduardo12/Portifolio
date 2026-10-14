import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Highlight = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  status?: {
    label: string;
    tone: "progress" | "done";
  };
};

export type MonthYear = {
  label: string;
  /** Formato AAAA-MM, usado no atributo dateTime. */
  dateTime: string;
};

export type CompanyLogo =
  | { type: "image"; src: StaticImageData; alt: string }
  | { type: "monogram"; initials: string };

export type Experience = {
  company: string;
  role: string;
  employmentType: string;
  start: MonthYear;
  /** Deixe vazio para experiências em andamento. */
  end?: MonthYear;
  location: string;
  workMode: string;
  description: string;
  tags: string[];
  logo: CompanyLogo;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  year?: number;
  repositoryUrl?: string;
  liveUrl?: string;
  status?: string;
  context?: string;
  note?: string;
  featured?: boolean;
};

export type TechIconName =
  | "python"
  | "fastapi"
  | "nextjs"
  | "javascript"
  | "sql"
  | "postgresql"
  | "clickhouse"
  | "git"
  | "github"
  | "bitbucket"
  | "jira"
  | "scrum"
  | "kanban";

export type TechItem = {
  name: string;
  icon: TechIconName;
};

export type TechGroup = {
  title: string;
  items: TechItem[];
};

export type ContactInfo = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  email?: string;
};
