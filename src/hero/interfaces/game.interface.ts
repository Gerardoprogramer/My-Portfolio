
import type { ComponentType, LazyExoticComponent } from "react"

export type GameComponent = LazyExoticComponent<ComponentType<any>>
export interface Game {
  id: string
  title: string
  description: string
  emoji: string
  color: string
  component: GameComponent
}