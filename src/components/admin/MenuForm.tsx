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
import { type MenuItem } from "@/data/menus";

const menuFormSchema = z.object({
  label: z.string().min(2, { message: "Label is required." }),
  link: z.string().min(1, { message: "Link is required (use '#' for non-linking parents)." }),
  parentId: z.string().nullable(),
});

type MenuFormProps = {
  onSubmit: (values: z.infer<typeof menuFormSchema>) => void;
  onCancel: () => void;
  menuItem: Partial<MenuItem> | null;
  menuItems: MenuItem[];
};

export const MenuForm = ({ onSubmit, onCancel, menuItem, menuItems }: MenuFormProps) => {
  const form = useForm<z.infer<typeof menuFormSchema>>({
    resolver: zodResolver(menuFormSchema),
    defaultValues: {
      label: menuItem?.label || "",
      link: menuItem?.link || "",
      parentId: menuItem?.parentId?.toString() || null,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Rings" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input placeholder="/shop/rings" {...field} />
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
              <FormLabel>Parent Menu Item</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a parent item" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="">None (Top-Level)</SelectItem>
                  {menuItems
                    .filter(item => item.id !== menuItem?.id) // Prevent self-parenting
                    .map(item => (
                      <SelectItem key={item.id} value={item.id.toString()}>
                        {item.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Item</Button>
        </div>
      </form>
    </Form>
  );
};