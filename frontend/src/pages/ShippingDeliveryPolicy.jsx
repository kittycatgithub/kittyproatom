import React from 'react'
import MainBanner from '../components/MainBanner'
import BerryFreshHero from '../components/BerryFreshHero'
import OurServices from '../components/OurServices'
import { motion } from "framer-motion";
import FooterBar from '../components/FooterBar';

const ShippingDeliveryPolicy = () => {
  return (
    <div>
        <div className="relative w-full h-[20vh] md:h-[50vh] min-h-[20vh]">
     {/* <img src="https://static.wixstatic.com/media/45b4de_9938f336732b4ad6ba409f1259dd335a~mv2.jpg/v1/fill/w_1901,h_638,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/45b4de_9938f336732b4ad6ba409f1259dd335a~mv2.jpg" alt="Background Image" className="object-cover object-center w-full h-full" /> */}
     <img src="./top-img.avif" alt="Background Image" className="object-cover object-center w-full h-full" />

  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: -110 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
    >
      Shipping & Delivery Policy
    </motion.h1>
  </div>
  </div>       
       <div className=" w-screen text-gray-900 bg-gray-50">
            <div className="px-6  sm:text-center md:mx-auto max-w-7xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className='py-16'>
             {/* <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-5xl">
                               Our Story
              </h1> */}
              <p className=" sm:mt-5 text-lg">Last Updated: 1st Dec 2025</p>
              <p className="text-gray-900 sm:mt-5 text-lg">
                Welcome to Baron Kitchen. By accessing or ordering from our website, you agree to the following Shipping & Delivery Policy. Please read them carefully.
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                Delivery Within Nagpur Only
              </h1>
              <h1 className="text-2xl pt-5 font-semibold">
                1. Delivery Coverage
              </h1>
              <p className="sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>We deliver frozen products only within Nagpur city limits.</li>
                <li className='ml-5 list-outside list-disc'>Orders outside Nagpur will be cancelled and refunded automatically.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                2. Delivery Time
              </h1>
              <p className="sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>Deliveries are made between 9:00 AM –8:00 PM.</li>
                <li className='ml-5 list-outside list-disc'>Delivery slots are estimates and may vary due to: Traffic, Weather, Operational constraints</li>  
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                3. Delivery Attempts
              </h1>
              <p className="sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>The delivery person will call upon reaching the location.</li>
                <li className='ml-5 list-outside list-disc'>If the customer is unavailable, the delivery may be rescheduled once.</li>
                <li className='ml-5 list-outside list-disc'>Additional attempts may incur re-delivery charges.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                4. Delivery Conditions
              </h1>
              <p className="sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>Customers must check the product upon delivery.</li>
                <li className='ml-5 list-outside list-disc'>Any issue (damage/incorrect item) must be reported immediately at the time of delivery with photo/video proof.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                5. Contact
              </h1>
              <p className=" sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>📞 9822990025</li>
                <li className='ml-5 list-outside list-disc'>📧 manager@baronkitchen.com</li>
              </p><br />
              </div>

    </div>
    
</div>
    <div className='block lg:hidden'><FooterBar/></div>
    </div>
  )
}

export default ShippingDeliveryPolicy