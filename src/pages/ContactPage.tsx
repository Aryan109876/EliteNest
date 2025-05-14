import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | EliteNest Properties</title>
        <meta name="description" content="Get in touch with our team of luxury real estate experts. We're here to answer your questions and help you find your dream property." />
      </Helmet>
      
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-20">
        <div className="container-custom">
          <h1 className="text-white font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Have questions or want to schedule a consultation? Our team is here to help you with all your real estate needs.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - 2/3 width on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted && (
                <div className="bg-success-50 text-success-700 p-4 rounded-md mb-6">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="property-inquiry">Property Inquiry</option>
                      <option value="selling-property">Selling a Property</option>
                      <option value="valuation">Property Valuation</option>
                      <option value="investment">Investment Advice</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending<span className="animate-pulse">...</span></>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info - 1/3 width on large screens */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-primary-50 p-3 rounded-full h-fit mr-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Office</h4>
                    <p className="text-neutral-600">
                      123 Luxury Lane<br />
                      Beverly Hills, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-50 p-3 rounded-full h-fit mr-4">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-neutral-600 mb-1">
                      Main: <a href="tel:+12345678900" className="text-primary-600 hover:underline">(234) 567-8900</a>
                    </p>
                    <p className="text-neutral-600">
                      Fax: (234) 567-8909
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-50 p-3 rounded-full h-fit mr-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Addresses</h4>
                    <p className="text-neutral-600 mb-1">
                      General: <a href="mailto:info@elitenest.com" className="text-primary-600 hover:underline">info@elitenest.com</a>
                    </p>
                    <p className="text-neutral-600">
                      Support: <a href="mailto:support@elitenest.com" className="text-primary-600 hover:underline">support@elitenest.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-50 p-3 rounded-full h-fit mr-4">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-neutral-600 mb-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-neutral-600 mb-1">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-neutral-600">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-50 p-3 rounded-full text-primary-600 hover:bg-primary-100 transition-colors"
                >
                  <Facebook />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-50 p-3 rounded-full text-primary-600 hover:bg-primary-100 transition-colors"
                >
                  <Twitter />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-50 p-3 rounded-full text-primary-600 hover:bg-primary-100 transition-colors"
                >
                  <Instagram />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-50 p-3 rounded-full text-primary-600 hover:bg-primary-100 transition-colors"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-[400px] w-full mb-16">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26436.77585941639!2d-118.4309397641832!3d34.0736359649502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1656272539726!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="EliteNest Properties Location"
        ></iframe>
      </div>
    </>
  );
};

function Facebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function Twitter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function Instagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function Linkedin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default ContactPage;