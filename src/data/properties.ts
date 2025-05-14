import { Property } from '../types';

const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa',
    address: {
      street: '123 Oceanfront Drive',
      city: 'Malibu',
      state: 'CA',
      zip: '90265',
    },
    price: 4500000,
    bedrooms: 5,
    bathrooms: 6,
    squareFeet: 6200,
    description: 'Stunning beachfront villa with panoramic ocean views, private beach access, and state-of-the-art amenities. This architectural masterpiece features an open floor plan, floor-to-ceiling windows, a gourmet kitchen, and multiple outdoor living spaces. The primary suite boasts a spa-like bathroom and private terrace overlooking the Pacific Ocean.',
    features: [
      'Private Beach Access',
      'Infinity Pool',
      'Home Theater',
      'Wine Cellar',
      'Smart Home Technology',
      'Outdoor Kitchen',
      'Spa Room',
      'Elevator',
      '3-Car Garage'
    ],
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 2020,
    garage: 3,
    location: {
      lat: 34.0259,
      lng: -118.7798,
    },
    agentId: '1',
    createdAt: '2023-05-12T08:00:00.000Z',
    featured: true
  },
  {
    id: '2',
    title: 'Modern Downtown Penthouse',
    address: {
      street: '1000 Grand Avenue, #PH5',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90017',
    },
    price: 3200000,
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 3100,
    description: 'Breathtaking penthouse in the heart of downtown with 360-degree city views. This sophisticated residence features premium finishes, an open concept living area, chef\'s kitchen with top-of-the-line appliances, and a private rooftop terrace. Building amenities include 24-hour concierge, fitness center, pool, and resident lounge.',
    features: [
      'Private Rooftop Terrace',
      'Floor-to-Ceiling Windows',
      'Custom Italian Cabinetry',
      'Smart Home Features',
      '24-Hour Concierge',
      'Fitness Center',
      'Pool & Hot Tub',
      'Pet Spa',
      'Wine Storage'
    ],
    type: 'condo',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 2018,
    garage: 2,
    location: {
      lat: 34.0522,
      lng: -118.2437,
    },
    agentId: '2',
    createdAt: '2023-06-03T10:30:00.000Z',
    featured: true
  },
  {
    id: '3',
    title: 'Historic Brownstone Townhouse',
    address: {
      street: '235 Bedford Avenue',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11211',
    },
    price: 2800000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3600,
    description: 'Meticulously renovated brownstone that perfectly blends historic charm with modern luxury. Features include original hardwood floors, decorative fireplaces, high ceilings, a chef\'s kitchen, and a private garden. Located in prime Williamsburg, just steps from boutiques, restaurants, and parks.',
    features: [
      'Original Architectural Details',
      'Renovated Chef\'s Kitchen',
      'Private Garden',
      'Multiple Fireplaces',
      'Central Air Conditioning',
      'Smart Home System',
      'Radiant Floor Heating',
      'Custom Built-ins',
      'Wine Cellar'
    ],
    type: 'townhouse',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 1910,
    garage: 0,
    location: {
      lat: 40.7142,
      lng: -73.9614,
    },
    agentId: '3',
    createdAt: '2023-04-20T12:15:00.000Z'
  },
  {
    id: '4',
    title: 'Exclusive Golf Course Estate',
    address: {
      street: '16 Eagle Drive',
      city: 'Palm Beach Gardens',
      state: 'FL',
      zip: '33418',
    },
    price: 3800000,
    bedrooms: 5,
    bathrooms: 5.5,
    squareFeet: 5800,
    description: 'Magnificent estate home overlooking the 16th fairway in an exclusive golf community. This residence offers soaring ceilings, a grand foyer, gourmet kitchen, formal dining room, home office, and a primary suite with sitting area and luxurious bath. The outdoor living space features a summer kitchen, custom pool and spa, and covered lanai.',
    features: [
      'Golf Course Views',
      'Custom Pool & Spa',
      'Summer Kitchen',
      'Home Theater',
      'Wine Room',
      'Exercise Room',
      'Smart Home Technology',
      'Impact Windows & Doors',
      'Generator'
    ],
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 2017,
    garage: 3,
    location: {
      lat: 26.8233,
      lng: -80.1386,
    },
    agentId: '2',
    createdAt: '2023-03-15T09:45:00.000Z',
    featured: true
  },
  {
    id: '5',
    title: 'Luxury High-Rise Apartment',
    address: {
      street: '888 California St, #4501',
      city: 'San Francisco',
      state: 'CA',
      zip: '94108',
    },
    price: 8500,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1650,
    description: 'Spectacular high-floor apartment with breathtaking views of the Bay Bridge and city skyline. This fully furnished luxury residence features designer furnishings, high-end finishes, and floor-to-ceiling windows. Building amenities include 24-hour doorman, concierge services, fitness center, and resident lounge.',
    features: [
      'Panoramic Views',
      'Designer Furnishings',
      'European Appliances',
      'Marble Bathrooms',
      '24-Hour Doorman',
      'Concierge Services',
      'Fitness Center',
      'Resident Lounge',
      'Valet Parking'
    ],
    type: 'apartment',
    status: 'for-rent',
    images: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 2016,
    garage: 1,
    location: {
      lat: 37.7749,
      lng: -122.4194,
    },
    agentId: '1',
    createdAt: '2023-05-28T14:20:00.000Z'
  },
  {
    id: '6',
    title: 'Mediterranean Waterfront Estate',
    address: {
      street: '42 Seaside Lane',
      city: 'Naples',
      state: 'FL',
      zip: '34102',
    },
    price: 6800000,
    bedrooms: 6,
    bathrooms: 7.5,
    squareFeet: 8200,
    description: 'Spectacular Mediterranean-inspired waterfront estate with private dock and direct Gulf access. This magnificent residence features marble floors, coffered ceilings, gourmet kitchen, formal living and dining rooms, home theater, and wine cellar. The primary suite offers water views, a morning kitchen, and a spa-like bathroom.',
    features: [
      'Waterfront with Private Dock',
      'Infinity-Edge Pool & Spa',
      'Outdoor Kitchen & Fireplace',
      'Home Theater',
      'Wine Cellar',
      'Elevator',
      'Hurricane Impact Windows',
      'Smart Home Technology',
      '4-Car Garage'
    ],
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 2015,
    garage: 4,
    location: {
      lat: 26.1420,
      lng: -81.7948,
    },
    agentId: '3',
    createdAt: '2023-04-05T11:10:00.000Z'
  },
  {
    id: '7',
    title: 'Contemporary Mountain Retreat',
    address: {
      street: '355 Pine Ridge Road',
      city: 'Aspen',
      state: 'CO',
      zip: '81611',
    },
    price: 7200000,
    bedrooms: 5,
    bathrooms: 5.5,
    squareFeet: 6500,
    description: 'Stunning contemporary mountain home with panoramic views of the Rockies. This architectural gem features walls of glass, open living spaces, chef\'s kitchen, and a dramatic great room with a stone fireplace. Outdoor amenities include multiple decks, a hot tub, and a fire pit. Just minutes from world-class skiing and downtown Aspen.',
    features: [
      'Mountain Views',
      'Floor-to-Ceiling Windows',
      'Chef\'s Kitchen',
      'Indoor/Outdoor Living',
      'Stone Fireplace',
      'Home Office',
      'Media Room',
      'Heated Driveway',
      'Guest Apartment'
    ],
    type: 'house',
    status: 'for-sale',
    images: [
      'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 2019,
    garage: 2,
    location: {
      lat: 39.1911,
      lng: -106.8175,
    },
    agentId: '1',
    createdAt: '2023-06-10T15:30:00.000Z',
    featured: true
  },
  {
    id: '8',
    title: 'Renovated Urban Loft',
    address: {
      street: '75 Spring Street, #8B',
      city: 'New York',
      state: 'NY',
      zip: '10012',
    },
    price: 2300000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    description: 'Stunning SoHo loft in a historic cast-iron building. This meticulously renovated space features 14-foot ceilings, original columns, exposed brick walls, and oversized windows. The open kitchen boasts custom cabinetry, marble countertops, and premium appliances. A perfect blend of historic character and modern luxury.',
    features: [
      '14-Foot Ceilings',
      'Original Cast-Iron Columns',
      'Exposed Brick Walls',
      'Custom Kitchen',
      'Hardwood Floors',
      'Oversized Windows',
      'Central Air Conditioning',
      'In-Unit Laundry',
      'Private Storage'
    ],
    type: 'condo',
    status: 'sold',
    images: [
      'https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    yearBuilt: 1900,
    garage: 0,
    location: {
      lat: 40.7225,
      lng: -73.9987,
    },
    agentId: '2',
    createdAt: '2023-02-18T16:45:00.000Z'
  }
];

export default properties;