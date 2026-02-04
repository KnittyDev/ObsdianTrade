"use client";

import Link from "next/link";
import { useState } from "react";

type BotStatus = "active" | "paused";

type Bot = {
  id: string;
  name: string;
  status: BotStatus;
  takeProfitPercent: number;
  stopLossPercent: number;
  currentPnlPercent: number;
  startedAt: string;
  capitalAtStart: string;
};

const initialBots: Bot[] = [
  {
    id: "1",
    name: "Conservative",
    status: "active",
    takeProfitPercent: 15,
    stopLossPercent: -5,
    currentPnlPercent: 8.2,
    startedAt: "2025-01-15",
    capitalAtStart: "€10,000",
  },
  {
    id: "2",
    name: "Aggressive",
    status: "active",
    takeProfitPercent: 25,
    stopLossPercent: -8,
    currentPnlPercent: 12.1,
    startedAt: "2025-01-20",
    capitalAtStart: "€5,000",
  },
];

export default function BotsPage() {
  const [bots, setBots] = useState<Bot[]>(initialBots);
  const [editBot, setEditBot] = useState<Bot | null>(null);
  const [takeProfit, setTakeProfit] = useState("");
  const [stopLoss, setStopLoss] = useState("");

  const openEdit = (bot: Bot) => {
    setEditBot(bot);
    setTakeProfit(String(bot.takeProfitPercent));
    setStopLoss(String(Math.abs(bot.stopLossPercent)));
  };

  const saveEdit = () => {
    if (!editBot) return;
    setBots((prev) =>
      prev.map((b) =>
        b.id === editBot.id
          ? {
              ...b,
              takeProfitPercent: Number(takeProfit) || b.takeProfitPercent,
              stopLossPercent: -(Number(stopLoss) || Math.abs(b.stopLossPercent)),
            }
          : b
      )
    );
    setEditBot(null);
    setTakeProfit("");
    setStopLoss("");
  };

  const toggleStatus = (bot: Bot) => {
    setBots((prev) =>
      prev.map((b) =>
        b.id === bot.id
          ? { ...b, status: b.status === "active" ? "paused" : "active" }
          : b
      )
    );
  };

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Manage bots
        </h1>
        <p className="mt-1 text-gray-400">
          Set take profit and stop loss levels. Bots exit automatically when these levels are reached.
        </p>
      </div>

      {/* How it works */}
      <div className="glass-card mb-8 rounded-xl border border-white/10 p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <span className="material-symbols-outlined text-xl">info</span>
          How it works
        </h2>
        <ul className="space-y-3 text-sm text-gray-300">
          <li className="flex gap-3">
            <span className="text-emerald-400">Take profit:</span>
            <span>
              When total P&L reaches this %, the bot closes all positions and locks in profit. Your gains are secured at this level.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400">Stop loss:</span>
            <span>
              When total loss reaches this %, the bot closes all positions to limit further loss. The bot exits automatically to protect your capital.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-400">Example:</span>
            <span>
              With 15% take profit and 5% stop loss: if the bot gains 15%, it closes and you keep the profit; if it loses 5%, it closes and the loss is capped.
            </span>
          </li>
        </ul>
      </div>

      {/* Bot cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="glass-card rounded-xl border border-white/10 p-6 transition-colors hover:bg-white/[0.02]"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-white/80">
                  smart_toy
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{bot.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`relative flex h-2.5 w-2.5 ${
                        bot.status === "active" ? "" : "opacity-50"
                      }`}
                    >
                      {bot.status === "active" && (
                        <>
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </>
                      )}
                      {bot.status === "paused" && (
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                      )}
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      {bot.status === "active" ? "Active" : "Paused"}
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleStatus(bot)}
                className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  bot.status === "active"
                    ? "border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
                    : "border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
                }`}
              >
                {bot.status === "active" ? "Pause" : "Resume"}
              </button>
            </div>

            <div className="space-y-3 border-t border-white/10 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Take profit (exit at)</span>
                <span className="font-medium text-emerald-400">+{bot.takeProfitPercent}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Stop loss (exit at)</span>
                <span className="font-medium text-red-400">{bot.stopLossPercent}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Current P&L</span>
                <span
                  className={`font-medium ${
                    bot.currentPnlPercent >= 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {bot.currentPnlPercent >= 0 ? "+" : ""}{bot.currentPnlPercent}%
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Started {bot.startedAt}</span>
                <span>{bot.capitalAtStart}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openEdit(bot)}
              className="mt-4 w-full cursor-pointer rounded-lg border border-white/20 bg-white/5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Edit levels
            </button>
          </div>
        ))}
      </div>

      {/* Edit modal */}
      {editBot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-bot-title"
        >
          <button
            type="button"
            onClick={() => setEditBot(null)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close"
          />
          <div className="glass-card relative w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 id="edit-bot-title" className="text-xl font-bold text-white">
                Edit levels — {editBot.name}
              </h2>
              <button
                type="button"
                onClick={() => setEditBot(null)}
                className="cursor-pointer rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="edit-take-profit" className="mb-2 block text-sm font-medium text-gray-400">
                  Take profit (%)
                </label>
                <input
                  id="edit-take-profit"
                  type="number"
                  min="1"
                  max="100"
                  step="0.5"
                  value={takeProfit}
                  onChange={(e) => setTakeProfit(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Bot closes all positions when total P&L reaches this profit level.
                </p>
              </div>
              <div>
                <label htmlFor="edit-stop-loss" className="mb-2 block text-sm font-medium text-gray-400">
                  Stop loss (%)
                </label>
                <input
                  id="edit-stop-loss"
                  type="number"
                  min="1"
                  max="100"
                  step="0.5"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Bot closes all positions when total loss reaches this level (enter as positive, e.g. 5 for -5%).
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setEditBot(null)}
                className="flex-1 cursor-pointer rounded-lg border border-white/20 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveEdit}
                className="flex-1 cursor-pointer rounded-lg bg-white py-3 text-sm font-bold text-black hover:bg-gray-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
