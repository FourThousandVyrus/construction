"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealMaskProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export function RevealMask({
  children,
  direction = "up",
  delay = 0,
  className,
}: RevealMaskProps) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  const offsets = {
    up: { y: "110%" },
    left: { x: "-110%" },
    right: { x: "110%" },
  };

  return (
    <div style={{ overflow: "hidden" }} className={className}>
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
