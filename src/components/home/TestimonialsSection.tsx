import React from 'react';
import Slider from 'react-slick';
import testimonials from '../../data/testimonials';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="section bg-primary-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-white">Client Testimonials</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with EliteNest Properties
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white text-neutral-800 rounded-xl p-8 shadow-lg">
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;