import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Happy Customer",
    quote: "The process was so simple and transparent. I got a great price for my old necklace. Highly recommended!",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    title: "Quick Service",
    quote: "I was in urgent need of cash, and JewelPledge helped me get an instant estimate and quick processing at their branch.",
    avatar: "RV",
  },
  {
    name: "Anjali Mehta",
    title: "Trusted Experts",
    quote: "The staff at the branch were very professional and helpful. I felt secure throughout the transaction.",
    avatar: "AM",
  },
  {
    name: "Suresh Kumar",
    title: "Excellent Value",
    quote: "I compared their estimate with local jewelers and JewelPledge offered the best value by far. The online system is a game-changer.",
    avatar: "SK",
  },
  {
    name: "Deepika Rao",
    title: "Seamless Experience",
    quote: "From getting an estimate online to the final appraisal at the branch, everything was incredibly smooth. I'm very impressed.",
    avatar: "DR",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">Trusted by thousands of customers across the country.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6 flex flex-col items-start text-left">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${testimonial.name}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <span className="font-semibold">{testimonial.name}</span>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-[-50px]" />
          <CarouselNext className="mr-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
};