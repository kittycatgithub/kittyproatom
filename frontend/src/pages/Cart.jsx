import { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { assets, dummyAddress } from "../assets/assets"
import toast from "react-hot-toast"

const Cart = () => {
    const {products, currency, cartItems, removeFromCart, getCartCount, updateCartItem, getCartAmount, cart ,setCart , navigate} = useAppContext()
    const [cartArray , setCartArray] = useState([])
    const [addresses , setAddresses] = useState(dummyAddress)

    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0])
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
    console.log(product._id)
    navigate(`/fill-details/${product._id}`)
}
return  (
        <div className=" md:flex-row py-16 max-w-6xl w-full px-3 mx-auto">
            <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-indigo-500">{cart.length} Items</span>
                </h1>
            <div className='grid lg:grid-cols-2 justify-between max-w-6xl space-y-3'>
{console.log(cart)}
                {cart.map((product, index) => (
                    <div key={index} className="grid text-gray-700 border-1 border-gray-300 min-w-[340px]  md:max-w-lg items-center text-sm md:text-base font-normal">
                        <div className="flex md:gap-6 gap-3 justify-start p-2 items-start">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.path} alt={product.name} />
                            </div>
                            <div>
                                <p className=" text-black text-xl">{product.name}</p>
     {/* {product.category || product.keyword === "catering" ? 
  Object.entries(
    product.name === "Short Menu" || "Breakfast"
      ? Object.fromEntries(
          Object.entries(product.selectedOptions).filter(([_, value]) => value !== null)
        )
      : product.selectedOptions
  ).map(([key, value]) => {
    let displayValue = "";

    if (Array.isArray(value)) {
      // If array of objects, extract readable names
      displayValue = value
        .map(item => {
          if (typeof item === "string") return item;
          if (typeof item === "object" && item !== null) {
            return Object.values(item).join(", "); // Join object values
          }
          return "";
        })
        .join(", ");
    } 
    else if (typeof value === "string") {
      displayValue = value;
    } 
    else {
      displayValue = "";
    }

    return (
      <p key={key} className="justify-around text-justify content-between">
        {key.replace(/([A-Z])/g, ' $1').trim()} ⟶ {displayValue || "None"}
      </p>
    );
  })
  : null
} */}
{product.category || product.keyword === "catering" ? 
  Object.entries(
    product.name === "Short Menu" || product.name === "Breakfast"
      ? Object.fromEntries(
          Object.entries(product.selectedOptions).filter(([_, value]) => value !== null)
        )
      : product.selectedOptions
  ).map(([key, value]) => {
    let displayValue = "null"; // default fallback

    if (Array.isArray(value)) {
      // If array of objects or strings
      const arrValues = value
        .map(item => {
          if (typeof item === "string" && item.trim() !== "") return item;
          if (typeof item === "object" && item !== null) {
            const joined = Object.values(item).filter(Boolean).join(", ");
            return joined || null;
          }
          return null;
        })
        .filter(Boolean);

      displayValue = arrValues.length > 0 ? arrValues.join(", ") : "null";
    } 
    else if (typeof value === "string") {
      displayValue = value.trim() !== "" ? value : "null";
    } 
    else if (value !== null && value !== undefined) {
      displayValue = String(value);
    }

    return (
      <p key={key} className="justify-around text-justify content-between">
        {key.replace(/([A-Z])/g, ' $1').trim()} ⟶ {displayValue}
      </p>
    );
  })
  : null
}

{(
  (product.category === "meal-thali-snack-boxes" || product.keyword === "meal-thali-snack-boxes") &&
  (product.name !== "Snack Box A" && product.name !== "Snack Box B")
                                ) ? 
                                (product.menu && product.menu.map((item, index) => (
                                  <p key={index} className="text-sm">{item}</p>
                                ))) : ('')
                                }
          {(product.name === "Snack Box A" || product.name === "Snack Box B") &&
  product.selectedOptions &&
  Object.entries(product.selectedOptions).map(([key, value], index) => (
    <div key={index} className="text-sm">
      <span>{key} ⟶ </span>{" "}
      {Array.isArray(value)
        ? value.map((v, i) => (
            <span key={i}>
              {Object.values(v).join(", ")}
              {i < value.length - 1 ? ", " : ""}
            </span>
          ))
        : value || "N/A"}
    </div>
  ))}

                                {/* { product.category || product.keyword === "snacks" ? 
                                        (product.selectedOptions && Object.values(product.selectedOptions).map((item, index) => (
                                  <p key={index} className="text-sm">{item}</p>
                                )) ) : ('')
                                } */}
                                {/* {(product.category || product.keyword === "snacks") ? (
  product.selectedOptions &&
  Object.entries(product.selectedOptions).map(([key, value], index) => {
    if (!value) return null;

    if (typeof value === "string") {
      return (
        <p key={`${index}`} className="text-sm">
          {key} ⟶ {value}
        </p>
      );
    }
    if (Array.isArray(value)) {
      return value.map((item, subIndex) => {
        const [subKey, subValue] = Object.entries(item)[0];
        return (
          <p key={`${index}-${subIndex}`} className="text-sm">
            {key} ⟶ {subValue}
          </p>
        );
      });
    }
    return null;
  })
) : null} */}

                                {/* { product.category  === "bulk-delivery" ? 
                                        (product.selectedOptions && Object.values(product.selectedOptions).map((item, index) => (
                                  <p key={index} className="text-sm">{item}</p>
                                )) ) : ('')
                                } */}
                                {product.category === "bulk-delivery" ? (
  product.productDetails &&
  Object.entries(product.productDetails).map(([key, value], index) => {
    const [categoryName, itemName] = key.split(":");
    return (
      <p key={index} className="text-sm">
        {categoryName} ⟶  {itemName} — {value.qty} {value.unit}
      </p>
    );
  })
) : null}</div>
                        </div>
                        <hr className="text-gray-300"/>
                        {/* <p className="text-center">${product.offerPrice * product.quantity}</p> */}
                  <div className="flex flex-row p-2 justify-around">
  <button onClick={ ()=> handleResume(product)  } className="text-lg bg-primary p-1 rounded-full text-white shadow-xl shadow-gray-200 hover:shadow-sm">
    Resume 
  </button>
  {/* <p className="text-center">${product.offerPrice * product.quantity}</p> */}
  <div className=" content-center">
            <button onClick={()=> handleRemoveFromCart(product._id)} className="cursor-pointer mx-auto flex flex-row"> Remove
                            <img src={assets.remove_icon} alt="remove" />
                        </button>
  </div></div>                             
                    </div>)
                )}
            </div>
             <button onClick={()=>{navigate("/"); scrollTo(0,0)}} className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium">
                    <img className="group-hover:-translate-x-1 transition" src={assets.arrow_right_icon_colored} alt="arrow" />
                    Continue Shopping
                </button>
        </div>
    )
}
export default Cart