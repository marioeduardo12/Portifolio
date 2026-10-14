# Portfólio — Mário Eduardo

Portfólio profissional de **Mário Eduardo**, Desenvolvedor Full Stack com foco em back-end. Técnico em Informática pelo COTEMIG e estudante de Engenharia de Software na PUC Minas.

## Stack

- [Next.js 16](https://nextjs.org) com App Router e TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [Motion](https://motion.dev) para animações
- [Lucide](https://lucide.dev) para ícones

## Destaques

- Tema escuro com identidade visual própria: cards com bordas sutis, gradientes discretos e iluminação azul
- Animações de entrada em sequência, revelação das seções durante a rolagem, timeline animada e parallax sutil
- Respeito a `prefers-reduced-motion`
- Navbar com indicador da seção ativa, menu mobile acessível e barra de progresso de rolagem
- Layout responsivo para desktop, notebook, tablet e smartphone
- SEO com metadados, imagem Open Graph gerada automaticamente, ícones e dados estruturados (JSON-LD)

## Como rodar

Requisito: Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Ambiente de desenvolvimento        |
| `npm run build` | Gera a versão de produção          |
| `npm start`     | Executa a versão de produção       |
| `npm run lint`  | Analisa o código com o ESLint      |

## Editando o conteúdo

Todo o conteúdo profissional fica em [`src/data/portfolio.ts`](src/data/portfolio.ts): textos, experiências, projetos, tecnologias e links.

- **Projetos:** inclua um novo item na lista `projects`.
- **E-mail:** para exibir um e-mail profissional na seção de contato, adicione `email` ao objeto `contact`.
- **Logos:** adicione a imagem em `src/assets/logos/` e use `logo: { type: "image", src, alt }` na experiência correspondente.

## Deploy

O projeto pode ser publicado na [Vercel](https://vercel.com) sem configuração adicional: o domínio de produção é detectado automaticamente para a URL canônica e para as URLs absolutas dos metadados. Em outros serviços, defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` com o domínio final (por exemplo, `https://seudominio.com.br`).

## Estrutura

```text
src/
├── app/            # layout, página, metadados, imagem Open Graph e ícones
├── assets/         # fotografia, logos e fontes
├── components/
│   ├── icons/      # ícones de marcas e tecnologias em SVG
│   ├── layout/     # Navbar, Footer e barra de progresso
│   ├── sections/   # Hero, About, ExperienceTimeline, Projects, TechStack e Contact
│   └── ui/         # componentes reutilizáveis, como AnimatedSection e ButtonLink
├── data/           # conteúdo do portfólio
├── hooks/          # hook da seção ativa
├── lib/            # utilitários e variantes de animação
└── types/          # tipos TypeScript
```

## Créditos

Ícones de tecnologias: [Devicon](https://devicon.dev) (MIT) e [Simple Icons](https://simpleicons.org) (CC0). Fonte [Geist](https://vercel.com/font) (SIL Open Font License 1.1).
