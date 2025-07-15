import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'



const SelectOptionsBreakfast = () => {

    const {selectedPlatter, setSelectedPlatter , navigate} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      Menu1: null,
      Menu2: null,
      Menu3: null, 
      Menu4: null,
      Menu5: null,
      Menu6: null,
      BottledWater: "BottledWater"
    })
    

    const snacks = [   
    {   name:"Menu1",
        value: [
          { name:"Idli", img:"https://www.ohmyveg.co.uk/wp-content/uploads/2023/07/Idli-1-scaled-e1722868852202.jpg"},
          { name:"Medu Wada", img:"https://bonmasala.com/wp-content/uploads/2022/12/medu-vada-recipe-500x500.webp"},
          { name:"Sambar", img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg"},
          { name:"Chutney", img:"https://www.mrishtanna.com/wp-content/uploads/2020/01/coconut-chutney.jpg"},
          { name:"Tea", img:"https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg"},
          { name:"Coffee", img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"},
          { name:"Cookies", img:"https://thefirstyearblog.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Chip-Cookies-2024.png"},
            ]
    },
    {       name:"Menu2",
        value: [
          {name:"Aloo Poha",img:"https://www.vegrecipesofindia.com/wp-content/uploads/2010/07/Aloo-Poha-Recipe-Batata-Poha-1.jpg"}, 
          {name:"Chana Rassa",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/chef-aarti-nijapkar20180520202120214.jpeg"}, 
          {name:"Batata Wada",img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/batata-vada-recipe.jpg"}, 
          {name:"Tea",img:"https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg"}, 
          {name:"Coffee",img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"}, 
          {name:"Cookies",img:"https://thefirstyearblog.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Chip-Cookies-2024.png"}, 
           ]
    },
    {   name:"Menu3",
        value: [
           {name:"Misal Pao", img:"https://www.ohmyveg.co.uk/wp-content/uploads/2023/12/Misal-Pav-2-2-e1722869218662.jpg"},
           {name:"Dhokla", img:"https://static.toiimg.com/photo/59190882.cms"},
           {name:"Chutney", img:"https://www.mrishtanna.com/wp-content/uploads/2020/01/coconut-chutney.jpg"},
           {name:"Tea", img:"https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg"},
           {name:"Coffee", img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"},
           {name:"Cookies", img:"https://thefirstyearblog.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Chip-Cookies-2024.png"},
          ]
    },
    {   name:"Menu4",
        value: [
            {name:"Sprouts Usal", img:"https://www.vegrecipesofindia.com/wp-content/uploads/2015/06/mixed-sprouts-curry-recipe-2-500x500.jpg"},
            {name:"Chiwda", img:"https://www.vaidehifoods.com/wp-content/uploads/2019/12/premium-murmura-chiwda.jpg"},
            {name:"Sabudana Khichadi", img:"https://www.ohmyveg.co.uk/wp-content/uploads/2021/01/sabudana-khichdi-e1722865389647-735x735.jpg"},
            {name:"Dahi Chutney", img:"https://static.toiimg.com/thumb/58430288.cms?imgsize=133438&width=800&height=800"},
            {name:"Tea", img:"https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg"},
            {name:"Coffee", img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"},
            {name:"Cookies", img:"https://thefirstyearblog.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Chip-Cookies-2024.png"},
          
          ]
    },      
    {   name:"Menu5",
        value: [
          { name:"Upma", img:"https://www.kuchpakrahahai.in/wp-content/uploads/2016/09/Vegetable-rawa-upma.jpg"},
          { name:"Chutney", img:"https://www.mrishtanna.com/wp-content/uploads/2020/01/coconut-chutney.jpg"},
          { name:"Wada Pao", img:"https://ministryofcurry.com/wp-content/uploads/2024/06/vada-pav-3.jpg"},
          { name:"Lasan Chutney", img:"https://sinfullyspicy.com/wp-content/uploads/2024/06/1200-by-1200-images-1.jpg"},
          { name:"Tea", img:"https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg"},
          { name:"Coffee", img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"},
          { name:"Cookies", img:"https://thefirstyearblog.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Chip-Cookies-2024.png"},
          ]
    },
    {       name:"Menu6",
        value: [
         {name:"Veg Sandwich",img:"https://www.licious.in/blog/wp-content/uploads/2020/12/Grilled-Chicken-Sandwich.jpg"},
         {name:"Mayo Dip",img:"https://www.diprecipecreations.com/wp-content/uploads/2014/04/chipotle-mayonnaise-dip-fi.jpg"},
         {name:"Veg Cutlet",img:"https://www.whiskaffair.com/wp-content/uploads/2020/09/Veg-Cutlet-2-3.jpg"},
         {name:"Muffin",img:"https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"},
         {name:"Tea",img:"https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg"},
         {name:"Coffee",img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454"},
         {name:"Cookies",img:"https://thefirstyearblog.com/wp-content/uploads/2024/08/Peanut-Butter-Chocolate-Chip-Cookies-2024.png"},
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
     <div className='h-auto'>
      { Object.keys(selectedPlatter).length !== 0 ? (
        <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto '>
             {selectedPlatter.keyword == "snacks" || selectedPlatter.keyword == "catering" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-7 md:space-y-6 md:py-10'>  
             <div>
                <button onClick={() => {setIsActive("Menu1")}} className={`pt-5 rounded-md transition  justify-start text-start  ${isActive === "Menu1" ? " text-primary" : " text-black"}`}> Menu 1 </button>
                {/* {selectedOptions.Menu1 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu1}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Menu2")}} className={` rounded-md transition  justify-start text-start  leading-4 ${isActive === "Menu2" ? " text-primary" : " text-black"}`}> Menu 2 </button>
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
                <button className="rounded-md transition text-black"> Bottled Water </button>
             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300 bg-[#EFF6FF] pb-24 md:h-screen'>
                 {isActive === "Sandwiches" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
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
             </div>
                       <CustomizeBar/>
 
      </div>
      ) : (
                <div className='flex items-center pl-10 md:pl-0 justify-center h-screen md:h-[60vh] bg-[#EFF6FF]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>) }
    </div>   
  )
}

export default SelectOptionsBreakfast