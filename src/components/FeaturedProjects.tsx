
import { useState, useRef, useEffect } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Serene Villas",
    location: "Whitefield, Bangalore",
    description: "Luxury villas designed for modern families, surrounded by lush greenery.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Horizon Heights",
    location: "Electronic City, Bangalore",
    description: "Premium high-rise apartments with panoramic city views and world-class amenities.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    status: "Ready to Move",
  },
  {
    id: 3,
    title: "The Residency",
    location: "Madanapalle, Andhra Pradesh",
    description: "Integrated township with commercial spaces and premium residential units.",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=1200&auto=format&fit=crop",
    status: "Upcoming",
  },
];

const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const scrollTo = activeIndex * carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-muted relative">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Featured Developments
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Signature Projects</h2>
            <p className="text-muted-foreground">
              Discover our meticulously crafted developments designed to elevate living standards and create lasting impressions.
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="h-12 w-12 rounded-full flex items-center justify-center p-0 border-primary/20"
              onClick={handlePrev}
              aria-label="Previous project"
            >
              <ArrowRight className="rotate-180" size={18} />
            </Button>
            <Button 
              variant="outline" 
              className="h-12 w-12 rounded-full flex items-center justify-center p-0 border-primary/20"
              onClick={handleNext}
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div 
          ref={carouselRef} 
          className="overflow-hidden"
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ width: `${projects.length * 100}%`, transform: `translateX(-${activeIndex * (100 / projects.length)}%)` }}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="relative w-full px-4"
                style={{ width: `${100 / projects.length}%` }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover-scale">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin size={16} />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors gap-1"
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/projects">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
