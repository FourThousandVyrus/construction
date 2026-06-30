"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * MagneticTiltCard — escalates MagneticCard with a perspective tilt
 * (rotateX/rotateY following the pointer) and a pointer-tracked radial
 * glow rendered behind the content. Falls back to a static wrapper
 * when reduced motion is preferred.
 *
 * Apply `group` on this element (or rely on the className you pass in)
 * so the glow can be combined with existing group-hover styles.
 */
export function MagneticTiltCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const spring = { stiffness: 200, damping: 22 };
  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), spring);
  const translateX = useSpring(offsetX, spring);
  const translateY = useSpring(offsetY, spring);

  const glowX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(249,115,22,0.14), transparent 60%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    offsetX.set((e.clientX - cx) * 0.05);
    offsetY.set((e.clientY - cy) * 0.05);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
    offsetX.set(0);
    offsetY.set(0);
  };

  if (reduce) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformPerspective: 900,
        ...style,
      }}
      className={`relative ${className ?? ""}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      {children}
    </motion.div>
  );
}
