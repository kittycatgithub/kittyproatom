import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'
import CustomizeBarSnackBoxB from '../components/CustomizeBarSnackBoxB'



const SelectOptionsSnackBoxB = () => {

    const {selectedPlatter, setSelectedPlatter , navigate} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      Sandwiches: null,
      Snacks: [{item1:null},{item2:null}],
      Beverage: null,
      Desserts: null
    })   

    const snacks = [
    {   name:"Sandwiches",
        value: [{ name:"Cheese Corn", img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/corn-sandwich-recipe.jpg"},
            { name:"Coleslaw", img:"https://static.toiimg.com/photo/53825830.cms"},
            { name:"Paneer Tikka", img:"https://relishfood.in/wp-content/uploads/2025/05/tandoori-paneer.webp"} ]
    },
    {       name:"Snacks",
        value: [{name:"Samosa",img:"https://pataks.ca/wp-content/uploads/2022/05/homemade-vegetable-samosas.jpg"}, 
            {name:"Cutlets",img:"https://www.whiskaffair.com/wp-content/uploads/2020/09/Veg-Cutlet-2-3.jpg"},
            {name:"Kachori",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiD8ch-IdH-cZft0CUeae6vbJzBlmC7ZRldw&s"}, 
            {name:"Dhokla",img:"https://static.toiimg.com/photo/59190882.cms"}, 
            {name:"Sambarwadi",img:"https://www.puvi.co/uploaded_images/1687243291.jpg"}]
    },
    {   name:"Beverage",
        value: [{name:"Paper Boat Juice", img:"https://www.bbassets.com/media/uploads/p/l/321978_11-paper-boat-aamras-mango-fruit-juice.jpg"}, 
            {name:"Frootie", img:"https://dayli.in/cdn/shop/files/SKU-0323_1-1708933545378.jpg?v=1729246954&width=300"}, 
            {name:"Nestle Milkshake", img:"https://assets.shop.loblaws.ca/products/20323668003/b1/en/front/20323668003_front_a01_@2.png"}]
    },
    {   name:"Desserts",
        value: [{name:"Muffin", img:"https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg"}, 
            {name:"Gulab Jamun", img:"https://www.vegrecipesofindia.com/wp-content/uploads/2022/10/gulab-jamun-recipe-01.jpg"}, 
            {name:"Chikki", img:"https://moonrice.net/wp-content/uploads/2023/10/Chikki.jpg"}, 
            {name:"Chocolate", img:"https://royceindia.com/cdn/shop/files/ChocolateBarBlack_1.webp?v=1705398052&width=1080"}]
    }     
    ]

    const [isActive, setIsActive] = useState("Sandwiches")
      const activeSnack = snacks.find(item => item.name === isActive);
    //   console.log(activeSnack)

    const [snackList, setSnackList] = useState([{item1:null},{item2:null}]);


    const handleSelectedOptions = ( category, itemName ) =>{
      category !== "Snacks" ? 
       ( setSelectedOptions( (prev)=> {  
      const updated = {...prev, [category]: itemName};
      console.log("selected options:", updated);
      return updated;
      } )) : 
      setSelectedOptions((prev) => {
    if (category === "Snacks") {
      const [item1, item2] = prev.Snacks;

      // Get current values
      const val1 = Object.values(item1)[0];
      const val2 = Object.values(item2)[0];

      // If already selected → deselect
      if (val1 === itemName) {
        return {
          ...prev,
          Snacks: [{ item1: null }, item2],
        };
      } else if (val2 === itemName) {
        return {
          ...prev,
          Snacks: [item1, { item2: null }],
        };
      }

      // If there's an empty slot → add
      if (!val1) {
        return {
          ...prev,
          Snacks: [{ item1: itemName }, item2],
        };
      } else if (!val2) {
        return {
          ...prev,
          Snacks: [item1, { item2: itemName }],
        };
      }

      // If both filled, replace the first one
      return {
        ...prev,
        Snacks: [{ item1: itemName }, item2],
      };
    }
  });
       setSelectedPlatter(prev => ({
  ...prev,
  selectedOptions: selectedOptions
}));    
    };

    const isTwoSnacksSelected = () => {
      const [item1, item2] = selectedOptions.Snacks;
      return Boolean(item1.item1 && item2.item2);
   };

  return (
    <div>
      { Object.keys(selectedPlatter).length !== 0 ? (
        <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto h-screen  mb-16'>
             {selectedPlatter.keyword == "snacks" && (
             <div className='md:col-span-1 col-span-2 pl-4 text-lg space-y-10 py-10'> 
             <div>
                <button onClick={() => {setIsActive("Sandwiches")}} className={` rounded-md transition ${isActive === "Sandwiches" ? " text-primary" : " text-black"}`}> Sandwiches </button>
                 {selectedOptions.Sandwiches !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Sandwiches}</p> : <p></p> }
             </div>
             <div>
                <button onClick={() => {setIsActive("Snacks")}} className={` rounded-md transition ${isActive === "Snacks" ? " text-primary" : " text-black"}`}> Snacks </button>
                {selectedOptions.Snacks && (
                  <p className="text-xs text-gray-500">
                    {[selectedOptions.Snacks[0].item1, selectedOptions.Snacks[1].item2].filter(Boolean).join(', ')}
                    {console.log(selectedOptions)}
                  </p>
                )}

             </div>
             <div>
                <button onClick={() => {setIsActive("Beverage")}} className={` rounded-md transition ${isActive === "Beverage" ? " text-primary" : " text-black"}`}> Beverage </button>
                {selectedOptions.Beverage !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Beverage}</p> : <p></p> }

             </div>
             <div>
                <button onClick={() => {setIsActive("Desserts")}} className={` rounded-md transition ${isActive === "Desserts" ? " text-primary" : " text-black"}`}> Desserts </button>
                {selectedOptions.Desserts !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Desserts}</p> : <p></p> }

             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300 bg-[#EFF6FF]'>
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
                 {isActive === "Snacks" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
               <button onClick={() => handleSelectedOptions(isActive, snackItem.name)}>
          {
             [selectedOptions.Snacks[0].item1, selectedOptions.Snacks[1].item2].includes(snackItem.name)
              ? (
                  <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>
                    Selected
                  </div>
                ) : (
                  <div className='mt-3 px-5 py-1 border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>
                    Select
                  </div>
                )
          }
        </button>
            </div>
          </div>
        ))}
      </div>            
                 </div> }
                 {isActive === "Beverage" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Beverage !== null && selectedOptions.Beverage ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
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
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
             </div>
            {isTwoSnacksSelected() ? <CustomizeBar /> : <CustomizeBarSnackBoxB/>}
                        
      </div>
       ) : (
        <div className='flex items-center pl-10 md:pl-0 justify-center h-screen md:h-[60vh] bg-[#EFF6FF]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>
       )
      }
      </div>
  )
}

export default SelectOptionsSnackBoxB