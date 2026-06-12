import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Terms</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Terms of Service</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-300">
          <div>
            <h2 className="text-xl font-semibold text-white">Agreement to Terms</h2>
            <p className="mt-3">By accessing or using OminiMesh Global services, you agree to be bound by these Terms of Service. If you do not agree to all terms, do not use the platform.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Use of Services</h2>
            <p className="mt-3">You may use our platform for lawful purposes only. You are responsible for maintaining the confidentiality of your account and for all activity under your account.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Subscriptions & Payments</h2>
            <p className="mt-3">Paid plans renew according to the selected billing cycle. Fees are non-refundable except as required by law. We may change pricing with notice.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
            <p className="mt-3">All content, trademarks, and technology associated with OminiMesh Global remain our property. You may not copy, modify, or distribute our materials without permission.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mt-3">To the maximum extent permitted by law, OminiMesh Global shall not be liable for indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Changes & Termination</h2>
            <p className="mt-3">We may update these terms from time to time. Continued use after changes constitutes acceptance. We may suspend or terminate accounts for violations.</p>
          </div>
        </div>

        <p className="mt-10 text-sm leading-7 text-white/70">For questions, visit our <Link href="/contact" className="text-cyan-300 underline">Contact</Link> page.</p>
      </section>
    </main>
  );
}
