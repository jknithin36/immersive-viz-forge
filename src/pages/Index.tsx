import { ResumeHeader } from "@/components/ResumeHeader";
import { ResumeSection, EducationItem, ExperienceItem, ProjectItem, CertificationItem } from "@/components/ResumeSection";
import { SkillsGrid } from "@/components/SkillsGrid";

const Index = () => {
  const contactInfo = {
    phone: "+1 5716049924",
    email: "sathwikvuppala.cs@gmail.com",
    linkedin: "https://linkedin.com/in/sathwikvuppala",
    github: "https://github.com/sathwikvuppala"
  };

  const summary = "Software Engineer with a strong foundation in computer graphics, immersive 3D visualization, and web development. Experience in building interactive 3D point cloud systems using WebGL, vtk.js, and modern JavaScript frameworks. Skilled in C/C++, OpenGL, Node.js, PostgreSQL, and Test-Driven Development (TDD). Successfully designed modular, scalable systems, implemented dimensionality reduction techniques (PCA, t-SNE, UMAP), and developed complex rendering pipelines. Collaborates effectively in agile environments with experience in teaching and mentoring. Focused on advancing graphics programming and immersive analytics.";

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: "C, C++, Java, Data Structures & Algorithms, Python, RDBMS, SQL"
    },
    {
      category: "Frontend",
      skills: "HTML, CSS, JavaScript, PHP, React.js, vtk.js, WebGL"
    },
    {
      category: "Backend",
      skills: "Node.js, Express.js, RESTful API"
    },
    {
      category: "Database & Storage",
      skills: "MySQL, PostgreSQL, Knex.js, MongoDB, AWS S3, AWS RDS"
    },
    {
      category: "Deployment & CI/CD",
      skills: "AWS, Docker, Kubernetes"
    },
    {
      category: "Machine Learning & Data Science",
      skills: "Dimension Reduction, Scientific Data Mining, Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn"
    },
    {
      category: "Design & Prototyping",
      skills: "Figma, Adobe CC, Canva"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ResumeHeader 
        name="Sathwik Vuppala"
        title="Software Engineer"
        contact={contactInfo}
      />
      
      <div className="max-w-4xl mx-auto p-8">
        <ResumeSection title="SUMMARY">
          <p className="text-foreground/90 leading-relaxed">
            {summary}
          </p>
        </ResumeSection>

        <ResumeSection title="EDUCATION">
          <EducationItem
            institution="George Mason University"
            degree="Masters in Computer Science Engineering"
            location="Fairfax, VA, USA"
            period="Aug 2023 - May 2025"
            gpa="3.67/4.00"
          />
          <EducationItem
            institution="Vellore Institute of Technology"
            degree="Bachelors in Computer Science Engineering"
            location="Amaravathi, India"
            period="Jul 2019 - May 2023"
            gpa="8.97/10.00"
          />
        </ResumeSection>

        <ResumeSection title="SKILLS">
          <SkillsGrid skillCategories={skillCategories} />
        </ResumeSection>

        <ResumeSection title="WORK EXPERIENCE">
          <ExperienceItem
            title="Teaching Assistant"
            company="George Mason University"
            location="VA, USA"
            period="Aug 2024 - May 2025"
            achievements={[
              "Designed weekly lab sessions and office hours, mentoring students in Python, SQL, and Database Management.",
              "Engineered an automated Python-based grading tool for SQL assignments, improving grading accuracy by 30%.",
              "Enhanced course content and exams for CDS302: Scientific Data and Databases & CDS303: Scientific Data Mining.",
              "Mentored 110+ students in Data Structures and Algorithms concepts during weekly office hours, leading to a demonstrable improvement in average quiz scores by 60%."
            ]}
          />
          <ExperienceItem
            title="Full Stack Web Development Intern"
            company="Techimax IT Services Private Limited"
            location="Hyderabad, Telangana, India"
            period="May 2022 - Apr 2023"
            companyId="CIN:U25203TG2014OPC095858"
            achievements={[
              "Built and launched web applications using the MERN stack, reducing page load times by 25%.",
              "Analyzed and remediated 30+ code-related issues weekly by performing code reviews and fixing bugs, improving system performance, and improving the overall end-user satisfaction by 20%.",
              "Refactored and Streamlined SQL queries, reducing database response time by 40%.",
              "Orchestrated a migration from legacy systems to a MERN-based architecture, achieving a 30% increase in performance and 15% cost reduction."
            ]}
          />
        </ResumeSection>

        <ResumeSection title="PROJECTS">
          <ProjectItem
            title="3D Point Cloud Visualization with Immersive Tools and Dimensionality Reduction"
            description={[
              "Constructed an interactive web-based 3D point cloud visualization system enabling real-time immersive exploration and user-controlled input using HTML, vtk.js, and WebGL libraries.",
              "Architected modular components supporting file uploads, VR rendering, synchronized camera views, and selectable dimensionality reduction methods (t-SNE, PCA, UMAP), enhancing user experience and flexibility.",
              "Implemented UI widgets for perplexity and iteration tuning, differential analysis, and reset/sync functions, reducing user adjustment time by 50% and facilitating collaborative immersive analytics.",
              "Enhanced system modularity and maintainability by designing reusable input handlers and visualization modes (Points, Wireframe, Surface), expediting feature expansion and VR deployment."
            ]}
          />
          <ProjectItem
            title="Test-Driven Development (TDD) with Node.js & PostgreSQL"
            description={[
              "Designed a RESTful API using Node.js, Express, PostgreSQL, and Knex with a Test-Driven Development (TDD) approach. The project follows the Red-Green-Refactor methodology to ensure robust, scalable, and well-tested backend development.",
              "Implemented Mocha & Chai for testing, Knex for database queries, Express for server setup, and PostgreSQL for data storage. Adopted database migrations, seeding, and integration testing to maintain data integrity and optimize query performance.",
              "Established a TDD workflow, writing tests before implementing features such as CRUD operations, error handling, and database interactions. Used Knex migrations and seeds to manage different database environments for development and testing."
            ]}
          />
        </ResumeSection>

        <ResumeSection title="CERTIFICATIONS">
          <CertificationItem
            name="AWS Certified Developer - Associate"
            issuer="Amazon Web Services"
            certNumber="dfa3cefcc91b481aa5af4af1fbebf370"
            date="Mar 2025"
          />
          <CertificationItem
            name="International Internship in Data Science"
            issuer="APSSDC & Indo-Euro Synchronization (IES) Pvt Ltd"
            certNumber="ACET22634"
            date="Aug 2022"
          />
        </ResumeSection>
      </div>
    </div>
  );
};

export default Index;
