import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Privacy</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-300">
          <div>
            <h2 className="text-xl font-semibold text-white">Introduction</h2>
            <p className="mt-3">OminiMesh respects your privacy. This policy explains what data we collect, why we collect it, how we use it, and your rights.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Data We Collect</h2>
            <p className="mt-3">We may collect account information, device and network diagnostics, location data (with permission), usage analytics, and payment information processed through secure providers.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">How We Use Data</h2>
            <p className="mt-3">We use data to provide connectivity services, improve AI routing accuracy, prevent fraud, comply with legal obligations, and communicate product updates.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Cookies & Tracking</h2>
            <p className="mt-3">We use essential cookies and analytics tools to improve the experience of our website and platform. You can manage preferences through your browser settings.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Your Rights</h2>
            <p className="mt-3">You have the right to access, correct, or request deletion of your personal data. Contact us for privacy-related requests.</p>
          </div>
        </div>

        <p className="mt-10 text-sm leading-7 text-slate-300">For questions about this policy, please visit our <Link href="/contact" className="text-cyan-300 underline">Contact</Link> page.</p>
        <p className="mt-2 text-sm leading-7 text-slate-400">This policy may be updated periodically. Please review it from time to time.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
