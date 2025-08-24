import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * Keep categories semantic; we’ll style icons with HSL tokens (no fixed Tailwind colors).
 */
const skillCategories = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: ["C", "C++", "Java", "Data Structures & Algorithms", "Python", "RDBMS", "SQL"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "React.js", "vtk.js", "WebGL"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "RESTful API"],
  },
  {
    category: "Database & Storage",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "Knex.js", "MongoDB", "AWS S3", "AWS RDS"],
  },
  {
    category: "Deployment & CI/CD",
    icon: "🚀",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
  {
    category: "Machine Learning & Data Science",
    icon: "🤖",
    skills: ["Dimension Reduction", "Scientific Data Mining", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Design & Prototyping",
    icon: "🎭",
    skills: ["Figma", "Adobe CC", "Canva"],
  },
];

/**
 * Small helper to rotate subtle accent styles per card (still using your tokens).
 */
const accentClasses = [
  "from-[hsl(var(--primary)/0.18)] to-[hsl(var(--primary)/0.30)]",
  "from-[hsl(var(--secondary)/0.18)] to-[hsl(var(--secondary)/0.30)]",
  "from-[hsl(var(--accent)/0.18)] to-[hsl(var(--accent)/0.30)]",
  "from-[hsl(var(--primary)/0.16)] to-[hsl(var(--secondary)/0.28)]",
];

export const Skills = () => {
  const [viewMode, setViewMode] = useState<"cards" | "pills">("cards");

  const Header = (
    <div className="text-center mb-14 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--foreground))]">
        Technical Skills
      </h2>
      <div className="mt-5 flex items-center justify-center gap-2">
        <span className="h-1 w-20 rounded-full bg-[hsl(var(--primary))]" />
        <span className="h-1 w-10 rounded-full bg-[hsl(var(--secondary))]" />
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <Button
          size="sm"
          variant={viewMode === "cards" ? "default" : "outline"}
          onClick={() => setViewMode("cards")}
          className="min-w-20"
        >
          Cards
        </Button>
        <Button
          size="sm"
          variant={viewMode === "pills" ? "default" : "outline"}
          onClick={() => setViewMode("pills")}
          className="min-w-20"
        >
          Pills
        </Button>
      </div>
    </div>
  );

  if (viewMode === "pills") {
    return (
      <section
        id="skills"
        aria-labelledby="skills-title"
        className="relative isolate scroll-mt-nav py-24 bg-[hsl(var(--background))]"
      >
        {/* match Hero/About background language */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--accent)/0.1)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial opacity-80" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="skills-title" className="sr-only">Technical Skills</h2>
          {Header}

          <div className="space-y-10">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`inline-grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br ${accentClasses[index % accentClasses.length]} text-sm`}
                    aria-hidden
                  >
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                    {category.category}
                  </h3>
                  <Badge variant="secondary" className="ml-1 text-[.72rem]">
                    {category.skills.length} skills
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="cursor-default px-3 py-1 text-sm font-medium border-[hsl(var(--primary))/0.25] hover:bg-[hsl(var(--primary)/0.06)] hover:border-[hsl(var(--primary))/0.35] transition-colors"
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

  // Cards view
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate scroll-mt-nav py-24 bg-[hsl(var(--background))]"
    >
      {/* match Hero/About background language */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--accent)/0.1)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial opacity-80" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="skills-title" className="sr-only">Technical Skills</h2>
        {Header}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={category.category}
              className="group animate-fade-in border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-base">
                  <span
                    className={`inline-grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${accentClasses[index % accentClasses.length]} text-lg`}
                    aria-hidden
                  >
                    {category.icon}
                  </span>
                  <div>
                    <div className="font-semibold text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                      {category.category}
                    </div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
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
                      className="cursor-default bg-[hsl(var(--primary)/0.10)] text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.25)] text-[0.72rem] font-medium hover:bg-[hsl(var(--primary)/0.18)] transition-colors"
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
