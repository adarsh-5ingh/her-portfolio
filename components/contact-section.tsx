"use client"

import { Mail, MapPin, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's connect and build something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email Me</h3>
                  <p className="text-muted-foreground mb-3">Drop me a line for project discussions or opportunities</p>
                  <a
                    href="mailto:mishusingh800@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    mishusingh800@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground mb-3">Based in India, available for remote collaboration</p>
                  <span className="text-foreground font-medium">Pune, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/mishusingh"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
              >
                <Github className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/mishu-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
              >
                <Linkedin className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
