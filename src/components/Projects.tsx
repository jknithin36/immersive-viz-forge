import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "3D Point Cloud Visualization with Immersive Tools",
    description: "Interactive web-based 3D point cloud visualization system enabling real-time immersive exploration with VR support and dimensionality reduction techniques.",
    image: "/placeholder-project1.jpg",
    technologies: ["HTML", "vtk.js", "WebGL", "JavaScript", "t-SNE", "PCA", "UMAP"],
    highlights: [
      "Constructed interactive 3D point cloud visualization system",
      "Architected modular components with VR rendering support",
      "Implemented dimensionality reduction methods (t-SNE, PCA, UMAP)",
      "Reduced user adjustment time by 50% with UI widgets"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Test-Driven Development API with Node.js & PostgreSQL",
    description: "RESTful API built using Test-Driven Development approach with comprehensive testing, database migrations, and optimized performance.",
    image: "/placeholder-project2.jpg",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Knex.js", "Mocha", "Chai", "TDD"],
    highlights: [
      "Designed RESTful API using TDD methodology",
      "Implemented comprehensive testing with Mocha & Chai",
      "Established database migrations and seeding",
      "Followed Red-Green-Refactor methodology"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "Full-Stack Web Applications (MERN)",
    description: "Built and launched multiple web applications using MERN stack during internship, focusing on performance optimization and user experience.",
    image: "/placeholder-project3.jpg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "SQL"],
    highlights: [
      "Reduced page load times by 25%",
      "Improved database response time by 40%",
      "Achieved 30% performance increase",
      "Migrated legacy systems to modern architecture"
    ],
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in 3D graphics, web development, and software engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-8">
                  <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className="text-sm text-muted-foreground">Project Preview</div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-2/3 p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/sathwikvuppala", "_blank")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};