import React from 'react'
import MainBanner from '../components/MainBanner'
import BerryFreshHero from '../components/BerryFreshHero'
import OurServices from '../components/OurServices'

const About = () => {
  return (
    <div>
       <MainBanner/> 
       <BerryFreshHero/>
       <OurServices/>
       <div className=" w-screen">
    <div className="mx-auto max-w-7xl py-16 sm:py-24">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
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

            <div className="flex items-center w-full h-96 col-span-6">
                <div className="px-6 h-full w-full max-w-2xl col-span-6 flex items-center mx-auto">
                    <div className='w-full h-full'>
                        <div className='w-full h-full'>
                            <iframe frameborder="0" allowfullscreen="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                width="100%" height="100%"
                                src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
                                id="widget2">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    </div>
  )
}

export default About