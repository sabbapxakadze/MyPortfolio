/**
 * Single source of truth for all portfolio content.
 * Update this file to change what the site displays.
 */

export const profile = {
  name: "Saba Pkhakadze",
  role: "Full-Stack Engineer",
  // Short line shown under the name in the hero.
  tagline:
    "I build full-stack web applications — from .NET & Node.js APIs to React frontends.",
  location: "Kutaisi, Georgia",
  email: "phkhakadze.saba49@gmail.com",
  phone: "+995 591 91 72 97",
  resumeUrl: "/CV.pdf",
  available: true,
  socials: {
    // TODO: confirm the GitHub URL — currently a best guess.
    github: "https://github.com/sabbapxakadze",
    linkedin: "https://www.linkedin.com/in/saba-pkhakadze/",
    leetcode: "https://leetcode.com/u/snowka49/",
  },
};

export const about = {
  // A few short paragraphs. Keep it human.
  paragraphs: [
    "I'm a Full-Stack Engineer and Computer Science student at Kutaisi International University. I work across the whole stack — designing and building REST APIs in ASP.NET Core and Node.js, and crafting responsive React frontends with TypeScript.",
    "At BeneNAV I ship features across an employee-management platform and its backend API, build shared TypeScript packages and Storybook components, and integrate real-time services. Alongside that I work as a QA Engineer, which keeps me obsessive about edge cases and reliability.",
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
    period: "Nov 2025 — Present",
    current: true,
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
      "Develop and maintain features across the company's HR / employee-management dashboard (React, MUI, Redux Toolkit) and its backend API (Node.js, Express, TypeScript, MongoDB), fixing bugs across both the UI and the data layer.",
      "Built and published an internal shared TypeScript models package consumed by both the frontend and backend, keeping data types consistent across the codebase and reducing duplication.",
      "Designed reusable components for the Storybook-based UI library, translating Figma designs into production-ready, cross-platform components.",
      "Integrated real-time messaging and notifications via an Elixir/Phoenix-based chat service.",
      "Diagnosed and fixed bugs on the company's marketing site (React, Vite, TypeScript, Tailwind CSS), improving stability and UX.",
    ],
  },
  {
    company: "DevsData",
    role: "QA Engineer",
    period: "Jan 2025 — Present",
    current: true,
    stack: ["Manual Testing", "API Testing", "Postman", "Git / GitLab", "Trello"],
    highlights: [
      "Execute comprehensive manual and exploratory testing across frontend and backend systems, identifying and documenting critical bugs that improved application stability.",
      "Design detailed test cases covering edge cases and user workflows, ensuring 95%+ test coverage for new features.",
      "Collaborate with the development team through Agile ceremonies to prioritize and resolve 50+ issues monthly.",
      "Perform API testing with Postman, validating request/response patterns and authentication flows.",
      "Run cross-browser and cross-device testing across Chrome, Firefox, Safari, and Edge.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  tag: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "GrindersFX Trading Portfolio",
    blurb:
      "Freelance build of a modern, responsive trading-portfolio site showcasing strategies, performance metrics, and analytics with interactive charts.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    tag: "Freelance",
  },
  {
    title: "eCommerce Web Application",
    blurb:
      "Full-stack store with product catalog, shopping cart, and secure checkout. JWT auth, PayPal integration, and a RESTful API with 20+ endpoints, backed by a responsive React frontend with real-time cart updates.",
    stack: ["C#", "ASP.NET Core", "React", "PostgreSQL", "JWT", "PayPal API"],
    tag: "Full-Stack",
  },
  {
    title: "Video-Platform",
    blurb:
      "Video-sharing platform with upload, streaming, and engagement features (comments, likes). Scalable backend API handling video metadata and user interactions over optimized PostgreSQL queries.",
    stack: ["C#", "ASP.NET Core", "PostgreSQL", "React", "Postman"],
    tag: "Full-Stack",
  },
  {
    title: "Blogs-Application",
    blurb:
      "Blogging platform with user authentication, full CRUD for posts, and an interactive comment system. MVC architecture with a normalized database design, tested with Swagger.",
    stack: ["C#", "ASP.NET MVC", "MSSQL"],
    tag: "Web App",
  },
  {
    title: "MyPostman",
    blurb:
      "Desktop API-testing tool (a Postman clone) supporting all HTTP methods with JWT auth and formatted JSON responses, in an intuitive Windows Forms interface with request/response tabs and URL validation.",
    stack: ["C#", ".NET 8", "HttpClient", "WinForms", "JWT"],
    tag: "Desktop App",
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
    period: "2023 — 2027",
    detail: "Kutaisi, Georgia",
    highlights: [
      "Data Structures & Algorithms (Java — 4.0 GPA)",
      "Database Systems (PostgreSQL — 3.7 GPA)",
      "Software Engineering",
      "Web Development",
      "Computer Architecture",
    ],
  },
  {
    institution: "TBC IT Academy",
    program: ".NET Back-End Development",
    period: "2024 — 2025",
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
    group: "Languages & Frameworks",
    items: [
      "C#",
      "ASP.NET Core",
      "TypeScript",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Redux Toolkit",
      "MUI",
      "Styled-Components / Emotion",
    ],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MongoDB", "MSSQL", "RESTful API Design", "JWT Auth"],
  },
  {
    group: "Tools",
    items: [
      "Git / GitHub / GitLab",
      "Postman",
      "Figma",
      "Storybook",
      "Vite",
      "Swagger",
      "Notion",
      "Trello",
      "n8n",
    ],
  },
  {
    group: "Testing & QA",
    items: [
      "Manual Testing",
      "API Testing",
      "Test Case Design",
      "Cross-browser Testing",
      "Bug Tracking",
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
