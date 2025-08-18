import { useState } from "react";
import { assets } from "../../assets/assets.js";
import { useAppContext } from "../../context/AppContext";

const ProductCard = ({product}) => {

    const { currency, addToStoreCart, removeFromStoreCart, storeCartItems, cart, navigate } = useAppContext()

    return product && (
        // <div onClick={ ()=> {navigate(`/menu/${product.category.toLowerCase()}/${product._id}`);
        <div className="border border-gray-400 rounded-lg p-4 shadow-sm">
            <img
              src="https://madhurasrecipe.com/wp-content/uploads/2023/03/Patawarachi-Puranpoli-Featured.jpg"
              alt="Pizza"
              className="w-full h-60 object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            {/* <p className="text-sm text-gray-600 mt-1">
              6 Veggie Blockbusters in 1 Epic Pan Pizza...
            </p> */}
            <div className="flex justify-between items-center mt-3">
              <span className="font-bold text-green-600">{currency} {product.price}.00</span>
              <div onClick={ (e)=> { e.stopPropagation() } } className="text-black">
                        {!storeCartItems[product._id] ? (
                            <button onClick={() => addToStoreCart(product._id)}  className="flex cursor-pointer items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[130px] w-[180px] h-[34px] rounded font-medium" >
                                <img src={assets.cart_icon} alt="cart_icon" className="w-4" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-[130px] w-[180px] h-[34px] bg-indigo-500/25 rounded select-none">
                                <button onClick={() => {removeFromStoreCart(product._id)}} className="cursor-pointer text-2xl px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{storeCartItems[product._id]}</span>
                                <button onClick={() => {addToStoreCart(product._id)}} className="cursor-pointer text-2xl px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
               </div>
            </div>
        </div>        
    );
};
export default ProductCard