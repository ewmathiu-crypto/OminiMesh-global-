import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,232,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(124,92,255,0.18),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle,black,transparent_78%)]" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <Image
            src="/omnimesh-logo.svg"
            alt="OmniMesh Global logo"
            width={1200}
            height={360}
            priority
            className="w-full max-w-4xl drop-shadow-[0_0_50px_rgba(41,232,255,0.28)]"
          />

          <div className="mt-10 flex items-center justify-center gap-4 rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm font-semibold tracking-[0.35em] text-cyan-100 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <Image
              src="/omnimesh-mark.svg"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
            />
            GLOBAL AI NETWORK
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            One internet for the planet. Wi-Fi, fiber, towers, satellites, eSIM,
            payments, and AI routing unified into one global connectivity brand.
          </p>
        </div>
      </section>
    </main>
  );
}
