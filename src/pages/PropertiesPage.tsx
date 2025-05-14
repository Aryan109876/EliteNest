import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import properties from '../data/properties';
import PropertyCard from '../components/properties/PropertyCard';
import PropertyFilters from '../components/properties/PropertyFilters';
import { FilterOptions, Property } from '../types';
import { Grid, List } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 10000000],
    bedrooms: null,
    bathrooms: null,
    propertyType: null,
    status: null
  });
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Apply filters
    const filtered = properties.filter(property => {
      // Price filter
      if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
        return false;
      }
      
      // Bedrooms filter
      if (filters.bedrooms !== null && property.bedrooms < filters.bedrooms) {
        return false;
      }
      
      // Bathrooms filter
      if (filters.bathrooms !== null && property.bathrooms < filters.bathrooms) {
        return false;
      }
      
      // Property type filter
      if (filters.propertyType !== null && property.type !== filters.propertyType) {
        return false;
      }
      
      // Status filter
      if (filters.status !== null && property.status !== filters.status) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProperties(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Helmet>
        <title>Browse Properties | EliteNest Properties</title>
        <meta name="description" content="Explore our exclusive collection of luxury properties. Filter by price, location, and amenities to find your perfect home." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-20 mb-10">
        <div className="container-custom">
          <h1 className="text-white font-bold mb-4">Browse Properties</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore our collection of exceptional properties, from beachfront villas to urban penthouses
          </p>
        </div>
      </div>
      
      <div className="container-custom pb-16">
        {/* Filters */}
        <PropertyFilters 
          onFilterChange={handleFilterChange}
          totalProperties={filteredProperties.length}
        />
        
        {/* View Toggles & Results Count */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-neutral-600">
            {filteredProperties.length} properties found
          </div>
          <div className="flex items-center space-x-2">
            <button 
              className={`p-2 rounded ${viewType === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-white text-neutral-600'}`}
              onClick={() => setViewType('grid')}
              aria-label="Grid view"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button 
              className={`p-2 rounded ${viewType === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-white text-neutral-600'}`}
              onClick={() => setViewType('list')}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className={`
            ${viewType === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
            }
          `}>
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-2">No properties found</h3>
            <p className="text-neutral-600 mb-6">
              Please try adjusting your filters to see more results.
            </p>
            <button 
              onClick={() => setFilters({
                priceRange: [0, 10000000],
                bedrooms: null,
                bathrooms: null,
                propertyType: null,
                status: null
              })}
              className="btn btn-outline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertiesPage;