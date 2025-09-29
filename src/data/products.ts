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
    image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg",
    categoryId: 3,
  },
  {
    id: 2,
    name: "Classic Gold Bangle",
    description: "22-karat gold bangle with intricate craftsmanship.",
    price: 55000,
    image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg",
    categoryId: 4,
  },
  {
    id: 3,
    name: "Sapphire Stud Earrings",
    description: "Deep blue sapphires set in a platinum frame.",
    price: 42000,
    image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg",
    categoryId: 2,
  },
  {
    id: 4,
    name: "Ruby Engagement Ring",
    description: "A vibrant ruby centerpiece surrounded by smaller diamonds.",
    price: 98000,
    image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Pearl Drop Pendant",
    description: "A single, lustrous pearl hanging from a silver chain.",
    price: 25000,
    image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg",
    categoryId: 3,
  },
  {
    id: 6,
    name: "Men's Platinum Band",
    description: "A sleek and modern band for the discerning gentleman.",
    price: 35000,
    image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg",
    categoryId: 1,
  },
];