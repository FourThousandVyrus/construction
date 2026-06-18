# Wild Redesign — Homepage Pass (Round 1)

Direction: **Blueprint Kinetics meets Structural Build-Up** — your existing
"premium industrial-clinical" system (teal/cyan/orange, blueprint grids,
technical corners, measurement lines, view-transition route shifts) is
already most of the way there. This round escalates it with new signature
interactions and pushes the existing motion vocabulary further.

## What changed (homepage + global)

### New global, site-wide additions
- **Custom blueprint crosshair cursor** (`src/components/blueprint-cursor.tsx`)
  — a crosshair with a live coordinate readout (mix-blend "difference"),
  expands on hover over links/buttons. Fine-pointer devices only (CSS
  `@media (pointer: fine)`), fully disabled under `prefers-reduced-motion`.
- **Film-grain overlay** — subtle full-viewport noise texture
  (`.grain-overlay` in `globals.css`), applied in `layout.tsx`. ~3.5%
  opacity, `mix-blend-mode: overlay`. Big perceived-quality lift, near-zero
  cost.
- Both wired into `src/app/layout.tsx` (global, applies to every route).

### New reusable components
- **`KineticHeading`** (`src/components/kinetic-heading.tsx`) — per-word
  staggered 3D-rotate-in headline reveal. Supports plain text or multi-line
  layouts with styled accent spans (used for the hero's italic accent line).
  Falls back to a static heading under `prefers-reduced-motion`.
- **`MagneticTiltCard`** (`src/components/magnetic-tilt-card.tsx`) —
  escalates the existing `MagneticCard`: adds perspective tilt
  (rotateX/rotateY following the pointer) plus a pointer-tracked radial glow.
  Falls back to a static `<div>` under reduced motion.
- **`Odometer`** (`src/components/odometer.tsx`) — animates stat values
  (e.g. "85+", "100%") up from 0 with a spring "settle" when scrolled into
  view, preserving the original suffix.

### Homepage (`src/app/page.tsx`)
- Hero headline → `KineticHeading` (3-line staggered reveal, italic accent
  preserved).
- Hero stats strip → each value now an `Odometer`.
- Hero's blueprint grid → now animates (slow drift + breathing opacity via
  `.blueprint-grid-live`).
- "Construction Specialties", "Turnkey Projects.", "Global Gallery.", "Ready
  to build?" headings → `KineticHeading`.
- Added oversized faint **section index numerals** (01 / 02 / 03) behind the
  first three section headings — `.section-index` in `globals.css`.
- Department/unit cards → wrapped in `MagneticTiltCard` (tilt + glow on top
  of the existing reveal/hover-lift).

## Verified

- `npm run lint` — clean.
- `npx tsc --noEmit` — clean.
- `npm run build` — fails in *this sandbox only* due to the egress proxy
  blocking `fonts.googleapis.com` (pre-existing, reproduces identically on
  the unmodified `main` branch — not caused by these changes). It will build
  fine in any environment with normal internet access.

## How to apply

Either:
1. Apply `changes.patch` with `git apply changes.patch` from your repo root,
   then add the 4 new files under `src/components/`, **or**
2. Copy the 7 files in `src/` here directly over the matching paths in your
   repo.

Then `npm run build` to confirm.

## Skill for continuing this elsewhere

`wild-redesign-skill/` is a portable skill (drop into `.claude/skills/` or
wherever your agent reads project skills) that captures this whole
audit → escalate → ship workflow, plus a recipe library
(`references/motion-recipes.md`) and an escalation guide
(`references/design-escalation.md`) for rolling the same treatment out to
`/about`, `/services`, `/projects`, `/departments`, `/appointments`, and
`/emergency`.

## Suggested next round (not yet done)

- Roll `KineticHeading` / `MagneticTiltCard` / section indices to the other
  routes (about, services, projects, departments, appointments, emergency).
- Page transitions: escalate `template.tsx`'s `route-shift`/`route-fade-out`
  into a full-screen wipe/reveal (clip-path animation) for a more dramatic
  "wild" feel — see `motion-recipes.md` #9.
- Multi-layer parallax on the hero image/3D scene stack (`motion-recipes.md`
  #3) and a scroll-linked camera push in `MedicalHeroScene`
  (`motion-recipes.md` #10).
- Marquee ticker for accreditations/stats on a secondary page
  (`motion-recipes.md` #7).
