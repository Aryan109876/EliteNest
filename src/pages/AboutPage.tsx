import React from 'react';
import { Helmet } from 'react-helmet';
import agents from '../data/agents';
import testimonials from '../data/testimonials';
import { Award, Target, Users, Shield, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | EliteNest Properties</title>
        <meta name="description" content="Learn about EliteNest Properties and our team of expert real estate agents. Discover our mission, values, and commitment to excellent service." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-white font-bold mb-4">About EliteNest Properties</h1>
              <p className="text-xl text-white/80 mb-6">
                We're a premier luxury real estate agency dedicated to helping discerning clients find exceptional properties that match their lifestyle and investment goals.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold mb-1">450+</div>
                  <div className="text-white/80">Properties Sold</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold mb-1">$1.2B+</div>
                  <div className="text-white/80">in Sales</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="EliteNest Team" 
                  className="rounded-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-secondary-600 text-white p-6 rounded-lg w-44 h-44 flex flex-col justify-center items-center text-center">
                  <div className="text-lg font-bold mb-2">Founded</div>
                  <div className="text-3xl font-bold">2010</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="EliteNest Office" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                EliteNest Properties was founded in 2010 by Sarah Johnson, a veteran of the luxury real estate market with a vision to create an agency that truly understood the unique needs of high-net-worth clients. What began as a small boutique agency has grown into one of the most respected names in luxury real estate.
              </p>
              <p className="text-neutral-700 mb-4">
                Over the years, we've carefully built our team of experts, each bringing specialized knowledge of particular markets, property types, or client needs. Our growth has been organic, driven by referrals from satisfied clients who appreciate our personalized approach and exceptional results.
              </p>
              <p className="text-neutral-700">
                Today, EliteNest Properties represents some of the most extraordinary residences in the country and has expanded to include international properties. Despite our growth, we maintain the personalized service and attention to detail that set us apart from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Our Values</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These core principles guide everything we do at EliteNest Properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-neutral-600">
                We are committed to exceeding expectations in every transaction, providing unparalleled service to our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-neutral-600">
                We operate with complete transparency and honesty, building relationships based on trust and ethical conduct.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Relationships</h3>
              <p className="text-neutral-600">
                We focus on building long-term relationships rather than short-term transactions, becoming trusted advisors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-neutral-600">
                We continuously expand our knowledge and skills to provide the most informed guidance in the luxury market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Meet Our Team</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our team of expert agents brings years of experience and specialized knowledge to serve your real estate needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map(agent => (
              <div key={agent.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={agent.photo} 
                    alt={agent.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                  <p className="text-primary-600 mb-3">{agent.title}</p>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {agent.bio}
                  </p>
                  <div className="flex flex-col space-y-2 mb-4">
                    <a href={`tel:${agent.phone}`} className="flex items-center text-neutral-700 hover:text-primary-600">
                      <Phone className="w-5 h-5 mr-2" />
                      {agent.phone}
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex items-center text-neutral-700 hover:text-primary-600">
                      <Mail className="w-5 h-5 mr-2" />
                      {agent.email}
                    </a>
                  </div>
                  <div className="flex space-x-3 pt-4 border-t">
                    {agent.socialMedia.facebook && (
                      <a href={agent.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600">
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {agent.socialMedia.twitter && (
                      <a href={agent.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {agent.socialMedia.instagram && (
                      <a href={agent.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600">
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {agent.socialMedia.linkedin && (
                      <a href={agent.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-3">What Our Clients Say</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with EliteNest Properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map(testimonial => (
              <div key={testimonial.id} className="bg-white text-neutral-800 rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                  ))}
                </div>
                <blockquote className="mb-6 text-lg italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-neutral-500">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-3">Get in Touch</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Have questions or want to schedule a consultation? Contact us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Office Location</h3>
              <p className="text-neutral-600">
                123 Luxury Lane<br />
                Beverly Hills, CA 90210
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-neutral-600 mb-2">
                Main Office: <a href="tel:+12345678900" className="text-primary-600">(234) 567-8900</a>
              </p>
              <p className="text-neutral-600">
                24/7 Support: <a href="tel:+12345678901" className="text-primary-600">(234) 567-8901</a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary-50 p-3 rounded-full w-fit mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-neutral-600 mb-2">
                General Inquiries: <a href="mailto:info@elitenest.com" className="text-primary-600">info@elitenest.com</a>
              </p>
              <p className="text-neutral-600">
                Sales: <a href="mailto:sales@elitenest.com" className="text-primary-600">sales@elitenest.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Star(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

export default AboutPage;