
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-semibold">
                GK<span className="text-secondary">Estates</span>
              </span>
            </Link>
            <p className="text-white/80 mb-6 max-w-xs">
              A partnership of excellence between top leadership from Concorde-Bangalore and TKN Developers, delivering exceptional real estate developments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Gallery", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-white/70 hover:text-secondary transition-colors flex items-center gap-1">
                    {item}
                    <ArrowUpRight size={14} className="opacity-70" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-medium mb-6">Projects</h3>
            <ul className="space-y-3">
              {["Luxury Villas", "Premium Apartments", "Integrated Townships", "Commercial Spaces", "Upcoming Projects"].map((item) => (
                <li key={item}>
                  <Link to="/projects" className="text-white/70 hover:text-secondary transition-colors flex items-center gap-1">
                    {item}
                    <ArrowUpRight size={14} className="opacity-70" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                <span className="text-white/80">
                  Corporate Office, 1st Floor, Park Plaza Building, Bengaluru, Karnataka 560001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-white">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-secondary shrink-0" />
                <a href="mailto:info@gkestates.com" className="text-white/80 hover:text-white">
                  info@gkestates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} GK Estates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
