import type { SkillIconKey } from "../data/skillPaths";

export interface Skill {
  name: string;
  icon: SkillIconKey;
  featured?: boolean;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
  soft: Skill[];
}

export type SkillCategory = keyof Skills | null;