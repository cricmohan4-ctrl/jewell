import { HeroCarousel } from "@/components/HeroCarousel";
import { ShopByCategory } from "@/components/ShopByCategory";
import { ProductCarousel } from "@/components/ProductCarousel";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div>
      <HeroCarousel />
      <ShopByCategory />
      <ProductCarousel title="New Arrivals" products={products} />
      <ProductCarousel title="Best Sellers" products={[...products].reverse()} />
    </div>
  );
};

export default Index;