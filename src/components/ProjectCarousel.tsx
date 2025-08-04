"use client";

import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [projects.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [projects.length, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [currentIndex, isTransitioning]
  );

  if (!projects.length) return null;

  return (
    <div className="relative max-w-5xl mx-auto py-24 z-10">
      {/* Radial glowing background */}
      <div className="absolute inset-0 z-[-1] flex justify-center items-center pointer-events-none">
        <div className="w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/10 to-transparent blur-3xl rounded-full" />
      </div>

      {/* Carousel container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-background/1 to-background/50 border border-border/40 p-1 backdrop-blur-sm shadow-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: "transform",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="w-full flex-shrink-0 px-4 py-2"
            >
              <Card className="h-full bg-gradient-to-br from-card via-card/98 to-card/95 backdrop-blur-lg border border-border/60 hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10 shadow-md">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="space-y-6 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
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
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                      <p className="text-muted-foreground leading-relaxed text-lg pl-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="pt-4">
                      <p className="text-sm font-medium text-foreground/80 mb-3">
                        Technologies Used:
                      </p>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/50 disabled:opacity-30 hover:scale-110 transition-all duration-200"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/50 disabled:opacity-30 hover:scale-110 transition-all duration-200"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Dots indicator */}
      {projects.length > 1 && (
        <div className="flex justify-center mt-8 gap-3">
          {projects.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`h-3 w-3 rounded-full transition-all duration-300 disabled:opacity-30 hover:scale-125 ${
                index === currentIndex
                  ? "bg-primary w-8 shadow-lg shadow-primary/50"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  );
}
