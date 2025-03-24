
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-muted/50 py-16">
        <div className="text-center max-w-lg px-6 animate-scale-up">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-primary mb-6">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
