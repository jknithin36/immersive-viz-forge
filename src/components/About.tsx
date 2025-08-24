import { MapPin, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate scroll-mt-nav py-24 bg-[hsl(var(--background))]"
    >
      {/* background layers mirror Hero */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--accent)/0.1)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial opacity-80" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* heading block */}
        <header className="mb-14 text-center animate-fade-in">
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--foreground))]"
          >
            About Me
          </h2>
          {/* divider matches Hero’s dual accent */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-20 rounded-full bg-[hsl(var(--primary))]" />
            <span className="h-1 w-10 rounded-full bg-[hsl(var(--secondary))]" />
          </div>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* left column — copy + highlights + stats (chips match Hero style) */}
          <div className="space-y-6">
            <p className="animate-fade-in text-lg leading-relaxed text-[hsl(var(--muted-foreground))] [animation-delay:60ms]">
              I’m an MS CS student at George Mason University focused on{" "}
              <strong className="text-[hsl(var(--foreground))]">computer graphics</strong>,{" "}
              immersive <strong className="text-[hsl(var(--foreground))]">3D visualization</strong>,
              and modern web development. I build accessible, clean UIs on top of solid engineering.
            </p>

            <p className="animate-fade-in text-lg leading-relaxed text-[hsl(var(--muted-foreground))] [animation-delay:120ms]">
              Hands-on with <strong className="text-[hsl(var(--foreground))]">WebGL</strong>,{" "}
              <strong className="text-[hsl(var(--foreground))]">vtk.js</strong>,{" "}
              <strong className="text-[hsl(var(--foreground))]">React</strong>, Node.js, and PostgreSQL.
              Built interactive 3D point-cloud systems and dimensionality reduction pipelines (PCA, t-SNE, UMAP),
              with experience in TDD and rendering pipelines.
            </p>

            <p className="animate-fade-in text-lg leading-relaxed text-[hsl(var(--muted-foreground))] [animation-delay:180ms]">
              Fast learner, thoughtful shipper, and strong collaborator. Mentoring/teaching helps me explain complex ideas simply.
            </p>

            {/* highlights — same chip grammar as Hero metrics */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Key highlights">
              {[
                "WebGL + vtk.js for interactive 3D",
                "Dimensionality reduction (PCA, t-SNE, UMAP)",
                "React • Node.js • PostgreSQL",
                "Test-Driven Development (TDD)",
              ].map((item, i) => (
                <li
                  key={item}
                  className="animate-slide-in rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3"
                  style={{ animationDelay: `${220 + i * 60}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="text-sm text-[hsl(var(--foreground))]/90">{item}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* quick stats — identical visual treatment to Hero chips */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 text-center">
                <div className="text-2xl font-semibold text-[hsl(var(--foreground))]">3.67 / 4.0</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">Current GPA</div>
              </div>
              <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 text-center">
                <div className="text-2xl font-semibold text-[hsl(var(--foreground))]">110+</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))]">Students mentored</div>
              </div>
            </div>
          </div>

          {/* right column — contact panel (same card/hover language as Hero buttons + chips) */}
          <div className="space-y-4">
            <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[hsl(var(--primary)/0.12)] p-3">
                    <MapPin className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Location</h3>
                    <p className="text-[hsl(var(--muted-foreground))]">Fairfax, Virginia, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[hsl(var(--primary)/0.12)] p-3">
                    <Mail className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Email</h3>
                    <a
                      href="mailto:sathwikvuppala.cs@gmail.com"
                      className="text-[hsl(var(--primary))] underline-offset-4 hover:underline"
                    >
                      sathwikvuppala.cs@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[hsl(var(--secondary)/0.18)] p-3">
                    <Clock className="h-6 w-6 text-[hsl(var(--secondary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--foreground))]">Status</h3>
                    <p className="font-medium text-[hsl(var(--secondary))]">Available for opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* optional: small helper note, same card language */}
            <Card className="border-dashed">
              <CardContent className="p-5 text-sm text-[hsl(var(--muted-foreground))]">
                Exploring roles in Graphics, WebGL, Frontend, and Full-stack. Happy to chat about internships or full-time.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
