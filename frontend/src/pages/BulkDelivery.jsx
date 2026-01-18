import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';

const BulkDelivery = () => {

 const {selectedPlatter, setSelectedPlatter , navigate, products} = useAppContext()
//  console.log(products)
 let product1 = []
 let product2 = []
  
  products.map( (product, index)=> {
    if(product.name == "Vegetarian" ){
      product1 = product
    }
    // if(product.name == "Non-Vegetarian" ){
    if(product.name == "Bulk Delivery" ){
      product2 = product
    }
  } )

  const handleCustomize = (product) => {
    // console.log(product)
    setSelectedPlatter(
      (prev)=> ({...prev,
                    _id: product._id,
                    name: product.name,
                    path: product.path,
                    category: product.category})
    )
    // console.log(product,"Updated Platter", selectedPlatter)
    // This useEffect will run every time selectedPlatter changes:

    if(product.name === "Vegetarian"){
      navigate(`/select-veg/${product._id}`)
      scrollTo(0,0)
    } else {
      navigate(`/select-non-veg/${product._id}`)
      scrollTo(0,0)
    }    
  }
  useEffect(() => {
  // console.log("Updated Platter:", selectedPlatter);
}, [selectedPlatter]);

  return (
    <div>
<div className="max-w-full mx-auto bg-[#EFF6FF]">
{/* <h1 className='text-2xl md:text-3xl text-center font-medium pt-12 underline underline-offset-4 decoration-primary-dull'>Bulk Delivery</h1>  */}
 <div className='flex flex-col items-end w-max mx-auto '>
      <p className='text-2xl font-medium  mt-10 '>Bulk Delivery</p>
      <div className='w-16 h-0.5 mb-5 bg-primary rounded-full'></div>
  </div>
<h2 className="text-md text-gray-900 leading-tight mb-1 py-4 max-w-6xl mx-auto justify-center text-center  w-fit">Charge for bulk delivery are as mentioned below. All Rates mentioned are for 1 Kg.</h2>

<div className='grid md:grid-cols-2 items-start  mx-auto max-w-5xl'>
  
   {/* <!-- Grid 1 --> */}
   <div className=" flex items-center justify-center p-4 md:p-8 font-sans antialiased text-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative lg:h-72 xl:h-72 h-48  overflow-hidden bg-gray-100">
          <img
            src="https://img.freepik.com/free-photo/ramadan-celebration-with-delicious-food_23-2151404398.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"
            alt="Wireless Headphones"
            className="w-full  lg:h-72 xl:h-72 h-48 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-3 left-0 bg-gradient-to-r from-purple-600 to-pink-600  text-white px-3 py-1.5 rounded-r-full text-xs tracking-wider">
            {product1.badge}
          </div>
        </div>
        {/* Product Details */}
        <div className="p-6">
          <div className="text-indigo-600 text-xl font-semibold uppercase tracking-wide mb-2">{product1.name}</div>
          {/* <h2 className="text-xl text-gray-900 leading-tight mb-1 px-1">{product1.name}</h2> */}
          <hr className='border-t border-gray-200'/>
          <div className='grid grid-cols-3 justify-between'>
            <ul className='list-disc list-inside text-gray-600 py-1 mb-2 col-span-2  space-y-0.5'>
            <li>Any Special Veg</li>
            <li>Any Seasonal Veg</li>
            <li>Any Daal Preparation</li>
            <li>Any Rice Preparation</li>
            <li>Biryani / Pulao</li>
            <li>Chapati</li>
            <li>Laccha Paratha</li>
            <li>Dessert </li>
          </ul><ul className='text-gray-600 py-1 mb-2 space-y-0.5'>
            <li>Rs. 550</li>
            <li>Rs. 450</li>
            <li>Rs. 350</li>
            <li>Rs. 350</li>
            <li>Rs. 700</li>
            <li>Rs. 12 / <span className='text-xs md:text-sm'>piece</span></li>
            <li>Rs. 20 / <span className='text-xs md:text-sm'>piece</span></li>
            <li>Charges as per Item</li>
          </ul>
          </div>
          <hr className='border-t border-gray-200 mt-2'/>
          {/* Price & CTA */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
            <div className="flex justify-between items-center">
            {/* <div className="text-xl w-3/6   text-gray-900">
                ₹ {product1.offerPrice.toFixed(2)} <span className='text-gray-500 text-xs'>/pack</span>
                </div> */}
                          <p className='text-xs'>+ 5% GST <br/> + Delivery Charges</p>

                <div className='w-2/6 lg:pr-24'>
                <button onClick={ ()=> handleCustomize(product1) } className="bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Customize
            </button>
                </div>
              </div>           
          </div>          
          {/* <p className='text-xs'>+ 5% GST + Delivery Charges</p> */}
        </div>
      </div>
    </div>
  {/* <!-- Grid 2 --> */}
  <div className=" flex items-center justify-center p-4 md:p-8 font-sans antialiased text-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative lg:h-72 xl:h-72 h-48  overflow-hidden bg-gray-100">
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"
            alt="Wireless Headphones"
            className="w-full  lg:h-72 xl:h-72 h-48 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
          <div className="absolute top-3 left-0 bg-gradient-to-r from-purple-600 to-pink-600  text-white px-3 py-1.5 rounded-r-full text-xs tracking-wider">
            {product2.badge}
          </div>
        </div>
        {/* Product Details */}
        <div className="p-6">
          <div className="text-indigo-600 text-xl font-semibold uppercase tracking-wide mb-2">{product2.name}</div>
          {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product2.name}</h2> */}
          <hr className='border-t border-gray-200'/>
           <div className='grid grid-cols-3 justify-between'>
            <ul className='list-disc list-inside col-span-2 text-gray-600 py-1 mb-2  space-y-0.5'>
            <li>Any Chicken Curry</li>
            <li>Any Mutton Curry</li>
            <li>Chicken Biryani</li>
            <li>Mutton Biryani</li>
            <li>Chapati</li>
            <li>Laccha Paratha</li>
            <li>Dessert </li>
          </ul><ul className='text-gray-600 py-1 mb-2  space-y-0.5'>
            <li>Rs. 1300</li>
            <li>Rs. 1750</li>
            <li>Rs. 1300</li>
            <li>Rs. 1750</li>
            <li>Rs. 12 / <span className='text-xs'>piece</span></li>
            <li>Rs. 20 / <span className='text-xs'>piece</span></li>
            <li>Charges as per Item</li>
          </ul>
          </div>
          <hr className='border-t border-gray-200 mt-2'/>
          {/* Price & CTA */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
            <div className="flex justify-between content-between space-between  items-center">
            {/* <div className="text-xl w-3/6  text-gray-900">
                ₹ {product2.currentPrice.toFixed(2)} <span className='text-gray-500 text-xs'>/pack</span>
                </div> */}
                          <p className='text-xs'>+ 5% GST <br/> + Delivery Charges</p>
                <div className='w-2/6  lg:pr-24'>
                <button onClick={ ()=> handleCustomize(product2) } className="bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Customize
            </button>
                </div>
              </div>          
          </div>
        </div>
      </div>
    </div>
</div>
</div>
</div>
  )
}

export default BulkDelivery