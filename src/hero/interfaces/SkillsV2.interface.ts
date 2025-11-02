
export interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  featured?: boolean;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
  soft: Skill[];
}

export type SkillCategory = keyof Skills | null;