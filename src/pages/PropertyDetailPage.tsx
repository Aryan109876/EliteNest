import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import properties from '../data/properties';
import agents from '../data/agents';
import PropertyGallery from '../components/properties/PropertyGallery';
import PropertyMap from '../components/properties/PropertyMap';
import MortgageCalculator from '../components/properties/MortgageCalculator';
import ContactForm from '../components/properties/ContactForm';
import BookViewingForm from '../components/properties/BookViewingForm';
import { Bed, Bath, Square, Home, Calendar, Ruler, Car, Share2, Bookmark, Phone } from 'lucide-react';
import { Property, Agent } from '../types';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'map' | 'mortgage'>('info');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    
    if (foundProperty) {
      setProperty(foundProperty);
      
      // Find the agent
      const propertyAgent = agents.find(a => a.id === foundProperty.agentId);
      if (propertyAgent) {
        setAgent(propertyAgent);
      }
    } else {
      // If property not found, redirect to properties page
      navigate('/properties');
    }
  }, [id, navigate]);

  if (!property || !agent) {
    return (
      <div className="container-custom py-20 text-center">
        <h2>Loading property...</h2>
      </div>
    );
  }

  // Format price
  const formatPrice = (price: number) => {
    if (property.status === 'for-rent') {
      return `$${price.toLocaleString()}/month`;
    }
    
    return `$${price.toLocaleString()}`;
  };

  // Format address
  const fullAddress = `${property.address.street}, ${property.address.city}, ${property.address.state} ${property.address.zip}`;

  return (
    <>
      <Helmet>
        <title>{property.title} | EliteNest Properties</title>
        <meta name="description" content={`${property.description.substring(0, 160)}...`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            "name": property.title,
            "description": property.description,
            "image": property.images[0],
            "url": window.location.href,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": property.address.street,
              "addressLocality": property.address.city,
              "addressRegion": property.address.state,
              "postalCode": property.address.zip,
              "addressCountry": "US"
            },
            "numberOfBedrooms": property.bedrooms,
            "numberOfBathroomsTotal": property.bathrooms,
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": property.squareFeet,
              "unitCode": "FTK"
            },
            "price": property.price,
            "priceCurrency": "USD",
            "offers": {
              "@type": "Offer",
              "price": property.price,
              "priceCurrency": "USD",
              "availability": property.status === "sold" ? "https://schema.org/SoldOut" : "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      
      {/* Property Gallery */}
      <PropertyGallery images={property.images} title={property.title} />
      
      {/* Property Details */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h1 className="text-3xl md:text-4xl font-bold mr-4">{property.title}</h1>
                <div className="text-2xl md:text-3xl font-bold text-primary-600">
                  {formatPrice(property.price)}
                </div>
              </div>
              <div className="flex items-center text-neutral-600 mb-4">
                <Home className="w-5 h-5 mr-2 text-primary-600" />
                <span>{fullAddress}</span>
              </div>
              
              {/* Property Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  property.status === 'for-sale' 
                    ? 'bg-primary-100 text-primary-700' 
                    : property.status === 'for-rent' 
                      ? 'bg-secondary-100 text-secondary-700' 
                      : 'bg-neutral-100 text-neutral-700'
                }`}>
                  {property.status === 'for-sale' 
                    ? 'For Sale' 
                    : property.status === 'for-rent' 
                      ? 'For Rent' 
                      : 'Sold'}
                </span>
                <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </span>
                <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                  Built in {property.yearBuilt}
                </span>
              </div>
              
              {/* Property Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-b border-neutral-200">
                <div className="flex flex-col items-center text-center">
                  <Bed className="w-6 h-6 text-primary-600 mb-2" />
                  <span className="text-2xl font-bold">{property.bedrooms}</span>
                  <span className="text-neutral-500 text-sm">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Bath className="w-6 h-6 text-primary-600 mb-2" />
                  <span className="text-2xl font-bold">{property.bathrooms}</span>
                  <span className="text-neutral-500 text-sm">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Square className="w-6 h-6 text-primary-600 mb-2" />
                  <span className="text-2xl font-bold">{property.squareFeet.toLocaleString()}</span>
                  <span className="text-neutral-500 text-sm">Square Feet</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Car className="w-6 h-6 text-primary-600 mb-2" />
                  <span className="text-2xl font-bold">{property.garage}</span>
                  <span className="text-neutral-500 text-sm">Garage Spaces</span>
                </div>
              </div>
            </div>
            
            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="flex border-b">
                <button 
                  className={`py-3 px-5 font-medium ${activeTab === 'info' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600'}`}
                  onClick={() => setActiveTab('info')}
                >
                  Description & Features
                </button>
                <button 
                  className={`py-3 px-5 font-medium ${activeTab === 'map' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600'}`}
                  onClick={() => setActiveTab('map')}
                >
                  Map & Location
                </button>
                <button 
                  className={`py-3 px-5 font-medium ${activeTab === 'mortgage' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600'}`}
                  onClick={() => setActiveTab('mortgage')}
                >
                  Mortgage Calculator
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            {activeTab === 'info' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Description</h2>
                  <p className="text-neutral-700 whitespace-pre-line">{property.description}</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Property Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'map' && (
              <PropertyMap 
                location={property.location} 
                title={property.title}
                address={property.address}
              />
            )}
            
            {activeTab === 'mortgage' && (
              <MortgageCalculator propertyPrice={property.price} />
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn btn-primary"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Viewing
              </button>
              <a href={`tel:${agent.phone}`} className="btn btn-outline">
                <Phone className="w-5 h-5 mr-2" />
                Call Agent
              </a>
              <button className="btn bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
              <button className="btn bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                <Bookmark className="w-5 h-5 mr-2" />
                Save
              </button>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on large screens */}
          <div>
            {/* Agent Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <img 
                  src={agent.photo} 
                  alt={agent.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{agent.name}</h3>
                  <p className="text-neutral-600">{agent.title}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 text-primary-600 mr-2" />
                  <a href={`tel:${agent.phone}`} className="text-primary-600 hover:underline">
                    {agent.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-600 mr-2" />
                  <a href={`mailto:${agent.email}`} className="text-primary-600 hover:underline">
                    {agent.email}
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                {agent.bio}
              </p>
              <Link to="/about" className="text-primary-600 text-sm hover:underline block mb-4">
                View Agent Profile
              </Link>
              <div className="border-t pt-4">
                <ContactForm 
                  propertyTitle={property.title}
                  agentName={agent.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Book a Viewing</h2>
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="text-neutral-500 hover:text-neutral-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <BookViewingForm propertyTitle={property.title} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyDetailPage;