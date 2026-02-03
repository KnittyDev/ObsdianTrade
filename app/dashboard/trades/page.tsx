"use client";

import { useState } from "react";

const allTrades = [
  { id: 1, date: "2025-02-03 14:32", pair: "BTC/USDT", side: "Long", amount: "0.024 BTC", price: "€78,200", pnl: "+€124", status: "Filled" },
  { id: 2, date: "2025-02-03 14:15", pair: "ETH/USDT", side: "Short", amount: "0.5 ETH", price: "€3,420", pnl: "-€32", status: "Filled" },
  { id: 3, date: "2025-02-03 13:08", pair: "BTC/USDT", side: "Long", amount: "0.012 BTC", price: "€78,100", pnl: "+€58", status: "Filled" },
  { id: 4, date: "2025-02-03 12:00", pair: "SOL/USDT", side: "Long", amount: "12 SOL", price: "€142", pnl: "+€89", status: "Filled" },
  { id: 5, date: "2025-02-03 10:45", pair: "BTC/USDT", side: "Short", amount: "0.008 BTC", price: "€78,500", pnl: "-€18", status: "Filled" },
  { id: 6, date: "2025-02-02 18:20", pair: "ETH/USDT", side: "Long", amount: "0.3 ETH", price: "€3,380", pnl: "+€42", status: "Filled" },
  { id: 7, date: "2025-02-02 16:00", pair: "BTC/USDT", side: "Long", amount: "0.02 BTC", price: "€77,900", pnl: "+€96", status: "Filled" },
];

export default function TradesPage() {
  const [pairFilter, setPairFilter] = useState<string>("all");
  const [sideFilter, setSideFilter] = useState<string>("all");

  const pairs = ["all", ...new Set(allTrades.map((t) => t.pair))];
  const filteredTrades = allTrades.filter((t) => {
    if (pairFilter !== "all" && t.pair !== pairFilter) return false;
    if (sideFilter !== "all" && t.side !== sideFilter) return false;
    return true;
  });

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Trades
        </h1>
        <p className="mt-1 text-gray-400">
          Full trade history and filters.
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card mb-6 flex flex-wrap items-center gap-4 rounded-xl border border-white/10 p-4">
        <span className="material-symbols-outlined text-gray-400">filter_list</span>
        <select
          value={pairFilter}
          onChange={(e) => setPairFilter(e.target.value)}
          className="cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <option value="all" className="bg-[#111] text-white">All pairs</option>
          {pairs.filter((p) => p !== "all").map((p) => (
            <option key={p} value={p} className="bg-[#111] text-white">{p}</option>
          ))}
        </select>
        <select
          value={sideFilter}
          onChange={(e) => setSideFilter(e.target.value)}
          className="cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <option value="all" className="bg-[#111] text-white">All sides</option>
          <option value="Long" className="bg-[#111] text-white">Long</option>
          <option value="Short" className="bg-[#111] text-white">Short</option>
        </select>
        <span className="text-sm text-gray-500">
          {filteredTrades.length} trade{filteredTrades.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Trades table */}
      <div className="glass-card rounded-xl border border-white/10 p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <span className="material-symbols-outlined text-xl">swap_horiz</span>
          Trade history
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-gray-400">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Pair</th>
                <th className="pb-3 font-medium">Side</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">P&L</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrades.map((trade) => (
                <tr
                  key={trade.id}
                  className="border-b border-white/5 text-white last:border-0"
                >
                  <td className="py-3 text-gray-400">{trade.date}</td>
                  <td className="py-3 font-medium">{trade.pair}</td>
                  <td className="py-3">
                    <span
                      className={
                        trade.side === "Long"
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    >
                      {trade.side}
                    </span>
                  </td>
                  <td className="py-3 text-gray-300">{trade.amount}</td>
                  <td className="py-3 text-gray-300">{trade.price}</td>
                  <td
                    className={`py-3 font-medium ${
                      trade.pnl.startsWith("+")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {trade.pnl}
                  </td>
                  <td className="py-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                      {trade.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTrades.length === 0 && (
          <p className="py-8 text-center text-gray-500">No trades match your filters.</p>
        )}
      </div>
    </div>
  );
}
