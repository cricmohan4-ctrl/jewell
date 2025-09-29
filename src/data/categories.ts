export interface Category {
  id: number;
  name: string;
  parentId: number | null;
  image?: string;
}

export const categories: Category[] = [
  { id: 1, name: "Solitaires", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 2, name: "Watch Jewellery", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 3, name: "Men's Jewellery", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 4, name: "Mangalsutras", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 5, name: "Nose Pins", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 6, name: "Kids Jewellery", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 7, name: "Gold Coins", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 8, name: "Anklets", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 9, name: "Pendants", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 10, name: "Rings", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 11, name: "Necklaces", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 12, name: "Earrings", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 13, name: "Bangles", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 14, name: "Bracelets", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 15, name: "Gold Chains", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
  { id: 16, name: "Kada", parentId: null, image: "/BISP0584R13_WAA18DIG6SOG60030_ABCD00-PICS-00001-1024-66817.jpeg" },
];