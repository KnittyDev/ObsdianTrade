import { NextResponse } from "next/server";

const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch(COINGECKO_URL, {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      throw new Error("CoinGecko API error");
    }

    const data = await res.json();
    const bitcoin = data?.bitcoin;

    if (!bitcoin) {
      throw new Error("Invalid response");
    }

    const usd = Number(bitcoin.usd) || 0;
    const usd24hChange = bitcoin.usd_24h_change != null
      ? Number(bitcoin.usd_24h_change)
      : null;

    return NextResponse.json({
      usd,
      usd_24h_change: usd24hChange,
    });
  } catch (error) {
    console.error("BTC price fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch BTC price" },
      { status: 500 }
    );
  }
}
