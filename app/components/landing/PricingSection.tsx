"use client";

const CURRENCY_SYMBOL = "€";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    priceLabel: "Free",
    period: null,
    features: [
      "Basic AI Signals",
      "2 Trades/Day",
      "Standard Support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "yearly",
    name: "Yearly",
    price: 129,
    priceLabel: null,
    period: "/year",
    features: [
      "Fully Automated Trading",
      "Autonomous Trading",
      "Unlimited Trades",
      "Loss Payment",
      "Guaranteed Gain",
      "Real-time Analytics",
      "Auto - Copy Trading from Admins",
      "Instant Earnings",
    ],
    cta: "Choose Yearly Plan",
    highlighted: true,
    badge: "Popular",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: 199,
    priceLabel: null,
    period: null,
    features: [
      "25€ Free (Drawable anytime)",
      "Autonomous Trading",
      "Unlimited Trades",
      "Loss Payment",
      "Guaranteed Gain",
      "Real-time Analytics",
      "Guaranteed payment even in losses",
      "Instant Earnings",
      "Instant Withdrawals",
    ],
    cta: "Join Now",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-10 flex flex-col items-center gap-6 px-4 text-center">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h2>
            <p className="font-body text-lg font-normal leading-relaxed text-gray-400">
              Unlock the power of AI trading. Choose the plan that fits your volume.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 px-4 py-3 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card group flex flex-col gap-6 rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "glow-effect relative border-white/30 md:-translate-y-4"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {plan.badge && (
                <div className="absolute right-0 top-0 p-4">
                  <span className="rounded-sm bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-lg font-semibold leading-tight ${
                    plan.highlighted ? "text-white" : "text-gray-400"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="flex items-baseline gap-1 text-white">
                  {plan.priceLabel ? (
                    <span className="text-4xl font-bold leading-tight tracking-tight">
                      {plan.priceLabel}
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold leading-tight tracking-tight">
                        {CURRENCY_SYMBOL}{plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-base font-medium leading-tight text-gray-500">
                          {plan.period}
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-4 border-t border-white/5 py-4 md:border-white/10">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className={`flex gap-3 text-sm font-medium transition-colors ${
                      plan.highlighted
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined !text-[20px]">
                      check
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className={`flex h-12 w-full cursor-pointer items-center justify-center rounded-lg px-4 text-sm font-bold leading-normal tracking-wide transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:bg-gray-200"
                    : "border border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
                }`}
              >
                <span className="truncate">{plan.cta}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Compare Link */}
        <div className="mb-8 mt-12 flex justify-center">
          <a
            href="#"
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-white"
          >
            <span>Compare all features in detail</span>
            <span className="material-symbols-outlined !text-[16px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
