"use client";

import { useState } from "react";

type ActivityType = "all" | "trade" | "deposit" | "withdrawal";

const activities = [
  { id: 1, type: "trade" as const, date: "2025-02-03 14:32", desc: "BTC/USDT Long", amount: "+€124", asset: "0.024 BTC", status: "Filled" },
  { id: 2, type: "deposit" as const, date: "2025-02-03 12:15", desc: "Deposit BTC", amount: "+0.05 BTC", asset: "€3,910", status: "Completed" },
  { id: 3, type: "trade" as const, date: "2025-02-03 14:15", desc: "ETH/USDT Short", amount: "-€32", asset: "0.5 ETH", status: "Filled" },
  { id: 4, type: "withdrawal" as const, date: "2025-02-03 11:00", desc: "Withdraw USDT", amount: "-500 USDT", asset: "€500", status: "Completed" },
  { id: 5, type: "trade" as const, date: "2025-02-03 13:08", desc: "BTC/USDT Long", amount: "+€58", asset: "0.012 BTC", status: "Filled" },
  { id: 6, type: "deposit" as const, date: "2025-02-02 18:30", desc: "Deposit ETH", amount: "+0.5 ETH", asset: "€1,690", status: "Completed" },
  { id: 7, type: "trade" as const, date: "2025-02-03 12:00", desc: "SOL/USDT Long", amount: "+€89", asset: "12 SOL", status: "Filled" },
  { id: 8, type: "withdrawal" as const, date: "2025-02-02 16:45", desc: "Withdraw BTC", amount: "-0.01 BTC", asset: "€779", status: "Completed" },
];

const typeFilters: { value: ActivityType; label: string; icon: string }[] = [
  { value: "all", label: "All", icon: "list" },
  { value: "trade", label: "Trades", icon: "swap_horiz" },
  { value: "deposit", label: "Deposits", icon: "add" },
  { value: "withdrawal", label: "Withdrawals", icon: "arrow_circle_up" },
];

function getTypeBadge(type: "trade" | "deposit" | "withdrawal") {
  switch (type) {
    case "trade":
      return "bg-white/10 text-white border-white/20";
    case "deposit":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    case "withdrawal":
      return "bg-amber-500/10 text-amber-400 border-amber-500/30";
  }
}

function getTypeLabel(type: "trade" | "deposit" | "withdrawal") {
  switch (type) {
    case "trade": return "Trade";
    case "deposit": return "Deposit";
    case "withdrawal": return "Withdrawal";
  }
}

export default function ActivityPage() {
  const [filter, setFilter] = useState<ActivityType>("all");

  const filtered = activities.filter((a) => filter === "all" || a.type === filter);

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Activity
        </h1>
        <p className="mt-1 text-gray-400">
          Trades, deposits and withdrawals in one place.
        </p>
      </div>

      {/* Type filter */}
      <div className="glass-card mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-white/10 p-4">
        {typeFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
              filter === f.value
                ? "border-white/30 bg-white/10 text-white"
                : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined !text-[18px]">{f.icon}</span>
            {f.label}
          </button>
        ))}
        <span className="ml-auto text-sm text-gray-500">
          {filtered.length} item{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Activity list */}
      <div className="glass-card rounded-xl border border-white/10 p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <span className="material-symbols-outlined text-xl">history</span>
          History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-gray-400">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium">Amount / P&L</th>
                <th className="pb-3 font-medium">Asset / Pair</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr
                  key={a.id}
                  className="border-b border-white/5 text-white last:border-0"
                >
                  <td className="py-3 text-gray-400">{a.date}</td>
                  <td className="py-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${getTypeBadge(a.type)}`}
                    >
                      {getTypeLabel(a.type)}
                    </span>
                  </td>
                  <td className="py-3 font-medium">{a.desc}</td>
                  <td
                    className={`py-3 font-medium ${
                      a.type === "trade"
                        ? a.amount.startsWith("+")
                          ? "text-emerald-400"
                          : "text-red-400"
                        : a.type === "deposit"
                          ? "text-emerald-400"
                          : "text-amber-400"
                    }`}
                  >
                    {a.amount}
                  </td>
                  <td className="py-3 text-gray-300">{a.asset}</td>
                  <td className="py-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <p className="py-8 text-center text-gray-500">No activity for this filter.</p>
        )}
      </div>
    </div>
  );
}
