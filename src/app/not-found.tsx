import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="inline-flex items-center">
          <span className="rounded-2xl bg-cyan-300/10 p-1.5 ring-1 ring-cyan-300/30">
            <Logo className="w-40 sm:w-52" />
          </span>
        </Link>
        <Link
          href="/#join"
          className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
        >
          Join waitlist
        </Link>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">404</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Page not found</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-200">Go home</Link>
          <Link href="/contact" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white transition hover:border-cyan-300/40 hover:bg-white/10">Contact support</Link>
        </div>
      </section>
    </main>
  );
}
