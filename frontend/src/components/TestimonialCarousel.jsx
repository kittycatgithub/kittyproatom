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
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "Glass Partition",
      desc: "Glass Partition We offer high utility range of Glass Partition. Also manufacturer and supplier of Glass Partition in Nagpur.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "Glass Mandir Manufacturer",
      desc: "Glass Mandir Manufacturer Dadakrupa Glass Pvt Ltd Phone: 08071 300 129 Dadakrupa Glass Pvt Ltd is a leading manufacturer and supplier of Glass Mandir in nagpur",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "Glass Relling",
      desc: "Glass Relling Dadakrupa Glass Pvt Ltd Phone: 08071 300 129 Dadakrupa Glass Pvt Ltd Nagpur is a leading manufacturer and supplier of Glass Relling in nagpur",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "Exterior Glass Work",
      desc: "We are a leading Manufacturer of Mall Exterior Glass Work, High Quality Spider Work, House Exterior Glass Work, Spider Fitting, Frame Glass Partition and Rope Spider Fitting from Nagpur, India.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "Glass Partition",
      desc: "Frame Glass Partition in nagpur Product Details: Brand Saint Gobain Size 4 mm to 19 mm Color Natural, Transparent We manufacture a high quality range of Frame glass partition which is designed and developed using many kinds of glass.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "House Exterior Glass Work",
      desc: "House Exterior Glass Work We specialize in manufacturing world class projects , House Exterior Glass Work is project have done under the supervision of a team of experienced professionals using fine quality raw material. Contact: 08071 300 129",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "Mall Exterior Glass Work",
      desc: "Mall Exterior Glass Work We are a leading Manufacturer of Mall Exterior Glass Work, High Quality Spider Work, House Exterior Glass Work, Spider Fitting, Frame Glass Partition and Rope Spider Fitting from Nagpur, India. Contact 08071 300 129",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
      title: "Mall Exterior Glass Work",
      desc: "One of our project is Mall Exterior Glass Work. The project provided by us has created a niche in the market and added us a long list of reputed clients across the country. For information please check out our Products Gallery and contact us.",
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
                <div className="w-80 md:w-full flex flex-col items-center border border-gray-300 p-10 rounded-lg bg-white">
        <img className="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="userImage2"/>
        <h2 className="text-lg text-gray-900 font-medium mt-2">Richard Nelson</h2>
        <p className="text-sm text-gray-500">Content Creator</p>
        <div className="flex items-center justify-center mt-3 gap-1">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
        </div>
        <p className="text-center text-[15px] mt-3 text-gray-500">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
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
              <div className="w-80 md:w-full flex flex-col items-center border border-gray-300 p-10 rounded-lg bg-white">
        <img className="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="userImage2"/>
        <h2 className="text-lg text-gray-900 font-medium mt-2">Richard Nelson</h2>
        <p className="text-sm text-gray-500">Content Creator</p>
        <div className="flex items-center justify-center mt-3 gap-1">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
            </svg>
        </div>
        <p className="text-center text-[15px] mt-3 text-gray-500">I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
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
