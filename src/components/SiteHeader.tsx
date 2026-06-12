import { Logo } from "@/components/Logo";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6">
      <Link href="/" className="inline-flex items-center">
        <span className="rounded-2xl bg-cyan-300/10 p-1.5 ring-1 ring-cyan-300/30">
          <Logo className="w-40 sm:w-52" />
        </span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Home</Link>
        <Link href="/about" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">About</Link>
        <Link href="/partners" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Partners</Link>
        <Link href="/products" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Products</Link>
        <Link href="/card" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Card</Link>
        <Link href="/sim" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">SIM</Link>
        <Link href="/legal" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Legal</Link>
        <Link href="/terms" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Terms</Link>
        <Link href="/privacy-policy" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Privacy Policy</Link>
        <Link href="/contact" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Contact</Link>
        <Link href="/kenya" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">Kenya</Link>
        <Link href="/faq" className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">FAQ</Link>
      </nav>
      <a
        href="/#join"
        className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
      >
        Join waitlist
      </a>
    </header>
  );
}
