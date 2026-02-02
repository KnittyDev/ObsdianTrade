import { HeroChart } from "./HeroChart";

export function HeroSection() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center px-6 py-20 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Hero Content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-white">
              System Online v2.4
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tighter text-white lg:text-7xl">
            Let AI Trade <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
              While You Sleep
            </span>
          </h1>

          <p className="mx-auto max-w-xl font-body text-lg font-light leading-relaxed text-gray-400 lg:mx-0">
            Institutional-grade algorithms now available for your personal
            portfolio. Automate your strategy with zero latency and 24/7 market
            scanning.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              className="neon-glow flex h-14 min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-bold tracking-wide text-black transition-transform hover:scale-[1.02] sm:min-w-[240px]"
            >
              Start Trading Free
              <span className="material-symbols-outlined !text-[20px]">
                arrow_forward
              </span>
            </button>
            <button
              type="button"
              className="flex h-14 min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-8 text-base font-bold tracking-wide text-white transition-colors hover:bg-white/10 sm:min-w-[240px]"
            >
              <span className="material-symbols-outlined eye-blink !text-[20px]">
                visibility
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <HeroChart />
      </div>
    </section>
  );
}
