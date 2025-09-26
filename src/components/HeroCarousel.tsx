"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Radiant Collections",
    subtitle: "Discover jewelry that tells your story.",
    image: "https://images.unsplash.com/photo-1611652022417-a55339f98236?q=80&w=2070&auto=format&fit=crop",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    title: "Timeless Elegance",
    subtitle: "Exquisite designs for every occasion.",
    image: "https://images.unsplash.com/photo-1599357382222-141256d055e2?q=80&w=1932&auto=format&fit=crop",
    buttonText: "Explore Designs",
    link: "/shop",
  },
  {
    title: "The Perfect Gift",
    subtitle: "Find something special for your loved ones.",
    image: "https://images.unsplash.com/photo-1610500795395-d6a2c143e495?q=80&w=2070&auto=format&fit=crop",
    buttonText: "View Gift Guide",
    link: "/shop",
  },
];

export const HeroCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="relative flex aspect-[16/7] items-center justify-center p-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{slide.title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">{slide.subtitle}</p>
                    <Button asChild size="lg" className="mt-8">
                      <Link to={slide.link}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
  );
};