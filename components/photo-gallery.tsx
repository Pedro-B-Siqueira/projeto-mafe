"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { getRandomPhotos, type Photo } from "@/lib/photo-data"
import { Button } from "@/components/ui/button"

export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const randomPhotos = getRandomPhotos(5)
    setPhotos(randomPhotos)
  }, [])

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  if (photos.length === 0) {
    return (
      <section id="maquina-do-tempo" className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] py-20 px-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-center h-[60vh]">
          <p className="text-[#6B6B6B] text-xl">Carregando fotos...</p>
        </div>
      </section>
    )
  }

  const currentPhoto = photos[currentIndex]

  return (
    <section id="maquina-do-tempo" className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-[#404041] mb-4 text-balance">Máquina do Tempo</h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto text-pretty leading-relaxed">
            Cada foto conta uma história, cada momento é uma memória eterna
          </p>
        </div>

        {/* Main Gallery Card */}
        <div className="bg-gradient-to-br from-[#F3A0BB] to-[#F3A0BB]/80 rounded-3xl shadow-2xl p-6 md:p-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Photo Display */}
            <div className="relative group">
              <div className="bg-[#FFFFFF]/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="relative aspect-square bg-[#6B6B6B]/20 rounded-xl overflow-hidden">
                  <img
                    src={currentPhoto.src || "/placeholder.svg"}
                    alt={currentPhoto.description}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setIsModalOpen(true)}
                    onError={(e) => {
                      e.currentTarget.src = `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(currentPhoto.description)}`
                    }}
                  />
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
                <Button
                  onClick={prevPhoto}
                  size="icon"
                  className="bg-[#404041] hover:bg-[#6B6B6B] text-[#FFFFFF] rounded-full shadow-lg w-12 h-12 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  onClick={nextPhoto}
                  size="icon"
                  className="bg-[#404041] hover:bg-[#6B6B6B] text-[#FFFFFF] rounded-full shadow-lg w-12 h-12 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Photo Info */}
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-2">
                <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold">Data da foto</p>
                <p className="text-[#404041] text-3xl md:text-4xl font-bold">{currentPhoto.date}</p>
              </div>

              <div className="space-y-2">
                <p className="text-[#FFFFFF] text-xl md:text-2xl font-bold">Pequena descrição minha sobre a foto</p>
                <p className="text-[#404041] text-lg md:text-xl font-medium leading-relaxed text-pretty">
                  {currentPhoto.description}
                </p>
              </div>

              <div className="flex justify-center md:justify-start pt-4">
                <img src="/kuromi-3.png" alt="Kuromi" className="w-32 h-32 object-contain animate-float" />
              </div>
            </div>
          </div>

          {/* Photo Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#404041]" : "w-2 bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for fullscreen view */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#000000]/90 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setIsModalOpen(false)}
        >
          <Button
            onClick={() => setIsModalOpen(false)}
            size="icon"
            className="absolute top-4 right-4 bg-[#FFFFFF] hover:bg-[#F3A0BB] text-[#404041] rounded-full w-12 h-12 shadow-lg"
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={currentPhoto.src || "/placeholder.svg"}
            alt={currentPhoto.description}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onError={(e) => {
              e.currentTarget.src = `/placeholder.svg?height=800&width=800&query=${encodeURIComponent(currentPhoto.description)}`
            }}
          />
        </div>
      )}
    </section>
  )
}
