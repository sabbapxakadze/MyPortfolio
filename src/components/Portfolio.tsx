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
  ArrowDown
} from "lucide-react";

// Portfolio content data
const content = {
  nav: {
    about: "About",
    experience: "Experience", 
    projects: "Projects",
    education: "Education",
    contact: "Contact"
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Saba Pkhakadze",
    title: "Computer Science Student & Backend Developer",
    subtitle: "Passionate about creating robust web applications and continuously learning new technologies",
    cta: "Get In Touch",
    downloadCV: "Download CV"
  },
  about: {
    title: "About Me",
    description: "I'm a third-year Computer Science student at Kutaisi International University with a strong interest in software development. I have been creating and testing my own web applications for 2.5+ years, continuously improving my skills through hands-on experience. I maintain a balanced approach to life, combining my academic studies with continuous self-improvement. My disciplined and focused mindset helps me tackle challenges effectively, whether in programming or personal development."
  },
  experience: {
    title: "Work Experience",
    jobs: [
      {
        company: "DevsData LLC",
        position: "QA Engineer",
        period: "January 2025 - Present",
        description: "Worked as a QA Engineer ensuring the quality of both frontend and backend components of web applications. Conducted manual and exploratory testing, created and executed detailed test cases, and collaborated closely with developers to report and resolve issues. Performed API testing using Postman and verified frontend functionality across various browsers and devices. Utilized Git and GitLab for version control and workflow, and managed tasks and bug tracking through Trello."
      },
      {
        company: "Locafy – Localized Service Marketplace",
        position: "Backend Developer",
        period: "November 2024 – January 2025",
        description: "Built the complete backend for Locafy, a localized service marketplace startup developed as part of a university project. Designed and implemented RESTful APIs using ASP.NET Core and Entity Framework Core, and deployed the application to Microsoft Azure. Handled user authentication, service listings, and booking features. Performed extensive API testing using Postman. Worked independently on the backend, coordinating with a team of frontend developers and managing all backend logic, database modeling, and endpoint documentation."
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        name: "eCommerce Web Application",
        description: "Designed, developed, and thoroughly tested a full-stack eCommerce platform using ASP.NET Core Web API and React. Implemented secure user authentication with JWT, integrated PayPal for payment processing, and built a responsive frontend for seamless user experience.",
        technologies: ["C#", "ASP.NET Core Web API", "React", "PostgreSQL", "JWT", "PayPal API", "Postman"],
        link: "#"
      },
      {
        name: "Video-Platform",
        description: "Developed and thoroughly tested a custom video-sharing platform using ASP.NET, enabling users to watch and interact with uploaded content. Gained hands-on experience in backend development and web technologies.",
        technologies: ["C#", "ASP.NET Core Web API", "PostgreSQL", "React", "Postman"],
        link: "#"
      },
      {
        name: "Blogs-Application",
        description: "Built a dynamic blog platform using ASP.NET that features user authentication, complete post management (CRUD operations), and interactive content sharing capabilities. Tested thoroughly using Swagger.",
        technologies: ["C#", "ASP.NET MVC", "MSSQL"],
        link: "#"
      },
      {
        name: "MyPostman (Clone of Postman Application)",
        description: "MyPostman app provides a user-friendly interface for making HTTP requests to APIs and viewing the responses in a formatted JSON. Ideal for developers and testers, this tool simplifies API interaction and debugging, helping you to efficiently validate and troubleshoot your API calls.",
        technologies: ["C#", ".NET 8", "HTTPClient", "WinForms", "JWT Auth"],
        link: "#"
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        institution: "Kutaisi International University (KIU)",
        degree: "Bachelor of Computer Science",
        period: "2023 - Present",
        gpa: "GPA: 3.4/4.0",
        coursework: "Data Structures & Algorithms, Theory of Computation, Computer Architecture, Database Systems, Operating Systems, Management, Software Engineering, Web Development, Principles of Programming Languages, Calculus, Linear Algebra, Scripting Languages."
      },
      {
        institution: "TBC IT Academy",
        degree: ".NET Back-End Development",
        period: "2024-2025",
        gpa: "",
        coursework: "C#, ASP.NET Core, Entity Framework Core, Web API, SQL Server, Authentication & Authorization, JWT, Clean Architecture, Onion Architecture, MediatR, Repository Pattern, Dependency Injection, Git, MVC, RESTful API Design."
      }
    ]
  },
  skills: {
    title: "Skills",
    soft: {
      title: "Soft Skills",
      items: ["Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking", "Problem-Solving"]
    },
    tech: {
      title: "Technical Skills",
      items: ["C# (Advanced)", "Java Core (4.0GPA)", "ASP.NET Core Web API/MVC", "PostgreSQL(3.7GPA)", "MSSQL", "HTML", "CSS", "JavaScript (+React)", "Python (Core)", "Algorithms & Data-Structures", "Trello", "Git"]
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Let's discuss opportunities and collaborate on exciting projects",
    info: {
      email: "phkhakadze.saba@kiu.edu.ge",
      phone: "+995-591917297",
      location: "Kutaisi, Georgia"
    }
  },
  languages: "Languages: English (C1), Georgian (Native)"
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-lg border-b border-border z-50 transition-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gradient flex items-center">
              <Sparkles className="mr-2 h-6 w-6" />
              SP
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
                {content.nav.about}
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
                {content.nav.experience}
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
                {content.nav.projects}
              </a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
                {content.nav.education}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth font-medium">
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
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 hero-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium animate-scale-in">
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
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-primary" />
                    {content.skills.soft.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {content.skills.soft.items.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="transition-smooth hover:scale-105 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    {content.skills.tech.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {content.skills.tech.items.map((skill, index) => (
                      <Badge key={index} variant="default" className="transition-smooth hover:scale-105 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
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
          
          <div className="space-y-8">
            {content.experience.jobs.map((job, index) => (
              <Card key={index} className="p-8 card-gradient card-shadow hover:scale-105 transition-bounce border-0 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground flex items-center mb-2">
                      <Briefcase className="mr-3 h-6 w-6 text-primary group-hover:animate-float" />
                      {job.position}
                    </h3>
                    <p className="text-xl text-primary font-medium">{job.company}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="mr-2 h-5 w-5" />
                    {job.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">{job.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            {content.projects.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content.projects.items.map((project, index) => (
              <Card key={index} className="p-8 card-gradient card-shadow hover:scale-105 transition-bounce group border-0 h-full">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center">
                    <Code className="mr-3 h-6 w-6 text-primary group-hover:animate-float" />
                    {project.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-smooth"
                    asChild
                  >
                    <a href={project.link}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="transition-smooth hover:scale-105">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            {content.education.title}
          </h2>
          
          <div className="space-y-8">
            {content.education.items.map((edu, index) => (
              <Card key={index} className="p-8 card-gradient card-shadow hover:scale-105 transition-bounce border-0 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground flex items-center mb-2">
                      <GraduationCap className="mr-3 h-6 w-6 text-primary group-hover:animate-float" />
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-primary font-medium">{edu.institution}</p>
                    {edu.gpa && <p className="text-muted-foreground mt-1">{edu.gpa}</p>}
                  </div>
                  <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="mr-2 h-5 w-5" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Related Coursework:</strong> {edu.coursework}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {content.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-16">
            {content.contact.subtitle}
          </p>
          
          <Card className="p-10 card-gradient card-shadow border-0">
            <div className="grid md:grid-cols-3 gap-10 mb-10">
              <a 
                href={`mailto:${content.contact.info.email}`}
                className="flex flex-col items-center p-6 rounded-lg hover:scale-105 transition-bounce group"
              >
                <Mail className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
                <h3 className="font-semibold text-foreground mb-2 text-lg">Email</h3>
                <p className="text-muted-foreground">{content.contact.info.email}</p>
              </a>
              
              <a 
                href={`tel:${content.contact.info.phone}`}
                className="flex flex-col items-center p-6 rounded-lg hover:scale-105 transition-bounce group"
              >
                <Phone className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
                <h3 className="font-semibold text-foreground mb-2 text-lg">Phone</h3>
                <p className="text-muted-foreground">{content.contact.info.phone}</p>
              </a>
              
              <div className="flex flex-col items-center p-6 rounded-lg group">
                <MapPin className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
                <h3 className="font-semibold text-foreground mb-2 text-lg">Location</h3>
                <p className="text-muted-foreground">{content.contact.info.location}</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <div className="flex justify-center space-x-6 mb-8">
                <Button variant="ghost" size="lg" className="hover:scale-110 transition-bounce" asChild>
                  <a href="https://linkedin.com/in/saba-pkhakadze" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-8 w-8" />
                  </a>
                </Button>
                <Button variant="ghost" size="lg" className="hover:scale-110 transition-bounce" asChild>
                  <a href="https://github.com/sabbapxakadze" target="_blank" rel="noopener noreferrer">
                    <Github className="h-8 w-8" />
                  </a>
                </Button>
              </div>
              
              <p className="text-muted-foreground">
                {content.languages}
              </p>
            </div>
          </Card>
        </div>
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