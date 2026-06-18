"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScanlineSweepProps {
  children: ReactNode;
  className?: string;
}

export function ScanlineSweep({ children, className }: ScanlineSweepProps) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0"
          style={{
            background: "linear-gradient(180deg, transparent 40%, rgba(249,115,22,0.08) 50%, transparent 60%)",
            backgroundSize: "100% 200%",
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 40%, rgba(249,115,22,0.04) 50%, transparent 60%)", backgroundSize: "100% 200%" }}
            initial={{ backgroundPosition: "0 0" }}
            whileInView={{ backgroundPosition: "0 100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
      {children}
    </div>
  );
}
