import Image from "next/image";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function LegalPage() {
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
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Legal</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Legal information</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          OminiMesh Global operates under applicable telecommunications, data protection, and consumer laws in the jurisdictions where we provide services. This page provides important legal resources and disclosures.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link href="/privacy-policy" className="block rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/40">
            <h3 className="text-lg font-semibold text-white">Privacy Policy</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">How we collect, use, and protect your personal data across our platform and services.</p>
          </Link>
          <Link href="/contact" className="block rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300/40">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">Reach our legal and support teams for inquiries, complaints, or partnership matters.</p>
          </Link>
        </div>
        <p className="mt-10 text-sm leading-7 text-slate-500">
          Disclaimer: This website and all content are provided for informational purposes only and do not constitute legal advice. OminiMesh Global may update these terms and policies from time to time. Please review regularly.
        </p>
      </section>
    </main>
  );
}
