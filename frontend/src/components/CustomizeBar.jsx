import React from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const CustomizeBar = (selectedOptions) => {

  const {cart, setCart, selectedPlatter, setSelectedPlatter, navigate} = useAppContext()
  const {_id} = useParams()
  // console.log(_id)

  // const handleCart = () => {
  //   setCart( (prev)=>
  //     [...prev, selectedPlatter]
  //    )
  //    toast.success("Added To Cart")
  // }
  // console.log((Object?.values(selectedPlatter?.selectedOptions)?.filter( (item)=> item !== null ).length !== 0), 'Hello')

 const isAllFilled = (options) => {
  return Object.values(options).every((val) => {

    // ❌ Case 1: null value (NOT filled)
    if (val === null) return false;

    // ❌ Case 2: array with null values
    if (Array.isArray(val)) {
      return val.every(item => item !== null && item !== "");
    }

    // ❌ Case 3: empty string
    if (val === "") return false;

    // ✔ Case 4: valid string or non-empty value
    return true;
  });
};



  const handleCart = (_id) => {
    // console.log(Object.values(selectedPlatter.selectedOptions)?.filter( (item)=> item !== null ).length !== 0)

    if( (Object?.values(selectedPlatter?.selectedOptions)?.filter( (item)=> item !== null ).length !== 0) && (selectedPlatter.name === 'Short Menu' || selectedPlatter.name === 'Breakfast' )  ){
        setCart((prev) => {
    const alreadyInCart = prev.some((item) => item._id === selectedPlatter._id);

    if (alreadyInCart) {
      toast.error("Already in Cart");
      navigate(`/fill-details/${_id}`)
      return prev;
    }
    const updatedCart = [...prev, selectedPlatter];
    toast.success("Added To Cart");
    // console.log("Success", updatedCart);
    navigate(`/fill-details/${_id}`)
    setSelectedPlatter({})
    return updatedCart;
  });
    } else {
          if( (Object?.values(selectedPlatter?.selectedOptions)?.filter( (item)=> item !== null ).length > 2) && selectedPlatter.name === 'Menu A'  ){
            setCart((prev) => {
            const alreadyInCart = prev.some((item) => item._id === selectedPlatter._id);
            
        if (alreadyInCart) {
          toast.error("Already in Cart");
          navigate(`/fill-details/${_id}`)
          return prev;
        }
        const updatedCart = [...prev, selectedPlatter];
        toast.success("Added To Cart");
        // console.log("Success", updatedCart);
        navigate(`/fill-details/${_id}`)
        setSelectedPlatter({})
        return updatedCart;
        });
        }else {
          if (isAllFilled(selectedPlatter?.selectedOptions)) {
  setCart((prev) => {
    const alreadyInCart = prev.some((item) => item._id === selectedPlatter._id);

    if (alreadyInCart) {
      toast.error("Already in Cart");
      navigate(`/fill-details/${_id}`);
      return prev;
    }

    const updatedCart = [...prev, selectedPlatter];
    toast.success("Added To Cart");
    // console.log("Success", updatedCart);
    navigate(`/fill-details/${_id}`);
    setSelectedPlatter({});
    return updatedCart;
  });
          } else {
            toast.error('Kindly Select Required Platter')
          }
          }
        }   
};
  // console.log("selectedOptions",selectedOptions)
  // console.log("selectedPlatter",selectedPlatter)

  return (
        <div className="fixed bottom-0 left-0 w-full z-50 shadow-md">
         <div
    className="flex h-14 justify-between md:justify-around px-5 border-t border-gray-200 bg-green-300 shadow-lg"
  >
    <div className="flex flex-col items-center justify-center text-gray-950">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg> */}
      {/* <div className="text-sm">Add Product To Cart</div> */}
    </div>
    <div className="flex flex-col items-center justify-center text-gray-950">
      
      <button 
      onClick={()=>handleCart(_id)}
      className="flex flex-row gap-2 items-center w-fit cursor-pointer px-4 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
    >
      <img
        src="https://www.svgrepo.com/show/440930/cart-add.svg"
        className="h-6.5"
        alt="Add to cart"
      />
      <span>Add To Cart</span>
    </button>
    </div>
  </div>
  </div>
  )
}

export default CustomizeBar