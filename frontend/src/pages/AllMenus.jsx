import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const AllMenus = () => {

    const {products, searchQuery} = useAppContext()
    const [filteredProducts,setFilteredProducts] = useState([])

    useEffect(
        ()=>{
            if(searchQuery.length > 0) {
                setFilteredProducts(products.filter(
                    product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
                ))
            }
            else{
                setFilteredProducts(products)
            }
        },
        [products, searchQuery])

  return (
    <div className='grid md:grid-cols-2  mx-auto max-w-5xl'>
        <div className='flex flex-col items-center mt-12 w-max pl-4 md:pl-0'>
          <div className='flex flex-col items-end'>
            <h1 className='text-2xl font-medium pt-2'>All Menu</h1>
            <div className='w-16 h-0.5 bg-primary rouned-full'>
            </div>
          </div>
            
            <div className='grid md:grid-cols-2  mx-auto max-w-5xl'>
                {/* {
                    filteredProducts.map( (product, index)=> (
                        <p key={index}>{product.name}</p>
                    ) )
                } */}
                 {
          filteredProducts.slice(0, 7).map( (product,index) => 
              <div key={index} className="flex items-center justify-center py-4 md:py-8 px-1 md:px-8 font-sans antialiased text-gray-900">
          <div className="w-xs md:w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
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
              <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">{product.name}</div>
              {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product.name}</h2> */}
              <hr className='border-t border-gray-200'/>
              <ul className='list-disc list-inside text-gray-600 py-1 mb-8'>
                {product.menu.map( (menu, index)=> <li key={index}>{menu}</li> )}
              </ul>
              {/* <ul className='list-disc list-inside text-gray-600 py-1 mb-8'>
                {product.menu.map( (menu, index)=> <li key={index}>{menu}</li> )}
              </ul> */}
              {/* <ul className='list-disc list-inside text-gray-600' key={index}> <li> {submenu}</li></ul> */}
              <hr className='border-t border-gray-200 mt-2'/>
              <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="text-xl w-3/6 text-gray-900">
          ₹ {product.offerPrice} <span className="text-gray-500 text-xs">/guest</span>
        </div>
        
            <button
            // onClick={handleProduct1}
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
            <div className='grid md:grid-cols-2  mx-auto max-w-5xl'>
      {
          filteredProducts.slice(7, 9).map( (product,index) => 
              <div key={index} className="flex items-center justify-center py-4 md:py-8 px-1 md:px-8 font-sans antialiased text-gray-900">
          <div className="w-xs md:w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
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
    
            <div className="py-6 pl-2">
              <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">{product.name}</div>
              {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product.name}</h2> */}
              <hr className='border-t border-gray-200'/>
              <ul className='list-disc list-inside text-gray-600 py-1 mb-8 text-sm'>
                {product.menu.map( (menu, index)=> <li key={index} className="flex items-center before:content-['•'] before:text-2xl before:mr-2 before:text-gray-500">
      {menu}
    </li> )}
              </ul>
              <hr className='border-t border-gray-200 mt-2'/>
              <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="text-xl w-3/6 text-gray-900">
          ₹ {product.offerPrice} <span className="text-gray-500 text-xs">/guest</span>
        </div>
        
            <button
            // onClick={handleProduct1}
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
             <div className='grid md:grid-cols-2  mx-auto max-w-5xl'>
                {/* {
                    filteredProducts.map( (product, index)=> (
                        <p key={index}>{product.name}</p>
                    ) )
                } */}
                 {
          filteredProducts.slice(9, 100).map( (product,index) => 
              <div key={index} className="flex items-center justify-center py-4 md:py-8 px-1 md:px-8 font-sans antialiased text-gray-900">
          <div className="w-xs md:w-full max-w-md bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
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
              <div className="text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-2">{product.name}</div>
              {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product.name}</h2> */}
              <hr className='border-t border-gray-200'/>
              <ul className='list-disc list-inside text-gray-600 py-1 mb-8'>
                {product.menu.map( (menu, index)=> <li key={index}>{menu}</li> )}
              </ul>
              <hr className='border-t border-gray-200 mt-2'/>
              <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="text-xl w-3/6 text-gray-900">
          ₹ {product.offerPrice} <span className="text-gray-500 text-xs">/guest</span>
        </div>
        
            <button
            // onClick={handleProduct1}
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
        
    </div>
  )
}

export default AllMenus