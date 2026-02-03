"use client";

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

export default function PortfolioPage() {
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
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              Deposit
            </button>
            <button
              type="button"
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
    </div>
  );
}
