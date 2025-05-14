import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    if (property.status === 'for-rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    
    // Format as millions for sales if price is high enough
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-property property-card">
      <div className="relative">
        {/* Property Image */}
        <Link to={`/properties/${property.id}`}>
          <div className="h-60 overflow-hidden">
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </Link>
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
          property.status === 'for-sale' 
            ? 'bg-primary-600 text-white' 
            : property.status === 'for-rent' 
              ? 'bg-secondary-600 text-white' 
              : 'bg-neutral-800 text-white'
        }`}>
          {property.status === 'for-sale' 
            ? 'For Sale' 
            : property.status === 'for-rent' 
              ? 'For Rent' 
              : 'Sold'}
        </div>
        
        {/* Price Badge */}
        <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md text-primary-700 font-bold">
          {formatPrice(property.price)}
        </div>
      </div>
      
      <div className="p-6">
        {/* Property Title */}
        <Link to={`/properties/${property.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors">
            {property.title}
          </h3>
        </Link>
        
        {/* Location */}
        <div className="flex items-center text-neutral-500 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {property.address.city}, {property.address.state}
          </span>
        </div>
        
        {/* Property Features */}
        <div className="flex items-center justify-between text-neutral-700 border-t pt-4">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-2 text-primary-600" />
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-2 text-primary-600" />
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 mr-2 text-primary-600" />
            <span>{property.squareFeet.toLocaleString()} ft²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;