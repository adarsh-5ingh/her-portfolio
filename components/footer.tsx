"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Mishu Singh</h3>
              <p className="text-muted-foreground leading-relaxed">
                Backend Java Developer passionate about building scalable, high-performance enterprise applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mishusingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/mishu-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:mishusingh800@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">© {currentYear} Mishu Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
