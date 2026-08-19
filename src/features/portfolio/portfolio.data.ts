import type {
  ContactEntry,
  Fact,
  IndexRow,
  NavItem,
  Note,
  Position,
  Project,
  Publication,
} from "./portfolio.types";

export const publication: Publication = {
  name: "Mel Alejandrino",
  tagline: "Web Developer · Builder · Digital Craft",
  volume: "Vol. 01",
  issue: "No. 01",
  established: "Est. 2025",
  place: "Cagayan de Oro, Philippines",
};

export const navigation: NavItem[] = [
  { id: "front", label: "Front Page", folio: "01" },
  { id: "work", label: "Work", folio: "02" },
  { id: "profile", label: "Profile", folio: "04" },
  { id: "ledger", label: "Ledger", folio: "05" },
  { id: "index", label: "Index", folio: "07" },
  { id: "notes", label: "Notes", folio: "08" },
  { id: "contact", label: "Contact", folio: "12" },
];

export const leadStory = {
  kicker: "The Front Page · No. 01",
  headline: "I build digital products for the web.",
  dek: "Business systems, client platforms, and desktop software — built for the people who have to use them every working day.",
  byline: "By Mel Alejandrino",
  body: [
    "I am a developer. Most of what I make is a web application that somebody depends on: an inventory ledger, a purchase order queue, an invoicing screen that has to add up correctly the first time. It is the unglamorous half of the trade, and it is the half I like.",
    "The work usually begins the same way. A business is running on a spreadsheet that four people edit at once, plus a paper log, plus a group chat where the real decisions happen. My job is to read that arrangement carefully enough to replace it without breaking it — because the spreadsheet, for all its faults, is the specification.",
    "The rest of the time I build for myself — desktop tools and small utilities, made to see whether an idea holds up. They are the smaller half of the work, and they feed the larger one.",
  ],
};

export const workSection = {
  headline: "Systems people use every working day",
  note: "Client work · 2025 — 2026",
  briefsKicker: "Also — personal work",
  footnote:
    "A selection, not an inventory. Most client work sits behind an agreement and is available on request.",
};

export const deskNote = {
  heading: "A Note from the Desk",
  body: "I would rather write a plainer thing that works on a bad connection in a warehouse than a clever thing that photographs well. Most of my decisions come out of that preference.",
};

export const projects: Project[] = [
  {
    no: "01",
    title: "Agricultural Operations Management",
    category: "Web Application",
    year: "2025",
    role: "Frontend Development",
    stack: ["Next.js"],
    dek: "One platform for the daily operations of a multi-site farming enterprise.",
    body: [
      "Inventory, purchase orders, crop scheduling, field mapping, sales, and customer records — six systems that had each grown up separately, brought under one login. The difficulty was never any single screen; it was the reconciliation between them.",
      "A purchase order raised at one site moves stock at another, and the figure that lands in the monthly report has to agree with both. Most of the frontend work went into making that chain legible: showing where a number came from, and what moves if it changes.",
      "Built in Next.js against a shared API, for staff who work across several sites and are not always on a good connection.",
    ],
    client: "Syntactics Inc.",
    figureCaption: "Fig. 02 — Operations dashboard, field mapping view",
    weight: "lead",
  },
  {
    no: "02",
    title: "Retail Operations Platform",
    category: "Web Application",
    year: "2026",
    role: "Frontend Development",
    stack: ["React", "Inertia"],
    dek: "A central desk for running an entire online retail operation.",
    body: [
      "Product catalogues, order tracking, payment processing, and reporting, with notifications that arrive while the shift is still on. Built so that the person at the counter and the person reading the monthly figures are looking at the same numbers.",
      "The reporting screens mattered most. An operation this size makes its decisions on those figures, so they had to be quick to read and difficult to misread.",
    ],
    client: "Syntactics Inc.",
    figureCaption: "Fig. 03 — Order tracking, live queue",
    weight: "half",
  },
  {
    no: "03",
    title: "Business Operations Platform",
    category: "Web Application",
    year: "2025",
    role: "Frontend Development",
    stack: ["Next.js"],
    dek: "A unified workspace for multi-entity service businesses, branch by branch.",
    body: [
      "Client management, job estimating, work orders, invoicing, inventory, and profit-and-loss reporting across branches — each of which had its own way of doing things and a reasonable argument for keeping it. Much of the work was finding the shape that fit all of them without flattening any.",
      "The consolidated P&L was the test: assembled from branches that do not agree on categories, and still defensible to the person signing it off.",
    ],
    client: "Syntactics Inc.",
    figureCaption: "Fig. 04 — Branch reporting, consolidated P&L",
    weight: "half",
  },
  {
    no: "04",
    title: "Fluss",
    category: "Desktop Software",
    year: "2025",
    role: "Design & Engineering",
    stack: ["Tauri", "React"],
    dek: "A minimal desktop media downloader, built to do one thing and stay out of the way.",
    body: [
      "One screen, no account, no update nag. The engineering interest is in the queue — downloads that survive a dropped connection and resume without asking, which is most of what makes a small tool feel trustworthy.",
    ],
    url: "https://getfluss.vercel.app/",
    figureCaption: "Fig. 05 — Fluss, single-window interface",
    weight: "brief",
  },
];

export const positions: Position[] = [
  {
    period: "2025 — Present",
    role: "Web Developer",
    org: "Syntactics Inc.",
    place: "Cagayan de Oro, Philippines",
    discipline: "Frontend Engineering",
    note: "Building custom web applications and client-facing digital experiences — operations platforms, dashboards, and the reporting that businesses actually run on. The work runs from the first wireframe review to the long tail of fixes after launch.",
    highlights: [
      "Frontend for multi-module operations platforms — inventory, orders, invoicing, reporting",
      "Next.js, React, and Inertia in production client codebases",
      "Translating requirements that arrive as spreadsheets, calls, and late revisions",
      "Handover, QA support, and maintenance once a system is live",
    ],
  },
  {
    period: "2025",
    role: "Web Developer Intern",
    org: "Syntactics Inc.",
    place: "Cagayan de Oro, Philippines",
    discipline: "Frontend",
    note: "Frontend work on production client projects, and a first education in how requirements arrive in the real world: incomplete, verbally, and late.",
    highlights: [
      "First production frontend work on live client projects",
      "Component work, form validation, and responsive layout",
      "Learned the delivery process end to end, from brief to handover",
    ],
  },
];

export const ledgerSection = {
  headline: "Where the work has been done",
  note: "Two entries · 2025 — present",
};

export const profileBody = [
  "Mel Alejandrino is a web developer who likes making things — mostly websites, sometimes software, occasionally something completely different. Mel works at Syntactics Inc. in Cagayan de Oro, building business systems: the kind of software that replaces spreadsheets and paper logs with something organised.",
  "The interest is in the unglamorous middle of the profession. Inventory. Operations. Reporting. Screens that a person opens at seven in the morning and closes at five, and which therefore have no business being clever at the expense of the person using them.",
  "Most of that work arrives through Syntactics, for clients who need one platform where several disagreeing systems used to be. Alongside it there are desktop tools and small utilities, built to find out whether an idea holds up.",
];

export const facts: Fact[] = [
  { label: "Location", value: "Cagayan de Oro, Philippines" },
  { label: "Role", value: "Web Developer, Syntactics Inc." },
  { label: "Specialty", value: "Frontend engineering for business systems" },
  { label: "Current focus", value: "Operations platforms and reporting" },
  { label: "Working hours", value: "GMT+8, and some hours after that" },
  { label: "Availability", value: "Open to interesting problems" },
];

export const technicalIndex: IndexRow[] = [
  {
    field: "Frontend",
    entries: ["React", "Next.js", "TypeScript", "Inertia", "Tailwind CSS", "Shadcn/UI"],
    primary: true,
  },
  {
    field: "Database",
    entries: ["MySQL", "SQLite", "MongoDB", "Firebase", "Supabase"],
    primary: true,
  },
  {
    field: "Tooling",
    entries: ["Git", "GitHub", "Figma", "Postman", "Vercel", "Railway"],
    primary: true,
  },
  {
    field: "Backend",
    entries: ["PHP", "Laravel", "Node.js", "Express", "Python"],
    primary: false,
  },
  {
    field: "Desktop",
    entries: ["Tauri", "Electron"],
    primary: false,
  },
];

export const indexNote =
  "The frontend is where the work is done. Backend and desktop are working familiarity — enough to build with the documentation open, and no claim beyond that.";

export const notes: Note[] = [
  {
    date: "August 18, 2026",
    title: "On building software that feels good",
    category: "Technology / Design",
    excerpt:
      "Nobody thanks you for the loading state, and nobody forgives you for its absence. The difference between software that feels good and software that merely works is almost entirely in the parts you would never put in a demonstration.",
  },
  {
    date: "July 2, 2026",
    title: "The spreadsheet is the specification",
    category: "Practice",
    excerpt:
      "Before the requirements document there was a workbook with eleven tabs, four colour conventions nobody wrote down, and one column called NOTES that holds the entire business logic. Read it before proposing anything.",
  },
  {
    date: "May 21, 2026",
    title: "In defence of boring technology",
    category: "Engineering",
    excerpt:
      "A framework I understand at three in the morning is worth more than a framework that benchmarks better. Most of the interesting decisions in a project are not technology choices at all, and treating them as such is how projects get long.",
  },
  {
    date: "March 9, 2026",
    title: "What a desktop app taught me about scope",
    category: "Craft",
    excerpt:
      "Shipping something small and finished is harder than shipping something large and nearly done, and considerably more useful. The second feature is where an honest tool starts becoming a product nobody asked for.",
  },
];

export const contact: ContactEntry[] = [
  {
    label: "Email",
    value: "alejandrino.mel002@gmail.com",
    href: "mailto:alejandrino.mel002@gmail.com",
    aria: "Email Mel Alejandrino",
  },
  {
    label: "GitHub",
    value: "github.com/melalejandrino",
    href: "https://github.com/melalejandrino",
    aria: "GitHub profile",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/melcarlo",
    href: "https://linkedin.com/in/melcarlo",
    aria: "LinkedIn profile",
  },
  {
    label: "Employer",
    value: "syntacticsinc.com",
    href: "https://www.syntacticsinc.com/",
    aria: "Syntactics Inc. website",
  },
];

/**
 * Front-page figures. Deliberately not a project count — the work shipped is
 * more than the work selected here.
 */
export const statistics = [
  { value: "04", label: "Years building for the web" },
  { value: "Many", label: "Projects shipped, uncounted" },
  { value: "2025", label: "Joined Syntactics Inc." },
];
