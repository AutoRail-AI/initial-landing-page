import { User, Users, Cpu } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Persona {
  icon: LucideIcon
  title: string
  benefit: string
  description: string
}

export const PERSONAS: Persona[] = [
  {
    icon: User,
    title: "Indie Hackers",
    benefit: "Ship AI products without becoming an infrastructure expert",
    description:
      "Focus on your product, not your backend. AutoRail handles the complexity so you can move fast and stay lean.",
  },
  {
    icon: Users,
    title: "Startup Teams",
    benefit: "Scale prototypes to production without hiring DevOps",
    description:
      "Your engineering team should build features, not fight infrastructure. AutoRail grows with you from MVP to Series A and beyond.",
  },
  {
    icon: Cpu,
    title: "AI Engineers",
    benefit: "Production-grade agent systems that actually stay up",
    description:
      "You know what good infrastructure looks like. AutoRail implements it automatically—stateful memory, proper orchestration, real observability.",
  },
]
