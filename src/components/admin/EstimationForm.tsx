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
import { type JewelType } from "@/data/estimationRates";

const estimationFormSchema = z.object({
  gold: z.coerce.number().min(1, "Rate is required."),
  diamond: z.coerce.number().min(1, "Rate is required."),
  platinum: z.coerce.number().min(1, "Rate is required."),
});

type EstimationFormProps = {
  onSubmit: (values: z.infer<typeof estimationFormSchema>) => void;
  rates: Record<JewelType, number>;
};

export const EstimationForm = ({ onSubmit, rates }: EstimationFormProps) => {
  const form = useForm<z.infer<typeof estimationFormSchema>>({
    resolver: zodResolver(estimationFormSchema),
    defaultValues: rates,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="gold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gold Rate (per gram)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="diamond"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diamond Rate (per carat)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="platinum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Platinum Rate (per gram)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-4">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </Form>
  );
};