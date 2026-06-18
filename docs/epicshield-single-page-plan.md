# Epicshield Surfaces — Single-Page Implementation Plan

## Objective

Convert the current multi-route Next.js site into a **fast, single-page experience** that reflects the official company brochure. All content lives on one scrollable page, navigation uses anchor links, and the site is optimized for performance.

---

## Section Map (top to bottom)

| # | Section ID | Brochure Source | Content |
|---|-----------|-----------------|---------|
| 1 | `#hero` | Page 1, 3 | Scroll-pinned 3D construction scene + headline + CTA |
| 2 | `#profile` | Page 3 | Company founding story — Joshua Cobbinah, HQ Kumasi, mission |
| 3 | `#mission-vision` | Page 4 | Mission statement + Vision statement (side-by-side) |
| 4 | `#values` | Page 5–6 | Core values / SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) |
| 5 | `#services` | Page 7, 9 | 4 service pillars with icons + descriptions |
| 6 | `#case-study` | Page 10 | Sokoban 20-bed hospital project — details + outcome |
| 7 | `#stats` | Page 6, 16 | Animated counters: projects, countries, beds etc. |
| 8 | `#csr` | Page 12 | CSR initiatives: healthcare access, education, boreholes, sustainability |
| 9 | `#team` | Page 18–20 | Team member cards with roles + experience |
| 10 | `#contact` | Page 21 | Contact form + details + footer with logo |

---

## Navigation Structure

```
[Epicshield Logo]  About  Services  Projects  CSR  Team  Contact  [Consultation CTA]
                    ↓        ↓         ↓      ↓     ↓       ↓           ↓
                   #profile #services #case-study #csr #team #contact  #contact
```

All internal links use `<a href="#section-id">` with `scroll-behavior: smooth`.

---

## Performance Optimizations

| Technique | Applied To |
|-----------|-----------|
| `next/image` with `priority` | Hero logo, first-fold images |
| `next/image` with `loading="lazy"` | All below-fold images |
| `dynamic(() => import(...), { ssr: false })` | 3D hero scene, heavy motion components |
| `preload` font links in `<head>` | Cormorant Garamond, Manrope |
| CSS `content-visibility: auto` | Sections below the fold |
| Reduced motion CSS guard | All animations respect `prefers-reduced-motion` |
| No redundant re-renders | Section components use `React.memo` where appropriate |
| Static export possible | All data is compile-time, no server runtime needed |

---

## Data Sources

All text content extracted from `Epicshield E-brochure.pdf`. Store in a new file `src/lib/brochure-content.ts` as typed constants (no runtime CMS calls).

---

## Component Tree

```
RootLayout
├── BlueprintCursor (REMOVED per user request)
├── GrainOverlay
├── SiteHeader (updated: anchor links + logo)
├── HomePage
│   ├── HeroScrollPinned
│   │   ├── Hero3DScene (dynamic, ssr: false) ← construction scene
│   │   └── BentoGrid overlay
│   ├── ProfileSection
│   ├── MissionVisionSection
│   ├── ValuesSection (SMART cards)
│   ├── ServicesSection
│   ├── CaseStudySection
│   ├── StatsSection (Odometer counters)
│   ├── CSRSection
│   ├── TeamSection (MagneticTiltCard per member)
│   └── ContactSection
└── SiteFooter (updated: logo + full brochure contact info)
```

---

## Route Handling

- `/` → Single page with all sections
- `/about`, `/services`, `/projects`, etc. → Keep existing routes as fallback / deep-link targets (or 301 redirect to `/#section`)
- Template transitions remain for any multi-page navigation

---

## Brand Assets

- **Logo**: `/epic-logo.png` (300×100, RGBA with transparency)
- **Tagline**: "Creating Space To Save Lives"
- **Colors**: Keep existing teal/amber/sand palette from `globals.css`
- **Font**: Keep Manrope (sans) + Cormorant Garamond (serif)

---

## Build Verification

After implementation:
1. `npm run lint` — 0 errors
2. `npm run build` — exit code 0
3. Lighthouse audit > 85 on performance
4. Test all anchor links navigate correctly
5. Test with `prefers-reduced-motion: reduce` to verify fallbacks
