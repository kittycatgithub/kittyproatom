import Order from "../models/Order.js";

// Place Order COD : /api/order/cod
export const placeOrderCOD = async ( req, res ) => {
    try {
        const { userId, platters, address, note } = req.body;
        if(!address || platters.length === 0){
            return res.json({ success: false, message: "Invalid Data" })
        } 
        // Calculate Amount Using Items
        // let amount = await platters.reduce( async( acc, item ) => {
        //     // const product = await Product.findById(item.product)
        //     return (await acc) + CSSMathProduct.offerPrice * item.guests
        // }, 0 )
        // Add Tax Charge 5 %
        // amount += Math.floor(amount * 0.05)

        // Get Current Date
        const date = new Date().toLocaleDateString('en-GB')
        const [ day, month, year ] = date.split('/')

        let serialNumber = '0001' // default for first order of the year

        // MongoDB auto-generates _id and you cannot convert it into: BISPL/11/2025/0001. This is why we create a custom formatted orderId.

        const lastOrder = await Order.findOne()
                                     .sort({createdAt : -1 }) // get latest order
                                     .exec()

        if(lastOrder) {
            // Extract year and serial from the previous orderId
            const lastOrderId = lastOrder.orderId || ''
            const parts = lastOrderId.split('/')
            const lastYear = parts[2]
            const lastSerial = parts[3]

            // If same year, increment serial number; else reset
            if( lastYear == year && lastSerial ){
                serialNumber = (parseInt(lastSerial) + 1).toString().padStart(4, "0");
            }
        }
        // Generate custom orderId
        const orderId = `BISPL/${month}/${year}/${serialNumber}`;

        await Order.create({
            orderId,   // <-- custom field
            userId,
            platters,
            address,
            note,
            paymentType: "COD",
        })
        // amount,

        // return res.json({ success: true, message: "Order Placed Successfully" })
        return res.json({ success: true, message: "Thank You For Order! You will soon receive call from us." })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

// Get Orders by User ID : /api/order/user
export const getUserOrders = async ( req, res ) => {
    try {
        const { userId } = req.body;
        const orders = await Order.find({
            userId, 
            $or: [{paymentType: "COD"}, { isPaid: true }]
        }).populate("platters address").sort({ createdAt: -1 })
        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message:error.message })
    }
}
// Get All Orders (for seller / admin) : /api/order/seller
export const getAllOrders = async ( req, res ) => {
    try {
        const orders = await Order.find({
            $or: [{paymentType: "COD"}, { isPaid: true }]
        }).populate("platters address").sort({ createdAt: -1 })
        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message:error.message })
    }
}