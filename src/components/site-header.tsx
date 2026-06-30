"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, servicesData } from "@/lib/site-content";
import { company, contact } from "@/lib/brochure-content";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90">
          <Image src="/epic-logo.png" alt={company.name} width={140} height={47} className="h-9 w-auto sm:h-11" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-[var(--ink-deep)]"
                      : "text-[var(--muted)] hover:text-[var(--ink-deep)]"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  {pathname.startsWith("/services") && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)]" />
                  )}
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-gray-100 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-3">
                    {servicesData.map((s) => (
                      <Link
                        key={s.id}
                        href={s.href}
                        className={`block px-5 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                          pathname === s.href ? "text-[var(--accent)] font-semibold" : "text-[var(--muted)]"
                        }`}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[var(--ink-deep)] sm:px-6 sm:py-3 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">{contact.phone}</span>
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-[var(--ink-deep)]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-[var(--ink-deep)] md:hidden overflow-y-auto"
            >
              <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
              <div className="relative z-10 flex h-full flex-col p-6">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-white">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1">
                  {navItems.map((item) =>
                    item.label === "Services" ? (
                      <div key={item.href}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex w-full items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-[var(--accent)]"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-2 flex flex-col gap-1 border-l border-white/10 pb-3 pl-4">
                                {servicesData.map((s) => (
                                  <Link
                                    key={s.id}
                                    href={s.href}
                                    onClick={closeMenu}
                                    className={`py-3 text-sm transition-colors ${
                                      pathname === s.href
                                        ? "font-semibold text-[var(--accent)]"
                                        : "text-white/60 hover:text-white"
                                    }`}
                                  >
                                    {s.title}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  onClick={closeMenu}
                                  className="mt-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]"
                                >
                                  View All Services →
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
                          pathname === item.href
                            ? "text-[var(--accent)]"
                            : "text-white hover:text-[var(--accent)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>

                <div className="mt-auto border-t border-white/10 pt-8">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 font-bold text-white transition-all hover:bg-white hover:text-[var(--ink-deep)]"
                  >
                    <Phone className="h-4 w-4" />
                    {contact.phone}
                  </a>
                  <p className="mt-4 text-center text-xs text-white/30">
                    {contact.email}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
