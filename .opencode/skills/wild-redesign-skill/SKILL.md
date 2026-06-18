---
name: wild-redesign
description: Use this skill whenever the user wants to dramatically reskin a website's visuals and motion — turn an existing React/Next.js (or plain HTML) site into something "wild", "crazy", "advanced", "award-site", "next-level", or just "less generic", with cutting-edge animation (scroll-driven reveals, magnetic cursors, kinetic typography, parallax layers, page transitions, custom cursors, 3D/WebGL flourishes) WITHOUT changing the existing content, copy, or information architecture. Also trigger this for "give it that wow factor", "push the motion further", "make it feel premium/modern", or for end-to-end visual-overhaul tasks that must go all the way from heavy modification to a shippable build — including fixing lint/type/build errors and verifying `npm run build` passes. Strongly prefer this skill for construction, healthcare, corporate, agency, portfolio, or B2B sites that need an aesthetic and motion overhaul on top of content that stays fixed.
---

# Wild Redesign — Audit → Escalate → Ship

A workflow for taking a site from "fine, finished" to "wow, what is this" — by amplifying motion and visual language while leaving content, copy, and IA untouched, and never leaving the build in a broken state.

## Core Philosophy

1. **Content is frozen. Presentation is reinvented.** Never rewrite copy, rename sections, reorder navigation, or change data files (e.g. `site-content.ts`) unless fixing a literal typo the user flags.
2. **Turn the dial past 10.** If the codebase already has `Reveal`, `MagneticCard`, `ParallaxSection`, etc., don't just keep them — escalate every one of them into something more dramatic, then add 2-4 *signature* new interactions that didn't exist before.
3. **Theme the motion, don't generic-ify it.** "Wild" should feel native to the brand/industry. A construction/engineering site should feel like blueprints, grid-snapping, structural reveals, crosshairs, load-bearing motion — not generic SaaS gradient blobs. Pick a specific motif (see Phase 1) rather than "modern #4827".
4. **Nothing ships broken.** Every phase ends with `npm run lint`, `tsc --noEmit` (or the project's typecheck script), and `npm run build` passing. Fix errors as part of the job, not as an afterthought.
5. **Respect the environment's quirks.** If the repo has an `AGENTS.md`/`CLAUDE.md` pointing at framework docs (e.g. "this Next.js version has breaking changes, read `node_modules/next/dist/docs/`"), read those docs before writing code that uses framework APIs you're not 100% sure about for that version.

## Workflow

### Phase 0 — Recon (read everything before touching anything)

- `view` the repo tree. Read `package.json` for stack/versions, `AGENTS.md`/`CLAUDE.md`/`README.md` for project-specific rules.
- Map the information architecture: every route under `src/app` (or `pages`), and the content/data source files (e.g. `src/lib/site-content.ts`). This is the "frozen" layer.
- Map the current design system: `globals.css` / Tailwind theme tokens (colors, fonts, spacing, radii).
- Inventory existing motion building blocks — grep for `framer-motion`, `gsap`, `three`, `@react-three`, `useScroll`, `useTransform`, custom components like `Reveal`, `Magnetic*`, `*3d*`, `*scene*`, `*pulse*`.
- Install deps and capture a **baseline**: run `npm install` (if `node_modules` missing), then `npm run lint` and `npm run build`. Note any pre-existing errors so you don't get blamed for them later, but fix them too if time allows.

### Phase 1 — Pick a Creative Direction

Don't default to "generic modern." Propose a **named, specific** direction tied to the brand/industry, with a one-line description of its signature interaction. For a construction/infrastructure brand, examples to riff on:

- **Blueprint Kinetics**: animated grid-lines that "draft" sections into existence, crosshair custom cursor, scanline sweeps, technical annotation callouts that draw themselves on scroll, monospace/architectural type accents over the existing sans.
- **Structural Build-Up**: page/section content assembles like a building going up — staggered vertical "construction" of cards (rise + settle with slight overshoot), girder-like dividers that extend on scroll, riveted/industrial texture accents.
- **Site Survey Mode**: a persistent HUD-like overlay (coordinates, scroll progress as a "depth gauge"), laser-level horizontal lines that sweep in, odometer-style animated stats, before/after reveal sliders for project imagery.

If the user hasn't already chosen, present 2-3 such options via `ask_user_input_v0` (short labels + one-line description each). Once chosen, jot down the direction in 4-6 bullets: palette escalation, type treatment, signature cursor/hero interaction, motion vocabulary for cards/sections, and the "hero moment" (the one thing a visitor remembers).

### Phase 2 — Escalate Design Tokens

Push the *existing* palette and type system louder rather than replacing it (preserve brand colors found in `globals.css`/theme). See `references/design-escalation.md` for concrete techniques: contrast escalation, grain/noise overlays, animated gradient meshes, variable-font weight animation, blueprint-grid backgrounds, oversized display type, asymmetric/edge-to-edge layouts.

### Phase 3 — Escalate the Motion Layer

For each existing motion primitive, build a "v2" that's more dramatic — see `references/motion-recipes.md` for ready-to-adapt patterns:

- Reveal → staggered, direction-varying, spring-overshoot reveals with masked text
- ParallaxSection → multi-layer parallax with different speeds/depths per layer
- MagneticCard → magnetic + tilt (3D rotateX/rotateY on pointer) + glow follow
- Custom cursor (crosshair / dot-and-ring / label-on-hover)
- Kinetic/split-text headlines (per-character or per-word stagger, scramble-in)
- Scroll-scrubbed "pinned" sequences (`useScroll` + `useTransform`, no GSAP needed if not installed)
- Marquee/ticker strips for stats or partner logos
- Animated counters with odometer/spring easing
- Page transitions (the repo already has `template.tsx` — that's the right place for enter/exit transitions)
- If R3F/Three.js scenes exist, push camera drama: scroll-linked camera position/rotation, more dynamic lighting, layered depth fog

Add **2-4 new signature components** beyond escalating existing ones — pick from the recipes based on the chosen direction.

### Phase 4 — Apply Consistently Across All Pages

- Roll new tokens/components out to every route, not just the homepage.
- Keep every word of copy identical — only touch JSX structure where needed to wrap content in new motion components.
- Accessibility: every new animation needs a `prefers-reduced-motion` fallback (CSS media query or `useReducedMotion()` from Framer Motion). Don't break semantic heading order or landmark structure.

### Phase 5 — Fix Everything & Ship

Run `references/shipping-checklist.md`'s loop until clean:

1. `npm run lint` — fix all errors (warnings if quick).
2. Typecheck (`npx tsc --noEmit` or `npm run build`, which type-checks in Next.js).
3. `npm run build` — must complete successfully. Watch for hydration-mismatch warnings, missing `"use client"`, dynamic-import issues for heavy 3D components.
4. Quick perf pass: `dynamic()` import for heavy/animated components with `ssr: false` where appropriate, lazy-load below-the-fold media.
5. Write a short changelog summarizing what changed per page/component — this is the deliverable summary for the user.

## Reference Files

- `references/motion-recipes.md` — copy-adapt-ready advanced motion patterns (Framer Motion + R3F + pure CSS), each with a short "when to use" note.
- `references/design-escalation.md` — how to push an existing token system louder without abandoning brand identity.
- `references/shipping-checklist.md` — the lint/typecheck/build error-fixing loop, plus common Next.js 16 / React 19 / Tailwind 4 pitfalls.
- `scripts/verify.sh` — runs lint + build and prints a pass/fail summary; run after every significant batch of changes.

## Key Rules (recap)

- Content/copy/IA frozen unless the user explicitly asks for content changes.
- Every new client component: `"use client"` + reduced-motion fallback.
- Theme the wildness to the brand/industry — name the direction, don't default to generic.
- End every working session with a clean `npm run build`.
