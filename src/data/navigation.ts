export interface MenuLink {
  label: string;
  link: string;
}

export interface MegaMenuColumn {
  title: string;
  links: MenuLink[];
}

export interface NavItem {
  label:string;
  link?: string;
  megaMenu?: {
    columns: MegaMenuColumn[];
  };
}

export const navItems: NavItem[] = [
  {
    label: "Rings",
    megaMenu: {
      columns: [
        {
          title: "Shop by Style",
          links: [
            { label: "Engagement", link: "/shop/rings/engagement" },
            { label: "Wedding Bands", link: "/shop/rings/wedding" },
            { label: "Fashion Rings", link: "/shop/rings/fashion" },
            { label: "Promise Rings", link: "/shop/rings/promise" },
          ],
        },
        {
          title: "Shop by Metal",
          links: [
            { label: "Gold Rings", link: "/shop/rings/gold" },
            { label: "Diamond Rings", link: "/shop/rings/diamond" },
            { label: "Platinum Rings", link: "/shop/rings/platinum" },
            { label: "Gemstone Rings", link: "/shop/rings/gemstone" },
          ],
        },
      ],
    },
  },
  {
    label: "Earrings",
    megaMenu: {
      columns: [
        {
          title: "Shop by Style",
          links: [
            { label: "Studs", link: "/shop/earrings/studs" },
            { label: "Drops", link: "/shop/earrings/drops" },
            { label: "Hoops & Huggies", link: "/shop/earrings/hoops" },
            { label: "Jhumkas", link: "/shop/earrings/jhumkas" },
          ],
        },
        {
          title: "Shop by Metal",
          links: [
            { label: "Gold Earrings", link: "/shop/earrings/gold" },
            { label: "Diamond Earrings", link: "/shop/earrings/diamond" },
            { label: "Platinum Earrings", link: "/shop/earrings/platinum" },
            { label: "Gemstone Earrings", link: "/shop/earrings/gemstone" },
          ],
        },
      ],
    },
  },
  {
    label: "Pledge Jewelry",
    link: "/pledge",
  },
  {
    label: "Sell Jewelry",
    link: "/sell",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];