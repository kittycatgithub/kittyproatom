import React from "react";
import { PiPhoneCall } from "react-icons/pi";


const StickyCallUs = () => {
  return (
    <div>
      <a
        href="tel:+919096201044"
        title="Call Us"
        className="hidden md:block fixed z-[999] bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-primary hover:bg-primary text-white text-lg font-semibold transition-colors duration-300"
      >
        <PiPhoneCall className="w-6 h-6"/>
        <span className="sr-only">Call Us</span>
      </a>
    </div>
  );
};

export default StickyCallUs;
