import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center text-center p-6">
                      <Avatar className="mb-4">
                        <AvatarImage src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${testimonial.name}`} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                      <span className="font-semibold">{testimonial.name}</span>
                      <span className="text-sm text-gray-400">{testimonial.title}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};