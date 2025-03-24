
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    "25+ years of combined excellence",
    "Award-winning design philosophy",
    "Commitment to sustainable development",
    "Uncompromising quality standards",
  ];

  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              About GK Estates
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">A Partnership of Excellence and Vision</h2>
            <p className="text-muted-foreground mb-6">
              GK Estates represents the coming together of two powerhouses in real estate development - the top leadership from Concorde-Bangalore and TKN Developers PVT LTD Madanapalle.
            </p>
            <p className="text-muted-foreground mb-6">
              Our partnership combines decades of expertise, innovative thinking, and an unwavering commitment to creating spaces that inspire extraordinary living experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-0.5 shrink-0" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in-right">
            <div className="rounded-lg overflow-hidden shadow-xl relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1200&auto=format&fit=crop" 
                alt="GK Estates Building" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-secondary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-1/3 h-1/3 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
