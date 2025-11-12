import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';
import FooterBar from '../components/FooterBar';
import OurClients from '../components/OurClients';
import TopBestsellers from '../components/TopBestsellers';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {

const {navigate} = useAppContext()

  const cardData = [
    {
      image:
        'https://static.wixstatic.com/media/143d97_4b1686b9a9b94664ad8a3ba221c0c24a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/143d97_4b1686b9a9b94664ad8a3ba221c0c24a~mv2.jpg',
      title: 'Meal Thali & Snack Boxes',
    },
    {
      image:
        'https://imgmediagumlet.lbb.in/media/2023/10/6520072fd766a50bd12a61b5_1696597807795.jpg',
      title: 'Catering',
    },
    {
      image: 'https://www.slkimgs.com/content/images/catering-services-logo.webp',
      title: 'Bulk Delivery',
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2020/10/ZC/EB/MJ/78469313/small-paratha-500x500.jpg',
      title: 'Frozen Products',
    },
  ];

  const [isWishlisted, setIsWishlisted] = useState(false);

  return (<>
  
    <div className="w-full h-full bg-rose-100/30 dark:bg-rose-100/30">
{/* <img className='lg:hidden w-full h-full' src="./baronfinalLogo.jpg"/> */}

    <div className="w-full h-full justify-center items-center py-10">

        <p className="pb-2 text-lg lg:lg:text-2xl  text-center text-orange-500 font-semibold">Category</p>
        <h2 className="text-3xl lg:text-5xl text-center font-serif font-semibold mb-5">Choose Your Best Food</h2>
        <TopBestsellers/>
        {/* <div className="grid lg:grid-cols-4 xl:grid-cols-4 grid-cols-2 gap-6 flex-wrap lg:flex-nowrap justify-center items-center mb-4">      
        <div className='group cursor-pointer' onClick={()=> {
        navigate("/all-menu/meal-thali-snack-boxes");
    window.scrollTo(0, 0);}}>
        <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-[#262525] group-hover:scale-108 transition">     
            <img className="w-[16rem] h-[8rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg"
               src="https://static.wixstatic.com/media/143d97_4b1686b9a9b94664ad8a3ba221c0c24a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/143d97_4b1686b9a9b94664ad8a3ba221c0c24a~mv2.jpg" alt="Card Image" />

            <div className="flex flex-col">
              <h2 className="p-2 lg:p-4 lg:text-xl lg:mb-6 font-semibold group-hover:text-primary cursor-pointer dark:text-white">Meal Thali & Snack Boxes</h2>
            </div>
        </div>
        </div>
        <div className='group cursor-pointer' onClick={()=> {
          navigate("/all-menu/catering");
          scrollTo(0,0)}}>
        <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-[#262525]  group-hover:scale-108 transition">
            
            <img className="w-[16rem] h-[8rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://imgmediagumlet.lbb.in/media/2023/10/6520072fd766a50bd12a61b5_1696597807795.jpg" alt="Card Image" />

            <div className="flex flex-col">              

                <h2 className="p-2 lg:p-4 lg:mb-7 mb-6 lg:text-xl font-semibold group-hover:text-primary cursor-pointer dark:text-white">Catering</h2>
                
                </div>
        </div>
        </div>
        <div className='group cursor-pointer' onClick={()=> 
          {navigate("/select-bulk/ek56j67k");
           scrollTo(0,0)}
          }>
        <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-[#262525]  group-hover:scale-108 transition">
            <img className="w-[16rem] h-[8rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://www.slkimgs.com/content/images/catering-services-logo.webp" alt="Card Image" />

            <div className="flex flex-col">
                <h2 className="p-2 lg:p-4 lg:mb-7 mb-6 lg:text-xl font-semibold group-hover:text-primary cursor-pointer dark:text-white">Bulk Delivery</h2>
                
                </div>
        </div>
        </div>
        <div className='group cursor-pointer' onClick={()=> {
          navigate("/store/");
          scrollTo(0,0)
          }}>
        <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-[#262525]  group-hover:scale-108 transition">
            
            <img className="w-[16rem] h-[8rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://5.imimg.com/data5/SELLER/Default/2020/10/ZC/EB/MJ/78469313/small-paratha-500x500.jpg" alt="Card Image" />

            <div className="flex flex-col">
              <h2 className="p-2 lg:p-4 lg:mb-7 mb-6 lg:text-xl font-semibold group-hover:text-primary cursor-pointer dark:text-white">Frozen Products</h2>
                
                </div>
        </div>
        </div>
</div> */}
    </div>
</div>
<OurClients/>
<TestimonialCarousel/>
{/* <BestSeller/> */}
{/* <BottomBanner/> */}
<div className='block lg:hidden'><FooterBar/></div>
  </>
  )
}

export default Home