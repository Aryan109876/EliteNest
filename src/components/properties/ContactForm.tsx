import React, { useState } from 'react';

interface ContactFormProps {
  propertyTitle: string;
  agentName: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ propertyTitle, agentName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hi ${agentName}, I'm interested in this property: ${propertyTitle}. Please contact me with more information.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          message: `Hi ${agentName}, I'm interested in this property: ${propertyTitle}. Please contact me with more information.`
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
      
      {isSubmitted ? (
        <div className="bg-success-50 text-success-700 p-4 rounded-md mb-4">
          Thank you for your inquiry! {agentName} will contact you shortly.
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
        
        <div className="mb-4">
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
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="form-input"
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        <p className="text-xs text-neutral-500 mt-2 text-center">
          By submitting this form, you agree to our privacy policy.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;