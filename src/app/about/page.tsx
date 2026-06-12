import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">About</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">Building the future of global connectivity.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          OminiMesh was founded to solve one of humanity&apos;s most persistent problems: reliable, affordable internet access everywhere. Our team combines decades of experience in telecommunications, AI, and infrastructure to create a single intelligent platform that unifies Wi-Fi, fiber, towers, satellites, eSIM, payments, and routing.
        </p>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          We believe everyone deserves access to fast, secure, and affordable internet — whether you&apos;re traveling, working remotely, or building a business in an emerging market. That&apos;s why we&apos;re building OminiMesh as an open, partner-first ecosystem.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Our Mission</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">To deliver one intelligent, global internet that adapts to every user, device, and location — removing barriers and unlocking opportunity worldwide.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-lg font-semibold text-white">Our Vision</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">A world where connectivity is no longer limited by borders, carriers, or geography — where AI continuously optimizes the best path for every connection.</p>
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
