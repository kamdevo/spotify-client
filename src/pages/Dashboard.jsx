import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Music, Headphones, Clock, TrendingUp, Heart, Play } from "lucide-react"
import { useRevealAnimation, useHoverAnimation } from "@/hooks/animations/index.js"

const Dashboard = () => {
  // Apply animations
  useRevealAnimation(".reveal-item", { stagger: 0.15 })
  useHoverAnimation(".hover-card", { scale: 1.02, shadow: true })
  useHoverAnimation(".artist-item", { scale: 1.05, glow: true })

  // Datos de ejemplo
  const stats = {
    totalMinutes: 12540,
    totalTracks: 2847,
    totalArtists: 456,
    topGenre: "Indie Rock"
  }

  const topTracks = [
    { id: 1, name: "As It Was", artist: "Harry Styles", plays: 247, duration: "2:47" },
    { id: 2, name: "Anti-Hero", artist: "Taylor Swift", plays: 234, duration: "3:20" },
    { id: 3, name: "Unholy", artist: "Sam Smith ft. Kim Petras", plays: 198, duration: "2:36" },
    { id: 4, name: "Flowers", artist: "Miley Cyrus", plays: 176, duration: "3:20" },
    { id: 5, name: "Blinding Lights", artist: "The Weeknd", plays: 156, duration: "3:22" }
  ]

  const topArtists = [
    { id: 1, name: "Harry Styles", plays: 1247, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=face" },
    { id: 2, name: "Taylor Swift", plays: 1156, image: "https://images.unsplash.com/photo-1494790108755-2616c9b3e6b4?w=100&h=100&fit=crop&crop=face" },
    { id: 3, name: "The Weeknd", plays: 987, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { id: 4, name: "Billie Eilish", plays: 876, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
  ]

  const recentTracks = [
    { id: 1, name: "Watermelon Sugar", artist: "Harry Styles", time: "2 min ago" },
    { id: 2, name: "Good 4 U", artist: "Olivia Rodrigo", time: "15 min ago" },
    { id: 3, name: "Levitating", artist: "Dua Lipa", time: "32 min ago" },
    { id: 4, name: "Peaches", artist: "Justin Bieber", time: "1 hora ago" }
  ]

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h1 className="reveal-item text-3xl font-bold text-foreground">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="reveal-item hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Minutos Totales</CardTitle>
            <Clock className="h-4 w-4 text-spotify-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMinutes.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% desde el mes pasado
            </p>
          </CardContent>
        </Card>

        <Card className="reveal-item hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Canciones</CardTitle>
            <Music className="h-4 w-4 text-spotify-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTracks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Canciones diferentes reproducidas
            </p>
          </CardContent>
        </Card>

        <Card className="reveal-item hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Artistas</CardTitle>
            <Headphones className="h-4 w-4 text-spotify-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalArtists}</div>
            <p className="text-xs text-muted-foreground">
              Artistas únicos escuchados
            </p>
          </CardContent>
        </Card>

        <Card className="reveal-item hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Género Principal</CardTitle>
            <TrendingUp className="h-4 w-4 text-spotify-green" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.topGenre}</div>
            <p className="text-xs text-muted-foreground">
              Tu género más escuchado
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="tracks" className="reveal-item space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tracks">Top Canciones</TabsTrigger>
          <TabsTrigger value="artists">Top Artistas</TabsTrigger>
          <TabsTrigger value="recent">Reproducidas Recientemente</TabsTrigger>
        </TabsList>

        <TabsContent value="tracks" className="space-y-6">
          <Card className="reveal-item">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5 text-spotify-green" />
                Tus Canciones Más Escuchadas
              </CardTitle>
              <CardDescription>
                Las canciones que más has reproducido este mes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topTracks.map((track, index) => (
                  <div key={track.id} className="reveal-item hover-card flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors">
                    <div className="flex items-center justify-center w-8 h-8 bg-spotify-green text-white text-sm font-bold rounded">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{track.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                    </div>
                    <Badge variant="secondary">{track.plays} plays</Badge>
                    <div className="text-xs text-muted-foreground">{track.duration}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="artists" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topArtists.map((artist, index) => (
              <Card key={artist.id} className="reveal-item hover-card artist-item">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={artist.image} alt={artist.name} />
                        <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-spotify-green text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">{artist.plays} reproducciones</p>
                      <Progress value={(artist.plays / 1247) * 100} className="mt-2 h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card className="reveal-item">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-spotify-green" />
                Reproducidas Recientemente
              </CardTitle>
              <CardDescription>
                Tu actividad musical reciente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTracks.map((track) => (
                  <div key={track.id} className="reveal-item hover-card flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-spotify-green rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">{track.name}</p>
                        <p className="text-xs text-muted-foreground">{track.artist}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{track.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Dashboard
