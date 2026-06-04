export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  company?: string;
  tier: "personal" | "client";
}
