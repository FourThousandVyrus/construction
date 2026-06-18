import { ArrowRight, Zap, ShieldCheck, Activity, Scan } from "lucide-react";
import { serviceCards } from "@/lib/site-content";
import { services } from "@/lib/brochure-content";
import { Service3DCard } from "@/components/service-3d-card";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import Link from "next/link";

const serviceIcons = [ShieldCheck, Activity, Scan, ArrowRight];

export default function ServicesPage() {
  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
       {/* Hero Section */}
      <section className="panel-dark relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-white sm:px-12 sm:py-20">
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <p className="section-label eyebrow-line text-[var(--accent)]">Core Solutions</p>
          <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-7xl" lines={[["Engineering"], ["Africa's Future."]]} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            From site assessment to technical integration, we provide end-to-end engineering excellence for modern infrastructure across Africa.
          </p>
        </div>
      </section>

      {/* ── Core Services (from brochure) ── */}
      
      <section className="mt-16 relative">
        <span className="section-index" aria-hidden="true">01</span>
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">Our Expertise</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="Comprehensive Services." />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((svc, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <MagneticTiltCard key={svc.title} className="panel-ivory rounded-[2.5rem] border border-gray-100 p-8 sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/5">
                  <Icon className="h-7 w-7 text-[var(--accent)]" />
                </div>
                <h3 className="text-2xl font-serif text-[var(--ink-deep)]">{svc.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{svc.description}</p>
              </MagneticTiltCard>
            );
          })}
        </div>
      </section>
      

      {/* Service Detail Cards */}
      
      <section className="mt-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, i) => (
            <Service3DCard
              key={card.href}
              {...card}
               color={i === 1 ? "#f97316" : i === 2 ? "#64748b" : "#0f172a"}
            />
          ))}
        </div>
      </section>
      

      {/* Capabilities Section */}
      
      <section className="mt-12 grid gap-8 lg:grid-cols-2 relative">
         <span className="section-index" aria-hidden="true">02</span>
         <div className="panel-ivory rounded-[2.5rem] p-8 sm:p-12">
            <KineticHeading as="h2" className="font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="Technical Mastery." />
             <p className="mt-6 text-lg text-[var(--muted)]">
                Our team combines decades of field experience with advanced structural engineering to deliver infrastructure that meets the highest international standards.
             </p>

             <div className="mt-10 space-y-6">
                <MagneticTiltCard className="flex gap-6 items-start group rounded-2xl p-4 -mx-4 transition-colors hover:bg-white/80">
                   <div className="h-10 w-10 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-50">
                      <ShieldCheck className="h-5 w-5 text-[var(--slate-strong)]" />
                   </div>
                   <div>
                       <h4 className="font-bold text-[var(--ink-deep)]">Regulatory Compliance</h4>
                       <p className="text-sm text-[var(--muted)]">Ensuring all projects meet global construction safety and building code protocols.</p>
                   </div>
                </MagneticTiltCard>
                <MagneticTiltCard className="flex gap-6 items-start group rounded-2xl p-4 -mx-4 transition-colors hover:bg-white/80">
                   <div className="h-10 w-10 shrink-0 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-50">
                      <Zap className="h-5 w-5 text-[var(--slate-strong)]" />
                   </div>
                   <div>
                       <h4 className="font-bold text-[var(--ink-deep)]">Technical Systems Integration</h4>
                       <p className="text-sm text-[var(--muted)]">Seamless MEP and building systems deployments for modern facilities.</p>
                   </div>
                </MagneticTiltCard>
             </div>
         </div>

         <div className="rounded-[2.5rem] bg-[var(--ink-deep)] p-8 sm:p-12 text-white flex flex-col justify-between overflow-hidden relative">
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
