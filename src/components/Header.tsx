import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gem, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pledge", label: "Pledge Jewelry" },
  { href: "/sell", label: "Sell Jewelry" },
  { href: "/branches", label: "Branch Locator" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, currentUser, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <Gem className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-800">JewelPledge</span>
            </Link>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated && currentUser ? (
              <>
                <span className="text-sm font-medium hidden sm:block">Welcome, {currentUser.name.split(' ')[0]}</span>
                <Button variant="outline" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
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