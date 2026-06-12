import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Partners & Investors</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Connect with OminiMesh</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">OminiMesh is actively seeking strategic partners, grant collaborators, and investors to accelerate our mission of delivering one intelligent internet for the planet.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Why partner with OminiMesh</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
              <li>• Early access to a 240+ country connectivity roadmap</li>
              <li>• AI routing and eSIM infrastructure at scale</li>
              <li>• Co-marketing opportunities with a global launch platform</li>
              <li>• Transparent milestones and shared KPIs</li>
              <li>• Revenue-share and pilot programs for venue and telecom partners</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Investor fit</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
              <li>• Seed-to-Series A focused investors</li>
              <li>• Climate and digital inclusion funds</li>
              <li>• Telecom and deep-tech VCs</li>
              <li>• Strategic corporate VCs in connectivity, AI, and payments</li>
              <li>• Angel investors with emerging market experience</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-purple-500/10 p-8">
          <h3 className="text-2xl font-bold text-white">How to connect</h3>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
            <div>
              <div className="font-semibold text-white">1. Send an intro through our Contact page</div>
              <p className="mt-1">Use the <Link href="/contact" className="text-cyan-300 underline">Contact</Link> form and select “Partnership” or “Investor inquiry”. Include a short description of your background and what you want to explore.</p>
            </div>
            <div>
              <div className="font-semibold text-white">2. Join the waitlist</div>
              <p className="mt-1">Sign up for the <Link href="/#join" className="text-cyan-300 underline">waitlist</Link> to receive investor updates, pilot invitations, and early product access.</p>
            </div>
            <div>
              <div className="font-semibold text-white">3. Reference your connection</div>
              <p className="mt-1">If you were referred by an existing partner, advisor, or team member, mention their name and organization in your message for faster routing.</p>
            </div>
            <div>
              <div className="font-semibold text-white">4. Prepare a short deck or memo</div>
              <p className="mt-1">For serious partnership or investment conversations, a 1–2 page summary of your thesis, fund size, sector focus, and past investments helps us evaluate fit quickly.</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
        <Link
          href="/#join"
          className="inline-flex rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-200"
        >
          Join the waitlist
        </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
