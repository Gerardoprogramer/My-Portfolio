import type { SkillIconKey } from "../data/skillPaths"

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: Technology[]
  category: string
  demoUrl?: string
  githubUrl?: string
  features: string[]
  challenges?: string
  learnings?: string
}

export interface Technology {
  name: string
  icon: SkillIconKey
  color: string
}