import type { Project, CurrentlyItem } from "./portfolio.types";

export interface StackGroup {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "001",
    name: "Fluss",
    description:
      "A minimal desktop media downloader. Clean interface, focused on doing one thing well.",
    url: "https://getfluss.vercel.app/",
    tier: "built",
    tags: ["Electron", "Node.js"],
  },
  {
    id: "002",
    name: "Agricultural Operations Management",
    description:
      "A management platform that centralizes daily operations for a multi-site farming enterprise — inventory, purchase orders, crop scheduling, field mapping, sales, and customer records.",
    company: "Syntactics Inc.",
    tier: "built",
    tags: ["React", "Laravel", "MySQL"],
  },
  {
    id: "003",
    name: "Retail Operations Platform",
    description:
      "A central dashboard for managing an entire online retail operation — product catalogs, order tracking, payment processing, and reporting with real-time notifications.",
    company: "Syntactics Inc.",
    tier: "built",
    tags: ["React", "Laravel", "MySQL"],
  },
  {
    id: "004",
    name: "Business Operations Platform",
    description:
      "A unified workspace for multi-entity service businesses — client management, job estimating, work orders, invoicing, inventory, and P&L reporting across branches.",
    company: "Syntactics Inc.",
    tier: "built",
    tags: ["React", "Laravel", "MySQL"],
  },
];

export const currently: CurrentlyItem[] = [
  { label: "Building", value: "Business systems at Syntactics Inc." },
  { label: "Exploring", value: "Desktop apps and creative tools" },
  { label: "Learning", value: "New frameworks and design patterns" },
];

export const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/melalejandrino",
    aria: "GitHub profile",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/melcarlo",
    aria: "LinkedIn profile",
  },
  {
    label: "Email",
    href: "mailto:alejandrino.mel002@gmail.com",
    aria: "Email address",
  },
];

export const stack: StackGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue", "Inertia", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Express", "Python", "Rust"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQLite", "MongoDB", "Firebase", "Supabase"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Postman", "Vercel", "Railway"],
  },
];
