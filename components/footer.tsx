import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#FFFFFF] to-[#F3A0BB]/30 py-12 px-4 border-t-4 border-[#F3A0BB]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Kuromi decoration */}
          <div className="flex items-center gap-4">
            <img
              src="/kuromi-character-cute-logo.jpg"
              alt="Kuromi"
              className="w-16 h-16 object-contain animate-float"
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#404041] flex items-center gap-2 justify-center">
                Para minha Mafe
                <Heart className="w-5 h-5 text-[#F3A0BB] fill-[#F3A0BB] animate-pulse" />
              </h3>
              <p className="text-[#6B6B6B] text-sm mt-1">Com amor, Pedro Lindo da Mafefe {"<3"}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-1 bg-gradient-to-r from-transparent via-[#F3A0BB] to-transparent rounded-full" />

          {/* Footer text */}
          <div className="text-center space-y-2">
            <p className="text-[#404041] text-sm font-medium">Criado com muito amor e carinho</p>
            <p className="text-[#6B6B6B] text-xs">{currentYear} - Todos os momentos são nossos</p>
          </div>

          {/* Hearts decoration */}
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#F3A0BB] fill-[#F3A0BB] animate-pulse" />
            <Heart className="w-5 h-5 text-[#F3A0BB] fill-[#F3A0BB] animate-pulse" style={{ animationDelay: "0.2s" }} />
            <Heart className="w-4 h-4 text-[#F3A0BB] fill-[#F3A0BB] animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </footer>
  )
}
