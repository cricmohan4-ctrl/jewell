"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { menuItems as initialMenuItems, type MenuItem } from "@/data/menus";
import { MenuForm } from "@/components/admin/MenuForm";

const AdminMenus = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMenuItem, setEditingMenuItem] = useState<MenuItem | null>(null);

  const handleAddItem = () => {
    setEditingMenuItem(null);
    setIsDialogOpen(true);
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingMenuItem(item);
    setIsDialogOpen(true);
  };

  const handleDeleteItem = (id: number) => {
    // Also delete children to prevent orphans
    const idsToDelete = [id];
    const findChildren = (parentId: number) => {
      menuItems.forEach(item => {
        if (item.parentId === parentId) {
          idsToDelete.push(item.id);
          findChildren(item.id);
        }
      });
    };
    findChildren(id);
    setMenuItems(menuItems.filter((item) => !idsToDelete.includes(item.id)));
  };

  const handleFormSubmit = (values: { label: string; link: string; parentId: string | null }) => {
    const parentId = values.parentId === "null" ? null : parseInt(values.parentId!, 10);

    if (editingMenuItem) {
      setMenuItems(
        menuItems.map((item) =>
          item.id === editingMenuItem.id ? { ...item, ...values, parentId } : item
        )
      );
    } else {
      const newItem = {
        ...values,
        parentId,
        id: Math.max(...menuItems.map((i) => i.id), 0) + 1,
      };
      setMenuItems([...menuItems, newItem]);
    }
    setIsDialogOpen(false);
    setEditingMenuItem(null);
  };

  const renderMenuItems = (parentId: number | null = null, level = 0) => {
    return menuItems
      .filter((item) => item.parentId === parentId)
      .map((item) => (
        <React.Fragment key={item.id}>
          <TableRow>
            <TableCell style={{ paddingLeft: `${1 + level * 1.5}rem` }}>
              {item.label}
            </TableCell>
            <TableCell className="text-gray-500">{item.link}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEditItem(item)}>Edit</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDeleteItem(item.id)}>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          {renderMenuItems(item.id, level + 1)}
        </React.Fragment>
      ));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Menus</h1>
        <Button onClick={handleAddItem}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Menu Item
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingMenuItem ? "Edit Menu Item" : "Add New Menu Item"}</DialogTitle>
            <DialogDescription>
              {editingMenuItem ? "Update the details of this menu item." : "Fill in the details for the new item."}
            </DialogDescription>
          </DialogHeader>
          <MenuForm
            onSubmit={handleFormSubmit}
            menuItem={editingMenuItem}
            menuItems={menuItems}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Menu Structure</CardTitle>
          <CardDescription>
            Add, edit, and rearrange your navigation menu items.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Label</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{renderMenuItems()}</TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMenus;