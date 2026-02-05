import Link from "next/link";
import { BackgroundEffects, Navbar } from "@/app/components/landing";

export const metadata = {
  title: "Privacy Policy - Obsidian",
  description: "Privacy policy for Obsidian AI trading platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
          Back to home
        </Link>
        <div className="glass-card rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-10 text-sm text-gray-500">Last updated: February 2025</p>

          <div className="prose prose-invert max-w-none space-y-8 font-body text-gray-300">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                Obsidian Inc. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI trading platform and related services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">2. Information we collect</h2>
              <p className="mb-2 leading-relaxed">
                We may collect information that you provide directly, including:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>Account information (name, email address, password)</li>
                <li>Payment and financial information for deposits and withdrawals</li>
                <li>Transaction history and trading activity</li>
                <li>Communications and support requests</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                We also collect certain information automatically, such as IP address, device type, browser, and usage data when you access our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">3. How we use your information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services; to process transactions; to communicate with you; to comply with legal obligations; and to protect against fraud and abuse. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">4. Data security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your personal and financial data. This includes encryption, access controls, and regular security assessments. You are responsible for keeping your account credentials secure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">5. Your rights</h2>
              <p className="leading-relaxed">
                Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, to object to or restrict certain processing, and to data portability. To exercise these rights, contact us at the address below.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">6. Contact</h2>
              <p className="leading-relaxed">
                For questions about this Privacy Policy or our data practices, contact us at:{" "}
                <a href="mailto:privacy@obsidian.example" className="text-white underline underline-offset-2 hover:text-gray-300">
                  privacy@obsidian.example
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
