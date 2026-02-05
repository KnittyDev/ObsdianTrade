const periods = [
  { label: "7 days", roi: "+12.4%", bar: 62 },
  { label: "30 days", roi: "+24.5%", bar: 82 },
  { label: "90 days", roi: "+89.2%", bar: 95 },
];

const metrics = [
  { label: "Win rate", value: "89%", icon: "military_tech", sub: "Last 30 days" },
  { label: "Avg. trade P&L", value: "+2.4%", icon: "trending_up", sub: "Per closed position" },
  { label: "Total volume", value: "€1.2M", icon: "bar_chart", sub: "All-time" },
];

export function PerformanceSection() {
  return (
    <section id="performance" className="relative z-10 px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Proven Performance
          </h2>
          <p className="max-w-xl font-body text-gray-400">
            Real results from our AI trading system. ROI and win rate are
            verified and updated regularly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* ROI by period */}
          <div className="glass-card rounded-2xl border border-white/10 p-8 transition-colors hover:bg-white/[0.02]">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
              <span className="material-symbols-outlined text-xl">show_chart</span>
              ROI by period
            </h3>
            <div className="space-y-6">
              {periods.map((p) => (
                <div key={p.label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-400">{p.label}</span>
                    <span className="font-medium text-emerald-400">{p.roi}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-white/30 to-emerald-500/50 transition-all duration-500"
                      style={{ width: `${p.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key metrics */}
          <div className="space-y-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="glass-card group flex items-center gap-6 rounded-2xl border border-white/10 p-6 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <span className="material-symbols-outlined text-2xl text-white">
                    {m.icon}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-400">{m.label}</p>
                  <p className="mt-0.5 text-2xl font-bold tracking-tight text-white">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-gray-500">
          Past performance does not guarantee future results. Figures are
          illustrative and may vary.
        </p>
      </div>
    </section>
  );
}
