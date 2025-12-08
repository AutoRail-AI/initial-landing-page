# AutoRail Design System Reference

**Version:** 1.0
**Status:** Active
**Last Updated:** December 2024

---

## Quick Reference Card

```
COLORS
──────────────────────────────────────
Primary:    #6E18B3 (Deep Rail Purple)
Secondary:  #00E5FF (Electric Cyan)
Accent:     #8134CE (Quantum Violet)
Background: #0A0A0F (Void Black)
Surface:    #1E1E28 (Slate Grey)
Text:       #FAFAFA (Cloud White)
White:      #FFFFFF (Pure White)

SYSTEM COLORS
──────────────────────────────────────
Success:    #00FF88 (Success Green)
Warning:    #FFB800 (Warning Amber)
Error:      #FF3366 (Error Red)

FONTS
──────────────────────────────────────
Headlines:  Space Grotesk (700/600/500)
Body:       Inter (400/500)
Code:       JetBrains Mono (400)

GRADIENTS
──────────────────────────────────────
Primary:    linear-gradient(135deg, #8134CE, #6E18B3)
Secondary:  linear-gradient(90deg, #00E5FF, #8134CE, #6E18B3)
Background: linear-gradient(180deg, #0A0A0F, #1E1E28)
```

---

## 1. Color System

### 1.1 Primary Colors

#### Deep Rail Purple
| Property | Value |
|----------|-------|
| **HEX** | `#6E18B3` |
| **RGB** | `110, 24, 179` |
| **HSL** | `275°, 76%, 40%` |
| **Usage** | Primary buttons, CTAs, headlines, links, key brand moments |
| **Accessibility** | WCAG AAA with white text (7.2:1) |

#### Electric Cyan
| Property | Value |
|----------|-------|
| **HEX** | `#00E5FF` |
| **RGB** | `0, 229, 255` |
| **HSL** | `186°, 100%, 50%` |
| **Usage** | Success states, automation indicators, hover states, accents |
| **Accessibility** | WCAG AAA with dark text (8.4:1) |

#### Quantum Violet
| Property | Value |
|----------|-------|
| **HEX** | `#8134CE` |
| **RGB** | `129, 52, 206` |
| **HSL** | `270°, 62%, 51%` |
| **Usage** | Premium features, AI indicators, gradient starts |
| **Accessibility** | WCAG AA with white text (5.1:1) |

### 1.2 Base Colors

#### Void Black
| Property | Value |
|----------|-------|
| **HEX** | `#0A0A0F` |
| **RGB** | `10, 10, 15` |
| **HSL** | `240°, 20%, 5%` |
| **Usage** | Dark backgrounds (NOT pure black) |

#### Slate Grey
| Property | Value |
|----------|-------|
| **HEX** | `#1E1E28` |
| **RGB** | `30, 30, 40` |
| **HSL** | `240°, 14%, 14%` |
| **Usage** | Cards, panels, code blocks, borders |

#### Cloud White
| Property | Value |
|----------|-------|
| **HEX** | `#FAFAFA` |
| **RGB** | `250, 250, 250` |
| **HSL** | `0°, 0%, 98%` |
| **Usage** | Light backgrounds, primary text on dark |

#### Pure White
| Property | Value |
|----------|-------|
| **HEX** | `#FFFFFF` |
| **RGB** | `255, 255, 255` |
| **HSL** | `0°, 0%, 100%` |
| **Usage** | High-contrast text on dark backgrounds |

### 1.3 System Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Success Green** | `#00FF88` | `0, 255, 136` | Success states, confirmations |
| **Warning Amber** | `#FFB800` | `255, 184, 0` | Warning states, cautions |
| **Error Red** | `#FF3366` | `255, 51, 102` | Error states, critical alerts |

### 1.4 Text Colors

| Context | Color | Opacity |
|---------|-------|---------|
| Primary text (dark bg) | Cloud White `#FAFAFA` | 100% |
| Secondary text (dark bg) | Cloud White `#FAFAFA` | 60% |
| Muted text (dark bg) | `#9CA3AF` | 100% |
| Primary text (light bg) | Void Black `#0A0A0F` | 100% |
| Secondary text (light bg) | `#4B5563` | 100% |

---

## 2. Gradients

### 2.1 Rail Fade (Primary)
```css
background: linear-gradient(135deg, #8134CE 0%, #6E18B3 100%);
```
**Usage:** Hero sections, CTAs, premium badges, marketing materials

### 2.2 Automation Flow (Secondary)
```css
background: linear-gradient(90deg, #00E5FF 0%, #8134CE 50%, #6E18B3 100%);
```
**Usage:** Progress bars, loading states, active workflows, data visualizations

### 2.3 Infrastructure Depth (Background)
```css
background: linear-gradient(180deg, #0A0A0F 0%, #1E1E28 100%);
```
**Usage:** Page backgrounds, modals, sidebars, card hover states

### 2.4 Gradient Mesh (Hero)
```css
/* Radial gradient with blur for hero backgrounds */
background: radial-gradient(ellipse at 30% 20%, rgba(129, 52, 206, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(110, 24, 179, 0.3) 0%, transparent 50%),
            #0A0A0F;
```
**Usage:** Hero section backgrounds, premium feature highlights

---

## 3. Typography

### 3.1 Font Families

#### Space Grotesk (Headlines & UI)
```css
font-family: 'Space Grotesk', sans-serif;
```
- **Weights:** 300, 400, 500, 600, 700
- **Usage:** H1-H4, navigation, buttons, labels, logo wordmark

#### Inter (Body Text)
```css
font-family: 'Inter', sans-serif;
```
- **Weights:** 400, 500, 600
- **Usage:** Body text, paragraphs, descriptions, form labels

#### JetBrains Mono (Code)
```css
font-family: 'JetBrains Mono', monospace;
```
- **Weights:** 400, 500, 700
- **Usage:** Code blocks, terminal output, technical specs

### 3.2 Type Scale

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| H1 | Space Grotesk | 700 | 56px / 3.5rem | 1.2 | -0.02em |
| H2 | Space Grotesk | 600 | 40px / 2.5rem | 1.2 | -0.01em |
| H3 | Space Grotesk | 500 | 28px / 1.75rem | 1.2 | -0.01em |
| H4 | Space Grotesk | 500 | 20px / 1.25rem | 1.3 | 0 |
| Body Large | Inter | 400 | 18px / 1.125rem | 1.6 | -0.011em |
| Body | Inter | 400 | 16px / 1rem | 1.6 | -0.011em |
| Body Small | Inter | 400 | 14px / 0.875rem | 1.5 | 0 |
| Caption | Inter | 400 | 12px / 0.75rem | 1.4 | 0 |
| Code | JetBrains Mono | 400 | 14px / 0.875rem | 1.5 | 0 |

### 3.3 Font Loading (Self-hosted)

```tsx
// Import in app/layout.tsx
import "@fontsource/space-grotesk/400.css"
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/jetbrains-mono/400.css"
```

---

## 4. Spacing System

### 4.1 Base Unit
Base unit: **4px**

### 4.2 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing, icon padding |
| `space-2` | 8px | Small gaps, inline spacing |
| `space-3` | 12px | Form field gaps |
| `space-4` | 16px | Default component padding |
| `space-5` | 20px | Card padding |
| `space-6` | 24px | Section internal spacing |
| `space-8` | 32px | Component separation |
| `space-10` | 40px | Section padding |
| `space-12` | 48px | Large section gaps |
| `space-16` | 64px | Section separation |
| `space-20` | 80px | Major section breaks |
| `space-24` | 96px | Hero/footer padding |

### 4.3 Section Spacing

| Section Type | Top Padding | Bottom Padding |
|--------------|-------------|----------------|
| Hero | 96px | 80px |
| Standard | 80px | 80px |
| CTA | 64px | 64px |
| Footer | 48px | 32px |

---

## 5. Component Styling

### 5.1 Buttons

#### Primary Button
```css
background: linear-gradient(135deg, #8134CE 0%, #6E18B3 100%);
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
font-size: 16px;
transition: all 0.2s ease;
```

#### Secondary Button (Ghost)
```css
background: transparent;
color: #FAFAFA;
border: 1px solid rgba(250, 250, 250, 0.2);
padding: 12px 24px;
border-radius: 8px;
```

#### Button Sizes
| Size | Padding | Font Size | Min Width |
|------|---------|-----------|-----------|
| Small | 8px 16px | 14px | 80px |
| Medium | 12px 24px | 16px | 120px |
| Large | 16px 32px | 18px | 160px |

### 5.2 Cards

```css
background: #1E1E28;
border: 1px solid rgba(250, 250, 250, 0.1);
border-radius: 12px;
padding: 24px;
transition: all 0.2s ease;

/* Hover state */
&:hover {
  border-color: rgba(129, 52, 206, 0.5);
  box-shadow: 0 0 20px rgba(129, 52, 206, 0.1);
}
```

### 5.3 Badges

```css
/* Beta Badge */
background: #8134CE;
color: #FFFFFF;
padding: 4px 12px;
border-radius: 9999px;
font-size: 12px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.05em;
```

### 5.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small elements |
| `rounded` | 8px | Buttons, inputs |
| `rounded-md` | 12px | Cards |
| `rounded-lg` | 16px | Large cards, modals |
| `rounded-xl` | 24px | Hero elements |
| `rounded-full` | 9999px | Badges, avatars |

---

## 6. Icons

### 6.1 Icon Library
**Primary:** Lucide React (`lucide-react`)

### 6.2 Icon Specifications

| Property | Value |
|----------|-------|
| Default Size | 24px |
| Stroke Width | 2px |
| Corner Radius | 2px |

### 6.3 Icon Sizes

| Size | Dimensions | Usage |
|------|------------|-------|
| xs | 16px | Inline text |
| sm | 20px | Buttons, labels |
| md | 24px | Default |
| lg | 32px | Feature cards |
| xl | 48px | Hero icons |

### 6.4 Icon Colors

| Context | Color |
|---------|-------|
| Default (dark bg) | Cloud White `#FAFAFA` |
| Primary | Deep Rail Purple `#6E18B3` |
| Accent | Electric Cyan `#00E5FF` |
| Success | Success Green `#00FF88` |
| Warning | Warning Amber `#FFB800` |
| Error | Error Red `#FF3366` |

---

## 7. Animation Guidelines

### 7.1 Timing Functions

| Name | Value | Usage |
|------|-------|-------|
| `ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| `ease-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Bouncy interactions |

### 7.2 Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 150ms | Hover states, micro-interactions |
| `duration-normal` | 200ms | Button clicks, toggles |
| `duration-slow` | 300ms | Page transitions, modals |
| `duration-slower` | 500ms | Complex animations |

### 7.3 Animation Library Usage

| Library | Use Case |
|---------|----------|
| **Framer Motion** | Component animations, page transitions, gestures |
| **GSAP** | Complex scroll animations, timelines, SVG morphing |
| **React Spring** | Physics-based interactions, drag effects |
| **Lottie** | Pre-designed After Effects animations |

### 7.4 Scroll Animation Patterns

```tsx
// Framer Motion scroll reveal
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

---

## 8. Accessibility

### 8.1 Color Contrast Matrix

| Background | Text Color | Ratio | WCAG |
|------------|-----------|-------|------|
| Deep Rail Purple | White | 7.2:1 | AAA |
| Void Black | Cloud White | 21:1 | AAA |
| Electric Cyan | Void Black | 8.4:1 | AAA |
| Quantum Violet | White | 5.1:1 | AA |
| Cloud White | Void Black | 20.4:1 | AAA |
| Slate Grey | Cloud White | 12.5:1 | AAA |

### 8.2 Focus States

```css
/* Default focus ring */
&:focus-visible {
  outline: 2px solid #00E5FF;
  outline-offset: 2px;
}
```

### 8.3 Minimum Touch Targets

- Minimum size: 44px × 44px
- Minimum spacing between targets: 8px

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Extra large |

### 9.1 Container Widths

| Breakpoint | Max Width |
|------------|-----------|
| Default | 100% |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

---

## 10. Patterns

### 10.1 Circuit Pattern
```css
/* For hero backgrounds */
background-image: url("data:image/svg+xml,..."); /* Circuit SVG */
background-size: 32px 32px;
opacity: 0.1;
```

### 10.2 Grid Pattern
```css
background-image:
  linear-gradient(rgba(250, 250, 250, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(250, 250, 250, 0.03) 1px, transparent 1px);
background-size: 32px 32px;
```

---

## Tailwind CSS Configuration

```js
// Extend in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'rail-purple': '#6E18B3',
        'electric-cyan': '#00E5FF',
        'quantum-violet': '#8134CE',
        'void-black': '#0A0A0F',
        'slate-grey': '#1E1E28',
        'cloud-white': '#FAFAFA',
        'success': '#00FF88',
        'warning': '#FFB800',
        'error': '#FF3366',
      },
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'rail-fade': 'linear-gradient(135deg, #8134CE 0%, #6E18B3 100%)',
        'automation-flow': 'linear-gradient(90deg, #00E5FF 0%, #8134CE 50%, #6E18B3 100%)',
        'infra-depth': 'linear-gradient(180deg, #0A0A0F 0%, #1E1E28 100%)',
      },
    },
  },
}
```

---

## Document Status

This design system reference should be used for all landing page development. For complete brand guidelines including logo usage and brand voice, refer to `ai-docs/brand/brand.md`.
