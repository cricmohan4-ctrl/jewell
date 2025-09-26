"use client";

import React from 'react';
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
import { cn } from '@/lib/utils';

interface MenuItemWithChildren extends MenuItem {
  children: MenuItem[];
}

// Helper function to build a hierarchical tree from a flat list of menu items
const buildMenuTree = (items: MenuItem[]): MenuItemWithChildren[] => {
  const itemMap = new Map<number, MenuItemWithChildren>();
  const tree: MenuItemWithChildren[] = [];

  // First pass: create a map of all items and initialize their children array
  items.forEach(item => {
    itemMap.set(item.id, { ...item, children: [] });
  });

  // Second pass: populate the children arrays and identify the root nodes
  items.forEach(item => {
    const mappedItem = itemMap.get(item.id)!;
    if (item.parentId !== null) {
      const parent = itemMap.get(item.parentId);
      if (parent) {
        parent.children.push(mappedItem);
      }
    } else {
      tree.push(mappedItem);
    }
  });

  return tree;
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
                  <ul className="grid w-[200px] gap-3 p-4">
                    {item.children.map((child) => (
                      <ListItem key={child.id} to={child.link} title={child.label} />
                    ))}
                  </ul>
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

// A reusable list item component for the dropdown menu
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";