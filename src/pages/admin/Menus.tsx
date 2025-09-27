"use client";

import { useState } from "react";
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
  const [editingItem, setEditingItem] = useState<Partial<MenuItem> | null>(null);

  const handleAddItem = () => {
    setEditingItem(null);
    setIsDialogOpen(true);
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const handleDeleteItem = (id: number) => {
    // Also delete children to prevent orphans
    const idsToDelete = new Set<number>([id]);
    let changed = true;
    while(changed) {
      changed = false;
      menuItems.forEach(item => {
        if (item.parentId && idsToDelete.has(item.parentId) && !idsToDelete.has(item.id)) {
          idsToDelete.add(item.id);
          changed = true;
        }
      });
    }
    setMenuItems(menuItems.filter((item) => !idsToDelete.has(item.id)));
  };

  const handleFormSubmit = (values: { label: string; link: string; parentId: string | null }) => {
    const parentId = values.parentId ? parseInt(values.parentId, 10) : null;

    if (editingItem && 'id' in editingItem) {
      // Edit existing item
      setMenuItems(
        menuItems.map((item) =>
          item.id === editingItem.id ? { ...item, ...values, parentId } : item
        )
      );
    } else {
      // Add new item
      const newItem: MenuItem = {
        id: Math.max(...menuItems.map((i) => i.id), 0) + 1,
        label: values.label,
        link: values.link,
        parentId,
      };
      setMenuItems([...menuItems, newItem]);
    }
    setIsDialogOpen(false);
    setEditingItem(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Menus</h1>
        <Button onClick={handleAddItem}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Item
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Menu Item" : "Add New Menu Item"}</DialogTitle>
            <DialogDescription>
              Fill in the details for the menu item.
            </DialogDescription>
          </DialogHeader>
          <MenuForm
            key={editingItem && 'id' in editingItem ? editingItem.id : 'new'}
            onSubmit={handleFormSubmit}
            menuItem={editingItem}
            menuItems={menuItems}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Menu Items</CardTitle>
          <CardDescription>
            Manage the links in your website's navigation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Label</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Parent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.label}</TableCell>
                  <TableCell>{item.link}</TableCell>
                  <TableCell>{menuItems.find(p => p.id === item.parentId)?.label || 'None'}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditItem(item)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteItem(item.id)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMenus;