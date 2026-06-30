export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="route-loader-chip">Loading</div>
        <div className="h-1 w-56 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-3/4 rounded-full bg-[var(--accent)] animate-pulse" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--muted)]/50">
          Preparing your experience
        </p>
      </div>
    </div>
  );
}
