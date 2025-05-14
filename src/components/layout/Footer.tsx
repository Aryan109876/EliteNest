import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-7 h-7 text-secondary-500" />
              <span className="text-xl font-heading font-bold">EliteNest</span>
            </div>
            <p className="mb-6 text-neutral-300">
              Providing exceptional real estate services with a focus on luxury properties and personalized client experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-secondary-500 transition-colors"
              >
                <Instagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-secondary-500 transition-colors"
              >
                <Facebook />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-secondary-500 transition-colors"
              >
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" />
                <span className="text-neutral-300">
                  123 Luxury Lane<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-secondary-500 mr-2" />
                <a href="tel:+12345678900" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  (234) 567-8900
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-secondary-500 mr-2" />
                <a href="mailto:info@elitenest.com" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                  info@elitenest.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-white">Newsletter</h4>
            <p className="text-neutral-300 mb-3">
              Subscribe to our newsletter for market updates and new listings.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EliteNest Properties. All rights reserved.
          </div>
          <div className="text-neutral-400 text-sm">
            <Link to="/privacy-policy" className="hover:text-secondary-500 transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms-of-service" className="hover:text-secondary-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;