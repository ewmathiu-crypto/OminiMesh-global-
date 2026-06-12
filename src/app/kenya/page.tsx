import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function KenyaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Kenya</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Connecting Kenya</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">OminiMesh is building infrastructure and partnerships to expand affordable, high-quality connectivity across Kenya — with a focus on urban, peri-urban, and rural communities.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Nairobi pilots</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">Smart Wi-Fi and eSIM pilots in key districts to test AI routing, partner onboarding, and fair-use policies.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Partner ecosystem</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">Working with local operators, venues, and institutions to expand trusted access points.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Local team</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">Kenyan operations and compliance expertise to ensure regulatory alignment and community trust.</p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-purple-500/10 p-8">
          <h3 className="text-2xl font-bold text-white">Interested in partnering?</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">We welcome venue partners, network operators, and institutions in Kenya. Please reach out through our <Link href="/contact" className="text-cyan-300 underline">Contact</Link> page with your proposal or interest.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
