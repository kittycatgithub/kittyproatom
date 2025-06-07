import React from 'react'

 const product1 = {
    title: 'Working Meal',
    currentPrice: 170,
    badge: 'Best for Professional Events',    
  };
  const product2 = {
    title: 'Special Meal',
    currentPrice: 210,
    badge: 'Best for Professional Events',    
  };

  const catering = [
    {
      name:"Menu A", 
      badge: 'Best for Professional Events',         
      list:["Special Veg", "Seasonal Veg", "Daal", "Basamati Rice", "Roti", "Savouries", "Dessert", "Salad", "Papad & Achar", "Bottled Water"]
    },
    {
      name:"Menu B",
      badge: 'Best for Professional Events',    
      list:["Soup / Welcome Drink", "Starter", "Special Veg", "Seasonal Veg", "Daal", "Basamati Rice", "2 Type Of Rotis","Savouries", "Dessert", "Salad", "Papad & Achar", "Bottled Water"]
    },
    {
      name:"Menu C",
      badge: 'Best for Professional Events',    
      list:["Soup", "2 Type Of Starter", "Special Veg", "2 Type Of Seasonal Veg", "Daal", "Basamati Rice", "2 Type Of Roti", "Savouries", "2 Type Of Dessert", "2 Type Of Salad", "Papad & Achar", "Bottled Water"]
    },
  ]
  const catering2 = [
    {
      name:"Short Menu",
      badge: 'Best for Professional Events',         
      list:["Chola Bhatura, Dahi Wada, Gulab Jamun and Veg Pulao",
            "Pav Bhaji, Tawa Pulao, Boondi Raita and Rasgulla",
            " Masala Dosa, Sambar, Chutney, Curd Rice and Ghee ka Sheera",
            "Veg Noodles, Veg Manchurian, Veg Fried Rice and Ice-cream",
            "Stuffed Paratha, Veg Biryani, Raita and Chamcham",
            "Baingan Bharta, Bhakri, Gola Bhaat, Kadhi and Jalebi",
            "Paani Poorie, Paapdi Chaat, Ragda Pattis and Shahi Tukada",
            "Mini Burger/ Pizza, Pasta, French Fries and Chocolate Mousse",
            "Packaged Bottled Water will be served"]
    },
    {
      name:"Breakfast",
      badge: 'Best for Professional Events',         
      list:["Idli, Medu Wada, Sambar, Chutney, Tea, Coffee and Cookies",
         "Aloo Poha, Chana Rassa, Batata Wada, Tea, Coffee and Cookies",
         "Misal Pao, Dhokla, Chutney, Tea, Coffee and Cookies",
         "Sprouts Usal, Chiwda, Sabudana Khichadi, Dahi Chutney, Tea, Coffee & Cookies",
         "Upma, Chutney, Wada Pao, Lasan Chutney, Tea, Coffee and Cookies",
         "Veg Sandwich, Mayo Dip. Veg Cutlet, Muffin, Tea, Coffee and Cookies",
         "Packaged Bottled Water will be served"]
    },
  ]
const ProductCard = ({product}) => {

  const [count, setCount] = React.useState(0);

  return (
    <div className='bg-blue-50'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl  mx-auto '>
        {catering.map( (menu, index)=> (
      <div key={index} className=''> 
      <div className=" flex items-center justify-center p-4 md:p-8 font-sans antialiased text-gray-900">
      <div className="w-full max-w-md bg-white  lg:h-[705px]  justify-between  rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
        {/* Product Image */} 
        <div className="relative lg:h-72 xl:h-72 h-48  overflow-hidden bg-gray-100">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/042/600/495/small_2x/ai-generated-a-still-life-of-a-street-food-cart-with-snacks-such-as-samosas-pakoras-and-chaat-free-photo.jpg"
            alt="Wireless Headphones"
            className="w-full  lg:h-72 xl:h-72 h-48 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-3 left-0 bg-gradient-to-r from-purple-600 to-pink-600  text-white px-3 py-1.5 rounded-r-full text-xs tracking-wider">
            {menu.badge}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6">
          {/* <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">Audio</div> */}
          <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{menu.name}</h2>
          <hr className='border-t border-gray-200'/>
          {
        menu.list.map( (submenu, index)=>(
            <ul className='list-disc list-inside text-gray-600' key={index}> <li> {submenu}</li></ul>
        ) )
      }   <hr className='border-t border-gray-200 mt-2'/>
          {/* Price & CTA */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
            <div className="flex justify-between items-center">
            <div className="text-xl w-3/6   text-gray-900">
                ₹ {product1.currentPrice.toFixed(2)} <span className='text-gray-500 text-xs'>/guest</span>
                </div>
                <div className='w-2/6 lg:pr-10'>
                <button className="bg-primary text-white -mb-5 px-3 py-2  rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Customize
            </button>
                </div>
              </div>    
          </div>
        <p className='-mt-1 text-gray-600 text-xs'>GST will be +5%</p>       

        </div>
      </div>
    </div>
    </div>
    ) )}
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl  mx-auto '>
        {catering2.map( (menu, index)=> (
      <div key={index} className=''> 
      <div className=" flex items-center justify-center p-4 md:p-2 font-sans antialiased text-gray-900">
      <div className="w-full max-w-full bg-white  lg:h-[390px]  justify-between  rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
        {/* Product Image */} 
        {/* <div className="relative lg:h-72 xl:h-72 h-48  overflow-hidden bg-gray-100">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/042/600/495/small_2x/ai-generated-a-still-life-of-a-street-food-cart-with-snacks-such-as-samosas-pakoras-and-chaat-free-photo.jpg"
            alt="Wireless Headphones"
            className="w-full  lg:h-72 xl:h-72 h-48 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-3 left-0 bg-gradient-to-r from-purple-600 to-pink-600  text-white px-3 py-1.5 rounded-r-full text-xs tracking-wider">
            {product1.badge}
          </div>
        </div> */}

        {/* Product Details */}
        <div className="pl-6 py-6">
          <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">{menu.name}</div>
          {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{menu.name}</h2> */}
          <hr className='border-t border-gray-200 pb-2'/>
          {
        menu.list.map( (submenu, index)=>(
            <ul className='list-disc list-outside text-gray-600 px-2 py-0.5' key={index}> <li> <span>{submenu}</span> </li></ul>
        ) )
      }   <hr className='border-t border-gray-200 mt-2'/>
          {/* Price & CTA */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
            <div className="flex justify-between items-center">
            <div className="text-xl w-3/6   text-gray-900">
                ₹ {product1.currentPrice.toFixed(2)} <span className='text-gray-500 text-xs'>/guest</span>
                </div>
                <div className='w-2/6 lg:pr-10'>
                <button className="bg-primary  -mb-5 text-white px-3 py-2  rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Customize
            </button>
                </div>
              </div>    
          </div>
        <p className='-mt-1 text-gray-600 text-xs'>GST will be +5%</p>       

        </div>
      </div>
    </div>
    </div>
    ) )}
    </div>
    </div>
  )
}

export default ProductCard