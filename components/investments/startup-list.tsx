"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const startups = [
  {
    id: 1,
    name: "TechFlow AI",
    description: "AI-powered workflow automation platform",
    raised: 750000,
    target: 1000000,
    category: "Artificial Intelligence",
    minInvestment: 5000,
    daysLeft: 45,
  },
  {
    id: 2,
    name: "GreenEnergy Solutions",
    description: "Renewable energy storage technology",
    raised: 450000,
    target: 800000,
    category: "Clean Tech",
    minInvestment: 2500,
    daysLeft: 30,
  },
];

export function StartupList() {
  return (
    <div className="space-y-4">
      {startups.map((startup) => (
        <Card key={startup.id} className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{startup.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {startup.description}
              </p>
              <div className="space-y-4">
                <Progress
                  value={(startup.raised / startup.target) * 100}
                  className="h-2"
                />
                <div className="flex justify-between text-sm">
                  <span>${startup.raised.toLocaleString()} raised</span>
                  <span>${startup.target.toLocaleString()} target</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {startup.category}
                </span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  Min: ${startup.minInvestment.toLocaleString()}
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  {startup.daysLeft} days left
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Button>View Details</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}