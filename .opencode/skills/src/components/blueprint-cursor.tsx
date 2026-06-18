"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * BlueprintCursor — a persistent crosshair cursor with a live coordinate
 * readout, themed to the "blueprint kinetics" direction. Expands when
 * hovering interactive elements.
 *
 * Visibility on coarse-pointer (touch) devices is handled purely via the
 * `.blueprint-cursor` CSS rule (display: none, enabled only under
 * `@media (pointer: fine)`), so we don't need to gate rendering on a
 * client-detected state (which would require setState in an effect).
 * Reduced-motion users get nothing rendered at all.
 */
export function BlueprintCursor() {
  const reduce = useReducedMotion();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const spring = { stiffness: 600, damping: 45, mass: 0.4 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const sizeSpring = useSpring(hovering ? 56 : 28, { stiffness: 300, damping: 24 });

  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      });

      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="interactive"]'
      );
      setHovering((prev) => (prev === interactive ? prev : interactive));
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.classList.add("blueprint-cursor-active");

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("blueprint-cursor-active");
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="blueprint-cursor"
      style={{ left: sx, top: sy }}
    >
      <motion.div
        className="blueprint-cursor-ring"
        style={{ width: sizeSpring, height: sizeSpring }}
      />
      <div className="blueprint-cursor-dot" />
      <div className="blueprint-cursor-coords">
        {coords.x.toString().padStart(4, "0")}, {coords.y.toString().padStart(4, "0")}
      </div>
    </motion.div>
  );
}
