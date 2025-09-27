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
import { branches as initialBranches, type Branch } from "@/data/branches";
import { BranchForm } from "@/components/admin/BranchForm";

const AdminBranches = () => {
  const [branches, setBranches] = useState<Branch[]>(initialBranches);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState<Branch | null>(null);

  const handleAddBranch = () => {
    setEditingBranch(null);
    setIsDialogOpen(true);
  };

  const handleEditBranch = (branch: Branch) => {
    setEditingBranch(branch);
    setIsDialogOpen(true);
  };

  const handleDeleteBranch = (id: number) => {
    setBranches(branches.filter((branch) => branch.id !== id));
  };

  const handleFormSubmit = (values: Omit<Branch, 'id'> & { id?: number }) => {
    if (editingBranch) {
      // Edit existing branch
      setBranches(
        branches.map((branch) =>
          branch.id === editingBranch.id ? { ...branch, ...values, id: editingBranch.id } : branch
        )
      );
    } else {
      // Add new branch
      const newBranch = {
        ...values,
        id: Math.max(...branches.map((b) => b.id), 0) + 1,
      };
      setBranches([...branches, newBranch]);
    }
    setIsDialogOpen(false);
    setEditingBranch(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Branches</h1>
        <Button onClick={handleAddBranch}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Branch
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingBranch ? "Edit Branch" : "Add New Branch"}</DialogTitle>
            <DialogDescription>
              {editingBranch ? "Update the details of this branch." : "Fill in the details for the new branch."}
            </DialogDescription>
          </DialogHeader>
          <BranchForm
            onSubmit={handleFormSubmit}
            branch={editingBranch}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Branch List</CardTitle>
          <CardDescription>
            View, add, or edit branch locations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {branches.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell className="font-medium">{branch.id}</TableCell>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.address}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditBranch(branch)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteBranch(branch.id)}>
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

export default AdminBranches;