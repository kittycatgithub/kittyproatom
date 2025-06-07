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
        <div className='flex flex-col items-end w-max mb-8'>
             <p className='text-2xl font-medium uppercase'>My Orders</p>
             <div className='w-16 h-0.5 bg-primary rounded-full'>
             </div>
        </div>
       {myOrders.map(
         (order, index)=>(
          <div key={index} className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl'>
            <p className='flex justify-between md:items-center text-gray-600 md:font-medium max-md:flex-col'>
              <span>OrderId : {order._id}</span>
              <span>Payment : {order.paymentType}</span>
              <span>Total Amount : {currency} {order.amount}</span>
            </p>
            {order.platters.map( (item, index)=>(
              <div key={index} className={`relative bg-white text-gray-500/70 
              ${order.platters.length !== index + 1 && "border-b" } 
              border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>
                <div className='flex items-center mb-4 md:mb-0'>
                  <div className='bg-primary/10 p-4 rounded-lg'>
                    {/* <img src={item.product.image[0]} alt="" className='w-16 h-16' /> */}
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcOxOqdDh-zCFVk8opYwB8kh4X2wgih4rww&s' alt="" className='w-16 h-16' />
                  </div>
                  <div className='ml-4 text-gray-800'>
                    {console.log(item)}
                    <h2 className='text-xl font-medium '>{item.name}</h2>
                    <p>Category : {item.category}</p>
                  </div>
                </div>
                <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0 text-gray-800'>
                  <p>Guests : {item.details.guests || "1"}</p>
                  <p>Status : {order.status || "Order Placed"}</p>
                  <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <p className='text-gray-700 text-lg font-medium'>
                  Amount : {currency} {item.offerPrice * item.details.guests} 
                </p>


              </div>
            ) )}
          </div>
         )
       )}
    </div>
  )
}

export default MyOrders