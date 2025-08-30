import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Backend Java Developer with over 3 years of experience in building enterprise-grade
                applications. I specialize in Spring Boot, Microservices architecture, and modern backend technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at Tata Consultancy Services, I focus on modernizing legacy systems, designing
                scalable RESTful APIs, and implementing robust security protocols. I have a proven track record of
                delivering high-performance solutions in agile environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Pune, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">(956) 170-8013</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">mishusingh800@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Available for opportunities</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground">Bachelor of Engineering</h4>
                      <p className="text-muted-foreground">Electronics Engineering</p>
                      <p className="text-sm text-muted-foreground">YCCE, Nagpur • GPA: 8.25 • 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Core Strengths</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Enterprise Application Development</li>
                    <li>• Microservices Architecture</li>
                    <li>• RESTful API Design</li>
                    <li>• Database Optimization</li>
                    <li>• Security Implementation</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
