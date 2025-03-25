import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // In a real implementation, we would send this data to a server
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  return <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <span className="inline-block py-1 px-3 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Us</h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              We're here to help you find your perfect home or investment opportunity. Reach out to our team for personalized assistance.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="text-secondary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">+91 9959798991</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Mail className="text-secondary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a href="mailto:info@gkestates.com" className="text-muted-foreground hover:text-primary transition-colors">tkndevelopersgk@gmail.com</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MapPin className="text-secondary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Office</h3>
                  <address className="not-italic text-muted-foreground">
                    Corporate Office, 1st Floor, <br />
                    Park Plaza Building, <br />
                    Bengaluru, Karnataka 560001
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {isSubmitted ? <div className="text-center py-8">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div> : <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <input id="name" name="name" type="text" required value={formState.name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Enter your name" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input id="email" name="email" type="email" required value={formState.email} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea id="message" name="message" rows={4} required value={formState.message} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="How can we help you?" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;