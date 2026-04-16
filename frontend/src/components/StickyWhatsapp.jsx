import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const StickyWhatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/919096201044"
        title="WhatsApp Us"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block fixed z-[999] bottom-26 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-green-500 hover:bg-green-600 text-white text-lg font-semibold transition-colors duration-300"
      >
        <FaWhatsapp className="w-6 h-6"/>
        <span className="sr-only">WhatsApp Us</span>
      </a>
    </div>
  );
};

export default StickyWhatsapp;