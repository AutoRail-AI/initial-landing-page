export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "what-is-autorail",
    question: "What is AutoRail?",
    answer:
      "AutoRail is an infrastructure platform that automatically provisions backend primitives for AI agents and agentic systems. It handles stateful memory, workflow orchestration, production guardrails, and observability—so you can go from prototype to production without infrastructure wrestling.",
  },
  {
    id: "difference-from-baas",
    question: "How is AutoRail different from Supabase or Firebase?",
    answer:
      "Traditional Backend-as-a-Service platforms provide general-purpose primitives—databases, auth, storage—but aren't optimized for AI workloads. AutoRail is purpose-built for agentic systems. We handle context persistence across sessions, multi-agent orchestration, LLM-specific rate limiting, and the unique scaling patterns of AI applications. Think of us as infrastructure that understands what AI agents actually need.",
  },
  {
    id: "code-changes",
    question: "Do I need to change my existing code?",
    answer:
      "No. AutoRail interprets your existing codebase and provisions infrastructure around it. Whether you've vibe-coded with Lovable or Bolt, built with LangChain or CrewAI, or written custom agent logic, AutoRail adapts to your stack. No SDKs to install, no code changes required.",
  },
  {
    id: "frameworks",
    question: "What frameworks and tools does AutoRail support?",
    answer:
      "AutoRail works with popular AI and agent frameworks including LangChain, CrewAI, AutoGen, LlamaIndex, and custom implementations. We support deployment from any codebase that defines agent logic—whether it's Python, TypeScript, or multi-language projects. If you can run it locally, AutoRail can provision infrastructure for it.",
  },
  {
    id: "availability",
    question: "When will AutoRail be publicly available?",
    answer:
      "AutoRail is launching soon. We're currently in the final stages of preparation, working with early testers to ensure a smooth launch. Bookmark this page to be notified the moment we go live.",
  },
  {
    id: "pricing",
    question: "Is there a free tier?",
    answer:
      "Yes. AutoRail will offer a generous free tier for indie developers and small projects. We believe infrastructure shouldn't be a barrier to building AI products. Pricing details will be announced at launch, but expect free access for individual builders and reasonable scaling for growing teams.",
  },
  {
    id: "security",
    question: "How does AutoRail handle security?",
    answer:
      "Security is built into every layer of AutoRail. Infrastructure is provisioned in isolated environments with encryption at rest and in transit. We implement principle of least privilege, automated vulnerability scanning, and SOC 2 compliance practices. Your agent data stays yours—we don't train on customer workloads.",
  },
  {
    id: "self-host",
    question: "Can I self-host AutoRail?",
    answer:
      "Self-hosted and on-premise options are on our roadmap for enterprise customers. At launch, AutoRail will be available as a managed cloud service. If you have specific deployment requirements, reach out—we're actively shaping our enterprise offering based on customer needs.",
  },
]

// Generate JSON-LD schema for FAQ
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
