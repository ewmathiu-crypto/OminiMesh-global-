"use client";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Error</div>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Something went wrong</h1>
        <p className="mt-4 text-base text-slate-400">
          {error?.message || "An unexpected error occurred. Our team has been notified."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-200"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
