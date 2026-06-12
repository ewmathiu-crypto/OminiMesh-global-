"use client";

import { Logo } from "@/components/Logo";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/products", label: "Products" },
  { href: "/card", label: "Card" },
  { href: "/sim", label: "SIM" },
  { href: "/legal", label: "Legal" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
  { href: "/kenya", label: "Kenya" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6">
      <Link href="/" className="inline-flex items-center">
        <span className="rounded-2xl bg-cyan-300/10 p-1.5 ring-1 ring-cyan-300/30">
          <Logo className="w-40 sm:w-52" />
        </span>
      </Link>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-300/60 md:hidden"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </button>
      <nav
        className={`${open ? "flex" : "hidden"} w-full flex-col gap-4 md:flex md:flex-row md:items-center md:gap-6`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/#join"
        className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
      >
        Join waitlist
      </Link>
    </header>
  );
}
