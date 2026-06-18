import { serviceCards } from "@/lib/site-content";
import { ShieldCheck, Zap, Activity } from "lucide-react";
import { NeuralNetworkBg } from "@/components/neural-network-bg";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviceImages: Record<string, string> = {
  assessment: "/images/image_9.jpeg",
  "design-build": "/images/image_10.jpeg",
  execution: "/images/image_11.jpeg",
  renovation: "/images/image_13.jpeg",
  infrastructure: "/images/image_14.jpeg",
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = serviceCards.find((s) => s.href.includes(id));

  if (!service) {
    notFound();
  }

  const heroImage = serviceImages[id] || "/images/image_4.jpeg";

  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      <section className="panel-dark relative overflow-hidden rounded-[3rem] p-8 sm:p-16 text-white">
        <NeuralNetworkBg className="absolute inset-0 h-full w-full opacity-10" />
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0">
          <Image src={heroImage} alt={service.title} fill className="object-cover opacity-20 mix-blend-overlay" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)] via-[var(--ink-deep)]/70 to-transparent" />
        </div>
        
        <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="section-label eyebrow-line text-[var(--accent)]">{service.eyebrow}</p>
            <KineticHeading
              as="h1"
              className="mt-6 font-serif text-5xl sm:text-8xl"
              lines={[[service.title], [{ key: "mastery", node: <span className="text-[var(--accent)]">Mastery.</span> }]]}
            />
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/60">
              {service.copy} Our approach to {service.title.toLowerCase()} combines precision engineering with proven methodology, ensuring your infrastructure is built to last.
            </p>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="rounded-full bg-[var(--accent)] px-10 py-4 font-bold text-white transition-transform hover:scale-105">
                 Start Project Consult
               </Link>
               <Link href="/projects" className="rounded-full border border-white/20 bg-white/5 px-10 py-4 font-bold text-white hover:bg-white/10">
                 View Projects
               </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <Image
              src={heroImage}
              alt={service.title}
              fill
              className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/40 to-transparent" />
          </div>
        </div>
      </section>

      
      <section className="mt-12 grid gap-8 lg:grid-cols-3 relative">
         <span className="section-index" aria-hidden="true" style={{ color: "var(--ink-deep)", opacity: 0.04 }}>01</span>
         <MagneticTiltCard className="panel-ivory rounded-[2.5rem] p-8 border border-gray-50">
            <ShieldCheck className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h3 className="text-2xl font-bold">Standardized Safety</h3>
            <p className="mt-4 text-[var(--muted)]">Adhering to international construction and structural integrity standards.</p>
         </MagneticTiltCard>
         <MagneticTiltCard className="panel-ivory rounded-[2.5rem] p-8 border border-gray-50">
            <Zap className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h3 className="text-2xl font-bold">Rapid Execution</h3>
            <p className="mt-4 text-[var(--muted)]">Proprietary construction workflows that reduce project timelines significantly.</p>
         </MagneticTiltCard>
         <MagneticTiltCard className="panel-ivory rounded-[2.5rem] p-8 border border-gray-50">
            <Activity className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h3 className="text-2xl font-bold">Live Monitoring</h3>
            <p className="mt-4 text-[var(--muted)]">Embedded structural health sensors for long-term infrastructure stability.</p>
         </MagneticTiltCard>
      </section>
      
    </main>
  );
}
