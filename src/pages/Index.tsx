
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <StatsSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
