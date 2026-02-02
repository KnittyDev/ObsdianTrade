const features = [
  {
    title: "AI Market Analysis",
    description:
      "Predictive market scanning using deep learning models that analyze millions of data points per second.",
    icon: "psychology",
  },
  {
    title: "Auto-Execution",
    description:
      "0ms latency trading infrastructure ensures perfect entry and exit points, eliminating slippage.",
    icon: "bolt",
  },
  {
    title: "Risk Management",
    description:
      "Automated stop-loss protection protocols and portfolio balancing to secure gains in volatile markets.",
    icon: "shield",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Powered by Next-Gen Intelligence
            </h2>
            <p className="max-w-lg font-body text-gray-400">
              Our bot utilizes advanced neural networks to predict market
              movements with unprecedented accuracy.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-bold tracking-wide text-white transition-colors hover:text-gray-300"
          >
            Explore all features
            <span className="material-symbols-outlined !text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card group flex flex-col gap-4 rounded-2xl p-8 transition-colors hover:bg-white/5"
            >
              <div className="mb-2 flex size-12 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/5 transition-transform duration-300 group-hover:scale-110">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: 28 }}
                >
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="font-body text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
