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
import { navItems } from '@/data/navigation';

export const DynamicNavigation = () => {
  return (
    <nav className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) =>
            item.megaMenu ? (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[400px] md:w-[500px]">
                    <div className="grid grid-cols-2 gap-x-8">
                      {item.megaMenu.columns.map((column) => (
                        <div key={column.title}>
                          <h3 className="font-semibold text-sm text-gray-900 mb-4">{column.title}</h3>
                          <ul className="space-y-3">
                            {column.links.map((link) => (
                              <li key={link.label}>
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
              <NavigationMenuItem key={item.label}>
                <Link to={item.link!} legacyBehavior passHref>
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