import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: string;
}

interface TerminalSkillsProps {
  title: string;
  skills: Skill[];
  terminalType: 'technical' | 'soft';
}

export function TerminalSkills({ title, skills, terminalType }: TerminalSkillsProps) {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < skills.length) {
        const skill = skills[currentIndex];
        const command = terminalType === 'technical' 
          ? `$ npm install ${skill.name.toLowerCase().replace(/\s+/g, '-')} --save`
          : `$ execute --skill "${skill.name}" --level ${skill.level}`;
        
        setDisplayedCommands(prev => [...prev, command]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, skills, terminalType]);

  const getPromptSymbol = () => terminalType === 'technical' ? '~/projects$' : '~/skills$';

  return (
    <Card className="bg-gray-900 border-gray-700 font-mono text-sm overflow-hidden">
      <CardHeader className="bg-gray-800 p-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-300 text-xs">
              {terminalType === 'technical' ? 'technical-skills.sh' : 'soft-skills.sh'}
            </span>
          </div>
          <span className="text-gray-400 text-xs">{title}</span>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 bg-gray-950 min-h-[300px]">
        <div className="space-y-2 text-green-400">
          <div className="text-gray-400">
            <span className="text-blue-400">{getPromptSymbol()}</span> cat {title.toLowerCase().replace(/\s+/g, '-')}.txt
          </div>
          
          {displayedCommands.map((command, index) => (
            <div key={index} className="space-y-1">
              <div className="text-gray-300">{command}</div>
              <div className="text-green-400 text-xs">
                ✓ {skills[index]?.name} ({skills[index]?.level}) installed successfully
              </div>
            </div>
          ))}
          
          {currentIndex < skills.length && (
            <div className="flex items-center">
              <span className="text-blue-400">{getPromptSymbol()}</span>
              <span className="ml-1 animate-pulse">|</span>
            </div>
          )}
          
          {currentIndex >= skills.length && (
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="text-gray-400 mb-2">📊 Skill Summary:</div>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-cyan-400">{skill.name}</span>
                    <Badge 
                      variant="outline" 
                      className="bg-gray-800 text-yellow-400 border-yellow-400/30 text-xs"
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-gray-500 text-xs">
                <span className="text-blue-400">{getPromptSymbol()}</span> All systems operational ✨
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}