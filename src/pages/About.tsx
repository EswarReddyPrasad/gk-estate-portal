
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Target, Shield, Lightbulb } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";

const About = () => {
  const leaders = [
    {
      name: "Gopal Reddy",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop",
      bio: "Former leadership at Concorde Group with over 15 years of experience in luxury real estate development.",
    },
    {
      name: "Krishnappa Naidu ( TKN )",
      role: "Managing Director & Co-Founder",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format&fit=crop",
      bio: "Previously led TKN Developers as CEO, known for building first integrated layouts and gated communities with special amenities in Madanapalle.",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Customer-Centric",
      description: "We place our customers at the heart of everything we do, creating spaces that truly enhance their lives."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue excellence in every aspect of our work, from design and materials to construction and service."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with the highest standards of transparency, honesty and ethical behavior in all our dealings."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new ideas, technologies and approaches to create exceptional living spaces."
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Building Excellence Through Partnership
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              GK Estates represents the combined vision and expertise of industry leaders, committed to redefining premium real estate development.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">The Story of GK Estates</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  GK Estates was formed in 2020 when the top leadership from Concorde Group in Bangalore and TKN Developers in Madanapalle joined forces to create a new benchmark in real estate development.
                </p>
                <p>
                  Built on a foundation of shared values and complementary expertise, our partnership brings together decades of experience in creating exceptional living spaces across Southern India.
                </p>
                <p>
                  The leadership from Concorde Group brings extensive experience in luxury residential developments, while TKN Developers contributes deep knowledge in municipal town planning and commercial projects.
                </p>
                <p>
                  Together, we're combining the best of both worlds to deliver thoughtfully designed, premium-quality developments that truly enhance the lives of our customers.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-0.5 shrink-0" size={18} />
                  <span>Founded in 2020</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-0.5 shrink-0" size={18} />
                  <span>25+ years combined expertise</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-0.5 shrink-0" size={18} />
                  <span>Operations in Karnataka & AP</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-secondary mt-0.5 shrink-0" size={18} />
                  <span>30+ projects completed</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600&auto=format&fit=crop" 
                  alt="GK Estates Project" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full -z-10 animate-float" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These values guide everything we do, from project planning and design to construction and customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-scale">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Leadership</h2>
            <p className="text-muted-foreground">
              Meet the visionaries behind GK Estates who bring decades of experience and a passion for excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-white p-6 rounded-lg shadow-md">
                <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-secondary/20">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-secondary font-medium mb-4">{leader.role}</p>
                  <p className="text-muted-foreground">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <StatsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
