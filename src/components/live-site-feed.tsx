"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface LiveSiteFeedProps {
  images: readonly string[];
}

export function LiveSiteFeed({ images }: LiveSiteFeedProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let pos = 0;

    const animate = () => {
      pos -= 0.5;
      const half = track.scrollWidth / 2;
      if (Math.abs(pos) >= half) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">Live From the Field</span>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-[var(--line)]">
        <div ref={trackRef} className="flex gap-4 py-4 px-4" style={{ width: "fit-content" }}>
          {doubled.map((src, i) => (
              <div key={`${src}-${i}`} className="relative h-40 w-56 shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-72">
              <Image
                src={src}
                alt={`Site progress ${i + 1}`}
                fill
                className="object-cover"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/30 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
