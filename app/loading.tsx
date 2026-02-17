export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
