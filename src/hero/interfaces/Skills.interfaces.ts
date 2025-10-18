export interface Technology {
  name: string
  icon: string
  color: string
}

export interface Skill {
  name: string
  color: string
  technologies: Technology[]
}
