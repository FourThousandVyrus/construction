"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function GlobalLoader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => { mountedRef.current = false; };
  }, []);

  const navigateAfterDelay = useCallback((href: string) => {
    setLoading(true);
    setProgress(0);

    let p = 0;
    progressRef.current = setInterval(() => {
      p += Math.random() * 12 + 3;
      if (p > 92) p = 92;
      setProgress(p);
    }, 200);

    timerRef.current = setTimeout(() => {
      clearInterval(progressRef.current);
      setProgress(100);

      setTimeout(() => {
        if (!mountedRef.current) return;
        setLoading(false);
        setProgress(0);
        router.push(href);
      }, 350);
    }, 2500);
  }, [router]);

  useEffect(() => {
    return () => {
      clearInterval(progressRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (loading) return;

      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (link.getAttribute("target") === "_blank") return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      if (href.startsWith("#")) {
        e.preventDefault();
        e.stopPropagation();
        const id = href.slice(1);
        if (!id) return;
        const timer = setTimeout(() => {
          const target = document.getElementById(id);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return;
      }

      if (href.startsWith("http://") || href.startsWith("https://")) return;

      if (href.startsWith("/")) {
        e.preventDefault();
        e.stopPropagation();
        navigateAfterDelay(href);
      }
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [loading, navigateAfterDelay]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="route-loader-chip">Loading</div>
        <div className="h-1 w-56 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--muted)]/50">
          Preparing your experience
        </p>
      </div>
    </div>
  );
}
