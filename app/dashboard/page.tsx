"use client";

const stats = [
  {
    label: "Portfolio value",
    value: "€12,450",
    change: "+8.2%",
    changeUp: true,
    icon: "account_balance_wallet",
  },
  {
    label: "ROI (30 days)",
    value: "+24.5%",
    change: "Verified",
    changeUp: true,
    icon: "trending_up",
  },
  {
    label: "Win rate",
    value: "89%",
    change: "+5% MoM",
    changeUp: true,
    icon: "military_tech",
  },
  {
    label: "Active bots",
    value: "2",
    change: "Running",
    changeUp: true,
    icon: "smart_toy",
  },
];

const recentTrades = [
  { pair: "BTC/USDT", side: "Long", amount: "0.024 BTC", pnl: "+€124", time: "2 min ago" },
  { pair: "ETH/USDT", side: "Short", amount: "0.5 ETH", pnl: "-€32", time: "15 min ago" },
  { pair: "BTC/USDT", side: "Long", amount: "0.012 BTC", pnl: "+€58", time: "1 hr ago" },
  { pair: "SOL/USDT", side: "Long", amount: "12 SOL", pnl: "+€89", time: "2 hr ago" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Overview
        </h1>
        <p className="mt-1 text-gray-400">
          Your AI trading performance at a glance.
        </p>
      </div>

      {/* Stats grid */}
      <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card group flex flex-col rounded-xl border border-white/10 p-6 transition-colors hover:bg-white/[0.04]"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="material-symbols-outlined text-2xl text-white/60">
                {stat.icon}
              </span>
              <span
                className={`text-xs font-medium ${
                  stat.changeUp ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-400">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-white lg:text-3xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Bot status & quick actions */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card rounded-xl border border-white/10 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <span className="material-symbols-outlined text-xl">
                smart_toy
              </span>
              Bot status
            </h2>
            <div className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-white">Active</span>
              <span className="text-xs text-gray-400">2 strategies running</span>
            </div>
            <button
              type="button"
              className="mt-4 w-full cursor-pointer rounded-lg border border-white/20 bg-white/5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Manage bots
            </button>
          </div>

          <div className="glass-card rounded-xl border border-white/10 p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Quick actions
            </h2>
            <div className="space-y-2">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
              >
                <span className="material-symbols-outlined text-xl">add</span>
                Deposit
              </button>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:bg-white/10"
              >
                <span className="material-symbols-outlined text-xl">
                  arrow_circle_up
                </span>
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Recent trades */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl border border-white/10 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <span className="material-symbols-outlined text-xl">
                  swap_horiz
                </span>
                Recent trades
              </h2>
              <a
                href="/dashboard/trades"
                className="cursor-pointer text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                View all →
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left text-gray-400">
                    <th className="pb-3 font-medium">Pair</th>
                    <th className="pb-3 font-medium">Side</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">P&L</th>
                    <th className="pb-3 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrades.map((trade, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 text-white last:border-0"
                    >
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
                      <td
                        className={`py-3 font-medium ${
                          trade.pnl.startsWith("+")
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        {trade.pnl}
                      </td>
                      <td className="py-3 text-gray-500">{trade.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
