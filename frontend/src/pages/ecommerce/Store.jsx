import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import ProductCard from "../../components/ecommerce/ProductCard";
import { useAppContext } from "../../context/AppContext";
import FooterBarStore from "../../components/FooterBarStore";

const filters = ["Veg Only", "Non Veg Only"];
const categories = [
  "Pooran Poli", 
"Khowa Roti", 
"Aloo Paratha", 
"Mix Veg Paratha", 
"Paneer Paratha", 
"Laccha",
"Methi Paratha",
];

const sortOptions = [
  "Price: High to Low",
  "Price: Low to High",
  "Sort by Latest",
];

export default function Store() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Pooran Poli");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortDrawerOpen, setSortDrawerOpen] = useState(false);
  const { storeProducts } = useAppContext()

  return (
    <div className="relative w-full font-sans">
      {/* Filters and Drawer Icon - Responsive Layout */}
      {/* <div className="flex justify-between items-center p-2 border-b border-b-gray-400 bg-white sticky top-0 z-20 flex-wrap md:flex-nowrap">
        <div className="flex gap-2 flex-wrap md:flex-nowrap md:gap-4">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 border rounded-full text-sm ${
                activeFilter === filter ? "bg-gray-800 text-white" : "bg-gray-100"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <button
            className="px-3 py-1 border rounded-full text-sm flex items-center gap-1 bg-gray-100"
            onClick={() => setSortDrawerOpen(true)}
          >
            <FaFilter /> Sort By
          </button>
        </div>
        <div className="md:ml-auto md:mr-2">
          <button
            className="text-xl p-2"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div> */}

      {/* Categories Horizontal Scroll */}
      <div className="overflow-x-auto whitespace-nowrap bg-gray-50 px-2 py-3 flex gap-4 border-b border-b-gray-400 no-scrollbar">
        <div className="max-w-7xl mx-auto">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`text-sm whitespace-nowrap px-4 py-2 ml-2 rounded-full cursor-pointer ${
                  activeCategory === cat ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Products List - Dummy for now */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">{activeCategory}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              // storeProducts.filter( (product)=> product.inStock ).map( ( product, index )=> <ProductCard key={index}  product={product} /> )
              
              storeProducts.filter( (product)=> product.category === activeCategory ).map( ( product, index )=> <ProductCard key={index}  product={product} /> )
            }
          </div>
        </div>
        {/* Right Side Category Drawer */}
        <div
          className={`fixed top-0 right-0 w-64 bg-white h-full z-30 transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          } shadow-xl`}
        >
          <div className="flex justify-between items-center p-4 mt-16 border-b">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button onClick={() => setDrawerOpen(false)}>
              <IoClose size={24} />
            </button>
          </div>
          <div className="p-4 space-y-3">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`cursor-pointer p-2 rounded ${
                  activeCategory === cat ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setActiveCategory(cat);
                  setDrawerOpen(false);
                }}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* Right Side Sort Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white h-full z-30 transform transition-transform duration-300 ${
          sortDrawerOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Sort By</h2>
          <button onClick={() => setSortDrawerOpen(false)}>
            <IoClose size={24} />
          </button>
        </div>
        <div className="p-4 space-y-3">
          {sortOptions.map((option, idx) => (
            <div
              key={idx}
              className="cursor-pointer p-2 rounded hover:bg-gray-100"
              onClick={() => {
                console.log("Sort by:", option);
                setSortDrawerOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      {/* Drawer Backdrop */}
      {(drawerOpen || sortDrawerOpen) && (
        <div
          className="fixed inset-0 bg-black/5 bg-opacity-30 z-20"
          onClick={() => {
            setDrawerOpen(false);
            setSortDrawerOpen(false);
          }}
        ></div>
      )}
      {/* <div className='block lg:hidden'><FooterBarStore/></div> */}
      <div className='block lg:hidden'><FooterBarStore/></div>
    </div>
  );
}