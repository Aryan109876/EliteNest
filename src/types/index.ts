export interface Property {
  id: string;
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  description: string;
  features: string[];
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  status: 'for-sale' | 'for-rent' | 'sold';
  images: string[];
  yearBuilt: number;
  garage: number;
  location: {
    lat: number;
    lng: number;
  };
  agentId: string;
  createdAt: string;
  featured?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  bio: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  coverImage: string;
  publishedAt: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  avatar: string;
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface FilterOptions {
  priceRange: [number, number];
  bedrooms: number | null;
  bathrooms: number | null;
  propertyType: string | null;
  status: string | null;
}