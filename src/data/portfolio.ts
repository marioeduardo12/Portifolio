import {
  BrainCircuit,
  ChefHat,
  CodeXml,
  Coffee,
  FileCode,
  GraduationCap,
  Languages,
  LayoutTemplate,
  MonitorCog,
  ShoppingBag,
  Vote,
} from "lucide-react";
import profilePhoto from "@/assets/images/mario-eduardo.png";
import otimoLogo from "@/assets/logos/otimo.png";
import type {
  ContactInfo,
  Experience,
  Highlight,
  NavItem,
  Project,
  SocialLink,
  TechGroup,
} from "@/types/portfolio";

/**
 * Conteúdo do portfólio centralizado em um único lugar.
 * Para atualizar textos, experiências, projetos ou tecnologias, edite apenas este arquivo.
 */

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "Mário Eduardo",
  title: "Mário Eduardo | Desenvolvedor Full Stack",
  description:
    "Portfólio de Mário Eduardo, Desenvolvedor Full Stack com foco em back-end. Técnico em Informática pelo COTEMIG e estudante de Engenharia de Software na PUC Minas.",
  /**
   * Domínio final do site, usado nas URLs absolutas de SEO.
   * Na Vercel é detectado automaticamente; em outros serviços, defina NEXT_PUBLIC_SITE_URL.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelProductionUrl ? `https://${vercelProductionUrl}` : undefined),
  locale: "pt_BR",
};

export const navItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "contato", label: "Contato" },
] as const satisfies readonly NavItem[];

export const socialLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/marioeduardo12",
    handle: "github.com/marioeduardo12",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/m%C3%A1rio-eduardo/",
    handle: "linkedin.com/in/mário-eduardo",
  },
} satisfies Record<string, SocialLink>;

export const profile = {
  name: "Mário Eduardo",
  firstName: "Mário",
  lastName: "Eduardo",
  greeting: "Olá, eu sou",
  role: "Desenvolvedor Full Stack",
  headline: ["Desenvolvedor Full Stack", "com foco em back-end."],
  /** Trechos entre **asteriscos** recebem destaque. */
  summary:
    "Técnico em Informática pelo **COTEMIG** e estudante de Engenharia de Software na **PUC Minas**. Atualmente atuo na **Krypton BPO**, desenvolvendo soluções e participando de pesquisas em inteligência artificial aplicada ao marketing.",
  location: "Belo Horizonte, MG",
  quote: "Tecnologia para resolver problemas reais.",
  photo: {
    src: profilePhoto,
    alt: "Fotografia de Mário Eduardo",
  },
};

export const about = {
  eyebrow: "Sobre mim",
  title: "Construindo soluções com tecnologia e",
  highlight: "propósito.",
  paragraphs: [
    "Sou **Desenvolvedor Full Stack** com foco em back-end. Técnico em Informática pelo COTEMIG, curso Engenharia de Software na PUC Minas.",
    "Desde julho de 2026 atuo na **Krypton BPO**, em um projeto de pesquisa em IA voltado para marketing de empresas, com Python (FastAPI), Next.js, PostgreSQL e ClickHouse.",
    "Antes disso, fui Técnico de TI no Consórcio Ótimo de Bilhetagem Eletrônica, dando suporte técnico e mantendo sistemas em ambiente corporativo — experiência que aplico hoje na **resolução de problemas** e no **trabalho em equipe**.",
  ],
  highlights: [
    {
      icon: CodeXml,
      label: "Atuação",
      title: "Desenvolvimento Full Stack",
      description:
        "Foco em back-end, desenvolvimento de aplicações e soluções orientadas a dados.",
    },
    {
      icon: GraduationCap,
      label: "Graduação",
      title: "Engenharia de Software",
      description: "PUC Minas",
      status: { label: "Cursando", tone: "progress" },
    },
    {
      icon: MonitorCog,
      label: "Formação técnica",
      title: "Técnico em Informática",
      description: "COTEMIG",
      status: { label: "Concluído", tone: "done" },
    },
    {
      icon: Languages,
      label: "Idioma",
      title: "Inglês",
      description: "Nível intermediário",
    },
  ] satisfies Highlight[],
};

export const experienceSection = {
  eyebrow: "Experiência",
  title: "Minha trajetória",
  highlight: "profissional.",
  description:
    "Do suporte em TI ao desenvolvimento de software: experiências que aplico hoje na resolução de problemas e no trabalho em equipe.",
};

export const experiences: Experience[] = [
  {
    company: "Krypton BPO",
    role: "Estagiário em Desenvolvimento",
    employmentType: "Estágio",
    start: { label: "Julho de 2026", dateTime: "2026-07" },
    location: "Belo Horizonte, MG",
    workMode: "Híbrido",
    description:
      "Atuação em projeto de pesquisa em inteligência artificial voltado ao marketing de empresas, utilizando Python, FastAPI, Next.js, PostgreSQL e ClickHouse.",
    tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "ClickHouse"],
    logo: { type: "monogram", initials: "K" },
  },
  {
    company: "Exército Brasileiro",
    role: "Aluno (CPOR)",
    employmentType: "Tempo integral",
    start: { label: "Fevereiro de 2025", dateTime: "2025-02" },
    end: { label: "Julho de 2025", dateTime: "2025-07" },
    location: "Belo Horizonte, MG",
    workMode: "Presencial",
    description:
      "Experiência com disciplina, trabalho em equipe, responsabilidade e respeito à hierarquia.",
    tags: [
      "Disciplina",
      "Trabalho em equipe",
      "Responsabilidade",
      "Respeito à hierarquia",
    ],
    logo: { type: "monogram", initials: "EB" },
  },
  {
    company: "Consórcio Ótimo de Bilhetagem Eletrônica",
    role: "Técnico de Suporte em TI",
    employmentType: "Tempo integral",
    start: { label: "Março de 2024", dateTime: "2024-03" },
    end: { label: "Fevereiro de 2025", dateTime: "2025-02" },
    location: "Belo Horizonte, MG",
    workMode: "Híbrido",
    description:
      "Suporte técnico, manutenção de sistemas corporativos, atendimento a usuários e resolução de problemas de TI.",
    tags: [
      "Suporte técnico",
      "Manutenção de sistemas",
      "Atendimento a usuários",
      "Resolução de problemas",
    ],
    logo: {
      type: "image",
      src: otimoLogo,
      alt: "Logo do Ótimo, Bilhete Eletrônico Metropolitano",
    },
  },
];

export const projectsSection = {
  eyebrow: "Projetos",
  title: "Alguns dos meus",
  highlight: "trabalhos.",
  description:
    "Projetos acadêmicos e pessoais publicados no meu GitHub, além da pesquisa em IA que desenvolvo atualmente.",
};

/** Projetos reais do GitHub. Para adicionar um novo, inclua um item nesta lista. */
export const projects: Project[] = [
  {
    title: "Pesquisa em IA para Marketing",
    description:
      "Projeto de pesquisa em inteligência artificial voltado ao marketing de empresas, desenvolvido na Krypton BPO.",
    tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "ClickHouse"],
    icon: BrainCircuit,
    status: "Em desenvolvimento",
    context: "Krypton BPO",
    note: "Código não disponível publicamente.",
    featured: true,
  },
  {
    title: "Candidatos TSE",
    description:
      "Aplicação Spring Boot que lê os dados abertos do TSE sobre os candidatos de MG nas eleições de 2026 e exibe o perfil de cada um, com filtros por gênero, escolaridade e faixa etária.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "OpenCSV"],
    icon: Vote,
    year: 2026,
    repositoryUrl: "https://github.com/marioeduardo12/AV1B",
  },
  {
    title: "CoderAutomation",
    description:
      "Site com modelo de e-commerce inspirado no Brasil Paralelo, publicado na Netlify.",
    tags: ["HTML5", "CSS3"],
    icon: ShoppingBag,
    year: 2022,
    repositoryUrl: "https://github.com/marioeduardo12/CoderAutomation",
    liveUrl: "https://coderautomation.netlify.app",
  },
  {
    title: "Estudos em Java",
    description:
      "Arquivo de estudos com mais de 2.000 linhas, envolvendo classes e a resolução de diversos problemas em Java.",
    tags: ["Java", "POO"],
    icon: Coffee,
    year: 2024,
    repositoryUrl:
      "https://github.com/marioeduardo12/-2000-linhas-de-exercicio-em-java",
  },
  {
    title: "Receitas de Minas",
    description: "Sistema web para gerenciar receitas.",
    tags: ["HTML5", "CSS3"],
    icon: ChefHat,
    year: 2026,
    repositoryUrl: "https://github.com/marioeduardo12/receitas-de-minas",
  },
  {
    title: "Reprodução do site do COTEMIG",
    description: "Reprodução do site do COTEMIG desenvolvida com HTML5 e CSS3.",
    tags: ["HTML5", "CSS3"],
    icon: LayoutTemplate,
    year: 2022,
    repositoryUrl: "https://github.com/marioeduardo12/ReproducaoCotemig",
  },
  {
    title: "Formulários em PHP",
    description:
      "Formulários e projetos em PHP integrados a um banco de dados MySQL, executados com XAMPP.",
    tags: ["PHP", "MySQL"],
    icon: FileCode,
    year: 2023,
    repositoryUrl: "https://github.com/marioeduardo12/PHP",
  },
];

export const techSection = {
  eyebrow: "Tecnologias",
  title: "Ferramentas e tecnologias no meu",
  highlight: "dia a dia.",
  description:
    "Linguagens, frameworks, bancos de dados e ferramentas que utilizo no desenvolvimento, além das metodologias ágeis que guiam a organização do trabalho.",
};

export const techGroups: TechGroup[] = [
  {
    title: "Desenvolvimento",
    items: [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "sql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "ClickHouse", icon: "clickhouse" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Bitbucket", icon: "bitbucket" },
      { name: "Jira", icon: "jira" },
    ],
  },
  {
    title: "Metodologias",
    items: [
      { name: "Scrum", icon: "scrum" },
      { name: "Kanban", icon: "kanban" },
    ],
  },
];

/** Para exibir um e-mail profissional na seção de contato, adicione `email: "..."`. */
export const contact: ContactInfo = {
  eyebrow: "Contato",
  title: "Vamos construir algo",
  highlight: "juntos?",
  description:
    "Estou aberto a conversar sobre projetos, colaborações e novas oportunidades. Me chame no LinkedIn ou conheça meus repositórios no GitHub.",
};
