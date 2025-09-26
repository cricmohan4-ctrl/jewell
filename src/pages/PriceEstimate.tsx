import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, IndianRupee } from "lucide-react";
import { AppointmentDialog } from "@/components/AppointmentDialog";

const PriceEstimate = () => {
  const location = useLocation();
  const { estimate, branch } = location.state || { estimate: 45000, branch: "123 Diamond Street, Mumbai" };
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto py-12 px-4 flex justify-center">
        <Card className="w-full max-w-lg text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Your Instant Estimate</CardTitle>
            <CardDescription>Based on the details you provided, here is our initial estimate.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-primary/10 p-6 rounded-lg">
              <p className="text-sm text-gray-500">Estimated Value</p>
              <p className="text-5xl font-bold text-primary flex items-center justify-center">
                <IndianRupee className="h-10 w-10 mr-2" />
                {estimate.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
              <p className="text-gray-500 mb-4">Please visit our nearest branch to get your jewelry appraised by our experts and finalize the process.</p>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-gray-600" />
                <div>
                  <p className="font-semibold">Nearest Branch</p>
                  <p className="text-gray-600">{branch}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setIsDialogOpen(true)}>Book Appointment</Button>
              <Link to="/branches">
                <Button size="lg" variant="outline">Find Other Branches</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <AppointmentDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
        branch={branch} 
      />
    </>
  );
};

export default PriceEstimate;