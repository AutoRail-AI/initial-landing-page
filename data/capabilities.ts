import { Database, GitBranch, Shield, Rocket, Eye, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Capability {
  icon: LucideIcon
  title: string
  description: string
  keywords: string[]
}

export const CAPABILITIES: Capability[] = [
  {
    icon: Database,
    title: "Stateful Memory",
    description:
      "Persistent context across sessions, workflows, and sub-agents. Your AI remembers everything it needs to—automatically.",
    keywords: ["agent memory", "context persistence", "stateful AI"],
  },
  {
    icon: GitBranch,
    title: "Workflow Orchestration",
    description:
      "Sequencing, concurrency control, intelligent retries, and fallback patterns. Complex multi-agent workflows that actually work.",
    keywords: ["agent orchestration", "workflow automation", "multi-agent systems"],
  },
  {
    icon: Shield,
    title: "Production Guardrails",
    description:
      "Rate limiters, circuit breakers, input validation, and policy-as-code. Protection built into every layer.",
    keywords: ["AI safety", "rate limiting", "circuit breakers"],
  },
  {
    icon: Rocket,
    title: "Deploy Engine",
    description:
      "One-click deployment from vibe-coded output to stable runtime. No Docker expertise required.",
    keywords: ["AI deployment", "zero-config deploy", "agent hosting"],
  },
  {
    icon: Eye,
    title: "Observability",
    description:
      "Cross-agent traces, structured logs, performance telemetry, and drift detection. See exactly what your agents are doing.",
    keywords: ["AI observability", "agent monitoring", "LLM tracing"],
  },
  {
    icon: TrendingUp,
    title: "Auto-Scale",
    description:
      "Handle multi-agent fan-outs and LLM request bursts automatically. Scale to zero when idle, scale to thousands when needed.",
    keywords: ["auto-scaling", "elastic infrastructure", "serverless AI"],
  },
]
