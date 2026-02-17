import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Activity, Brain, Scale } from 'lucide-react';

const FieldhouseLayout = () => {
  const spaces = {
    mainCourt: {
      title: "Main Court - Pattern Recognition",
      icon: <Brain className="w-6 h-6" />,
      sections: [
        {
          area: "Film Study Archive",
          contents: [
            "FLOW-NARRATIVE series",
            "WATER-WISDOM series",
            "Coaching methodologies",
            "Pattern analysis systems"
          ],
          purpose: "Core development space for understanding and teaching pattern recognition"
        },
        {
          area: "Practice Framework",
          contents: [
            "film-study-methodology.md",
            "cw-standard-ai.md",
            "standard-framework.md",
            "human-standard-qa.md"
          ],
          purpose: "Framework development and implementation space"
        }
      ]
    },
    practiceGym: {
      title: "Practice Gym - Development Cycles",
      icon: <Activity className="w-6 h-6" />,
      sections: [
        {
          area: "Daily Practice",
          contents: [
            "Recovery state documents",
            "Session summaries",
            "Progress snapshots",
            "Vision development"
          ],
          purpose: "Space for iterative development and growth tracking"
        },
        {
          area: "Training Systems",
          contents: [
            "ai-coaching-platform.txt",
            "quantum-kitchen series",
            "Development frameworks",
            "Integration testing"
          ],
          purpose: "Technical development and system integration"
        }
      ]
    },
    documentationCenter: {
      title: "Documentation Center - Evidence & Records",
      icon: <Scale className="w-6 h-6" />,
      sections: [
        {
          area: "Legal Archives",
          contents: [
            "Performance reviews (2017-2023)",
            "Medical/FMLA documentation",
            "Role transition records",
            "Corporate documentation"
          ],
          purpose: "Secure storage and organization of critical records"
        },
        {
          area: "Achievement Records",
          contents: [
            "Revenue metrics",
            "Project successes",
            "Team development",
            "Innovation initiatives"
          ],
          purpose: "Documentation of impact and contributions"
        }
      ]
    },
    innovationSpace: {
      title: "Innovation Space - Future Development",
      icon: <BookOpen className="w-6 h-6" />,
      sections: [
        {
          area: "Vision Lab",
          contents: [
            "The CW Standard evolution",
            "AI integration concepts",
            "Platform development",
            "Community frameworks"
          ],
          purpose: "Space for exploring and developing new ideas"
        },
        {
          area: "Content Studio",
          contents: [
            "Narrative development",
            "Personal reflections",
            "Framework documentation",
            "Publication drafts"
          ],
          purpose: "Content creation and refinement space"
        }
      ]
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>The CW Standard Fieldhouse Layout</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="mainCourt">
          <TabsList>
            {Object.entries(spaces).map(([key, space]) => (
              <TabsTrigger key={key} value={key}>
                <div className="flex items-center gap-2">
                  {space.icon}
                  {space.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(spaces).map(([key, space]) => (
            <TabsContent key={key} value={key}>
              <div className="space-y-6">
                {space.sections.map((section, idx) => (
                  <div key={idx} className="border rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{section.area}</h3>
                    <p className="text-gray-600">{section.purpose}</p>
                    
                    <div>
                      <h4 className="font-medium text-gray-700">Key Contents:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {section.contents.map((content, cIdx) => (
                          <li key={cIdx} className="text-gray-600">{content}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FieldhouseLayout;