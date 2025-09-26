import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Pledge or Sell Your Jewelry Online
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight">
          Securely & Hassle-Free
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
          Upload your jewel details, get an instant price, and visit our branch to finalize.
        </p>
        <div className="mt-8">
          <Link to="/pledge">
            <Button size="lg">Get an Instant Estimate</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};