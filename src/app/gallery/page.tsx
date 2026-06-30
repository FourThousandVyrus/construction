"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";

import { galleryImages } from "@/lib/site-content";

const categories = ["All", "Hospital Construction", "Healthcare Engineering", "Medical Equipment", "Hospital Doors & Windows", "Study Tours & Visits"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      <section className="panel-dark relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-white sm:px-12 sm:py-20">
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <p className="section-label eyebrow-line text-[var(--accent)]">Project Gallery</p>
          <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-7xl" lines={[["Clinical"], ["Infrastructure."]]} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            A visual record of our healthcare facility developments — from cleanrooms and theatres to medical gas networks and study tours. Every image highlights our clinical engineering precision.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
          <Filter className="h-4 w-4 text-[var(--muted)] shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-[var(--accent)] text-white"
                  : "bg-white border border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((img, i) => (

              <MagneticTiltCard className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--line)] bg-white cursor-pointer">
                <button
                  onClick={() => setSelectedIndex(galleryImages.indexOf(img))}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${img.category} image ${i + 1}`}
                />
                <Image
                  src={img.src}
                  alt={`${img.category} project photo ${i + 1}`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-white/80 bg-[var(--accent)] px-3 py-1 rounded-full">
                    {img.category}
                  </span>
                  <p className="mt-2 text-xs text-white/60">
                    {String(galleryImages.indexOf(img) + 1).padStart(2, "0")} / {galleryImages.length}
                  </p>
                </div>
              </MagneticTiltCard>
            
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[var(--ink-deep)]/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedIndex(null)}>
          <button onClick={() => setSelectedIndex(null)} className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-20">
            <X className="h-5 w-5 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-20"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-20"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="relative w-full max-w-5xl h-[60vh] sm:h-[75vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedIndex].src}
              alt={`Project photo ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-[var(--accent)]">{galleryImages[selectedIndex].category}</span>
            <span className="h-3 w-px bg-white/20" />
            <span>{selectedIndex + 1} / {galleryImages.length}</span>
          </div>
        </div>
      )}
    </main>
  );
}
