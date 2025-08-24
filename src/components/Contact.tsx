import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities, collaborations, and innovative projects. Let's connect!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a href="mailto:sathwikvuppala.cs@gmail.com" className="group">
            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">sathwikvuppala.cs@gmail.com</p>
            </div>
          </a>

          <a href="tel:+15716049924" className="group">
            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 571 604 9924</p>
            </div>
          </a>

          <a href="https://github.com/sathwikvuppala" target="_blank" rel="noopener noreferrer" className="group">
            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <Github className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">@sathwikvuppala</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/sathwikvuppala" target="_blank" rel="noopener noreferrer" className="group">
            <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">@sathwikvuppala</p>
            </div>
          </a>
        </div>

        <Button size="lg" onClick={() => window.location.href = "mailto:sathwikvuppala.cs@gmail.com"} className="bg-primary hover:bg-primary/90">
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </Button>
      </div>
    </section>
  );
};