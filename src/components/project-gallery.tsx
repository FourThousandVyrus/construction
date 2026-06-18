"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title?: string;
}

export function ProjectGallery({ images, title = "Project Gallery" }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">Site Photography</p>
          <h3 className="text-3xl font-serif text-[var(--ink-deep)] mt-2">{title}</h3>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="h-4 w-4 text-[var(--ink-deep)]" />
          </button>
          <button onClick={() => scroll("right")} className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="h-4 w-4 text-[var(--ink-deep)]" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(i)}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] h-64 rounded-2xl overflow-hidden relative group cursor-pointer hover:ring-2 hover:ring-[var(--accent)] transition-all duration-300"
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-[var(--ink-deep)]/0 group-hover:bg-[var(--ink-deep)]/10 transition-colors" />
            <div className="absolute bottom-3 left-3 bg-[var(--ink-deep)]/60 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
              {String(i + 1).padStart(2, "0")}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[var(--ink-deep)]/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedIndex(null)}>
          <button onClick={() => setSelectedIndex(null)} className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <X className="h-5 w-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1)); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0)); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedIndex]}
              alt={`${title} ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
