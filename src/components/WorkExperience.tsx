import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Job {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface WorkExperienceProps {
  jobs: Job[];
}

export function WorkExperience({ jobs }: WorkExperienceProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
      
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-lg">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
            </div>
            
            {/* Content */}
            <div className="ml-16 w-full">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.position}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-primary/90 mb-2">{job.company}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      Professional Experience
                    </Badge>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}