import { servicesData } from "@/lib/site-content";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Epicshield Surfaces`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">
      {/* Hero */}
      <section className="panel-dark relative overflow-hidden rounded-[2.5rem] p-8 sm:p-16 text-white">
        <div className="absolute inset-0">
          <Image src={service.images.hero} alt={service.title} fill className="object-cover opacity-50" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)] via-[var(--ink-deep)]/60 to-transparent" />
        </div>
        <div className="blueprint-grid blueprint-grid-live absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <p className="section-label eyebrow-line text-[var(--accent)]">{service.eyebrow}</p>
          <KineticHeading as="h1" className="mt-6 font-serif text-4xl sm:text-7xl" text={service.title} />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            {service.description}
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-10 py-4 font-bold text-white transition-transform hover:scale-105">
              Start Project Consult <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-4 font-bold text-white hover:bg-white/10">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="mt-16 relative">
        <span className="section-index" aria-hidden="true">01</span>
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">Capabilities</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="What we deliver." />
          <p className="mt-4 text-lg text-[var(--muted)]">
            Our {service.title.toLowerCase()} offering covers every phase — from planning through commissioning — with specialized expertise at every step.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.subServices.map((sub) => (
            <MagneticTiltCard key={sub} className="panel-ivory rounded-[2rem] border border-gray-50 p-6 sm:p-8 h-full">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/5">
                <Check className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-base font-bold text-[var(--ink-deep)] leading-snug">{sub}</h3>
            </MagneticTiltCard>
          ))}
        </div>
      </section>

      {/* Feature Section — Image Left, Text Right */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="relative h-72 sm:h-96 lg:h-full min-h-[320px] rounded-[2.5rem] overflow-hidden">
          <Image src={service.images.feature01} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="panel-ivory rounded-[2.5rem] p-10 sm:p-14 flex flex-col justify-center">
          <KineticHeading as="h3" className="font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="Our Approach." />
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            Every {service.title.toLowerCase()} project is executed with precision engineering, strict quality control, and deep clinical insight — ensuring your infrastructure meets the highest standards of safety, functionality, and durability.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <ShieldCheck className="h-6 w-6 text-[var(--accent)] shrink-0" />
            <span className="text-sm text-[var(--muted)]">100% compliant with MOH, GSA, and WHO standards</span>
          </div>
        </div>
      </section>

      {/* Feature Section — Text Left, Image Right (alternating) */}
      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="panel-ivory rounded-[2.5rem] p-10 sm:p-14 flex flex-col justify-center order-last lg:order-first">
          <KineticHeading as="h3" className="font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="Why Epicshield." />
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            With decades of combined experience in healthcare construction and clinical engineering, our team delivers turnkey solutions that integrate seamlessly with your operational workflow — from the first site assessment to final handover.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--accent)] hover:underline">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative h-72 sm:h-96 lg:h-full min-h-[320px] rounded-[2.5rem] overflow-hidden order-first lg:order-last">
          <Image src={service.images.feature02} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>

      {/* Gallery */}
      {service.gallery.length > 0 && (
        <section className="mt-16">
          <div className="max-w-2xl">
            <p className="section-label eyebrow-line text-[var(--slate-strong)]">Project Gallery</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-3xl sm:text-5xl text-[var(--ink-deep)]" text="In the field." />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((img, i) => (
              <div key={i} className="relative h-64 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
                <Image src={img} alt={`${service.title} — ${i + 1}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-16 rounded-[2.5rem] bg-[var(--ink-deep)] p-10 sm:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.08),transparent_70%)]" />
        <div className="relative z-10 max-w-2xl">
          <ShieldCheck className="h-12 w-12 text-[var(--slate-soft)] mb-6" />
          <KineticHeading as="h2" className="text-3xl sm:text-5xl font-serif" text="Ready to get started?" />
          <p className="mt-4 text-lg text-white/60">
            Contact our team to discuss your {service.title.toLowerCase()} needs and discover how Epicshield delivers results.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-10 py-4 font-bold text-white transition-transform hover:scale-105">
              Start Project Consult <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-4 font-bold text-white hover:bg-white/10">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
