import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import toast from 'react-hot-toast'

const ProductCategory = () => {
    const {products, navigate, currency, addToCart , cart, setCart, selectedPlatter, setSelectedPlatter} = useAppContext()
    const [selectedOptions, setSelectedOptions] = useState({})
    const {category} = useParams()
    const searchCategory = categories.find( (item)=> item.path.toLowerCase() === category )

    const filteredProducts = products.filter( (product)=> product.category.toLowerCase() === category )
    // console.log(searchCategory,filteredProducts)
    // console.log(currency)

   const handleAddToCart = (product) => {
  const alreadyInCart = cart.some((item) => item._id === product._id);
  if (alreadyInCart) {
    toast.error("Already in Cart");
    console.log(cart)
    return;
  }

   setCart((prevCart) => 
    (Object.keys(prevCart).length !==0 ) ? ([...prevCart, {...product, selectedOptions}]) : (
      [{ ...product, selectedOptions }]
    )
    )
  //  setCart((prevCart) => 
  //   (Object.keys(prevCart).length !==0 ) ? ([...prevCart, product, selectedOptions]) : (
  //     [{ ...product, selectedOptions }]
  //   )
  //   )
  console.log(cart)
  toast.success("Added To Cart");
  navigate(`/fill-details/${product._id}`)
  
  // setCart((prevCart) => 
  //   [...prevCart, product, selectedOptions]);
  // console.log(cart)
  // toast.success("Added To Cart");
  // navigate("/fill-details")
};

const handleRemoveFromCart = (productId) => {
  setCart((prevCart) => {
    const updatedCart = prevCart.filter((item) => item._id !== productId);
    toast.success("Removed from Cart");
    return updatedCart;
  });
};

  const handleCustomize = (product)=> {
    
     setSelectedPlatter((prev) => {
      let updatedPlatter;
     if(product.category == "meal-thali-snack-boxes"){
     updatedPlatter = {
      ...prev,
      _id: product._id,
      name: product.name,
      path: product.path,
      keyword: "snacks",
      selectedOptions : selectedOptions
    };
    }
     if(product.category == "catering"){
     updatedPlatter = {
      ...prev,
      _id: product._id,
      name: product.name,
      path: product.path,
      keyword: "catering",
    };
    }  
    console.log("Updated Platter (inside setSelectedPlatter):", updatedPlatter);
    return updatedPlatter});
    if (product.name === "Snack Box A"){
      // console.log(product._id)
      navigate(`/select-options/${product._id}`)
      scrollTo(0,0)
    }
    if (product.name === "Snack Box B"){
      navigate(`/select-optionsb/${product._id}`)
      scrollTo(0,0)
      // console.log(selectedPlatter)
    }    
    if (product.name === "Menu A"){
      navigate(`/select-menu-a/${product._id}`)
      scrollTo(0,0)
    }    
    if (product.name === "Menu B"){
      navigate(`/select-menu-b/${product._id}`)
      scrollTo(0,0)
    }    
    if (product.name === "Menu C"){
      navigate(`/select-menu-c/${product._id}`)
      scrollTo(0,0)
    }    
    if (product.name === "Short Menu"){
      navigate(`/select-short-menu/${product._id}`)
      scrollTo(0,0)
    }    
    if (product.name === "Breakfast"){
      navigate(`/select-breakfast/${product._id}`)
      scrollTo(0,0)
    }    
  }


  return (
    <div className='bg-[#EFF6FF]  pb-16'>
    <div className=''>
       <div className='flex flex-col items-end w-max mx-auto '>
                    <p className='text-2xl font-medium  mt-10 '>{searchCategory.text}</p>                   
                    <div className='w-16 h-0.5 mb-5 bg-primary rounded-full'></div>
                   
                </div>
        {
            searchCategory && (<div>
               {searchCategory.text == "Catering" ?(<div className=' mx-auto w-fit px-3'>These are Dynamic Prices, and price will reduce as Number of Platter increases.
                      </div> ):( <div></div> )}
            </div>
               
            )
        }
        {
            filteredProducts.length > 0 ? (
               
                    <div  className='grid md:grid-cols-2 items-start  mx-auto max-w-6xl'>
                         {
                          filteredProducts.map( (product) => 
                              <div key={product._id} 
                          // onClick={ ()=> {
                          //       navigate(`/products/${product.category.toLowerCase()}/${product._id}`); 
                          //       scrollTo(0,0)                                
                          //       } } 
                                className=" flex  items-center justify-center p-4 md:p-8 font-sans antialiased text-gray-900">
                          <div className="w-full max-w-lg bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
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
                    
                            <div className="px-6 py-3">
                              <div className="text-indigo-600 text-lg font-semibold tracking-wide mb-2">{product.name}</div>
                              {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product.name}</h2> */}
                              <hr className='border-t border-gray-200'/>
                              <ul className='list-disc pl-4 text-gray-600 pt-1'>
                                {product.menu.map( (menu, index)=> <li key={index}>{menu}</li> )}
                              </ul>
                              <hr className='border-t border-gray-200 mt-2'/>
                               {/* Price & CTA */}
                              <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
                      <div className="w-full flex justify-between items-center">
                        <div className="text-xl w-3/6 text-gray-900">
                          {currency} {product.offerPrice} <span className="text-gray-500 text-xs">{product.unit}</span>
                        </div>
                        {
                          // product.category === "meal-thali-snack-boxes" && product._id == "gd46g23h" && product._id == "gd47g34h" ?  (
                           product._id == "gd46g23h" || product._id == "gd47g34h" ?  (
                             <button
                            // onClick={ ()=> {addToCart(product._id); navigate(`/cart/`)} }
                            onClick={() => handleAddToCart(product)} 
                            className="bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                              <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            { cart.some((item) => item._id === product._id) ? (
                              <div onClick={()=>navigate(`/fill-details/${product._id}`)}>Added</div>
                              ):(
                              <div onClick={()=>navigate(`/fill-details/${product._id}`)}>Add To Cart</div>
                            ) }
                            
                            
            </button>
                          ) : (
                             <button
                            onClick={()=>handleCustomize(product)}
                            className="bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow-lg shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                              <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            Customize
                            
            </button>

                          )
                        }
                           
                </div>
              </div>  
                        <p className='text-xs'>{product.description}</p>
        
          </div>
                          </div>
                              </div>
                         )
                        }
                    </div>
            ): (
                <div className='flex items-center pl-10 md:pl-0 justify-center h-screen md:h-[60vh]'>
                  <p className='text-2xl font-medium'>No products found in this category.</p>
                </div>
            )
        }
    </div>
    </div>
  )
}
export default ProductCategory