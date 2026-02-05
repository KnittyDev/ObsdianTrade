import Link from "next/link";
import { BackgroundEffects, Navbar } from "@/app/components/landing";

export const metadata = {
  title: "Terms of Service - Obsidian",
  description: "Terms of service for Obsidian AI trading platform.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="mb-10 text-sm text-gray-500">Last updated: February 2025</p>

          <div className="prose prose-invert max-w-none space-y-8 font-body text-gray-300">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">1. Acceptance of terms</h2>
              <p className="leading-relaxed">
                By accessing or using the Obsidian platform and services (&quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use our Services. We may update these terms from time to time; continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">2. Eligibility</h2>
              <p className="leading-relaxed">
                You must be at least 18 years old and legally permitted to use trading and financial services in your jurisdiction. You represent that you have the authority to enter into these terms and that your use complies with all applicable laws. We may restrict access from certain countries or regions.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">3. Account and use</h2>
              <p className="leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and for all activity under it. You must provide accurate information and notify us of any unauthorized use. Our AI trading bots execute trades on your behalf according to your settings; past performance does not guarantee future results. Trading cryptocurrencies involves substantial risk of loss.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">4. Fees and payments</h2>
              <p className="leading-relaxed">
                Fees for our Services are set out on our pricing page and in your account. You agree to pay all applicable fees. Deposits and withdrawals are subject to our policies and third-party processor terms. Refunds are handled in accordance with our refund policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">5. Prohibited conduct</h2>
              <p className="leading-relaxed">
                You may not use the Services for any illegal purpose, to violate any law, or to harm others. You may not attempt to gain unauthorized access to our systems or other accounts, interfere with the Services, or use automated means to scrape or abuse the platform. We may suspend or terminate accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">6. Disclaimer of warranties</h2>
              <p className="leading-relaxed">
                The Services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the Services will be uninterrupted, error-free, or that trading results will meet your expectations. You use the Services at your own risk.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">7. Limitation of liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Obsidian Inc. and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the Services. Our total liability shall not exceed the fees you paid to us in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">8. Contact</h2>
              <p className="leading-relaxed">
                For questions about these Terms of Service, contact us at:{" "}
                <a href="mailto:legal@obsidian.example" className="text-white underline underline-offset-2 hover:text-gray-300">
                  legal@obsidian.example
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
