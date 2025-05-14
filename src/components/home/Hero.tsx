import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container-custom h-screen flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Discover Your <span className="text-secondary-500">Perfect</span> Luxury Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Exceptional properties for exceptional clients. EliteNest Properties specializes in luxury real estate for discerning buyers and sellers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/properties" className="btn btn-primary">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-16 left-0 right-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="miami">Miami</option>
                  <option value="aspen">Aspen</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">Price Range</option>
                  <option value="1000000-2000000">$1M - $2M</option>
                  <option value="2000000-5000000">$2M - $5M</option>
                  <option value="5000000-10000000">$5M - $10M</option>
                  <option value="10000000-100000000">$10M+</option>
                </select>
              </div>
              <Link to="/properties" className="btn btn-primary whitespace-nowrap">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;