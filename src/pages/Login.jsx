import { Music, BarChart3 } from "lucide-react"
import { ThemeToggle } from "@/pages/ThemeToggle"
import { useSplitTextBlur, useFloatingIcons, ExpandingBgButton } from "@/hooks/animations/index.js"
import { useTheme } from "./ThemeProvider"

import gradientsImg from "../assets/gradient.png"

const Login = () => {
  const handleSpotifyLogin = () => {
    // Lógica de OAuth con Spotify aquí
    console.log("Iniciando sesión con Spotify...")
  }
  const { theme } = useTheme()

  // Aplicar animaciones
  useSplitTextBlur(".hero-text", { delay: 0.8 })
  useFloatingIcons(".floating-icon")

  return (


    <div className={`min-h-screen flex flex-col w-full relative transition-colors duration-300`}>
      {/* Arctic Lights Background with Top Glow - Responsive to theme */}
      <div
        className="absolute inset-0 z-0 transition-all duration-300"
        style={{
          background: theme === 'dark'
            ? `
              radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000
            `
            : `
               radial-gradient(circle at center, #8FFFB0, transparent)
            `,
        }}
      />

      {/* Your Content/Components */}


      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Hero Text */}
          <h1 className="hero-text text-5xl md:text-6xl font-bold leading-tight mb-6 relative z-10 bg-clip-text text-transparent" style={{
            backgroundImage: { gradientsImg },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            Cada canción     <br /> cuenta una historia.
          </h1>

          {/* Login Button - Right below text */}
          <ExpandingBgButton
            onClick={handleSpotifyLogin}
            className="px-16 py-6 text-xl font-semibold mb-6 shadow-lg"
          >
            <Music className="mr-4 h-7 w-7" />
            Iniciar sesión con Spotify
          </ExpandingBgButton>
          <h4 className="text-muted-foreground opacity-90 text-lg"> Descubre la tuya a través de datos únicos y visualizaciones increíbles.</h4>
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
