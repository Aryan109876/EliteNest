import React from 'react';
import { Link } from 'react-router-dom';
import properties from '../../data/properties';
import PropertyCard from '../properties/PropertyCard';

const FeaturedProperties: React.FC = () => {
  // Get only featured properties
  const featuredProperties = properties.filter(property => property.featured);
  
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-3">Featured Properties</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional properties that represent the pinnacle of luxury living
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/properties" className="btn btn-outline">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;