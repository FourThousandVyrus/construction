"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { navItems } from "@/lib/site-content";
import { company, contact } from "@/lib/brochure-content";

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
        active
          ? "text-[var(--ink-deep)]"
          : "text-[var(--muted)] hover:text-[var(--ink-deep)]"
      }`}
    >
      {label}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)]" />
      )}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90">
          <Image src="/epic-logo.png" alt={company.name} width={140} height={47} className="h-9 w-auto sm:h-11" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
          ))}
        </nav>

        <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[var(--ink-deep)] sm:px-6 sm:py-3 sm:text-sm"
        >
          <Phone className="h-3.5 w-3.5" />
          {contact.phone}
        </a>
      </div>

      {/* Mobile nav */}
      <div className="flex flex-wrap items-center gap-5 border-t border-gray-100 px-4 py-2.5 md:hidden">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
        ))}
      </div>
    </header>
  );
}
