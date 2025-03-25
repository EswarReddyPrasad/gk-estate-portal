
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Leaf, TreePine, PencilRuler, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectDetails = {
  id: 1,
  title: "Nature Valley",
  location: "Bode Vari Palli (Village), Near Madanapalli, Chittoor(D)-AP",
  type: "Residential Development",
  status: "Ongoing",
  price: "Contact for Pricing",
  description: "Nature Valley is a luxurious residential development designed to offer a peaceful and serene lifestyle, surrounded by lush greenery and a tranquil environment. Located near Madanapalli, beside Adithya Engineering College, Nature Valley provides plots of land for sale, where future homeowners can create their dream homes in a naturally beautiful setting with Subhareddy lake nearby.",
  mainImage: "public/lovable-uploads/84434996-f393-47d3-b9b7-084207d98026.png",
  galleryImages: [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600&auto=format&fit=crop",
    "public/lovable-uploads/b3d2111c-5350-4a7b-9f69-75764f222636.png",
    "public/lovable-uploads/098d94c9-59dc-4495-82af-c5a7ef37fe75.png"
  ],
  features: [
    {
      icon: TreePine,
      title: "Lush Greenery & Serene Ambience",
      description: "The development is nestled in a landscape full of verdant trees and open spaces, creating an ideal atmosphere for those seeking calm, fresh air, and a retreat from the city."
    },
    {
      icon: Building,
      title: "DTCP Approval",
      description: "Nature Valley is a fully approved development, providing peace of mind to buyers with government recognition and legal assurance."
    },
    {
      icon: PencilRuler,
      title: "Customizable Villas",
      description: "We offer buyers the unique opportunity to purchase a plot of land and build a customized villa with our expert assistance. Our team is ready to guide you through every step of the building process, from design to construction."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Focus",
      description: "The development promotes sustainable living with a strong focus on preserving the natural beauty of the area. Buyers can explore eco-friendly construction options for their villas."
    }
  ],
  clubhouse: {
    title: "Exclusive Clubhouse",
    description: "Our state-of-the-art clubhouse stands as a centerpiece of the Nature Valley project, offering residents a premium space for recreation, fitness, and social gatherings surrounded by the natural beauty of the development.",
    image: "public/lovable-uploads/84434996-f393-47d3-b9b7-084207d98026.png"
  }
};

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
              Our Featured Development
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              G.K. Nature Valley
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Farm Plots at Bode Vari Palli (Village), beside Adithya Engineering College, near Madanapalli, Chittoor(D)-AP.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom mx-auto">
          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src={projectDetails.mainImage} 
                alt="Nature Valley Development"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                  <MapPin size={14} /> {projectDetails.location}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {projectDetails.type}
                </span>
              </div>
              <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {projectDetails.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <p className="font-semibold">{projectDetails.status}</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <span className="text-sm text-muted-foreground">Price Range</span>
                  <p className="font-semibold">{projectDetails.price}</p>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us for Details <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Clubhouse Showcase */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Exclusive Clubhouse</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={projectDetails.clubhouse.image} 
                    alt="Nature Valley Clubhouse"
                    className="w-full rounded-lg shadow-md hover:shadow-xl transition-all"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">{projectDetails.clubhouse.title}</h4>
                  <p className="text-muted-foreground mb-6">
                    {projectDetails.clubhouse.description}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm">✓</span>
                      </div>
                      <span>Modern architecture with premium finishes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm">✓</span>
                      </div>
                      <span>Multi-purpose halls for community gatherings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm">✓</span>
                      </div>
                      <span>Fitness center and recreational areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm">✓</span>
                      </div>
                      <span>Panoramic views of the surrounding nature</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectDetails.galleryImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Nature Valley Gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              ))}
            </div>
          </div>

          {/* Layout Plan */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Layout Plan</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="public/lovable-uploads/b3d2111c-5350-4a7b-9f69-75764f222636.png" 
                alt="Nature Valley Layout Plan"
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-center text-muted-foreground">
                Detailed layout plan showing plot numbers and dimensions
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectDetails.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <feature.icon className="h-8 w-8 text-secondary mb-4" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
