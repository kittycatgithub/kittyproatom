import React from 'react'
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';
import { actualProducts, categories } from '../assets/assets';
import toast from 'react-hot-toast';

const MealThaliSnackBoxes = () => {

  const {selectedPlatter, setSelectedPlatter , navigate, addToCart, cartItems, cart, setCart} = useAppContext()


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
  const product3 = {
    title: 'Snack Box A',
    currentPrice: 95,
    orderQty: 15,
    badge: 'Best for Professional Events',    
  };
  const product4 = {
    title: 'Snack Box B',
    currentPrice: 120,
    orderQty: 15,
    badge: 'Best for Professional Events',    
  };

  const handleProduct1 =  ( ) => {
  //  setSelectedPlatter( (prev) => ({...prev, name: product1.title})  ) 
   setCart( (prev) => [...prev, selectedPlatter] )
   toast.success("Added to Cart")
   console.log(selectedPlatter, cart)
  }
  const handleProduct2 =  ( ) => {
   setSelectedPlatter( (prev) => ({...prev, name: product2.title})  ) 
   console.log(selectedPlatter)
  //  navigate('/select-options');
  //  scrollTo(0,0)
   
  }
  const handleProduct3 =  ( ) => {
   setSelectedPlatter( (prev) => ({...prev, name: product3.title, keyword:"snacks"})  ) 
   console.log(selectedPlatter)
   navigate('/select-options');
   scrollTo(0,0)

  }
  const handleProduct4 =  ( ) => {
   setSelectedPlatter( (prev) => ({...prev, name: product4.title, keyword:"snacks"})  ) 
   console.log(selectedPlatter)
   navigate('/select-optionsb')

  }

  return (
    <div>
<div className="max-w-full mx-auto bg-rose-100/30">
<h1 className='text-2xl md:text-3xl text-center font-medium pt-12 underline underline-offset-4 decoration-primary-dull'>Meal Thali</h1>
    {/* {   categories.map( (category,index)=>
        <p key={index}>{category.text}</p>
       )
    } */}
   
<div className='grid md:grid-cols-2  mx-auto max-w-5xl'>
   {/* <!-- Grid 1 --> */}
     {
      actualProducts.filter( (product)=> product.category ).slice(0,2).map( (product,index) => 
          <div key={index} className=" flex items-center justify-center p-4 md:p-8 font-sans antialiased text-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
        <div className="relative lg:h-72 xl:h-72 h-48  overflow-hidden bg-gray-100">
          <img
            src={product.path}
            alt="Wireless Headphones"
            className="w-full  lg:h-72 xl:h-72 h-48 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-3 left-0 bg-gradient-to-r from-purple-600 to-pink-600  text-white px-3 py-1.5 rounded-r-full text-xs tracking-wider">
            {product.badge}
          </div>
        </div>

        <div className="p-6">
          {/* <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">Audio</div> */}
          <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product.name}</h2>
          <hr className='border-t border-gray-200'/>
          <ul className='list-disc list-inside text-gray-600 py-1 mb-8'>
            {product.menu.map( (menu, index)=> <li key={index}>{menu}</li> )}
          </ul>
          <hr className='border-t border-gray-200 mt-2'/>
           {/* Price & CTA */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
  <div className="w-full flex justify-between items-center">
    <div className="text-xl w-3/6 text-gray-900">
      ₹ {product.offerPrice} <span className="text-gray-500 text-xs">/guest</span>
    </div>
    
        <button
        onClick={handleProduct1}
        className="bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
          <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        Add To Cart
      </button>      
  </div>
</div>
        </div>
      </div>
    </div>
     )
    }
</div>
 
</div>
<div className="max-w-full mx-auto bg-rose-100/30">
<h1 className='text-2xl md:text-3xl text-center font-medium pt-12 underline underline-offset-4 decoration-primary-dull'>Snack Boxes</h1>

<div className='grid md:grid-cols-2  mx-auto max-w-5xl'>
   {/* <!-- Grid 1 --> */}
   <div className=" flex items-center justify-center p-4 md:p-8 font-sans antialiased text-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative lg:h-72 xl:h-72 h-48  overflow-hidden bg-gray-100">
          <img
            src="https://media.istockphoto.com/id/1319728998/photo/sandwich-with-lettuce-tomatoes-chicken-cheese-sorrel-and-a-cup-of-coffee-on-wooden-cutting.jpg?s=612x612&w=0&k=20&c=V0YMnDMKCQRlhJz8ipX4pJSju_Ss8ztFcMGSe_MWW_Y="
            alt="Wireless Headphones"
            className="w-full  lg:h-72 xl:h-72 h-48 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-3 left-0 bg-gradient-to-r from-purple-600 to-pink-600  text-white px-3 py-1.5 rounded-r-full text-xs tracking-wider">
            {product3.badge}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6">
          {/* <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">Audio</div> */}
          <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product3.title}</h2>
          <hr className='border-t border-gray-200'/>
          <ul className='list-disc list-inside text-gray-600 py-1 mb-2'>
            <li>3 Layered Sandwitch (1 Triangle)</li>
            <li>Snack (1 Piece)</li>
            <li>Packed Beverage (1 Small)</li>
            <li>Dessert (1 Piece)</li>
            <li>Tissue paper and Sauce Pouches</li>
          </ul>
          <hr className='border-t border-gray-200 mt-2'/>
          {/* Price & CTA */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
            <div className="flex justify-between items-center">
            <div className="text-xl w-3/6   text-gray-900">
                ₹ {product3.currentPrice.toFixed(2)} <span className='text-gray-500 text-xs'>/pack</span>
                </div>
                <div className='w-2/6 lg:pr-24'>
                <button onClick={handleProduct3} className="bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Customize
            </button>
                </div>
              </div>           
          </div>          <p className='text-xs'>Min Order Qty - 15 Packs</p>
        </div>
      </div>
    </div>

  {/* <!-- Grid 2 --> */}
  <div className=" flex items-center justify-center p-4 md:p-8 font-sans antialiased text-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative lg:h-72 xl:h-72 h-48  overflow-hidden bg-gray-100">
          <img
            src="https://media.istockphoto.com/id/611107852/photo/sandwich-and-orange-juice.jpg?s=612x612&w=0&k=20&c=cjBUC7odIT51xz3GlDTUTV5IqlVYrm8D1SFvRGK-HyU="
            alt="Wireless Headphones"
            className="w-full  lg:h-72 xl:h-72 h-48 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-3 left-0 bg-gradient-to-r from-purple-600 to-pink-600  text-white px-3 py-1.5 rounded-r-full text-xs tracking-wider">
            {product4.badge}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6">
          {/* <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">Audio</div> */}
          <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product4.title}</h2>
          <hr className='border-t border-gray-200'/>
          <ul className='list-disc list-inside text-gray-600 py-1'>
          <li>3 Layered Sandwitch (1 Triangle)</li>
            <li>Snack (2 Pieces)</li>
            <li>Packed Beverage (1 Big)</li>
            <li>Dessert (1 Piece)</li>
            <li>Tissue paper and Sauce Pouches</li>
          </ul>
          <hr className='border-t border-gray-200 mt-2'/>
          {/* Price & CTA */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
            <div className="flex justify-between content-between space-between  items-center">
            <div className="text-xl w-3/6  text-gray-900">
                ₹ {product4.currentPrice.toFixed(2)} <span className='text-gray-500 text-xs'>/pack</span>
                </div>
                <div className='w-2/6  lg:pr-24'>
                <button onClick={handleProduct4} className="bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Customize
            </button>
                </div>
              </div>          
          </div>
          <p className='text-xs'>Min Order Qty - 15 Packs</p>
        </div>
      </div>
    </div>
</div>
 
</div>
</div>
  )
}

export default MealThaliSnackBoxes