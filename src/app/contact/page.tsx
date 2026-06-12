import Image from "next/image";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="inline-flex items-center">
          <Logo className="w-40 sm:w-52" />
        </Link>
        <a
          href="/#join"
          className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
        >
          Join waitlist
        </a>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Contact</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Get in touch</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">We&apos;d love to hear from you. Whether you&apos;re a traveler, partner, investor, or media contact, reach out and we&apos;ll respond promptly.</p>

        <form className="mt-10 grid gap-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks! This is a demo form."); }}>
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Full name"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-300/60"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-300/60"
            />
          </div>
          <select
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-sm text-slate-300 outline-none transition focus:border-cyan-300/60"
          >
            <option value="" disabled selected>What is this about?</option>
            <option>General inquiry</option>
            <option>Partnership</option>
            <option>Press / Media</option>
            <option>Support</option>
            <option>Other</option>
          </select>
        <textarea
          rows={6}
          required
          placeholder="Your message"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-300/60"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
