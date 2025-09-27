"use client";

import { useState, useMemo } from "react";
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
import { MoreHorizontal, PlusCircle, IndianRupee } from "lucide-react";
import { products as initialProducts, type Product } from "@/data/products";
import { categories as initialCategories, type Category } from "@/data/categories";
import { ProductForm } from "@/components/admin/ProductForm";

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories] = useState<Category[]>(initialCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const categoryMap = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = category.name;
      return acc;
    }, {} as Record<number, string>);
  }, [categories]);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleFormSubmit = (values: { name: string; description: string; price: number; categoryId: string }) => {
    const productData = {
      ...values,
      categoryId: parseInt(values.categoryId, 10),
    };

    if (editingProduct) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? { ...product, ...productData } : product
        )
      );
    } else {
      const newProduct = {
        ...productData,
        id: Math.max(...products.map((p) => p.id), 0) + 1,
        image: "/placeholder.svg", // Default image for new products
      };
      setProducts([...products, newProduct]);
    }
    setIsDialogOpen(false);
    setEditingProduct(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Products</h1>
        <Button onClick={handleAddProduct}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Product
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
            <DialogDescription>
              {editingProduct ? "Update the details of this product." : "Fill in the details for the new product."}
            </DialogDescription>
          </DialogHeader>
          <ProductForm
            onSubmit={handleFormSubmit}
            product={editingProduct}
            categories={categories}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>
            View, add, or edit products in your collection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{categoryMap[product.categoryId] || 'N/A'}</TableCell>
                  <TableCell className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    {product.price.toLocaleString('en-IN')}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditProduct(product)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteProduct(product.id)}>
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

export default AdminProducts;