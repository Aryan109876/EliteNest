import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="newsletter-section py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-white mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let our expert agents guide you through the luxury real estate market and find the perfect property for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties" className="btn btn-secondary">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100">
              Contact an Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;