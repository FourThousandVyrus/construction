import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, Scan, Building2, Heart, Users, MapPin, Check, ChevronDown } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";
import { Odometer } from "@/components/odometer";
import { TeamAvatar } from "@/components/ui/team-avatar";
import { LiveSiteFeed } from "@/components/live-site-feed";
import { ScanlineSweep } from "@/components/scanline-sweep";
import { MarqueeTicker } from "@/components/marquee-ticker";
import { profile, services, caseStudy, team, company } from "@/lib/brochure-content";
import { liveSiteImages } from "@/lib/site-content";



const serviceIcons = [ShieldCheck, Activity, Scan, Building2];

const highlights = [
  { icon: ShieldCheck, label: "MOH-Compliant", desc: "International clinical safety & quality standards" },
  { icon: Users, label: "Clinical Advisory", desc: "Physician & nursing workflow integrated design" },
  { icon: MapPin, label: "Pan-African Vision", desc: "Expanding to 5 additional countries by 2030" },
  { icon: Building2, label: "Specialized Builds", desc: "Cleanrooms, medical gas & lead-lined rooms" },
];

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col">

      {/* ── HERO: Full-screen bold with layered imagery ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex flex-col">
        {/* Background layers */}
        <div className="absolute inset-0">
          <Image
            src="/images/image_4.jpeg"
            alt="Epicshield construction site"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)]/95 via-[var(--ink-deep)]/70 to-[var(--ink-deep)]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)] via-transparent to-transparent" />
          {/* Scan-line overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 3px)" }} />
          {/* Teal accent glow */}
          <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-[var(--accent)]/10 blur-[150px]" />
          <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/5 blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-between p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-[var(--accent)] backdrop-blur-md mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Ghana&apos;s Premier Healthcare Construction Specialists
            </div>

            <KineticHeading
              as="h1"
              className="font-serif text-[clamp(2.2rem,8vw,3rem)] leading-[1.05] text-white sm:text-[5rem] lg:text-[6.5rem]"
              lines={[
                ["Creating Spaces"],
                [{ key: "accent", node: <span className="text-[var(--accent)] italic">To Save Lives.</span> }],
              ]}
            />

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              We design, construct, and equip world-class, patient-focused private hospitals 
              and healthcare facilities across Ghana and Africa.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-[var(--ink-deep)] transition-all hover:scale-105 hover:bg-white shadow-xl"
              >
                Start a Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>


        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/30" />
        </div>
      </section>

      <div className="px-3 sm:px-5 lg:px-8 w-full">
      {/* ── Trust / Differentiators ── */}
      <section className="mt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <MagneticTiltCard key={item.label} className="panel-ivory rounded-[2rem] border border-gray-100 p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/5">
                <item.icon className="h-6 w-6 text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--ink-deep)]">{item.label}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            </MagneticTiltCard>
          ))}
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="mt-10 relative">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="section-label eyebrow-line text-[var(--accent)]">Who We Are</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="Built different. Engineered for impact." />
            <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["ISO Standards", "PMP Certified", "NEBOSH Certified", "10+ Years Experience"].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)] border border-[var(--accent)]/10">
                  <Check className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 font-bold text-[var(--accent)] group"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
           <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] lg:h-[500px]">
             <Image src="/images/image_2.jpeg" alt="Epicshield construction project site" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl text-white">
                <p className="text-[10px] uppercase tracking-widest text-[var(--accent)]">Founded {company.founded}</p>
                <p className="mt-1 text-sm font-semibold">by {company.founder}</p>
                <p className="text-xs text-white/60">{company.hq}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="mt-10 relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label eyebrow-line text-[var(--accent)]">Our Expertise</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="End-to-end delivery." />
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-bold text-[var(--ink-deep)] transition-all hover:bg-gray-50"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((svc, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <MagneticTiltCard key={svc.title} className="panel-ivory rounded-[2.5rem] border border-gray-100 p-8 sm:p-10 h-full">
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
      </div>

      {/* ── Live Site Feed ── */}
      <section className="relative overflow-hidden py-10">
        <div className="px-3 sm:px-5 lg:px-8 w-full">
          <LiveSiteFeed images={liveSiteImages} />
        </div>
      </section>

      {/* ── Certifications & Compliance ── */}
      <section className="relative overflow-hidden py-12">
        <ScanlineSweep>
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-[var(--accent)]/6 blur-[150px]" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--accent)]/4 blur-[120px]" />

        <div className="absolute left-1/2 top-12 -translate-x-1/2 text-[300px] font-bold leading-none text-[var(--accent)]/8 select-none pointer-events-none" aria-hidden="true">
          ✓
        </div>

        <div className="relative z-10 px-3 sm:px-5 lg:px-8 w-full">
          <p className="section-label eyebrow-line justify-center text-[var(--accent)]">Certifications &amp; Compliance</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-5xl sm:text-7xl text-[var(--ink-deep)] text-center" text="Approved. Accredited. Authorized." />
          <p className="mt-6 max-w-2xl mx-auto text-center text-base text-[var(--muted)]">
            Every project meets the standards of Ghana&apos;s leading regulatory authorities.
          </p>

          <div className="mt-16 flex justify-center gap-16 sm:gap-24">
            <div className="text-center">
              <p className="font-serif text-5xl sm:text-6xl text-[var(--ink-deep)]">
                <Odometer value="6" />
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Governing Bodies</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl sm:text-6xl text-[var(--ink-deep)]">
                <Odometer value="12" />
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Active Certifications</p>
            </div>
          </div>

           <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/images/ghana standards authority.png", name: "Ghana Standards Authority", cert: "ISO 9001:2015 Certified", certId: "GS-0012-2024", since: "Since 2019" },
              { src: "/images/environmental protection authority, Ghana.png", name: "Environmental Protection Agency", cert: "EPA Compliant Operator", certId: "EPA/EP/2024-0182", since: "Since 2021" },
              { src: "/images/nuclear regulatory authority ghana.png", name: "Nuclear Regulatory Authority", cert: "Radiation Safety Licensed", certId: "NRA/IR/2023-0047", since: "Since 2020" },
              { src: "/images/food and drugs authority.png", name: "Food and Drugs Authority", cert: "FDA Standards Partner", certId: "FDA/EL/2022-0091", since: "Since 2022" },
              { src: "/images/ghana ministry of health.jpg", name: "Ministry of Works & Housing", cert: "Registered Contractor", certId: "MWH/RC/2021-0035", since: "Since 2021" },
              { src: "/images/world health organization.jpg", name: "World Health Organization", cert: "Healthcare Standards Partner", certId: "WHO/HS/2024-0036", since: "Since 2024" },
            ].map((auth) => (
              <MagneticTiltCard key={auth.name} className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-6 transition-all hover:shadow-md">
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--accent)]/5 p-3">
                    <Image src={auth.src} alt={auth.name} width={64} height={64} className="h-full w-full object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <p className="truncate text-base font-bold text-[var(--ink-deep)]">{auth.name}</p>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-[var(--accent)]/80">{auth.cert}</p>
                    <div className="mt-2 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                      <span>{auth.certId}</span>
                      <span className="h-3 w-px bg-[var(--line)]" />
                      <span>{auth.since}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
              </MagneticTiltCard>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--line)]">
          <MarqueeTicker
            items={[
              "ISO 9001:2015",
              "EPA/EP/2024-0182",
              "NRA/IR/2023-0047",
              "FDA/EL/2022-0091",
              "MOH/RC/2021-0035",
              "WHO/GMP/2024-0118",
              "GS-0012-2024",
              "EPA-RC-2023-0089",
            ].map((s) => (
              <span key={s} className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]/40">{s}</span>
            ))}
            className="py-4"
          />
        </div>

        <div className="mt-20 text-center">
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink-deep)]">
            Epicshield Surfaces <span className="text-[var(--accent)]">Adheres To</span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 px-3">
            {[
              "Local & International Construction Standards",
              "Project Management Institute (PMI) Standards",
              "ISO Guidelines for Quality & Safety",
              "Health Facility & Regulatory Agency Requirements",
              "Healthcare Construction, Design & Renovation",
              "AIA Academy of Architecture for Health",
              "International Health & Safety Standards for Medical Facilities",
              "Nuclear Regulatory Authority",
              "Environmental Protection Agency & National Fire Service Regulations",
            ].map((standard) => (
              <span
                key={standard}
                className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-deep)] shadow-xs transition-all hover:border-[var(--accent)]/30 hover:shadow-sm"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>

      </ScanlineSweep>
      </section>

       {/* ── Trusted Partners ── */}
      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="relative z-10 px-3 sm:px-5 lg:px-8 w-full">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]/50 mb-10">Trusted Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            {[
              { src: "/images/jijia health.png", name: "Jijia Group" },
              { src: "/images/matrix.png", name: "Matrix Engineering" },
              { src: "/images/nuclear regulatory authority ghana.png", name: "Nuclear Regulatory Authority" },
              { src: "/images/sun kablo.jpg", name: "Sun Kablo" },
            ].map((p) => (
              <div key={p.name} className="group flex items-center gap-4 transition-all hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white border border-[var(--line)] p-3 shadow-sm transition-shadow group-hover:shadow-md">
                  <Image src={p.src} alt={p.name} width={48} height={48} className="h-full w-full object-contain" />
                </div>
                <span className="text-sm font-medium text-[var(--foreground)]/60 group-hover:text-[var(--foreground)] transition-colors">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-3 sm:px-5 lg:px-8 w-full">

      {/* ── Featured Case Study ── */}
      <section className="relative">
        <div className="panel-ivory relative overflow-hidden rounded-2xl p-8 sm:rounded-[3rem] sm:p-16">
          <div className="blueprint-grid absolute inset-0 opacity-[0.04] pointer-events-none" style={{ filter: "invert(1)" }} />
          <div className="relative z-10">
            <p className="section-label eyebrow-line text-[var(--accent)]">Featured Project</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl text-[var(--ink-deep)]" text={caseStudy.title} />
            <p className="mt-2 text-sm text-[var(--accent)] font-semibold">{caseStudy.location}</p>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-500 border border-blue-500/20">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              {caseStudy.status}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.details.slice(0, 6).map((detail) => (
                <div key={detail} className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-[var(--accent)] shrink-0" />
                  <span className="text-sm text-[var(--foreground)]">{detail}</span>
                </div>
              ))}
            </div>

            <Link
              href="/projects"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-all hover:scale-105 shadow-lg"
            >
              View Full Case Study <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Team Preview ── */}
      <section className="mt-12 relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label eyebrow-line text-[var(--accent)]">Leadership</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="Meet the Team." />
          </div>
          <Link
            href="/about"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 font-bold text-[var(--ink-deep)] transition-all hover:bg-gray-50"
          >
            Full Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
           {team.slice(0, 4).map((member) => (
            <MagneticTiltCard key={member.name} className="panel-ivory rounded-[2.5rem] border border-gray-100 p-6 sm:p-8">
              <TeamAvatar name={member.name} size={64} image={member.image} />
              <h3 className="mt-4 text-xl font-bold text-[var(--ink-deep)]">{member.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">{member.bio}</p>
            </MagneticTiltCard>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="mt-12 panel-ivory rounded-2xl p-8 sm:rounded-[3rem] sm:p-16 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.08),transparent_70%)]" />
        <div className="relative z-10">
          <KineticHeading as="h2" className="font-serif text-4xl sm:text-6xl text-[var(--ink-deep)]" text="Ready to build something exceptional?" />
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[var(--muted)]">
            Let&apos;s discuss your next project. Our team is ready to engineer world-class results.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-[var(--ink-deep)] hover:bg-gray-50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
