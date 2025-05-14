import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Home } from 'lucide-react';

// Fix for marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface PropertyMapProps {
  location: {
    lat: number;
    lng: number;
  };
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

const PropertyMap: React.FC<PropertyMapProps> = ({ location, title, address }) => {
  useEffect(() => {
    // The map needs to be resized when it becomes visible
    const timeoutId = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Property Location</h3>
      <MapContainer 
        center={[location.lat, location.lng]} 
        zoom={15} 
        scrollWheelZoom={false}
        style={{ height: '400px', borderRadius: '0.5rem' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            <div className="text-center">
              <h4 className="font-bold">{title}</h4>
              <p className="text-sm">{fullAddress}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <div className="mt-4 flex items-start">
        <Home className="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-neutral-600">{fullAddress}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;