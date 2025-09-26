import { Link } from "react-router-dom";
import { menuItems } from "@/data/menus";

// Filter for top-level menu items that are product categories
const shopCategories = menuItems.filter(
  (item) => item.parentId === null && item.link.startsWith("/shop")
);

export const ShopHeader = () => {
  return (
    <header className="bg-gray-50 border-b border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12">
          <nav className="flex space-x-8">
            <Link
              to="/shop"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              All Jewelry
            </Link>
            {shopCategories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {category.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};