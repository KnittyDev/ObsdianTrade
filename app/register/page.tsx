"use client";

import Link from "next/link";
import { BackgroundEffects, Navbar } from "@/app/components/landing";

export default function RegisterPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-16">
        <div className="glass-card w-full max-w-md rounded-2xl border border-white/10 p-8 shadow-2xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-white">
              person_add
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Create account
            </h1>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="register-name"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                id="register-name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <div>
              <label
                htmlFor="register-email"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                id="register-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <div>
              <label
                htmlFor="register-password"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                id="register-password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <div>
              <label
                htmlFor="register-confirm"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                Confirm password
              </label>
              <input
                id="register-confirm"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
            </div>
            <button
              type="submit"
              className="neon-glow mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-white py-3 text-base font-bold tracking-wide text-black transition-transform hover:scale-[1.02]"
            >
              Create account
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-white underline-offset-2 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
