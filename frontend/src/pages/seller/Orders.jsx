import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets, dummyOrders } from '../../assets/assets';
import toast from 'react-hot-toast';

const Orders = () => {

    const {currency, axios} = useAppContext()
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        try {
            const { data } = await axios.get('/api/order/seller')
            if(data.success){
                setOrders(data.orders)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect( ()=> {
        fetchOrders()
    }, [] ) // [] (empty dependency array) → useEffect runs once on mount only → ComponentDidMount

    return (
        <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll'>
        <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>
            {console.log({orders})}
            {orders.map((order, index) => (
                <div key={index} className="flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-6xl rounded-md border border-gray-300">
                    <div className="flex gap-5 max-w-80">
                        {/* <img className="w-12 h-12 object-cover" src={assets.box_icon} alt="boxIcon" /> */}
                        <img className="w-12 h-12 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcOxOqdDh-zCFVk8opYwB8kh4X2wgih4rww&s" alt="boxIcon" />
                        <div className='text-black'>
                            {order.platters.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <p className="font-medium">
                                         {item.name} 
                                         
                                    </p>
                                    <p>
                                         Guests : <span className="text-primary"> {item.details.guests}</span>
                                    </p>
                                    <p className="">
                                         Price : <span className="text-primary">{currency} {order.platters[0].offerPrice}</span>
                                    </p>
                                    <p>
                                         Total Amount : <span className="text-primary">{currency} {item.details.guests * order.platters[0].offerPrice}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-sm md:text-base text-black/60">
                        <p className='text-black/80'>{order.address.firstName} {order.address.lastName}</p>
                        <p>{order.address.street}, {order.address.city} </p>
                        <p> {order.address.state}, {order.address.zipcode} {order.address.country} - {order.address.pincode}</p>
                        {/* <p> {order.address.state}, {order.address.pincode}, {order.address.country}</p> */}
                        <p></p>
                        <p>{order.address.phone}</p>
                    </div>
                    {/* <div className="text-sm md:text-base text-black/60">
                        <p>{order.platters[0].offerPrice}</p>
                    </div> */}
                    <div className=" text-lg my-auto">
                        {Object.entries(order.platters[0].selectedOptions)
                            .filter(([key, value]) => value !== null)
                            .map(([key, value], index) => (
                              <p key={index} className="text-sm">
                                <span className='text-purple-800'>{key} : </span> {value}
                              </p>
                        ))}
                    </div>
                    <div className="flex flex-col text-sm md:text-base text-black/60">
                        <p>Method: {order.paymentType}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Orders