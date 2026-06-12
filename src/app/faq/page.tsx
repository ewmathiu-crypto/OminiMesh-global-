import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const faqs = [
  {
    q: "What is OminiMesh?",
    a: "OminiMesh is an AI-powered connectivity platform that unifies Wi-Fi, fiber, towers, satellites, eSIM, payments, and intelligent routing. It helps travelers, businesses, and partners access reliable internet across 240+ target countries.",
  },
  {
    q: "How does the AI routing work?",
    a: "Our AI engine scores every available network path based on speed, latency, packet loss, price, and security. It then recommends or automatically routes you through the optimal connection, and can fail over to backup paths if needed.",
  },
  {
    q: "Is eSIM currently available?",
    a: "We are launching eSIM access through a structured waitlist program. Joining the waitlist gives you priority access, early pricing, and updates as we expand coverage and profile availability.",
  },
  {
    q: "Which countries are supported?",
    a: "We are building toward 240+ target countries. Coverage is expanded in phases based on partner availability, regulatory approvals, and network performance. Visit our Kenya page for East Africa updates.",
  },
  {
    q: "Do you offer business plans?",
    a: "Yes. Our Business tier includes team dashboards, hotspot partner tools, usage analytics, and SLA-ready routing for teams, venues, and enterprise partners.",
  },
  {
    q: "How do I contact support?",
    a: (
      <>
        You can reach support through our <Link href="/contact" className="text-cyan-300 underline">Contact</Link> page. Partners and enterprise customers receive priority support.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">FAQ</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Frequently asked questions</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">Quick answers to common questions about OminiMesh.</p>

        <div className="mt-12 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base leading-7 text-slate-300">Still have questions? <Link href="/contact" className="text-cyan-300 underline">Contact us</Link>.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
