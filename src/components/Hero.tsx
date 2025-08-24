import { ArrowDown, Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main heading */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Sathwik Vuppala
          </h1>
          
          {/* Subtitle with tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["Software Engineer", "3D Graphics", "WebGL", "React.js", "Full-stack"].map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Crafting immersive digital experiences through computer graphics, 3D visualization, and modern web development.
            Specialized in WebGL, React, and full-stack development.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
              <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("#", "_blank")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <a
              href="https://github.com/sathwikvuppala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/sathwikvuppala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="mailto:sathwikvuppala.cs@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="tel:+15716049924"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};