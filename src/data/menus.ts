export interface MenuItem {
  id: number;
  label: string;
  link: string;
  parentId: number | null;
}

// Pre-populating with a structure that creates a mega menu
export const menuItems: MenuItem[] = [
  // Top Level
  { id: 1, label: "Rings", link: "/shop/rings", parentId: null },
  { id: 2, label: "Earrings", link: "/shop/earrings", parentId: null },
  { id: 13, label: "Necklaces", link: "/shop/necklaces", parentId: null },
  { id: 14, label: "Bracelets", link: "/shop/bracelets", parentId: null },
  { id: 10, label: "Pledge Jewelry", link: "/pledge", parentId: null },
  { id: 11, label: "Sell Jewelry", link: "/sell", parentId: null },
  { id: 12, label: "Contact", link: "/contact", parentId: null },

  // Columns for "Rings"
  { id: 3, label: "Shop by Style", link: "#", parentId: 1 },
  { id: 4, label: "Shop by Metal", link: "#", parentId: 1 },

  // Links for "Shop by Style"
  { id: 5, label: "Engagement", link: "/shop/rings/engagement", parentId: 3 },
  { id: 6, label: "Wedding Bands", link: "/shop/rings/wedding", parentId: 3 },
  { id: 7, label: "Fashion Rings", link: "/shop/rings/fashion", parentId: 3 },

  // Links for "Shop by Metal"
  { id: 8, label: "Gold Rings", link: "/shop/rings/gold", parentId: 4 },
  { id: 9, label: "Diamond Rings", link: "/shop/rings/diamond", parentId: 4 },
];