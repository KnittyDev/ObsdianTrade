"use client";

import { useState, useMemo } from "react";

const CURRENCIES = [
  { value: "USD", label: "US Dollar (USD)", symbol: "$" },
  { value: "EUR", label: "Euro (EUR)", symbol: "€" },
  { value: "GBP", label: "British Pound (GBP)", symbol: "£" },
  { value: "SEK", label: "Swedish Krona (SEK)", symbol: "kr " },
] as const;

const DAYS_PER_MONTH = 30;

const RISK_CATEGORIES = [
  { value: "low", label: "Low risk", monthlyRate: 0.09 },
  { value: "normal", label: "Normal risk", monthlyRate: 0.15 },
  { value: "high", label: "High risk", monthlyRate: 0.28 },
  { value: "challenge", label: "Challenge", monthlyRate: 0.40 },
] as const;

const PERIODS: { label: string; days: number }[] = [
  { label: "7 days", days: 7 },
  { label: "14 days", days: 14 },
  { label: "30 days", days: 30 },
  { label: "3 months", days: 90 },
  { label: "6 months", days: 180 },
  { label: "9 months", days: 270 },
  { label: "1 year", days: 365 },
  { label: "2 years", days: 730 },
];

function formatMoney(value: number, symbol: string): string {
  const isSek = symbol.startsWith("kr");
  const n = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: isSek ? 0 : 2,
  }).format(value);
  return isSek ? `${symbol}${n}` : `${symbol}${n}`;
}

export function CalculatorSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currency, setCurrency] = useState<string>("EUR");
  const [investment, setInvestment] = useState<string>("1000");
  const [riskCategory, setRiskCategory] = useState<string>("normal");

  const currencySymbol =
    CURRENCIES.find((c) => c.value === currency)?.symbol ?? currency + " ";
  const monthlyRate =
    RISK_CATEGORIES.find((c) => c.value === riskCategory)?.monthlyRate ?? 0.08;

  const projections = useMemo(() => {
    const amount = Math.max(0, parseFloat(investment) || 0);
    if (amount <= 0) return PERIODS.map((p) => ({ ...p, profit: 0, total: amount }));

    return PERIODS.map(({ label, days }) => {
      const months = days / DAYS_PER_MONTH;
      const total = amount * Math.pow(1 + monthlyRate, months);
      const profit = total - amount;
      return { label, days, profit, total };
    });
  }, [investment, monthlyRate]);

  return (
    <>
      <section id="calculator" className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="glass-card flex flex-col items-center gap-6 rounded-2xl border border-white/10 px-8 py-12 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                New to crypto? Or want to see how much you could earn?
              </h2>
              <p className="max-w-xl font-body text-base text-gray-400">
                Use our calculator to estimate your potential returns and find
                the right plan for you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-black"
            >
              <span className="material-symbols-outlined !text-[20px]">
                calculate
              </span>
              Open Calculator
            </button>
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calculator-modal-title"
        >
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close modal"
          />
          <div className="glass-card relative max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <h2
                id="calculator-modal-title"
                className="text-xl font-bold text-white"
              >
                Profit Calculator
              </h2>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="cursor-pointer rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-6 pt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="calculator-currency"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Currency
                  </label>
                  <select
                    id="calculator-currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.value} value={c.value} className="bg-[#111] text-white">
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="calculator-investment"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Investment amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      {currencySymbol}
                    </span>
                    <input
                      id="calculator-investment"
                      type="number"
                      min="0"
                      step="100"
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                      className="w-full cursor-pointer rounded-lg border border-white/10 bg-white/5 py-3 pl-8 pr-4 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      placeholder="1000"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="calculator-risk"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Risk category
                </label>
                <select
                  id="calculator-risk"
                  value={riskCategory}
                  onChange={(e) => setRiskCategory(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                >
                  {RISK_CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value} className="bg-[#111] text-white">
                      {c.label}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Low risk ≈ 9%/mo · Normal ≈ 15%/mo · High ≈ 28%/mo · Challenge ≈ 40%/mo
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Estimated potential profit
                </h3>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
                  {projections.map(({ label, profit, total }) => (
                    <li
                      key={label}
                      className="flex items-center justify-between gap-2 border-b border-white/5 py-1.5 text-sm last:border-0"
                    >
                      <span className="shrink-0 font-medium text-white">{label}</span>
                      <span className="shrink-0 text-right text-gray-300">
                        <span className="text-emerald-400">
                          +{formatMoney(profit, currencySymbol)}
                        </span>
                        <span className="mx-0.5 text-white/50">→</span>
                        <span className="font-medium text-white">
                          {formatMoney(total, currencySymbol)}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-center text-xs text-gray-500">
              These are our guarantee fees. Any monthly losses incurred through Obsidian AI are our fault, and regular refunds will be made to compensate for our error.
              </p>
              <div className="flex justify-center">
                <a
                  href="#pricing"
                  onClick={() => setModalOpen(false)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-gray-200"
                >
                  View plans
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
