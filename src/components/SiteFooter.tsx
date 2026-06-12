import { Logo } from "@/components/Logo";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 px-6 py-8 text-sm text-slate-500 sm:flex-row">
      <Link href="/" className="inline-flex w-fit">
        <Logo className="w-32 sm:w-40" />
      </Link>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/" className="transition hover:text-cyan-300">Home</Link>
        <Link href="/about" className="transition hover:text-cyan-300">About</Link>
        <Link href="/legal" className="transition hover:text-cyan-300">Legal</Link>
        <Link href="/terms" className="transition hover:text-cyan-300">Terms</Link>
        <Link href="/privacy-policy" className="transition hover:text-cyan-300">Privacy Policy</Link>
        <Link href="/contact" className="transition hover:text-cyan-300">Contact</Link>
        <Link href="/kenya" className="transition hover:text-cyan-300">Kenya</Link>
        <Link href="/faq" className="transition hover:text-cyan-300">FAQ</Link>
      </div>
      <div className="text-xs text-slate-600">© 2026 OminiMesh Global. All rights reserved.</div>
    </footer>
  );
}
