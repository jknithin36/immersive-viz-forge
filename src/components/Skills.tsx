import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: ["C", "C++", "Java", "Data Structures & Algorithms", "Python", "RDBMS", "SQL"],
    color: "from-blue-500 to-blue-600"
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "React.js", "vtk.js", "WebGL"],
    color: "from-green-500 to-green-600"
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "RESTful API"],
    color: "from-purple-500 to-purple-600"
  },
  {
    category: "Database & Storage",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "Knex.js", "MongoDB", "AWS S3", "AWS RDS"],
    color: "from-orange-500 to-orange-600"
  },
  {
    category: "Deployment & CI/CD",
    icon: "🚀",
    skills: ["AWS", "Docker", "Kubernetes"],
    color: "from-red-500 to-red-600"
  },
  {
    category: "Machine Learning & Data Science",
    icon: "🤖",
    skills: ["Dimension Reduction", "Scientific Data Mining", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    category: "Design & Prototyping",
    icon: "🎭",
    skills: ["Figma", "Adobe CC", "Canva"],
    color: "from-pink-500 to-pink-600"
  }
];

export const Skills = () => {
  const [viewMode, setViewMode] = useState<"cards" | "pills">("cards");

  if (viewMode === "pills") {
    return (
      <section id="skills" className="py-20 bg-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="outline"
                onClick={() => setViewMode("cards")}
                size="sm"
              >
                Cards
              </Button>
              <Button
                variant={viewMode === "pills" ? "default" : "outline"}
                onClick={() => setViewMode("pills")}
                size="sm"
              >
                Pills
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {category.category}
                  <Badge variant="secondary" className="ml-2">
                    {category.skills.length} skills
                  </Badge>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={viewMode === "cards" ? "default" : "outline"}
              onClick={() => setViewMode("cards")}
              size="sm"
            >
              Cards
            </Button>
            <Button
              variant="outline"
              onClick={() => setViewMode("pills")}
              size="sm"
            >
              Pills
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.category}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white text-xl`}>
                    {category.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {category.skills.length} skills
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};