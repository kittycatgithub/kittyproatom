import React from 'react'
import MainBanner from '../components/MainBanner'
import BerryFreshHero from '../components/BerryFreshHero'
import OurServices from '../components/OurServices'
import { motion } from "framer-motion";
import FooterBar from '../components/FooterBar';

const PrivacyPolicy = () => {
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
      Privacy Policy
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
                At Baron Kitchen, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect customer data when you place orders on our website.
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                1. Information We Collect
              </h1>
              <p className=" sm:mt-5 text-lg">
                We collect the following types of information:              
              </p>
              <p className="sm:mt-5 text-lg">
                a) Personal Information
                <ul>
                  <li className='ml-5 list-outside list-disc'>Full Name</li>
                  <li className='ml-5 list-outside list-disc'>Mobile Number</li>
                  <li className='ml-5 list-outside list-disc'>Email Address</li>
                  <li className='ml-5 list-outside list-disc'>Delivery Address (Nagpur only)</li>
                </ul>              
              </p>
              <p className="sm:mt-5 text-lg">
                b) Order & Payment Information
                <ul>
                  <li className='ml-5 list-outside list-disc'>Items ordered, order history, and order preferences</li>
                  <li className='ml-5 list-outside list-disc'>Payment method details (Note: We do not store card or UPI details; payments are processed through secure third-party gateways)</li>
                </ul>              
              </p>
              <p className="sm:mt-5 text-lg">
                c) Technical Information
                <ul>
                  <li className='ml-5 list-outside list-disc'>IP address</li>
                  <li className='ml-5 list-outside list-disc'>Browser type and device information</li>
                  <li className='ml-5 list-outside list-disc'>Cookies to enhance website performance and user experience</li>
                </ul>              
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                2. How We Use Your Information
              </h1>
              <p className=" sm:mt-5 text-lg">
                We use your information for: 
                <ul>
                  <li className='ml-5 list-outside list-disc'>Processing and delivering your orders</li>
                  <li className='ml-5 list-outside list-disc'>Sending order confirmations, delivery updates, and support communication</li>
                  <li className='ml-5 list-outside list-disc'>Improving our website and service quality</li>
                  <li className='ml-5 list-outside list-disc'>Internal record keeping and customer service</li>
                  <li className='ml-5 list-outside list-disc'>Handling refunds, cancellations, and product-related concerns</li>
                  <li className='ml-5 list-outside list-disc'>We do not sell, rent, or trade your personal information with any third party.</li>
                </ul>           
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                3. Sharing of Information
              </h1>
              <p className=" sm:mt-5 text-lg">
                We may share your information only with:
                <li className='ml-5 list-outside list-disc'>Delivery partners to deliver your order within Nagpur</li>
                <li className='ml-5 list-outside list-disc'>Payment gateway providers for secure payments</li>
                <li className='ml-5 list-outside list-disc'>Customer support team to assist you</li>
                <li className='ml-5 list-outside list-disc'>Legal authorities only if required by law or to comply with a legal process</li>
                <li className='ml-5 list-outside list-disc'>All partners are required to protect your information and use it only for service-related purposes.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                4. Data Protection & Security
              </h1>
              <p className=" sm:mt-5 text-lg">
                  We implement suitable technical and organizational measures to protect your information such as:
                  <li className='ml-5 list-outside list-disc'>Encrypted payment processing</li>
                  <li className='ml-5 list-outside list-disc'>Secure server environments</li>
                  <li className='ml-5 list-outside list-disc'>Restricted access to customer data</li>
                  <li className='ml-5 list-outside list-disc'>Regular internal reviews of data handling</li>
                  <li className='ml-5 list-outside list-disc'>However, no method of internet transmission is 100% secure. Customers use the website at their own discretion.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                5. Cookies
              </h1>
              <p className=" sm:mt-5 text-lg">
                Our website uses cookies to:
                  <li className='ml-5 list-outside list-disc'>Improve website performance</li>
                  <li className='ml-5 list-outside list-disc'>Remember user preferences</li>
                  <li className='ml-5 list-outside list-disc'>Provide a smoother and more personalized browsing experience</li>
                  <li className='ml-5 list-outside list-disc'>Users may disable cookies through browser settings, but some features may not function properly.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                6. Third-Party Links
              </h1>
              <p className=" sm:mt-5 text-lg">
                Our website may contain links to external websites. We are not responsible for the privacy practices or content of those websites.

              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                7. Your Rights
              </h1>
              <p className=" sm:mt-5 text-lg">
                Customers have the right to:
                 <li className='ml-5 list-outside list-disc'>Access the personal data we hold</li>
                 <li className='ml-5 list-outside list-disc'>Request correction of incorrect or outdated information</li>
                 <li className='ml-5 list-outside list-disc'>Request deletion of data (subject to legal or transactional requirements)</li>
                 <li className='ml-5 list-outside list-disc'>Withdraw consent for communication</li>
                 <li className='ml-5 list-outside list-disc'>To exercise your rights, contact us using the details below.</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                8. Data Retention
              </h1>
              <p className=" sm:mt-5 text-lg">
                We retain customer information only aslong as necessary for:
                <li className='ml-5 list-outside list-disc'>Order delivery and legal compliance</li>
                <li className='ml-5 list-outside list-disc'>Accounting and record keeping</li>
                <li className='ml-5 list-outside list-disc'>Service improvement and customer support</li>
              </p>
              <h1 className="text-2xl pt-5 font-semibold">
                9. Contact Us
              </h1>
              <p className=" sm:mt-5 text-lg">
                For any questions related to our Privacy Policy or your personal data, please contact:
                <li className='ml-5 list-outside list-disc'>📞 9822990025</li>
                <li className='ml-5 list-outside list-disc'>📧 manager@baronkitchen.com</li>
                <li className='ml-5 list-outside list-disc'>🏠 Baron Kitchen, Plot No 8B2, Sector 21, MIHAN (Outside SEZ), Nagpur, Khapri Maharashtra -441108</li>
              </p>
              </div>

    </div>
    
</div>
    <div className='block lg:hidden'><FooterBar/></div>
    </div>
  )
}

export default PrivacyPolicy