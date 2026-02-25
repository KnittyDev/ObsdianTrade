"use client";

import { useState, useRef, useEffect } from "react";

const notifications = [
  { id: 1, title: "Trade executed", body: "BTC/USDT Long +€124", time: "2 min ago", read: false },
  { id: 2, title: "Deposit received", body: "0.05 BTC credited", time: "1 hr ago", read: false },
  { id: 3, title: "Bot status", body: "Conservative strategy reached +8%", time: "2 hr ago", read: true },
];

export function NotificationsBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative border-b border-white/5 px-4 py-3 lg:px-6" ref={ref}>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined text-xl">notifications</span>
          {unread > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
              {unread}
            </span>
          )}
        </button>
      </div>
      {open && (
        <div className="glass-card absolute right-4 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-white/10 shadow-2xl lg:right-6">
          <div className="border-b border-white/10 px-4 py-3">
            <h3 className="font-semibold text-white">Notifications</h3>
          </div>
          <div className="max-h-80 overflow-auto">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`border-b border-white/5 px-4 py-3 last:border-0 ${!n.read ? "bg-white/5" : ""}`}
              >
                <p className="font-medium text-white">{n.title}</p>
                <p className="mt-0.5 text-sm text-gray-400">{n.body}</p>
                <p className="mt-1 text-xs text-gray-500">{n.time}</p>
              </div>
            ))}
          </div>
          {notifications.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-gray-500">No notifications</p>
          )}
        </div>
      )}
    </div>
  );
}
