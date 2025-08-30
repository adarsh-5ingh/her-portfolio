import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Shield, Wrench, GitBranch } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java 8", "Java 17", "SQL", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Spring Boot", "Spring Core", "Spring Data JPA", "Spring Security", "Hibernate", "JUnit", "Mockito"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "Oracle", "H2", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Maven", "Gradle"],
    },
    {
      title: "Security & Authentication",
      icon: <Shield className="h-6 w-6" />,
      skills: ["OAuth2", "JWT", "Okta", "Keycloak", "Spring Security"],
    },
    {
      title: "Tools & Technologies",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub", "IntelliJ IDEA", "Postman", "Swagger", "Apache Kafka", "Jira"],
    },
  ]

  const architecturalSkills = [
    "Microservices Architecture",
    "RESTful API Design",
    "Event-Driven Architecture",
    "Test-Driven Development (TDD)",
    "CI/CD Pipelines",
    "Performance Optimization",
    "System Monitoring & Observability",
    "Agile Methodologies",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <div className="text-primary">{category.icon}</div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">Architectural & Methodological Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {architecturalSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
