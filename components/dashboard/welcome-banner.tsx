"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function WelcomeBanner() {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Welcome to Hubprise Investments</h1>
          <p className="text-blue-100">
            Discover curated investment opportunities in startups and real estate.
            Start building your portfolio today.
          </p>
        </div>
        <Button
          variant="secondary"
          className="whitespace-nowrap"
        >
          Explore Opportunities
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}