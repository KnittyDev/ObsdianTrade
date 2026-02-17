import type { Metadata } from "next";
import "material-symbols/outlined.css";
import "./globals.css";
import { CookieConsentBanner } from "@/app/components/CookieConsentBanner";
import { BackToTop } from "@/app/components/BackToTop";
import { ToastProvider } from "@/app/components/ToastProvider";
import { SkipToContent } from "@/app/components/SkipToContent";

export const metadata: Metadata = {
  title: "Obsidian - Luxury Crypto Bot",
  description:
    "Institutional-grade algorithms for your personal portfolio. Automate your strategy with zero latency and 24/7 market scanning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="overflow-x-hidden bg-background-dark font-display text-white antialiased">
        <SkipToContent />
        <ToastProvider>
          {children}
        </ToastProvider>
        <CookieConsentBanner />
        <BackToTop />
      </body>
    </html>
  );
}
