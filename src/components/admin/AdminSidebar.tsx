import { Link, useLocation } from "react-router-dom";
import { Gem, LayoutDashboard, FileText, Building, Menu, Package, Tags, DollarSign, Users, GalleryHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/submissions", icon: FileText, label: "Submissions" },
  { href: "/admin/users", icon: Users, label: "Users" },
  { href: "/admin/branches", icon: Building, label: "Branches" },
  { href: "/admin/estimations", icon: DollarSign, label: "Estimations" },
  { href: "/admin/slides", icon: GalleryHorizontal, label: "Hero Slides" },
  { href: "/admin/menus", icon: Menu, label: "Menus" },
  { href: "/admin/products", icon: Package, label: "Products" },
  { href: "/admin/categories", icon: Tags, label: "Categories" },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-800 text-white flex flex-col">
      <div className="h-16 flex items-center justify-center px-4 border-b border-gray-700">
        <Link to="/admin" className="flex items-center space-x-2">
          <Gem className="h-8 w-8" />
          <span className="text-xl font-bold">JewelPledge Admin</span>
        </Link>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={cn(
              "flex items-center px-3 py-2 rounded-md text-sm font-medium",
              location.pathname === item.href
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};