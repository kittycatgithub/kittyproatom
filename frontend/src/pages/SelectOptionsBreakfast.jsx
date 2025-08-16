import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'
import toast from 'react-hot-toast'

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
    },
    {   name:"AdditionalOptions",
        value: [{name:"Chaat Station", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7hh_qeNemM83ninycYHcskgIBLlnrdzCeg&s"}, 
            {name:"Chinese Station", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBE5WJsIwy_ILxk5qS8UTHcJRfosDEmIaohg&s"}, 
            {name:"Live South Indian Station", img:"https://hemamagesh.com/wp-content/uploads/2019/07/South-Indian-breakfast.jpg"}, 
            {name:"Welcome Drink Station", img:"https://i.pinimg.com/222x/04/62/8d/04628db52d5c27c26b5bdf61b76b3714.jpg"}, 
            {name:"Live Egg Station", img:"https://hips.hearstapps.com/hmg-prod/images/breakfast-for-dinner-naan-best-egg-recipes-66c7aedec1268.png"}, 
            {name:"Coffee / Masala Milk Station", img:"https://madhurasrecipe.com/wp-content/uploads/2023/10/Masala-Doodh-Featured-Image-585x585.jpg"}, 
            {name:"Additional Starter", img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Buffalo-cauliflower-7825216.jpg"}, 
            {name:"VIP Setting", img:"https://i.pinimg.com/236x/1e/2d/ba/1e2dba7e13cbe5c8aa86aa95bc7728e0.jpg"},
            {name:"Roomali Roti Counter", img:"https://www.cookwithkushi.com/wp-content/uploads/2016/10/rumali_roti_roomali_roti_recipe.jpg"},
            {name:"Tandoori Roti / Naan Counter", img:"https://sinfullyspicy.com/wp-content/uploads/2024/05/1200-by-1200-images.jpg"},
            {name:"Tambul", img:"https://img-global.cpcdn.com/recipes/61270455d8104404/680x781cq80/%E0%A4%A4%E0%A4%AC%E0%A4%B2-tambul-recipe-in-marathi-%E0%A4%B0%E0%A4%B8%E0%A4%AA-%E0%A4%9A-%E0%A4%AE%E0%A4%96%E0%A4%AF-%E0%A4%AB%E0%A4%9F.jpg"},
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

  return (
     <div className='h-auto'>
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
                <button onClick={() => {setIsActive("AdditionalOptions")}} className={` rounded-md transition ${isActive === "AdditionalOptions" ? " text-primary text-left" : " text-black text-left"}`}> Additional Options </button>
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
                  {isActive === "AdditionalOptions" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.AdditionalOptions !== null && selectedOptions.AdditionalOptions ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
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
                 {isActive === "Menu1" && <div>
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
                 {isActive === "Menu2" && <div>
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
                 {isActive === "Menu3" && <div>
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
                 {isActive === "Menu4" && <div>
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
                 {isActive === "Menu5" && <div>
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
             </div>
                       <CustomizeBar/>
      </div>
      ) : (
                <div className='flex items-center pl-10 md:pl-0 justify-center h-screen bg-[#EFF6FF]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>) 
}
    </div>   
  )
}

export default SelectOptionsBreakfast 