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

       {myOrders.map((order, index) => (
  <div key={index} className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-6xl">
    <p className="flex justify-between md:items-center text-gray-600 md:font-medium max-md:flex-col">
      <span>OrderId : {order._id}</span>
      <span>Payment : {order.paymentType}</span>
    </p>

    {order.platters.map((item, index) => (
      <div
        key={index}
        className={`relative bg-white text-gray-500/70 
          ${order.platters.length !== index + 1 && "border-b"} 
          border-gray-300 flex flex-col md:flex-row md:items-start justify-between py-4 md:gap-3 w-full max-w-4xl`}
      >
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-primary/10 p-1 rounded-lg">
            <img
              src={item.path || "https://via.placeholder.com/100"}
              alt={item.name}
              className="w-16 h-16"
            />
          </div>
          <div className="ml-4 text-gray-800 w-[200px]">
            <h2 className="text-xl font-medium ">Details</h2>
            <p>Occassion : {item?.details?.occasion || ""}</p>
            <p>Guests : {item?.details?.guests || "1"}</p>
            <p>Status : {order.status || "Order Placed"}</p>
            <p>Date : {new Date(order.createdAt).toLocaleDateString("en-GB")}</p>
            <p className="text-gray-900 text-lg font-medium">
              Amount : {currency} {item?.offerPrice * (item?.details?.guests || 1)}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0 text-gray-800 ">
          <h2 className="text-xl font-medium ">{item.name}</h2>

{item.category === "bulk-delivery" ? (
  <div>
    {item.productDetails &&
      Object.entries(item.productDetails).map(([name, detail], idx) => (
        <p key={idx} className="text-md">
          <span className=" text-purple-800"> {name} </span> ⟶ {detail.qty} {detail.unit}
        </p>
      ))}
  </div>
) : (
  <div>
    {/* {item.selectedOptions && typeof item.selectedOptions === "object"  ? (
      Object.entries(item.selectedOptions)
        .filter(([_, value]) => value !== null)
        .map(([key, value], idx) => {
          let displayValue = "";

          if (Array.isArray(value)) {
            displayValue = value
              .filter((v) => v !== null)
              .map((v) => {
                if (typeof v === "object" && v !== null) {
                  return Object.values(v).join(", ");
                }
                return v;
              })
              .join(", ");
          } else if (typeof value === "object") {
            displayValue = Object.values(value).join(", ");
          } else {
            displayValue = value;
          }
          return (
            <p key={key + idx}>
              <span className="text-purple-800">{key}:</span> {displayValue}
            </p>
          );
        })
    ) : typeof item.selectedOptions === "string" ? (
      <p>{item.selectedOptions}</p>
    ) : null} */}

    {item.selectedOptions && typeof item.selectedOptions === "object" ? (
  Object.entries(item.selectedOptions)
    // skip null, undefined, empty arrays, and empty objects
    .filter(([_, value]) => {
      if (value === null || value === undefined) return false;
      if (Array.isArray(value)) {
        return value.some(v => v !== null && v !== "" && (typeof v !== "object" || Object.values(v).some(x => x)));
      }
      if (typeof value === "object") {
        return Object.values(value).some(v => v !== null && v !== "");
      }
      return value !== "";
    })
    .map(([key, value], idx) => {
      let displayValue = "";

      if (Array.isArray(value)) {
        displayValue = value
          .filter(v => v !== null && v !== "")
          .map(v => {
            if (typeof v === "object" && v !== null) {
              const objVal = Object.values(v).filter(x => x !== null && x !== "").join(", ");
              return objVal || null;
            }
            return v;
          })
          .filter(Boolean) // remove null/empty
          .join(", ");
      } else if (typeof value === "object" && value !== null) {
        displayValue = Object.values(value)
          .filter(v => v !== null && v !== "")
          .join(", ");
      } else {
        displayValue = value;
      }

      // completely skip if displayValue is empty
      if (!displayValue) return null;

      return (
        <p key={key + idx}>
          <span className="text-purple-800">{key} ⟶ </span> {displayValue}
        </p>
      );
    })
) : typeof item.selectedOptions === "string" && item.selectedOptions.trim() !== "" ? (
  <p>{item.selectedOptions}</p>
) : null}


    {/* Show menu only for NON bulk-delivery */}
    {/* {item.menu && (
      <div>
        <h3 className="font-semibold text-lg text-purple-800 mt-4 mb-2">Menu</h3>
        <ul className="list-disc list-inside text-sm">
          {item.menu.map((menuItem, idx) => (
            <li key={idx}>{menuItem}</li>
          ))}
        </ul>
      </div>
    )} */}
  </div>
)}
          {/* ✅ Fallback: show menu if no selectedOptions
          {(!item.selectedOptions || Object.keys(item.selectedOptions).length === 0) &&
            item?.menu?.length > 0 &&
            item.menu.map((menuItem, idx) => <p key={idx}>{menuItem}</p>)} */}
            {/* ✅ Fallback: show menu if no selectedOptions (except bulk-delivery) */}
{item.category !== "bulk-delivery" &&
  (!item.selectedOptions || Object.keys(item.selectedOptions).length === 0) &&
  item?.menu?.length > 0 &&
  item.menu.map((menuItem, idx) => (
    <p key={idx}>{menuItem}</p>
  ))
}
        </div>
        <div className="text-sm md:text-base text-black/60">
          <p className="text-black/80">
            {order.address.firstName} {order.address.lastName}
          </p>
          <p>
            {order.address.street}, {order.address.city}
          </p>
          <p>
            {order.address.state}, {order.address.zipcode}{" "}
            {order.address.country} - {order.address.pincode}
          </p>
          <p>{order.address.phone}</p>
        </div>
      </div>
    ))}
  </div>
))}
    </div>
  )
}
export default MyOrders