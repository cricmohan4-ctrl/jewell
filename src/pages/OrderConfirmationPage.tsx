"use client";

import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, IndianRupee } from "lucide-react";

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { order } = location.state || {};

  if (!order) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">No Order Found</h1>
        <p className="text-gray-500 mb-8">Please complete the checkout process to see your order confirmation.</p>
        <Button asChild size="lg">
          <Link to="/shop">Go to Shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 flex justify-center">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader className="items-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="text-3xl">Thank You For Your Order!</CardTitle>
          <CardDescription>Your order has been placed successfully. Payment will be collected upon delivery.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg text-left">
            <h3 className="font-semibold mb-2">Order ID: {order.orderId}</h3>
            <p><strong>Name:</strong> {order.shippingInfo.name}</p>
            <p><strong>Address:</strong> {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.pincode}</p>
          </div>
          <div className="border-t pt-6 text-left">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {order.items.map((item: any) => (
              <div key={item.id} className="flex justify-between items-center text-sm mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span className="font-medium flex items-center"><IndianRupee className="h-3 w-3 mr-1" />{(item.price * item.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
              <span>Total</span>
              <span className="flex items-center"><IndianRupee className="h-5 w-5 mr-1" />{order.totalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <Button asChild size="lg" className="w-full">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderConfirmationPage;