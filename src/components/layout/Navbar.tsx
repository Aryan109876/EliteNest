import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Home, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white shadow-md py-2'
      : 'bg-transparent md:bg-transparent py-4'
  }`;

  const linkClasses = `text-sm font-medium relative transition duration-300 px-3 py-2 rounded-md ${
    isScrolled 
      ? 'text-neutral-800 hover:text-primary-600' 
      : 'text-white md:text-white hover:text-secondary-500'
  }`;

  const activeLinkClasses = `${
    isScrolled 
      ? 'text-primary-600' 
      : 'text-secondary-500 md:text-secondary-500'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Home className={`w-8 h-8 ${isScrolled ? 'text-primary-600' : 'text-secondary-500'}`} />
          <span className={`text-xl font-heading font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            EliteNest
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-neutral-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-neutral-800' : 'text-white'} />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({isActive}) => 
            `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Home
          </NavLink>
          <NavLink to="/properties" className={({isActive}) => 
            `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Properties
          </NavLink>
          <NavLink to="/blog" className={({isActive}) => 
            `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Blog
          </NavLink>
          <NavLink to="/about" className={({isActive}) => 
            `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => 
            `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
            Contact
          </NavLink>
        </div>

        {/* Call button */}
        <div className="hidden md:block">
          <a href="tel:+12345678900" className="btn btn-primary text-sm">
            <Phone className="w-4 h-4 mr-2" />
            (234) 567-8900
          </a>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 bg-white transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-between items-center p-5 border-b">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <Home className="w-6 h-6 text-primary-600" />
              <span className="text-xl font-heading font-bold text-primary-600">
                EliteNest
              </span>
            </Link>
            <button
              onClick={closeMenu}
              className="text-neutral-800 text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>
          <div className="flex flex-col p-5 space-y-5">
            <NavLink to="/" className="text-lg font-medium text-neutral-800 hover:text-primary-600">
              Home
            </NavLink>
            <NavLink to="/properties" className="text-lg font-medium text-neutral-800 hover:text-primary-600">
              Properties
            </NavLink>
            <NavLink to="/blog" className="text-lg font-medium text-neutral-800 hover:text-primary-600">
              Blog
            </NavLink>
            <NavLink to="/about" className="text-lg font-medium text-neutral-800 hover:text-primary-600">
              About
            </NavLink>
            <NavLink to="/contact" className="text-lg font-medium text-neutral-800 hover:text-primary-600">
              Contact
            </NavLink>
            <a href="tel:+12345678900" className="btn btn-primary text-center mt-4">
              <Phone className="w-4 h-4 mr-2" />
              (234) 567-8900
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;