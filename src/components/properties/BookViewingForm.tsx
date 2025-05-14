import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

interface BookViewingFormProps {
  propertyTitle: string;
}

const BookViewingForm: React.FC<BookViewingFormProps> = ({ propertyTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          notes: ''
        });
      }, 3000);
    }, 1500);
  };

  // Generate available dates (next 14 days)
  const availableDates = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    // Skip Sundays (assuming Sunday is a day off)
    if (date.getDay() !== 0) {
      const formattedDate = date.toISOString().split('T')[0];
      availableDates.push(formattedDate);
    }
  }

  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">Book a Viewing</h3>
      <p className="text-neutral-600 mb-4">Schedule a visit to {propertyTitle}</p>
      
      {isSubmitted ? (
        <div className="bg-success-50 text-success-700 p-4 rounded-md mb-4">
          Your viewing has been scheduled! A confirmation email has been sent with all the details.
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Your Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-neutral-500" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input pl-10"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-neutral-500" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input pl-10"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="w-5 h-5 text-neutral-500" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input pl-10"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
              Preferred Date *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="w-5 h-5 text-neutral-500" />
              </div>
              <select
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input pl-10"
                required
              >
                <option value="">Select a date</option>
                {availableDates.map(date => (
                  <option key={date} value={date}>
                    {new Date(date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
              Preferred Time *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="w-5 h-5 text-neutral-500" />
              </div>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-input pl-10"
                required
              >
                <option value="">Select a time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              className="form-input"
              placeholder="Any special requests or questions about the property?"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="btn btn-secondary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Scheduling...' : 'Schedule Viewing'}
        </button>
        
        <p className="text-xs text-neutral-500 mt-2 text-center">
          A representative will confirm your appointment within 24 hours.
        </p>
      </form>
    </div>
  );
};

export default BookViewingForm;