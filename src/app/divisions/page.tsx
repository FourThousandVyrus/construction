"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import { divisionData } from "@/lib/site-content";

export default function DivisionsPage() {
  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      
      {/* Hero */}
      <section className="panel-dark relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-white sm:px-12 sm:py-20">
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-40">
           <div className="drift absolute left-[8%] top-[10%] h-64 w-64 rounded-full bg-[rgba(249,115,22,0.08)] blur-[100px]" />
           <div className="drift absolute bottom-[12%] right-[10%] h-80 w-80 rounded-full bg-[rgba(249,115,22,0.06)] blur-[120px] [animation-delay:-4s]" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="section-label eyebrow-line text-[var(--accent)]">Engineering Divisions</p>
          <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-7xl" lines={[["Specialized"], ["Construction Divisions."]]} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Precision-engineered divisions — from foundations to finishing, built for the most demanding infrastructure projects across Africa.
          </p>
        </div>
      </section>

      {/* Magnetic Cards Grid */}
      
      <section className="mt-12">
        <p className="mb-3 text-center text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">
          Hover any card to explore ↓
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {divisionData.map((div) => (
            <MagneticTiltCard
              key={div.id}
              className="group relative flex flex-col rounded-[2.5rem] border border-[rgba(16,39,43,0.06)] bg-white/60 p-8 transition-all hover:shadow-2xl hover:bg-white/90"
            >
              <div className="pointer-events-none absolute -top-3 -right-3 h-6 w-6 rounded-full bg-[var(--accent)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />

              <div className="mb-8 relative h-32 w-32 rounded-[2rem] bg-gray-50 overflow-hidden transition-colors group-hover:bg-white group-hover:shadow-md">
                {div.image && (
                  <Image
                    src={div.image}
                    alt={div.title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                )}
              </div>
              <h3 className="text-2xl font-serif text-[var(--ink-deep)]">{div.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">{div.description}</p>
              <Link
                href={`/divisions/${div.id}`}
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition-transform group-hover:translate-x-1"
              >
                Explore Division <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticTiltCard>
          ))}
        </div>
      </section>
      

      {/* CTA */}
      
      <section className="mt-12 rounded-[2.5rem] bg-[var(--ink-deep)] p-8 text-center text-white sm:p-12 relative">
        <span className="section-index" aria-hidden="true" style={{ color: "var(--accent)", opacity: 0.04 }}>01</span>
        <KineticHeading as="h2" className="mx-auto max-w-2xl font-serif text-3xl sm:text-5xl" text="Ready to build?" />
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
           <Link href="/contact" className="rounded-full bg-[var(--accent)] px-10 py-4 font-bold text-white transition-transform hover:scale-105">
             Start a Project Consult
           </Link>
           <Link href="/projects" className="rounded-full border border-white/20 px-10 py-4 font-bold text-white hover:bg-white/10">
             View Projects
           </Link>
        </div>
      </section>
      
    </main>
  );
}