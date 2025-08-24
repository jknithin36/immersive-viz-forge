import { useMemo, useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  tags?: string[];          // for filtering (e.g., "WebGL", "API", "MERN")
  metrics?: string[];       // small credibility chips
};

const projects: Project[] = [
  {
    title: "3D Point Cloud Visualization with Immersive Tools",
    description:
      "Interactive web-based 3D point cloud visualization with VR support and dimensionality reduction (PCA, t-SNE, UMAP) for exploratory data analysis.",
    image: "/placeholder-project1.jpg",
    technologies: ["HTML", "vtk.js", "WebGL", "JavaScript", "t-SNE", "PCA", "UMAP"],
    highlights: [
      "Built modular 3D rendering pipeline with VR support",
      "Implemented DR methods (PCA, t-SNE, UMAP) with tunable params",
      "Cut adjustment time by ~50% via in-scene UI widgets",
      "Optimized buffers to maintain 60fps on 1M+ points",
    ],
    metrics: ["60 fps", "1M+ pts", "−50% tuning time"],
    tags: ["WebGL", "Visualization", "Research"],
    github: "#",
    demo: "#",
  },
  {
    title: "Test-Driven Development API with Node.js & PostgreSQL",
    description:
      "REST API built TDD-first with migrations, seeds, and CI. Focus on correctness, performance, and developer ergonomics.",
    image: "/placeholder-project2.jpg",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Knex.js", "Mocha", "Chai", "TDD"],
    highlights: [
      "Red-Green-Refactor across feature slices",
      "95%+ coverage with Mocha/Chai & supertest",
      "Idempotent migrations & seed strategies",
      "Latency budget <100ms p95 on core endpoints",
    ],
    metrics: ["95%+ cov", "<100ms p95"],
    tags: ["API", "Backend", "Testing"],
    github: "#",
    demo: "#",
  },
  {
    title: "Full-Stack Web Applications (MERN)",
    description:
      "Multiple MERN apps built and shipped in internship; emphasized perceived performance and DX.",
    image: "/placeholder-project3.jpg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "SQL"],
    highlights: [
      "Reduced page load by ~25% through code-splitting & caching",
      "Improved DB response by ~40% after index profiling",
      "Migrated legacy modules to modern architecture",
      "Introduced bundle analyzer & perf budgets in CI",
    ],
    metrics: ["−25% LCP", "−40% DB time"],
    tags: ["MERN", "Frontend", "Optimization"],
    github: "#",
    demo: "#",
  },
];

/** optional: simple filtering by high-level tags */
const filterChips = ["All", "WebGL", "API", "Visualization", "MERN", "Backend", "Frontend"];

export const Projects = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => (p.tags || []).includes(filter));
  }, [filter]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate scroll-mt-nav py-24 bg-[hsl(var(--background))]"
    >
      {/* background layers to match Hero/About */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--accent)/0.1)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial opacity-80" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-14 text-center animate-fade-in">
          <h2 id="projects-title" className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Featured Projects
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-20 rounded-full bg-[hsl(var(--primary))]" />
            <span className="h-1 w-10 rounded-full bg-[hsl(var(--secondary))]" />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-[hsl(var(--muted-foreground))]">
            A snapshot of work across 3D graphics, APIs, and full-stack engineering. Each card includes highlights and measurable outcomes.
          </p>

          {/* Filter chips (optional) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filterChips.map((chip) => {
              const active = filter === chip;
              return (
                <Button
                  key={chip}
                  size="sm"
                  variant={active ? "default" : "outline"}
                  onClick={() => setFilter(chip)}
                  className={active ? "" : "border-[hsl(var(--primary))/0.35] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.08]"}
                >
                  {chip}
                </Button>
              );
            })}
          </div>
        </header>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-1">
          {filtered.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="lg:flex">
                {/* Media (uses gradient frame + image) */}
                <div className="relative lg:w-5/12">
                  {/* gradient frame */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[hsl(var(--primary)/0.10)] to-[hsl(var(--secondary)/0.10)]" />
                  <div className="h-full w-full p-6">
                    <div className="relative overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                      {/* subtle sparkle badge */}
                      <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-2 py-1 text-xs text-[hsl(var(--muted-foreground))]">
                        <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
                        Case study
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-7/12 p-6 lg:p-8">
                  <CardHeader className="p-0">
                    <CardTitle className="mb-2 text-2xl font-semibold text-[hsl(var(--foreground))]">
                      {project.title}
                    </CardTitle>
                    <p className="text-[hsl(var(--muted-foreground))]">{project.description}</p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Metrics chips (credibility, mirrors Hero’s chips) */}
                    {project.metrics && project.metrics.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.metrics.map((m) => (
                          <li
                            key={m}
                            className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-2.5 py-1 text-xs text-[hsl(var(--muted-foreground))]"
                          >
                            {m}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech badges */}
                    <div className="mt-6">
                      <h4 className="mb-2 text-sm font-semibold text-[hsl(var(--foreground))]">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="border-[hsl(var(--primary))/0.25] bg-[hsl(var(--primary)/0.10)] text-[hsl(var(--primary))]"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6">
                      <h4 className="mb-2 text-sm font-semibold text-[hsl(var(--foreground))]">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start text-sm text-[hsl(var(--muted-foreground))]">
                            <span className="mr-3 mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, "_blank")}
                          className="border-[hsl(var(--primary))/0.35] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.08]"
                          aria-label={`Open GitHub repository for ${project.title}`}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]"
                          onClick={() => window.open(project.demo, "_blank")}
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/sathwikvuppala", "_blank")}
            className="border-[hsl(var(--primary))/0.35] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/0.08]"
            aria-label="Open GitHub profile"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
