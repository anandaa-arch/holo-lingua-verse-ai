
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="max-w-[980px] mx-auto px-5 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-white" />
          <span className="font-medium text-lg">Varnanetra</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-7">
          <Link 
            to="/" 
            className={`text-sm font-medium hover:opacity-70 transition-opacity ${
              location.pathname === "/" ? "opacity-100" : "opacity-70"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className={`text-sm font-medium hover:opacity-70 transition-opacity ${
              location.pathname === "/features" ? "opacity-100" : "opacity-70"
            }`}
          >
            Features
          </Link>
          <Link 
            to="/roleplay" 
            className={`text-sm font-medium hover:opacity-70 transition-opacity ${
              location.pathname === "/roleplay" ? "opacity-100" : "opacity-70"
            }`}
          >
            AI Roleplay
          </Link>
          <Link 
            to="/pronunciation" 
            className={`text-sm font-medium hover:opacity-70 transition-opacity ${
              location.pathname === "/pronunciation" ? "opacity-100" : "opacity-70"
            }`}
          >
            Pronunciation
          </Link>
          <Link 
            to="/get-started"
            className="apple-button" 
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl animate-fade-in border-t border-white/10">
          <div className="px-5 py-6 flex flex-col gap-5">
            <Link
              to="/"
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/roleplay"
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Roleplay
            </Link>
            <Link
              to="/pronunciation"
              className="text-lg font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pronunciation
            </Link>
            <Link
              to="/get-started"
              className="apple-button inline-block text-center mt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
