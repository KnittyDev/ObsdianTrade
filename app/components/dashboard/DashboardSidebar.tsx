"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: "dashboard" },
  { href: "/dashboard/bots", label: "Manage bots", icon: "smart_toy" },
  { href: "/dashboard/portfolio", label: "Portfolio", icon: "account_balance_wallet" },
  { href: "/dashboard/trades", label: "Trades", icon: "swap_horiz" },
  { href: "/dashboard/activity", label: "Activity", icon: "history" },
  { href: "/dashboard/settings", label: "Settings", icon: "settings" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
      <aside
        className={`glass-card fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/10 transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
      <div className="flex h-20 items-center justify-between gap-3 border-b border-white/5 px-6">
        <Link href="/" className="flex cursor-pointer items-center gap-3" onClick={() => setOpen(false)}>
          <span className="material-symbols-outlined text-2xl text-white">
            smart_toy
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Obsidian<span className="text-gray-500">.</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="cursor-pointer rounded-lg p-1 text-gray-400 hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined !text-[22px]">
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/5 p-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <span className="material-symbols-outlined !text-[22px]">logout</span>
          Log out
        </Link>
      </div>
    </aside>
    </>
  );
}
