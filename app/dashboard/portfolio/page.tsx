"use client";

import { useState } from "react";

const portfolioSummary = {
  totalValue: "€12,450.00",
  change24h: "+2.4%",
  changeUp: true,
};

const holdings = [
  { asset: "BTC", name: "Bitcoin", amount: "0.124", value: "€9,720", allocation: 78, change24h: "+1.8%" },
  { asset: "ETH", name: "Ethereum", amount: "1.25", value: "€2,100", allocation: 17, change24h: "+3.2%" },
  { asset: "USDT", name: "Tether", amount: "630", value: "€630", allocation: 5, change24h: "0%" },
];

const ASSETS = [
  { value: "BTC", label: "Bitcoin (BTC)" },
  { value: "ETH", label: "Ethereum (ETH)" },
  { value: "USDT", label: "Tether (USDT)" },
];

export default function PortfolioPage() {
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [depositAsset, setDepositAsset] = useState("BTC");
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAsset, setWithdrawAsset] = useState("BTC");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Portfolio
        </h1>
        <p className="mt-1 text-gray-400">
          Your holdings and allocation.
        </p>
      </div>

      {/* Summary card */}
      <div className="glass-card mb-8 rounded-xl border border-white/10 p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-gray-400">Total portfolio value</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-white lg:text-4xl">
              {portfolioSummary.totalValue}
            </p>
            <p
              className={`mt-2 text-sm font-medium ${
                portfolioSummary.changeUp ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {portfolioSummary.change24h} (24h)
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setDepositOpen(true)}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              Deposit
            </button>
            <button
              type="button"
              onClick={() => setWithdrawOpen(true)}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-lg">arrow_circle_up</span>
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Holdings table */}
      <div className="glass-card rounded-xl border border-white/10 p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
          Holdings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-gray-400">
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Value</th>
                <th className="pb-3 font-medium">Allocation</th>
                <th className="pb-3 font-medium">24h</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((row) => (
                <tr
                  key={row.asset}
                  className="border-b border-white/5 text-white last:border-0"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                        {row.asset.slice(0, 2)}
                      </div>
                      <div>
                        <span className="font-medium">{row.asset}</span>
                        <span className="ml-2 text-gray-500">{row.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 font-medium text-gray-300">{row.amount}</td>
                  <td className="py-4 font-medium text-white">{row.value}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-white/30"
                          style={{ width: `${row.allocation}%` }}
                        />
                      </div>
                      <span className="text-gray-400">{row.allocation}%</span>
                    </div>
                  </td>
                  <td
                    className={`py-4 font-medium ${
                      row.change24h.startsWith("+")
                        ? "text-emerald-400"
                        : row.change24h.startsWith("-")
                          ? "text-red-400"
                          : "text-gray-400"
                    }`}
                  >
                    {row.change24h}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deposit modal */}
      {depositOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="deposit-title">
          <button
            type="button"
            onClick={() => setDepositOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close"
          />
          <div className="glass-card relative w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 id="deposit-title" className="flex items-center gap-2 text-xl font-bold text-white">
                <span className="material-symbols-outlined text-2xl">add</span>
                Deposit
              </h2>
              <button
                type="button"
                onClick={() => setDepositOpen(false)}
                className="cursor-pointer rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDepositOpen(false);
                setDepositAmount("");
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="deposit-asset" className="mb-2 block text-sm font-medium text-gray-400">Asset</label>
                <select
                  id="deposit-asset"
                  value={depositAsset}
                  onChange={(e) => setDepositAsset(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                >
                  {ASSETS.map((a) => (
                    <option key={a.value} value={a.value} className="bg-[#111] text-white">{a.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="deposit-amount" className="mb-2 block text-sm font-medium text-gray-400">Amount</label>
                <input
                  id="deposit-amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>
              <p className="text-xs text-gray-500">
                You will receive a deposit address after confirming. Only send {depositAsset} to this address.
              </p>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDepositOpen(false)}
                  className="flex-1 cursor-pointer rounded-lg border border-white/20 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer rounded-lg bg-white py-3 text-sm font-bold text-black hover:bg-gray-200"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Withdraw modal */}
      {withdrawOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="withdraw-title">
          <button
            type="button"
            onClick={() => setWithdrawOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close"
          />
          <div className="glass-card relative w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 id="withdraw-title" className="flex items-center gap-2 text-xl font-bold text-white">
                <span className="material-symbols-outlined text-2xl">arrow_circle_up</span>
                Withdraw
              </h2>
              <button
                type="button"
                onClick={() => setWithdrawOpen(false)}
                className="cursor-pointer rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setWithdrawOpen(false);
                setWithdrawAmount("");
                setWithdrawAddress("");
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="withdraw-asset" className="mb-2 block text-sm font-medium text-gray-400">Asset</label>
                <select
                  id="withdraw-asset"
                  value={withdrawAsset}
                  onChange={(e) => setWithdrawAsset(e.target.value)}
                  className="w-full cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                >
                  {ASSETS.map((a) => (
                    <option key={a.value} value={a.value} className="bg-[#111] text-white">{a.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="withdraw-address" className="mb-2 block text-sm font-medium text-gray-400">Destination address</label>
                <input
                  id="withdraw-address"
                  type="text"
                  placeholder={`Enter ${withdrawAsset} address`}
                  value={withdrawAddress}
                  onChange={(e) => setWithdrawAddress(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 font-mono text-sm"
                />
              </div>
              <div>
                <label htmlFor="withdraw-amount" className="mb-2 block text-sm font-medium text-gray-400">Amount</label>
                <input
                  id="withdraw-amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Available: {holdings.find((h) => h.asset === withdrawAsset)?.amount ?? "0"} {withdrawAsset}
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setWithdrawOpen(false)}
                  className="flex-1 cursor-pointer rounded-lg border border-white/20 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer rounded-lg bg-white py-3 text-sm font-bold text-black hover:bg-gray-200"
                >
                  Withdraw
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
