import User from "../models/User.js";

// Update User CartData : /api/cart/update
export const updateStoreCart = async ( req, res ) => {
    try {
        // const { userId, cartItems } = req.body;
        const { userId, storeCartItems } = req.body;
        await User.findByIdAndUpdate(userId, {storeCartItems})
        res.json({success: true, message: "Cart Updated"  })
        
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}
