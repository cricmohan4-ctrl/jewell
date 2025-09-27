import { type Category } from "./categories";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: Category['id'];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Diamond Necklace",
    description: "A stunning necklace featuring a brilliant-cut diamond.",
    price: 75000,
    image: "https://images.unsplash.com/photo-1599357382222-141256d055e2?q=80&w=800&auto=format&fit=crop",
    categoryId: 3,
  },
  {
    id: 2,
    name: "Classic Gold Bangle",
    description: "22-karat gold bangle with intricate craftsmanship.",
    price: 55000,
    image: "https://images.unsplash.com/photo-1623900341235-439567394971?q=80&w=800&auto=format&fit=crop",
    categoryId: 4,
  },
  {
    id: 3,
    name: "Sapphire Stud Earrings",
    description: "Deep blue sapphires set in a platinum frame.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1627293585420-13ad3b23f37f?q=80&w=800&auto=format&fit=crop",
    categoryId: 2,
  },
  {
    id: 4,
    name: "Ruby Engagement Ring",
    description: "A vibrant ruby centerpiece surrounded by smaller diamonds.",
    price: 98000,
    image: "https://images.unsplash.com/photo-1598559762452-37b4d8374118?q=80&w=800&auto=format&fit=crop",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Pearl Drop Pendant",
    description: "A single, lustrous pearl hanging from a silver chain.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1617038260897-41a131549a52?q=80&w=800&auto=format&fit=crop",
    categoryId: 3,
  },
  {
    id: 6,
    name: "Men's Platinum Band",
    description: "A sleek and modern band for the discerning gentleman.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1611591437281-462bf4a21456?q=80&w=800&auto=format&fit=crop",
    categoryId: 1,
  },
];