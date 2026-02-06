export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-[var(--color-retro-accent)] flex items-center justify-center">
        <span className="text-white font-bold text-lg">K</span>
      </div>
      <h1 className="text-2xl tracking-wider brand-font mt-1" style={{ color: 'var(--color-retro-fg)' }}>KEERO</h1>
    </div>
  );
};
