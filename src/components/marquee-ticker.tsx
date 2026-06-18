"use client";

import { ReactNode } from "react";

interface MarqueeTickerProps {
  items: ReactNode[];
  speed?: string;
  className?: string;
}

export function MarqueeTicker({ items, speed = "30s", className }: MarqueeTickerProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track" style={{ animationDuration: speed }}>
        {items.map((item, i) => (
          <span key={i} className="mx-8">{item}</span>
        ))}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="mx-8">{item}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee ${speed} linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
