export interface Category {
  id: number;
  name: string;
  parentId: number | null;
  image?: string;
}

export const categories: Category[] = [
  { id: 1, name: "Solitaires", parentId: null, image: "https://images.unsplash.com/photo-1598559762452-37b4d8374118?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Watch Jewellery", parentId: null, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Men's Jewellery", parentId: null, image: "https://images.unsplash.com/photo-1620912189837-55c408b25675?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Mangalsutras", parentId: null, image: "https://images.unsplash.com/photo-1632849393932-3944f6a61b72?q=80&w=400&auto=format&fit=crop" },
  { id: 5, name: "Nose Pins", parentId: null, image: "https://images.unsplash.com/photo-1611591437281-462bf4a21456?q=80&w=400&auto=format&fit=crop" },
  { id: 6, name: "Kids Jewellery", parentId: null, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop" },
  { id: 7, name: "Gold Coins", parentId: null, image: "https://images.unsplash.com/photo-1605295380483-85dd6b5213c8?q=80&w=400&auto=format&fit=crop" },
  { id: 8, name: "Anklets", parentId: null, image: "https://images.unsplash.com/photo-1631959187904-c3b9f5a9e5a2?q=80&w=400&auto=format&fit=crop" },
  { id: 9, name: "Pendants", parentId: null, image: "https://images.unsplash.com/photo-1617038260897-41a131549a52?q=80&w=400&auto=format&fit=crop" },
  { id: 10, name: "Rings", parentId: null, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop" },
  { id: 11, name: "Necklaces", parentId: null, image: "https://images.unsplash.com/photo-1599357382222-141256d055e2?q=80&w=400&auto=format&fit=crop" },
  { id: 12, name: "Earrings", parentId: null, image: "https://images.unsplash.com/photo-1612178991501-de129a221a49?q=80&w=400&auto=format&fit=crop" },
  { id: 13, name: "Bangles", parentId: null, image: "https://images.unsplash.com/photo-1623900341235-439567394971?q=80&w=400&auto=format&fit=crop" },
  { id: 14, name: "Bracelets", parentId: null, image: "https://images.unsplash.com/photo-1509967042259-84342486b29b?q=80&w=400&auto=format&fit=crop" },
  { id: 15, name: "Gold Chains", parentId: null, image: "https://images.unsplash.com/photo-1611652022417-a55339f98236?q=80&w=400&auto=format&fit=crop" },
  { id: 16, name: "Kada", parentId: null, image: "https://images.unsplash.com/photo-1611591437281-462bf4a21456?q=80&w=400&auto=format&fit=crop" },
];