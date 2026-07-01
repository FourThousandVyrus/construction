"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X, Home, Info, Wrench, Briefcase, Globe, Mail, Image as ImageIcon } from "lucide-react";
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

  const navIcons: Record<string, React.ReactNode> = {
    Home: <Home className="h-4 w-4" />,
    About: <Info className="h-4 w-4" />,
    Services: <Wrench className="h-4 w-4" />,
    Projects: <Briefcase className="h-4 w-4" />,
    Gallery: <ImageIcon className="h-4 w-4" />,
    Global: <Globe className="h-4 w-4" />,
    Contact: <Mail className="h-4 w-4" />,
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
              <div key={item.href} className="relative group focus-within:z-50">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border border-gray-100 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200 z-50">
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
            className="group hidden shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[var(--ink-deep)] sm:inline-flex sm:px-6 sm:py-3 sm:text-sm"
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
              className="fixed top-0 right-0 z-50 flex h-full w-[280px] flex-col bg-[var(--ink-deep)] md:hidden overflow-y-auto shadow-2xl"
            >
              <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
              <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-[var(--accent)]/8 blur-[100px] pointer-events-none" />
              <div className="relative z-10 flex h-full flex-col px-5 pb-8 pt-4">
                <div className="flex justify-end mb-6">
                  <button
                    onClick={closeMenu}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="flex justify-center mb-10">
                  <Image src="/epic-logo.png" alt={company.name} width={130} height={44} className="h-auto w-[130px] brightness-0 invert" />
                </div>

                <nav className="flex flex-col gap-1">
                  {navItems.map((item) =>
                    item.label === "Services" ? (
                      <div key={item.href}>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-[0.2em] transition-all ${
                            pathname.startsWith("/services")
                              ? "bg-white/5 text-[var(--accent)]"
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="opacity-60">{navIcons[item.label]}</span>
                          <span className="flex-1 text-left">{item.label}</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform opacity-60 ${servicesOpen ? "rotate-180" : ""}`}
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
                              <div className="ml-4 flex flex-col gap-0.5 border-l border-white/5 pb-2 pl-4 pt-1">
                                {servicesData.map((s) => (
                                  <Link
                                    key={s.id}
                                    href={s.href}
                                    onClick={closeMenu}
                                    className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                      pathname === s.href
                                        ? "font-semibold text-[var(--accent)]"
                                        : "text-white/50 hover:text-white"
                                    }`}
                                  >
                                    {s.title}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  onClick={closeMenu}
                                  className="mt-1 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]"
                                >
                                  View All →
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
                        className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-[0.2em] transition-all ${
                          pathname === item.href
                            ? "bg-white/5 text-[var(--accent)]"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="opacity-60">{navIcons[item.label]}</span>
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>

                <div className="mt-auto pt-6">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-[var(--ink-deep)]"
                  >
                    <Phone className="h-4 w-4" />
                    {contact.phone}
                  </a>
                  <p className="mt-3 text-center text-xs text-white/25">
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
