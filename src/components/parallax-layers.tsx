"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Layer {
  content: ReactNode;
  speed: number;
  className?: string;
}

export function ParallaxLayers({ layers }: { layers: [Layer, Layer] | [Layer, Layer, Layer] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y0 = useTransform(scrollYProgress, [0, 1], ["0%", `${layers[0].speed * 100}%`]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", `${layers[1].speed * 100}%`]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y: y0 }} className={layers[0].className}>
        {layers[0].content}
      </motion.div>
      <motion.div style={{ y: y1 }} className={layers[1].className}>
        {layers[1].content}
      </motion.div>
    </div>
  );
}
