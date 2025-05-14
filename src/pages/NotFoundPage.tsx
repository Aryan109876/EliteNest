import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container-custom text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link to="/properties" className="btn btn-outline">
            <Search className="w-5 h-5 mr-2" />
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;