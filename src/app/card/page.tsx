import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const virtualFeatures = [
  "Instant virtual card generation",
  "Apple Pay and Google Pay ready",
  "Subscriptions and auto-top-up",
  "Daily spending limits and alerts",
  "Real-time transaction notifications",
  "Global currency conversion",
  "QR payments at partner hotspots",
];

const physicalFeatures = [
  "Physical Visa card shipped worldwide",
  "Contactless payments",
  "ATM cash withdrawal support",
  "Travel insurance included",
  "Card freeze and replacement",
  "International transaction fee-free",
];

export default function CardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Wallet</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">OminiMesh Virtual & Physical Visa Card</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Register to generate your OminiMesh-powered Visa card—virtual for instant use or physical for worldwide spending. Built for travelers, digital nomads, and global users.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Virtual Card</div>
            <h3 className="mt-2 text-2xl font-bold text-white">OminiMesh Virtual Visa</h3>
            <div className="mt-2 text-xl font-black text-emerald-300">FREE to create</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Generate a virtual Visa card instantly after registration. Use it online and with Apple Pay / Google Pay immediately.</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              {virtualFeatures.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10">Register for Virtual Card</Link>
              <a
          href="/#join"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
        >
          Join Waitlist
        </a>
            </div>
          </div>

          <div className="relative rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-purple-500/10 p-6 shadow-2xl shadow-cyan-500/10">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Physical Card</div>
            <h3 className="mt-2 text-2xl font-bold text-white">OminiMesh Physical Visa</h3>
            <div className="mt-2 text-xl font-black text-emerald-300">Coming soon</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Order a physical Visa card shipped to you worldwide with premium benefits built for global connectivity.</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              {physicalFeatures.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10">Pre-order Physical Card</Link>
              <Link href="/partners" className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">Partner Inquiry</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-lg font-semibold text-white">How registration works</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-4 text-sm leading-7 text-slate-300">
            <div>
              <div className="font-semibold text-white">1. Create account</div>
              <p className="mt-1">Join the waitlist or contact us to start registration.</p>
            </div>
            <div>
              <div className="font-semibold text-white">2. Verify identity</div>
              <p className="mt-1">Complete lightweight KYC for virtual issuance.</p>
            </div>
            <div>
              <div className="font-semibold text-white">3. Generate card</div>
              <p className="mt-1">Receive instant virtual card details in-app or web.</p>
            </div>
            <div>
              <div className="font-semibold text-white">4. Use globally</div>
              <p className="mt-1">Pay online, in-app, or upgrade to physical anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
