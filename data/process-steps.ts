export interface ProcessStep {
  number: number
  title: string
  description: string
  detail: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Connect",
    description: "Point AutoRail at your codebase—whether it's vibe-coded output from Lovable, a LangChain project, or custom agent logic.",
    detail: "We support Git repositories, local directories, and direct integrations with popular AI development tools.",
  },
  {
    number: 2,
    title: "Analyze",
    description: "AutoRail interprets your code structure, identifies agent patterns, and maps infrastructure requirements automatically.",
    detail: "Our analysis engine understands agent lifecycles, data flows, and dependency relationships.",
  },
  {
    number: 3,
    title: "Provision",
    description: "Backend primitives are generated and deployed—databases, queues, caches, and orchestration layers—all configured for your specific needs.",
    detail: "Infrastructure is provisioned in isolated, secure environments with production-grade defaults.",
  },
  {
    number: 4,
    title: "Monitor",
    description: "Continuous observability, performance optimization, and drift detection keep your agents running reliably.",
    detail: "Real-time dashboards, alerting, and automated remediation ensure production stability.",
  },
]
