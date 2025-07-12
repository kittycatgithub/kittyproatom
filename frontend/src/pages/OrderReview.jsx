import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { assets, dummyAddress } from "../assets/assets"
import toast from "react-hot-toast"
import { data } from "react-router-dom"

const OrderReview = () => {
    const {products, currency, cartItems, removeFromCart, getCartCount, updateCartItem, getCartAmount, cart ,setCart , navigate, axios, user} = useAppContext()
    const [cartArray , setCartArray] = useState([])
    const [addresses , setAddresses] = useState([])

    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [paymentOption, setPaymentOption] = useState("COD")

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
const filteredCart = cart.filter(item => item.details && Object.keys(item.details).length !== 0);
    try {
    if (!selectedAddress) {
        return toast.error("Please Select Address");
    }

    // Place Order with COD
    if (paymentOption === "COD") {
        const filteredCart = cart.filter(
            item => item.details && Object.keys(item.details).length !== 0
        );

        if (filteredCart.length === 0) {
            return toast.error("No items with valid details to place an order.");
        }

        for (const item of filteredCart) {
            const { data } = await axios.post('/api/order/cod', {
                userId: user._id,
                platters: [{
                    _id: item._id,
                    name: item.name,
                    path: item.path,
                    badge: item.badge,
                    category: item.category,
                    offerPrice: item.offerPrice,
                    details: item.details,
                    selectedOptions: item.selectedOptions,
                    menu: item.menu
                }],
                address: selectedAddress._id
            });

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(`${data.message} Hello`);
            }
        }

        // Clear cart and redirect after processing all
        setCart([]);
        navigate('/my-orders');
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


    return  (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl lg:pr-1'>
                <h1 className="text-3xl font-medium mb-6">
                    Order Review <span className="text-sm text-indigo-500">{cart.length} Items</span>
                </h1>

                {/* <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Edit</p>
                    <p className="text-center">Action</p>
                </div> */}
{console.log(cart)}
                {cart.map((product, index) => (
                   <div key={index} className="">
                     { product?.details?.date  ? 
                    //  { product.details  ? 
                    (<div  className=" text-gray-500 items-center text-sm md:text-base font-medium pt-3 border pl-1">
                        <div className="flex flex-col lg:flex-row md:gap-6 gap-3">
                            <div className="flex flex-row gap-6">
                                <div className="cursor-pointer w-24 h-24 flex items-start justify-start border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.path} alt={product.name} />
                            </div>
                            <div className="space-y-1 text-gray-700 text-md">
                                <p className="text-xl text-purple-700">{product.name}</p>
                                <p>Occassion - {product.details.occasion}</p>
                                <p>Date - {product.details.date}</p>
                                <p>Guests - {product.details.guests}</p>
                                <p>Time - {product.details.time}</p>
                                <p>
                                 Total Price - {currency} {new Intl.NumberFormat('en-IN').format(product.details.totalPrice * product.details.guests)}
                                </p>
                            </div>
                            </div>
                            <div className="space-y-1 text-gray-700 text-md">
                                <h1 className="text-xl text-purple-700">Platter</h1>
                                 { product?.category === "meal-thali-snack-boxes" ? (
                            product.menu.map( (item, index) => 
                            <p key={index}> {item} </p> )
                        ) : ('')}
                        <div>
                            {/* <h1 className="text-xl text-purple-700">Platter 3012</h1> */}
                             {(product.category || product.keyword === "snacks") ? (
                                product.selectedOptions &&
                                Object.entries(product.selectedOptions).map(([key, value], index) => {
                                  if (!value) return null;                                
                                  if (typeof value === "string") {
                                    return (
                                      <p key={`${index}`} className="text-sm">
                                        {key}: {value}
                                      </p>
                                    );
                                  }
                                if (Array.isArray(value)) {
                                      return value.map((item, subIndex) => {
                                        const [subKey, subValue] = Object.entries(item)[0];
                                        return (
                                          <p key={`${index}-${subIndex}`} className="text-sm">
                                            {key}: {subValue}
                                          </p>
                                        );
                                      });
                                    }
                                
                                    return null;
                                  })
                                ) : null}
                        </div>                       
                            </div>
                            <div>
                                <button onClick={()=> handleRemoveFromCart(product._id)} className="cursor-pointer mx-auto flex flex-row text-red-600 border p-2"> Remove  
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
                )
                )}

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
                        <p className="text-gray-500">{ selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country} - ${selectedAddress.pincode} ` : "No address found"  }</p>


                        <button onClick={() => setShowAddress(!showAddress)} className="text-indigo-500 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                { addresses.map( (address, index)=> (<p key={index} onClick={() => {setShowAddress(false); setSelectedAddress(address)}} className="text-gray-500 p-2 hover:bg-gray-100">
                                    {address.street},{address.city},{address.state},{address.country} - {address.pincode}
                                </p>) ) }
                                <p onClick={() => {setShowAddress(false); navigate(`/add-address`); scrollTo(0,0)}} className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={ (e)=> setPaymentOption(e.target.value) } className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Half Payment">Half Payment</option>
                        <option value="Full Payment">Full Payment</option>
                    </select>
                                            {/* <option value="Online">Online Payment</option> */}
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}20</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency}20</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{currency}20</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
                    Place Order 
                    {/* Proceed To Checkout  */}
                </button>
            </div>
        </div>
    )
}
export default OrderReview