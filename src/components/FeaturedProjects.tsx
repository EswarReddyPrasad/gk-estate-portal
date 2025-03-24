
import { useState, useRef, useEffect } from "react";
import { ArrowRight, MapPin, Leaf, TreePine, PencilRuler, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projectDetails = {
  id: 1,
  title: "Nature Valley",
  location: "Near Bangalore",
  description: "A luxurious residential development offering plots with villa-building assistance, surrounded by lush greenery and tranquil environment.",
  mainImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1200&auto=format&fit=crop",
  features: [
    {
      icon: TreePine,
      title: "Lush Greenery",
      description: "Nestled in verdant landscape with abundant open spaces"
    },
    {
      icon: Building,
      title: "DTCP Approved",
      description: "Fully approved development with legal assurance"
    },
    {
      icon: PencilRuler,
      title: "Customizable Villas",
      description: "Expert assistance in design and construction"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable living with preserved natural beauty"
    }
  ]
};

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom mx-auto">
        <div className="max-w-xl mb-12">
          <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            Featured Development
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nature Valley</h2>
          <p className="text-muted-foreground">
            Experience the perfect blend of nature and modern living in our premium residential development near Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Project Main Image */}
          <div className="relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src={projectDetails.mainImage} 
              alt="Nature Valley Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2 text-white mb-2">
                <MapPin size={16} />
                <span>{projectDetails.location}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{projectDetails.title}</h3>
              <p className="text-white/80">{projectDetails.description}</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectDetails.features.map((feature, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 text-secondary mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/projects">
              Learn More About Nature Valley <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
