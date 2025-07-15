import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, BarChart3, Users, TrendingUp } from "lucide-react"
import { ThemeToggle } from "@/pages/ThemeToggle"

const Login = () => {
  const handleSpotifyLogin = () => {
    // Lógica de OAuth con Spotify aquí
    console.log("Iniciando sesión con Spotify...")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-spotify-green/20 via-background to-spotify-green/10">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-spotify-green rounded-full flex items-center justify-center shadow-lg animate-pulse-green">
                <Music className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-spotify-green to-spotify-green-light bg-clip-text text-transparent">
              Spotify Stats
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre tu mundo musical. Analiza tus estadísticas, encuentra patrones 
              y conoce mejor tus gustos musicales.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-scale border-spotify-green/20">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-spotify-green mx-auto mb-2" />
                <CardTitle>Estadísticas Detalladas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visualiza tus canciones y artistas más escuchados con gráficos interactivos
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale border-spotify-green/20">
              <CardHeader>
                <Users className="h-10 w-10 text-spotify-green mx-auto mb-2" />
                <CardTitle>Artistas Favoritos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Descubre tus artistas más reproducidos y explora nuevas recomendaciones
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale border-spotify-green/20">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-spotify-green mx-auto mb-2" />
                <CardTitle>Tu Wrapped Personal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Crea tu resumen musical personalizado y compártelo con tus amigos
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Login Card */}
          <Card className="max-w-md mx-auto glass-effect border-spotify-green/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Comenzar</CardTitle>
              <CardDescription>
                Conecta tu cuenta de Spotify para acceder a tus estadísticas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleSpotifyLogin}
                className="w-full spotify-gradient hover:opacity-90 transition-opacity text-white font-semibold py-3 text-lg"
                size="lg"
              >
                <Music className="mr-2 h-5 w-5" />
                Iniciar sesión con Spotify
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Al continuar, aceptas que accedamos a tu información de Spotify según su política de privacidad.
              </p>
            </CardContent>
          </Card>

          {/* Floating Elements */}
          <div className="fixed top-20 left-10 opacity-20 animate-float">
            <Music className="h-12 w-12 text-spotify-green" />
          </div>
          <div className="fixed bottom-20 right-10 opacity-20 animate-float" style={{animationDelay: '1s'}}>
            <BarChart3 className="h-16 w-16 text-spotify-green" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
