"use client";

import { useEffect, useState } from "react";
import { CryptoIcon } from "./CryptoIcon";

const FALLBACK_PRICE = 48291.5;
const FALLBACK_CHANGE = 5.2;

function formatPrice(usd: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(usd);
}

function formatChange(change: number | null): string {
  if (change == null) return `+${FALLBACK_CHANGE}%`;
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}

export function HeroChart() {
  const [price, setPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchBtcPrice() {
      try {
        const res = await fetch("/api/crypto/btc");
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        if (!cancelled) {
          setPrice(data.usd);
          setChange24h(data.usd_24h_change ?? null);
        }
      } catch {
        if (!cancelled) {
          setPrice(FALLBACK_PRICE);
          setChange24h(FALLBACK_CHANGE);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchBtcPrice();
    return () => {
      cancelled = true;
    };
  }, []);

  const displayPrice = price ?? FALLBACK_PRICE;
  const displayChange = change24h ?? FALLBACK_CHANGE;
  const isPositive = displayChange >= 0;

  return (
    <div className="relative mx-auto w-full max-w-[600px] perspective-1000 lg:mr-0">
      <div className="glass-card group relative z-10 overflow-hidden rounded-2xl border border-white/10 p-6 shadow-2xl shadow-black">
        {/* Card Header */}
        <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-0.5">
              <CryptoIcon symbol="btc" size={28} variant="branded" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Bitcoin / USD</h3>
              <p className="font-mono text-xs text-gray-500">
                Perpetual Contract
              </p>
            </div>
          </div>
          <div className="text-right">
            {loading ? (
              <div className="font-mono text-lg font-bold text-white text-glow animate-pulse">
                —
              </div>
            ) : (
              <h3 className="font-mono text-lg font-bold text-white text-glow">
                {formatPrice(displayPrice)}
              </h3>
            )}
            <p
              className={`flex items-center justify-end gap-1 font-mono text-xs ${
                isPositive ? "text-gray-400" : "text-red-400"
              }`}
            >
              <span className="material-symbols-outlined !text-[14px]">
                {isPositive ? "trending_up" : "trending_down"}
              </span>
              {formatChange(change24h)}
            </p>
          </div>
        </div>

        {/* Chart Graphic (SVG) */}
        <div className="relative h-[240px] w-full">
          {/* Grid Lines */}
          <div className="absolute inset-0 grid w-full grid-rows-4">
            <div className="w-full border-b border-white/5" />
            <div className="w-full border-b border-white/5" />
            <div className="w-full border-b border-white/5" />
          </div>

          {/* SVG Chart */}
          <svg
            className="h-full w-full overflow-visible preserve-3d"
            viewBox="0 0 400 200"
          >
            <defs>
              <linearGradient
                id="gradient"
                x1="0%"
                x2="0%"
                y1="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgba(255, 255, 255, 0.15)" }}
                />
                <stop offset="100%" style={{ stopColor: "rgba(255, 255, 255, 0)" }} />
              </linearGradient>
            </defs>
            <path
              className="chart-line drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              d="M0,150 C50,150 50,100 100,100 C150,100 150,160 200,130 C250,100 250,50 300,80 C350,110 350,20 400,20"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth={2}
            />
            <path
              d="M0,150 C50,150 50,100 100,100 C150,100 150,160 200,130 C250,100 250,50 300,80 C350,110 350,20 400,20 V200 H0 Z"
              fill="url(#gradient)"
              stroke="none"
            />
            <circle
              cx={300}
              cy={80}
              r={4}
              fill="#000000"
              stroke="#FFFFFF"
              strokeWidth={2}
            />
            <circle
              className="animate-pulse"
              cx={400}
              cy={20}
              r={6}
              fill="#FFFFFF"
            >
              <animate
                attributeName="r"
                dur="2s"
                repeatCount="indefinite"
                values="6;8;6"
              />
              <animate
                attributeName="opacity"
                dur="2s"
                repeatCount="indefinite"
                values="1;0.5;1"
              />
            </circle>
          </svg>

          {/* Bot Actions Overlay */}
          <div className="absolute left-[45%] top-[30%] rounded border border-white/20 bg-black/90 px-3 py-1.5 font-mono text-xs text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur">
            BUY SIGNAL DETECTED
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-4 flex gap-2">
          <div className="flex-1 rounded border border-white/5 bg-white/5 p-2 text-center">
            <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-gray-500">
              24h Vol
            </span>
            <span className="font-mono text-sm text-white">1.2B</span>
          </div>
          <div className="flex-1 rounded border border-white/5 bg-white/5 p-2 text-center">
            <span className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-gray-500">
              Net Flow
            </span>
            <span className="font-mono text-sm text-white">+24M</span>
          </div>
        </div>
      </div>

      {/* Decorative back glows */}
      <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-white/10 to-gray-500/10 opacity-20 blur-2xl" />
    </div>
  );
}
