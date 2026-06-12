"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("cookie-consent")) {
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl md:left-auto md:right-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-slate-300">
          We use cookies and analytics to improve your experience. By continuing, you agree to our <Link href="/privacy-policy" className="text-cyan-300 underline">Privacy Policy</Link>.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("cookie-consent", "accepted");
              setVisible(false);
            }}
            className="rounded-xl bg-cyan-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-950 transition hover:bg-cyan-200"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("cookie-consent", "declined");
              setVisible(false);
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:border-cyan-300/60"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
