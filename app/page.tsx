import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { Timeline } from "@/components/timeline"
import { SpotifyPlayer } from "@/components/spotify-player"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PhotoGallery />
      <Timeline />
      <SpotifyPlayer />
      <Footer />
    </main>
  )
}
