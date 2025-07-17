import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Moon,
  Sun,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { ProjectCarousel } from "./ProjectCarousel";
import { CombinedTerminalSkills } from "./CombinedTerminalSkills";
import { EducationTimeline } from "./EducationTimeline";
import { WorkExperience } from "./WorkExperience";
import { ContactSection } from "./ContactSection";

// Portfolio content data
const content = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Saba Pkhakadze",
    title: "Computer Science Student & Backend Developer",
    subtitle:
      "Passionate about creating robust web applications and continuously learning new technologies",
    cta: "Get In Touch",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    description:
      "I'm a third-year Computer Science student at Kutaisi International University with a strong interest in software development. I have been creating and testing my own web applications for 2.5+ years, continuously improving my skills through hands-on experience. I maintain a balanced approach to life, combining my academic studies with continuous self-improvement. My disciplined and focused mindset helps me tackle challenges effectively, whether in programming or personal development.",
  },
  experience: {
    title: "Work Experience",
    jobs: [
      {
        company: "DevsData LLC",
        position: "QA Engineer",
        period: "January 2025 - Present",
        description:
          "Worked as a QA Engineer ensuring the quality of both frontend and backend components of web applications. Conducted manual and exploratory testing, created and executed detailed test cases, and collaborated closely with developers to report and resolve issues. Performed API testing using Postman and verified frontend functionality across various browsers and devices. Utilized Git and GitLab for version control and workflow, and managed tasks and bug tracking through Trello.",
      },
      {
        company: "Locafy – Localized Service Marketplace",
        position: "Backend Developer",
        period: "November 2024 – January 2025",
        description:
          "Built the complete backend for Locafy, a localized service marketplace startup developed as part of a university project. Designed and implemented RESTful APIs using ASP.NET Core and Entity Framework Core, and deployed the application to Microsoft Azure. Handled user authentication, service listings, and booking features. Performed extensive API testing using Postman. Worked independently on the backend, coordinating with a team of frontend developers and managing all backend logic, database modeling, and endpoint documentation.",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "GrindersFX Trading Portfolio",
        description:
          "On freelance, I developed a comprehensive trading portfolio website for GrindersFX, a professional trading platform. Built a modern, responsive interface to showcase trading strategies, performance metrics, and portfolio analytics.",
        technologies: [
          "TypeScript",
          "React",
          "TailwindCSS",
          "Chart.js",
          "Responsive Design",
        ],
        type: "Freelance Project",
        link: "#",
        github: "#",
      },
      {
        title: "eCommerce Web Application",
        description:
          "Designed, developed, and thoroughly tested a full-stack eCommerce platform using ASP.NET Core Web API and React. Implemented secure user authentication with JWT, integrated PayPal for payment processing, and built a responsive frontend for seamless user experience.",
        technologies: [
          "C#",
          "ASP.NET Core Web API",
          "React",
          "PostgreSQL",
          "JWT",
          "PayPal API",
          "Postman",
        ],
        type: "Full-Stack Project",
        link: "#",
      },
      {
        title: "Video-Platform",
        description:
          "Developed and thoroughly tested a custom video-sharing platform using ASP.NET, enabling users to watch and interact with uploaded content. Gained hands-on experience in backend development and web technologies.",
        technologies: [
          "C#",
          "ASP.NET Core Web API",
          "PostgreSQL",
          "React",
          "Postman",
        ],
        type: "Web Application",
        link: "#",
      },
      {
        title: "Blogs-Application",
        description:
          "Built a dynamic blog platform using ASP.NET that features user authentication, complete post management (CRUD operations), and interactive content sharing capabilities. Tested thoroughly using Swagger.",
        technologies: ["C#", "ASP.NET MVC", "MSSQL"],
        type: "Web Application",
        link: "#",
      },
      {
        title: "MyPostman (Clone of Postman Application)",
        description:
          "MyPostman app provides a user-friendly interface for making HTTP requests to APIs and viewing the responses in a formatted JSON. Ideal for developers and testers, this tool simplifies API interaction and debugging, helping you to efficiently validate and troubleshoot your API calls.",
        technologies: ["C#", ".NET 8", "HTTPClient", "WinForms", "JWT Auth"],
        type: "Desktop Application",
        link: "#",
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        institution: "Kutaisi International University (KIU)",
        degree: "Bachelor of Computer Science",
        field: "Computer Science",
        startDate: "2023",
        endDate: "Present",
        location: "Kutaisi, Georgia",
        type: "university" as const,
        description:
          "Pursuing a comprehensive Computer Science education with focus on software engineering, algorithms, and system design. Maintaining a strong academic performance while building practical development skills.",
        skills: [
          "Data Structures & Algorithms",
          "Theory of Computation",
          "Computer Architecture",
          "Database Systems",
          "Operating Systems",
          "Management",
          "Software Engineering",
          "Web Development",
          "Principles of Programming Languages",
          "Calculus",
          "Linear Algebra",
          "Scripting Languages",
          "GPA: 3.4/4.0",
        ],
      },
      {
        institution: "TBC IT Academy",
        degree: ".NET Back-End Development",
        field: "Backend Development",
        startDate: "2024",
        endDate: "2025",
        location: "Tbilisi, Georgia",
        type: "course" as const,
        description:
          "Intensive backend development bootcamp focusing on .NET technologies and modern development practices.",
        skills: [
          "C#",
          "ASP.NET Core",
          "Entity Framework Core",
          "Web API",
          "SQL Server",
          "Authentication & Authorization",
          "JWT",
          "Clean Architecture",
          "Onion Architecture",
          "MediatR",
          "Repository Pattern",
          "Dependency Injection",
          "Git",
          "MVC",
          "RESTful API Design",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    soft: {
      title: "Soft Skills",
      items: [
        "Teamwork",
        "Time Management",
        "Leadership",
        "Effective Communication",
        "Critical Thinking",
        "Problem-Solving",
      ],
    },
    tech: {
      title: "Technical Skills",
      items: [
        "C# (Advanced)",
        "Java Core (4.0GPA)",
        "ASP.NET Core Web API/MVC",
        "PostgreSQL(3.7GPA)",
        "MSSQL",
        "HTML",
        "CSS",
        "JavaScript (+React)",
        "Python (Core)",
        "Algorithms & Data-Structures",
        "Trello",
        "Git",
      ],
    },
  },
  contact: {
    title: "Get In Touch",
    subtitle:
      "Let's discuss opportunities and collaborate on exciting projects",
    info: {
      email: "phkhakadze.saba@kiu.edu.ge",
      phone: "+995-591917297",
      location: "Kutaisi, Georgia",
    },
  },
  languages: "Languages: English (C1), Georgian (Native)",
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Set dark mode as default on initial load
  useState(() => {
    document.documentElement.classList.add("dark");
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-lg border-b border-border z-50 transition-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gradient">SP</div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {content.nav.about}
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {content.nav.experience}
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {content.nav.projects}
              </a>
              <a
                href="#education"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {content.nav.education}
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {content.nav.contact}
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="transition-smooth hover:scale-110"
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-52 pb-20 px-4 sm:px-6 lg:px-8 hero-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 text-sm font-medium animate-scale-in"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Available for opportunities
              </Badge>
            </div>

            <p className="text-lg text-muted-foreground mb-4 animate-fade-in">
              {content.hero.greeting}
            </p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-scale-in">
              {content.hero.name}
            </h1>
            <h2 className="text-xl md:text-3xl text-muted-foreground mb-6 max-w-4xl mx-auto font-light animate-fade-in">
              {content.hero.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
              <Button
                size="lg"
                className="hero-gradient glow-shadow hover:scale-105 transition-bounce px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {content.hero.cta}
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-bounce px-8 py-3 text-lg border-2"
                onClick={() => {
                  // Create a dummy CV download
                  const link = document.createElement("a");
                  link.href = "/CV.pdf";
                  link.download = "CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                {content.hero.downloadCV}
              </Button>
            </div>

            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            {content.about.title}
          </h2>

          <Card className="p-10 card-gradient card-shadow animate-scale-in border-0">
            <p className="text-lg leading-relaxed text-muted-foreground mb-10">
              {content.about.description}
            </p>

            <div className="pt-8 border-t border-border">
              <CombinedTerminalSkills
                technicalSkills={content.skills.tech.items.map((item) => ({
                  name: item,
                  level: "Advanced",
                  category: "technical" as const,
                }))}
                softSkills={content.skills.soft.items.map((item) => ({
                  name: item,
                  level: "Expert",
                  category: "soft" as const,
                }))}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            {content.experience.title}
          </h2>

          <WorkExperience jobs={content.experience.jobs} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            {content.projects.title}
          </h2>

          <ProjectCarousel projects={content.projects.items} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            {content.education.title}
          </h2>

          <EducationTimeline education={content.education.items} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <ContactSection
          title={content.contact.title}
          subtitle={content.contact.subtitle}
          info={content.contact.info}
          languages={content.languages}
        />
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Saba Pkhakadze. Built with ❤️ and React.
          </p>
        </div>
      </footer>
    </div>
  );
}
