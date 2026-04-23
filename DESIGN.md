# THE PROPKING REALTY — Design System

## Purpose & Positioning
Modern real estate advisory platform for Ahmedabad properties. Positions brand as trusted consulting firm (not cheap broker, not heavy luxury). Clean, spacious, data-driven UI with emphasis on process clarity and social proof.

## Tone & Aesthetic
Professional, approachable, premium-by-clarity. Trust-building through white/blue structure and gold premium accents. Micro-interactions are subtle and purposeful (hover lift, transitions, fade-ins). Editorial grid-based layout with card hierarchy.

## Color Palette

| Semantic | OKLCH | Hex Approx | Usage |
|----------|-------|-----------|-------|
| Primary (Deep Blue) | 0.32 0.07 265 | #1F3A5F | Headlines, structure, borders on hover |
| Accent (Golden Yellow) | 0.72 0.19 66 | #E0A52B | Tags, call-to-action accents, premium highlights |
| Background | 1.0 0 0 | #FFFFFF | Main canvas, card faces |
| Secondary Bg | 0.94 0 0 | #F4F6F8 | Alternate sections, subtle depth |
| Foreground (Dark Charcoal) | 0.12 0 0 | #1A1A1A | Body text, primary foreground |
| Border | 0.88 0 0 | #E8EAEF | Subtle dividers, card edges |
| Muted | 0.92 0 0 | #F0F2F7 | Secondary backgrounds, disabled states |

## Typography

| Tier | Font | Size | Weight | Usage |
|------|------|------|--------|-------|
| Display | Fraunces | 48px | 700 | Hero headline, section titles |
| Heading 2 | Fraunces | 36px | 600 | Section headings |
| Heading 3 | Fraunces | 28px | 600 | Subsection titles |
| Body | General Sans | 16px | 400 | Body copy, descriptions |
| Body Small | General Sans | 14px | 400 | Metadata, tags, secondary text |
| Mono | Geist Mono | 12px | 400 | Data, prices, technical info |

## Structural Zones

| Zone | Background | Elevation | Details |
|------|------------|-----------|---------|
| Header | White (`background`) | Subtle border-b | Sticky on scroll, minimal chrome |
| Hero | White (`background`) | None | Geometric pattern overlay, centered content |
| Property Cards Grid | White (`background`) | `shadow-card` (0 4px 12px) | 8px border-radius, hover lift 4px + `shadow-elevated` |
| Section Background | Light Grey (`secondary`) | None | Alternating odd sections for rhythm |
| Lead Form | White (`card`) | `shadow-elevated` | Tabbed interface, minimal visual load |
| Footer | Dark Charcoal (`foreground`) | None | Dark bg, light text, simple list layout |
| Mobile Sticky Bar | White (`card`) | `shadow-elevated` | Fixed bottom, 3 action buttons (Call, WhatsApp, Properties) |

## Spacing & Rhythm
- Container max-width: 1200px
- Section padding: 64px (mobile 32px)
- Card padding: 24px
- Border-radius primary: 8px; subtle variations (4px for small elements)
- Line-height body: 1.6

## Component Patterns

**Property Cards:** White card, image, price (₹ format), location chip, 2–3 tags (Premium/Ready/Investment in accent gold), hover state adds blue border + lift + shadow elevation.

**Call-to-Action Buttons:** Primary blue with gold accent on hover/active. 0.2s smooth transition. No shadow by default, subtle lift on hover.

**Tabs (Lead Form):** Underline indicator, primary blue active state, muted text inactive. No background fill for clean aesthetic.

**Testimonials Carousel:** White cards with quote, avatar + name, no stars (social proof via testimonial quality). Soft fade between items.

**Process Steps:** Vertical timeline on mobile, horizontal on desktop. Step circle + line connector, primary blue for completed/active, muted for upcoming.

**Investment Opportunities Grid:** 3-column (mobile 1-col) with ROI percentages, area highlights, and actionable tags (e.g., "High Growth Zone").

## Motion & Interactions
- **Hover Lift:** All cards translate -1 (4px) with shadow elevation on hover
- **Button Transition:** 0.2s ease-out for color/background changes (blue → gold)
- **Section Fade-in:** 0.4s fade-in on scroll entry via `animate-fade-in`
- **Smooth Scroll:** All scroll interactions use `transition-smooth` (0.3s cubic-bezier)
- **Form Tab Switch:** 150ms fade between tab panels

## Constraints & Rules
- No gradients on UI elements (only solid OKLCH colors)
- Gold accent used sparingly: tags, button accents, hover states, testimonial highlights
- Primary blue conveys trust, structure, and hierarchy
- White cards float on white background via soft shadow (not borders)
- All colors drawn from OKLCH palette; no arbitrary hex/rgb values in component code
- Dark mode preserves brand psychology: primary blue lightened, accent yellow preserved, backgrounds darkened

## Signature Detail
Gold accent tags on property cards signal premium/investment-grade listings — a visual signal that THIS platform curates quality deals, reinforcing the "advisor, not broker" positioning. Combined with process clarity and testimonial-forward trust engine, this creates a distinctive real estate platform feel.

## Sections Covered
1. Hero (headline, subtext, stats row)
2. Property Grid (cards, filters, grid layout)
3. Process Steps (5-step timeline)
4. Testimonials (carousel, social proof)
5. Serving Across Ahmedabad (authority + locations)
6. Tabbed Lead Form (3 use cases)
7. Investment Opportunities (ROI focus)
8. Recommended For You (carousel)
9. Project Comparison (table)
10. Social Feed Preview (reels/posts grid)
11. FAQ (accordion)
12. Mobile Sticky Bottom Bar (Call, WhatsApp, Properties)
