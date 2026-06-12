import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WaitlistForm } from "@/components/WaitlistForm";

const features = [
  {
    icon: "📶",
    title: "Wi-Fi-first global access",
    description:
      "Connect through partner Wi-Fi, venues, campuses, airports, hotels, and community hotspots before using paid cellular or satellite paths.",
  },
  {
    icon: "🛰️",
    title: "Satellite-backed reliability",
    description:
      "Use satellite as intelligent backup where fiber and towers are unavailable, especially for remote, maritime, aviation, and emergency routes.",
  },
  {
    icon: "📱",
    title: "eSIM and SIM control",
    description:
      "Activate local, regional, and global profiles from one account with automatic network selection based on cost, speed, and reliability.",
  },
  {
    icon: "🧠",
    title: "AI routing brain",
    description:
      "OminiMesh AI scores every available path and recommends the best connection using speed, latency, packet loss, price, and security.",
  },
  {
    icon: "💳",
    title: "Payments and wallet",
    description:
      "Subscriptions, daily passes, top-ups, refunds, business billing, and the OminiMesh Virtual Visa wallet for global spending.",
  },
  {
    icon: "🛡️",
    title: "Zero Trust security",
    description:
      "Protect users with device binding, encrypted tunnels, fraud detection, secure authentication, and partner-grade access controls.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description:
      "Get started with basic smart Wi-Fi discovery and limited community hotspot access.",
    features: [
      "Basic Wi-Fi hotspot discovery",
      "Community hotspot access",
      "Waitlist access",
      "Community support",
    ],
  },
  {
    name: "Global Basic",
    price: "$9.99",
    description:
      "Affordable global access for travelers, students, and everyday users who need reliable internet on the move.",
    features: [
      "Smart Wi-Fi access",
      "eSIM waitlist priority",
      "Basic AI network score",
      "Fair-use data routing",
      "Email support",
    ],
  },
  {
    name: "Global Plus",
    price: "$19.99",
    description:
      "Priority routing for remote workers and frequent travelers who need better speed, reliability, and support.",
    features: [
      "Priority network selection",
      "Multi-country roaming",
      "Speed and latency history",
      "Wallet top-up access",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$149",
    description:
      "For teams, venues, and partners that need managed access, analytics, and controlled connectivity.",
    features: [
      "Team dashboard",
      "Partner hotspot tools",
      "Usage analytics",
      "SLA-ready routing",
      "Business support",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-100 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <Image
              src="/omnimesh-mark.svg"
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
            />
            Global AI Network
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            One intelligent internet for the planet.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            OminiMesh unifies Wi-Fi, fiber, towers, satellites, eSIM,
            payments, and AI routing into one affordable connectivity platform
            for travelers, businesses, partners, and future global users.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#join"
              className="rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-200"
            >
              Join the waitlist
            </Link>
            <a
              href="#plans"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              View plans
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
            {[
              ["240+", "target countries"],
              ["AI", "network routing"],
              ["99.9%", "pilot uptime goal"],
            ].map(([value, label]) => (
              <div
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"
                key={label}
              >
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-sm font-semibold text-cyan-100">
                  OminiMesh AI
                </div>
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Network decision engine
                </div>
              </div>
              <div className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-300">
                Live
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Wi-Fi 7 hotspot", "94", "Best score"],
                ["5G eSIM roaming", "78", "Backup route"],
                ["Satellite link", "52", "Remote backup"],
              ].map(([network, score, status]) => (
                <div
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"
                  key={network}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-white">{network}</div>
                      <div className="mt-1 text-xs text-slate-500">{status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-cyan-300">
                        {score}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        AI score
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-lime-300"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50 ring-1 ring-cyan-300/20">
              Recommended: connect to the highest-scoring trusted Wi-Fi path,
              then fail over automatically to 5G or satellite if performance drops.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="features">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Platform
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Built for the future of global connectivity.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            OminiMesh starts as a software control layer, then grows into a
            global AI telecom operating system with partners, infrastructure,
            payments, and intelligent routing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="plans">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Pricing
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            Start affordable. Scale globally.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Early plans use Smart Unlimited access: unlimited connectivity with
            fair-use routing based on network capacity, plan level, and local
            partner availability.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="join">
        <div className="overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-purple-500/10 p-6 shadow-2xl shadow-cyan-500/10 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
                Waitlist
              </div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Join the first global AI internet network.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Be first for eSIM access, partner Wi-Fi, city pilots, business
                plans, and investor updates.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
