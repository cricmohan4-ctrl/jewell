"use client";

import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems, type MenuItem } from '@/data/menus';

interface MenuItemWithChildren extends MenuItem {
  children: MenuItemWithChildren[];
}

// Helper function to build a hierarchical tree from a flat list of menu items
const buildMenuTree = (items: MenuItem[], parentId: number | null = null): MenuItemWithChildren[] => {
  return items
    .filter(item => item.parentId === parentId)
    .map(item => ({
      ...item,
      children: buildMenuTree(items, item.id),
    }));
};

export const DynamicNavigation = () => {
  const menuTree = buildMenuTree(menuItems);

  return (
    <nav className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {menuTree.map((item) =>
            item.children.length > 0 ? (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[400px] md:w-[500px]">
                    <div className="grid grid-cols-2 gap-x-8">
                      {/* These are the columns */}
                      {item.children.map((column) => (
                        <div key={column.id}>
                          <h3 className="font-semibold text-sm text-gray-900 mb-4">{column.label}</h3>
                          <ul className="space-y-3">
                            {/* These are the links within columns */}
                            {column.children.map((link) => (
                              <li key={link.id}>
                                <NavigationMenuLink asChild>
                                  <Link to={link.link} className="text-sm text-gray-600 hover:text-primary font-medium">
                                    {link.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={item.id}>
                <Link to={item.link} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};