import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Teaching Assistant",
    company: "George Mason University",
    location: "VA, USA",
    period: "Aug 2024 - May 2025",
    type: "Academic",
    achievements: [
      "Designed weekly lab sessions and office hours, mentoring students in Python, SQL, and Database Management",
      "Engineered an automated Python-based grading tool for SQL assignments, improving grading accuracy by 30%",
      "Enhanced course content and exams for CDS302: Scientific Data and Databases & CDS303: Scientific Data Mining",
      "Mentored 110+ students in Data Structures and Algorithms concepts during weekly office hours, leading to a demonstrable improvement in average quiz scores by 60%"
    ],
    skills: ["Python", "SQL", "Database Management", "Teaching", "Mentoring"],
    metrics: [
      { label: "Students Mentored", value: "110+" },
      { label: "Grading Accuracy", value: "+30%" },
      { label: "Quiz Score Improvement", value: "+60%" }
    ]
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Techimax IT Services Private Limited",
    location: "Hyderabad, Telangana, India",
    period: "May 2022 - Apr 2023",
    type: "Internship",
    companyId: "CIN:U25203TG2014OPC095858",
    achievements: [
      "Built and launched web applications using the MERN stack, reducing page load times by 25%",
      "Analyzed and remediated 30+ code-related issues weekly by performing code reviews and fixing bugs, improving system performance, and improving the overall end-user satisfaction by 20%",
      "Refactored and Streamlined SQL queries, reducing database response time by 40%",
      "Orchestrated a migration from legacy systems to a MERN-based architecture, achieving a 30% increase in performance and 15% cost reduction"
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "MERN Stack", "SQL"],
    metrics: [
      { label: "Page Load Time", value: "-25%" },
      { label: "Database Response", value: "-40%" },
      { label: "Performance Increase", value: "+30%" },
      { label: "Cost Reduction", value: "15%" }
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey in teaching, mentoring, and full-stack development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-secondary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                <Card className="ml-0 md:ml-20 hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      {/* Job Info */}
                      <div className="mb-4 lg:mb-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                          <Badge 
                            variant="secondary" 
                            className={exp.type === "Academic" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold text-primary mb-1">{exp.company}</h4>
                        {exp.companyId && (
                          <p className="text-sm text-muted-foreground mb-2">{exp.companyId}</p>
                        )}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-80">
                        {exp.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center p-3 bg-accent/30 rounded-lg">
                            <div className="text-lg font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};