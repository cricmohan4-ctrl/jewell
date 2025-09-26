"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { estimationRates as initialRates, type JewelType } from "@/data/estimationRates";
import { EstimationForm } from "@/components/admin/EstimationForm";
import { toast } from "sonner";

const AdminEstimations = () => {
  const [rates, setRates] = useState<Record<JewelType, number>>(initialRates);

  const handleFormSubmit = (values: Record<JewelType, number>) => {
    setRates(values);
    // In a real app, you'd save this to a database.
    // Here, we're updating the state for the user's session.
    toast.success("Estimation rates updated successfully!");
    console.log("Updated rates:", values);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Estimation Rates</h1>
      <Card>
        <CardHeader>
          <CardTitle>Jewelry Rates</CardTitle>
          <CardDescription>
            Set the base price per unit (gram/carat) for each jewel type.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EstimationForm onSubmit={handleFormSubmit} rates={rates} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEstimations;