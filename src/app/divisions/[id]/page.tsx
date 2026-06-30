import { divisionData } from "@/lib/site-content";
import Image from "next/image";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import { Activity, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DivisionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const division = divisionData.find((d) => d.id === id);

  if (!division) {
    notFound();
  }

  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      <section className="panel-dark relative overflow-hidden rounded-2xl sm:rounded-[3rem] text-white">
        <div className="absolute inset-0">
          <Image src={division.image} alt={division.title} fill className="object-cover opacity-25 mix-blend-overlay" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)] via-[var(--ink-deep)]/70 to-transparent" />
        </div>
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-10">
           <div className="drift absolute left-[8%] top-[10%] h-64 w-64 rounded-full bg-[rgba(249,115,22,0.08)] blur-[100px]" />
        </div>
        
        <div className="relative z-10 p-8 sm:p-16">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="section-label eyebrow-line text-[var(--accent)]">Engineering Division</p>
              <KineticHeading
                as="h1"
                className="mt-6 font-serif text-5xl sm:text-8xl"
                lines={[[division.title], [{ key: "solutions", node: <span className="text-[var(--accent)]">Solutions.</span> }]]}
              />
              <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/60">
                {division.description} Epicshield Infrastructure delivers world-class healthcare infrastructure and turnkey clinical engineering for {division.title} projects.
              </p>
              
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                 <Link href="/contact" className="rounded-full bg-[var(--accent)] px-10 py-4 font-bold text-white transition-transform hover:scale-105">
                   Request Consult
                 </Link>
                 <Link href="/services" className="rounded-full border border-white/20 bg-white/5 px-10 py-4 font-bold text-white hover:bg-white/10">
                   View Solutions
                 </Link>
              </div>
            </div>

            <div className="relative h-[350px] rounded-2xl border border-white/10 overflow-hidden sm:rounded-[3rem]">
              <Image
                src={division.image}
                alt={division.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="mt-12 grid gap-8 lg:grid-cols-3 relative">
         <MagneticTiltCard className="rounded-[2.5rem] bg-white p-8 border border-gray-50">
            <Activity className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h3 className="text-2xl font-bold">Clinical Workflows</h3>
            <p className="mt-4 text-[var(--muted)]">Integration of smart clinical systems, sterile isolation environments, and patient-centric room zoning.</p>
         </MagneticTiltCard>
         <MagneticTiltCard className="rounded-[2.5rem] bg-white p-8 border border-gray-50">
            <ShieldCheck className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h3 className="text-2xl font-bold">Regulatory Compliance</h3>
            <p className="mt-4 text-[var(--muted)]">Adhering to strict GSA, MOH, and international health facility regulatory licensing guidelines.</p>
         </MagneticTiltCard>
         <MagneticTiltCard className="rounded-[2.5rem] bg-white p-8 border border-gray-50">
            <Zap className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h3 className="text-2xl font-bold">Clinical Commissioning</h3>
            <p className="mt-4 text-[var(--muted)]">Rapid verification and certification of medical equipment and gas lines for immediate clinical readiness.</p>
         </MagneticTiltCard>
      </section>
      
    </main>
  );
}
