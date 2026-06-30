import type { Metadata } from "next";
import { ArrowRight, MapPin, Globe, Building2, Microscope, Cpu, Network, Users } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "International Exposure | Epicshield Surfaces",
  description:
    "Global learning from Dubai healthcare construction visits, China hospital visits, CHCC conference, and strategic medical manufacturer partnerships.",
};

const keyLearnings = [
  "Hospital Construction Systems",
  "Modular Healthcare Infrastructure",
  "Medical Technology",
  "Future Healthcare Trends",
];

const chccTopics = [
  "Smart Hospitals",
  "Digital Healthcare",
  "Healthcare Innovation",
  "Hospital Automation",
  "Future Infrastructure",
];

const manufacturerVisits = [
  { icon: Microscope, label: "Medical Equipment Manufacturers" },
  { icon: Cpu, label: "Hospital Technology Providers" },
  { icon: Building2, label: "Healthcare Infrastructure Companies" },
  { icon: Network, label: "Building Product Manufacturers" },
];

export default function InternationalPage() {
  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      {/* Hero */}
      <section className="panel-dark relative overflow-hidden rounded-2xl px-6 py-14 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-20">
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />
        <div className="absolute inset-0">
          <Image src="/images/image_20.jpeg" alt="International study tour" fill className="object-cover opacity-20" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)] via-[var(--ink-deep)]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <Globe className="h-10 w-10 text-[var(--accent)] mb-6" />
          <p className="section-label eyebrow-line text-[var(--accent)]">Global Perspective</p>
          <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-7xl" text="International Exposure." />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Learning from global leaders in healthcare construction, medical technology, and hospital infrastructure — bringing world-class standards to every project.
          </p>
        </div>
      </section>

      {/* Dubai Visits */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="relative h-72 sm:h-96 lg:h-full min-h-[320px] rounded-[2.5rem] overflow-hidden">
          <Image src="/images/image_21.jpeg" alt="Dubai healthcare construction visit" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="panel-ivory rounded-[2.5rem] p-10 sm:p-14 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-[var(--accent)]" />
            <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">Dubai, UAE</span>
          </div>
          <KineticHeading as="h2" className="font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="Dubai Healthcare Construction Visits." />
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            Our team travelled to Dubai to explore cutting-edge modular hospital construction systems and smart healthcare technologies. These visits inform our approach to delivering rapid-deployment, high-quality medical facilities that meet international benchmarks.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Building2 className="h-6 w-6 text-[var(--accent)] shrink-0" />
            <span className="text-sm text-[var(--muted)]">Modular construction systems & smart hospital automation</span>
          </div>
        </div>
      </section>

      {/* China Visit */}
      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="panel-ivory rounded-[2.5rem] p-10 sm:p-14 flex flex-col justify-center order-last lg:order-first">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-[var(--accent)]" />
            <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">China</span>
          </div>
          <KineticHeading as="h2" className="font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="China Healthcare Visit." />
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            A deep-dive into China&apos;s advanced healthcare infrastructure ecosystem, exploring medical technology innovations and hospital construction methodologies.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {keyLearnings.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <div className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                <span className="text-sm font-medium text-[var(--ink-deep)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-72 sm:h-96 lg:h-full min-h-[320px] rounded-[2.5rem] overflow-hidden order-first lg:order-last">
          <Image src="/images/image_22.jpeg" alt="China healthcare visit" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>

      {/* CHCC Conference */}
      <section className="mt-16 relative">
        <span className="section-index" aria-hidden="true">01</span>
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">Conference</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="China Hospital Construction Conference." />
          <p className="mt-4 text-lg text-[var(--muted)]">
            Participation in the premier healthcare construction conference in Asia, connecting with global innovators and exploring the future of hospital development.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chccTopics.map((topic) => (
            <MagneticTiltCard key={topic} className="panel-ivory rounded-[2rem] border border-gray-50 p-6 sm:p-8 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/5">
                <div className="h-5 w-5 text-[var(--accent)] flex items-center justify-center font-bold text-sm">✓</div>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--ink-deep)]">{topic}</h3>
              </div>
            </MagneticTiltCard>
          ))}
        </div>
      </section>

      {/* Manufacturer Visits */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2 relative">
        <div className="panel-dark rounded-[2.5rem] p-10 sm:p-14 text-white overflow-hidden relative">
          <div className="blueprint-grid absolute inset-0 opacity-5 pointer-events-none" />
          <div className="relative z-10">
            <Users className="h-10 w-10 text-[var(--accent)] mb-6" />
            <KineticHeading as="h2" className="font-serif text-3xl sm:text-5xl" text="Medical Manufacturer Visits." />
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Building strategic partnerships with global leaders in medical equipment, hospital technology, and healthcare infrastructure to bring world-class solutions to our clients.
            </p>
            <div className="mt-10 space-y-4">
              {manufacturerVisits.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 px-5 py-4 backdrop-blur-sm">
                  <item.icon className="h-5 w-5 text-[var(--accent)] shrink-0" />
                  <span className="text-base font-medium text-white/90">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative h-72 sm:h-96 lg:h-full min-h-[320px] rounded-[2.5rem] overflow-hidden">
          <Image src="/images/image_24.jpeg" alt="Medical manufacturer visit" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 panel-ivory rounded-2xl p-10 sm:rounded-[3rem] sm:p-16 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.08),transparent_70%)]" />
        <div className="relative z-10">
          <KineticHeading as="h2" className="font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="Bringing global standards to your project." />
          <p className="mt-6 max-w-xl mx-auto text-lg text-[var(--muted)]">
            Every insight gained from international exposure is applied directly to our healthcare infrastructure projects.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-transform hover:scale-105">
              Start a Project <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-[var(--ink-deep)] hover:bg-gray-50 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
