"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Category } from "@/data/categories";
import { useEffect } from "react";

const categoryFormSchema = z.object({
  name: z.string().min(2, { message: "Category name is required." }),
  parentId: z.string().nullable(),
  image: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
});

type CategoryFormProps = {
  onSubmit: (values: z.infer<typeof categoryFormSchema>) => void;
  onCancel: () => void;
  category: Partial<Category> | null;
  categories: Category[];
};

export const CategoryForm = ({ onSubmit, onCancel, category, categories }: CategoryFormProps) => {
  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: category?.name || "",
      parentId: category?.parentId?.toString() || null,
      image: category?.image || "",
    },
  });

  useEffect(() => {
    form.reset({
      name: category?.name || "",
      parentId: category?.parentId?.toString() || null,
      image: category?.image || "",
    });
  }, [category, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Rings" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="parentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a parent category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="">None (Top-Level)</SelectItem>
                  {categories
                    .filter(c => c.id !== category?.id) // Prevent self-parenting
                    .map(c => (
                      <SelectItem key={c.id} value={c.id.toString()}>
                        {c.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.png" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Category</Button>
        </div>
      </form>
    </Form>
  );
};