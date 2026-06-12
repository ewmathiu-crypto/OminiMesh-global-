import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const virtualSimFeatures = [
  "Activate instantly without physical SIM",
  "Multiple countries and regions on one profile",
  "Local numbers in 30+ markets",
  "5G, 4G LTE auto-switching",
  "AI-optimized network selection",
  "Top-up and auto-renew via wallet",
  "Shared data plans for families and teams",
];

const physicalSimFeatures = [
  "Physical SIM kit shipped worldwide",
  "Pre-activated with your selected region",
  "Works in any unlocked device",
  "Same AI routing and fair-use engine",
  "Worldwide roaming at local rates",
  "Lost SIM replacement service",
];

export default function SimPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Connectivity</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">OminiMesh Virtual SIM & eSIM</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Get connected instantly with OminiMesh-powered SIM profiles. Choose virtual eSIM activation or a physical SIM kit — both powered by the same AI routing and wallet integration.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Virtual / eSIM</div>
            <h3 className="mt-2 text-2xl font-bold text-white">OminiMesh eSIM</h3>
            <div className="mt-2 text-xl font-black text-emerald-300">Instant activation</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Generate a virtual SIM profile in-app and connect to local networks in minutes. No physical card needed.</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              {virtualSimFeatures.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10">Generate eSIM</Link>
              <Link href="/#join" className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">Join Waitlist</Link>
            </div>
          </div>

          <div className="relative rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-purple-500/10 p-6 shadow-2xl shadow-cyan-500/10">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Physical SIM</div>
            <h3 className="mt-2 text-2xl font-bold text-white">OminiMesh SIM Kit</h3>
            <div className="mt-2 text-xl font-black text-emerald-300">Shipping worldwide</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Get a physical SIM card shipped to you for devices that need it. Same OminiMesh coverage and AI routing.</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              {physicalSimFeatures.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10">Order SIM Kit</Link>
              <Link href="/partners" className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">Partner Inquiry</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-lg font-semibold text-white">How it works</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-4 text-sm leading-7 text-slate-300">
            <div>
              <div className="font-semibold text-white">1. Register</div>
              <p className="mt-1">Create your account or join the waitlist.</p>
            </div>
            <div>
              <div className="font-semibold text-white">2. Choose profile</div>
              <p className="mt-1">Select country and plan in-app.</p>
            </div>
            <div>
              <div className="font-semibold text-white">3. Activate</div>
              <p className="mt-1">Scan QR code for eSIM or insert physical SIM.</p>
            </div>
            <div>
              <div className="font-semibold text-white">4. Roam freely</div>
              <p className="mt-1">Connect via AI-routed local and roaming networks.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
