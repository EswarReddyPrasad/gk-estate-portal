
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner at Serene Villas",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=150&auto=format&fit=crop",
    text: "Moving into our GK Estates villa was the best decision we made. The attention to detail, thoughtful design, and quality construction exceeded our expectations.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=150&auto=format&fit=crop",
    text: "As someone who has invested in multiple real estate projects, I can confidently say that GK Estates stands out for their transparency, reliability and timely delivery.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Resident at Horizon Heights",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=150&auto=format&fit=crop",
    text: "The community feeling at Horizon Heights is incredible. GK Estates has created not just apartments, but a lifestyle with thoughtfully designed amenities and spaces.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 bg-white/10 text-secondary rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Our Clients Say</h2>
          <p className="text-white/80">
            Hear from our satisfied homeowners and investors about their experiences with GK Estates.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-8 text-secondary/30 scale-150 z-0">
            <Quote size={80} />
          </div>

          <div className="relative z-10 bg-primary/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10">
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-secondary/30 flex-shrink-0">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-white/90 text-lg mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <h4 className="text-xl font-medium">{testimonials[current].name}</h4>
                  <p className="text-white/70">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="h-10 w-10 rounded-full p-0 border-white/20 text-white hover:bg-white/10"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={16} />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={current === index ? "default" : "outline"}
                className={`h-2 w-2 min-w-0 p-0 rounded-full ${
                  current === index 
                    ? "bg-secondary hover:bg-secondary" 
                    : "border-white/20 hover:bg-white/10"
                }`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              className="h-10 w-10 rounded-full p-0 border-white/20 text-white hover:bg-white/10"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
