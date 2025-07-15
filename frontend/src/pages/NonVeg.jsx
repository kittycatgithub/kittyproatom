import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'

const NonVeg = () => {

    const {selectedPlatter, setSelectedPlatter , navigate} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      ChickenCurry:null,
      MuttonCurry:null,
      ChickenBiryani:null,
      MuttonBiryani:null,
      Chapati:null,
      LacchaParatha:null,
      Desserts: null,
    })
    // ChickenCurry MuttonCurry ChickenBiryani MuttonBiryani Chapati LacchaParatha Desserts

    const snacks = [   
    {   name:"ChickenCurry",
        value: [{ name:"Chicken Curry", img:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg"},
            ]
    },
    {   name:"MuttonCurry",
        value: [{ name:"Mutton Curry", img:"https://myannoyingopinions.com/wp-content/uploads/2021/06/mutton-curry-with-yogurt.jpg?w=584"},
            ]
    },
    {   name:"ChickenBiryani",
        value: [{ name:"Chicken Biryani", img:"https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg"},
            ]
    },
    {   name:"MuttonBiryani",
        value: [{ name:"Mutton Biryani", img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"},
            ]
    },
    {   name:"Chapati",
        value: [{ name:"Chapati", img:"https://www.tasteofhome.com/wp-content/uploads/2024/12/Chapati-Breads_EXPS_FT24_136906_JR_1213_2.jpg"},
            ]
    },
    {   name:"LacchaParatha",
        value: [{ name:"Laccha Paratha", img:"https://5.imimg.com/data5/ANDROID/Default/2021/8/YR/CH/UF/26801620/1628707032485-jpg-500x500.jpg"},
            ]
    },
    {       name:"Desserts",
        value: [
          {name:"Gulab Jamun",img:"https://www.vegrecipesofindia.com/wp-content/uploads/2022/10/gulab-jamun-recipe-01.jpg"},
{name:"Kala Jamun",img:"https://www.cookwithmanali.com/wp-content/uploads/2020/10/Kala-Jamun-500x500.jpg"},
{name:"Rasgulla",img:"https://prashantcorner.com/cdn/shop/products/RASGULLA_2457ea2c-400a-4130-b540-b77966e63d07.jpg?v=1673073151&width=1946"},
{name:"Chamcham",img:"https://cdn.ready-market.com.tw/21cd62de/Templates/pic/ANKO-Cham-Cham-1200x1200.jpg?v=4f1f0a97"},
{name:"Rasbhari",img:"https://www.govindam.co.in/wp-content/uploads/2025/01/Rasbhari-Sweet-3.webp"},
{name:"Rasmalai",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s"},
{name:"Angoorie Rasmalai",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s"},
{name:"Puran Poli",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s"},
{name:"Khoa Poli",img:"https://cdn.dotpe.in/longtail/store-items/7916910/9P6QP42e.jpeg"},
{name:"Til Poli",img:"https://www.recipesworld.co.uk/images/167335704149113316.webp"},
{name:"Gajar Ka Halwa",img:"https://www.whiskaffair.com/wp-content/uploads/2019/05/Gajar-Ka-Halwa-2-3.jpg"},
{name:"Lauki Ka Halwa",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNhRjiByE7EtuOPNAwDrfnHaCkUJ5NOCHwg&s"},
{name:"Moong Daal Halwa",img:"https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-rajasthani-moong-dal-halwa.jpg"},
{name:"Basundi",img:"https://www.cookingcarnival.com/wp-content/uploads/2023/03/Basundi-4.jpg"},
{name:"Any Type of Kheer",img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg"},
{name:"Shahi Tukda",img:"https://www.whiskaffair.com/wp-content/uploads/2019/03/Shahi-Tukda-2-3.jpg"},
{name:"Jalebi",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/shubhi-mishra20171004002157988.jpeg"},
{name:"Rabadi",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/renu-chandratre2018032020403041.jpeg"},
{name:"Ice Cream",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HhedQdurLUbPn70JFdb0jldFgv7dZQnYBw&s"},
{name:"Shree khand",img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/03/shrikhand-featured.jpg"},
{name:"Amrakhand",img:"https://ghodkesweets.com/wp-content/uploads/2020/10/amrakhand@2x.jpg"},
{name:"Fruit Custard",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqTmswFi3QeHHPSPwF2XVWiyhJiNGYeserQ&s"},
{name:"Mousse",img:"https://fullofplants.com/wp-content/uploads/2018/04/light-and-fluffy-aquafaba-strawberry-mousse-vegan-gluten-free-thumb-10.jpg"},
{name:"Cheese Cake",img:"https://preppykitchen.com/wp-content/uploads/2022/07/cheesecake-blog-2.jpg"},
{name:"Fruit Tart",img:"https://richanddelish.com/wp-content/uploads/2023/05/mini-fruit-tarts-2.jpg"}
   ]
    },
    ]

    const [isActive, setIsActive] = useState("ChickenCurry")
      const activeSnack = snacks.find(item => item.name === isActive);
    //   console.log(activeSnack)

    const handleSelectedOptions = ( category, itemName ) =>{
      setSelectedOptions( (prev)=> {  
      const updated = {...prev, [category]: itemName};
      console.log("selected options:", updated);
      return updated;
      } )
      setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions })  )
      //  console.log("Hello",selectedOptions)
    };

  return (
     <div className='bg-[#EFF6FF] min-h-screen '>
      { Object.keys(selectedPlatter).length !== 0 ? (
         <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto h-auto pb-16 md:pb-16'>
             {selectedPlatter.category == "bulk-delivery" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-7 md:space-y-6 pt-10 md:py-10'>  
             <div>  
                <button onClick={() => {setIsActive("ChickenCurry")}} className={` rounded-md transition  justify-start text-start  ${isActive === "ChickenCurry" ? " text-primary" : " text-black"}`}> Chicken Curry </button>
                {/* {selectedOptions.ChickenCurry !== null ? <p className='text-xs text-gray-500'>{selectedOptions.ChickenCurry}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("MuttonCurry")}} className={` rounded-md transition  justify-start text-start  leading-4 ${isActive === "MuttonCurry" ? " text-primary" : " text-black"}`}> Mutton Curry </button>
                {/* {selectedOptions.MuttonCurry !== null ? <p className='text-xs text-gray-500'>{selectedOptions.MuttonCurry}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("ChickenBiryani")}} className={` rounded-md transition ${isActive === "ChickenBiryani" ? " text-primary" : " text-black"}`}> Chicken Biryani </button>
                {/* {selectedOptions.ChickenBiryani !== null ? <p className='text-xs text-gray-500'>{selectedOptions.ChickenBiryani}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("MuttonBiryani")}} className={` rounded-md transition ${isActive === "MuttonBiryani" ? " text-primary" : " text-black"}`}> Mutton Biryani </button>
                {/* {selectedOptions.MuttonBiryani !== null ? <p className='text-xs text-gray-500'>{selectedOptions.MuttonBiryani}</p> : <p></p> } */}
             </div>
            {/* ChickenCurry MuttonCurry ChickenBiryani MuttonBiryani Chapati LacchaParatha Desserts */}
             <div>
                <button onClick={() => {setIsActive("Chapati")}} className={` rounded-md transition ${isActive === "Chapati" ? " text-primary" : " text-black"}`}> Chapati </button>
                {/* {selectedOptions.Chapati !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Chapati}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("LacchaParatha")}} className={`leading-4 text-left rounded-md transition ${isActive === "LacchaParatha" ? " text-primary" : " text-black"}`}> Laccha Paratha </button>
                {/* {selectedOptions.LacchaParatha !== null ? <p className='text-xs text-gray-500'>{selectedOptions.LacchaParatha}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Desserts")}} className={` rounded-md transition ${isActive === "Desserts" ? " text-primary" : " text-black"}`}> Desserts </button>
                {/* {selectedOptions.Desserts !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Desserts}</p> : <p></p> } */}
             </div>
             </div>             
             )} 
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300'>
                 {isActive === "ChickenCurry" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
             <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.ChickenCurry !== null && selectedOptions.ChickenCurry ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                 </div> }
                 {isActive === "Desserts" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Desserts !== null && selectedOptions.Desserts ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                 </div> } 
                 {isActive === "MuttonCurry" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.MuttonCurry !== null && selectedOptions.MuttonCurry ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>                    
                 </div> } 
                 {isActive === "ChickenBiryani" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.ChickenBiryani !== null && selectedOptions.ChickenBiryani ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>                
                 </div> } 
                 {isActive === "MuttonBiryani" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.MuttonBiryani !== null && selectedOptions.MuttonBiryani ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>              
                 </div> } 
                 {isActive === "Chapati" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Chapati !== null && selectedOptions.Chapati ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
{/* ChickenCurry MuttonCurry ChickenBiryani MuttonBiryani Chapati LacchaParatha Desserts */}                     
                 </div> } 
                 {isActive === "LacchaParatha" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.LacchaParatha !== null && selectedOptions.LacchaParatha ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
      </div> } 
    </div>
    <CustomizeBar/>
      </div>
      ) : (
                <div className='flex items-center pl-10 md:pl-0 justify-center h-screen md:h-[60vh]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>) }
    </div>
  )
}
export default NonVeg