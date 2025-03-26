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
const testimonials: Testimonial[] = [{
  id: 1,
  name: "Priya Sharma",
  role: "Homeowner at Serene Villas",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=150&auto=format&fit=crop",
  text: "Moving into our GK Estates villa was the best decision we made. The attention to detail, thoughtful design, and quality construction exceeded our expectations."
}, {
  id: 2,
  name: "Rajesh Kumar",
  role: "Investor",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=150&auto=format&fit=crop",
  text: "As someone who has invested in multiple real estate projects, I can confidently say that GK Estates stands out for their transparency, reliability and timely delivery."
}, {
  id: 3,
  name: "Aisha Patel",
  role: "Resident at Horizon Heights",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=150&auto=format&fit=crop",
  text: "The community feeling at Horizon Heights is incredible. GK Estates has created not just apartments, but a lifestyle with thoughtfully designed amenities and spaces."
}];
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => {
    setCurrent(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setCurrent(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  return <section className="section-padding bg-primary text-white">
      
    </section>;
};
export default Testimonials;