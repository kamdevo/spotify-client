import { Button } from "@/components/ui/button"
import { Music, BarChart3 } from "lucide-react"
import { ThemeToggle } from "@/pages/ThemeToggle"
import { useSplitTextBlur, useFloatingIcons, useHoverAnimation } from "@/hooks/animations/index.js"

const Login = () => {
  const handleSpotifyLogin = () => {
    // Lógica de OAuth con Spotify aquí
    console.log("Iniciando sesión con Spotify...")
  }

  // Aplicar animaciones
  useSplitTextBlur(".hero-text", { delay: 0.8 })
  useFloatingIcons(".floating-icon")
  useHoverAnimation(".login-button", { 
    scale: 1.0, 
    glow: true, 
    shadow: true 
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-spotify-green/20 via-background to-spotify-green/10 flex flex-col">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Hero Text */}
          <h1 className="hero-text text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
            Cada canción <br /> cuenta una historia.
          </h1>
          
          {/* Login Button - Right below text */}
          <Button 
            onClick={handleSpotifyLogin}
            className="login-button px-16 py-6 text-xl font-semibold bg-spotify-green hover:bg-spotify-green-light text-white rounded-full shadow-lg transition-all duration-300 mb-6"
            size="lg"
          >
            <Music className="mr-4 h-7 w-7" />
            Iniciar sesión con Spotify
          </Button>
          <h4> Descubre la tuya a través de datos únicos y visualizaciones increíbles.</h4>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-icon fixed top-20 left-10 opacity-30">
        <Music className="h-12 w-12 text-spotify-green" />
      </div>
      <div className="floating-icon fixed bottom-20 right-10 opacity-30">
        <BarChart3 className="h-16 w-16 text-spotify-green" />
      </div>
      <div className="floating-icon fixed top-1/3 right-20 opacity-20">
        <Music className="h-8 w-8 text-spotify-green" />
      </div>
      <div className="floating-icon fixed bottom-1/3 left-20 opacity-25">
        <BarChart3 className="h-10 w-10 text-spotify-green" />
      </div>
    </div>
  )
}

export default Login
