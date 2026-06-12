"use client";

import { FormEvent, useState } from "react";

type Role = "traveler" | "business" | "partner" | "investor";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") || "").trim(),
      role: String(formData.get("role") || "traveler") as Role,
      country: String(formData.get("country") || "").trim(),
    };

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setMessage(result.message);
    event.currentTarget.reset();
  }

  return (
    <form
      className="mx-auto w-full max-w-xl space-y-4 rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-5"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10"
        />
        <label className="sr-only" htmlFor="role">
          Role
        </label>
        <select
          id="role"
          name="role"
          defaultValue="traveler"
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10"
        >
          <option value="traveler">Traveler</option>
          <option value="business">Business</option>
          <option value="partner">Partner</option>
          <option value="investor">Investor</option>
        </select>
      </div>

      <label className="sr-only" htmlFor="country">
        Country
      </label>
      <input
        id="country"
        name="country"
        type="text"
        required
        placeholder="Country or city"
        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-4 focus:ring-cyan-300/10"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Joining..." : "Join the global waitlist"}
      </button>

      {message && (
        <p
          aria-live="polite"
          className={`text-center text-sm ${
            status === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
