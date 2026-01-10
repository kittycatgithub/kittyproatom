'use client';

import { useEffect, useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurClients = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling?.setAttribute('aria-hidden', 'true');
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const clientImages = [
    "/images/0.jpeg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpeg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpeg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
  ];

  return (
    <section id="clients" className="py-16 md:py-20 lg:py-10 bg-gradient-to-r from-blue-100 via-[#EFF6FF] to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-black mb-10">
          Our Customers
        </h2>

        <Slider {...settings}>
          {clientImages.map((src, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-2xl shadow-md px-6 flex items-center justify-center transition-transform duration-300 hover:scale-105 h-32">
                <img
                  src={src}
                  alt={`Client ${index + 1}`}
                  className="max-h-24 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurClients;
