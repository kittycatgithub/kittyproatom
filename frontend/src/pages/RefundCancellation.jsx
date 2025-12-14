import React from 'react'
import MainBanner from '../components/MainBanner'
import BerryFreshHero from '../components/BerryFreshHero'
import OurServices from '../components/OurServices'
import { motion } from "framer-motion";
import FooterBar from '../components/FooterBar';

const RefundCancellation = () => {
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
      Refund & Cancellation Policy
    </motion.h1>
  </div>
  </div>       
       <div className=" w-screen text-gray-900 bg-gray-50 container">
            <div className="px-6  sm:text-center md:mx-auto max-w-7xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className='py-16'>
              <p className="text-gray-900 sm:mt-5 text-lg">
                At Baron Kitchen, we take great care to maintain the highest quality of our frozen products.
                Since frozen items are perishable and require strict temperature control, we have specific
                guidelines for cancellations and refunds.
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                1. Order Cancellation
              </h1>
              <p className=" sm:mt-5 text-lg">
                Cancellations are allowed only within 30 minutes of placing the order. <br />
                After 30 minutes, the order enters the processing or dispatch stage and cannot be cancelled. <br />
                To cancel within the allowed time, customers must contact us immediately through the helpline
                number or WhatsApp provided on the website.
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                2. Refund Policy
              </h1>
              <p className=" sm:mt-5 text-lg">
                Refunds are provided only in the following situations: <br />
                a) Product Delivered in Damaged Condition <br />
                If the product is delivered with visible damage to the packaging or contents: 
                <ul>
                  <li className='ml-5 list-outside list-disc'>Customers must share photos/videos at the time of delivery.</li>
                  <li className='ml-5 list-outside list-disc'>After verification, a full refund or replacement will be issued.</li>
                </ul>           
              </p>
              <p className=" sm:mt-5 text-lg">
                b) Incorrect Item Delivered <br />
                If the product delivered does not match the order: 
                <ul>
                  <li className='ml-5 list-outside list-disc'>Proof (photo/video) must be shared within 1 hour of delivery.</li>
                  <li className='ml-5 list-outside list-disc'>A replacement will be arranged at no extra cost or a refund will be provided.</li>
                </ul>           
              </p>
              <p className=" sm:mt-5 text-lg">
                c) Product Not Delivered <br />
                If we fail to deliver the order due to internal issues or stock unavailability:
                <ul>
                  <li className='ml-5 list-outside list-disc'>A full refund will be processed immediately.</li>
                </ul>           
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                3. No Refund or Replacement In the Following Cases
              </h1>
              <p className=" sm:mt-5 text-lg">
                <li className='ml-5 list-outside list-disc'>The product was not stored properly by the customer after delivery.</li>
                <li className='ml-5 list-outside list-disc'>Customer changes their mind after delivery.</li>
                <li className='ml-5 list-outside list-disc'>Complaints raised without evidence or raised after 1 hour of delivery.</li>
                <li className='ml-5 list-outside list-disc'>Delays caused by factors beyond our control (traffic, weather, unexpected events).</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                4. Delivery Area
              </h1>
              <p className=" sm:mt-5 text-lg">
                  <li className='ml-5 list-outside list-disc'>We deliver only within Nagpur city limits.</li>
                  <li className='ml-5 list-outside list-disc'>Orders placed outside Nagpur will be cancelled automatically and refunded.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                5. Refund Processing Time
              </h1>
              <p className=" sm:mt-5 text-lg">
                Approved refunds will be processed within 3–5 working days to the original mode of payment.
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                6. Contact for Support
              </h1>
              <p className=" sm:mt-5 text-lg">
                  For cancellations, refunds, or concerns, please contact us at:
                <li className='ml-5 list-outside list-disc'>📞 9822990025</li>
                <li className='ml-5 list-outside list-disc'>📧 manager@baronkitchen.com</li>
              </p>
              </div>

    </div>
    
</div>
    <div className='block lg:hidden'><FooterBar/></div>
    </div>
  )
}

export default RefundCancellation