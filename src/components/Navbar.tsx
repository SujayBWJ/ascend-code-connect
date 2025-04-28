
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-ascend-purple to-ascend-light-purple p-2 rounded-lg">
            <Code className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl text-ascend-dark">Ascend</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-ascend-dark hover:text-ascend-purple transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-ascend-dark hover:text-ascend-purple transition-colors">
            About
          </Link>
          <Link to="/events" className="font-medium text-ascend-dark hover:text-ascend-purple transition-colors">
            Events
          </Link>
          <Link to="/projects" className="font-medium text-ascend-dark hover:text-ascend-purple transition-colors">
            Projects
          </Link>
          <Link to="/team" className="font-medium text-ascend-dark hover:text-ascend-purple transition-colors">
            Team
          </Link>
          <Link to="/contact" className="font-medium text-ascend-dark hover:text-ascend-purple transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Button className="bg-ascend-purple hover:bg-ascend-light-purple text-white">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-ascend-dark" />
          ) : (
            <Menu className="h-6 w-6 text-ascend-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white p-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-ascend-dark hover:text-ascend-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-ascend-dark hover:text-ascend-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className="font-medium text-ascend-dark hover:text-ascend-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/projects" 
              className="font-medium text-ascend-dark hover:text-ascend-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/team" 
              className="font-medium text-ascend-dark hover:text-ascend-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-ascend-dark hover:text-ascend-purple p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-ascend-purple hover:bg-ascend-light-purple text-white w-full">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
