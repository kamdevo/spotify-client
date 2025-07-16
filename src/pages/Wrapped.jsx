import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Share2, Trophy, Music, Users, Clock, TrendingUp, Sparkles } from "lucide-react"

const Wrapped = () => {
  const wrappedData = {
    year: 2024,
    totalMinutes: 15420,
    totalTracks: 3247,
    totalArtists: 523,
    topGenre: "Indie Rock",
    topArtist: "Harry Styles",
    topSong: "As It Was",
    discoveredArtists: 127,
    mood: "Energético y Melancólico"
  }

  const monthlyStats = [
    { month: "Ene", minutes: 1240 },
    { month: "Feb", minutes: 1180 },
    { month: "Mar", minutes: 1350 },
    { month: "Abr", minutes: 1420 },
    { month: "May", minutes: 1380 },
    { month: "Jun", minutes: 1290 },
    { month: "Jul", minutes: 1450 },
    { month: "Ago", minutes: 1380 },
    { month: "Sep", minutes: 1320 },
    { month: "Oct", minutes: 1280 },
    { month: "Nov", minutes: 1340 },
    { month: "Dic", minutes: 1100 }
  ]

  const achievements = [
    { title: "Explorador Musical", description: "Descubriste 127 nuevos artistas", icon: Users },
    { title: "Madrugador", description: "Tu hora pico es entre 7-9 AM", icon: Clock },
    { title: "Coleccionista", description: "Guardaste 89 canciones nuevas", icon: Music },
    { title: "Fiel Fan", description: "Harry Styles fue tu #1 todo el año", icon: Trophy }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header con efecto especial */}
      <div className="relative overflow-hidden rounded-3xl p-8 spotify-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-6 w-6" />
                <span className="text-lg font-medium">Tu Spotify Wrapped</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{wrappedData.year}</h1>
              <p className="text-lg opacity-90">
                Un año lleno de música increíble
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">
                {Math.round(wrappedData.totalMinutes / 60).toLocaleString()}
              </div>
              <div className="text-sm opacity-80">Horas de música</div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-4 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-8 left-20 w-8 h-8 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Stats principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center hover-scale">
          <CardContent className="p-6">
            <Music className="h-8 w-8 text-spotify-green mx-auto mb-2" />
            <div className="text-2xl font-bold">{wrappedData.totalTracks.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Canciones</div>
          </CardContent>
        </Card>

        <Card className="text-center hover-scale">
          <CardContent className="p-6">
            <Users className="h-8 w-8 text-spotify-green mx-auto mb-2" />
            <div className="text-2xl font-bold">{wrappedData.totalArtists}</div>
            <div className="text-sm text-muted-foreground">Artistas</div>
          </CardContent>
        </Card>

        <Card className="text-center hover-scale">
          <CardContent className="p-6">
            <TrendingUp className="h-8 w-8 text-spotify-green mx-auto mb-2" />
            <div className="text-2xl font-bold">{wrappedData.discoveredArtists}</div>
            <div className="text-sm text-muted-foreground">Nuevos Artistas</div>
          </CardContent>
        </Card>

        <Card className="text-center hover-scale">
          <CardContent className="p-6">
            <Trophy className="h-8 w-8 text-spotify-green mx-auto mb-2" />
            <div className="text-lg font-bold">{wrappedData.topGenre}</div>
            <div className="text-sm text-muted-foreground">Género #1</div>
          </CardContent>
        </Card>
      </div>

      {/* Sección principal del Wrapped */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tu Canción del Año */}
        <Card className="row-span-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5 text-spotify-green" />
              Tu Canción del Año
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10 space-y-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-spotify-green to-spotify-green-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <Music className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{wrappedData.topSong}</h3>
              <p className="text-muted-foreground mb-2">{wrappedData.topArtist}</p>
              <Badge className="spotify-gradient text-white">247 reproducciones</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Popularidad</span>
                <span className="text-sm font-medium">95%</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div className="bg-spotify-green h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tu Artista del Año */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-spotify-green" />
              Tu Artista del Año
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-spotify-green to-spotify-green-light rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold">{wrappedData.topArtist}</h3>
              <p className="text-sm text-muted-foreground">1,247 reproducciones</p>
            </div>
          </CardContent>
        </Card>

        {/* Tu Estado de Ánimo Musical */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-spotify-green" />
              Tu Vibe Musical
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">{wrappedData.mood}</h3>
              <p className="text-sm text-muted-foreground">
                Tu música refleja una personalidad compleja y emocional
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Logros del Año */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-spotify-green" />
            Tus Logros Musicales
          </CardTitle>
          <CardDescription>
            Estos son los hitos que alcanzaste este año
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-accent rounded-lg hover-scale">
                <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center">
                  <achievement.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actividad por Mes */}
      <Card>
        <CardHeader>
          <CardTitle>Tu Actividad por Mes</CardTitle>
          <CardDescription>
            Así se distribuyó tu escucha musical durante el año
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between space-x-2 h-48">
            {monthlyStats.map((stat) => (
              <div key={stat.month} className="flex flex-col items-center space-y-2 flex-1">
                <div
                  className="w-full bg-spotify-green rounded-t-md transition-all duration-200 hover:bg-spotify-green-light"
                  style={{
                    height: `${(stat.minutes / Math.max(...monthlyStats.map(s => s.minutes))) * 100}%`,
                    minHeight: '20px'
                  }}
                ></div>
                <span className="text-xs text-muted-foreground">{stat.month}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Acciones */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">¡Comparte tu Wrapped!</h3>
            <p className="text-muted-foreground">
              Muestra a tus amigos tu increíble año musical
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="spotify-gradient text-white">
                <Share2 className="mr-2 h-5 w-5" />
                Compartir en Redes
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Descargar Imagen
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Wrapped
