
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Home, Building, BarChart3, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  type: string;
  price: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Serene Villas",
    location: "Whitefield, Bangalore",
    description: "Luxury villas designed for modern families, surrounded by lush greenery and featuring premium amenities.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format&fit=crop",
    type: "Villas",
    price: "₹3.5 Cr Onwards",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Horizon Heights",
    location: "Electronic City, Bangalore",
    description: "Premium high-rise apartments with panoramic city views and world-class amenities for an elevated lifestyle.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=600&auto=format&fit=crop",
    type: "Apartments",
    price: "₹1.2 Cr Onwards",
    status: "Ready to Move",
  },
  {
    id: 3,
    title: "The Residency",
    location: "Madanapalle, Andhra Pradesh",
    description: "Integrated township with commercial spaces and premium residential units designed for community living.",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=600&auto=format&fit=crop",
    type: "Township",
    price: "₹80 L Onwards",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Park Avenue",
    location: "Koramangala, Bangalore",
    description: "Exclusive apartments in the heart of the city, offering a perfect blend of luxury, convenience and connectivity.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=600&auto=format&fit=crop",
    type: "Apartments",
    price: "₹2.1 Cr Onwards",
    status: "Ready to Move",
  },
  {
    id: 5,
    title: "Business Hub",
    location: "MG Road, Bangalore",
    description: "Premium commercial spaces designed for modern businesses with state-of-the-art facilities and central location.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop",
    type: "Commercial",
    price: "₹1.8 Cr Onwards",
    status: "Ready to Move",
  },
  {
    id: 6,
    title: "Green Valley",
    location: "Tirupati, Andhra Pradesh",
    description: "Eco-friendly residential plots with developed infrastructure and beautiful natural surroundings.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    type: "Plots",
    price: "₹35 L Onwards",
    status: "Ongoing",
  },
];

const Projects = () => {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    status: "all",
  });

  const filteredProjects = projects.filter((project) => {
    // Search filter
    const searchMatch = 
      project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.location.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.search.toLowerCase());
    
    // Type filter
    const typeMatch = filters.type === "all" || project.type === filters.type;
    
    // Status filter
    const statusMatch = filters.status === "all" || project.status === filters.status;
    
    return searchMatch && typeMatch && statusMatch;
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Discover Our Projects
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore our diverse range of premium residential and commercial properties designed to elevate your lifestyle and investment portfolio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="py-8 bg-muted">
        <div className="container-custom mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md -mt-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search projects by name or location..."
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  value={filters.search}
                  onChange={handleSearchChange}
                />
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1 min-w-[150px]">
                  <select
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
                    value={filters.type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="Villas">Villas</option>
                    <option value="Apartments">Apartments</option>
                    <option value="Township">Township</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Plots">Plots</option>
                  </select>
                </div>
                
                <div className="flex-1 min-w-[150px]">
                  <select
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
                    value={filters.status}
                    onChange={(e) => handleFilterChange("status", e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="Ready to Move">Ready to Move</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria to find more properties.
              </p>
              <Button 
                onClick={() => setFilters({ search: "", type: "all", status: "all" })}
                className="bg-primary hover:bg-primary/90"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Home size={14} />
                      {project.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin size={16} />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary font-semibold">{project.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-white/80 mb-0 md:mb-0">
                Get in touch with our property experts who can help you find the perfect property for your needs.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 px-6 py-6 text-base">
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
