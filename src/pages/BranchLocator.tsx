"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { branches } from "@/data/branches";

const BranchLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBranches = branches.filter(branch =>
    branch.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Find Our Branches</h1>
        <p className="mt-4 text-lg text-gray-500">Search by city or pin code to find the JewelPledge branch nearest to you.</p>
      </div>

      <div className="max-w-2xl mx-auto mb-8">
        <Input
          type="text"
          placeholder="Enter city or pin code..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 text-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBranches.map(branch => (
          <Card key={branch.id}>
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
  );
};

export default BranchLocator;