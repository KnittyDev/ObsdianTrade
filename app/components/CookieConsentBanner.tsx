"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const STORAGE_KEY = "obsidian-cookie-consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="glass-card mx-auto max-w-4xl rounded-2xl border border-white/10 p-4 shadow-2xl md:flex md:items-center md:justify-between md:gap-6 md:p-5">
        <p className="mb-4 text-sm text-gray-300 md:mb-0 md:flex-1">
          We use cookies to improve your experience, analyze traffic, and personalize content. By continuing you agree to our{" "}
          <Link href="/privacy-policy" className="text-white underline underline-offset-2 hover:text-gray-300">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={accept}
            className="cursor-pointer rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-gray-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
