import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Scan, Search, PenTool, Truck, HardHat, CheckCircle2 } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";
import { MagneticTiltCard } from "@/components/magnetic-tilt-card";

import { TeamAvatar } from "@/components/ui/team-avatar";
import { profile, mission, vision, smartGoals, team, company } from "@/lib/brochure-content";
import { processPhases } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-1 flex-col px-3 pb-10 sm:px-5 sm:pb-12 lg:px-8">

      {/* ── Company Profile ── */}

      <section className="mt-6 relative">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="section-label eyebrow-line text-[var(--slate-strong)]">Company Profile</p>
            <KineticHeading as="h1" className="mt-4 font-serif text-4xl sm:text-6xl" text={company.tagline} />
            <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">{profile.summary}</p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">{profile.focus}</p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] lg:h-[500px]">
            <Image src="/images/image_15.jpeg" alt="Epicshield construction project site" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
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
        <p className="mt-12 text-lg leading-relaxed text-[var(--muted)]">{profile.approach}</p>
      </section>


      {/* ── Mission & Vision ── */}

      <section className="mt-20 relative">
        <div className="grid gap-8 lg:grid-cols-2">
          <MagneticTiltCard className="panel-dark rounded-[2.5rem] p-8 sm:p-12 text-white">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">Our Mission</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-3xl sm:text-4xl" text="Innovation meets infrastructure." />
            <div className="mt-6 h-12 w-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
              <Activity className="h-6 w-6 text-[var(--accent)]" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/70">{mission.statement}</p>
            <div className="blueprint-grid absolute inset-0 opacity-[0.04] pointer-events-none rounded-[2.5rem]" />
          </MagneticTiltCard>

          <MagneticTiltCard className="panel-ivory rounded-[2.5rem] p-8 sm:p-12 border border-gray-100">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">Our Vision</p>
            <KineticHeading as="h2" className="mt-4 font-serif text-3xl sm:text-4xl text-[var(--ink-deep)]" text="Premier across Africa." />
            <div className="mt-6 h-12 w-12 rounded-full bg-[var(--accent)]/5 flex items-center justify-center">
              <Scan className="h-6 w-6 text-[var(--accent)]" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">{vision.statement}</p>
          </MagneticTiltCard>
        </div>
      </section>


      {/* ── Our Story ── */}

      <section className="mt-20 relative">
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">Our Story</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="The Journey So Far." />
          <p className="mt-6 text-lg text-[var(--muted)]">
            From our founding in 2024 to a pan-African vision for 2030 — every milestone reflects our commitment to transforming healthcare infrastructure.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {[
              { year: "2024", title: "Company Founded", desc: "Epicshield Infrastructure is established by Joshua Cobbinah with a vision to transform healthcare infrastructure across Ghana and Africa." },
              { year: "2025", title: "Healthcare Construction Expansion", desc: "Expansion into full-scale private healthcare construction, focusing on hospital development and clinical infrastructure." },
              { year: "2025", title: "Sokoban Hospital Project", desc: "Ground-breaking of the 20-bed Sokoban Hospital in Kumasi — our first flagship hospital development." },
              { year: "2026", title: "50-Bed Hospital Project – Adenta", desc: "Commencement of the Adenta 50-Bed & 33-Bed Specialist Hospital in Accra, our largest project to date." },
              { year: "2026", title: "Dubai Healthcare Visits", desc: "International study tour to explore modular hospital construction systems and smart healthcare technologies." },
              { year: "2026", title: "China Hospital Visits", desc: "Visits to leading Chinese medical equipment manufacturers and hospital technology providers to establish strategic partnerships." },
              { year: "2026", title: "CHCC Participation", desc: "Attendance at the China Hospital Construction Conference to source smart automation, modular systems, and global partners." },
              { year: "2030", title: "Regional Expansion Vision", desc: "Strategic vision to expand into 5 additional African countries, bringing world-class healthcare infrastructure across the continent." },
            ].map((milestone, i) => (
              <div key={i} className="relative sm:pl-16">
                {/* Year dot */}
                <div className="absolute left-0 top-1 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white text-[10px] font-bold">
                  <span className="rotate-[-90deg] text-[9px] tracking-widest">{milestone.year}</span>
                </div>

                {/* Year badge (mobile) */}
                <div className="sm:hidden mb-2 inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-3 py-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">{milestone.year}</span>
                </div>

                <div className="panel-ivory rounded-[2rem] border border-gray-100 p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/5">
                      <span className="text-lg font-bold text-[var(--accent)]">{milestone.year}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-serif text-[var(--ink-deep)]">{milestone.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Core Values ── */}

      <section className="mt-20 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="section-label eyebrow-line justify-center text-[var(--slate-strong)]">Our Core Values</p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3 items-center">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/core values.png"
              alt="Core Values"
              width={336}
              height={576}
              className="rounded-2xl object-cover shadow-lg max-w-[220px] sm:max-w-[280px]"
            />
          </div>
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Excellence in Every Project",
                description: "We strive for excellence in every aspect of our projects.",
              },
              {
                title: "Integrity & Ethical Practices",
                description: "Integrity and ethical practices guide all our decisions.",
              },
              {
                title: "Innovation in Construction & Design",
                description: "We are committed to innovation in construction and design.",
              },
              {
                title: "Sustainability in Operations & Materials",
                description: "We prioritize sustainability in our operations and materials.",
              },
              {
                title: "Unwavering Focus on Customer Satisfaction",
                description: "Customer satisfaction is always our top priority.",
              },
            ].map((value) => (
              <div key={value.title} className="flex gap-4 items-start">
                <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[var(--accent)]" />
                <div>
                  <h4 className="text-lg font-bold text-[var(--ink-deep)]">{value.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/core values 1.jpg"
              alt="Core Values"
              width={400}
              height={694}
              className="rounded-2xl object-cover shadow-lg max-w-[220px] sm:max-w-[280px]"
            />
          </div>
        </div>
      </section>


      {/* ── SMART Values ── */}

      <section className="mt-20 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-5xl sm:text-7xl font-bold text-[var(--accent)]">
            Why Choose Us<span className="text-8xl sm:text-9xl"> ?</span>
          </h3>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Every project is guided by the SMART framework ensuring precision, accountability, and world-class outcomes.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {smartGoals.map((goal) => (
            <MagneticTiltCard key={goal.letter} className="panel-ivory rounded-[2rem] border p-6 text-center" style={{ borderColor: goal.color }}>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white font-serif text-2xl font-bold"
                style={{ backgroundColor: goal.color }}>
                {goal.letter}
              </div>
              <h4 className="text-lg font-bold text-[var(--ink-deep)]">{goal.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{goal.description}</p>
            </MagneticTiltCard>
          ))}
        </div>
      </section>


      {/* ── Process Timeline ── */}

      <section className="mt-20 relative">
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">How We Build</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="From Ground to Handover." />
          <p className="mt-6 text-lg text-[var(--muted)]">
            Our proven 5-phase process ensures every project is delivered with precision, on time, and within budget.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {processPhases.map((phase, i) => {
              const icons = [Search, PenTool, Truck, HardHat, CheckCircle2];
              const Icon = icons[i];
              return (
                <div key={phase.phase} className="relative sm:pl-20">
                  {/* Step dot */}
                  <div className="absolute left-4 top-1 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white text-sm font-bold">
                    {phase.phase}
                  </div>

                  <div className="panel-ivory rounded-[2rem] border border-gray-100 p-6 sm:p-8">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)]/5">
                        <Icon className="h-7 w-7 text-[var(--accent)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">Phase {phase.phase}</span>
                          <span className="h-px flex-1 bg-[var(--line)]" />
                        </div>
                        <h3 className="text-2xl font-serif text-[var(--ink-deep)]">{phase.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>





      {/* ── Team ── */}

      <section className="mt-20 relative">
        <div className="max-w-2xl">
          <p className="section-label eyebrow-line text-[var(--slate-strong)]">Leadership</p>
          <KineticHeading as="h2" className="mt-4 font-serif text-4xl sm:text-6xl" text="Meet the Team." />
          <p className="mt-6 text-lg text-[var(--muted)]">
            A team of certified professionals with decades of combined experience in healthcare infrastructure & clinical engineering.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <MagneticTiltCard key={member.name} className="panel-ivory rounded-[2.5rem] border border-gray-100 p-6 sm:p-8">
              <TeamAvatar name={member.name} size={64} image={member.image} />
              <h3 className="mt-4 text-xl font-bold text-[var(--ink-deep)]">{member.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{member.bio}</p>
            </MagneticTiltCard>
          ))}
        </div>
      </section>


      {/* ── CTA ── */}

      <section className="mt-20 panel-ivory rounded-2xl p-8 sm:rounded-[3rem] sm:p-16 text-center relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.08),transparent_70%)]" />
        <div className="relative z-10">
          <KineticHeading as="h2" className="font-serif text-4xl sm:text-6xl text-[var(--ink-deep)]" text="Ready to build with us?" />
          <p className="mt-6 max-w-xl mx-auto text-lg text-[var(--muted)]">
            Let&apos;s discuss your healthcare facility project and how Epicshield can deliver world-class clinical environments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-transform hover:scale-105"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
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

    </main>
  );
}
