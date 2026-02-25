"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/app/components/ToastProvider";

const allTrades = [
  { id: 1, date: "2025-02-03 14:32", pair: "BTC/USDT", side: "Long", amount: "0.024 BTC", price: "€78,200", pnl: "+€124", status: "Filled" },
  { id: 2, date: "2025-02-03 14:15", pair: "ETH/USDT", side: "Short", amount: "0.5 ETH", price: "€3,420", pnl: "-€32", status: "Filled" },
  { id: 3, date: "2025-02-03 13:08", pair: "BTC/USDT", side: "Long", amount: "0.012 BTC", price: "€78,100", pnl: "+€58", status: "Filled" },
  { id: 4, date: "2025-02-03 12:00", pair: "SOL/USDT", side: "Long", amount: "12 SOL", price: "€142", pnl: "+€89", status: "Filled" },
  { id: 5, date: "2025-02-03 10:45", pair: "BTC/USDT", side: "Short", amount: "0.008 BTC", price: "€78,500", pnl: "-€18", status: "Filled" },
  { id: 6, date: "2025-02-02 18:20", pair: "ETH/USDT", side: "Long", amount: "0.3 ETH", price: "€3,380", pnl: "+€42", status: "Filled" },
  { id: 7, date: "2025-02-02 16:00", pair: "BTC/USDT", side: "Long", amount: "0.02 BTC", price: "€77,900", pnl: "+€96", status: "Filled" },
];

function downloadCsv(trades: typeof allTrades) {
  const headers = "Date,Pair,Side,Amount,Price,P&L,Status\n";
  const rows = trades.map((t) => `${t.date},${t.pair},${t.side},${t.amount},${t.price},${t.pnl},${t.status}`).join("\n");
  const blob = new Blob([headers + rows], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `obsidian-trades-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function TradesPage() {
  const [pairFilter, setPairFilter] = useState<string>("all");
  const [sideFilter, setSideFilter] = useState<string>("all");
  const { addToast } = useToast();

  const pairs = ["all", ...new Set(allTrades.map((t) => t.pair))];
  const filteredTrades = allTrades.filter((t) => {
    if (pairFilter !== "all" && t.pair !== pairFilter) return false;
    if (sideFilter !== "all" && t.side !== sideFilter) return false;
    return true;
  });

  const handleExport = () => {
    downloadCsv(filteredTrades);
    addToast("Trades exported to CSV", "success");
  };

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
        <button
          type="button"
          onClick={handleExport}
          disabled={filteredTrades.length === 0}
          className="ml-auto flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="material-symbols-outlined !text-[18px]">download</span>
          Export CSV
        </button>
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
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="material-symbols-outlined mb-4 text-6xl text-white/20">swap_horiz</span>
            <h3 className="text-lg font-semibold text-white">No trades found</h3>
            <p className="mt-2 max-w-sm text-sm text-gray-400">
              {pairFilter !== "all" || sideFilter !== "all"
                ? "No trades match your filters. Try changing the filters above."
                : "Your trade history will appear here once the bot executes trades."}
            </p>
            {(pairFilter !== "all" || sideFilter !== "all") ? (
              <button
                type="button"
                onClick={() => { setPairFilter("all"); setSideFilter("all"); }}
                className="mt-6 cursor-pointer rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Clear filters
              </button>
            ) : (
              <Link
                href="/dashboard/bots"
                className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-black hover:bg-gray-200"
              >
                Manage bots
                <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
