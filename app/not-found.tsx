import Link from "next/link";
import { BackgroundEffects } from "@/app/components/landing";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <BackgroundEffects />
      <div className="relative z-10 text-center">
        <span className="material-symbols-outlined mb-4 text-8xl text-white/20">
          smart_toy
        </span>
        <h1 className="text-6xl font-bold tracking-tight text-white md:text-8xl">
          404
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Page not found.
        </p>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to home
        </Link>
      </div>
    </div>
  );
}
