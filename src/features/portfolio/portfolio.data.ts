import type { Experience, Project, SkillGroup } from "./portfolio.types";

export const experiences: Experience[] = [
  {
    role: "Web Developer",
    company: "Syntactics Inc.",
    companyUrl: "https://www.syntacticsinc.com/",
    period: "July 2025 to present",
    highlights: [
      "Develop custom business management systems for multiple clients across different industries, adapting to varied and complex requirements.",
      "Build and maintain WordPress websites end-to-end — landing pages, plugin updates, cache clearing, backup checks, form troubleshooting, layout fixes, and PHP error resolution.",
      "Collaborate on full-stack projects using ReactJS, Laravel, and MySQL in an agile team, managing tasks through Bitrix24 with QA and PM approval workflows.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "PHP", "Python", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "ReactJS",
      "NextJS",
      "Laravel",
      "Inertia",
      "Tailwind CSS",
      "Shadcn/UI",
      "Material UI",
      "NodeJS",
      "Express",
      "Vue",
    ],
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQLite", "MongoDB", "Firebase", "Supabase"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Figma",
      "Postman",
      "Vercel",
      "Railway",
      "SSH",
    ],
  },
  {
    category: "Practices",
    skills: [
      "Agile Methodologies",
      "Responsive Design",
      "API Development",
      "Component-Based Architecture",
      "Web Security Practices",
    ],
  },
];

export const personalProjects: Project[] = [
  {
    name: "Fluss",
    description: "A minimal desktop media downloader.",
    url: "https://fluss-webapp.vercel.app/",
    tier: "personal",
  },
];

export const clientProjects: Project[] = [
  {
    name: "Agricultural Operations Management System",
    description:
      "A management platform that centralizes daily operations for a multi-site farming enterprise — inventory, purchase orders, crop maintenance scheduling, field mapping, sales, and customer records. Role-specific views for field workers, supervisors, and administrators replace spreadsheets and paper logs with one organized hub.",
    company: "Syntactics Inc.",
    tier: "client",
  },
  {
    name: "All-in-One Retail Operations Platform",
    description:
      "A central dashboard for managing an entire online retail operation — product catalogs, order tracking, payment processing, and reporting. Real-time notifications and role-based permissions keep staff aligned, with a companion mobile experience for teams in the field.",
    company: "Syntactics Inc.",
    tier: "client",
  },
  {
    name: "End-to-End Business Operations Platform",
    description:
      "A unified workspace for multi-entity service businesses — client management, job estimating, work order tracking, invoicing, collections, inventory, and expenses. Role-specific access keeps each team member in their workflow, while leadership tracks performance through P&L, income statements, and productivity reports across every branch.",
    company: "Syntactics Inc.",
    tier: "client",
  },
];
