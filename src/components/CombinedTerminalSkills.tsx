import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: string;
  category: "technical" | "soft";
}

interface CombinedTerminalSkillsProps {
  technicalSkills: Skill[];
  softSkills: Skill[];
}

export function CombinedTerminalSkills({
  technicalSkills,
  softSkills,
}: CombinedTerminalSkillsProps) {
  const [displayedCommands, setDisplayedCommands] = useState<
    { command: string; skill: Skill; category: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allSkills = [
    ...technicalSkills.map((skill) => ({
      ...skill,
      category: "technical" as const,
    })),
    ...softSkills.map((skill) => ({ ...skill, category: "soft" as const })),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < allSkills.length) {
        const skill = allSkills[currentIndex];
        const command =
          skill.category === "technical"
            ? `$ npm install ${skill.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "")} --save`
            : `$ execute --skill "${skill.name}" --level ${skill.level}`;

        setDisplayedCommands((prev) => [
          ...prev,
          { command, skill, category: skill.category },
        ]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 250);

    return () => clearInterval(timer);
  }, [currentIndex, allSkills]);

  const getCommandColor = (category: string) => {
    return category === "technical" ? "text-cyan-400" : "text-green-400";
  };

  const getCategoryColor = (category: string) => {
    return category === "technical" ? "text-blue-400" : "text-purple-400";
  };

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
            <span className="text-gray-300 text-xs">skills-terminal.sh</span>
          </div>
          <span className="text-gray-400 text-xs">Skills Portfolio</span>
        </div>
      </CardHeader>

      <CardContent className="p-4 bg-gray-950 min-h-[400px]">
        <div className="space-y-2">
          <div className="text-gray-400 mb-4">
            <span className="text-blue-400">~/developer$</span> cat
            skills-overview.txt
          </div>
          <div className="text-yellow-400 mb-4 text-xs">
            🚀 Loading skills database... Combining technical and soft skills
          </div>

          {displayedCommands.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className={`${getCommandColor(item.category)}`}>
                {item.command}
              </div>
              <div className="text-green-400 text-xs flex items-center justify-between">
                <span>
                  ✓ {item.skill.name} ({item.skill.level}) installed
                  successfully
                </span>
                <Badge
                  variant="outline"
                  className={`${getCategoryColor(
                    item.category
                  )} border-current text-xs px-2 py-0`}
                >
                  {item.category}
                </Badge>
              </div>
            </div>
          ))}

          {currentIndex < allSkills.length && (
            <div className="flex items-center">
              <span className="text-blue-400">~/developer$</span>
              <span className="ml-1 animate-pulse text-white">|</span>
            </div>
          )}

          {currentIndex >= allSkills.length && (
            <div className="mt-6 pt-4 border-t border-gray-800">
              <div className="text-gray-400 mb-3">📊 Skills Dashboard:</div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-cyan-400 text-sm mb-2 font-semibold">
                    🔧 Technical Skills
                  </div>
                  <div className="space-y-1">
                    {technicalSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-cyan-300">{skill.name}</span>
                        <Badge
                          variant="outline"
                          className="bg-gray-800 text-cyan-400 border-cyan-400/30 text-xs"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-purple-400 text-sm mb-2 font-semibold">
                    💡 Soft Skills
                  </div>
                  <div className="space-y-1">
                    {softSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-purple-300">{skill.name}</span>
                        <Badge
                          variant="outline"
                          className="bg-gray-800 text-purple-400 border-purple-400/30 text-xs"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-gray-500 text-xs">
                <span className="text-blue-400">~/developer$</span> All systems
                operational ✨
                <div className="text-green-400 mt-1">
                  Status: {technicalSkills.length} technical skills +{" "}
                  {softSkills.length} soft skills loaded
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
