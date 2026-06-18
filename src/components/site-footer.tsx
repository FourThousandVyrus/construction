import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/site-content";
import { company, contact } from "@/lib/brochure-content";

export function SiteFooter() {
  return (
    <footer className="w-full px-3 pb-12 pt-24 sm:px-5 lg:px-8">
      <div className="relative rounded-[3rem] bg-[var(--ink-deep)] p-8 text-white sm:p-16">
        <div className="blueprint-grid absolute inset-0 opacity-[0.04] pointer-events-none rounded-[3rem] overflow-hidden" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/epic-logo.png" alt={company.name} width={140} height={47} className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-6 font-serif text-xl italic text-[var(--accent)]">&ldquo;{company.tagline}&rdquo;</p>
             <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
               We design, construct, and deliver world-class infrastructure projects with precision engineering and code-compliant construction solutions.
             </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-6">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-white/60 transition-colors hover:text-[var(--accent)]">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 mb-6">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <p>{contact.address}</p>
              <a href={`tel:${contact.phone}`} className="hover:text-[var(--accent)] transition-colors">{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="hover:text-[var(--accent)] transition-colors">{contact.email}</a>
              <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">{contact.website}</a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">© 2026 {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
