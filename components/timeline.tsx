"use client"

import { useState } from "react"
import { timelineMemories } from "@/lib/timeline-data"
import { Heart } from "lucide-react"

export function Timeline() {
  const [activeMemory, setActiveMemory] = useState<number | null>(null)

  return (
    <section
      id="linha-do-tempo"
      className="min-h-screen bg-gradient-to-b from-[#F3A0BB] to-[#F3A0BB]/60 py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-32 right-10 text-[#FFFFFF]/10 w-24 h-24 animate-float" />
        <Heart
          className="absolute bottom-32 left-10 text-[#FFFFFF]/10 w-20 h-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-[#404041] mb-4 text-balance">Linha do Tempo</h2>
          <p className="text-lg md:text-xl text-[#404041]/80 max-w-2xl mx-auto text-pretty leading-relaxed">
            Momentos especiais que marcaram nossa história de amor
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:block">
            <div className="relative py-32">
              {/* Dots and Line Container */}
              <div className="relative flex items-center justify-between px-16">
                {/* Timeline Line - positioned behind dots */}
                <div className="absolute left-16 right-16 h-1 bg-[#404041] top-1/2 -translate-y-1/2 shadow-lg" />

                {/* Dots positioned on the line */}
                {timelineMemories.map((memory, index) => (
                  <div key={memory.id} className="relative z-10 flex-shrink-0">
                    <button
                      onMouseEnter={() => setActiveMemory(memory.id)}
                      onMouseLeave={() => setActiveMemory(null)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 transform ${
                        activeMemory === memory.id
                          ? "bg-[#FFFFFF] scale-125 shadow-2xl ring-4 ring-[#F3A0BB]"
                          : "bg-[#404041] hover:bg-[#6B6B6B] hover:scale-110 shadow-lg"
                      }`}
                      aria-label={`Ver memória: ${memory.title}`}
                    />

                    {/* Memory Card - positioned below the dot */}
                    {activeMemory === memory.id && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 animate-fade-in-up z-20">
                        <div className="bg-gradient-to-br from-[#F3A0BB] to-[#F3A0BB]/80 rounded-2xl p-6 shadow-2xl border-2 border-[#404041] w-[280px]">
                          {memory.icon && <div className="text-4xl mb-3 text-center">{memory.icon}</div>}
                          <h3 className="text-[#404041] font-bold text-xl mb-2 text-center text-balance">
                            {memory.title}
                          </h3>
                          <p className="text-[#FFFFFF] text-sm font-semibold mb-3 text-center">{memory.date}</p>
                          <p className="text-[#404041] text-sm leading-relaxed text-pretty">{memory.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden space-y-8">
            {timelineMemories.map((memory, index) => (
              <div
                key={memory.id}
                className="relative pl-12 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Vertical Line */}
                {index !== timelineMemories.length - 1 && (
                  <div className="absolute left-4 top-8 bottom-0 w-1 bg-[#404041] -translate-x-1/2" />
                )}

                {/* Dot */}
                <button
                  onClick={() => setActiveMemory(activeMemory === memory.id ? null : memory.id)}
                  className={`absolute left-0 top-0 w-8 h-8 rounded-full transition-all duration-300 transform ${
                    activeMemory === memory.id
                      ? "bg-[#FFFFFF] scale-125 shadow-2xl ring-4 ring-[#404041]"
                      : "bg-[#404041] shadow-lg"
                  }`}
                  aria-label={`Ver memória: ${memory.title}`}
                />

                {/* Memory Card */}
                <div
                  className={`transition-all duration-500 ${activeMemory === memory.id ? "scale-105" : "scale-100"}`}
                >
                  <div className="bg-gradient-to-br from-[#F3A0BB] to-[#F3A0BB]/80 rounded-2xl p-6 shadow-xl border-2 border-[#404041]">
                    {memory.icon && <div className="text-3xl mb-2">{memory.icon}</div>}
                    <h3 className="text-[#404041] font-bold text-xl mb-2 text-balance">{memory.title}</h3>
                    <p className="text-[#FFFFFF] text-sm font-semibold mb-3">{memory.date}</p>
                    <p className="text-[#404041] text-sm leading-relaxed text-pretty">{memory.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
