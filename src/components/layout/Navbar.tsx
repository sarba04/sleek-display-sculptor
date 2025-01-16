import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Festival Spirituel
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Accueil
            </Link>
            <Link to="/programme" className="text-sm font-medium hover:text-primary">
              Programme
            </Link>
            <Link to="/inscription" className="btn btn-primary px-4 py-2">
              S'inscrire
            </Link>
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
              <Link to="/" className="text-sm font-medium hover:text-primary">
                Accueil
              </Link>
              <Link to="/programme" className="text-sm font-medium hover:text-primary">
                Programme
              </Link>
              <Link to="/inscription" className="btn btn-primary px-4 py-2 w-full">
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;