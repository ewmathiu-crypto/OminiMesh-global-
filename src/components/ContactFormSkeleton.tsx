"use client";

import { useState } from "react";
import Link from "next/link";

export function ContactFormSkeleton() {
  return (
    <form className="mt-10 grid gap-5" aria-busy="true" aria-label="Loading contact form">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="h-14 animate-pulse rounded-2xl bg-white/5" />
        <div className="h-14 animate-pulse rounded-2xl bg-white/5" />
      </div>
      <div className="h-14 animate-pulse rounded-2xl bg-white/5" />
      <div className="h-32 animate-pulse rounded-2xl bg-white/5" />
      <div className="h-14 w-full animate-pulse rounded-2xl bg-cyan-300/20 sm:w-auto" />
    </form>
  );
}
