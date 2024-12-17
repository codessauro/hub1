"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Rocket } from "lucide-react";
import { StartupList } from "./startup-list";
import { RealEstateList } from "./real-estate-list";

export function InvestmentOpportunities() {
  return (
    <Card>
      <Tabs defaultValue="startups" className="p-4">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="startups" className="flex items-center gap-2">
            <Rocket className="h-4 w-4" />
            Startups
          </TabsTrigger>
          <TabsTrigger value="real-estate" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Real Estate
          </TabsTrigger>
        </TabsList>
        <TabsContent value="startups">
          <StartupList />
        </TabsContent>
        <TabsContent value="real-estate">
          <RealEstateList />
        </TabsContent>
      </Tabs>
    </Card>
  );
}