import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, ShieldCheck, Scan } from "lucide-react";
import { MedicalHeroScene } from "@/components/medical-hero-scene";
import { AppointmentBooking } from "@/components/appointment-booking";
import { Reveal } from "@/components/reveal";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import { Odometer } from "@/components/odometer";
import { hospitalStats, departmentData } from "@/lib/site-content";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-7.5rem)] overflow-hidden rounded-[3rem] panel-dark px-4 py-4 sm:min-h-[calc(100vh-8rem)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {/* Subtle Architectural Grid */}
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-20 pointer-events-none" />
        
        <div className="relative z-10 flex h-full min-h-[calc(100vh-10rem)] flex-col">
          <div className="grid flex-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.4em] text-[var(--sand)] backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--teal-soft)] animate-pulse" />
                Engineering Excellence
              </div>
              <KineticHeading
                as="h1"
                className="mt-8 font-serif text-[2.8rem] leading-[1.1] text-white sm:text-[4.5rem] lg:text-[5.5rem] text-wrap-balance"
                lines={[
                  ["Building Modern"],
                  [{ key: "accent", node: <span className="text-[var(--teal-soft)] italic">Healthcare Infrastructure</span> }],
                  ["for the Future"],
                ]}
              />
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                We design, construct, renovate, and equip world-class healthcare facilities with precision engineering and healthcare-compliant infrastructure solutions.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/appointments"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--sand)] px-10 py-5 font-bold text-[var(--ink-deep)] transition-all hover:scale-105 hover:bg-white"
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-5 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>

              {/* Technical Measurement (Visual Detail) */}
              <div className="mt-12 hidden lg:block">
                <div className="measurement-line text-white/20 w-full" />
                <div className="mt-2 flex justify-between text-[8px] uppercase tracking-widest text-white/30">
                  <span>Site Analysis: Active</span>
                  <span>Structural Integrity: 100%</span>
                  <span>Phase: Delivery</span>
                </div>
              </div>
            </div>

            <div className="order-1 flex-1 overflow-hidden rounded-[2.5rem] border border-white/5 bg-[rgba(255,255,255,0.02)] lg:order-2 lg:h-[750px] relative technical-corner group/hero">
              {/* This is the "Real Picture" container */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover/hero:scale-105">
                 <Image src="/images/image_4.jpeg" alt="Hospital construction" fill className="object-cover" priority />
              </div>
              
              {/* 3D "Digital Twin" Overlay */}
              <div className="absolute inset-0 z-10 opacity-60 mix-blend-screen pointer-events-none">
                 <MedicalHeroScene />
              </div>

              {/* Optional Blueprint Overlay (Subtle) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/80 via-transparent to-transparent z-20" />
              <div className="absolute bottom-10 left-10 z-30">
                 <div className="p-6 glass-panel rounded-2xl border-white/10 bg-black/20 text-white backdrop-blur-xl max-w-xs">
                    <p className="text-[10px] uppercase tracking-widest text-[var(--teal-soft)]">Infrastructure Monitoring</p>
                    <h3 className="mt-2 text-xl font-serif">Structural Analysis</h3>
                    <p className="mt-2 text-xs text-white/50">Integrity Validated • Real-time Data</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {hospitalStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-serif text-white"><Odometer value={stat.value} /></p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Departments — The "Construction Units" */}
      <section className="mt-24 relative">
        <span className="section-index" aria-hidden="true">01</span>
        <Reveal width="100%">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between px-4 sm:px-8">
            <div className="max-w-2xl">
              <p className="section-label eyebrow-line">Technical Solutions</p>
              <KineticHeading
                as="h2"
                className="mt-4 font-serif text-4xl sm:text-7xl leading-tight"
                lines={[["Construction"], ["Specialties."]]}
              />
            </div>
            <Link href="/departments" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[var(--teal-strong)]">
               Explore All Units <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 p-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {departmentData.map((dept, i) => (
            <Reveal key={dept.id} delay={i * 0.1}>
              <MagneticTiltCard className={`group rounded-[2.5rem] border border-[rgba(16,39,43,0.06)] bg-white/60 p-8 sm:p-10 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}>
                <h3 className="text-2xl font-serif leading-tight">{dept.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{dept.description}</p>

                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                   <span className="text-[10px] font-bold tracking-widest text-[var(--teal-soft)] uppercase">Unit 0{i + 1}</span>
                   <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-[var(--teal-strong)] transition-colors" />
                </div>
              </MagneticTiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Projects Portfolio — Horizontal Scroll ala Addakus */}
      <section className="mt-40 overflow-hidden relative">
         <span className="section-index" aria-hidden="true">02</span>
         <Reveal width="100%">
            <div className="px-4 sm:px-8 flex items-end justify-between mb-12">
               <div>
                  <p className="section-label mb-4">Selected Works</p>
                  <KineticHeading as="h2" className="font-serif text-4xl sm:text-7xl" text="Turnkey Projects." />
               </div>
            </div>
         </Reveal>

         {/* Horizontal Scroll Container */}
         <div className="flex gap-4 sm:gap-8 overflow-x-auto px-4 sm:px-8 pb-12 hide-scrollbar snap-x">
            {[
               { id: 1, title: "Surgical Suite 01", img: "/images/image_1.jpeg", type: "Full Furnishing" },
               { id: 2, title: "Technical Wing 02", img: "/images/image_12.jpeg", type: "Technical Build" },
               { id: 3, title: "Infrastructure Site 03", img: "/images/image_4.jpeg", type: "Management" },
               { id: 4, title: "Modular Clinic 04", img: "/images/image_15.jpeg", type: "Furnishing" },
               { id: 5, title: "Facility Upgrade 05", img: "/images/image_10.jpeg", type: "Equipping" },
               { id: 6, title: "Diagnostic Center 06", img: "/images/image_22.jpeg", type: "Design & Build" },
            ].map((proj, i) => (
               <Reveal key={proj.id} delay={i * 0.1}>
                  <div className="group relative w-[85vw] sm:w-[450px] lg:w-[500px] flex-shrink-0 overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] technical-corner snap-center">
                     <div className="relative h-[500px] sm:h-[600px] w-full">
                        <Image src={proj.img} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/90 via-transparent to-transparent p-8 sm:p-12 flex flex-col justify-end">
                        <p className="text-[10px] uppercase tracking-widest text-[var(--teal-soft)] mb-2">{proj.type}</p>
                        <h3 className="text-2xl sm:text-3xl font-serif text-white">{proj.title}</h3>
                        <div className="mt-6 flex items-center justify-between">
                           <span className="text-xs text-white/50">Confidential Project Code: {proj.id}00X</span>
                           <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--sand)] hover:text-[var(--ink-deep)] transition-all">
                              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                           </div>
                        </div>
                     </div>
                  </div>
               </Reveal>
            ))}
         </div>
      </section>



      {/* Global Infrastructure Gallery — More Images */}
      <section className="mt-40 px-4 sm:px-8 relative">
         <span className="section-index" aria-hidden="true">03</span>
         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="max-w-2xl">
               <p className="section-label eyebrow-line">Project Sites</p>
               <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-7xl" text="Global Gallery." />
            </div>
            <p className="max-w-md text-sm text-[var(--muted)] leading-relaxed">
               A visual journey through our active healthcare construction sites, from modular clinical units to complex trauma center infrastructure.
            </p>
         </div>

         <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:grid-rows-2">
            {[
               { img: "/images/image_3.jpeg", span: "lg:col-span-2 lg:row-span-2" },
               { img: "/images/image_5.jpeg", span: "" },
               { img: "/images/image_6.jpeg", span: "" },
               { img: "/images/image_7.jpeg", span: "lg:col-span-2" },
               { img: "/images/image_8.jpeg", span: "" },
               { img: "/images/image_9.jpeg", span: "" },
            ].map((item, i) => (
               <Reveal key={i} delay={i * 0.1}>
                  <div className={`relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] group ${item.span} h-[200px] sm:h-[300px] lg:h-full min-h-[200px]`}>
                     <Image src={item.img} alt="Construction site" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                     <div className="absolute top-4 left-4 h-8 w-8 rounded-full border border-white/20 bg-black/20 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <Scan className="h-4 w-4" />
                     </div>
                  </div>
               </Reveal>
            ))}
         </div>
      </section>

      {/* Appointment & Doctors Section (Dark Mode Accent) */}
      <section className="mt-40 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] rounded-[2.5rem] sm:rounded-[4rem] bg-[var(--ink-deep)] p-8 sm:p-20 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(90deg,transparent,rgba(143,184,176,0.05))]" />
        <div className="relative z-10 flex flex-col justify-center">
          <p className="section-label eyebrow-line text-[var(--sand)]">Strategic Partnership</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-7xl" text="Ready to build?" />
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Connect with our technical lead specialists to discuss your clinical infrastructure roadmap.
          </p>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
              <ShieldCheck className="mb-4 h-8 w-8 text-[var(--teal-soft)]" />
              <h4 className="font-semibold text-xl">Turnkey Build</h4>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">End-to-end facility development from ground-breaking to equipment testing.</p>
            </div>
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
              <Activity className="mb-4 h-8 w-8 text-[var(--teal-soft)]" />
              <h4 className="font-semibold text-xl">Infrastructure Care</h4>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">24/7 management of critical life-support and facility systems.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <AppointmentBooking />
        </div>
      </section>


    </main>
  );
}