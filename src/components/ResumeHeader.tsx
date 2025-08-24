import { Mail, Phone, Github, Linkedin } from "lucide-react";

interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

interface ResumeHeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export const ResumeHeader = ({ name, title, contact }: ResumeHeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-8 text-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          {name}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90 font-medium">
          {title}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a 
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Phone size={16} />
            {contact.phone}
          </a>
          <a 
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail size={16} />
            {contact.email}
          </a>
          <a 
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a 
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};