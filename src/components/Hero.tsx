import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden bg-[hsl(var(--background))]"
      aria-labelledby="hero-title"
    >
      {/* Background: soft gradient + subtle radial glows */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-[hsl(var(--primary)/0.06)] via-[hsl(var(--background))] to-[hsl(var(--secondary)/0.06)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial opacity-80" />

      {/* Decorative orbs (respect reduced motion via CSS) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-[20%] h-64 w-64 rounded-full bg-[hsl(var(--primary)/0.12)] blur-3xl animate-float" />
        <div className="absolute right-[10%] bottom-[18%] h-96 w-96 rounded-full bg-[hsl(var(--secondary)/0.12)] blur-3xl animate-float [animation-delay:600ms]" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--accent)/0.25)] blur-2xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-3 py-1 text-xs text-[hsl(var(--muted-foreground))] animate-fade-in">
            <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
            Open to Software Engineer roles — Fall ’25
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-title"
          className="text-center text-5xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-7xl animate-fade-in"
          style={{ animationDelay: "80ms" as unknown as number }}
        >
          Sathwik Vuppala
        </h1>
        <p className="sr-only" aria-live="polite">
          Software Engineer, 3D Graphics, WebGL, React.js, Full-stack
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["Software Engineer", "3D Graphics", "WebGL", "React.js", "Full-stack"].map((tag, i) => (
            <span
              key={tag}
              className="animate-slide-in rounded-full border border-[hsl(var(--primary)/0.25)] bg-[hsl(var(--primary)/0.08)] px-3 py-1 text-sm font-medium text-[hsl(var(--primary))]"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Subhead */}
        <p
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[hsl(var(--muted-foreground))] md:text-xl animate-fade-in"
          style={{ animationDelay: "160ms" }}
        >
          I craft immersive, performant web experiences—combining computer graphics & 3D visualization
          with robust, modern full-stack engineering. Specialized in WebGL, React, and building
          data-driven UIs that feel fast and human.
        </p>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in"
          style={{ animationDelay: "240ms" }}
        >
          <Button
            onClick={() => scrollTo("#projects")}
            size="lg"
            className="group relative overflow-hidden bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/0.9)]"
          >
            <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            View Projects
            <span className="absolute inset-0 translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-[hsl(var(--primary)/0.35)] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
          >
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <FileDown className="mr-2 h-5 w-5" />
              Download Résumé
            </a>
          </Button>
        </div>

        {/* Socials */}
        <ul
          className="mt-8 flex items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "320ms" }}
          aria-label="Social links"
        >
          <li>
            <a
              href="https://github.com/sathwikvuppala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group block rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 transition-all hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.06)]"
            >
              <Github className="h-5 w-5 text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--primary))]" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/sathwikvuppala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group block rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 transition-all hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.06)]"
            >
              <Linkedin className="h-5 w-5 text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--primary))]" />
            </a>
          </li>
          <li>
            <a
              href="mailto:sathwikvuppala.cs@gmail.com"
              aria-label="Email"
              className="group block rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 transition-all hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.06)]"
            >
              <Mail className="h-5 w-5 text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--primary))]" />
            </a>
          </li>
          <li>
            <a
              href="tel:+15716049924"
              aria-label="Phone"
              className="group block rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 transition-all hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.06)]"
            >
              <Phone className="h-5 w-5 text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--primary))]" />
            </a>
          </li>
        </ul>

        {/* Metrics chips (optional, adds credibility) */}
       
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollTo("#about")}
          className="rounded-full border border-[hsl(var(--primary)/0.35)] p-2 text-[hsl(var(--primary))] transition-all hover:bg-[hsl(var(--primary)/0.08)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))/0.4]"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
