export interface MenuItem {
  id: number;
  label: string;
  link: string;
  parentId: number | null;
}

export const menuItems: MenuItem[] = [
  { id: 1, label: "Home", link: "/", parentId: null },
  { id: 2, label: "Shop", link: "/shop", parentId: null },
  { id: 3, label: "Services", link: "#", parentId: null },
  { id: 4, label: "Pledge Jewelry", link: "/pledge", parentId: 3 },
  { id: 5, label: "Sell Jewelry", link: "/sell", parentId: 3 },
  { id: 6, label: "Contact", link: "/contact", parentId: null },
];