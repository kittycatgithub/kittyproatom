import { useEffect, useState } from "react"
import { useAppContext } from "../../context/AppContext"
// import { dummyAddress } from "../assets/assets1"
import toast from "react-hot-toast"
import { assets } from "../../assets/assets"

const StoreCart = () => {
    const { products, storeProducts, currency, storeCartItems, removeFromStoreCart, getStoreCartCount, 
      updateStoreCartItem, navigate, getCartAmount, axios, user, setStoreCartItems, setShowUserLogin } = useAppContext()
      const [cartArray, setCartArray] = useState([])
      const [addresses, setAddresses] = useState([])
      const [showAddress, setShowAddress] = useState(false)
      const [selectedAddress, setSelectedAddress] = useState(null)
      const [paymentOption, setPaymentOption] = useState("Online")

      const getStoreCart = (item) => {
        let tempArray = []
        for(const key in storeCartItems){
          const product = storeProducts.find( (item)=> item._id === key)
          product.quantity = storeCartItems[key]
          tempArray.push(product)
        }
        setCartArray(tempArray)
      }

      const getUserAddress = async ()=> {
        try {
            const { data } = await axios.get('/api/address/get')
            if(data.success){
                setAddresses(data.addresses)
                if( data.addresses.length > 0 ){
                    setSelectedAddress(data.addresses[0])
                }
            } else{ 
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
      }

      useEffect(()=> {
        if(products.length > 0 && storeCartItems ){
          getStoreCart()
        }
        // console.log(storeCartItems)
      }, [products, storeCartItems])

      const placeOrder = async () => {
        try {
            if(!selectedAddress){
               return toast.error("Please Select Address")
            }
            console.log(cartArray.map( item => ({product: item._id, quantity: item.quantity})), 'cartArray')
            console.log('first')
            let finalPrice = totalAmount + 50
            // Razorpay payment Gateway code starts
            // This code is responsible to open payment gateway window
                const { data } = await axios.post("/api/order/razorpay/init", {
                userId: user._id,
                amount: finalPrice
                });

                await new Promise(resolve => {

                const options = {
                    key: data.key,
                    amount: data.order.amount,
                    currency: "INR",
                    name: "Baron Kitchen",
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
                
            // Place Order with Razorpay
            if( paymentOption === "Online" ){
                const {data} = await axios.post('/api/order/store', {
                    userId: user._id,
                    items: cartArray.map( item => ({product: item._id, quantity: item.quantity})),
                    address: selectedAddress._id,
                    storeamount: finalPrice
                })
                if( data.success ){
                    toast.success(data.message)
                    setCartArray([])
                    navigate('/my-orders')
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
      }
    
      useEffect( ()=> {
        if( user ){
            getUserAddress()
        }
      }, [user] )

      let totalAmount = 0
      cartArray.forEach( (item)=> {
        totalAmount = totalAmount + item?.price* item?.quantity
          console.log(totalAmount)
        }
      )

    return products.length > 0 && storeCartItems ? (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-button">{getStoreCartCount()} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>
                { console.log(cartArray) }
                {cartArray.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-black items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-2">
                            <div onClick={ ()=>{
                            //   navigate(`/menu/${product.category.toLowerCase()}`);
                              scrollTo(0,0)
                            } } className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                {/* <img className="max-w-full h-full object-cover" src={`${import.meta.env.VITE_BACKEND_URL}/products/${product.image}` } alt={product.name} /> */}
                                <img className="max-w-full h-full object-cover " src="https://madhurasrecipe.com/wp-content/uploads/2023/03/Patawarachi-Puranpoli-Featured.jpg" alt={product.name} />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-black">
                                    {/* <p>Size: <span>{product.size || "N/A"}</span></p> */}
                                    <div className='flex items-center'>
                                        {/* <p>Qty: { storeCartItems[product._id] }</p> */}
                                        <label className="pr-1" htmlFor="">Qty : </label>
                                        {/* <input defaultValue ={ storeCartItems[product._id] } type="number"/> */}
                                        <input
                                          value={storeCartItems[product._id]}
                                          onChange={e => updateStoreCartItem(product._id, e.target.value)}
                                          type="number"
                                          min="1"
                                          className="w-10 md:w-20 border border-gray-300 rounded-md px-1 md:px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        {/* <select  className='outline-none'>
                                            {Array(cart[product._id] > 9 ? cart[product._id] : 9 ).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <p className="text-center">${product.offerPrice * product.quantity}</p> */}
                        <p className="text-center">{currency} {product.price * product.quantity}</p>
                        <button onClick={ ()=> removeFromStoreCart(product._id)} className="cursor-pointer mx-auto">
                            <img src={assets.remove_icon} alt="remove" className="inline-block w-6 h-6" />
                        </button>
                    </div>)
                )}
                <button onClick={ ()=> {
                  navigate('/');
                  scrollTo(0,0)
                } } className="group cursor-pointer flex items-center mt-8 gap-2 text-button font-medium">
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
                         { user ? 
                            (<p className="text-gray-500">{ selectedAddress ? `${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state}, India` : "No address found" }</p>) : 
                            (<p className="text-red-500">Login / Register To Add Address</p>)  
                        }
                        { user && 
                            <button onClick={() => setShowAddress(!showAddress)} className="text-indigo-500 hover:underline cursor-pointer">
                            Add Address
                            </button>
                        }   
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                               {addresses.map( (address, index)=> (
                                <p onClick={() => {
                                  setSelectedAddress(address);
                                  setShowAddress(false);

                                }} className="text-gray-500 p-2 hover:bg-gray-100">
                                    {address.address}, {address.city}, {address.state}
                                </p>
                               ) ) }
                                <p onClick={() => {
                                  setShowAddress(false);
                                   navigate('/add-address');
                                  //  scrollTo(0,0)                                  
                                  }} className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={ (e)=> setPaymentOption(e.target.value) } className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        {/* <option value="COD">Cash On Delivery</option> */}
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-800 mt-4 space-y-2">
                    <p className="flex justify-between">
                        {/* <span>Price</span><span>{currency} {getCartAmount()}</span> */}
                        <span>Price</span><span>{currency} {totalAmount}</span>
                    </p>
                    {/* <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p> */}
                    <p className="flex justify-between text-green-600">
                        <span>Delivery Charges ({currency} 50)</span><span>{currency} 50</span>
                    </p>
                    {/* <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency} {getCartAmount()* 2 / 100}</span>
                    </p> */}
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>
                          {currency} { totalAmount + 50 }</span>
                    </p>
                </div>
                {/* <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-green-500 text-white font-medium hover:bg-green-700 transition">
                    Proceed To CheckOut
                </button> */}
                {
                  user ? (
                    <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                        Place Order
                    </button>
                  ) : (
                    // <button onClick={() => toast.error('Login To Continue')} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                    <button onClick={()=> setShowUserLogin(true)} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary-dull transition">
                        Login To Place Order 
                    </button>
                  )
                }     
            </div>
        </div>
    ): null
}
export default StoreCart