import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Product } from "@/data/products";
import { IndianRupee, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-xl font-bold flex items-center">
          <IndianRupee className="h-5 w-5 mr-1" />
          {product.price.toLocaleString('en-IN')}
        </p>
        <Button onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};