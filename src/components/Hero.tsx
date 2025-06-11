
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        const translateY = scrollPosition * 0.3;
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Image Background with Overlay */}
      <div className="absolute inset-0 z-0" ref={heroRef}>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{
            backgroundImage: "url('/lovable-uploads/6d496cec-16e7-4e91-902e-3d2682176092.png')",
            backgroundPosition: "center center"
          }}
        />
        <div className="absolute inset-0 nature-overlay" />
      </div>

      {/* Content */}
      <div className="container-custom mx-auto relative z-10 pt-16">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
            Nature Valley - Premium Residential Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Your Sanctuary in <span className="gold-accent">Nature</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            Exclusive residential plots near Bangalore with villa-building assistance, nestled in lush greenery for a serene lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-6 py-6 rounded-md text-base shadow-lg">
              <Link to="/projects">
                Explore Nature Valley
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white px-6 py-6 rounded-md text-base font-medium flex items-center gap-2 bg-gray-950 hover:bg-gray-800">
              <Link to="/contact">
                Contact Us <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
};

export default Hero;
