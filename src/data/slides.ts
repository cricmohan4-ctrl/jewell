export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  link: string;
}

export const slidesData: Slide[] = [
  {
    id: 5,
    title: "New Arrivals: Blue Gem Collection",
    subtitle: "Discover our latest stunning pieces with vibrant blue gems.",
    image: "/1920-1.png",
    buttonText: "Shop New Collection",
    link: "/shop",
  },
  {
    id: 4, 
    title: "Exquisite Emerald Collection",
    subtitle: "Discover our stunning new arrivals.",
    image: "/cms-banner-01.jpg", 
    buttonText: "Shop Collection",
    link: "/shop",
  },
  {
    id: 6, // New ID for the third slide
    title: "Crafted for You",
    subtitle: "Experience the artistry in every piece.",
    image: "/1920-8.png", // Using the new local image path
    buttonText: "View Craftsmanship",
    link: "/shop",
  },
];