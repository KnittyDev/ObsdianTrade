"use client";

import Link from "next/link";

export function SkipToContent() {
  return (
    <Link
      href="#main"
      className="absolute left-4 top-4 z-[200] -translate-y-20 rounded-lg border border-white/20 bg-white px-4 py-2 text-sm font-bold text-black transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </Link>
  );
}
