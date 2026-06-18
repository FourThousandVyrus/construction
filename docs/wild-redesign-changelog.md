# Wild Redesign — Blueprint Kinetics Changelog

## Overview

Applied the "Blueprint Kinetics" visual + motion language across all 10 routes, following the Round 1 pattern established on the homepage. Every page now shares a consistent industrial/architectural aesthetic with staggered motion, 3D tilt feedback, scroll-triggered counters, and structural grid textures.

## What was added / escalated

### New components (Round 1)
- **BlueprintCursor** — custom crosshair cursor with live coordinate readout (pointer-only, hidden on touch)
- **KineticHeading** — per-word staggered 3D-rotate-in headline reveal with `prefers-reduced-motion` fallback
- **MagneticTiltCard** — perspective tilt + pointer-tracked radial glow wrapper
- **Odometer** — spring-animated stat counter, spins up when scrolled into view

### Global layer
- `globals.css`: added blueprint cursor styles, grain overlay, section-index numerals, `blueprint-grid-live` drift animation, page wipe transitions, reduced-motion guards
- `layout.tsx`: BlueprintCursor render + grain-overlay div
- `template.tsx`: upgraded ViewTransition to use clip-path wipe animations (inset) on all page content

### Per-page changes

#### `/` (homepage) — Round 1 reference
- Headings → KineticHeading
- Department cards → MagneticTiltCard
- Stat values → Odometer
- Section-index numerals (01–03)
- blueprint-grid-live on hero

#### `/about`
- Hero heading → KineticHeading ("Engineering the standard of healthcare.")
- Secondary heading → KineticHeading ("Engineering with a human heart.")
- Value cards → MagneticTiltCard
- Stat values → Odometer
- Section-index numerals (01, 02)
- blueprint-grid-live on dark panel

#### `/services`
- Hero heading → KineticHeading (two-line split)
- "Technical Mastery." → KineticHeading
- "Ready to modernise?" → KineticHeading
- Capabilities list items → MagneticTiltCard
- blueprint-grid-live on hero panel
- Section-index numeral (01)

#### `/services/[id]`
- Dynamic hero heading → KineticHeading with lines (title + "Mastery." span)
- Feature cards → MagneticTiltCard
- blueprint-grid-live on hero panel
- Section-index numeral (01)

#### `/projects`
- Hero heading → KineticHeading (two-line split)
- "Have a clinical vision?" → KineticHeading
- blueprint-grid-live on hero panel
- Section-index numeral (02)

#### `/projects/[id]`
- Dynamic hero heading → KineticHeading
- "Core Statistics." → KineticHeading
- "Mission Narrative." → KineticHeading
- "Scale your clinical vision." → KineticHeading
- Content panels → MagneticTiltCard
- blueprint-grid-live on hero panel
- Section-index numerals (01, 02)

#### `/departments`
- Hero heading → KineticHeading (two-line split)
- Department cards → MagneticTiltCard (replaced MagneticCard)
- "Ready to build the future of healthcare?" → KineticHeading
- blueprint-grid-live on hero panel
- Section-index numeral (01)

#### `/departments/[id]`
- Dynamic hero heading → KineticHeading with lines (title + "Solutions." span)
- Feature cards → MagneticTiltCard
- Section-index numeral (01)

#### `/appointments`
- Hero heading → KineticHeading (two-line split)
- Security/confirmation cards → MagneticTiltCard
- Process section cards → MagneticTiltCard
- blueprint-grid-live on hero panel
- Section-index numeral (01)

#### `/emergency`
- Hero heading → KineticHeading with lines ("Urgent Facility" + "Support." span)
- Minimal motion per design-escalation.md
- Blueprint grid at very low opacity (0.04)
- Section-index numeral (01)
- **No MagneticTiltCard** — kept clean/legible for rapid support context

#### Shared components
- `site-footer.tsx`: added `blueprint-grid` background to dark panel

### Page transitions
- `template.tsx`: default ViewTransition now applies to all page content (was `"none"`)
- CSS keyframes upgraded from blur/fade to clip-path wipe: old page slides out (inset bottom), new page slides in (inset top)

## Dependencies
None added. All changes use existing deps (Framer Motion, Lucide React, Tailwind CSS).

## Pre-existing issues fixed along the way
- Fixed TS build error (`snap` prop on `PresentationControls` — now accepts `Boolean | number`)
- Fixed 9 lint errors + 25 unused-import warnings
- Fixed `@tailwindcss/postcss` + Turbopack loop by adding `--no-turbo` to dev script

## Not changed
- No copy/text/content changed in any page
- No information architecture or navigation changes
- No new JavaScript dependencies added
- `MagneticCard` component left intact (replaced with `MagneticTiltCard` at usage sites)
- Backend/dynamic routes remain server-rendered as before

## Verification
- `npm run lint` — 0 errors, 0 warnings
- `npm run build` — clean exit code 0
- All 10 routes compile and generate successfully
