import Order from "../models/Order.js";
import Razorpay from 'razorpay'
import invoiceTemplate from "../templates/invoiceTemplate.js";
import User from "../models/User.js";
import nodemailer from 'nodemailer'


// global variables
const currency = 'inr'

// Gateway Initialized
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

// use this Razorpay Instance i.e razorpayInstance, create Razorpay Payment Controller function

const smtpTransporter1 = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // ❗ important
  auth: {
    user: process.env.GMAIL_BARON,
    pass: process.env.GMAIL_APP_PASSWORD_BARON,
  },
});

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

        const order = await Order.create({
            orderId,   // <-- custom field
            userId,
            platters,   
            address,
            note,
            paymentType: "COD",
        })
        // amount,

        /* ---------------- FETCH USER EMAIL ---------------- */

        const user = await User.findById(userId).lean();
        if (!user?.email) {
        return res.json({
            success: false,
            message: "User email not found",
        });
        }

        /* ---------------- SEND INVOICE EMAIL (HTML) ---------------- */

        await smtpTransporter1.sendMail({
        from: `"BISPL Catering" <${process.env.GMAIL_BARON}>`,
        to: user.email, 
        // cc: process.env.GMAIL_BARON, // 👈 ADMIN COPY
        cc: [
            process.env.GMAIL_BARON,
            "riyabawane10@gmail.com",
        ],

        subject: "Order Successful",
        html: invoiceTemplate(order),
        });
        console.log('Email Sent Successfully')

        /* -------- SEND ADMIN EMAIL -------- */

        // await smtpTransporter1.sendMail({
        // // from: `"BISPL Catering" <${process.env.GMAIL_BARON}>`,
        // from: `"BISPL Catering" <${process.env.GMAIL_BARON}>`,
        // to: process.env.GMAIL_BARON,
        // subject: `New Order Received – ${order.orderId}`,
        // html: adminOrderTemplate(order, user),
        // });


        // return res.json({ success: true, message: "Order Placed Successfully" })
        return res.json({ success: true, message: "Thank You For Order! You will soon receive call from us." })
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export const initRazorpayOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0)
      return res.json({ success: false, message: "Invalid amount" });

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "CART_PAYMENT_" + Date.now()
    };

    razorpayInstance.orders.create(options, (err, order) => {
      if (err) return res.json({ success: false, message: err });

      res.json({
        success: true,
        order,
        key: process.env.RAZORPAY_KEY_ID
      });
    });

  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

// Place Order Razorpay : /api/order/razorpay
export const placeOrderRazorpay = async (req, res) => {
    try {
        const { userId, platters, address, note } = req.body;
        if(!address || platters.length === 0){
            return res.json({ success: false, message: "Invalid Data" })
        }

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

        const order = await Order.create({
            orderId,   // <-- custom field
            userId,
            platters,
            address,
            note,
            paymentType: "Full Payment",
            paymentMethod: "Razorpay",
        })
        // amount
        // const options = {
        //     amount : platters[0]?.offerPrice * 100,
        //     currency : currency.toUpperCase(),
        //     receipt : newOrder.orderId
        // }

        // await razorpayInstance.orders.create(options, (error, order)=> {
        //     if(error){ 
        //         console.log(error) 
        //         return res.json({ success: false, message: error })
        //     }
        //     return  res.json({ success: true, order, key: process.env.RAZORPAY_KEY_ID, message: "Thank You For Order! You will soon receive call from us." })
        // } )

        /* ---------------- FETCH USER EMAIL ---------------- */

        const user = await User.findById(userId).lean();
        if (!user?.email) {
        return res.json({
            success: false,
            message: "User email not found",
        });
        }

        /* ---------------- SEND INVOICE EMAIL (HTML) ---------------- */

        await smtpTransporter1.sendMail({
        from: `"BISPL Catering" <${process.env.GMAIL_BARON}>`,
        to: user.email, 
        // cc: process.env.GMAIL_BARON, // 👈 ADMIN COPY
        cc: [
            process.env.GMAIL_BARON,
            "riyabawane10@gmail.com",
        ],

        subject: "Order Successful",
        html: invoiceTemplate(order),
        });
        console.log('Email Sent Successfully')

        // return res.json({ success: true, message: "Order Placed Successfully" })
        return res.json({ success: true,  message: "Thank You For Order! You will soon receive call from us." })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

export const placeOrderStore = async ( req, res ) => {
    try {
        const { userId, platters, address, items, storeamount, note, paymentOption } = req.body;
        if(!address || items.length === 0){
            return res.json({ success: false, message: "Invalid Data" })
        } 

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
            platters: [],
            items : items,
            storeamount,
            address,
            note: '',
            // paymentType: "Online",
            paymentType: paymentOption,
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
            // $or: [{paymentType: "COD"}, { isPaid: true }]
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
            // $or: [{paymentType: "COD"}, { isPaid: true }]
        }).populate("platters address").sort({ createdAt: -1 })
        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message:error.message })
    }
}

// Update Order by User ID : /api/order/status
export const updateOrder = async ( req, res )=> {
    try {
        const { orderId, status } = req.body;
        const order = await Order.findByIdAndUpdate(
            orderId,          
            {status : status}
        )
        return res.json({ success: true, order ,  message: "Order Updated Successfully" })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}
