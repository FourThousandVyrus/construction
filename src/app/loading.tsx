export default function Loading() {
  return (
    <div className="flex w-full flex-1 items-center justify-center px-3 sm:px-5 lg:px-8">
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)] animate-pulse">
          Loading
        </p>
      </div>
    </div>
  );
}
