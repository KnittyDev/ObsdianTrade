<<<<<<< HEAD
# Obsidian

Landing page for **Obsidian** — a luxury crypto trading bot SaaS. Built with Next.js and a dark, modern UI.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** — custom theme, glass cards, gradients
- **Material Symbols** — icons
- **cryptocurrency-icons** — crypto assets (e.g. BTC) in the hero chart

## Features

- **Hero** — headline, CTA, “Watch Demo”, live-style BTC chart (API-backed)
- **Stats** — key metrics (users, volume, uptime)
- **Features** — value props (AI strategies, security, 24/7, support)
- **Calculator** — modal with:
  - Currency: USD, EUR, GBP, SEK
  - Investment amount
  - Risk category: Low risk, Normal risk, High risk, Challenge
  - Estimated profit for 7 days, 14 days, 30 days, 3–6–9 months, 1–2 years
- **Pricing** — Free, Yearly (€399), Unlimited plans
- **Footer** — links and CTA

## Getting started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description          |
| ------------- | -------------------- |
| `npm run dev` | Start dev server     |
| `npm run build` | Production build   |
| `npm run start` | Start production   |
| `npm run lint` | Run ESLint          |

## Project structure

```
app/
├── components/landing/   # Landing page sections
│   ├── BackgroundEffects.tsx
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── HeroChart.tsx
│   ├── StatsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── CalculatorSection.tsx
│   ├── PricingSection.tsx
│   ├── Footer.tsx
│   ├── CryptoIcon.tsx
│   └── index.ts
├── api/crypto/btc/      # BTC price/chart API route
├── globals.css          # Tailwind + custom styles
├── layout.tsx
└── page.tsx             # Home page composition
```

## License

Private — Obsidian Inc.
=======
# ObsidianTrading
Institutional-grade algorithms now available for your personal portfolio. Automate your strategy with zero latency and 24/7 market scanning.
>>>>>>> a8f746ec36efbfdafed5874882be672224172b9e
