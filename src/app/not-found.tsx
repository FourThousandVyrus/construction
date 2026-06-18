import Link from "next/link";
import { ArrowRight, Construction } from "lucide-react";
import { KineticHeading } from "@/components/kinetic-heading";

export default function NotFound() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-3 pb-20 sm:px-5 lg:px-8">
      <div className="flex flex-col items-center text-center max-w-lg">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent)]/10">
          <Construction className="h-12 w-12 text-[var(--accent)]" />
        </div>

        <p className="section-label eyebrow-line justify-center text-[var(--accent)] mb-4">
          Error 404
        </p>

        <KineticHeading
          as="h1"
          className="font-serif text-5xl sm:text-7xl text-[var(--ink-deep)]"
          text="Page not found."
        />

        <p className="mt-6 text-lg text-[var(--muted)]">
          This page doesn&apos;t exist or has been relocated. Let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-bold text-white transition-all hover:scale-105"
          >
            Back to Home
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 font-bold text-[var(--ink-deep)] transition-all hover:bg-gray-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
