
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  const officeLocations = [
    {
      city: "Bangalore",
      address: "40/1, Vittal Mallya Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
      phone: "+91 9876 543 210",
      email: "bangalore@gkestates.com",
      timing: "Mon-Sat: 9:30 AM - 6:30 PM",
    },
    {
      city: "Madanapalle",
      address: "Kadiri Rd, Society Colony, Reddys Colony Extention, Madanapalle, Andhra Pradesh 517325",
      phone: "+91 9959798991",
      email: "madanapalle@gkestates.com",
      timing: "Mon-Sat: 9:30 AM - 6:30 PM",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-white/10 text-secondary rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We're here to help with all your real estate needs. Reach out to our team for personalized assistance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Office Locations */}
      <section className="py-16 bg-muted">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Visit Our Offices</h2>
            <p className="text-muted-foreground">
              Stop by one of our offices to meet our team and discuss your real estate needs in person.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover-scale">
                <h3 className="text-2xl font-semibold mb-4">{office.city} Office</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">
                      {office.address}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Phone className="text-secondary shrink-0" size={20} />
                    <a href={`tel:${office.phone}`} className="text-primary hover:text-secondary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex gap-3">
                    <Mail className="text-secondary shrink-0" size={20} />
                    <a href={`mailto:${office.email}`} className="text-primary hover:text-secondary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex gap-3">
                    <Clock className="text-secondary shrink-0" size={20} />
                    <span className="text-muted-foreground">
                      {office.timing}
                    </span>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`} target="_blank" rel="noopener noreferrer">
                    Get Directions <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Iframe Map */}
      <section className="py-16">
        <div className="container-custom mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8447827669847!2d78.54861!3d13.4906592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb265003ebbafe1%3A0xcdf9dca51bb8beef!2sGK%20Nature%20Valley!5e0!3m2!1sen!2sin!4v1687345639008!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GK Nature Valley Location - Madanapalle"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Contact;
