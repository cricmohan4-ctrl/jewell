import { Link } from "react-router-dom";

const categories = [
  { name: "Necklaces", href: "/shop/necklaces" },
  { name: "Rings", href: "/shop/rings" },
  { name: "Bracelets", href: "/shop/bracelets" },
  { name: "Earrings", href: "/shop/earrings" },
  { name: "All Jewelry", href: "/shop" },
];

export const ShopHeader = () => {
  return (
    <header className="bg-gray-50 border-b border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12">
          <nav className="flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};