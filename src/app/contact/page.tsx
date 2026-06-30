import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Scan, Activity, Building2, ClipboardList } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import { contact, csr } from "@/lib/brochure-content";

export default function ContactPage() {
  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">

      {/* ── Contact Hero ── */}
      <section className="mt-6 panel-dark relative overflow-hidden rounded-[3rem] p-8 sm:p-16 text-white">
        <div className="blueprint-grid absolute inset-0 opacity-[0.04] pointer-events-none" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label eyebrow-line text-[var(--accent)]">Get in Touch</p>
            <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-6xl" text="Creating Spaces to Save Lives." />
             <p className="mt-6 text-lg leading-relaxed text-white/60">
               Ready to start your healthcare facility project? Reach out to our clinical engineering team for a consultation.
             </p>
            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Scan className="h-5 w-5 text-[var(--slate-soft)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Address</p>
                  <p className="text-sm font-medium">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Activity className="h-5 w-5 text-[var(--slate-soft)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-sm font-medium hover:text-[var(--slate-soft)] transition-colors">{contact.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <ArrowRight className="h-5 w-5 text-[var(--slate-soft)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-sm font-medium hover:text-[var(--slate-soft)] transition-colors">{contact.email}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Scan className="h-5 w-5 text-[var(--slate-soft)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Website</p>
                  <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[var(--slate-soft)] transition-colors">{contact.website}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-8 sm:p-12 backdrop-blur-xl min-h-[480px] flex flex-col justify-between">
            {/* Blueprint grid */}
            <div className="blueprint-grid absolute inset-0 opacity-[0.07]" />

            {/* Technical corner brackets */}
            {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2", "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"].map((pos) => (
              <div key={pos} className={`absolute ${pos} w-10 h-10 border-[var(--accent)]/25`} />
            ))}

            {/* Blueprint board illustration */}
            <Image
              src="/images/image_17.jpeg"
              alt="Technical blueprint board"
              className="absolute right-0 bottom-0 w-96 h-80 opacity-[0.15] pointer-events-none object-cover"
              width={400}
              height={320}
            />

            <div className="relative z-10">
              {/* Live status chip */}
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 border border-green-500/20 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Ready for Your Project
              </div>

              {/* Hero text */}
              <p className="font-serif text-[2rem] leading-[1.1] text-white sm:text-[2.8rem]">
                Start Your<br />
                <span className="text-[var(--accent)] italic">Blueprint.</span>
              </p>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
                Every great medical facility begins with clinical layout planning. Let us build yours.
              </p>


            </div>

            <div className="relative z-10 mt-10">
              <Image
                src="/images/aboutus.png"
                alt="About Epicshield"
                width={2251}
                height={1207}
                className="w-full rounded-xl border border-white/10 object-cover"
              />
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-8">
              <Link
                href={`mailto:${contact.email}`}
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-wider">
                  Submit Your Brief
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.3em] text-white/20">
                We reply within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSR ── */}
      
      <section className="mt-20 relative">
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">Corporate Responsibility</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="Building Beyond Bricks." />
        </div>
         <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
           At Epicshield Infrastructure, we believe that building hospital infrastructure is only part of our mission. We are equally committed to clinical excellence, healthcare access, and saving lives.
         </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {csr.map((item) => (
            <MagneticTiltCard key={item.title} className="panel-ivory rounded-[2rem] border border-gray-100 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--slate-strong)]/5">
                <ShieldCheck className="h-6 w-6 text-[var(--slate-strong)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--ink-deep)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
            </MagneticTiltCard>
          ))}
        </div>
      </section>
      

      {/* ── CTA ── */}
      
      <section className="mt-20 panel-ivory rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.08),transparent_70%)]" />
        <div className="relative z-10">
          <KineticHeading as="h2" className="font-serif text-4xl sm:text-6xl text-[var(--ink-deep)]" text="Let's work together." />
           <p className="mt-6 max-w-xl mx-auto text-lg text-[var(--muted)]">
             Have a project in mind? Reach out and let&apos;s discuss how Epicshield can bring your healthcare facility vision to life.
           </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-[var(--ink-deep)] hover:bg-gray-50 transition-all"
            >
              Call {contact.phone}
            </a>
          </div>
        </div>
      </section>
      
    </main>
  );
}
