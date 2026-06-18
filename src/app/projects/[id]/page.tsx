import { projectData } from "@/lib/site-content";
import { ArrowRight, MapPin, Activity, CheckCircle2, Zap } from "lucide-react";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import { ProjectGallery } from "@/components/project-gallery";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const gallery = (project as any).gallery || [];

  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      {/* Immersive Hero */}
      <section className="panel-dark relative overflow-hidden rounded-[3rem] text-white">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full opacity-10" />
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0">
            <Image src={project.image} alt={project.title} fill className="object-cover opacity-30 mix-blend-overlay" sizes="100vw" />
           <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)] via-[var(--ink-deep)]/60 to-transparent" />
        </div>
        
        <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-2 w-2 rounded-full ${project.status === "Completed" ? "bg-green-400" : "bg-blue-400 animate-pulse"}`} />
            <span className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">{project.status} Project</span>
          </div>
          <KineticHeading
            as="h1"
            className="font-serif text-5xl sm:text-8xl leading-tight"
            text={project.title}
          />
          <div className="mt-10 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
                 <MapPin className="h-4 w-4 text-[var(--accent)]" />
                 {project.location}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
                 <Zap className="h-4 w-4 text-[var(--accent)]" />
                 {project.type}
              </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="mt-12 grid gap-8 lg:grid-cols-3 relative">
         <span className="section-index" aria-hidden="true" style={{ color: "var(--ink-deep)", opacity: 0.04 }}>01</span>
         <MagneticTiltCard className="panel-ivory rounded-[2.5rem] p-10">
            <KineticHeading as="h3" className="text-3xl font-serif mb-8 text-[var(--ink-deep)]" text="Core Statistics." />
            <div className="space-y-8">
               <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                  <span className="text-xs uppercase tracking-widest text-[var(--muted)]">Project Capacity</span>
                   <span className="text-xl font-bold text-[var(--accent)]">{project.stats.capacity}</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                   <span className="text-xs uppercase tracking-widest text-[var(--muted)]">Execution Phase</span>
                   <span className="text-xl font-bold text-[var(--accent)]">{project.stats.duration}</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                   <span className="text-xs uppercase tracking-widest text-[var(--muted)]">Operational Grade</span>
                   <span className="text-xl font-bold text-[var(--accent)]">{project.stats.efficiency}</span>
               </div>
            </div>
         </MagneticTiltCard>

         <MagneticTiltCard className="lg:col-span-2 panel-ivory rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
                <Activity className="h-12 w-12 text-[var(--accent)] opacity-20" />
            </div>
            <KineticHeading as="h3" className="text-3xl font-serif mb-6 text-[var(--ink-deep)]" text="Mission Narrative." />
             <p className="text-lg leading-relaxed text-[var(--muted)]">
                This project represents a critical milestone in African infrastructure development. By integrating advanced {project.type.toLowerCase()} with precision structural engineering, we delivered a facility that exceeds international standards. The {project.title} serves as a benchmark for future high-performance construction projects in the region.
             </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
               <div className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <p className="text-sm font-medium">Full Regulatory Integration</p>
               </div>
               <div className="flex gap-4 items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <p className="text-sm font-medium">Sustainable Energy Infrastructure</p>
               </div>
                <div className="flex gap-4 items-start">
                   <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                   <p className="text-sm font-medium">Advanced Zone Engineering</p>
                </div>
                <div className="flex gap-4 items-start">
                   <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                   <p className="text-sm font-medium">Smart Building Systems</p>
                </div>
            </div>
         </MagneticTiltCard>
      </section>

      {/* Project Gallery */}
      {gallery.length > 0 && (
        <section className="mt-20">
          <ProjectGallery images={gallery} title={`${project.title} — Site Photos`} />
        </section>
      )}

      {/* CTA */}
      <section className="mt-20 rounded-[3rem] bg-[var(--ink-deep)] p-12 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent_70%)]" />
         <span className="section-index" aria-hidden="true" style={{ opacity: 0.04, color: "var(--accent)" }}>02</span>
          <KineticHeading as="h2" className="text-3xl sm:text-5xl font-serif mb-8 relative z-10" text="Scale your construction vision." />
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-10 py-4 font-bold text-white transition-transform hover:scale-105 relative z-10">
            Start a Similar Project <ArrowRight className="h-5 w-5" />
         </Link>
      </section>
    </main>
  );
}
