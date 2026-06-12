"use client";

import { useState } from "react";
import Link from "next/link";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "").trim();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message || "Failed to subscribe.");
        return;
      }

      setStatus("success");
      setMessage("Subscribed! You'll get updates and pilot invites.");
      event.currentTarget.reset();
    } catch (e) {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-300/60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          aria-live="polite"
          className={`text-center text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}
        >
          {message}
        </p>
      )}
      <p className="text-center text-xs text-slate-500">
        By subscribing, you agree to our <Link href="/privacy-policy" className="text-cyan-300 underline">Privacy Policy</Link>.
      </p>
    </form>
  );
}
