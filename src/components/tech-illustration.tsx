"use client";

import { motion } from "framer-motion";

export function TechIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M50 50 H350 V350 H50 V50 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="200"
        cy="200"
        r="120"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="2 6"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <path d="M200 50 V350 M50 200 H350" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
      {[...Array(8)].map((_, i) => (
        <circle
          key={i}
          cx={200 + Math.cos((i / 8) * Math.PI * 2) * 120}
          cy={200 + Math.sin((i / 8) * Math.PI * 2) * 120}
          r="2"
          fill="currentColor"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}
