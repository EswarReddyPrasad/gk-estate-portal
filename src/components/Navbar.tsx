
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [{
    title: "Home",
    path: "/"
  }, {
    title: "About",
    path: "/about"
  }, {
    title: "Projects",
    path: "/projects"
  }, {
    title: "Contact",
    path: "/contact"
  }];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-primary/20 backdrop-blur-sm"}`}>
      <div className="container-custom mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className={`text-2xl font-display font-semibold transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              GK<span className="text-secondary">Estates</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map(link => (
                <li key={link.title}>
                  <Link 
                    to={link.path} 
                    className={`font-semibold transition-all duration-200 text-sm relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full ${
                      isScrolled 
                        ? "text-primary/80 hover:text-primary" 
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-6 py-2 shadow-lg">
              <Link to="/contact">
                <span>Enquire Now</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-primary" : "text-white"}`} 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col pt-20 px-6`}>
          <ul className="flex flex-col gap-5">
            {navLinks.map(link => (
              <li key={link.title}>
                <Link 
                  to={link.path} 
                  className="text-primary text-lg font-semibold block py-3 border-b border-gray-100 hover:text-secondary transition-colors" 
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-semibold py-6">
            <Link to="/contact" onClick={closeMenu}>
              <span>Enquire Now</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
