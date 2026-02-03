"use client";

import Link from "next/link";
import { BackgroundEffects, Navbar } from "@/app/components/landing";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-16">
        <div className="glass-card w-full max-w-md rounded-2xl border border-white/10 p-8 shadow-2xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-white">
              smart_toy
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Log in
            </h1>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <div>
              <label
                htmlFor="login-password"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <button
              type="submit"
              className="neon-glow mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-white py-3 text-base font-bold tracking-wide text-black transition-transform hover:scale-[1.02]"
            >
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-white underline-offset-2 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
