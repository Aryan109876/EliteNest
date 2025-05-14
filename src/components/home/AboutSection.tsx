import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Home, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Luxury home interior" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-6 max-w-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="text-primary-600 font-semibold">Our Results</div>
                <Award className="w-6 h-6 text-secondary-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-neutral-900">450+</div>
                  <div className="text-sm text-neutral-500">Properties Sold</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neutral-900">$1.2B+</div>
                  <div className="text-sm text-neutral-500">in Sales</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neutral-900">98%</div>
                  <div className="text-sm text-neutral-500">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neutral-900">15+</div>
                  <div className="text-sm text-neutral-500">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <div className="text-secondary-600 font-medium mb-2">About EliteNest</div>
            <h2 className="mb-6">Your Trusted Partner in Luxury Real Estate</h2>
            <p className="text-neutral-600 mb-6">
              At EliteNest Properties, we understand that luxury real estate is more than just properties—it's about lifestyles, dreams, and legacies. Since our founding in 2010, we've been connecting discerning clients with extraordinary homes that reflect their unique aspirations and achievements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Expert Agents</h4>
                  <p className="text-neutral-600">Our specialized team has unparalleled local knowledge</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Home className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Exclusive Listings</h4>
                  <p className="text-neutral-600">Access to properties not available on the open market</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Personalized Service</h4>
                  <p className="text-neutral-600">Tailored approach to meet your unique needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Award-Winning</h4>
                  <p className="text-neutral-600">Recognized excellence in luxury real estate</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;