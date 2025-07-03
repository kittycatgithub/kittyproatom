import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'



const SelectOptionsShortMenu = () => {

    const {selectedPlatter, setSelectedPlatter , navigate} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null,
      BottledWater: "BottledWater"
    })
    

    const snacks = [   
    {   name:"Menu1",
        value: [
          { name:"Chola Bhatura", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          { name:"Dahi Wada", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          { name:"Gulab Jamun", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          { name:"Veg Pulao", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },
    {       name:"Menu2",
        value: [
          {name:"Pav Bhaji",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          {name:"Tawa Pulao",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          {name:"Boondi Raita",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          {name:"Rasgulla",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            ]
    },
    {   name:"Menu3",
        value: [
         {name:"Masala Dosa", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         {name:"Sambar", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         {name:"Chutney", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         {name:"Curd Rice", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         {name:"Ghee ka Sheera", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          ]
    },
    {   name:"Menu4",
        value: [
           {name:"Veg Noodles", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
           {name:"Veg Manchurian", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
           {name:"Veg Fried Rice", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
           {name:"Ice-cream", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          ]
    },     
    {   name:"Menu5",
        value: [
          { name:"Stuffed Paratha", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          { name:"Veg Biryani", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          { name:"Raita", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          { name:"Chamcham", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
           ]
    },
    {       name:"Menu6",
        value: [
          {name:"Baingan Bharta",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Bhakri",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Gola Bhaat",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Kadhi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Jalebi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         ]
    },
    {   name:"Menu7",
        value: [
          {name:"Paani Poorie", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          {name:"Paapdi Chaat", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          {name:"Ragda Pattis", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          {name:"Shahi Tukada", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            ]
    },
    {   name:"Menu8",
        value: [
            {name:"Mini Burger", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Pizza", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Pasta", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"French Fries", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Chocolate Mousse", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          ]
    }
    ]

    const [isActive, setIsActive] = useState("Menu1")
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
             {selectedPlatter.keyword == "snacks" || selectedPlatter.keyword == "catering" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-4 md:space-y-6 md:py-10'>  
             <div>
                <button onClick={() => {setIsActive("Menu1")}} className={` rounded-md transition  justify-start text-start  ${isActive === "Menu1" ? " text-primary" : " text-black"}`}> Menu1 </button>
                {/* {selectedOptions.Menu1 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu1}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu2")}} className={` rounded-md transition  justify-start text-start  leading-4 ${isActive === "Menu2" ? " text-primary" : " text-black"}`}> Menu2 </button>
                {/* {selectedOptions.Menu2 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu2}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu3")}} className={` rounded-md transition ${isActive === "Menu3" ? " text-primary" : " text-black"}`}> Menu3 </button>
                {/* {selectedOptions.Menu3 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu3}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu4")}} className={` rounded-md transition ${isActive === "Menu4" ? " text-primary" : " text-black"}`}> Menu4 </button>
                {/* {selectedOptions.Menu4 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu4}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu5")}} className={` rounded-md transition ${isActive === "Menu5" ? " text-primary" : " text-black"}`}> Menu5 </button>
                {/* {selectedOptions.Menu5 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu5}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu6")}} className={` rounded-md transition ${isActive === "Menu6" ? " text-primary" : " text-black"}`}> Menu6 </button>
                {/* {selectedOptions.Menu6 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu6}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu7")}} className={` rounded-md transition ${isActive === "Menu7" ? " text-primary" : " text-black"}`}> Menu7 </button>
                {/* {selectedOptions.Menu7 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu7}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu8")}} className={` rounded-md transition ${isActive === "Menu8" ? " text-primary" : " text-black"}`}> Menu8 </button>
                {/* {selectedOptions.Menu8 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu8}</p> : <p></p> } */}
             </div>
             <div>
                <button className="rounded-md transition text-black"> Bottled Water </button>
             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300'>
                 {isActive === "Sandwiches" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
             <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Sandwiches !== null && selectedOptions.Sandwiches ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                 </div> }
                 {isActive === "Menu6" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu6 !== null && selectedOptions.Menu6 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Menu1" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu1 !== null && selectedOptions.Menu1 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Menu2" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu2 !== null && selectedOptions.Menu2 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Menu3" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu3 !== null && selectedOptions.Menu3 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Menu4" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu4 !== null && selectedOptions.Menu4 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Menu5" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu5 !== null && selectedOptions.Menu5 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Menu7" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu7 !== null && selectedOptions.Menu7 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Menu8" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu8 !== null && selectedOptions.Menu8 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Starters" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Starters !== null && selectedOptions.Starters ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Salads" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Salads !== null && selectedOptions.Salads ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Chaats" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Chaats !== null && selectedOptions.Chaats ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "WelcomeDrinks" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.WelcomeDrinks !== null && selectedOptions.WelcomeDrinks ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Chinese" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Chinese !== null && selectedOptions.Chinese ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
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

export default SelectOptionsShortMenu