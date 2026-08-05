export type ProjectTier = "built" | "in-progress" | "experiments";

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  company?: string;
  tier: ProjectTier;
  tags: string[];
}

export interface CurrentlyItem {
  label: string;
  value: string;
}
