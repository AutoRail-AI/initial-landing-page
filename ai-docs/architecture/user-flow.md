# AutoRail Landing Page — User Flow & Journey

**Version:** 1.0
**Status:** Active
**Last Updated:** December 2024

---

## User Journey Overview

### Target User Profiles

| Profile | Description | Primary Goal | Time on Page |
|---------|-------------|--------------|--------------|
| **Indie Hacker** | Solo developer building AI products | Validate solution fit | 60-90s |
| **Startup Engineer** | Mid-level dev at early-stage startup | Evaluate for team | 90-120s |
| **AI Engineer** | Experienced ML/AI practitioner | Technical assessment | 120-180s |
| **Technical Founder** | Non-technical founder with AI product | Understand value prop | 45-60s |

---

## Primary User Flow

### Visual Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐  │
│  │  LAND   │───▶│RECOGNIZE│───▶│ BELIEVE │───▶│UNDERSTAND│───▶│ IDENTIFY│  │
│  │ (0-3s)  │    │ (3-10s) │    │(10-30s) │    │ (30-60s) │    │(60-90s) │  │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘  │
│       │              │              │              │              │         │
│       ▼              ▼              ▼              ▼              ▼         │
│    Hero          Problem        Solution       How It         Use          │
│   Section        Section        + Caps         Works         Cases         │
│                                                                             │
│                                                                             │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                                 │
│  │ DECIDE  │───▶│VALIDATE │───▶│ CONVERT │                                 │
│  │(90-120s)│    │(if need)│    │         │                                 │
│  └─────────┘    └─────────┘    └─────────┘                                 │
│       │              │              │                                       │
│       ▼              ▼              ▼                                       │
│    Beta CTA        FAQ          Bookmark/                                   │
│    Section        Section        Email                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Stage-by-Stage Breakdown

### Stage 1: LAND (0-3 seconds)

**Location:** Hero Section

**User State:**
- Just arrived from search/social/referral
- Scanning for relevance
- Deciding whether to stay or bounce

**User Questions:**
- "What is this?"
- "Is this for me?"
- "Should I keep reading?"

**Content Triggers:**
- Beta badge establishes credibility
- H1 states value proposition
- Subhead provides context
- Visual creates intrigue

**Success Metrics:**
- Bounce rate < 40%
- Scroll initiation > 70%

**Design Requirements:**
- Above-fold content loads in < 1s
- Clear visual hierarchy
- No cognitive overload
- Single focal point (headline)

---

### Stage 2: RECOGNIZE (3-10 seconds)

**Location:** Problem Section

**User State:**
- Engaged, scrolling
- Looking for validation
- Pattern matching to own experience

**User Questions:**
- "Do they understand my problem?"
- "Have they experienced this pain?"
- "Is this a real problem or manufactured?"

**Content Triggers:**
- Specific pain points (not generic)
- Technical accuracy signals expertise
- "Vibe-coding" terminology resonates

**Success Metrics:**
- Scroll depth > 30%
- Time on page > 10s

**Design Requirements:**
- Visual diagram grabs attention
- Pain points scannable (bullets)
- No jargon that alienates

---

### Stage 3: BELIEVE (10-30 seconds)

**Location:** Solution + Capabilities Sections

**User State:**
- Problem validated, seeking solution
- Evaluating credibility
- Looking for "how"

**User Questions:**
- "Can this actually solve it?"
- "What specifically does it do?"
- "Is this vaporware or real?"

**Content Triggers:**
- Clear mechanism explanation
- Specific capabilities (not vague)
- Technical depth appropriate for audience

**Success Metrics:**
- Scroll depth > 50%
- Time on page > 30s
- Low exit rate on this section

**Design Requirements:**
- Visual flow diagram simplifies concept
- Capability cards provide depth without overwhelm
- Progressive disclosure pattern

---

### Stage 4: UNDERSTAND (30-60 seconds)

**Location:** How It Works Section

**User State:**
- Conceptually sold, needs clarity
- Building mental model
- Evaluating complexity/effort

**User Questions:**
- "How hard is this to implement?"
- "What's the actual process?"
- "Do I need to change my workflow?"

**Content Triggers:**
- Simple 4-step process
- "No YAML, No Terraform" reassures
- Low friction promise

**Success Metrics:**
- Scroll depth > 65%
- Time on page > 45s

**Design Requirements:**
- Steps clearly numbered
- Linear flow easy to follow
- Closing statement reinforces simplicity

---

### Stage 5: IDENTIFY (60-90 seconds)

**Location:** Use Cases Section

**User State:**
- Understanding complete
- Self-identifying
- Seeking permission to proceed

**User Questions:**
- "Is this built for people like me?"
- "Am I the right user?"
- "Will this work for my use case?"

**Content Triggers:**
- Persona match ("Indie Hackers", "Startup Teams")
- Benefit language resonates
- Inclusive closing statement

**Success Metrics:**
- Scroll depth > 75%
- Time on page > 60s

**Design Requirements:**
- Clear persona differentiation
- Benefits not features
- "You belong here" feeling

---

### Stage 6: DECIDE (90-120 seconds)

**Location:** Beta CTA Section

**User State:**
- Ready to act
- Evaluating commitment level
- Looking for clear next step

**User Questions:**
- "What do I do now?"
- "What am I committing to?"
- "Can I trust them with my info?"

**Content Triggers:**
- Clear CTA ("Bookmark for Launch")
- Low commitment signal
- No spam promise
- Beta exclusivity appeal

**Success Metrics:**
- CTA click rate > 5%
- Scroll depth > 85%

**Design Requirements:**
- CTA visually prominent
- Trust signals present
- Friction minimized

---

### Stage 7: VALIDATE (Optional)

**Location:** FAQ Section

**User State:**
- Has remaining questions
- Needs final reassurance
- Due diligence phase

**User Questions:**
- "How is this different from X?"
- "Do I need to change my code?"
- "When is it launching?"
- "Is there a free tier?"

**Content Triggers:**
- Direct answers to objections
- Technical credibility
- Honest timeline communication

**Success Metrics:**
- FAQ engagement (click/expand)
- Return to CTA after FAQ

**Design Requirements:**
- Scannable questions
- Concise answers
- No hidden information

---

### Stage 8: CONVERT

**Location:** CTA (multiple placements)

**User State:**
- Decision made
- Ready to commit
- Seeking confirmation

**Actions:**
- Bookmark page
- Sign up for notification
- Share with team

**Success Metrics:**
- Conversion rate > 3%
- Email capture (if implemented)

---

## Decision Points & Trust Signals

### Critical Decision Points

| Point | Location | User Question | Answer Mechanism |
|-------|----------|---------------|------------------|
| **Stay or Go** | Hero (0-3s) | "Is this relevant?" | Clear value prop |
| **Real Problem?** | Problem | "Is this my pain?" | Specific examples |
| **Credible Solution?** | Solution | "Can this work?" | Technical detail |
| **Worth My Time?** | How It Works | "Is it simple?" | 4 simple steps |
| **For Me?** | Use Cases | "Right audience?" | Persona match |
| **Safe to Act?** | CTA | "Can I trust them?" | No spam promise |
| **Any Doubts?** | FAQ | "What about X?" | Direct answers |

### Trust Establishment Sequence

```
1. Beta Badge ──────────▶ Legitimacy (they're building something real)
                              │
2. Technical Accuracy ──▶ Expertise (they understand the problem)
                              │
3. Specific Features ───▶ Substance (not vaporware)
                              │
4. Simple Process ──────▶ Confidence (I can do this)
                              │
5. Persona Match ───────▶ Belonging (this is for me)
                              │
6. No Spam Promise ─────▶ Safety (low risk to act)
                              │
7. FAQ Transparency ────▶ Honesty (nothing to hide)
```

---

## Scroll Behavior Analysis

### Ideal Scroll Pattern

```
Time    Section              Behavior
────────────────────────────────────────────────
0-3s    Hero                 Land, scan, decide to engage
3-10s   Problem              Scroll, recognize pain, nod
10-20s  Solution             Understand mechanism
20-35s  Capabilities         Scan cards, internalize depth
35-50s  How It Works         Follow steps, feel simplicity
50-65s  Use Cases            Self-identify, feel belonging
65-90s  Beta CTA             Pause, evaluate, potentially act
90-120s FAQ (optional)       Address objections
120s+   Convert or Exit
```

### Scroll Depth Benchmarks

| Depth | Expected % Users | Target Action |
|-------|------------------|---------------|
| 25% | 80% | Problem section viewed |
| 50% | 65% | Solution understood |
| 75% | 45% | Use cases viewed |
| 90% | 30% | CTA section reached |
| 100% | 20% | FAQ engaged |

---

## CTA Placement Strategy

### Primary CTA Locations

| Location | Size | Purpose | Expected Conversion |
|----------|------|---------|---------------------|
| **Nav (sticky)** | Small | Catch any-time converters | 10% of total |
| **Hero** | Large | Immediate high-intent | 25% of total |
| **Section 8 (dedicated)** | XL | Main conversion | 55% of total |
| **Footer** | Link | Final fallback | 10% of total |

### CTA Visibility Timeline

```
Hero CTA ─────────────────────────────────────────────────────▶
│
│     Nav CTA (sticky) ───────────────────────────────────────▶
│     │
│     │                              Beta CTA Section
│     │                              ┌────────────┐
│     │                              │  ████████  │
│     │                              │  ████████  │
│     │                              └────────────┘
│     │
▼     ▼
Immediate visibility              Maximum impact zone
```

---

## Exit Intent Strategy

### Common Exit Points

| Exit Point | % Users | Mitigation |
|------------|---------|------------|
| Hero (bounce) | 35% | Improve load time, clarity |
| Problem section | 15% | Ensure pain resonance |
| Capabilities | 20% | Reduce overwhelm |
| Before CTA | 15% | Sticky nav CTA |
| After FAQ | 15% | Expected exits (done) |

### Recovery Mechanisms

1. **Sticky Nav CTA** — Always visible option
2. **Exit-intent popup** (optional) — "Bookmark before you go"
3. **Social proof** (future) — "Join X others waiting"

---

## Mobile User Flow Adaptations

### Key Differences

| Desktop | Mobile |
|---------|--------|
| 3-column capability grid | 1-column stack |
| Horizontal process steps | Vertical stack |
| Side-by-side persona cards | Stacked cards |
| Larger CTAs | Full-width CTAs |

### Mobile Scroll Expectations

- Faster scroll through sections
- Higher scroll depth (easier on mobile)
- Lower conversion (smaller commitment)
- More FAQ engagement (due diligence)

---

## Analytics Implementation

### Key Events to Track

```javascript
// Page Load
trackEvent('page_view', { page: 'landing' })

// Scroll Milestones
trackEvent('scroll_depth', { depth: 25 })
trackEvent('scroll_depth', { depth: 50 })
trackEvent('scroll_depth', { depth: 75 })
trackEvent('scroll_depth', { depth: 100 })

// Section Views
trackEvent('section_view', { section: 'hero' })
trackEvent('section_view', { section: 'problem' })
trackEvent('section_view', { section: 'solution' })
// ... etc

// CTA Interactions
trackEvent('cta_click', { location: 'hero' })
trackEvent('cta_click', { location: 'nav' })
trackEvent('cta_click', { location: 'beta_section' })

// FAQ Engagement
trackEvent('faq_expand', { question: 'what_is_autorail' })

// Conversion
trackEvent('conversion', { type: 'bookmark' })
trackEvent('conversion', { type: 'email_signup' })
```

### Funnel Definition

```
Landing Page Funnel:
────────────────────────────────────
Page View           100%
  │
  ▼
Scroll >25%         80%  (Problem viewed)
  │
  ▼
Scroll >50%         65%  (Solution understood)
  │
  ▼
Scroll >75%         45%  (Use cases viewed)
  │
  ▼
CTA Section View    30%  (Ready to decide)
  │
  ▼
CTA Click           5%   (Intent captured)
  │
  ▼
Conversion          3%   (Goal achieved)
```

---

## A/B Testing Opportunities

### Priority Tests (Phase 4+)

| Test | Hypothesis | Success Metric |
|------|------------|----------------|
| H1 variations | Different value props resonate differently | Time on page |
| CTA copy | "Bookmark" vs "Notify Me" vs "Get Early Access" | Click rate |
| Capability count | 6 cards vs 4 cards vs 3 cards | Scroll depth |
| FAQ placement | Above CTA vs below CTA | Conversion rate |
| Hero visual | Animation vs static | Bounce rate |

---

## Document Status

This user flow document should be referenced during implementation to ensure the page guides users through the intended journey. Analytics should be implemented to validate assumptions and identify optimization opportunities.
