import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Globe,
  Trophy,
  Code,
  Palette,
  Lightbulb,
  Star,
  ArrowRight,
  CheckCircle,
  Gift,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Add the necessary imports at the top of the file
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, MessageSquare, Send } from "lucide-react"

export default function HackSphereLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HackSphere</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#schedule" className="text-gray-300 hover:text-white transition-colors">
                Schedule
              </Link>
              <Link href="#prizes" className="text-gray-300 hover:text-white transition-colors">
                Prizes
              </Link>
              <Link href="#sponsors" className="text-gray-300 hover:text-white transition-colors">
                Sponsors
              </Link>

              {/* Add this line */}
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>

              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 border-cyan-500/30">
              Global Virtual Hackathon
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              HackSphere 2025
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">Code. Create. Conquer.</p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Join thousands of developers, designers, and creators from around the globe in the ultimate 48-hour coding
              challenge. Build the future, one line of code at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-6"
              >
                Register for Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="font-semibold">June 20-22</p>
                  <p className="text-sm text-gray-400">2025</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Clock className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">48 Hours</p>
                  <p className="text-sm text-gray-400">Non-stop coding</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Globe className="w-6 h-6 text-pink-400" />
                <div>
                  <p className="font-semibold">100% Virtual</p>
                  <p className="text-sm text-gray-400">Join from anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400">Participants</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$100K</div>
              <div className="text-gray-400">Prize Pool</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">48</div>
              <div className="text-gray-400">Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What is HackSphere?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              HackSphere 2025 is the world's largest virtual hackathon, bringing together brilliant minds to solve
              real-world problems through innovative technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 border-cyan-500/30">
              <CardHeader>
                <Code className="w-12 h-12 text-cyan-400 mb-4" />
                <CardTitle className="text-white">For Developers</CardTitle>
                <CardDescription className="text-gray-400">
                  Showcase your coding skills and build innovative solutions using cutting-edge technologies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30">
              <CardHeader>
                <Palette className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">For Designers</CardTitle>
                <CardDescription className="text-gray-400">
                  Create stunning user experiences and bring ideas to life with beautiful, intuitive designs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-pink-900/20 to-pink-800/20 border-pink-500/30">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-pink-400 mb-4" />
                <CardTitle className="text-white">For Innovators</CardTitle>
                <CardDescription className="text-gray-400">
                  Turn your creative ideas into reality and solve problems that matter to the world.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Competition Tracks</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your track and compete with the best minds in your field
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AI/ML", icon: "🤖", color: "from-blue-500 to-cyan-500" },
              { name: "Web3/Blockchain", icon: "⛓️", color: "from-purple-500 to-pink-500" },
              { name: "Mobile Apps", icon: "📱", color: "from-green-500 to-teal-500" },
              { name: "Open Innovation", icon: "💡", color: "from-orange-500 to-red-500" },
            ].map((track, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{track.icon}</div>
                  <CardTitle className="text-white">{track.name}</CardTitle>
                  <div className={`h-1 w-16 mx-auto bg-gradient-to-r ${track.color} rounded-full`}></div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Prizes & Awards</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Compete for amazing prizes and recognition from industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold">
                1st Place
              </div>
              <CardHeader className="text-center">
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">$50,000</CardTitle>
                <CardDescription className="text-gray-400">Grand Prize Winner</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Cash Prize
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Mentorship Program
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Tech Package
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-700/20 to-gray-600/20 border-gray-500/30">
              <CardHeader className="text-center">
                <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">$25,000</CardTitle>
                <CardDescription className="text-gray-400">2nd Place</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                    Cash Prize
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                    Tech Package
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-gray-400 mr-2" />
                    Certificates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border-orange-500/30">
              <CardHeader className="text-center">
                <Star className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-white">$15,000</CardTitle>
                <CardDescription className="text-gray-400">3rd Place</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Cash Prize
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Swag Package
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Certificates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Event Schedule</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">48 hours of non-stop innovation and creativity</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  day: "Day 1",
                  date: "March 15",
                  events: [
                    { time: "9:00 AM", event: "Opening Ceremony", type: "ceremony" },
                    { time: "10:00 AM", event: "Hacking Begins!", type: "hack" },
                    { time: "2:00 PM", event: "Team Formation Workshop", type: "workshop" },
                    { time: "6:00 PM", event: "Sponsor Presentations", type: "presentation" },
                  ],
                },
                {
                  day: "Day 2",
                  date: "March 16",
                  events: [
                    { time: "9:00 AM", event: "Morning Check-in", type: "checkin" },
                    { time: "12:00 PM", event: "Mentor Office Hours", type: "mentoring" },
                    { time: "6:00 PM", event: "Progress Showcase", type: "showcase" },
                    { time: "10:00 PM", event: "Late Night Coding Session", type: "hack" },
                  ],
                },
                {
                  day: "Day 3",
                  date: "March 17",
                  events: [
                    { time: "9:00 AM", event: "Final Sprint", type: "hack" },
                    { time: "1:00 PM", event: "Submission Deadline", type: "deadline" },
                    { time: "2:00 PM", event: "Project Presentations", type: "presentation" },
                    { time: "5:00 PM", event: "Awards Ceremony", type: "ceremony" },
                  ],
                },
              ].map((day, dayIndex) => (
                <div key={dayIndex} className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {day.day} - {day.date}
                  </h3>
                  <div className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center space-x-4">
                        <div className="w-20 text-cyan-400 font-mono">{event.time}</div>
                        <div className="flex-1 text-gray-300">{event.event}</div>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about participating in HackSphere 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  Who can participate in HackSphere 2025?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  HackSphere 2025 is open to developers, designers, students, entrepreneurs, and anyone passionate about
                  technology and innovation. You must be at least 13 years old to participate. No prior hackathon
                  experience is required!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  How do I form a team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  Teams can have 1-4 members. You can register with an existing team or join our Discord server to find
                  teammates. We'll also host team formation sessions during the opening ceremony. Solo participants are
                  welcome too!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  What should I build?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  You can build anything! Web apps, mobile apps, AI/ML projects, blockchain solutions, games, or
                  hardware projects. Choose from our four tracks: AI/ML, Web3/Blockchain, Mobile Apps, or Open
                  Innovation. Projects must be started during the hackathon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  What tools and resources are provided?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  We provide free access to cloud platforms, APIs, development tools, and premium software licenses from
                  our sponsors. You'll also get access to mentors, workshops, and technical support throughout the
                  event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  How are projects judged?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  Projects are evaluated based on innovation, technical implementation, design, impact, and
                  presentation. Our panel includes industry experts, VCs, and tech leaders. Each team gets 5 minutes to
                  present their project.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  Is there a registration fee?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  No! HackSphere 2025 is completely free to participate. We believe in making innovation accessible to
                  everyone, regardless of their financial situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  What if I'm a beginner?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  Perfect! We welcome beginners and provide workshops, mentorship, and resources specifically for
                  newcomers. Many successful projects come from first-time participants. The hackathon is a great
                  learning experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  How does the virtual format work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  Everything happens online through our platform and Discord server. You'll have access to virtual
                  workspaces, video calls for team collaboration, live streams of presentations, and 24/7 support
                  channels.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  What about intellectual property?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  You retain full ownership of your intellectual property. By participating, you only grant us
                  permission to showcase your project during the event and in our promotional materials.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-gray-900/50 border border-gray-700 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-cyan-400 text-left">
                  When do registrations close?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-4">
                  Registration closes on June 15, 2025, or when we reach our capacity of 10,000 participants. We
                  recommend registering early to secure your spot and get access to pre-event resources.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Join Discord for Support
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  Contact Organizers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join the Revolution?</h2>
            <p className="text-xl text-gray-400 mb-12">
              Don't miss your chance to be part of the world's most exciting hackathon. Register now and start building
              the future!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-12 py-6"
              >
                <Zap className="mr-2 w-5 h-5" />
                Register Now - It's Free!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-6"
              >
                Join Discord Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help you with anything related to HackSphere 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="text-gray-400">info@hacksphere2025.com</p>
                      <p className="text-gray-400">support@hacksphere2025.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Mon-Fri, 9AM-5PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Headquarters</h4>
                      <p className="text-gray-400">123 Innovation Drive</p>
                      <p className="text-gray-400">Tech City, CA 94103</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Social Media</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          LinkedIn
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          Discord
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Response Time</h3>
                <p className="text-gray-400">
                  We aim to respond to all inquiries within 24 hours. During the hackathon event (June 20-22, 2025), our
                  support team will be available 24/7 for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">HackSphere</span>
              </div>
              <p className="text-gray-400">
                The world's largest virtual hackathon bringing together creators from around the globe.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="hover:text-white transition-colors">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#prizes" className="hover:text-white transition-colors">
                    Prizes
                  </Link>
                </li>
                <li>
                  <Link href="#sponsors" className="hover:text-white transition-colors">
                    Sponsors
                  </Link>
                </li>

                {/* Add this line */}
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HackSphere. All rights reserved. Built with ❤️ for the global developer community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
