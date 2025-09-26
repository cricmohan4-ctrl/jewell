export interface Category {
  id: number;
  name: string;
  parentId: number | null;
}

export const categories: Category[] = [
  // Top Level
  { id: 1, name: "Rings", parentId: null },
  { id: 2, name: "Earrings", parentId: null },
  { id: 3, name: "Necklaces", parentId: null },
  { id: 4, name: "Bracelets", parentId: null },

  // Sub-categories for Rings
  { id: 5, name: "Engagement Rings", parentId: 1 },
  { id: 6, name: "Wedding Bands", parentId: 1 },

  // Sub-categories for Necklaces
  { id: 7, name: "Pendants", parentId: 3 },
  { id: 8, name: "Chains", parentId: 3 },

  // Sub-sub-category for Engagement Rings
  { id: 9, name: "Solitaire", parentId: 5 },
];