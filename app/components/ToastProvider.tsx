"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useRef,
  type ReactNode,
} from "react";

type Toast = { id: number; message: string; type?: "success" | "error" | "info" };

const ToastContext = createContext<((message: string, type?: Toast["type"]) => void) | null>(null);

export function useToast() {
  const add = useContext(ToastContext);
  if (!add) return { addToast: () => {} };
  return { addToast: add };
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const addToast = useCallback((message: string, type: Toast["type"] = "info") => {
    const id = ++idRef.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="fixed bottom-24 right-6 z-[90] flex flex-col gap-2 md:bottom-8 md:right-8" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="glass-card flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-white shadow-lg"
          >
            <span className="material-symbols-outlined text-lg">
              {t.type === "success" ? "check_circle" : t.type === "error" ? "error" : "info"}
            </span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
