import { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ResumeSection = ({ title, children, className = "" }: ResumeSectionProps) => {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="border-l-4 border-primary pl-4 mb-4">
        <h2 className="text-2xl font-bold text-primary tracking-wide">
          {title}
        </h2>
      </div>
      <div className="pl-4">
        {children}
      </div>
    </section>
  );
};

interface EducationItemProps {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
}

export const EducationItem = ({ institution, degree, location, period, gpa }: EducationItemProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-foreground">{institution}</h3>
        <span className="text-sm text-muted-foreground font-medium">{period}</span>
      </div>
      <p className="text-foreground/90 mb-1">{degree}</p>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{location}</span>
        {gpa && <span className="font-medium">GPA: {gpa}</span>}
      </div>
    </div>
  );
};

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  companyId?: string;
}

export const ExperienceItem = ({ title, company, location, period, achievements, companyId }: ExperienceItemProps) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
          <p className="text-foreground/90 font-medium">{company}</p>
          {companyId && <p className="text-sm text-muted-foreground">{companyId}</p>}
        </div>
        <div className="text-right text-sm">
          <div className="font-medium text-primary">{period}</div>
          <div className="text-muted-foreground">{location}</div>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-1 text-foreground/90">
        {achievements.map((achievement, index) => (
          <li key={index} className="leading-relaxed">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProjectItemProps {
  title: string;
  description: string[];
}

export const ProjectItem = ({ title, description }: ProjectItemProps) => {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-foreground/90">
        {description.map((point, index) => (
          <li key={index} className="leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface CertificationItemProps {
  name: string;
  issuer: string;
  certNumber: string;
  date: string;
}

export const CertificationItem = ({ name, issuer, certNumber, date }: CertificationItemProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <span className="text-sm text-primary font-medium">{date}</span>
      </div>
      <p className="text-foreground/90 mb-1">{issuer}</p>
      <p className="text-sm text-muted-foreground">Cert No. {certNumber}</p>
    </div>
  );
};