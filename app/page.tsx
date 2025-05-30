import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Trophy, Code, Lightbulb } from "lucide-react"

export default function HackSphereLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Hack<span className="text-purple-400">Sphere</span>
              <span className="block text-4xl md:text-6xl text-purple-300 mt-2">2025</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">Code. Create. Conquer.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-lg text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>June 20–22, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Online</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Register Now
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              About <span className="text-purple-400">HackSphere</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-700/50 border-slate-600 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-6 mx-auto">
                    <Code className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Join thousands of developers, designers, and creators from around the globe in an epic 48-hour
                    coding marathon. HackSphere 2025 is where innovation meets collaboration, and groundbreaking ideas
                    come to life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6 mx-auto">
                    <Lightbulb className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Whether you're a seasoned developer or just starting your coding journey, HackSphere provides the
                    perfect platform to showcase your skills, learn new technologies, and build something amazing with
                    like-minded innovators.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-4 mx-auto">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-400">Global Participants</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4 mx-auto">
                  <Trophy className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">$50,000</div>
                <div className="text-gray-400">Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-pink-600/20 rounded-full mb-4 mx-auto">
                  <Code className="w-8 h-8 text-pink-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">48</div>
                <div className="text-gray-400">Hours of Coding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 HackSphere. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
