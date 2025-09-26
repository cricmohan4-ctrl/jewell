import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Collection</h1>
        <p className="mt-4 text-lg text-gray-500">Browse our exquisite selection of fine jewelry.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;