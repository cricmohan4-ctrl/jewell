"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { IndianRupee } from "lucide-react";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  pincode: z.string().length(6, "Pincode must be 6 digits"),
  phone: z.string().min(10, "A valid phone number is required"),
});

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { name: "", address: "", city: "", pincode: "", phone: "" },
  });

  if (items.length === 0) {
    navigate("/shop");
    return null;
  }

  const onSubmit = (values: z.infer<typeof checkoutSchema>) => {
    const orderDetails = {
      shippingInfo: values,
      items,
      totalPrice,
      orderId: `JP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    };
    clearCart();
    navigate("/order-confirmation", { state: { order: orderDetails } });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader><CardTitle>Shipping Information</CardTitle></CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="address" render={({ field }) => (<FormItem><FormLabel>Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => (<FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="pincode" render={({ field }) => (<FormItem><FormLabel>Pincode</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                  </div>
                  <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                  <Button type="submit" size="lg" className="w-full mt-6">Place Order (Cash on Delivery)</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded bg-gray-100" />
                    <span>{item.name} x {item.quantity}</span>
                  </div>
                  <span className="font-medium flex items-center"><IndianRupee className="h-3 w-3 mr-1" />{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                <span>Total</span>
                <span className="flex items-center"><IndianRupee className="h-5 w-5 mr-1" />{totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;