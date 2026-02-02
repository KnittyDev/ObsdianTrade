const stats = [
  {
    label: "ROI (30 Days)",
    value: "+124%",
    subtext: "Verified by 3rd party",
    icon: "trending_up",
    subIcon: "check_circle",
  },
  {
    label: "Win Rate",
    value: "89%",
    subtext: "+5% month-over-month",
    icon: "military_tech",
    subIcon: "arrow_upward",
  },
  {
    label: "Active Neural Models",
    value: "12",
    subtext: "2 New models deployed",
    icon: "neurology",
    subIcon: "add",
  },
];

export function StatsSection() {
  return (
    <section className="relative z-10 px-6 py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-xl p-6 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <div className="absolute right-0 top-0 p-3 opacity-20 transition-opacity group-hover:opacity-100">
                <span className="material-symbols-outlined text-white">
                  {stat.icon}
                </span>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-400">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold tracking-tight text-white transition-colors text-glow lg:text-5xl group-hover:text-white">
                  {stat.value}
                </p>
              </div>
              <p className="mt-4 flex items-center gap-1 text-xs text-gray-400">
                <span className="material-symbols-outlined !text-[14px]">
                  {stat.subIcon}
                </span>
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
