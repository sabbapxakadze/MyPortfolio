/**
 * Single source of truth for all portfolio content.
 * Update this file to change what the site displays.
 */

export const profile = {
  name: "Saba Pkhakadze",
  role: "Full-Stack Engineer",
  // Hero headline: the first part is bold, the second is muted.
  headline: "Full-stack engineer",
  headlineMuted: "who ships.",
  // Short line shown under the headline in the hero.
  tagline:
    "I build web products end to end with React, Node.js and PostgreSQL. Currently at DevsData.",
  // Numbers shown under the hero. Keep these in sync with the CV.
  stats: [
    { value: "19 ms", label: "sprint analytics, down from 3.9 s" },
    { value: "700+", label: "unit and API tests" },
    { value: "280+", label: "Playwright tests, 4 shards" },
    { value: "2+ yrs", label: "professional experience" },
  ],
  location: "Kutaisi, Georgia",
  email: "phkhakadze.saba49@gmail.com",
  phone: "+995 591 91 72 97",
  // Resolves under the Vite base path (e.g. /MyPortfolio/CV.pdf in production).
  resumeUrl: `${import.meta.env.BASE_URL}CV.pdf`,
  available: true,
  socials: {
    github: "https://github.com/sabbapxakadze",
    linkedin: "https://www.linkedin.com/in/saba-pkhakadze/",
    leetcode: "https://leetcode.com/u/snowka49/",
  },
};

export const about = {
  // A few short paragraphs. Keep it human.
  paragraphs: [
    "I'm a Full-Stack Engineer and Computer Science student at Kutaisi International University. I work across the whole stack – designing and building REST APIs in ASP.NET Core and Node.js, and crafting responsive React frontends with TypeScript.",
    "At DevsData LLC I work across the frontend and backend of production applications, building and validating n8n and Make automations, integrating the HubSpot API and tracing issues across the full stack. Alongside it, until August 2026, I worked at BeneNAV, where I shipped features across an employee-management platform and its backend API, built shared TypeScript packages and Storybook components, and integrated real-time services.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  stack: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "BeneNAV",
    role: "Full-Stack Engineer",
    period: "Nov 2024 – Aug 2026",
    stack: [
      "React",
      "MUI",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Storybook",
    ],
    highlights: [
      "Developed and maintained features across the company's HR / employee-management dashboard (React, MUI, Redux Toolkit) and its backend API (Node.js, Express, TypeScript, MongoDB), resolving bugs across both the frontend and the data layer.",
      "Built and published an internal shared TypeScript models package consumed by both the frontend dashboard and backend API, keeping data types consistent across the fullstack codebase and reducing duplication.",
      "Designed and developed reusable components for the company's Storybook-based UI component library, translating Figma designs into production-ready, cross-platform components.",
      "Integrated real-time features using an Elixir/Phoenix-based chat service for live messaging/notifications.",
      "Created and configured custom Claude Skills and AI agents to support development workflows, automate repetitive tasks, and provide task-specific context and instructions.",
      "Diagnosed and fixed bugs on the company's marketing site (React, Vite, TypeScript, Tailwind CSS), improving stability and UX.",
    ],
  },
  {
    company: "DevsData",
    role: "Fullstack Developer",
    period: "Jan 2024 – Present",
    current: true,
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
      "n8n",
      "Make",
      "HubSpot API",
      "Git / GitLab",
    ],
    highlights: [
      "Executed e2e development across frontend and backend, delivering features, integrations, and fixes for production applications.",
      "Collaborated with developers to build, configure, test, and validate n8n and Make automations, reviewing workflows, identifying issues, and coordinating team checks to ensure they behaved as expected.",
      "Worked across multiple application layers, tracing issues from React UI behavior through API requests and backend logic to identify and fix root causes.",
      "Develop and refactor reusable React/TypeScript components, improving maintainability and consistency across high-traffic pages.",
      "Debugged and resolved frontend, backend, and API issues, using systematic testing and investigation to identify root causes.",
      "Integrated with the HubSpot API to retrieve and update contacts and deals, manage client information, and track customer interactions and follow-ups.",
      "Worked with Node.js, Express, MongoDB, Supabase, Git/GitLab, and third-party APIs while managing tasks in ClickUp and coordinating changes through staging, code reviews, and production deployments.",
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  /** Shown as a "Live" badge when the project is deployed. */
  live?: boolean;
  summary: string;
  stats?: { value: string; label: string }[];
  points: { lead: string; text: string }[];
  stack: string[];
  /** When set, the project title in the detail panel links here. */
  url?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "FlowDesc.app",
    tag: "Full-Stack",
    live: true,
    url: "https://www.flowdesc.app/",
    summary:
      "Project-management SaaS (issues, board, sprints, analytics), live on Render and Neon with a Cloudflare domain, email routing and a scheduled Worker that keeps the server warm.",
    stats: [
      { value: "3.9s → 19ms", label: "sprint analytics at 20k issues" },
      { value: "9s → 0.6s", label: "project deletion at 20k issues" },
      { value: "700+", label: "unit/API tests" },
      { value: "280+", label: "Playwright tests, 4 parallel shards" },
    ],
    points: [
      {
        lead: "Typed monorepo",
        text: "with Zod contracts shared by the Express API and the React app",
      },
      { lead: "Tenant scoping", text: "on every query" },
      {
        lead: "Real-time",
        text: "updates (Socket.IO), optimistic updates and version-checked edits that never overwrite silently",
      },
      {
        lead: "Secure auth",
        text: "with JWT and rotating refresh tokens, Argon2id, Google/GitHub sign-in, rate limiting and strict CSP",
      },
      {
        lead: "MCP server",
        text: "published to npm with provenance via GitHub Actions, so AI apps like Claude can read and update issues",
      },
      {
        lead: "In-app RAG assistant",
        text: "with Postgres full-text retrieval, Llama on Cloudflare Workers AI, cited answers and prompt-injection defenses",
      },
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle",
      "Socket.IO",
      "GitHub Actions",
    ],
  },
  {
    title: "eCommerce Web Application",
    tag: "Full-Stack",
    summary:
      "Full-stack platform with product catalog, shopping cart, and secure checkout functionality.",
    points: [
      {
        lead: "JWT authentication",
        text: "and PayPal payment integration",
      },
      { lead: "RESTful API", text: "with 20+ endpoints" },
      {
        lead: "Responsive React frontend",
        text: "with real-time cart updates and optimized database queries",
      },
    ],
    stack: ["C#", "ASP.NET Core Web API", "React", "PostgreSQL", "JWT", "PayPal API", "Postman"],
  },
  {
    title: "Grinders FX",
    tag: "Freelance",
    summary:
      "Crypto-focused landing page and dashboard featuring live market stats, price charts, a TradingView-embedded chart widget, and portfolio/testimonial/pricing sections.",
    points: [
      { lead: "Dark/light", text: "theme switching" },
      {
        lead: "Reusable component system",
        text: "built on shadcn/ui and Radix UI",
      },
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "GitHub Actions"],
  },
];

export type Education = {
  institution: string;
  program: string;
  period: string;
  detail: string;
  highlights: string[];
};

export const education: Education[] = [
  {
    institution: "Kutaisi International University",
    program: "B.Sc. in Computer Science",
    period: "2023 – 2027",
    detail: "Kutaisi, Georgia",
    highlights: [
      "Data Structures & Algorithms (Java – 4.0 GPA)",
      "Database Systems (PostgreSQL – 3.7 GPA)",
      "Software Engineering",
      "Web Development",
      "Computer Architecture",
    ],
  },
  {
    institution: "TBC IT Academy",
    program: ".NET Back-End Development",
    period: "2024 – 2025",
    detail: "Intensive bootcamp",
    highlights: [
      "ASP.NET Core & Entity Framework Core",
      "Clean Architecture & MediatR",
      "Industry best practices",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "C"],
  },
  {
    group: "Web Development",
    items: [
      "React",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "REST APIs",
      "WebSockets (Socket.IO)",
      "MUI",
      "Tailwind CSS",
      "Vite",
      "Storybook",
    ],
  },
  {
    group: "Databases & DevOps",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Supabase",
      "Scylla",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "CI/CD",
      "Postgres full-text search",
    ],
  },
  {
    group: "Development Tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "HubSpot",
      "Swagger",
      "Figma",
      "ClickUp",
      "Slack",
    ],
  },
  {
    group: "AI & Integrations",
    items: [
      "Claude Code",
      "OpenAI Codex",
      "Custom Claude Skills",
      "MCP Server Development",
      "RAG",
      "LLM Integration (Llama, Cloudflare Workers AI)",
      "n8n",
      "Make",
    ],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
