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
import { slidesData } from "@/data/slides"; // Import slidesData

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
          {slidesData.map((banner, index) => ( // Use slidesData here
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