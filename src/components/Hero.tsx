
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" ref={heroRef}>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop')",
            backgroundPosition: "center 30%"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-custom mx-auto relative z-10 pt-16">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
            Exceptional Real Estate Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Creating Spaces That Inspire <span className="text-secondary">Extraordinary</span> Lives
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            A partnership of excellence from the top leadership of Concorde-Bangalore and TKN Developers, crafting premium living spaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-6 rounded-md text-base font-medium">
              Explore Projects
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 rounded-md text-base font-medium flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
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
