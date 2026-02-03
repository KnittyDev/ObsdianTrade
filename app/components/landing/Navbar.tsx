"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#performance", label: "Performance" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex cursor-pointer items-center gap-3">
          <div className="size-8 text-white">
            <span className="material-symbols-outlined !text-[32px]">
              smart_toy
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Obsidian<span className="text-gray-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/dashboard"
            className="cursor-pointer text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href="/register"
            className="cursor-pointer text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="flex h-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="cursor-pointer text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/dashboard"
              className="cursor-pointer text-sm font-medium text-gray-400 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/register"
              className="cursor-pointer text-sm font-medium text-gray-400 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/login"
              className="flex h-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-bold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
