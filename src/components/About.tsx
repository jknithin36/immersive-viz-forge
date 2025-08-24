import { MapPin, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Master's student in Computer Science at George Mason University, with a strong foundation in 
              computer graphics, immersive 3D visualization, and web development. I'm passionate about building 
              clean and user-friendly digital experiences using modern tools and technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have hands-on experience with WebGL, vtk.js, React, Node.js, and PostgreSQL. I'm particularly 
              skilled in developing interactive 3D point cloud systems and implementing dimensionality reduction 
              techniques (PCA, t-SNE, UMAP). I'm also experienced in Test-Driven Development (TDD) and building 
              complex rendering pipelines.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a fast learner, passionate about solving real-world problems, and always eager to pick up new 
              skills and advance in graphics programming and immersive analytics. I collaborate effectively in 
              agile environments and have experience in teaching and mentoring.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">3.67/4.0</div>
                <div className="text-sm text-muted-foreground">Current GPA</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">110+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
              </div>
            </div>
          </div>

          {/* Contact info cards */}
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Fairfax, Virginia, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:sathwikvuppala.cs@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      sathwikvuppala.cs@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/20 rounded-full">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Status</h3>
                    <p className="text-secondary font-medium">Available for opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};