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
import { type Slide } from "@/data/slides";
import { useEffect } from "react";

const slideFormSchema = z.object({
  title: z.string().min(2, { message: "Title is required." }),
  subtitle: z.string().min(2, { message: "Subtitle is required." }),
  image: z.string().url({ message: "Please enter a valid image URL." }),
  buttonText: z.string().min(1, { message: "Button text is required." }),
  link: z.string().min(1, { message: "Button link is required." }),
});

type SlideFormProps = {
  onSubmit: (values: z.infer<typeof slideFormSchema>) => void;
  onCancel: () => void;
  slide: Partial<Slide> | null;
};

export const SlideForm = ({ onSubmit, onCancel, slide }: SlideFormProps) => {
  const form = useForm<z.infer<typeof slideFormSchema>>({
    resolver: zodResolver(slideFormSchema),
    defaultValues: {
      title: slide?.title || "",
      subtitle: slide?.subtitle || "",
      image: slide?.image || "",
      buttonText: slide?.buttonText || "",
      link: slide?.link || "",
    },
  });

  useEffect(() => {
    form.reset({
      title: slide?.title || "",
      subtitle: slide?.subtitle || "",
      image: slide?.image || "",
      buttonText: slide?.buttonText || "",
      link: slide?.link || "",
    });
  }, [slide, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Radiant Collections" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subtitle</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Discover jewelry that tells your story." {...field} />
              </FormControl>
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
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="buttonText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Button Text</FormLabel>
                <FormControl>
                  <Input placeholder="Shop Now" {...field} />
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
                <FormLabel>Button Link</FormLabel>
                <FormControl>
                  <Input placeholder="/shop" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save Slide</Button>
        </div>
      </form>
    </Form>
  );
};