"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function HeroSection() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const startDate = new Date("2024-06-09T00:00:00")
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      // Calculate years and months
      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()

      if (months < 0) {
        years--
        months += 12
      }

      // Adjust days calculation
      const tempDate = new Date(startDate)
      tempDate.setFullYear(startDate.getFullYear() + years)
      tempDate.setMonth(startDate.getMonth() + months)
      const remainingDays = Math.floor((now.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24))

      setTimeElapsed({
        years,
        months,
        days: remainingDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      })
    }

    calculateTimeElapsed()
    const interval = setInterval(calculateTimeElapsed, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F3A0BB] to-[#FFFFFF] pt-24 pb-16 px-4 overflow-hidden">
      {/* Decorative hearts floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 text-[#FFFFFF]/30 w-8 h-8 animate-float" />
        <Heart
          className="absolute top-40 right-20 text-[#FFFFFF]/20 w-6 h-6 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Heart
          className="absolute bottom-32 left-1/4 text-[#FFFFFF]/25 w-10 h-10 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Heart
          className="absolute bottom-20 right-1/3 text-[#FFFFFF]/30 w-7 h-7 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-[#404041] text-balance leading-tight">
              Minha Princesa
            </h1>
            <p className="text-2xl md:text-3xl text-[#6B6B6B] font-medium text-pretty">Nosso amor em linhas de código e feito sobre nossa história</p>
            <p className="text-lg md:text-xl text-[#404041] font-medium max-w-md mx-auto md:mx-0 text-pretty leading-relaxed">
              Todos os momentos ao seu lado é único e eu jamais trocaria por qualquer coisa no mundo. Eu te amo, essa é
              uma pequena homenagem pelo seu dia 02 de dezembro.
            </p>

            {/* Call to action */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={() => document.getElementById("maquina-do-tempo")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#404041] text-[#FFFFFF] px-8 py-3 rounded-full font-semibold hover:bg-[#6B6B6B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ver Memórias
              </button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="/kuromi-2.png"
              alt="Kuromi"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Time Counter */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-[#FFFFFF]/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#F3A0BB]">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#404041] mb-8 flex items-center justify-center gap-3">
              <Heart className="text-[#F3A0BB] fill-[#F3A0BB] w-8 h-8 animate-pulse-subtle" />
              Juntos há
              <Heart className="text-[#F3A0BB] fill-[#F3A0BB] w-8 h-8 animate-pulse-subtle" />
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
              <TimeUnit value={timeElapsed.years} label="Anos" />
              <TimeUnit value={timeElapsed.months} label="Meses" />
              <TimeUnit value={timeElapsed.days} label="Dias" />
              <TimeUnit value={timeElapsed.hours} label="Horas" />
              <TimeUnit value={timeElapsed.minutes} label="Minutos" />
              <TimeUnit value={timeElapsed.seconds} label="Segundos" />
            </div>

            <p className="text-center mt-8 text-[#6B6B6B] text-lg font-medium">Desde 09 de Junho de 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-[#F3A0BB] to-[#F3A0BB]/80 rounded-2xl p-4 md:p-6 shadow-lg min-w-[80px] md:min-w-[100px] transform transition-transform hover:scale-105">
        <span className="text-3xl md:text-5xl font-bold text-[#FFFFFF] block">{value.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-sm md:text-base font-semibold text-[#404041] mt-2">{label}</span>
    </div>
  )
}
