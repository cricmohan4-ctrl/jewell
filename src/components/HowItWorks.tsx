import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Tag, MapPin } from "lucide-react";

const steps = [
  {
    icon: <Upload className="h-10 w-10 text-primary" />,
    title: "Upload Jewelry Details",
    description: "Provide the weight, photo, and type of your jewelry for a quick assessment.",
  },
  {
    icon: <Tag className="h-10 w-10 text-primary" />,
    title: "Get Instant Price",
    description: "Our system provides an instant price estimate and directs you to the nearest branch.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Visit & Process at Branch",
    description: "Visit the branch with your jewelry to finalize the process with our experts.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-500">A simple 3-step process to get value for your jewelry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};