# Motion Recipes

Ready-to-adapt patterns for escalating motion. All examples assume Framer Motion (`motion/react` or `framer-motion`) and React 19 / Next.js App Router unless noted. Adapt variable names, colors, and timing to the chosen creative direction — these are starting points, not copy-paste-verbatim final code.

Every component below should:
- start with `"use client"`
- respect `useReducedMotion()` — either skip the animation or swap to a simple fade

---

## 1. Split-Text / Kinetic Headline Reveal

Per-word (or per-character for short headlines) staggered entrance. Great as a "v2" of a simple `Reveal`.

```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

export function KineticHeading({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) return <h2 className={className}>{text}</h2>;

  return (
    <h2 className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0.35em" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: "0.8em", rotateX: -40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}
```

**Variant — scramble-in:** on mount, cycle each character through random glyphs before settling on the real one (use a `useEffect` + `setInterval`, ~30ms ticks, 8-12 ticks per character with increasing settle probability left-to-right).

---

## 2. Reveal v2 — Masked, Direction-Aware, Overshoot

Escalates a basic fade/slide `Reveal` into a masked wipe with spring overshoot.

```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function RevealMask({
  children,
  direction = "up",
  delay = 0,
}: { children: ReactNode; direction?: "up" | "left" | "right"; delay?: number }) {
  const reduce = useReducedMotion();
  const offsets = { up: { y: "110%" }, left: { x: "-110%" }, right: { x: "110%" } };

  if (reduce) return <>{children}</>;

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={offsets[direction]}
        whileInView={{ x: 0, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ type: "spring", stiffness: 90, damping: 14, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
```

---

## 3. Multi-Layer Parallax (depth stack)

Escalates a single-layer `ParallaxSection` into 2-3 layers moving at different speeds, creating real depth.

```tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

export function ParallaxLayers({
  layers,
}: { layers: { content: ReactNode; speed: number; className?: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <div ref={ref} className="relative overflow-hidden">
      {layers.map((layer, i) => {
        const y = useTransform(scrollYProgress, [0, 1], ["0%", `${layer.speed * 100}%`]);
        return (
          <motion.div key={i} style={{ y }} className={layer.className}>
            {layer.content}
          </motion.div>
        );
      })}
    </div>
  );
}
```

Note: `useTransform` inside `.map` violates the "hooks at top level" rule if `layers.length` can change — for a fixed, known number of layers (typical for a hero), call `useTransform` separately for each layer instead of in a loop.

---

## 4. Magnetic + Tilt Card (3D pointer response)

Escalates `MagneticCard` by adding perspective tilt and a pointer-following glow.

```tsx
"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function MagneticTiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), spring);
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), spring);
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), spring);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, x: translateX, y: translateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## 5. Custom Cursor (crosshair / dot-and-ring)

A persistent, brand-themed cursor — strong "signature" interaction. For a construction/blueprint direction, render a crosshair with coordinate readout; for general "premium" sites, a dot-and-ring that scales up over interactive elements.

```tsx
"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function BlueprintCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setPos({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: sx, y: sy, position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999, mixBlendMode: "difference" }}
    >
      <div style={{ width: 24, height: 24, border: "1px solid currentColor", borderRadius: "50%", transform: "translate(-50%, -50%)" }} />
      <span style={{ position: "absolute", left: 16, top: 16, fontFamily: "monospace", fontSize: 10, whiteSpace: "nowrap" }}>
        {pos.x},{pos.y}
      </span>
    </motion.div>
  );
}
```

Hide the native cursor (`cursor: none` on `body`) only on pointer (non-touch) devices — gate with a `(pointer: fine)` media query check before mounting.

---

## 6. Scroll-Scrubbed Pinned Sequence

No GSAP required — `useScroll` + `useTransform` against a tall container can drive a "pinned" feel via `position: sticky` on the visual while text scrolls past, or crossfade/scale a sequence of items as the user scrolls through a tall section.

```tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PinnedScrub({ steps }: { steps: { label: string; content: React.ReactNode }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} style={{ height: `${steps.length * 100}vh`, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        {steps.map((step, i) => {
          const start = i / steps.length;
          const end = (i + 1) / steps.length;
          const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
          const scale = useTransform(scrollYProgress, [start, end], [0.9, 1.05]);
          return (
            <motion.div key={i} style={{ opacity, scale, position: "absolute", inset: 0 }}>
              {step.content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
```

(Same caveat as recipe 3: if `steps` has a fixed/known length at the call site, prefer explicit per-step hooks over a loop.)

---

## 7. Marquee / Ticker Strip

Good for stats, accreditations, or a scrolling "now building" project list. Pure CSS keyframes (no JS animation cost):

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```
Render the content list twice back-to-back inside `.marquee-track` for a seamless loop.

---

## 8. Odometer-Style Animated Counters

Escalates plain "count up" stats with a digit-roll feel.

```tsx
"use client";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Odometer({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => { if (inView) motionVal.set(value); }, [inView, value, motionVal]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
```

(`useTransform` returning a string into JSX requires wrapping in `<motion.span>{display}</motion.span>` where `display` is a `MotionValue<string>` — Framer Motion handles this via `motion.span`'s children when passed a motion value through `useMotionTemplate`/`useTransform`; verify against the installed Framer Motion version's docs if it errors, and fall back to subscribing via `useEffect` + local state if needed.)

---

## 9. Page Transitions via `template.tsx`

Next.js App Router re-mounts `template.tsx` on every navigation — the natural place for enter/exit transitions (the repo in question already has one). Wrap children in a `motion.div` keyed by `usePathname()`, with `AnimatePresence mode="wait"` in a client wrapper. For a "wild" feel, consider a wipe/reveal transition (animate a full-screen panel's `scaleY`/`clipPath` in then out) rather than a plain crossfade.

---

## 10. R3F / Three.js Drama Upgrades

If `@react-three/fiber` + `drei` are present:
- Drive camera position/rotation from scroll progress (`useScroll` outside the canvas, pass values in as props, update via `useFrame`).
- Add atmosphere: `Environment`, fog (`scene.fog`), bloom via `@react-three/postprocessing` if installed (don't add new heavy deps without checking with the user).
- Increase lighting contrast — fewer, harder-edged lights with rim lighting reads as more "premium/dramatic" than flat ambient.
- Ensure the canvas is `dynamic(() => import(...), { ssr: false })`-loaded with a lightweight loading skeleton, so it never blocks first paint or breaks SSR.

---

## 11. Noise / Grain Overlay (cheap texture, big perceived-quality boost)

Pure CSS, applied as a fixed full-viewport overlay:

```css
.grain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 50;
  opacity: 0.04;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```
