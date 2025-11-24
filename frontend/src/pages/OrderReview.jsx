import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { assets, dummyAddress } from "../assets/assets"
import toast from "react-hot-toast"
import { data } from "react-router-dom"
import FooterBar from "../components/FooterBar"

const OrderReview = () => {
    const {products, currency, cartItems, removeFromCart, getCartCount, updateCartItem, getCartAmount, cart ,setCart , navigate, axios, user, setShowUserLogin} = useAppContext()
    const [cartArray , setCartArray] = useState([])
    const [addresses , setAddresses] = useState([])
    const [notes, setNotes] = useState({});
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [paymentOption, setPaymentOption] = useState("Full Payment")

    const getCart = ()=> {
        let tempArray = []
        for(const key in cartItems){
            const product = products.find((item)=> item._id === key)
            product.quantity = cartItems[key]
            tempArray.push(product)
        }
        setCartArray(tempArray)
    }

    // Get User Address
    const getUserAddress = async () => {
        try {
            const { data } = await axios.get('/api/address/get')
            // console.log(data)
            if(data.success){
                setAddresses(data.addresses)
                if(data.addresses.length > 0){
                    setSelectedAddress(data.addresses[0])
                    // console.log(selectedAddress)
                }
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect( ()=>{
        if(products.length > 0 && cartItems ) {
            getCart()
        }
    }, [products, cartItems] )

    const handleRemoveFromCart = (productId) => {
  const isInCart = cart.some((item) => item._id === productId);
  if (!isInCart) {
    toast.error("Item not in Cart");
    return;
  }
  setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  toast.success("Removed from Cart");
};

// Resume Button Logic

const handleResume = ( product ) =>{
    // console.log(product._id)
    navigate(`/fill-details/${product._id}`)
    scrollTo(0,0)
}

// Place Order Function
//  const placeOrder = async () => {
//     try {
//         if(!selectedAddress){
//             return toast.error("Please Select Address")
//         }
        
//         // Place Order with COD
//         if(paymentOption === "COD"){
//             console.log("Api Wala", cart)
//             const {data} = await axios.post('/api/order/cod', {
//                 userId: user._id,
//                 platters:cart.map(item => ({
//                     _id: item._id,
//                     name: item.name,
//                     path: item.path,
//                     badge: item.badge,
//                     category: item.category,
//                     offerPrice: item.offerPrice,
//                     details: item.details,
//                     selectedOptions: item.selectedOptions
//                 })),  address: selectedAddress._id
//             })
//              if(data.success){
//                toast.success(data.message)
//                setCart([])
//                navigate('/my-orders')
//              } else {
//                  toast.error(`${data.message} Hello`)
//              }
//         }
       
//     } catch (error) {
//         toast.error(error.message)
//     }
//  }

// Place Order Function
 const placeOrder = async () => {
    // Filter items that have data in 'details'
    // const filteredCart = cart.filter(item => item.details && Object.keys(item.details).length !== 0);
    try {
    if (!selectedAddress) {
        return toast.error("Please Select Address");
    }
    // Place Order with COD
    if (paymentOption === "COD") {
        const filteredCart = cart.filter(
            item => item.details && Object.keys(item.details).length !== 0
        );
        console.log(filteredCart, 'filteredCart')

        if (filteredCart.length === 0) {
            return toast.error("No items with valid details to place an order.");
        }
        
        for (const item of filteredCart) {
            // ✅ Inline price calculation
        const deliveryCharge = 100;
        // let gst = (item.offerPrice * item.details.guests * 5) / 100;
        let gst = (item?.details?.totalPrice * item.details.guests * 5) / 100;
        const finalPrice = (item?.details?.totalPrice * item.details.guests) + deliveryCharge + gst;
        // const finalPrice = (item.offerPrice * item.details.guests) + deliveryCharge + gst;
    
        // console.log(item.offerPrice, "item.offerPrice")
        // console.log(item.details.guests, "item.details.guests")
        // console.log(deliveryCharge, "deliveryCharge")
        // console.log(gst, "gst")
        // console.log(finalPrice, "finalPrice")

            const { data } = await axios.post('/api/order/cod', {
                userId: user._id,
                platters: [{
                    _id: item._id,
                    name: item.name,
                    path: item.path,
                    badge: item.badge,
                    category: item.category,
                    offerPrice: finalPrice,
                    details: item.details,
                    selectedOptions: item.selectedOptions,
                    productDetails: item.productDetails || {},
                    menu: item.menu
                }],
                address: selectedAddress._id,
                note: notes[item._id] || "", // 🔥 pick note for this product only
            });
            if (data.success) {
                toast.success(data.message, { duration: 3000 });
            } else {
                toast.error(`${data.message}`);
            }
        }

        // Clear cart and redirect after processing all
        setCart([]);
        navigate('/my-orders');
        scrollTo(0,0)
    }

    if (paymentOption === "Full Payment") {
        const filteredCart = cart.filter(  item => item.details && Object.keys(item.details).length !== 0  );
        console.log(filteredCart, 'filteredCart')

        if (filteredCart.length === 0) {
            return toast.error("No items with valid details to place an order.");
        }
// Razorpay payment Gateway code starts
        const { data } = await axios.post("/api/order/razorpay/init", {
          userId: user._id,
          amount: totalAmount
        });

        await new Promise(resolve => {

          const options = {
            key: data.key,
            amount: data.order.amount,
            currency: "INR",
            name: "Your Company",
            order_id: data.order.id,
          
           handler: function (response) {
              toast.success("Payment Successful!");
              resolve();  // continue
            }
          };
        
          const rzp = new window.Razorpay(options);
          rzp.open();
        });
// Razorpay Payment Gateway Code Ends
        
        for (const item of filteredCart) {
            // ✅ Inline price calculation
            const deliveryCharge = 100;
            // let gst = (item.offerPrice * item.details.guests * 5) / 100;
            let gst = (item?.details?.totalPrice * item.details.guests * 5) / 100;
            const finalPrice = (item?.details?.totalPrice * item.details.guests) + deliveryCharge + gst;
            // const finalPrice = (item.offerPrice * item.details.guests) + deliveryCharge + gst;

            // ---- CREATE RAZORPAY ORDER ----
            const { data } = await axios.post('/api/order/razorpay/confirm', {
                userId: user._id,
                platters: [{
                    _id: item._id,
                    name: item.name,
                    path: item.path,
                    badge: item.badge,
                    category: item.category,
                    offerPrice: finalPrice,
                    details: item.details,
                    selectedOptions: item.selectedOptions,
                    productDetails: item.productDetails || {},
                    menu: item.menu
                }],
                address: selectedAddress._id,
                note: notes[item._id] || "", // 🔥 pick note for this product only
            });
            if (data.success) {
                console.log(data?.order, 'Razorpay API Response')
                toast.success(data.message, { duration: 3000 });
            } else {
                toast.error(`${data.message}`);
            }
      }

        // Clear cart and redirect after processing all
        setCart([]);
        navigate('/my-orders');
        scrollTo(0,0)
    }
    if (paymentOption === "Half Payment") {
        const filteredCart = cart.filter(
            item => item.details && Object.keys(item.details).length !== 0
        );
        console.log(filteredCart, 'filteredCart')

        if (filteredCart.length === 0) {
            return toast.error("No items with valid details to place an order.");
        }
        
        for (const item of filteredCart) {
            // ✅ Inline price calculation
    const deliveryCharge = 100;
    // let gst = (item.offerPrice * item.details.guests * 5) / 100;
    let gst = (item?.details?.totalPrice * item.details.guests * 5) / 100;
    const finalPrice = (item?.details?.totalPrice * item.details.guests) + deliveryCharge + gst;
    // const finalPrice = (item.offerPrice * item.details.guests) + deliveryCharge + gst;
    
    // console.log(item.offerPrice, "item.offerPrice")
    // console.log(item.details.guests, "item.details.guests")
    // console.log(deliveryCharge, "deliveryCharge")
    // console.log(gst, "gst")
    // console.log(finalPrice, "finalPrice")

            const { data } = await axios.post('/api/order/cod', {
                userId: user._id,
                platters: [{
                    _id: item._id,
                    name: item.name,
                    path: item.path,
                    badge: item.badge,
                    category: item.category,
                    offerPrice: finalPrice,
                    details: item.details,
                    selectedOptions: item.selectedOptions,
                    productDetails: item.productDetails || {},
                    menu: item.menu
                }],
                address: selectedAddress._id,
                note: notes[item._id] || "", // 🔥 pick note for this product only
            });

            if (data.success) {
                toast.success(data.message, { duration: 3000 });
            } else {
                toast.error(`${data.message}`);
            }
        }

        // Clear cart and redirect after processing all
        setCart([]);
        navigate('/my-orders');
        scrollTo(0,0)
    }
} catch (error) {
    toast.error("Something went wrong while placing the order.");
    console.error(error);
}
 }
 

 useEffect( ()=> {
    if(user){
        getUserAddress()
    }
 }, [user] )



// const handleNote = (e) => {
//     e.preventDefault()
//   setNote(e.target.value);
//   console.log(note)
// };

const handleNoteChange = (productId, value) => {
  setNotes(prev => ({
    ...prev,
    [productId]: value
  }));
};

//  Pricing Calculation
const [price, setPrice] = useState(0);
const [gst, setGst] = useState(0);
const [shipping] = useState(100);
const [totalAmount, setTotalAmount] = useState(0);
console.log(totalAmount, "totalAmount")

   useEffect(() => {
  const gstAmount = (price * 5) / 100; // 5% GST
  setGst(gstAmount);
//   setTotalAmount(price + gstAmount + shipping * cart.length); // Total = price + GST + delivery
  setTotalAmount(price + gstAmount + shipping * cart.filter(product => product?.details?.date).length); // Total = price + GST + delivery
}, [price, shipping]);

  useEffect(() => {
  if (cart && cart.length > 0) {
    const total = cart.reduce((sum, product) => {
      if (product?.details?.totalPrice && product?.details?.guests) {
        return sum + (product.details.totalPrice * product.details.guests);
      }
      return sum;
    }, 0);
    setPrice(total);
  } else {
    setPrice(0);
  }
}, [cart]);

    return  (
        <div className="flex flex-col md:flex-row py-16 max-w-full px-6 mx-auto w-full gap-3">
            <div className='flex-1 max-w-5xl lg:pr-1'>
                <h1 className="text-3xl font-medium mb-6">
                    Order Review <span className="text-sm text-purple-800">
                        {/* {cart.length} */}
                        { cart.filter(product => product?.details?.date).length } Items</span>
                </h1>

                {/* <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Edit</p>
                    <p className="text-center">Action</p>
                </div> */}
{console.log(cart)}
                {cart.map((product, index) => (
                   <div key={index} className="mb-3">
                     { product?.details?.date  ? 
                    //  { product.details  ? 
                    (<div  className=" text-gray-500 items-center text-sm md:text-base font-medium pt-3 border rounded-sm  pl-1 ">
                        <div className="flex flex-col lg:flex-row md:gap-6 gap-3 md:justify-around">
                            <div className="flex flex-row gap-6">
                                <div className="cursor-pointer w-24 h-24 flex items-start justify-start border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.path} alt={product.name} />
                            </div>
                            <div className="space-y-1 text-gray-700 text-sm">
                                <p className="text-xl text-purple-800">Details</p>
                                <p>Occasion - {product.details.occasion === null ? (
                                  <span>Not Selected</span>
                                ) : (
                                  product.details.occasion
                                )}</p>
                                <p>Date - {product.details.date}</p>
                                <p>Guests - {product.details.guests}</p>
                                <p>Time - {product.details.time}</p>
                                <p>
                                 Price - {currency} {new Intl.NumberFormat('en-IN').format(product.details.totalPrice * product.details.guests)}
                                </p>
                                <p>
                                 5% GST - {currency}{new Intl.NumberFormat('en-IN').format( product.details.totalPrice * product.details.guests*0.05)}
                                </p>
                                <p>
                                 Shipping Fee - {currency}{shipping}
                                </p>
                            </div>
                            </div>
                            <div className="space-y-1 text-gray-700 text-sm  pl-2 md:pl-0">
                                <h1 className="text-xl text-purple-800">{product.name}</h1>
                                 { product?.category === "meal-thali-snack-boxes" ? (
                            product.menu.map( (item, index) => 
                            <p key={index}> {item} </p> )
                        ) : ('')}
                        <div>
                           { (product.keyword === "snacks") ? (<p className="text-xl text-purple-800">Selection</p>) : ("")}
                             {(product.category || product.keyword === "snacks") ? (
                                product.selectedOptions &&
                                Object.entries(product.selectedOptions).map(([key, value], index) => {
                                  if (!value) return null;                                
                                  if (typeof value === "string") {
                                    return (
                                      <p key={`${index}`} className="text-sm">
                                        {key} ⟶  {value}
                                      </p>
                                    );
                                  }
                                //   if (typeof value === "string") {
                                //     return (
                                //       <p key={`${index}`} className="text-md">
                                //          {value}
                                //       </p>
                                //     );
                                //   }
                                // if (Array.isArray(value)) {
                                //       return value.map((item, subIndex) => {
                                //         const [subKey, subValue] = Object.entries(item)[0];
                                //         return (
                                //           <p key={`${index}-${subIndex}`} className="text-sm">
                                //             {key}: {subValue}
                                //           </p>
                                //         );
                                //       });
                                //     }
                                
                                    return null;
                                  })
                                ) : null}

                               {product.category === "bulk-delivery"  ? (
                                  Object.entries(product.productDetails || {}).map(([key, value], index) => (
                                    <p key={index} className="text-sm">
                                      {key} ⟶ {value.qty} {value.unit}
                                    </p>
                                  ))
                                ) : null}
                                {product.name === "Breakfast" && product.selectedOptions ? (
  Object.entries(product.selectedOptions).map(([key, value], index) => {
    if (!value || value.length === 0) return null;

    return (
      <p key={index} className="text-sm">
        {key} ⟶ {value.join(", ")}
      </p>
    );
  })
) : null}
                                {product.name === "Short Menu" && product.selectedOptions ? (
  Object.entries(product.selectedOptions).map(([key, value], index) => {
    if (!value || value.length === 0) return null;

    return (
      <p key={index} className="text-sm">
        {key} ⟶ {value.join(", ")}
      </p>
    );
  })
) : null}
                        </div>                       
                            </div>
                            <div className="pb-2">
                                <div className="px-2 w-full">
                                <div>
                                    <label htmlFor={`additionalNote-${product._id}`} className="leading-7 text-lg text-purple-800">Additional Note</label>
                                     <textarea
                                        value={notes[product._id] || ""}
                                        onChange={(e) => handleNoteChange(product._id, e.target.value)}
                                        id={`additionalNote-${product._id}`}
                                        name="additionalNote"
                                        rows="6"
                                        className="w-full font-normal rounded border border-gray-300 focus:border-blue-100 
                                                   focus:ring-1 focus:ring-blue-200 outline-none text-gray-900 py-0 px-2 
                                                   transition-colors duration-200 ease-in-out resize-none"
                                      ></textarea>
                                </div>
                            </div>
                                <button onClick={()=> handleRemoveFromCart(product._id)} className="cursor-pointer mx-auto flex flex-row text-red-600 border p-2 rounded-sm"> Remove  
                            <img src={assets.remove_icon} alt="remove" />
                        </button>
                            </div>
                            
                            {/* {
                                Object.keys(product.selectedOptions).length !== 0 ? (
                                    <div className="text-gray-700 text-md">
                                        {product.selectedOptions && Object.entries(product.selectedOptions).map(([key, value], index) => 
                                          value !== null && (
                                            <p key={index} >
                                              {key} - {value}
                                            </p>
                                          )
                                        )}
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            } */}
                        </div>      
                  {/* <div className="flex justify-center">
  <img src={assets.refresh_icon} alt="Edit" />
</div>     */}
                    </div>): ('')}
                    </div>
                ))}

                <button onClick={()=>{navigate("/"); scrollTo(0,0)}} className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium">
                    <img className="group-hover:-translate-x-1 transition" src={assets.arrow_right_icon_colored} alt="arrow" />
                    Continue Shopping
                </button>
            </div>
            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        {/* <p className="text-gray-500">No address found</p> */}
                        {/* <p className="text-red-500">{ selectedAddress ? `${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state} ` : "Login / Register To Add Address"  }</p> */}

                        { user ? 
                            (<p className="text-indigo-500">{ selectedAddress ? `${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state} ` : 'No address found'  }</p>) : 
                            (<p className="text-red-500">Login / Register To Add Address</p>)  
                        }
                        { user && 
                            <button onClick={() => setShowAddress(!showAddress)} className="text-indigo-500 hover:underline cursor-pointer">
                            Add Address
                            </button>
                        }                        
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                { addresses.map( (address, index)=> (<p key={index} onClick={() => {setShowAddress(false); setSelectedAddress(address)}} className="text-gray-500 p-2 hover:bg-gray-100">
                                    {address.address}, {address.city}, {address.state}, India
                                </p>) ) }
                                <p onClick={() => {setShowAddress(false); navigate(`/add-address`); scrollTo(0,0)}} className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>
                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={ (e)=> setPaymentOption(e.target.value) } className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="Full Payment">Full Payment</option>
                        {/* <option value="Half Payment">Half Payment</option> */}
                        <option value="COD">Cash On Delivery</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                {/* <div className="text-gray-800 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}20</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-700">{currency}100</span>
                    </p>
                    <p className="flex justify-between">
                        <span>GST 5%</span><span  className="text-green-700">{currency}20</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{currency}20</span>
                    </p>
                </div> */}
                <div className="text-gray-800 mt-4 space-y-2">
  {/* <p className="flex justify-between">
    <span>Price</span>
<span>
  {currency}{(price).toFixed(2)}
</span>    */}
 {/* <span>
  {currency}
  {new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)}
</span> */}
  {/* </p> */}
  {/* <p className="flex justify-between">
    <span>5% GST</span>

<span>
  {currency}{(price * 0.05).toFixed(2)}
</span>    */}
 {/* <span>
  {currency}
  {new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)}
</span> */}
  {/* </p> */}
  {/* <p className="flex justify-between">
    <span>Shipping Fee</span>
    <span className="text-green-700">{currency}{shipping * cart.filter(product => product?.details?.date).length}</span>
  </p> */}
  {/* <p className="flex justify-between">
    <span>GST 5%</span>
    <span className="text-green-700">{currency}{gst.toFixed(2)}</span>
  </p> */}
  <p className="flex justify-between text-lg font-medium mt-3">
    <span>Total Amount:</span>
    {/* <span>{currency}{totalAmount.toFixed(2)}</span> */}
    <span>
  {currency}
  {new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalAmount)}
</span>
  </p>
</div>
                {
                  user ? (
                    <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                        Place Order / Ask For Quotation
                    </button>
                  ) : (
                    // <button onClick={() => toast.error('Login To Continue')} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                    <button onClick={()=> setShowUserLogin(true)} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                        Login To Place Order 
                    </button>
                  )
                }                
            </div>
            <div className='block lg:hidden'><FooterBar/></div>
        </div>
    )
}
export default OrderReview