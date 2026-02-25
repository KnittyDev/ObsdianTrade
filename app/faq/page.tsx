"use client";

import Link from "next/link";
import { useState } from "react";
import { BackgroundEffects, Navbar } from "@/app/components/landing";

const faqs = [
  {
    q: "How does the AI trading bot work?",
    a: "Our bot uses neural networks to analyze market data and execute trades automatically based on your risk settings. You set take-profit and stop-loss levels; the bot runs 24/7 within those parameters.",
  },
  {
    q: "What exchanges are supported?",
    a: "We integrate with major exchanges via API. Connect your exchange API keys in Settings to enable automated trading. Only use keys with trading permissions you're comfortable with.",
  },
  {
    q: "Is my funds safe?",
    a: "We never hold your funds. Trades are executed on your connected exchange. Use strong passwords, 2FA, and only grant the minimum API permissions required.",
  },
  {
    q: "How do I withdraw?",
    a: "Withdrawals are made from your Portfolio page. Select the asset, enter the destination address and amount. Withdrawals are processed according to your plan and network conditions.",
  },
  {
    q: "Can I pause the bot?",
    a: "Yes. In Manage bots you can pause or resume each strategy. Pausing stops new trades but does not close existing positions automatically.",
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundEffects />
      <Navbar />
      <main id="main" className="relative z-10 mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
          Back to home
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">
          Frequently asked questions
        </h1>
        <p className="mb-10 text-gray-400">
          Quick answers to common questions about Obsidian.
        </p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden rounded-xl border border-white/10 transition-colors hover:bg-white/[0.02]"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <span className="material-symbols-outlined shrink-0 text-gray-400">
                  {openId === i ? "expand_less" : "expand_more"}
                </span>
              </button>
              {openId === i && (
                <div className="border-t border-white/10 px-5 pb-4 pt-0">
                  <p className="text-sm leading-relaxed text-gray-400">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
