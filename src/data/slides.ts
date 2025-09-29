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
    id: 5, // New ID for the new slide
    title: "New Arrivals: Blue Gem Collection",
    subtitle: "Discover our latest stunning pieces with vibrant blue gems.",
    image: "/1920-1.png", // Using the new local image path
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
    id: 1,
    title: "Radiant Collections",
    subtitle: "Discover jewelry that tells your story.",
    image: "https://images.unsplash.com/photo-1611652022417-a55339f98236?q=80&w=2070&auto=format&fit=crop",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    id: 2,
    title: "Timeless Elegance",
    subtitle: "Exquisite designs for every occasion.",
    image: "https://images.unsplash.com/photo-1599357382222-141256d055e2?q=80&w=1932&auto=format&fit=crop",
    buttonText: "Explore Designs",
    link: "/shop",
  },
  {
    id: 3,
    title: "The Perfect Gift",
    subtitle: "Find something special for your loved ones.",
    image: "https://images.unsplash.com/photo-1610500795395-d6a2c143e495?q=80&w=2070&auto=format&fit=crop",
    buttonText: "View Gift Guide",
    link: "/shop",
  },
];