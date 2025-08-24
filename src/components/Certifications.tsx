import { Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    certNumber: "dfa3cefcc91b481aa5af4af1fbebf370",
    date: "Mar 2025",
    status: "Valid"
  },
  {
    name: "International Internship in Data Science",
    issuer: "APSSDC & Indo-Euro Synchronization (IES) Pvt Ltd",
    certNumber: "ACET22634",
    date: "Aug 2022",
    status: "Completed"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={cert.name} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-full">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-3">Cert No. {cert.certNumber}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{cert.date}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};