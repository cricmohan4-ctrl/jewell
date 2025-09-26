"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

const pledgeFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  contact: z.string().min(5, { message: "Please enter a valid mobile or email." }),
  jewelType: z.enum(["gold", "diamond", "platinum"], {
    required_error: "Please select a jewel type.",
  }),
  jewelWeight: z.string().min(1, { message: "Weight is required." }),
  weightUnit: z.enum(["grams", "carats"]),
  photos: z.any().optional(),
  notes: z.string().optional(),
});

export const PledgeForm = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof pledgeFormSchema>>({
    resolver: zodResolver(pledgeFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      jewelWeight: "",
      weightUnit: "grams",
      notes: "",
    },
  });

  const photoRef = form.register("photos");

  function onSubmit(values: z.infer<typeof pledgeFormSchema>) {
    console.log(values);
    toast.success("Estimate request submitted successfully!");

    // Simple logic to generate a fake estimate
    const weight = parseFloat(values.jewelWeight) || 10;
    const baseValue = values.jewelType === 'diamond' ? 50000 : (values.jewelType === 'platinum' ? 3000 : 4500);
    const randomFactor = 0.9 + Math.random() * 0.2; // +/- 10%
    const estimate = Math.round((weight * baseValue * randomFactor) / 100) * 100;

    // Navigate to the estimate page with state
    navigate("/estimate", {
      state: {
        estimate: estimate,
        branch: "123 Diamond Street, Mumbai", // Hardcoded for now
      },
    });

    form.reset();
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Jewelry Details</CardTitle>
        <CardDescription>Fill out the form below to get an instant estimate for your jewelry.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number / Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your contact details" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jewelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jewel Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a jewel type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="gold">Gold</SelectItem>
                      <SelectItem value="diamond">Diamond</SelectItem>
                      <SelectItem value="platinum">Platinum</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="jewelWeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jewel Weight</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="weightUnit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="grams">grams</SelectItem>
                          <SelectItem value="carats">carats</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="photos"
              render={() => (
                <FormItem>
                  <FormLabel>Upload Photos</FormLabel>
                  <FormControl>
                    <Input type="file" multiple {...photoRef} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little more about your jewelry"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg">Get My Estimate</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};