import { NavLink } from "react-router-dom"
import { Home, Users, Trophy, Music } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Artistas", href: "/artists", icon: Users },
  { name: "Mi Wrapped", href: "/wrapped", icon: Trophy },
]

const Sidebar = () => {
  return (
    <div className="w-64 bg-card border-r border-border">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-spotify-green">
              Spotify Stats
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "bg-spotify-green text-white"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )
                  }
                  end
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            <p>© 2025 Spotify Stats</p>
            <p className="mt-1">Datos proporcionados por Spotify API</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
