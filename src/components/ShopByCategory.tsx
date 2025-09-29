import { Link } from "react-router-dom";
import { categories as allCategories } from "@/data/categories";

export const ShopByCategory = () => {
  // Filter for top-level categories that have an image
  const categories = allCategories.filter(c => c.parentId === null && c.image);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link to={`/shop/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={category.id} className="group text-center">
              <div className="aspect-square bg-rose-50 rounded-xl flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-all duration-300">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-xl" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-700 group-hover:text-primary">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};