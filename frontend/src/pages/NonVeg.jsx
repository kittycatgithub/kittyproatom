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
        value: [{ name:"Chicken Curry", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },
    {   name:"MuttonCurry",
        value: [{ name:"Mutton Curry", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },
    {   name:"ChickenBiryani",
        value: [{ name:"Chicken Biryani", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },
    {   name:"MuttonBiryani",
        value: [{ name:"Mutton Biryani", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },
    {   name:"Chapati",
        value: [{ name:"Chapati", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },
    {   name:"LacchaParatha",
        value: [{ name:"Laccha Paratha", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },
    {       name:"Desserts",
        value: [
          {name:"Gulab Jamun",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Kala Jamun",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rasgulla",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Chamcham",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rasbhari",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rasmalai",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Angoorie Rasmalai",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Puran Poli",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Khoa Poli",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Til Poli",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Gajar Ka Halwa",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Lauki Ka Halwa",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Moong Daal Halwa",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Basundi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Any Type of Kheer",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Shahi Tukda",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Jalebi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rabadi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Ice Cream",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Shree khand",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Amrakhand",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Fruit Custard",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Mousse",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Cheese Cake",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Fruit Tart",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
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
     <div className='bg-[#EFF6FF]'>
      { Object.keys(selectedPlatter).length !== 0 ? (
         <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto h-full mb-16'>
             {selectedPlatter.category == "bulk-delivery" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-4 md:space-y-6 md:py-10'>  
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
                <button onClick={() => {setIsActive("LacchaParatha")}} className={` rounded-md transition ${isActive === "LacchaParatha" ? " text-primary" : " text-black"}`}> Laccha Paratha </button>
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
                <div className='flex items-center justify-center h-[60vh]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>) }
    </div>
  )
}
export default NonVeg