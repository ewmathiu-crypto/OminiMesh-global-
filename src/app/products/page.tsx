import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const products = [
  {
    name: "OminiMesh Lite",
    type: "Budget Mi-Fi",
    price: "$29",
    description: "Ultra-affordable portable hotspot with zero signal drop and zero coverage gap technology.",
    features: ["Zero-drop signal lock", "Zero-coverage error correction", "4G LTE", "Up to 5 devices", "10hr battery"],
  },
  {
    name: "OminiMesh Air",
    type: "Budget Router",
    price: "$25",
    description: "Cheapest home router with AI stabilization for zero packet loss and zero dead zones.",
    features: ["AI dead-zone elimination", "Zero-error retransmission", "Dual-band Wi-Fi", "Parental controls", "Easy setup"],
  },
  {
    name: "OminiMesh Go",
    type: "Portable Mi-Fi",
    price: "$79",
    description: "Compact travel router with eSIM + Wi-Fi 6. Connects anywhere.",
    features: ["eSIM enabled", "Wi-Fi 6", "8hr battery", "Up to 10 devices"],
  },
  {
    name: "OminiMesh Home",
    type: "Home Router",
    price: "$149",
    description: "Whole-home coverage with AI routing and mesh support.",
    features: ["Wi-Fi 6E", "AI routing", "Mesh ready", "VPN built-in"],
    highlighted: true,
  },
  {
    name: "OminiMesh Pro",
    type: "Business Router",
    price: "$349",
    description: "For teams, venues, and deployable connectivity.",
    features: ["5G backup", "Multi-WAN", "SLA-ready", "Remote management"],
  },
  {
    name: "OminiMesh Site",
    type: "Industrial Gateway",
    price: "$599",
    description: "Ruggedized connectivity for remote sites and operations.",
    features: ["IP67 rated", "Satellite backup", "Power over Ethernet", "Extended temp"],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(183,244,107,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">Hardware</div>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl">OminiMesh Routers & Mi-Fi</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Branded connectivity hardware built for travelers, homes, businesses, and remote operations. AI-powered routing out of the box.</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className={
                product.highlighted
                  ? "rounded-3xl border border-cyan-300/40 bg-cyan-300/10 p-6 shadow-2xl shadow-cyan-500/20"
                  : "rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              }
            >
              <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{product.type}</div>
              <h3 className="mt-2 text-xl font-bold text-white">{product.name}</h3>
              <div className="mt-2 text-3xl font-black text-white">{product.price}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{product.description}</p>
              <ul className="mt-4 space-y-1 text-xs leading-7 text-slate-400">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                Order / Inquire
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-purple-500/10 p-8">
          <h3 className="text-2xl font-bold text-white">Bulk & Custom Orders</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">For corporate, government, or large deployment orders, we offer custom branding, bulk pricing, and dedicated onboarding. Contact our sales team through the <Link href="/contact" className="text-cyan-300 underline">Contact</Link> page or email sales@ominimesh.com.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
