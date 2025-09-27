import { HeroCarousel } from "@/components/HeroCarousel";
import { ShopByCategory } from "@/components/ShopByCategory";
import { ProductCarousel } from "@/components/ProductCarousel";
import { products } from "@/data/products";
import { PromotionalBanners } from "@/components/PromotionalBanners";
import { Testimonials } from "@/components/Testimonials";
import { ImageGallery } from "@/components/ImageGallery";

const Index = () => {
  return (
    <div>
      <HeroCarousel />
      <ShopByCategory />
      <ProductCarousel title="New Arrivals" products={products} />
      <PromotionalBanners />
      <ProductCarousel title="Best Sellers" products={[...products].reverse()} />
      <Testimonials />
      <ImageGallery />
    </div>
  );
};

export default Index;