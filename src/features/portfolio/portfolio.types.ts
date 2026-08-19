export interface Publication {
  name: string;
  tagline: string;
  volume: string;
  issue: string;
  established: string;
  place: string;
}

export interface NavItem {
  id: string;
  label: string;
  folio: string;
}

/** How much of the editorial grid a story occupies. `brief` runs short and
 *  last — it is where personal work goes, below the client stories. */
export type StoryWeight = "lead" | "half" | "brief";

export interface Project {
  no: string;
  title: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  dek: string;
  body: string[];
  client?: string;
  url?: string;
  /** Optional photograph. Omit and the story prints a typographic plate. */
  image?: string;
  figureCaption: string;
  weight: StoryWeight;
}

export interface Position {
  period: string;
  role: string;
  org: string;
  place: string;
  discipline: string;
  note: string;
  highlights: string[];
}

export interface Note {
  date: string;
  title: string;
  category: string;
  excerpt: string;
  url?: string;
}

export interface IndexRow {
  field: string;
  entries: string[];
  /** Everyday tools, set in full ink; the rest is set back. */
  primary: boolean;
}

export interface Fact {
  label: string;
  value: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href: string;
  aria: string;
}
