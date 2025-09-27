"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const banners = [
  {
    title: "Wedding Season Specials",
    subtitle: "Find the perfect ring for your perfect day. Up to 20% off.",
    image: "https://images.unsplash.com/photo-1597655601842-427b7c445884?q=80&w=2070&auto=format&fit=crop",
    buttonText: "Shop Wedding Rings",
    link: "/shop/rings/wedding",
  },
  {
    title: "Gifts That Shine",
    subtitle: "Celebrate every moment with a gift that lasts a lifetime.",
    image: "https://images.unsplash.com/photo-1611955923923-3fe251c89579?q=80&w=1933&auto=format&fit=crop",
    buttonText: "Explore Gifts",
    link: "/shop",
  },
];

export const PromotionalBanners = () => {
  return (
    <section className="py-16 bg-white">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="relative flex aspect-[21/9] items-center justify-start">
                <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute text-left text-white p-8 md:p-16 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{banner.title}</h2>
                  <p className="mt-4 text-md md:text-lg">{banner.subtitle}</p>
                  <Button asChild size="lg" className="mt-8">
                    <Link to={banner.link}>{banner.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </section>
  );
};