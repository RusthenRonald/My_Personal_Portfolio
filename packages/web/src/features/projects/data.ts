export type ProjectCategory = 'front' | 'back' | 'fullstack'

export type Project = {
  title:       { pt: string; en: string }
  category:    ProjectCategory
  description: { pt: string; en: string }
  stack:       string[]
  link:        string
  repoLink:    string
  tag:         { pt: string; en: string }
  gradient:    string
  image?:       string
  coldStart?:   boolean
  unavailable?: boolean
}

export const projectsData: Project[] = [
  {
    title:    { pt: 'Gerenciador de Custos', en: 'Cost Manager' },
    category: 'fullstack',
    description: {
      pt: 'O que é: "Costs" é uma aplicação web de gerenciamento de projetos e custos, feita em React (frontend) com um backend mock em JSON Server, dockerizada para deploy. Problema que resolve: Permite cadastrar projetos, definir um orçamento (budget) para cada um, e ir adicionando serviços/custos individuais associados a esse projeto — acompanhando visualmente quanto do orçamento já foi consumido. Resolve a necessidade de organizar e visualizar custos de projetos (categorizados por Infraestrutura, Desenvolvimento, Design, Planejamento) de forma simples, sem precisar de planilhas. Resultado: CRUD completo de projetos e serviços via API REST (JSON Server). Interface responsiva (mobile a desktop) com CSS Modules, cards de projeto, formulários reutilizáveis.Roteamento client-side com React Router v7 (Home, Projetos, Novo Projeto, Detalhe do Projeto, Empresa, Contato).Ambiente containerizado com Docker/docker-compose (frontend e backend separados), com correções recentes de configuração (Dockerfile do backend e URL da API via variável de ambiente REACT_APP_API_URL).',
      en: 'What it is: Costs is a project and cost management web application built with React (frontend) and a mock backend powered by JSON Server, fully containerized with Docker for deployment.Problem it solves: It allows users to create projects, define a budget for each one, and add individual services/costs associated with those projects while visually tracking how much of the budget has already been consumed. It addresses the need to organize and monitor project expenses (categorized as Infrastructure, Development, Design, and Planning) in a simple and intuitive way, without relying on spreadsheets.Result:Complete CRUD operations for projects and services through a REST API (JSON Server).Responsive interface (mobile to desktop) built with CSS Modules, featuring project cards and reusable form components.Client-side routing with React Router v7 (Home, Projects, New Project, Project Details, Company, and Contact pages).Containerized environment using Docker and Docker Compose, with separate frontend and backend services, including recent configuration improvements such as the backend Dockerfile setup and API URL management through the `REACT_APP_API_URL` environment variable.',
    },
    image:    '/costs_image.png',
    stack:    ['React', 'JSON Server', 'Docker', 'Docker Compose', 'CSS'],
    link:     'https://costs-frontend-nle7.onrender.com',
    repoLink: 'https://github.com/RusthenRonald/React-project',
    tag:      { pt: 'Destaque', en: 'Featured' },
    gradient: 'linear-gradient(135deg, #1d2a10, #8fbf1a)',
    coldStart: true,
  },
  {
    title:    { pt: 'Portfólio', en: 'portfolio' },
    category: 'fullstack',
    description: {
      pt: 'O que é: Este portfólio é uma aplicação full stack organizada em monorepo, com frontend em React e um backend próprio em Node.js/Express responsável pelo formulário de contato. Problema que resolve: Apresenta minhas informações, experiências e projetos de forma profissional e responsiva, além de permitir o envio de mensagens de contato de forma segura, com validação de dados e envio de e-mail via API. Resultado: Interface construída em React com TypeScript e Tailwind CSS, com suporte a internacionalização (PT/EN) e tema claro/escuro. API REST em Express responsável por validar (Zod) e processar o envio de e-mails de contato através do Resend.',
      en: 'What it is: This portfolio is a full stack application organized as a monorepo, with a React frontend and a dedicated Node.js/Express backend responsible for the contact form. Problem it solves: It presents my information, experience, and projects in a professional and responsive way, while also allowing visitors to securely send contact messages, with data validation and email delivery through an API. Result: Interface built with React, TypeScript, and Tailwind CSS, supporting internationalization (PT/EN) and light/dark themes. REST API in Express responsible for validating (Zod) and processing contact email delivery through Resend.',
    },
    image:    '/portfolio_image.png',
    stack:    ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'Zod', 'Resend'],
    link:     'https://my-portfolio-web-omega-black.vercel.app/',
    repoLink: 'https://github.com/RusthenRonald/My_Personal_Portfolio',
    tag:      { pt: 'Fullstack', en: 'Fullstack' },
    gradient: 'linear-gradient(135deg, #2a0f24, #FF3D9A)',
  },
  {
    title:    { pt: 'Cordel Moderno', en: 'Modern Cordel' },
    category: 'front',
    description: {
      pt: 'O que é: Cordel Moderno é uma página web front-end, feita em HTML e CSS, que traz a literatura de cordel — tradição popular nordestina — para um formato digital e responsivo. Meu papel: desenvolvimento completo do front-end, cuidando da estrutura em HTML e de toda a estilização em CSS.',
      en: 'What it is: Modern Cordel is a front-end web page, built with HTML and CSS, that brings cordel literature — a traditional Brazilian folk genre — into a modern, responsive digital format. My role: full front-end development, handling the HTML structure and all the CSS styling.',
    },
    image:    '/modern_cordel_image.png',
    stack:    ['HTML', 'CSS'],
    link:     'https://rusthenronald.github.io/Projeto-Cordel',
    repoLink: 'https://github.com/RusthenRonald/Projeto-Cordel',
    tag:      { pt: 'Front-end', en: 'Front-end' },
    gradient: 'linear-gradient(135deg, #0f2130, #2ea6ff)',
  },
  {
    title:    { pt: 'Sistema de Gerenciamento', en: 'Management System' },
    category: 'fullstack',
    description: {
      pt: 'O que é: O Sistema de Gerenciamento é um portal web que desenvolvi para a empresa Jota Nunes, com o objetivo de catalogar e controlar as customizações feitas em seus sistemas legados/ERP — documentando o que foi alterado, por quem, quando e quais dependências existem entre elas, evitando que mudanças pontuais quebrem funcionalidades interligadas. Problema que resolve: Empresas que mantêm sistemas legados/ERPs costumam perder o controle sobre customizações feitas ao longo do tempo — o que foi alterado, por quem, quando, por quê, e como uma alteração depende de outra. O sistema centraliza esse controle através de:Dashboard com totais, registros recentes, mudanças recentes e customizações sem documentação.Documentação Técnica por registro (descrição, funcionalidades, configurações, observações).Dependências entre registros (vínculos com nível de risco, contexto e histórico), mapeando relações entre customizações.Histórico de alterações.Login e notificações via toast para validações.Resultado: Um sistema de gestão que dá rastreabilidade e visibilidade sobre customizações do ERP/sistema legado, reduzindo o risco de quebrar uma customização sem saber que outra dependia dela, e cobrindo a lacuna de documentação técnica que normalmente fica só na cabeça de quem fez a alteração.',
      en: 'What it is: The Management System is a web portal I developed for Jota Nunes to catalog and manage customizations made to its legacy systems/ERP. It documents what was changed, by whom, when the change was made, and the dependencies between customizations, helping prevent isolated modifications from breaking interconnected functionalities.Problem it solves: Companies that maintain legacy systems and ERPs often lose track of customizations implemented over time—what was changed, who made the change, when it was made, why it was necessary, and how one customization depends on another. The system centralizes this information through:A dashboard displaying totals, recent records, recent changes, and undocumented customizations.Technical documentation for each record, including descriptions, functionalities, configurations, and additional notes.Dependency management between records, with links that include risk levels, context, and history, allowing relationships between customizations to be mapped and analyzed.Change history tracking for auditing and traceability.Authentication and toast notifications for validations and user feedback.Result: A management platform that provides visibility and traceability for ERP and legacy system customizations, reducing the risk of breaking dependent functionality due to undocumented changes. It also addresses the common documentation gap by preserving technical knowledge that would otherwise remain only with the developer who implemented the customization.',
    },
    image:    '/live_log_image.png',
    stack:    ['Tailwind', 'React', 'JavaScript'],
    link:     'https://sistema-de-gerenciamento-jota-nunes.vercel.app/',
    repoLink: 'https://github.com/JotaNunesSquad03/Sistema_de_Gerenciamento_Jota_Nunes_Squad03',
    tag:      { pt: 'Fullstack', en: 'Fullstack' },
    gradient: 'linear-gradient(135deg, #241a0a, #ffb02e)',
  },
  {
    title:    { pt: 'Sistema de Gerenciamento (Back-end)', en: 'Management System (Back-end)' },
    category: 'back',
    description: {
      pt: 'O que é: API backend em Python (FastAPI + SQLAlchemy) que atua como núcleo do Sistema de Gerenciamento de Customizações do ERP RM TOTVS, disponibilizando endpoints para cadastro, consulta e auditoria de fórmulas visuais, consultas SQL e relatórios, além de notificações em tempo real via WebSocket. Problema que resolve: Customizações no RM eram feitas de forma dispersa, sem controle central, dificultando saber quem alterou o quê e quais itens dependiam uns dos outros, gerando risco em manutenções.Resultado: API que centraliza auditoria, documentação e mapeamento de dependências (com nível de risco) das customizações, com notificações em tempo real, servindo de base para o frontend.',
      en: 'What it is: A Python backend API built with FastAPI and SQLAlchemy that serves as the core of the RM TOTVS ERP Customization Management System. It provides endpoints for registering, querying, and auditing visual formulas, SQL queries, and reports, as well as real-time notifications through WebSockets.Problem it solves: RM customizations were previously created and maintained in a decentralized manner, with no centralized control, making it difficult to track who changed what and to understand dependencies between customizations. This increased the risk of errors and complications during maintenance and updates.Result: Developed an API that centralizes auditing, documentation, and dependency mapping of ERP customizations, including risk-level analysis. The solution also provides real-time notifications and serves as the foundation for the frontend application, improving visibility, maintainability, and governance of customizations.',
    },
    image:    '/back_live_log.png',
    stack:    ['Python', 'FastAPI', 'SQLAlchemy', 'SQL Server', 'JWT', 'Docker'],
    link:     'https://sistemas-gerenciador-customizacoes-rm-jn-3gsn.onrender.com/',
    repoLink: 'https://github.com/JotaNunesSquad03/Sistemas_Gerenciador_Customizacoes_RM_JN',
    tag:      { pt: 'Fullstack', en: 'Fullstack' },
    gradient: 'linear-gradient(135deg, #1d2a10, #8fbf1a)',
    coldStart: true,
    unavailable: true,
  },
 
]

export const filterCategories = [
  { key: 'all',    label: { pt: 'Todos',     en: 'All'      } },
  { key: 'front',  label: { pt: 'Front-end', en: 'Front-end'} },
  { key: 'back',   label: { pt: 'Back-end',  en: 'Back-end' } },
  { key: 'fullstack', label: { pt: 'Fullstack', en: 'Fullstack' } },
] as const