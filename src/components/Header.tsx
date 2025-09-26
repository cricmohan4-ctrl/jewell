import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gem, ShoppingCart } from "lucide-react";
import { DynamicNavigation } from "./DynamicNavigation";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const { totalItems } = useCart();

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
          
          <DynamicNavigation />

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link to="/pledge">Get Instant Estimate</Link>
            </Button>
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-0.5 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};