"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function BlueprintCursor() {
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setVisible(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body { cursor: none !important; }
        }
      `}</style>
      <motion.div
        style={{ x: sx, y: sy, position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999, mixBlendMode: "difference" }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" className="absolute -translate-x-1/2 -translate-y-1/2">
          <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.8" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" opacity="0.9" />
        </svg>
        <span style={{ position: "absolute", left: 20, top: 20, fontFamily: "var(--font-inter), monospace", fontSize: 9, whiteSpace: "nowrap", lineHeight: 1, opacity: 0.4 }}>
          {pos.x},{pos.y}
        </span>
      </motion.div>
    </>
  );
}
