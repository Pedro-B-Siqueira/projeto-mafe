export function KuromiDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <img src="/kuromi-character-cute-floating-happy.jpg" alt="Kuromi" className="w-full h-full object-contain animate-float" />
    </div>
  )
}
