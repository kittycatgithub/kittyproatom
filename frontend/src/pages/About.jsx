import React from 'react'
import MainBanner from '../components/MainBanner'
import BerryFreshHero from '../components/BerryFreshHero'
import OurServices from '../components/OurServices'
import { motion } from "framer-motion";
import FooterBar from '../components/FooterBar';

const About = () => {
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
      About Us
    </motion.h1>

  </div>
  </div>
       
       <BerryFreshHero/>
       <OurServices id="services"/>
       {/* <div className=" w-screen">
    <div className="mx-auto">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2">
            <div className="items-center w-full col-span-6">
                <div className="h-full w-full col-span-6 flex items-center mx-auto">
                    <div className='w-full h-full'>
                        <div className='w-[780px] h-[780px] object-cover'>
                            <img src="./our-story.avif" alt="chef"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6  sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div className="">
                    <div className="">
                        <div className="">
                            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-5xl">
                               Our Story
                            </h1>
                        </div>

                        <p className="text-gray-700 sm:mt-5 text-lg text-justify">
                            Baron Kitchen is a specialized catering division of Baron Integrated Services Pvt. Ltd. which started with a modest beginning of serving tiffins to four individual customers in July 2010 and since then, has grown rapidly and is currently serving more than 30+ Corporate and 4 Hospitals for their various food requirements ranging from packed food to buffet meals.
<br/>
<br/>
We started our journey from a 12 x 15 sq feet Kitchen and today have a total Cooking space of more than 20,000 Sq Feet spread across Base Kitchens, Pantries and a Processing Unit. 
We are a bunch of Hardworking and Passionate people who take our work very seriously. 

Good People, Good Food that's what we are.
                        </p>
                    </div>
                </div>
            </div>          
        </div>
    </div>
    
</div> */}
<div className="flex flex-wrap lg:px-10">
        <img src="./our-story.avif" alt="Leafs" className="w-full h-full object-cover sm:h-screen sm:w-6/12"/>

    <div className="w-full md:w-6/12">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0 bg-orange-50">
           <div className="px-6  sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div className="">
                    <div className="">
                        <div className="">
                            <h1 className="text-4xl font-normal tracking-tight text-orange-600 sm:text-5xl md:text-5xl">
                               Our Story
                            </h1>
                        </div>

                        <p className="text-gray-700 sm:mt-5 text-lg text-justify">
                            Baron Kitchen is a specialized catering division of Baron Integrated Services Pvt. Ltd. which started with a modest beginning of serving tiffins to four individual customers in July 2010 and since then, has grown rapidly and is currently serving more than 30+ Corporate and 4 Hospitals for their various food requirements ranging from packed food to buffet meals.
<br/>
<br/>
We started our journey from a 12 x 15 sq feet Kitchen and today have a total Cooking space of more than 20,000 Sq Feet spread across Base Kitchens, Pantries and a Processing Unit. 
We are a bunch of Hardworking and Passionate people who take our work very seriously. 

Good People, Good Food that's what we are.
                        </p>
                    </div>
                </div>
            </div>
        </header>
      </div>
    </div>
    
  </div>
{/* <MainBanner/>  */}
<section className="w-full bg-gray-50 py-12 px-6 md:px-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-10">
          Watch Our Story
        </h2>
        {/* Responsive Video */}
        <div className="relative w-full max-w-5xl aspect-video overflow-hidden shadow-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="./Gravy_Ad_Final.mp4"
            // autoPlay
            // loop
            playsInline
            controls
          />
        </div>
      </div>
    </section>
    <div className='block lg:hidden'><FooterBar/></div>
    </div>
  )
}

export default About