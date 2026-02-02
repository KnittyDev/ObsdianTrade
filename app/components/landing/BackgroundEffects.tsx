export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Grid */}
      <div
        className="grid-bg absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
        }}
      />
      {/* Ambient Glows */}
      <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-white/5 blur-[150px]" />
      <div className="absolute bottom-[10%] -right-[5%] h-[30%] w-[30%] rounded-full bg-white/5 blur-[120px]" />
    </div>
  );
}
