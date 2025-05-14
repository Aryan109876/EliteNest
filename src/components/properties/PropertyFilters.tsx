import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FilterOptions } from '../../types';

interface PropertyFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  totalProperties: number;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onFilterChange, totalProperties }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [bathrooms, setBathrooms] = useState<number | null>(null);
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      const [min, max] = value.split('-').map(Number);
      setPriceRange([min, max]);
    } else {
      setPriceRange([0, 10000000]);
    }
  };

  const handleApplyFilters = () => {
    onFilterChange({
      priceRange,
      bedrooms,
      bathrooms,
      propertyType,
      status
    });
  };

  const handleReset = () => {
    setPriceRange([0, 10000000]);
    setBedrooms(null);
    setBathrooms(null);
    setPropertyType(null);
    setStatus(null);
    
    onFilterChange({
      priceRange: [0, 10000000],
      bedrooms: null,
      bathrooms: null,
      propertyType: null,
      status: null
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Filter Properties</h3>
        <button 
          onClick={handleReset}
          className="text-primary-600 text-sm hover:underline"
        >
          Reset All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Price Range</label>
          <select 
            className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={priceRange.join('-')}
            onChange={handlePriceChange}
          >
            <option value="">Any Price</option>
            <option value="0-1000000">Under $1M</option>
            <option value="1000000-2000000">$1M - $2M</option>
            <option value="2000000-5000000">$2M - $5M</option>
            <option value="5000000-10000000">$5M - $10M</option>
            <option value="10000000-100000000">$10M+</option>
          </select>
        </div>
        
        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Bedrooms</label>
          <select 
            className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={bedrooms || ''}
            onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        
        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Bathrooms</label>
          <select 
            className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={bathrooms || ''}
            onChange={(e) => setBathrooms(e.target.value ? Number(e.target.value) : null)}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        
        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Property Type</label>
          <select 
            className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={propertyType || ''}
            onChange={(e) => setPropertyType(e.target.value || null)}
          >
            <option value="">Any Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>
        
        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Status</label>
          <select 
            className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={status || ''}
            onChange={(e) => setStatus(e.target.value || null)}
          >
            <option value="">Any Status</option>
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
            <option value="sold">Sold</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-neutral-600 text-sm">
          {totalProperties} properties found
        </span>
        <button 
          onClick={handleApplyFilters}
          className="btn btn-primary py-2"
        >
          <Search className="w-4 h-4 mr-2" />
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default PropertyFilters;