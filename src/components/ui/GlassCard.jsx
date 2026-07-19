export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-6 lg:p-8 ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
