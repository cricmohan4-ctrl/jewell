import { Link } from "react-router-dom";

const categories = [
  { name: "Solitaires", image: "https://images.unsplash.com/photo-1598559762452-37b4d8374118?q=80&w=400&auto=format&fit=crop", link: "/shop/solitaires" },
  { name: "Watch Jewellery", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop", link: "/shop/watch-jewellery" },
  { name: "Men's Jewellery", image: "https://images.unsplash.com/photo-1620912189837-55c408b25675?q=80&w=400&auto=format&fit=crop", link: "/shop/men" },
  { name: "Mangalsutras", image: "https://images.unsplash.com/photo-1632849393932-3944f6a61b72?q=80&w=400&auto=format&fit=crop", link: "/shop/mangalsutras" },
  { name: "Nose Pins", image: "https://images.unsplash.com/photo-1611591437281-462bf4a21456?q=80&w=400&auto=format&fit=crop", link: "/shop/nose-pins" },
  { name: "Kids Jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop", link: "/shop/kids" },
  { name: "Gold Coins", image: "https://images.unsplash.com/photo-1605295380483-85dd6b5213c8?q=80&w=400&auto=format&fit=crop", link: "/shop/gold-coins" },
  { name: "Anklets", image: "https://images.unsplash.com/photo-1631959187904-c3b9f5a9e5a2?q=80&w=400&auto=format&fit=crop", link: "/shop/anklets" },
  { name: "Pendants", image: "https://images.unsplash.com/photo-1617038260897-41a131549a52?q=80&w=400&auto=format&fit=crop", link: "/shop/pendants" },
  { name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop", link: "/shop/rings" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1599357382222-141256d055e2?q=80&w=400&auto=format&fit=crop", link: "/shop/necklaces" },
  { name: "Earrings", image: "https://images.unsplash.com/photo-1612178991501-de129a221a49?q=80&w=400&auto=format&fit=crop", link: "/shop/earrings" },
  { name: "Bangles", image: "https://images.unsplash.com/photo-1623900341235-439567394971?q=80&w=400&auto=format&fit=crop", link: "/shop/bangles" },
  { name: "Bracelets", image: "https://images.unsplash.com/photo-1509967042259-84342486b29b?q=80&w=400&auto=format&fit=crop", link: "/shop/bracelets" },
  { name: "Gold Chains", image: "https://images.unsplash.com/photo-1611652022417-a55339f98236?q=80&w=400&auto=format&fit=crop", link: "/shop/gold-chains" },
  { name: "Kada", image: "https://images.unsplash.com/photo-1611591437281-462bf4a21456?q=80&w=400&auto=format&fit=crop", link: "/shop/kada" },
];

export const ShopByCategory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link to={category.link} key={category.name} className="group text-center">
              <div className="aspect-square bg-rose-50 rounded-xl flex items-center justify-center p-4 border-2 border-transparent group-hover:border-primary transition-all duration-300">
                <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-700 group-hover:text-primary">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};