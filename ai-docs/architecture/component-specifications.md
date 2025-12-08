# AutoRail Landing Page — Component Specifications

**Version:** 1.0
**Status:** Ready for Implementation
**Last Updated:** December 2024

---

## Component Architecture Overview

```
app/
├── page.tsx                    # Landing page (assembles sections)
├── layout.tsx                  # Root layout with fonts, metadata

components/
├── layout/
│   ├── NavBar/
│   │   ├── NavBar.tsx
│   │   ├── NavBar.test.tsx
│   │   └── NavBar.stories.tsx
│   └── Footer/
│       ├── Footer.tsx
│       └── FooterColumn.tsx
│
├── sections/
│   ├── HeroSection/
│   ├── ProblemSection/
│   ├── SolutionSection/
│   ├── CapabilitiesSection/
│   ├── HowItWorksSection/
│   ├── UseCasesSection/
│   ├── BetaCTASection/
│   └── FAQSection/
│
├── ui/
│   ├── Button/
│   ├── Badge/
│   ├── Card/
│   ├── Accordion/
│   ├── Icon/
│   └── Container/
│
└── graphics/
    ├── HeroVisual/
    ├── FlowDiagram/
    ├── ProcessSteps/
    └── GradientMesh/
```

---

## 1. Layout Components

### 1.1 NavBar

#### File: `components/layout/NavBar/NavBar.tsx`

```tsx
interface NavBarProps {
  className?: string
}

// Features:
// - Sticky positioning
// - Logo (horizontal lockup)
// - Navigation links with "Coming Soon" badges
// - CTA button (small)
// - Mobile responsive (hamburger menu)
// - Backdrop blur on scroll
```

#### Specifications
| Property | Value |
|----------|-------|
| Height | 64px (desktop), 56px (mobile) |
| Background | Void Black with 80% opacity + backdrop blur |
| Position | Sticky, top: 0, z-index: 50 |
| Container | Max-width 1280px, centered |
| Padding | 0 24px (desktop), 0 16px (mobile) |

#### States
- **Default:** Transparent background
- **Scrolled:** Void Black 80% + blur
- **Mobile:** Hamburger menu expanded

#### Animation
```tsx
// Framer Motion for scroll detection
const navVariants = {
  top: { backgroundColor: "rgba(10, 10, 15, 0)" },
  scrolled: { backgroundColor: "rgba(10, 10, 15, 0.8)" }
}
```

---

### 1.2 Footer

#### File: `components/layout/Footer/Footer.tsx`

```tsx
interface FooterProps {
  className?: string
}

// Features:
// - Logo (symbol only)
// - Tagline
// - Three-column link grid
// - Social icons
// - Legal links
// - "Coming Soon" tooltips on disabled links
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Void Black |
| Padding | 48px 24px (top), 32px 24px (bottom) |
| Border | 1px solid rgba(250, 250, 250, 0.1) top |
| Container | Max-width 1280px, centered |

---

## 2. Section Components

### 2.1 HeroSection

#### File: `components/sections/HeroSection/HeroSection.tsx`

```tsx
interface HeroSectionProps {
  className?: string
}

// Subcomponents:
// - Badge (beta status)
// - Headline (H1)
// - Subheadline
// - CTAGroup (primary + secondary buttons)
// - HeroVisual (animated graphic)
```

#### Specifications
| Property | Value |
|----------|-------|
| Min Height | 100vh - 64px (navbar) |
| Background | Gradient mesh (see graphics) |
| Padding | 96px 24px (top), 80px 24px (bottom) |
| Content Max Width | 800px (text), 1000px (visual) |
| Text Alignment | Center |

#### Animation Sequence
1. Badge fades in (0.3s delay)
2. H1 fades in + slides up (0.4s delay)
3. Subhead fades in (0.6s delay)
4. CTAs fade in (0.8s delay)
5. Visual continuous animation

```tsx
const heroAnimations = {
  badge: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 } },
  headline: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4 } },
  subhead: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 } },
  ctas: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.8 } }
}
```

---

### 2.2 ProblemSection

#### File: `components/sections/ProblemSection/ProblemSection.tsx`

```tsx
interface ProblemSectionProps {
  className?: string
}

// Subcomponents:
// - SectionHeader (H2 + description)
// - FlowDiagram (3-stage visual)
// - PainPointList (bullet items with icons)
// - ClosingStatement
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Slate Grey |
| Padding | 80px 24px |
| Container | Max-width 1024px |

#### Flow Diagram States
| Stage | Background | Border | Label |
|-------|------------|--------|-------|
| 1 (Works) | Slate Grey | Electric Cyan | "Vibe-code Frontend" |
| 2 (Gap) | Error Red 20% | Error Red | "THE GAP" |
| 3 (Needed) | Slate Grey | Deep Rail Purple | "Production Scale" |

#### Animation
- Diagram stages reveal on scroll (stagger 0.2s)
- Pain points reveal on scroll (stagger 0.1s)

---

### 2.3 SolutionSection

#### File: `components/sections/SolutionSection/SolutionSection.tsx`

```tsx
interface SolutionSectionProps {
  className?: string
}

// Subcomponents:
// - SectionHeader (H2)
// - Description
// - FlowDiagram (Code → AutoRail → Infrastructure)
// - PrimitivesList
// - ClosingStatement
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Void Black |
| Padding | 80px 24px |
| Container | Max-width 1024px |

#### Flow Diagram
```
[Your Code] ──→ [AutoRail] ──→ [Production Infrastructure]
     │              │                    │
   Input        Process              Output
```

Animation: Particles flow from left to right along the path

---

### 2.4 CapabilitiesSection

#### File: `components/sections/CapabilitiesSection/CapabilitiesSection.tsx`

```tsx
interface CapabilitiesSectionProps {
  className?: string
}

interface Capability {
  icon: LucideIcon
  title: string
  description: string
}

// Subcomponents:
// - SectionHeader (H2)
// - CapabilityGrid (3x2 grid)
// - CapabilityCard (individual cards)
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Slate Grey |
| Padding | 80px 24px |
| Grid | 3 columns (desktop), 2 columns (tablet), 1 column (mobile) |
| Grid Gap | 24px |

#### CapabilityCard Specifications
| Property | Value |
|----------|-------|
| Background | Void Black |
| Border | 1px solid rgba(250, 250, 250, 0.1) |
| Border Radius | 12px |
| Padding | 24px |
| Icon Size | 32px |
| Icon Color | Deep Rail Purple |

#### Card Hover State
```css
&:hover {
  border-color: rgba(129, 52, 206, 0.5);
  box-shadow: 0 0 20px rgba(129, 52, 206, 0.1);
  transform: translateY(-2px);
}
```

#### Animation
- Cards stagger in on scroll (0.1s delay each)
- Hover: subtle lift + glow

---

### 2.5 HowItWorksSection

#### File: `components/sections/HowItWorksSection/HowItWorksSection.tsx`

```tsx
interface HowItWorksSectionProps {
  className?: string
}

interface Step {
  number: number
  title: string
  description: string
}

// Subcomponents:
// - SectionHeader (H2)
// - ProcessSteps (horizontal flow)
// - StepItem (individual step)
// - ClosingStatement
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Void Black |
| Padding | 80px 24px |
| Container | Max-width 1024px |

#### ProcessSteps Layout
```
Desktop: Horizontal flow with connector lines
Tablet/Mobile: Vertical stack
```

#### StepItem Specifications
| Property | Value |
|----------|-------|
| Number Circle | 48px, Rail Fade gradient |
| Connector Line | 2px, dashed, Cloud White 20% |
| Title | Space Grotesk Medium 18px |
| Description | Inter Regular 14px |

#### Animation
- Steps reveal sequentially on scroll (0.3s delay each)
- Number circles pulse once on reveal

---

### 2.6 UseCasesSection

#### File: `components/sections/UseCasesSection/UseCasesSection.tsx`

```tsx
interface UseCasesSectionProps {
  className?: string
}

interface Persona {
  icon: LucideIcon
  title: string
  benefit: string
}

// Subcomponents:
// - SectionHeader (H2)
// - PersonaGrid (3-column)
// - PersonaCard
// - ClosingStatement
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Slate Grey |
| Padding | 80px 24px |
| Grid | 3 columns (desktop), 1 column (mobile) |
| Grid Gap | 24px |

#### PersonaCard Specifications
| Property | Value |
|----------|-------|
| Background | Void Black |
| Border | 1px solid rgba(250, 250, 250, 0.1) |
| Border Radius | 12px |
| Padding | 32px 24px |
| Text Align | Center |
| Icon Size | 48px |
| Icon Background | Slate Grey, 64px circle |

---

### 2.7 BetaCTASection

#### File: `components/sections/BetaCTASection/BetaCTASection.tsx`

```tsx
interface BetaCTASectionProps {
  className?: string
}

// Subcomponents:
// - CTACard (centered card with gradient border)
// - SectionHeader (H2)
// - Description
// - CTAButton (large, primary)
// - TrustStatement
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Void Black with gradient mesh (20% opacity) |
| Padding | 64px 24px |
| Container | Max-width 640px |

#### CTACard Specifications
| Property | Value |
|----------|-------|
| Background | Slate Grey |
| Border | 2px solid with Rail Fade gradient |
| Border Radius | 16px |
| Padding | 48px 32px |
| Text Align | Center |

#### Animation
- Card fades in + scales up slightly on scroll
- Button has subtle pulse animation (continuous)

---

### 2.8 FAQSection

#### File: `components/sections/FAQSection/FAQSection.tsx`

```tsx
interface FAQSectionProps {
  className?: string
}

interface FAQItem {
  question: string
  answer: string
}

// Uses Radix UI Accordion
// Subcomponents:
// - SectionHeader (H2)
// - Accordion (Radix)
// - AccordionItem
```

#### Specifications
| Property | Value |
|----------|-------|
| Background | Void Black |
| Padding | 80px 24px |
| Container | Max-width 800px |
| Accordion Gap | 8px |

#### AccordionItem Specifications
| Property | Value |
|----------|-------|
| Background | Slate Grey |
| Border | 1px solid rgba(250, 250, 250, 0.1) |
| Border Radius | 8px |
| Padding | 16px 24px |
| Question Font | Space Grotesk Medium 18px |
| Answer Font | Inter Regular 16px |
| Chevron | Lucide ChevronDown, 20px |

#### States
- **Closed:** Chevron pointing down
- **Open:** Chevron rotates 180°, answer revealed

#### Animation
```tsx
// Radix Accordion with Framer Motion
const contentVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.2 } }
}
```

---

## 3. UI Components

### 3.1 Button

#### File: `components/ui/Button/Button.tsx`

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}
```

#### Variants (CVA)
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-rail-fade text-white hover:opacity-90",
        secondary: "bg-transparent border border-cloud-white/20 text-cloud-white hover:bg-cloud-white/10",
        ghost: "bg-transparent text-cloud-white hover:bg-cloud-white/10"
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)
```

---

### 3.2 Badge

#### File: `components/ui/Badge/Badge.tsx`

```tsx
interface BadgeProps {
  variant?: "default" | "beta" | "comingSoon"
  children: React.ReactNode
}
```

#### Variants
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| default | Slate Grey | Cloud White | None |
| beta | Quantum Violet | White | None |
| comingSoon | Transparent | Cloud White 60% | Cloud White 20% |

---

### 3.3 Card

#### File: `components/ui/Card/Card.tsx`

```tsx
interface CardProps {
  variant?: "default" | "hover" | "gradient-border"
  className?: string
  children: React.ReactNode
}
```

---

### 3.4 Container

#### File: `components/ui/Container/Container.tsx`

```tsx
interface ContainerProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  children: React.ReactNode
}
```

#### Sizes
| Size | Max Width |
|------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

---

## 4. Graphics Components

### 4.1 HeroVisual

#### File: `components/graphics/HeroVisual/HeroVisual.tsx`

```tsx
interface HeroVisualProps {
  className?: string
}

// Animated visualization of:
// - Rails/tracks
// - Data particles flowing
// - Infrastructure nodes
// Uses: Framer Motion for animations
```

#### Animation Specifications
- Continuous loop
- Particle flow: left to right
- Duration: 4s per cycle
- Easing: linear

---

### 4.2 GradientMesh

#### File: `components/graphics/GradientMesh/GradientMesh.tsx`

```tsx
interface GradientMeshProps {
  opacity?: number
  className?: string
}

// CSS gradient implementation
// Multiple radial gradients for mesh effect
```

#### CSS Implementation
```css
.gradient-mesh {
  background:
    radial-gradient(ellipse at 30% 20%, rgba(129, 52, 206, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(110, 24, 179, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 40%);
}
```

---

### 4.3 FlowDiagram

#### File: `components/graphics/FlowDiagram/FlowDiagram.tsx`

```tsx
interface FlowDiagramProps {
  steps: Array<{
    label: string
    sublabel?: string
    status?: "success" | "error" | "default"
  }>
  animated?: boolean
}
```

---

### 4.4 ProcessSteps

#### File: `components/graphics/ProcessSteps/ProcessSteps.tsx`

```tsx
interface ProcessStepsProps {
  steps: Array<{
    number: number
    title: string
    description: string
  }>
  orientation?: "horizontal" | "vertical"
}
```

---

## 5. Component Checklist

### Layout Components
- [ ] NavBar
- [ ] Footer
- [ ] FooterColumn

### Section Components
- [ ] HeroSection
- [ ] ProblemSection
- [ ] SolutionSection
- [ ] CapabilitiesSection
- [ ] HowItWorksSection
- [ ] UseCasesSection
- [ ] BetaCTASection
- [ ] FAQSection

### UI Components
- [ ] Button
- [ ] Badge
- [ ] Card
- [ ] Accordion (Radix wrapper)
- [ ] Container
- [ ] Icon wrapper

### Graphics Components
- [ ] HeroVisual
- [ ] GradientMesh
- [ ] FlowDiagram
- [ ] ProcessSteps

---

## Document Status

This specification is ready for Phase 3 implementation. Each component should be built following the patterns established in the existing codebase (CVA + Tailwind + Radix).
