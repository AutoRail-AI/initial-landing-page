# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for **AutoRail** - Infrastructure on Autopilot for AI Agents.

AutoRail bridges the gap between rapid frontend generation (tools like Lovable, Bolt) and production-grade infrastructure. It automatically provisions backend primitives—stateful memory layers, workflow orchestration, guardrails, rate limiters, and circuit-breaker patterns—so AI agents and applications run on a stable, scalable track from day one.

**Value Proposition**: Frontend generation gives you momentum. AutoRail gives you the infrastructure to sustain it.

**Status**: Private Beta (single CTA: "Bookmark for Launch – Coming Soon")

---

## Documentation Reference (ai-docs/)

**IMPORTANT**: Before implementing any feature, consult these documents to avoid context loss:

### Architecture Documents (`ai-docs/architecture/`)
| Document | Purpose |
|----------|---------|
| `component-architecture.md` | **PRIMARY** - Folder structure, component list, server/client breakdown, props, scalability |
| `information-architecture.md` | Complete section-by-section page layout, content specs, rationale |
| `component-specifications.md` | Component structure, props, styling specs for each section |
| `user-flow.md` | User journey, scroll behavior, decision points, analytics |
| `seo-aeo-geo-strategy.md` | SEO keywords, meta tags, structured data, AEO/GEO optimization |

### Design Documents (`ai-docs/design-system/`)
| Document | Purpose |
|----------|---------|
| `visual-design-system.md` | **PRIMARY** - Complete visual spec: grid, shapes, typography, colors per section, graphics, motion, tokens |
| `design-system-reference.md` | Quick reference card for colors, typography, spacing basics |

### Content Documents (`ai-docs/content/`)
| Document | Purpose |
|----------|---------|
| `landing-page-content.md` | **PRIMARY** - Complete content package with SEO/AEO/GEO, alt-text, JSON-LD schemas |

### Brand Documents (`ai-docs/brand/`)
| Document | Purpose |
|----------|---------|
| `brand.md` | Complete brand guidelines, logo specs, colors, typography |

---

## Landing Page Sections (10 Total)

1. **NavBar** (sticky) - Logo, links, small CTA
2. **HeroSection** - Beta badge, H1, tagline, primary CTA, animated visual
3. **ProblemSection** - "The Gap Between Prototype and Production"
4. **SolutionSection** - "AutoRail Eliminates This Gap"
5. **CapabilitiesSection** - 6 capability cards (3x2 grid)
6. **HowItWorksSection** - 4-step process flow
7. **UseCasesSection** - 3 persona cards
8. **BetaCTASection** - Main conversion section
9. **FAQSection** - 6 accordion items
10. **Footer** - Minimal, 3-column links

---

## Brand Quick Reference

### Colors
```
Primary:    #6E18B3 (Deep Rail Purple)
Secondary:  #00E5FF (Electric Cyan)
Accent:     #8134CE (Quantum Violet)
Background: #0A0A0F (Void Black)
Surface:    #1E1E28 (Slate Grey)
Text:       #FAFAFA (Cloud White)
```

### Gradients
```css
/* Rail Fade (Primary) - CTAs, hero, badges */
background: linear-gradient(135deg, #8134CE 0%, #6E18B3 100%);

/* Automation Flow (Secondary) - progress, loading */
background: linear-gradient(90deg, #00E5FF 0%, #8134CE 50%, #6E18B3 100%);

/* Infrastructure Depth - backgrounds */
background: linear-gradient(180deg, #0A0A0F 0%, #1E1E28 100%);
```

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | Space Grotesk | 700 | 56px |
| H2 | Space Grotesk | 600 | 40px |
| H3 | Space Grotesk | 500 | 28px |
| Body | Inter | 400 | 16px |
| Code | JetBrains Mono | 400 | 14px |

---

## Animation & Graphics Libraries

### Animation
- **Framer Motion** (`framer-motion`) - Primary animation library for React
- **GSAP** (`gsap`) - Complex timelines, scroll-triggered animations
- **React Spring** (`@react-spring/web`) - Physics-based animations
- **Lottie React** (`lottie-react`) - After Effects animations

### UI Components
- **Lucide React** (`lucide-react`) - Icon set
- **Embla Carousel** (`embla-carousel-react`) - Carousel/slider
- **React Intersection Observer** (`react-intersection-observer`) - Scroll triggers

### Fonts (Self-hosted)
```tsx
import "@fontsource/space-grotesk/400.css"
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/jetbrains-mono/400.css"
```

---

## Commands

```bash
# Development
pnpm dev                 # Start dev server with Turbopack
pnpm build               # Production build
pnpm start               # Start production server

# Code Quality
pnpm lint                # Run ESLint
pnpm lint:fix            # Fix ESLint issues
pnpm prettier            # Check formatting
pnpm prettier:fix        # Fix formatting
pnpm format              # Format ts, tsx, md files

# Testing
pnpm test                # Run Vitest tests
pnpm test:watch          # Run tests in watch mode
pnpm test -- Button      # Run tests matching "Button"
pnpm e2e:headless        # Run Playwright E2E tests
pnpm e2e:ui              # Run E2E tests with UI

# Storybook
pnpm storybook           # Start Storybook on port 6006
pnpm build-storybook     # Build static Storybook

# Analysis
pnpm analyze             # Build with bundle analyzer
pnpm coupling-graph      # Generate component dependency graph
```

---

## Architecture

### Directory Structure
```
app/                    # Next.js App Router pages and API routes
components/
├── layout/             # NavBar, Footer
├── sections/           # HeroSection, ProblemSection, etc.
├── ui/                 # Button, Badge, Card, Accordion, Container
└── graphics/           # HeroVisual, FlowDiagram, GradientMesh
styles/                 # Global CSS (Tailwind entry point)
e2e/                    # Playwright E2E tests
ai-docs/                # Documentation (architecture, design, content, brand)
public/logos/           # Logo assets
```

### Component Pattern
Components use Class Variance Authority (CVA) for variant management with `tailwind-merge`:
```tsx
const button = cva([...baseClasses], {
  variants: { variant: {...}, size: {...} },
  defaultVariants: {...}
})
```

### Testing Setup
- **Unit tests**: Vitest + React Testing Library (`*.test.tsx`)
- **E2E tests**: Playwright in `e2e/` directory

---

## Key Configuration

- **TypeScript**: Strict mode with `noUncheckedIndexedAccess`
- **ESLint**: Flat config (ESLint 9) with import sorting
- **Package Manager**: pnpm 10 via Corepack (Node >= 20)
- **Import Aliases**: Absolute imports from project root
- **Styling**: Tailwind CSS v4 + CVA + tailwind-merge

---

## Implementation Checklist

When building sections, ensure:
- [ ] Read `information-architecture.md` for section specs
- [ ] Read `component-specifications.md` for component details
- [ ] Read `landing-page-copy.md` for approved content
- [ ] Follow `design-system-reference.md` for styling
- [ ] Implement SEO per `seo-aeo-geo-strategy.md`
- [ ] Use Framer Motion for scroll animations
- [ ] Test accessibility (WCAG AA)
- [ ] Mobile-first responsive design
