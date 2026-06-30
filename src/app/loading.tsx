export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-[var(--accent)]/5 blur-[100px] pointer-events-none sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        <div className="route-loader-chip">Loading</div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-200 sm:w-56">
          <div className="h-full w-3/4 rounded-full bg-[var(--accent)] animate-pulse" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--muted)]/50">
          Preparing your experience
        </p>
      </div>
    </div>
  );
}
