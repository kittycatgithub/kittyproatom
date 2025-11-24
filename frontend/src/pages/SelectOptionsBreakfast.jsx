import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'
import toast from 'react-hot-toast'
import { actualProducts } from '../assets/assets'

const SelectOptionsBreakfast = () => {

    const {selectedPlatter, setSelectedPlatter , navigate, currency} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      Menu1: null,
      Menu2: null,
      Menu3: null, 
      Menu4: null,
      Menu5: null,
      Menu6: null,
      AdditionalOptions: null,
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

    // const handleSelectedOptions = ( category, itemName ) =>{
    //   setSelectedOptions( (prev)=> {  
    //   const updated = {...prev, [category]: itemName};
    //   console.log("selected options:", updated);
    //   return updated;
    //   } )
    //   setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions })  )
    //   //  console.log("Hello",selectedOptions)
    // };
    const handleSelectedOptions = ( isActive ) =>{
      const selectedMenu = snacks.filter( (item)=> item.name === isActive  )
      console.log(selectedMenu)
       if( isActive === "Menu1" ){
        setSelectedOptions( {
          Menu1: ["Idli", "Medu Wada", "Sambar", "Chutney", "Tea", "Coffee", "Cookies", "BottledWater"],
          Menu2: null,
          Menu3: null,
          Menu4: null,
          Menu5: null,
          Menu6: null, 
      } )
      }   
       if( isActive === "Menu2" ){
        setSelectedOptions( {
          Menu1: null,
          Menu2: [
          "Aloo Poha", "Chana Rassa", "Batata Wada", "Tea", "Coffee", "Cookies", "BottledWater"],
          Menu3: null,
          Menu4: null,
          Menu5: null,
          Menu6: null, 
      } )
      }   
       if( isActive === "Menu3" ){
        setSelectedOptions( {
          Menu1: null,
          Menu2: null,
          Menu3: [
          "Misal Pao", "Dhokla", "Chutney", "Tea", "Coffee", "Cookies", "BottledWater" ],
          Menu4: null,
          Menu5: null,
          Menu6: null, 
      } )
      }   
       if( isActive === "Menu4" ){
        setSelectedOptions( {
          Menu1: null,
          Menu2: null,
          Menu3: null,
          Menu4: [
          "Sprouts Usal", "Chiwda", "Sabudana Khichadi", "Dahi Chutney", "Tea", "Coffee", "Cookies", "BottledWater" ],
          Menu5: null,
          Menu6: null, 
      } )
      }   
       if( isActive === "Menu5" ){
        setSelectedOptions( {
          Menu1: null,
          Menu2: null,
          Menu3: null,
          Menu4: null,
          Menu5: [
          "Upma", "Chutney", "Wada Pao", "Lasan Chutney", "Tea", "Coffee", "Cookies", "BottledWater"],
          Menu6: null, 
      } )
      }   
       if( isActive === "Menu6" ){
        setSelectedOptions( {
          Menu1: null,
          Menu2: null,
          Menu3: null,
          Menu4: null,
          Menu5: null,
          Menu6: [
          "Veg Sandwich", "Mayo Dip", "Veg Cutlet", "Muffin", "Tea", "Coffee", "Cookies", "BottledWater" ], 
      } )
      }     
      // setSelectedOptions( (prev)=> {  
      // const updated = {...prev, [category]: itemName};
      // console.log("selected options:", updated);
      // return updated;
      // } )
      setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions }))
      toast.success(`${isActive} is Selected`)
    };
    useEffect( ()=> {
        setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions })  )
        console.log("selectedOptions",selectedOptions)
    }, [selectedOptions] )

    const productDetail = actualProducts.filter( (product)=> product._id === "ek54j45k" )
    // console.log(productDetail[0])

  return (
     <div className='h-auto bg-[#EFF6FF]'>
      {/* { Object.keys(selectedPlatter).length !== 0 ? ( */}
      { Object.keys(selectedPlatter).length !== 0 && selectedPlatter._id !== undefined ? (
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
                <button className="rounded-md transition text-black text-left"> Bottled Water</button>
             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300 bg-[#EFF6FF] pb-24 md:h-screen'>
                 {isActive === "Sandwiches" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4">
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
                  
                 {isActive === "Menu6" && <div className='pb-4'>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu6 !== null && selectedOptions.Menu6 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div>
          </div>
        ))}
      </div><div className='w-fit mx-auto'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.Menu6 !== null ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected Menu 6</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 6</div>}
        </button> 
      </div></div> } 
                 {isActive === "Menu1" && <div className='pb-4'>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu1 !== null && selectedOptions.Menu1 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div>
          </div>
        ))}
      </div>
      <div className='w-fit mx-auto'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.Menu1 !== null ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected Menu 1</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 1</div>}
        </button> 
      </div></div> } 
                 {isActive === "Menu2" && <div className='pb-4'>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu2 !== null && selectedOptions.Menu2 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div>
          </div>
        ))}
      </div><div className='w-fit mx-auto'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.Menu2 !== null ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected Menu 2</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 2</div>}
        </button> 
      </div></div> } 
                 {isActive === "Menu3" && <div className='pb-4'>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu3 !== null && selectedOptions.Menu3 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div>
          </div>
        ))}
      </div><div className='w-fit mx-auto'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.Menu3 !== null ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected Menu 3</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 3</div>}
        </button> 
      </div></div> } 
                 {isActive === "Menu4" && <div className='pb-4'>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu4 !== null && selectedOptions.Menu4 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div>
          </div>
        ))}
      </div><div className='w-fit mx-auto'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.Menu4 !== null ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected Menu 4</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 4</div>}
        </button> 
      </div></div> } 
                 {isActive === "Menu5" && <div  className='pb-4'>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu5 !== null && selectedOptions.Menu5 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div></div>
        ))}
      </div>
      <div className='w-fit mx-auto'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.Menu5 !== null ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected Menu 5</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 5</div>}
        </button> 
      </div></div> }
      <hr className='border-t border-themegray/40'/>
                 <div  className=" flex  items-start p-1 lg:p-4 pb-16 lg:pb-18 justify-start font-sans antialiased text-gray-900">
                          <div className="w-full max-w-xl bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
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
                             <div>
                                  <hr className='border-t border-gray-200'/>
                              <ul className='list-disc text-xs pl-2 lg:pl-4 text-themegray pt-1'>
                                {productDetail[0]?.menu.map( (menu, index)=> <li key={index}>{menu}</li> )}
                              </ul>
                                </div>                             
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
                       <CustomizeBar/>
      </div>
      ) : (
                <div className='flex items-center pl-10 md:pl-0 justify-center h-screen'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>) 
}
    </div>   
  )
}

export default SelectOptionsBreakfast 