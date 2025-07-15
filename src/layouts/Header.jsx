import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import { ThemeToggle } from "@/pages/ThemeToggle"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Lógica de logout aquí
    console.log("Cerrando sesión...")
    // Redirigir a la página de login
    navigate("/login")
  }

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Bienvenido de vuelta</h1>
          <p className="text-muted-foreground">
            Descubre tus estadísticas musicales
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <div className="flex items-center space-x-3">
            <Avatar>
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
            className="hover:bg-destructive/20 hover:text-destructive"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
