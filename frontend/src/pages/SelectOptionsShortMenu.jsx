import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'
import toast from 'react-hot-toast'

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
          { name:"Chola Bhatura", img:"https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/chola-bhatura.png"},
          { name:"Dahi Wada", img:"https://sublimerecipes.com/wp-content/uploads/2021/04/DahiVada-FI-500x500.jpg"},
          { name:"Gulab Jamun", img:"https://www.vegrecipesofindia.com/wp-content/uploads/2022/10/gulab-jamun-recipe-01.jpg"},
          { name:"Veg Pulao", img:"https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg"},
            ]
    },
    {       name:"Menu2",
        value: [
          {name:"Pav Bhaji",img:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg"}, 
          {name:"Tawa Pulao",img:"https://www.recipesworld.co.uk/images/167288683304393684.webp"}, 
          {name:"Boondi Raita",img:"https://dinedelicious.in/wp-content/uploads/2021/03/Boondi-raita-Recipe-2-500x500.jpg"}, 
          {name:"Rasgulla",img:"https://prashantcorner.com/cdn/shop/products/RASGULLA_2457ea2c-400a-4130-b540-b77966e63d07.jpg?v=1673073151&width=1946"}, 
            ]
    },
    {   name:"Menu3",
        value: [
         {name:"Masala Dosa", img:"https://palatesdesire.com/wp-content/uploads/2022/09/Mysore-masala-dosa-recipe@palates-desire.jpg"},
         {name:"Sambar", img:"https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg"},
         {name:"Chutney", img:"https://www.mrishtanna.com/wp-content/uploads/2020/01/coconut-chutney.jpg"},
         {name:"Curd Rice", img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/03/lemon-rice-stovetop-featured.jpg"},
         {name:"Ghee ka Sheera", img:"https://www.nehascookbook.com/wp-content/uploads/2022/11/Wheat-shiro-WS-500x500.jpg"},
          ]
    },
    {   name:"Menu4",
        value: [
           {name:"Veg Noodles", img:"https://www.whiskaffair.com/wp-content/uploads/2020/10/Veg-Hakka-Noodles-2-3.jpg"},
           {name:"Veg Manchurian", img:"https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg"},
           {name:"Veg Fried Rice", img:"https://i0.wp.com/southindianrecipes.in/wp-content/uploads/2021/07/Vegetable-Fried-Rice.jpg"},
           {name:"Ice-cream", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HhedQdurLUbPn70JFdb0jldFgv7dZQnYBw&s"},
          ]
    },     
    {   name:"Menu5",
        value: [
          { name:"Stuffed Paratha", img:"https://spicechronicles.com/wp-content/uploads/2016/04/Alu-Paratha_650.jpg"},
          { name:"Veg Biryani", img:"https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg"},
          { name:"Raita", img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/06/cucumber-raita-recipe-featured.jpg"},
          { name:"Chamcham", img:"https://cdn.ready-market.com.tw/21cd62de/Templates/pic/ANKO-Cham-Cham-1200x1200.jpg?v=4f1f0a97"},
           ]
    },
    {       name:"Menu6",
        value: [
          {name:"Baingan Bharta",img:"https://sinfullyspicy.com/wp-content/uploads/2024/07/1200-by-1200-images-3.jpg"},
          {name:"Bhakri",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/-4920171003111515355.jpeg"},
          {name:"Gola Bhaat",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsGoock6ALysUu-aeAotu5Pn_xhH0wqkTrw&s"},
          {name:"Kadhi",img:"https://www.livingsmartandhealthy.com/wp-content/uploads/2024/06/Hyderabadi-Kadhi-Pakora2.jpg"},
          {name:"Jalebi",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/shubhi-mishra20171004002157988.jpeg"},
         ]
    },
    {   name:"Menu7",
        value: [
          {name:"Paani Poorie", img:"https://images.jdmagicbox.com/comp/def_content/pani_puri_centres/default-pani-puri-centres-7-250.jpg"}, 
          {name:"Paapdi Chaat", img:"https://cinnamonsnail.com/wp-content/uploads/2024/04/Aloo-Papri-Chaat-09-500x500.jpg"}, 
          {name:"Ragda Pattis", img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/ragda-patties-recipe-500x500.jpg"}, 
          {name:"Shahi Tukada", img:"https://www.whiskaffair.com/wp-content/uploads/2019/03/Shahi-Tukda-2-3.jpg"}, 
            ]
    },
    {   name:"Menu8",
        value: [
            {name:"Mini Burger", img:"https://pizzazzerie.com/wp-content/uploads/2015/08/party-food-mini-cheeseburgers-pizzazzerie-6-400x400.jpg"},
            {name:"Pizza", img:"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_841144.JPG"},
            {name:"Pasta", img:"https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1-500x500.jpg"},
            {name:"French Fries", img:"https://thecozycook.com/wp-content/uploads/2018/10/Homemade-French-Fry-Recipe--500x500.jpg"},
            {name:"Chocolate Mousse", img:"https://www.recipetineats.com/tachyon/2018/09/Chocolate-Mousse_9.jpg?resize=500%2C500"},
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
          Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null, 
      BottledWater: "BottledWater",
      CholaBhatura:"Chola Bhatura", 
        DahiWada:"Dahi Wada",
        GulabJamun:"Gulab Jamun",
        VegPulao:"Veg Pulao"
      } )
      }      
      if( isActive === "Menu2" ){
          setSelectedOptions( {
          PavBhaji:"Pav Bhaji", 
          TawaPulao:"Tawa Pulao",
          BoondiRaita:"Boondi Raita",
          Rasgulla:"Rasgulla",
          Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null,
      BottledWater: "BottledWater",
      }) 
      }      
      if( isActive === "Menu3" ){
         
        setSelectedOptions( {
        MasalaDosa:"Masala Dosa",
        Sambar:"Sambar",
        Chutney:"Chutney",
        CurdRice:"Curd Rice",
        GheekaSheera:"Ghee ka Sheera",
        Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null,
      BottledWater: "BottledWater",
      })
      }      
      if( isActive === "Menu4" ){
        setSelectedOptions( {
        VegNoodles:"Veg Noodles",
        VegManchurian:"Veg Manchurian",
        VegFriedRice:"Veg Fried Rice",
        Icecream:"Ice-cream",
        Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null, 
      BottledWater: "BottledWater", 
      }) 
      } 
      if( isActive === "Menu5" ){
        setSelectedOptions( {
        StuffedParatha:"Stuffed Paratha",
        VegBiryani:"Veg Biryani",
        Raita:"Raita",
        Chamcham:"Chamcham",
        Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null,
      BottledWater: "BottledWater",
      }) 
      }     
      if( isActive === "Menu6" ){
        setSelectedOptions( {
        BainganBharta:"Baingan Bharta",
        Bhakri:"Bhakri",
        GolaBhaat:"Gola Bhaat",
        Kadhi:"Kadhi",
        Jalebi:"Jalebi",
        Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null,
      BottledWater: "BottledWater",
      }) 
      }   
      if( isActive === "Menu7" ){
        setSelectedOptions( {
        PaaniPoorie:"Paani Poorie",
        PaapdiChaat:"Paapdi Chaat",
        RagdaPattis:"Ragda Pattis",
        ShahiTukada:"Shahi Tukada",
        Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null,
      BottledWater: "BottledWater",
      }) 
      }   
      if( isActive === "Menu8" ){
        setSelectedOptions( {
        MiniBurger:"Mini Burger",
        Pizza:"Pizza",
        Pasta:"Pasta",
        FrenchFries:"French Fries",
        ChocolateMousse:"Chocolate Mousse",
        Menu1: null,
      Menu2: null,
      Menu3: null,
      Menu4: null,
      Menu5: null,
      Menu6: null, 
      Menu7: null,
      Menu8: null,
      BottledWater: "BottledWater",
      }) 
      }   
      toast.success(`${isActive} is Selected`)
      // setSelectedOptions( (prev)=> {  
      // const updated = {...prev, [category]: itemName};
      // console.log("selected options:", updated);
      // return updated;
      // } )
      setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions })  )
    };
    useEffect(() => {
    setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions })  )
       console.log("selectedOptions",selectedOptions)
      
}, [selectedOptions]);

  return (
     <div className='h-screen '>
    {  console.log(selectedPlatter)}
      { Object.keys(selectedPlatter).length !== 0 && selectedPlatter._id !== undefined ? (
         <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto'>
             {selectedPlatter.keyword == "snacks" || selectedPlatter.keyword == "catering" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-8 md:space-y-6 md:py-10'>  
             <div>
                <button onClick={() => {setIsActive("Menu1")}} className={`pt-5 rounded-md transition  justify-start text-start  ${isActive === "Menu1" ? " text-primary" : " text-black"}`}> Menu1 </button>
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
                <button className=" pb-40 rounded-md transition text-black"> Bottled Water </button>
             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300 bg-[#EFF6FF]'>
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
      </div><div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.BainganBharta !== null && selectedOptions.BainganBharta ==  "Baingan Bharta" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 6</div>}
        </button> 
      </div>     
    </div> } 
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
      <div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.CholaBhatura !== null && selectedOptions.CholaBhatura ==  "Chola Bhatura" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 1</div>}
        </button> 
      </div>       
                 </div> } 
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
      </div> 
      <div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.PavBhaji !== null && selectedOptions.PavBhaji ==  "Pav Bhaji" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 2</div>}
        </button> 
      </div>  
     </div> } 
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
      </div>
      <div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.MasalaDosa !== null && selectedOptions.MasalaDosa ==  "Masala Dosa" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 3</div>}
        </button> 
      </div>
      </div> } 
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
      </div>
      <div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.VegNoodles !== null && selectedOptions.VegNoodles ==  "Veg Noodles" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
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
    </div>
          </div>
        ))}
      </div><div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.StuffedParatha !== null && selectedOptions.StuffedParatha ==  "Stuffed Paratha" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 5</div>}
        </button> 
      </div></div> } 
                 {isActive === "Menu7" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu7 !== null && selectedOptions.Menu7 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div>
          </div>
        ))}
      </div><div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.PaaniPoorie !== null && selectedOptions.PaaniPoorie ==  "Paani Poorie" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 7</div>}
        </button> 
      </div></div> } 
                 {isActive === "Menu8" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu8 !== null && selectedOptions.Menu8 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
    </div>  
          </div>
        ))}
      </div><div className='mx-auto w-fit'>
        <button onClick={ ()=> handleSelectedOptions(isActive )}>
                {selectedOptions.MiniBurger !== null && selectedOptions.MiniBurger ==  "Mini Burger" ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select Menu 8</div>}
        </button> 
      </div></div> } 
                 {isActive === "Starters" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
                // <div className='flex items-center pl-10 md:pl-0 justify-center h-screen md:h-[60vh] bg-[#EFF6FF]'>
                <div className='flex items-center pl-10 md:pl-0 justify-center h-screen bg-[#EFF6FF]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>) }
    </div>
  )
}

export default SelectOptionsShortMenu