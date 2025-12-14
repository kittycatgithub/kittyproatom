import React from 'react'
import MainBanner from '../components/MainBanner'
import BerryFreshHero from '../components/BerryFreshHero'
import OurServices from '../components/OurServices'
import { motion } from "framer-motion";
import FooterBar from '../components/FooterBar';

const TermsConditions = () => {
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
      Terms & Conditions
    </motion.h1>

  </div>
  </div>       
       <div className=" w-screen text-gray-900 bg-gray-50 container">
            <div className="px-6  sm:text-center md:mx-auto max-w-7xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className='py-16'>
             {/* <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-5xl">
                               Our Story
              </h1> */}
              <p className=" sm:mt-5 text-lg">Last Updated: 1st Dec 2025</p>
              <p className="text-gray-900 sm:mt-5 text-lg">
                Welcome to Baron Kitchen. By accessing or ordering from our website, you agree to the following Terms & Conditions. Please read them carefully.
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                1. General
              </h1>
              <p className=" sm:mt-5 text-lg">
                These terms apply to all frozen products sold by Baron Kitchen within Nagpur city limits only.
                We reserve the right to change these terms at any time. Updates will be posted on this page.              
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                2. Eligibility
              </h1>
              <p className=" sm:mt-5 text-lg">
                Customers must: 
                <ul>
                  <li className='ml-5 list-outside list-disc'>Be 18 years or older</li>
                  <li className='ml-5 list-outside list-disc'>Provide accurate contact and delivery details</li>
                  <li className='ml-5 list-outside list-disc'>Place orders only for addresses within Nagpur</li>
                </ul>           
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                3. Product Information
              </h1>
              <p className=" sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>All images and descriptions are for representation only.</li>
                <li className='ml-5 list-outside list-disc'>Actual product weight, size, or appearance may vary slightly.</li>
                <li className='ml-5 list-outside list-disc'>Prices are subject to change without prior notice.</li>           
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                4. Order Acceptance
              </h1>
              <p className=" sm:mt-5 text-lg">
                  An order is confirmed only after:
                  <li className='ml-5 list-outside list-disc'>Successful payment</li>
                  <li className='ml-5 list-outside list-disc'>Verification of delivery location</li>
                  <li className='ml-5 list-outside list-disc'>Stock availability</li><br />

                  We may cancel an order if:
                  <li className='ml-5 list-outside list-disc'>The address is outside Nagpur</li>
                  <li className='ml-5 list-outside list-disc'>Payment fails</li>
                  <li className='ml-5 list-outside list-disc'>Stock is unavailable</li>
                  <li className='ml-5 list-outside list-disc'>A full refund will be issued in such cases</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                5. Payment Terms
              </h1>
              <p className=" sm:mt-5 text-lg">
                  <li className='ml-5 list-outside list-disc'>Payments are accepted through secure third-party gateways</li>
                  <li className='ml-5 list-outside list-disc'>We do not store any card or UPI details</li>
                  <li className='ml-5 list-outside list-disc'>Orders are processed only after payment confirmation</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                6. Delivery Terms
              </h1>
              <p className=" sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>Delivery is available within Nagpur city only</li>
                <li className='ml-5 list-outside list-disc'>Time slots are estimates and may vary due to traffic, weather or operational issues</li>
                <li className='ml-5 list-outside list-disc'>Customers must be available to receive the delivery</li>
                <li className='ml-5 list-outside list-disc'>Re-delivery charges may apply if the customer isunavailable</li>
              </p><br />
              <h1 className="text-2xl pt-5 font-semibold">
                (Full Shipping & Delivery Policy added below.)
              </h1>
              <h1 className="text-2xl pt-5 font-semibold">
                7. Cancellations & Refunds
              </h1>
              <p className=" sm:mt-5 text-lg">
                  Please refer to the Refund & Cancellation Policy section below.(Integrated later in this document.)
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                8. Limitation of Liability
              </h1>
              <p className=" sm:mt-5 text-lg">
                Baron Kitchen is not responsible for:
                <li className='ml-5 list-outside list-disc'>Improper storage of frozen products after delivery</li>
                <li className='ml-5 list-outside list-disc'>Delays caused by external factors beyond our control</li>
                <li className='ml-5 list-outside list-disc'>Misuse of products after purchase</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                9. Governing Law
              </h1>
              <p className=" sm:mt-5 text-lg">
                All disputes are subject to the jurisdiction of Nagpur, Maharashtra.
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                10. Contact
              </h1>
              <p className=" sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>📞 9822990025</li>
                <li className='ml-5 list-outside list-disc'>📧 manager@baronkitchen.com</li>
              </p><br />
              <h1 className="text-2xl pt-5 font-semibold">
                SHIPPING & DELIVERY POLICY
              </h1>
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
              </div>

    </div>
    
</div>
    <div className='block lg:hidden'><FooterBar/></div>
    </div>
  )
}

export default TermsConditions