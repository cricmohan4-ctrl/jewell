import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <Gem className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-800">JewelPledge</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
            <Link to="/pledge" className="text-gray-500 hover:text-gray-900">Pledge Jewelry</Link>
            <Link to="/sell" className="text-gray-500 hover:text-gray-900">Sell Jewelry</Link>
            <Link to="/branches" className="text-gray-500 hover:text-gray-900">Branch Locator</Link>
            <Link to="/faq" className="text-gray-500 hover:text-gray-900">FAQ</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
          </nav>
          <div className="flex items-center">
            <Button>Get Instant Estimate</Button>
          </div>
        </div>
      </div>
    </header>
  );
};