"use client";
import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute md:-left-13 top-1/2 -translate-y-1/2 z-10 bg-button hover:bg-button-dull text-white p-1 md:p-4 rounded-full shadow-lg transition"
  >
    <FaArrowLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-0 md:-right-13 top-1/2 -translate-y-1/2 z-10 bg-button hover:bg-button-dull text-white p-1 md:p-4 rounded-full shadow-lg transition"
  >
    <FaArrowRight size={20} />
  </button>
);

const TestimonialCarousel = () => {
  const slides = [
    {
      id: 1,
      img: "/testimonials/t1.jpeg",
      title: "Glass Partition",
      desc: "Glass Partition We offer high utility range of Glass Partition. Also manufacturer and supplier of Glass Partition in Nagpur.",
    },
    {
      id: 2,
      img: "/testimonials/t2.jpeg",
      title: "Glass Mandir Manufacturer",
      desc: "Glass Mandir Manufacturer Dadakrupa Glass Pvt Ltd Phone: 08071 300 129 Dadakrupa Glass Pvt Ltd is a leading manufacturer and supplier of Glass Mandir in nagpur",
    },
    {
      id: 3,
      img: "/testimonials/t3.jpeg",
      title: "Glass Relling",
      desc: "Glass Relling Dadakrupa Glass Pvt Ltd Phone: 08071 300 129 Dadakrupa Glass Pvt Ltd Nagpur is a leading manufacturer and supplier of Glass Relling in nagpur",
    },
    {
      id: 4,
      img: "/testimonials/t4.jpeg",
      title: "Exterior Glass Work",
      desc: "We are a leading Manufacturer of Mall Exterior Glass Work, High Quality Spider Work, House Exterior Glass Work, Spider Fitting, Frame Glass Partition and Rope Spider Fitting from Nagpur, India.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>, 
  }

  return (
    <div className=" bg-blue-50/50 py-16">
      <h2 className="text-3xl font-semibold text-center text-black mb-10">
          Testimonials
        </h2>
          <div className="relative md:max-w-7xl w-full md:mx-auto md:w-fit">

      {/* Slider */}
      <div className="px-3 hidden md:block ">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="px-3 py-6">
                <div className="w-80 md:w-full flex flex-col items-center border border-gray-300 rounded-lg bg-[#1F1F1F]">
        <img src={slide.img} alt="" className="h-62 rounded-lg" />
        </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Slider */}
      <div className=" block md:hidden">
        <Slider {...settings2}>
          {slides.map((slide) => (
            <div key={slide.id} className="px-3 py-5 ">
              <div className="w-full md:w-full flex flex-col items-center border border-gray-300 rounded-lg bg-[#1F1F1F]">
                <img src={slide.img} alt="" className="h-64 rounded-lg" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    {/* <div className="w-fit mx-auto relative pt-6">
        <Link
            href="/all-blogs"
            className="relative px-6 py-2  rounded-full overflow-hidden group border-2 border-button-dull text-button-dull hover:text-white inline-block"
          >
            <span className="absolute inset-0 bg-button transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
            <span className="relative z-10 group-hover:text-white">
              View All Blogs
            </span>
          </Link>
      </div> */}
      
    </div>    
  );
};

export default TestimonialCarousel;
