interface SkillCategory {
  category: string;
  skills: string;
}

interface SkillsGridProps {
  skillCategories: SkillCategory[];
}

export const SkillsGrid = ({ skillCategories }: SkillsGridProps) => {
  return (
    <div className="grid gap-4 md:gap-6">
      {skillCategories.map((category, index) => (
        <div 
          key={index} 
          className="bg-accent/30 rounded-lg p-4 border border-accent/50 hover:border-primary/30 transition-colors"
        >
          <h3 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wide">
            {category.category}
          </h3>
          <p className="text-foreground/90 leading-relaxed">
            {category.skills}
          </p>
        </div>
      ))}
    </div>
  );
};