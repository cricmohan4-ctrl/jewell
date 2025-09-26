"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { branches, type Branch } from "@/data/branches";
import { cn } from "@/lib/utils";

const BranchLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  const filteredBranches = branches.filter(branch =>
    branch.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Find Our Branches</h1>
        <p className="mt-4 text-lg text-gray-500">Search by city or pin code to find the JewelPledge branch nearest to you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Search and List */}
        <div className="lg:col-span-1">
          <Input
            type="text"
            placeholder="Enter city or pin code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 text-lg mb-6"
          />
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredBranches.map(branch => (
              <Card
                key={branch.id}
                onClick={() => setSelectedBranch(branch)}
                className={cn(
                  "cursor-pointer transition-all",
                  selectedBranch?.id === branch.id ? "border-primary ring-2 ring-primary" : "hover:border-gray-400"
                )}
              >
                <CardHeader>
                  <CardTitle>{branch.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Map Placeholder */}
        <div className="lg:col-span-2 h-[500px] lg:h-auto rounded-lg border flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Map is temporarily disabled for debugging.</p>
        </div>
      </div>
    </div>
  );
};

export default BranchLocator;