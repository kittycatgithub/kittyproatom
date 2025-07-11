import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { dummyOrders } from '../assets/assets'

const MyOrders = () => {

  const [ myOrders, setMyOrders ] = useState([])
  const {currency, axios, user} = useAppContext()

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/user')
      if(data.success){
        setMyOrders(data.orders)
        console.log(data.orders)
        console.log("first")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect( ()=>{
    if(user){
      fetchMyOrders()
    }
  }, [user] )


  return (
    <div className='mt-16 pb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col items-end w-max mb-8 px-4 lg:px-0 '>
             <p className='text-2xl font-medium uppercase'>My Orders</p>
             <div className='w-16 h-0.5 bg-primary rounded-full'>
             </div>
        </div>
       {myOrders.map(
         (order, index)=>(
          <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-5xl'>
            <p className='flex justify-between md:items-center text-gray-600 md:font-medium max-md:flex-col'>
              <span>OrderId : {order._id}</span>
              <span>Payment : {order.paymentType}</span>
              {/* <span>Total Amount : {currency} {order.amount}</span> */}
            </p>
            {order.platters.map( (item, index)=>(
              <div key={index} className={`relative bg-white text-gray-500/70 
              ${order.platters.length !== index + 1 && "border-b" } 
              border-gray-300 flex flex-col md:flex-row md:items-start justify-between py-4 md:gap-3 w-full max-w-4xl`}>
                <div className='flex items-center mb-4 md:mb-0'>
                  <div className='bg-primary/10 p-1 rounded-lg'>
                    {/* <img src={item.product.image[0]} alt="" className='w-16 h-16' /> */}
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcOxOqdDh-zCFVk8opYwB8kh4X2wgih4rww&s' alt="" className='w-16 h-16' />
                  </div>
                  <div className='ml-4 text-gray-800'>
                    {console.log(item)}
                    <h2 className='text-xl font-medium '>{item.name}</h2>
                    <p>Occassion : {item.details.occasion || ""}</p>
                    <p>Guests : {item.details.guests || "1"}</p>
                  <p>Status : {order.status || "Order Placed"}</p>
                  <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                    <p className='text-gray-900 text-lg font-medium'>
                  Amount : {currency} {item.offerPrice * item.details.guests} 
                </p>
                  </div>
                </div>
                <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0 text-gray-800'>
                   <h2 className='text-xl font-medium '>Platter</h2>
                    { Object.keys(item.selectedOptions).length !== 0 ? (
                      Object.entries(item.selectedOptions)
                        .filter(([key, value]) => value !== null)
                        .map(([key, value], index) => (
                          <p key={index}>
                            <span className='text-purple-800'>{key} : </span> {value}
                          </p>
                      ))
                    ) : (null)} 
                  {/* <p>Guests : {item.details.guests || "1"}</p>
                  <p>Status : {order.status || "Order Placed"}</p>
                  <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p> */}
                </div>
                <div className="text-sm md:text-base text-black/60">
                        <p className='text-black/80'>{order.address.firstName} {order.address.lastName}</p>

                        <p>{order.address.street}, {order.address.city} </p>
                        <p> {order.address.state}, {order.address.zipcode} {order.address.country} - {order.address.pincode}</p>
                        {/* <p> {order.address.state}, {order.address.pincode}, {order.address.country}</p> */}
                        <p></p>
                        <p>{order.address.phone}</p>
                    </div>
              </div>
            ) )}
          </div>
         )
       )}
    </div>
  )
}

export default MyOrders