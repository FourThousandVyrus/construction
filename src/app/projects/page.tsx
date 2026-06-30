import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Activity, Clock, Zap } from "lucide-react";
import { projectData } from "@/lib/site-content";
import { caseStudy } from "@/lib/brochure-content";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { MagneticCard } from "@/components/magnetic-card";
import { KineticHeading } from "@/components/kinetic-heading";

export default function ProjectsPage() {
  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      {/* Hero Section */}
      <section className="panel-dark relative overflow-hidden rounded-2xl px-6 py-12 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-20">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full opacity-20" />
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-40">
           <div className="drift absolute left-[8%] top-[10%] h-64 w-64 rounded-full bg-[rgba(143,184,176,0.14)] blur-[100px]" />
           <div className="drift absolute bottom-[12%] right-[10%] h-80 w-80 rounded-full bg-[rgba(249,115,22,0.06)] blur-[120px] [animation-delay:-4s]" />
        </div>

         <div className="relative z-10 max-w-3xl">
           <p className="section-label eyebrow-line text-[var(--accent)]">Portfolio of Excellence</p>
           <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-7xl" lines={[["Hospital"], ["Case Studies."]]} />
           <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
             A look into our most complex healthcare facility developments and the world-class clinical infrastructure we have built.
           </p>
         </div>
      </section>

      {/* Projects Grid */}
      
      <section className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <MagneticCard
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-[rgba(16,39,43,0.08)] bg-white/60 backdrop-blur-sm transition-shadow hover:shadow-2xl"
          >
            {/* Image Section with Scan Wave */}
            <div className="relative h-64 w-full overflow-hidden">
               <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/80 via-transparent to-transparent" />

               {/* Scan-wave overlay on hover */}
               <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div
                   className="absolute inset-0"
                   style={{
                     background: "linear-gradient(180deg, transparent 45%, rgba(249,115,22,0.08) 50%, transparent 55%)",
                     backgroundSize: "100% 200%",
                     animation: "scan 2s linear infinite",
                   }}
                 />
               </div>

               {/* Status Tag */}
               <div className="absolute left-6 top-6 z-30">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border ${
                    project.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                    project.status === "In Progress" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                    "bg-orange-500/10 text-orange-400 border-orange-500/20"
                  }`}>
                    <div className={`h-1.5 w-1.5 rounded-full ${
                       project.status === "Completed" ? "bg-green-400" :
                       project.status === "In Progress" ? "bg-blue-400 animate-pulse" :
                       "bg-orange-400"
                    }`} />
                    {project.status}
                  </div>
               </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-6 p-8">
               <div>
                  <div className="flex items-center gap-2 text-[var(--muted)] mb-2">
                     <MapPin className="h-3 w-3" />
                     <span className="text-[10px] uppercase tracking-widest">{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[var(--ink-deep)] leading-tight">{project.title}</h3>
                  <p className="mt-3 text-xs uppercase tracking-widest text-[var(--slate-strong)] font-semibold">{project.type}</p>
               </div>

               {/* Floating Stats */}
                <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-6 sm:gap-4">
                   <div className="flex flex-col gap-1">
                      <Activity className="h-3.5 w-3.5 text-[var(--slate-soft)] sm:h-4 sm:w-4" />
                      <span className="text-[9px] text-[var(--muted)] sm:text-[10px]">Capacity</span>
                      <span className="text-xs font-bold text-[var(--ink-deep)] sm:text-sm">{project.stats.capacity}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <Clock className="h-3.5 w-3.5 text-[var(--slate-soft)] sm:h-4 sm:w-4" />
                      <span className="text-[9px] text-[var(--muted)] sm:text-[10px]">Duration</span>
                      <span className="text-xs font-bold text-[var(--ink-deep)] sm:text-sm">{project.stats.duration}</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <Zap className="h-3.5 w-3.5 text-[var(--slate-soft)] sm:h-4 sm:w-4" />
                      <span className="text-[9px] text-[var(--muted)] sm:text-[10px]">Efficiency</span>
                      <span className="text-xs font-bold text-[var(--ink-deep)] sm:text-sm">{project.stats.efficiency}</span>
                   </div>
                </div>

               <div className="flex items-center justify-between pt-2">
                  <Link href={`/projects/${project.id}`} className="text-xs font-bold uppercase tracking-widest text-[var(--slate-strong)] hover:underline">
                     View Case Study →
                  </Link>
                  <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                     <ArrowRight className="h-4 w-4 text-[var(--slate-strong)]" />
                  </div>
               </div>
            </div>
          </MagneticCard>
        ))}
      </section>
      

      {/* ── Featured Case Study ── */}
      
      <section className="mt-20 relative">
        <div className="panel-dark relative overflow-hidden rounded-2xl p-8 sm:rounded-[3rem] sm:p-16 text-white">
          <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <p className="section-label eyebrow-line text-[var(--accent)]">Featured Case Study</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text={caseStudy.title} />
            <p className="mt-2 text-sm text-[var(--slate-soft)] font-semibold">{caseStudy.location}</p>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-500/20">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              {caseStudy.status}
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70">{caseStudy.objective}</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.details.map((detail) => (
                <div key={detail} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-[var(--slate-soft)] shrink-0" />
                  <span className="text-sm text-white/80">{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-widest text-[var(--slate-soft)]">Outcome</p>
              <p className="mt-2 text-base leading-relaxed text-white/80">{caseStudy.outcome}</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      
      <section className="mt-16 panel-ivory rounded-2xl p-8 sm:rounded-[3rem] sm:p-16 relative overflow-hidden">
         <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.08),transparent_70%)]" />
         <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
             <div>
                <KineticHeading as="h2" className="font-serif text-4xl sm:text-6xl text-[var(--ink-deep)]" text="Have a project vision?" />
                <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                   Whether you&#39;re starting from scratch or expanding an existing facility, our project leaders are ready to engineer your success.
                </p>
               <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                   <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-transform hover:scale-105">
                     Initiate Consultation
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-[var(--ink-deep)] hover:bg-gray-50 transition-all">
                     Explore Services
                  </Link>
               </div>
            </div>
             <div className="relative h-[350px] overflow-hidden rounded-[2.5rem]">
                <Image src="/images/image_16.jpeg" alt="Construction project planning" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
             </div>
         </div>
      </section>
      
    </main>
  );
}
