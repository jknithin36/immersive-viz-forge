import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    institution: "George Mason University",
    degree: "Masters in Computer Science Engineering",
    location: "Fairfax, VA, USA",
    period: "Aug 2023 - May 2025",
    gpa: "3.67/4.00",
    status: "Current"
  },
  {
    institution: "Vellore Institute of Technology",
    degree: "Bachelors in Computer Science Engineering", 
    location: "Amaravathi, India",
    period: "Jul 2019 - May 2023",
    gpa: "8.97/10.00",
    status: "Completed"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={edu.institution} className="hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h3>
                    <p className="text-lg text-primary font-semibold mb-2">{edu.degree}</p>
                    <p className="text-muted-foreground mb-2">{edu.location}</p>
                    <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="font-semibold text-secondary">GPA: {edu.gpa}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === "Current" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        {edu.status}
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