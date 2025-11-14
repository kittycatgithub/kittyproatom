import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'
import { actualProducts } from '../assets/assets'



const SelectOptions = () => {

    const {selectedPlatter, setSelectedPlatter , navigate, currency} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      Sandwiches: null,
      Snacks: null,
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

 const handleSelectedOptions = (category, itemName) => {
  setSelectedOptions((prev) => {
    const updated = { ...prev, [category]: itemName };

    setSelectedPlatter((prevPlatter) => {
      const newPlatter = {
        ...prevPlatter,
        selectedOptions: updated,
      };
      console.log("Updated selectedPlatter:", newPlatter);
      return newPlatter;
    });

    return updated;
  });
};

  const productDetail = actualProducts.filter( (product)=> product._id === 'gd48g45h' )
  console.log(productDetail)

  return (
      <div>
        { Object.keys(selectedPlatter).length !== 0 ? ( 
          <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto h-screen  mb-16'>
             {selectedPlatter.keyword == "snacks" && (
             <div className='md:col-span-1 col-span-2 pl-4 text-lg space-y-10 py-10'>  
             <div>
                <button onClick={() => {setIsActive("Sandwiches")}} className={` rounded-md transition ${isActive === "Sandwiches" ? " text-primary" : " text-black"}`}> Sandwiches </button>
                 {/* {selectedOptions.Sandwiches !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Sandwiches}</p> : <p></p> } */}
                 <p className='text-xs text-gray-500'>{selectedOptions.Sandwiches !==null ? <span>1</span> : <span>0</span>}/1</p>
             </div>
             <div>
                <button onClick={() => {setIsActive("Snacks")}} className={` rounded-md transition ${isActive === "Snacks" ? " text-primary" : " text-black"}`}> Snacks </button>
                {/* {selectedOptions.Snacks !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Snacks}</p> : <p></p> } */}
                <p className='text-xs text-gray-500'>{selectedOptions.Snacks !==null ? <span>1</span> : <span>0</span>}/1</p>
             </div>
             <div>
                <button onClick={() => {setIsActive("Beverage")}} className={` rounded-md transition ${isActive === "Beverage" ? " text-primary" : " text-black"}`}> Beverage </button>
                {/* {selectedOptions.Beverage !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Beverage}</p> : <p></p> } */}
                <p className='text-xs text-gray-500'>{selectedOptions.Beverage !==null ? <span>1</span> : <span>0</span>}/1</p>
             </div>
             <div>
                <button onClick={() => {setIsActive("Desserts")}} className={` rounded-md transition ${isActive === "Desserts" ? " text-primary" : " text-black"}`}> Desserts </button>
                {/* {selectedOptions.Desserts !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Desserts}</p> : <p></p> } */}
                <p className='text-xs text-gray-500'>{selectedOptions.Desserts !==null ? <span>1</span> : <span>0</span>}/1</p>
             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300 bg-[#EFF6FF]'>
                 {isActive === "Sandwiches" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 py-4">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Snacks !== null && selectedOptions.Snacks ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
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
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
      <hr className='border-t border-themegray/40'/>
                 <div  className=" flex  items-start p-1 lg:p-4 pb-16 lg:pb-18 justify-start font-sans antialiased text-gray-900">
                          <div className="w-full max-w-xs bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
                            {/* <div className="relative lg:h-60 xl:h-65 h-40 overflow-hidden bg-gray-100">
                              <img
                                src={productDetail[0]?.path}  
                                alt="Wireless Headphones"
                                className="w-full lg:h-72 xl:h-72 h-44 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                              />                            
                            </div>                     */}
                            <div className="px-3 lg:px-6 py-3">
                              <div className="text-indigo-600 font-semibold tracking-wide mb-2">{productDetail[0]?.name}</div>
                              {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product.name}</h2> */}
                              {productDetail[0]?.category !== 'catering' && <div>
                                  <hr className='border-t border-gray-200'/>
                              <ul className='list-disc text-xs pl-4 text-themegray pt-1'>
                                {productDetail[0]?.menu.map( (menu, index)=> <li key={index}>{menu}</li> )}
                              </ul>
                                </div>}                              
                              <hr className='border-t border-gray-200 mt-2'/>
                               {/* Price & CTA */}
                              <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
                      <div className="w-full flex justify-between items-center">
                        <div className="text-xl w-3/6 text-gray-900">
                          {currency} {productDetail[0]?.offerPrice} <span className="text-gray-500 text-xs">{productDetail[0]?.unit}</span>
                        </div>    
                </div>
              </div>  
                        <p className='text-xs'>{productDetail[0]?.description}</p>        
          </div>
                          </div>
                              </div>        
             </div>
            <CustomizeBar selectedOptions={selectedOptions}/>
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

export default SelectOptions