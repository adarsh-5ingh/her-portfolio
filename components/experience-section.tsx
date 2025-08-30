import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "Tata Consultancy Services",
      position: "System Engineer",
      location: "Pune, Maharashtra",
      duration: "Oct 2023 – Present",
      achievements: [
        "Modernized enterprise systems by upgrading legacy platforms and re-architecting monoliths into Spring Boot microservices",
        "Designed and built secure, scalable RESTful APIs using Java 8+, Spring Data JPA, Spring Security, and JWT/OAuth2 with Okta-based authentication",
        "Adopted event-driven architecture using Apache Kafka for asynchronous, decoupled communication",
        "Leveraged Spring Cloud for service discovery, configuration, and inter-service communication",
        "Streamlined containerized deployments using Docker and implemented CI/CD pipelines via GitHub Actions",
        "Implemented unit and integration tests with JUnit and Mockito to ensure code quality and reliability",
        "Enabled full observability with Prometheus, Grafana, and Zipkin for monitoring, alerting, and root cause analysis",
      ],
      technologies: ["Java 8+", "Spring Boot", "Spring Cloud", "Apache Kafka", "Docker", "OAuth2", "JWT", "Okta"],
    },
    {
      company: "Capgemini India",
      position: "Software Engineer",
      location: "Pune, Maharashtra",
      duration: "July 2021 – July 2023",
      achievements: [
        "Developed and maintained RESTful APIs using Java 8+, Spring Boot, Spring Core, and Spring Security",
        "Built scalable and secure backend services using Spring Data JPA, Hibernate, and MySQL",
        "Implemented robust security protocols and authentication mechanisms, including OAuth2 and JWT",
        "Delivered high-quality, reliable features through JUnit and Mockito based test-driven-development (TDD)",
        "Actively participated in Agile methodologies including daily stand-ups, sprint planning, and retrospectives",
      ],
      technologies: ["Java 8+", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "OAuth2", "JWT", "JUnit"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Professional Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{exp.position}</CardTitle>
                      <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-muted-foreground leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
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
