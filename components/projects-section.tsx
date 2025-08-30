"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Bidding Procurement System",
      description:
        "Built a distributed bidding platform for procurement requests using Java, Spring Boot, Kafka, and OAuth2, focusing on real-time vendor interaction and scalable microservices architecture.",
      features: [
        "Designed decoupled microservices with Spring Cloud and OpenFeign for clean inter-service communication",
        "Implemented Auth0-based OAuth2.0 authentication and authorization for secure, role-based access",
        "Containerized services with Docker and enabled centralized logging with Logback",
        "Added observability via Spring Boot Actuator and Prometheus for monitoring",
      ],
      technologies: ["Java", "Spring Boot", "Apache Kafka", "OAuth2", "Spring Cloud", "Docker", "Auth0", "Prometheus"],
      githubUrl: "https://github.com/mishusingh",
      liveUrl: null,
    },
    {
      title: "Enterprise Microservices Platform",
      description:
        "Modernized legacy monolithic applications into a scalable microservices architecture using Spring Boot and Spring Cloud ecosystem.",
      features: [
        "Re-architected monolithic applications into 8+ independent microservices",
        "Implemented API Gateway pattern for centralized routing and security",
        "Added distributed tracing and monitoring with Zipkin and Prometheus",
        "Achieved 40% improvement in system performance and scalability",
      ],
      technologies: ["Spring Boot", "Spring Cloud", "API Gateway", "Zipkin", "Prometheus", "Docker", "Kubernetes"],
      githubUrl: null,
      liveUrl: null,
    },
    {
      title: "Secure Authentication Service",
      description:
        "Developed a comprehensive authentication and authorization service supporting multiple OAuth2 providers and JWT token management.",
      features: [
        "Integrated multiple OAuth2 providers (Google, GitHub, Okta)",
        "Implemented JWT token generation, validation, and refresh mechanisms",
        "Added role-based access control (RBAC) with fine-grained permissions",
        "Built admin dashboard for user and role management",
      ],
      technologies: ["Spring Security", "OAuth2", "JWT", "Okta", "Spring Data JPA", "PostgreSQL", "Redis"],
      githubUrl: null,
      liveUrl: null,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-3 mb-6 flex-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-muted-foreground leading-relaxed">
                        • {feature}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" onClick={() => window.open(project.githubUrl, "_blank")}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" onClick={() => window.open(project.liveUrl, "_blank")}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
