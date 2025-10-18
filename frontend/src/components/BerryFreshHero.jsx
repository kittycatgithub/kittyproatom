// BerryFreshHero.tsx
"use client";

import { useEffect } from "react";
import { FaSeedling, FaTruck } from "react-icons/fa";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export default function BerryFreshHero() {
    
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.remove('bg-white/90');
                navbar.classList.add('bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.add('bg-white/90');
                navbar.classList.remove('bg-white/95');
            }
        });

        // Simple typewriter effect
        document.addEventListener('DOMContentLoaded', () => {
            const typewriter = document.querySelector('.animate-typewriter');
            typewriter.style.animation = 'typewriter 2s steps(16) forwards, blink 1s steps(16) infinite 2s';
        });

  return (
   
<div>
    <section className="min-h-screen pb-16 md:pb-0 pt-6 md:pt-0 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-12">
        <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
               Baron Kitchen
            </h1>
            
            <div className="h-12 overflow-hidden">
                <h2 className="text-xl text-primary md:text-2xl font-semibold whitespace-nowrap border-r-4 border-r-berry-red pr-2 animate-typewriter animate-blink">
                    A Food Company
                </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg text-justify">
                Baron Kitchen brings bespoke catering to the city of Nagpur.  We cater to private events, corporate food, hospital food services and do home deliveries of orders. 
We also setup Cafes and manage Cafeterias at Corporate offices, Hospitals and Educational Institutions. 
<br/> 
<br/> 
Since 2020 we are also into Food Processing and if you run a food business we make sure that our services and products bring in the needed consistency in your dishes, reduces your running expense and also saves your manpower. 
In short Baron Kitchen is All About Food
                </p>
            
            <div className="flex flex-row gap-4">
                <NavLink to={"/"} onClick={()=> scrollTo(0,0)} className="px-4 md:px-8 py-3 bg-berry-red text-white bg-primary rounded-lg hover:bg-berry-red/90 transition-all transform hover:-translate-y-1 shadow-lg">
                    View Categories
                </NavLink>
                <NavLink to={"/contact"} onClick={()=> scrollTo(0,0)} className="px-8 py-3 border border-berry-red text-berry-red rounded-lg hover:bg-berry-red/10 transition-all transform hover:-translate-y-1">
                    Contact Us
                </NavLink>
            </div>
        </div>
        
        <div className="lg:w-1/2 relative animate-slide-left delay-200">
            <div className="absolute -inset-4 bg-berry-green/20 rounded-3xl -z-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:-rotate-3 transition-transform duration-500">
                <img src="https://blog.cdphp.com/wp-content/uploads/2023/09/01-Header-scaled.jpg" 
                     alt="Fresh strawberries" 
                     className="w-full h-auto object-cover"/>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-300">
                <div className="w-8 h-8 rounded-full bg-berry-red/20 text-berry-red flex items-center justify-center mb-2">
                    <img src="https://cdn-icons-png.flaticon.com/128/9198/9198208.png" alt="" className=""/>  
                </div>
                <h4 className="font-bold text-gray-800 text-sm">All-in-One</h4>
                <p className="text-xs text-gray-600">Catering, Cafés & Deliveries</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg w-36 animate-float delay-400">
                <div className="w-8 h-8 rounded-full bg-berry-green/20 text-berry-green flex items-center justify-center mb-2">
<img src="https://cdn-icons-png.flaticon.com/128/561/561611.png" alt="" className=""/>                </div>
                <h4 className="font-bold text-gray-800 text-sm">Smart Kitchens</h4>
                <p className="text-xs text-gray-600">Consistent Taste, Affordable Cost</p>
            </div>
        </div>
    </section>
</div>

  );
}