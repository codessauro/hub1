"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Building2, MapPin, TrendingUp, Calendar } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "Luxury Apartment Complex",
    location: "Miami, FL",
    description: "Modern luxury apartments in prime location",
    category: "Residential",
    raised: 2500000,
    target: 5000000,
    investors: 234,
    returns: "12-15%",
    deadline: "60 days left",
    image: "/property-1.jpg",
  },
  {
    id: 2,
    name: "Commercial Office Building",
    location: "Austin, TX",
    description: "Class A office space in tech district",
    category: "Commercial",
    raised: 3800000,
    target: 7000000,
    investors: 156,
    returns: "10-12%",
    deadline: "45 days left",
    image: "/property-2.jpg",
  },
];

export function RealEstateList() {
  return (
    <div className="grid gap-4">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{property.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </div>
                  </div>
                  <Button>Invest Now</Button>
                </div>
                <p className="mt-2">{property.description}</p>
                <div className="mt-4 space-y-2">
                  <Progress
                    value={(property.raised / property.target) * 100}
                    className="h-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${property.raised.toLocaleString()} raised</span>
                    <span>${property.target.toLocaleString()} target</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{property.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{property.returns} ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{property.deadline}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}