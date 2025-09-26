import { Link } from "react-router-dom";

const categories = [
  { name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop", link: "/shop/rings" },
  { name: "Earrings", image: "https://images.unsplash.com/photo-1612178991501-de129a221a49?q=80&w=1974&auto=format&fit=crop", link: "/shop/earrings" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1632849393932-3944f6a61b72?q=80&w=1974&auto=format&fit=crop", link: "/shop/necklaces" },
  { name: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-462bf4a21456?q=80&w=1974&auto=format&fit=crop", link: "/shop/bracelets" },
  { name: "Pendants", image: "https://images.unsplash.com/photo-1617038260897-41a131549a52?q=80&w=1964&auto=format&fit=crop", link: "/shop/pendants" },
  { name: "Collections", image: "https://images.unsplash.com/photo-1588444968368-a315ebb75747?q=80&w=1974&auto=format&fit=crop", link: "/shop/collections" },
];

export const ShopByCategory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.name} className="group text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-primary">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};