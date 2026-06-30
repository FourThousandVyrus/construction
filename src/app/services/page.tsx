import type { Metadata } from "next";
import { ArrowRight, Zap, ShieldCheck, Activity, Scan } from "lucide-react";
import { servicesData } from "@/lib/site-content";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Solutions | Epicshield Surfaces — Healthcare Construction & Engineering",
  description:
    "Comprehensive healthcare infrastructure services including facility upgrades, hospital renovations, MEP systems execution, and medical equipment integration.",
};

export default function ServicesPage() {
  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      {/* Hero Section */}
      <section className="panel-dark relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-white sm:px-12 sm:py-20">
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <p className="section-label eyebrow-line text-[var(--accent)]">Core Solutions</p>
          <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-7xl" lines={[["Clinical"], ["Infrastructure."]]} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            From clinical layout planning to medical gas integration, we provide turnkey healthcare engineering and hospital facility solutions.
          </p>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="mt-16 relative">
        <span className="section-index" aria-hidden="true">01</span>
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">Our Services</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="Comprehensive Solutions." />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((svc) => (
            <MagneticTiltCard key={svc.id} className="panel-ivory rounded-[2.5rem] border border-gray-100 overflow-hidden group">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image src={svc.images.card} alt={svc.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--slate-strong)]">{svc.eyebrow}</p>
                <h3 className="mt-3 text-xl font-serif text-[var(--ink-deep)]">{svc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] line-clamp-2">{svc.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {svc.subServices.slice(0, 3).map((sub) => (
                    <span key={sub} className="rounded-full bg-[var(--accent)]/5 px-3 py-1 text-[11px] font-medium text-[var(--accent)]">
                      {sub}
                    </span>
                  ))}
                </div>
                <Link href={svc.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--slate-strong)] transition-transform hover:translate-x-1">
                  Explore Solution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </MagneticTiltCard>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2 relative">
         <span className="section-index" aria-hidden="true">02</span>
         <div className="panel-ivory rounded-[2.5rem] p-10 sm:p-14">
            <KineticHeading as="h2" className="font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="Technical Mastery." />
             <p className="mt-6 text-lg text-[var(--muted)]">
                Our team combines decades of clinical engineering and MEP systems expertise to deliver healthcare infrastructure that meets strict MOH, GSA, and WHO standards.
             </p>

             <div className="mt-10 space-y-6">
                <MagneticTiltCard className="flex gap-6 items-start group rounded-2xl p-4 -mx-4 transition-colors hover:bg-white/80">
                   <div className="h-10 w-10 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-50">
                      <ShieldCheck className="h-5 w-5 text-[var(--slate-strong)]" />
                   </div>
                   <div>
                       <h4 className="font-bold text-[var(--ink-deep)]">Clinical Compliance</h4>
                       <p className="text-sm text-[var(--muted)]">Ensuring all projects meet GSA, MOH, EPA, and NRA medical licensing guidelines.</p>
                   </div>
                </MagneticTiltCard>
                <MagneticTiltCard className="flex gap-6 items-start group rounded-2xl p-4 -mx-4 transition-colors hover:bg-white/80">
                   <div className="h-10 w-10 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-50">
                      <Zap className="h-5 w-5 text-[var(--slate-strong)]" />
                   </div>
                   <div>
                       <h4 className="font-bold text-[var(--ink-deep)]">Clinical Systems Integration</h4>
                       <p className="text-sm text-[var(--muted)]">Seamless commissioning of medical gas piping, HVAC cleanrooms, and diagnostic equipment.</p>
                   </div>
                </MagneticTiltCard>
             </div>
         </div>

         <div className="rounded-[2.5rem] bg-[var(--ink-deep)] p-10 sm:p-14 text-white flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.08),transparent_70%)]" />
            <div className="relative z-10">
               <Activity className="h-12 w-12 text-[var(--slate-soft)] mb-8" />
                 <KineticHeading as="h3" className="text-3xl font-serif" text="Ready to build?" />
                <p className="mt-4 text-white/60">Start your project assessment today and discover how our expertise delivers results.</p>
            </div>
             <Link href="/contact" className="mt-12 inline-flex items-center gap-2 font-bold text-[var(--accent)] group relative z-10">
               Start Project Consult <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>
    </main>
  );
}
