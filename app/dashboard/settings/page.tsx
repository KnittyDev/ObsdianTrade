"use client";

import { useState } from "react";
import { useToast } from "@/app/components/ToastProvider";

export default function SettingsPage() {
  const [twoFaEnabled, setTwoFaEnabled] = useState(false);
  const [apiKeyMasked, setApiKeyMasked] = useState("obs_••••••••••••••••••••");
  const { addToast } = useToast();

  return (
    <div className="p-6 lg:p-10">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        Settings
      </h1>
      <p className="mt-1 text-gray-400">
        Account and bot preferences.
      </p>

      {/* Security */}
      <div className="glass-card mt-10 rounded-xl border border-white/10 p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <span className="material-symbols-outlined text-xl">security</span>
          Security
        </h2>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
            <div>
              <p className="font-medium text-white">Two-factor authentication (2FA)</p>
              <p className="mt-1 text-sm text-gray-400">Add an extra layer of security to your account.</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setTwoFaEnabled(!twoFaEnabled);
                addToast(twoFaEnabled ? "2FA disabled" : "2FA enabled", "success");
              }}
              className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                twoFaEnabled
                  ? "border border-amber-500/50 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20"
                  : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {twoFaEnabled ? "Disable" : "Enable"}
            </button>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-gray-400">Last login</p>
            <p className="mt-1 text-white">Feb 3, 2025 at 14:32 from this device</p>
          </div>
        </div>
      </div>

      {/* API Keys */}
      <div className="glass-card mt-8 rounded-xl border border-white/10 p-6">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
          <span className="material-symbols-outlined text-xl">key</span>
          API Keys
        </h2>
        <p className="mb-6 text-sm text-gray-400">
          Connect your exchange API keys to enable automated trading. Keys are encrypted and never shared.
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-gray-500">vpn_key</span>
              <div>
                <p className="font-medium text-white">Exchange API key</p>
                <p className="font-mono text-sm text-gray-500">{apiKeyMasked}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => addToast("API key management coming soon", "info")}
              className="cursor-pointer rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Manage
            </button>
          </div>
          <button
            type="button"
            onClick={() => addToast("Add API key flow coming soon", "info")}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 bg-white/5 py-3 text-sm font-medium text-gray-400 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Add new API key
          </button>
        </div>
      </div>
    </div>
  );
}
