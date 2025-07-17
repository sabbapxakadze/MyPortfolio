import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'university' | 'course' | 'certification';
  description?: string;
  skills?: string[];
}

interface EducationTimelineProps {
  education: Education[];
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'university':
        return <GraduationCap className="h-6 w-6" />;
      case 'course':
        return <Award className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'university':
        return 'bg-blue-500';
      case 'course':
        return 'bg-green-500';
      default:
        return 'bg-purple-500';
    }
  };

  const getCardGradient = (type: string) => {
    switch (type) {
      case 'university':
        return 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20';
      case 'course':
        return 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20';
      default:
        return 'bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20';
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="relative flex items-start gap-6">
            {/* Timeline dot */}
            <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-background shadow-lg ${getTypeColor(edu.type)}`}>
              <div className="text-white">
                {getIcon(edu.type)}
              </div>
            </div>
            
            {/* Content card */}
            <div className="flex-1">
              <Card className={`${getCardGradient(edu.type)} border-l-4 ${edu.type === 'university' ? 'border-l-blue-500' : edu.type === 'course' ? 'border-l-green-500' : 'border-l-purple-500'} hover:shadow-lg transition-all duration-300 group`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div className="space-y-1">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            edu.type === 'university' 
                              ? 'border-blue-500 text-blue-700 dark:text-blue-300' 
                              : edu.type === 'course'
                              ? 'border-green-500 text-green-700 dark:text-green-300'
                              : 'border-purple-500 text-purple-700 dark:text-purple-300'
                          }`}
                        >
                          {edu.type.charAt(0).toUpperCase() + edu.type.slice(1)}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground">
                          {edu.field}
                        </p>
                        <p className="text-base font-medium text-muted-foreground">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    {/* Date and location */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.startDate} - {edu.endDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    {edu.description && (
                      <p className="text-foreground/80 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                    
                    {/* Skills */}
                    {edu.skills && edu.skills.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-muted-foreground">Key Skills:</span>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary"
                              className={`text-xs ${
                                edu.type === 'university'
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                  : edu.type === 'course'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                  : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                              }`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
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