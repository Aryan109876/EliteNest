import React, { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  // Settings for main slider
  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Settings for thumbnail slider
  const thumbSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="property-gallery">
      {/* Main Slider */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <Slider
          {...mainSettings}
          ref={(slider) => setNav1(slider)}
          asNavFor={nav2 || undefined}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-[500px]">
              <img 
                src={image} 
                alt={`${title} - Image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnail Slider */}
      <div className="px-4">
        <Slider
          {...thumbSettings}
          ref={(slider) => setNav2(slider)}
          asNavFor={nav1 || undefined}
        >
          {images.map((image, index) => (
            <div key={index} className="px-1">
              <div className="h-20 rounded-md overflow-hidden cursor-pointer">
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom arrow components
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 cursor-pointer shadow-md"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-primary-600" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 cursor-pointer shadow-md"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-primary-600" />
    </div>
  );
}

export default PropertyGallery;