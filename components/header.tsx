"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F3A0BB]/95 backdrop-blur-sm shadow-lg" : "bg-[#F3A0BB]"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Kuromi */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src="/kuromi-1.png" alt="Kuromi" className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover" />
            <span className="text-[#404041] font-bold text-lg md:text-xl">Para minha Mafefe</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("maquina-do-tempo")}
              className="text-[#404041] hover:text-[#FFFFFF] transition-colors font-medium text-base"
            >
              Máquina do Tempo
            </button>
            <button
              onClick={() => scrollToSection("linha-do-tempo")}
              className="text-[#404041] hover:text-[#FFFFFF] transition-colors font-medium text-base"
            >
              Linha do Tempo
            </button>
            <button
              onClick={() => scrollToSection("playlist")}
              className="text-[#404041] hover:text-[#FFFFFF] transition-colors font-medium text-base"
            >
              Playlist
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#404041]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("maquina-do-tempo")}
              className="text-[#404041] hover:text-[#FFFFFF] transition-colors font-medium text-base py-2 text-left"
            >
              Máquina do Tempo
            </button>
            <button
              onClick={() => scrollToSection("linha-do-tempo")}
              className="text-[#404041] hover:text-[#FFFFFF] transition-colors font-medium text-base py-2 text-left"
            >
              Linha do Tempo
            </button>
            <button
              onClick={() => scrollToSection("playlist")}
              className="text-[#404041] hover:text-[#FFFFFF] transition-colors font-medium text-base py-2 text-left"
            >
              Playlist
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
