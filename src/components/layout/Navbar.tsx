import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-primary">
            Company
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Accueil
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              À propos
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Témoignages
            </a>
            <a href="#contact" className="btn btn-primary px-4 py-2">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium hover:text-primary">
                Accueil
              </a>
              <a href="#services" className="text-sm font-medium hover:text-primary">
                Services
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary">
                À propos
              </a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary">
                Témoignages
              </a>
              <a href="#contact" className="btn btn-primary px-4 py-2 w-full">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;