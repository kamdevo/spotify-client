import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, ExternalLink, Search, Filter, Music } from "lucide-react"
import { useState } from "react"
import { useRevealAnimation, useHoverAnimation } from "@/hooks/animations/index.js"
import { MagicCard } from "@/components/magicui/magic-card"
import { useTheme } from "@/pages/ThemeProvider"

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { theme } = useTheme()

  // Apply animations
  useRevealAnimation(".reveal-item", { stagger: 0.08, duration: 0.4 })
  useHoverAnimation(".hover-card", { scale: 1.03, shadow: true, duration: 0.15 })
  useHoverAnimation(".hover-button", { scale: 1.05, glow: true, duration: 0.1 })
  useHoverAnimation(".artist-avatar", { scale: 1.1, duration: 0.15 })

  const artists = [
    {
      id: 1,
      name: "Harry Styles",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face",
      genres: ["Pop", "Rock", "Folk"],
      plays: 2847,
      followers: "42.1M",
      topSong: "As It Was",
      description: "Cantante y compositor británico, ex miembro de One Direction"
    },
    {
      id: 2,
      name: "Taylor Swift",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9b3e6b4?w=300&h=300&fit=crop&crop=face",
      genres: ["Pop", "Country", "Folk"],
      plays: 2156,
      followers: "89.2M",
      topSong: "Anti-Hero",
      description: "Cantautora estadounidense ganadora de múltiples Grammy"
    },
    {
      id: 3,
      name: "The Weeknd",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      genres: ["R&B", "Pop", "Electronic"],
      plays: 1987,
      followers: "56.7M",
      topSong: "Blinding Lights",
      description: "Cantante canadiense de R&B y pop contemporáneo"
    },
    {
      id: 4,
      name: "Billie Eilish",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      genres: ["Alternative", "Pop", "Electronic"],
      plays: 1756,
      followers: "47.3M",
      topSong: "Bad Guy",
      description: "Artista estadounidense de pop alternativo y electrónico"
    },
    {
      id: 5,
      name: "Dua Lipa",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      genres: ["Pop", "Dance", "Electronic"],
      plays: 1534,
      followers: "38.9M",
      topSong: "Levitating",
      description: "Cantante británico-albanesa de pop y dance"
    },
    {
      id: 6,
      name: "Bad Bunny",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      genres: ["Reggaeton", "Latin", "Hip Hop"],
      plays: 1423,
      followers: "52.1M",
      topSong: "Tití Me Preguntó",
      description: "Rapero y cantante puertorriqueño de reggaeton y trap latino"
    }
  ]

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="reveal-item flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Tus Artistas Favoritos</h1>
          <p className="text-muted-foreground">
            Descubre y explora los artistas que más escuchas
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar artistas o géneros..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 hover-card"
            />
          </div>
          <Button variant="outline" className="shrink-0 hover-button">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.map((artist, index) => (
          <Card key={artist.id} className="reveal-item  group overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-0"
              gradientFrom="#16A249"
              gradientTo="#16A249"
            >


              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Avatar className="artist-avatar h-20 w-20 ring-2 ring-spotify-green/20">
                    <AvatarImage src={artist.image} alt={artist.name} />
                    <AvatarFallback className="text-lg font-bold bg-spotify-green text-white">
                      {artist.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hover-button opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/20 hover:text-red-500"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <CardTitle className="text-xl mb-1">{artist.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {artist.description}
                  </CardDescription>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-2 bg-accent rounded-lg">
                    <div className="text-lg font-bold text-spotify-green">
                      {artist.plays.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Reproducciones</div>
                  </div>
                  <div className="text-center p-2 bg-accent rounded-lg">
                    <div className="text-lg font-bold text-spotify-green">
                      {artist.followers}
                    </div>
                    <div className="text-xs text-muted-foreground">Seguidores</div>
                  </div>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-1">
                  {artist.genres.map((genre) => (
                    <Badge key={genre} variant="secondary" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>

                {/* Top Song */}
                <div className="flex items-center space-x-2 p-2 bg-accent/50 rounded-lg">
                  <Music className="h-4 w-4 text-spotify-green" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Canción principal</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {artist.topSong}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="hover-button flex-1 spotify-gradient text-white">
                    <Music className="mr-2 h-4 w-4" />
                    Reproducir
                  </Button>
                  <Button size="sm" variant="outline" className="hover-button">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </MagicCard>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredArtists.length === 0 && (
        <div className="reveal-item text-center py-12">
          <Music className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No se encontraron artistas</h3>
          <p className="text-muted-foreground">
            Prueba con otros términos de búsqueda
          </p>
        </div>
      )}
    </div>
  )
}

export default Artists
