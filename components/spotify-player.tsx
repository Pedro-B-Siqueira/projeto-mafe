"use client"

import { useRef } from "react"
import { Music } from "lucide-react"

interface SpotifyTrack {
  name: string
  artist: string
}

export function SpotifyPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Spotify playlist ID extracted from the URL
  const playlistId = "1i5LDwSlkRHPir8m0ZgtHh"

  return (
    <section id="playlist" className="min-h-screen bg-gradient-to-b from-[#F3A0BB]/60 to-[#FFFFFF] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-[#404041] mb-4 text-balance">Nossa Playlist</h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto text-pretty leading-relaxed">
            As músicas que contam a nossa história e embalam nossos momentos
          </p>
        </div>

        {/* Player Card */}
        <div className="bg-gradient-to-br from-[#404041] to-[#6B6B6B] rounded-3xl shadow-2xl p-6 md:p-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Left side - Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#F3A0BB]">
                <Music className="w-6 h-6 animate-pulse" />
                <span className="text-lg font-bold">Nossa Trilha Sonora</span>
              </div>

              <div className="bg-[#6B6B6B]/50 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="text-[#FFFFFF] leading-relaxed space-y-3">
                  <p className="text-sm">
                    💕 Esta é a nossa playlist especial, com as músicas que marcaram e continuam marcando nossa história
                    de amor.
                  </p>
                  <p className="text-sm">
                    🎵 Cada canção aqui tem um significado especial e nos lembra de momentos únicos que vivemos juntos.
                  </p>
                  <p className="text-sm text-[#F3A0BB] font-medium">
                    Use os controles do player para navegar, ajustar o volume e curtir nossa trilha sonora!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/kuromi-4.png"
                alt="Kuromi"
                className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
              />
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              ref={iframeRef}
              src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>

          {/* Playlist Info */}
          <div className="mt-8 text-center">
            <p className="text-[#F3A0BB] text-sm font-medium">
              💕 Aperte play e deixe as músicas levarem você pelos nossos momentos mais especiais
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
