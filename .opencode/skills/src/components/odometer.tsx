"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Odometer — animates a numeric value up from 0 with a spring "settle"
 * when it scrolls into view. Accepts the original stat string (e.g.
 * "85+", "100%", "12") and splits it into the animated number plus a
 * static suffix so the suffix never animates oddly.
 */
export function Odometer({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const match = value.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 70, damping: 18 });
  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (numeric === null) return;
    if (reduce) {
      motionVal.set(numeric);
      return;
    }
    if (inView) motionVal.set(numeric);
  }, [inView, numeric, reduce, motionVal]);

  useEffect(() => {
    if (numeric === null) return;
    const unsubscribe = spring.on("change", (latest) => {
      if (display.current) {
        display.current.textContent = latest.toFixed(decimals);
      }
    });
    return unsubscribe;
  }, [spring, decimals, numeric]);

  if (numeric === null) {
    // Non-numeric stat (shouldn't happen with current data, but stay safe).
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      <motion.span ref={display}>0</motion.span>
      {suffix}
    </span>
  );
}
