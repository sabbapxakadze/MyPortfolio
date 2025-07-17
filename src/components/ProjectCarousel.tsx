import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  type: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!projects.length) return null;

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="h-full bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-lg border border-border/30 hover:border-primary/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/5">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="space-y-6 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                          <Badge 
                            variant="outline" 
                            className="text-xs bg-primary/10 text-primary border-primary/30 font-medium px-3 py-1"
                          >
                            {project.type}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2 ml-4">
                        {project.github && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="h-10 w-10 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-full"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                        {project.link && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="h-10 w-10 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300 rounded-full"
                            asChild
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
                      <p className="text-muted-foreground leading-relaxed text-lg pl-6">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="pt-4">
                      <p className="text-sm font-medium text-foreground/80 mb-3">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="text-sm bg-gradient-to-r from-primary/15 to-primary/5 text-primary hover:from-primary/25 hover:to-primary/10 transition-all duration-300 hover:scale-105 border border-primary/20 px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {projects.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots indicator */}
      {projects.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}