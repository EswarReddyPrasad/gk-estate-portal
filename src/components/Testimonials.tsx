import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    text: "Moving into our GK Estates villa was the best decision we made. The attention to detail, thoughtful design, and quality construction exceeded our expectations."
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=150&auto=format&fit=crop",
    text: "As someone who has invested in multiple real estate projects, I can confidently say that GK Estates stands out for their transparency, reliability and timely delivery."
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Resident at Horizon Heights",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=150&auto=format&fit=crop",
    text: "The community feeling at Horizon Heights is incredible. GK Estates has created not just apartments, but a lifestyle with thoughtfully designed amenities and spaces."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => {
    setCurrent(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setCurrent(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 bg-white/10 text-secondary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-white/80 text-lg">
            Don't just take our word for it. Hear from those who have experienced GK Estates firsthand.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-primary/40 rounded-lg p-8 md:p-12 mb-8 shadow-lg backdrop-blur-sm">
            <div className="text-secondary mb-6">
              <Quote size={42} />
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90 italic leading-relaxed">
              {testimonials[current].text}
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[current].image} 
                alt={testimonials[current].name} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-white/70">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              className="h-12 w-12 rounded-full p-0 border-white/20 text-white hover:bg-white/10 hover:text-white"
              onClick={handlePrev}
            >
              <ArrowLeft size={20} />
            </Button>
            
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="h-12 w-12 rounded-full p-0 border-white/20 text-white hover:bg-white/10 hover:text-white"
              onClick={handleNext}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
