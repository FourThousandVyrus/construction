# Shipping Checklist & Error-Fixing Loop

The job isn't done when the redesign "looks right" in source — it's done when the project builds clean. Run this loop after every significant batch of changes, not just at the end.

## The Loop

1. **Install** (only if needed): `npm install`
2. **Lint**: `npm run lint`
   - Fix all errors. Fix warnings too if they're quick (unused imports, missing alt text, etc.) — these compound into perceived sloppiness.
3. **Typecheck**: Next.js type-checks during `npm run build`, but for faster iteration during heavy editing, run `npx tsc --noEmit` if a `tsconfig.json` is present.
4. **Build**: `npm run build`
   - Must complete with exit code 0. Read the *first* error in the output — later errors are often downstream of the first.
5. **Repeat from step 2** until lint + build are both clean.

Use `scripts/verify.sh` to run lint + build together and get a clear pass/fail summary.

## Common Failure Modes When Adding Motion/3D Components

- **Missing `"use client"`**: any component using hooks (`useState`, `useEffect`, Framer Motion hooks, R3F hooks) must be a client component. If it's imported into a server component (e.g. a page), either the component itself needs `"use client"` at the top, or it needs to be wrapped/imported via a client boundary.
- **SSR-incompatible code in R3F/Three.js**: `window`, `document`, `navigator` references at module scope break SSR. Guard with `typeof window !== "undefined"` or move into `useEffect`/`useFrame`. For whole Canvas components, prefer:
  ```tsx
  const Scene = dynamic(() => import("./scene"), { ssr: false, loading: () => <SceneSkeleton /> });
  ```
- **Hydration mismatches**: anything that differs between server and client render (e.g. `Math.random()`, `Date.now()`, `window.innerWidth` used during initial render) causes hydration errors. Compute such values in `useEffect` and store in state, rendering a deterministic placeholder until then.
- **`useTransform`/`useScroll` returning non-primitive types into JSX**: motion values must be passed through `<motion.*>` props (`style={{ ... }}`) or rendered via `motion.span`'s children mechanism — not interpolated directly into template strings outside of `useMotionTemplate`.
- **Hooks called conditionally or in loops**: if escalating a parallax/scrub component to handle a variable-length array, either keep the array length fixed at the call site (and call hooks per-item explicitly) or restructure so each "layer"/"step" is its own small component (so the hook is at that component's top level, called once per instance — which is fine, since it's a different component instance per array item, not a loop within one component).
- **Unused/duplicate dependencies**: if you add a new animation library (GSAP, etc.), check it isn't already covered by Framer Motion/R3F first — adding redundant heavy deps hurts bundle size and may not be wanted. Confirm with the user before adding new dependencies not already in `package.json`.
- **Image domains/`next.config`**: if new images are pulled from external URLs, `next/image` requires `remotePatterns`/`domains` config in `next.config.ts`, or the build will warn/error on those images.

## Framework-Version Awareness

If the repo includes a note like *"This is NOT the Next.js you know — read the docs in `node_modules/next/dist/docs/` before writing code"* (common for very recent major versions), do exactly that before using:
- `dynamic()` import syntax
- `useScroll`/viewport APIs if the framework wraps them
- `template.tsx` / layout conventions
- Image/font loading APIs

A 2-minute doc check beats a 20-minute error-fixing loop caused by an API that changed between major versions.

## Performance Pass (before calling it done)

- Heavy/animated components (3D scenes, large SVG animations, scroll-scrub sections) → `dynamic(..., { ssr: false })` with a lightweight skeleton/placeholder.
- Large images → ensure `next/image` is used with appropriate `sizes`/`priority` only on above-the-fold images.
- Reduce-motion: spot-check that `prefers-reduced-motion: reduce` disables/simplifies the heaviest animations (custom cursor, parallax, scroll-scrub) — these are the ones most likely to cause discomfort or performance issues on low-end devices.

## Final Deliverable

After a clean build, summarize for the user in a short changelog:
- What was escalated/added, grouped by page or component
- Any new dependencies added (and why)
- Any pre-existing issues fixed along the way
- Anything flagged but *not* changed (e.g. "didn't touch X because it would require a new dependency — want me to add it?")
