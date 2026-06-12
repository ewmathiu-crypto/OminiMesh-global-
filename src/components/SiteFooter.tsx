import Link from "next/link";
import { Logo } from "@/components/Logo";

const linkVariants = {
  base: "transition hover:text-cyan-300",
  active: "text-white",
  default: "text-slate-500",
};

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-white/10 px-6 py-8 text-sm text-slate-500 sm:flex-row">
      <Link href="/" className="inline-flex w-fit">
        <span className="rounded-2xl bg-cyan-300/10 p-1.5 ring-1 ring-cyan-300/30">
          <Logo className="w-32 sm:w-40" />
        </span>
      </Link>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/" className={`${linkVariants.base} ${linkVariants.default}`}>Home</Link>
        <Link href="/about" className={`${linkVariants.base} ${linkVariants.default}`}>About</Link>
        <Link href="/partners" className={`${linkVariants.base} ${linkVariants.default}`}>Partners</Link>
        <Link href="/products" className={`${linkVariants.base} ${linkVariants.default}`}>Products</Link>
        <Link href="/card" className={`${linkVariants.base} ${linkVariants.default}`}>Card</Link>
        <Link href="/sim" className={`${linkVariants.base} ${linkVariants.default}`}>SIM</Link>
        <Link href="/legal" className={`${linkVariants.base} ${linkVariants.default}`}>Legal</Link>
        <Link href="/terms" className={`${linkVariants.base} ${linkVariants.default}`}>Terms</Link>
        <Link href="/privacy-policy" className={`${linkVariants.base} ${linkVariants.default}`}>Privacy Policy</Link>
        <Link href="/contact" className={`${linkVariants.base} ${linkVariants.default}`}>Contact</Link>
        <Link href="/kenya" className={`${linkVariants.base} ${linkVariants.default}`}>Kenya</Link>
        <Link href="/faq" className={`${linkVariants.base} ${linkVariants.default}`}>FAQ</Link>
       </div>
      <div className="text-xs text-slate-600">© 2026 OminiMesh. All rights reserved.</div>
    </footer>
  );
}
