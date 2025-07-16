import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import { ThemeToggle } from "@/pages/ThemeToggle"
import { useNavigate } from "react-router-dom"
import { useHoverAnimation, useRevealAnimation } from "@/hooks/animations/index.js"

const Header = () => {
  const navigate = useNavigate()

  // Add sophisticated animations
  useRevealAnimation(".header-item", { stagger: 0.15, duration: 0.6 })
  useHoverAnimation(".header-button", { 
    scale: 1.08, 
    duration: 0.25,
    shadow: true,
    ease: "power2.out"
  })
  useHoverAnimation(".user-avatar", {
    scale: 1.1,
    duration: 0.3,
    glow: true
  })
  useHoverAnimation(".logout-button", {
    scale: 1.1,
    duration: 0.2,
    rotation: 5
  })

  const handleLogout = () => {
    // Lógica de logout aquí
    console.log("Cerrando sesión...")
    // Redirigir a la página de login
    navigate("/login")
  }

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="header-item">
          <h1 className="text-2xl font-bold">Bienvenido de vuelta</h1>
          <p className="text-muted-foreground">
            Descubre tus estadísticas musicales
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="header-item header-button">
            <ThemeToggle />
          </div>
          
          <div className="header-item flex items-center space-x-3 header-button p-2 rounded-lg">
            <Avatar className="user-avatar">
              <AvatarImage src="https://github.com/shadcn.png" alt="Usuario" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Usuario Spotify</p>
              <p className="text-xs text-muted-foreground">Premium</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="header-item logout-button hover:bg-destructive/20 hover:text-destructive transition-all duration-200"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
