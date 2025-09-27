"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { slidesData } from "@/data/slides";

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
        {slidesData.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative flex aspect-[16/7] items-center justify-center">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{slide.title}</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">{slide.subtitle}</p>
                <Button asChild size="lg" className="mt-8">
                  <Link to={slide.link}>{slide.buttonText}</Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
  );
};