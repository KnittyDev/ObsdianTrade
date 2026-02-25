"use client";

import Link from "next/link";
import { useState } from "react";
import { BackgroundEffects, Navbar } from "@/app/components/landing";
import { useToast } from "@/app/components/ToastProvider";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    addToast("Reset link sent to your email", "success");
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundEffects />
      <Navbar />
      <main id="main" className="relative z-10 flex flex-1 items-center justify-center px-6 py-16">
        <div className="glass-card w-full max-w-md rounded-2xl border border-white/10 p-8 shadow-2xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-white">
              lock_reset
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Forgot password
            </h1>
          </div>
          {sent ? (
            <div className="space-y-4 text-center">
              <p className="text-gray-300">
                If an account exists for <strong className="text-white">{email}</strong>, you will receive a reset link shortly.
              </p>
              <Link
                href="/login"
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-gray-200"
              >
                Back to login
              </Link>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-gray-400">
                Enter your email and we&apos;ll send you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="forgot-email" className="mb-2 block text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    id="forgot-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                </div>
                <button
                  type="submit"
                  className="neon-glow flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-white py-3 text-base font-bold tracking-wide text-black transition-transform hover:scale-[1.02]"
                >
                  Send reset link
                </button>
              </form>
            </>
          )}
          <p className="mt-6 text-center text-sm text-gray-400">
            <Link href="/login" className="font-medium text-white underline-offset-2 hover:underline">
              Back to login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
