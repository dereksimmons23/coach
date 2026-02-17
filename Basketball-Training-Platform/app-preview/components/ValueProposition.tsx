import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Brain, Users, Target, Scale } from 'lucide-react';

const ValueProposition = () => {
  const elements = [
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "Market Opportunity",
      points: [
        "Total Addressable Market: $164B by 2025",
        "Projected Year 1 Revenue: $8.9M",
        "Growth Trajectory: 180% Year 1",
        "User Target: 40,000 Year 1, scaling to 2M+ by Year 5"
      ]
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Unique Position",
      points: [
        "Proprietary flow state technology",
        "AI-enhanced pattern recognition system",
        "Human-centered development framework",
        "Proven transformation methodology"
      ]
    },
    {
      icon: <Scale className="w-6 h-6 text-green-600" />,
      title: "Investment Structure",
      points: [
        "50% ROI until $500M valuation",
        "Family board seat in perpetuity",
        "First rights for original investor",
        "Long-term value creation focus"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-red-600" />,
      title: "Resource Allocation",
      points: [
        "40% Product Development",
        "25% Team Expansion",
        "20% Marketing & Sales",
        "15% Operations"
      ]
    }
  ];

  return (
    <Card className="w-full max-w-4xl shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl">$100M Investment Value Proposition</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {elements.map((element, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gray-100">
                  {element.icon}
                </div>
                <h3 className="text-xl font-semibold">{element.title}</h3>
              </div>
              <ul className="space-y-3 pl-2">
                {element.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-gray-700 flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ValueProposition; 