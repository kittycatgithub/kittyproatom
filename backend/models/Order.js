import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: 'user'},
    // This part needs work
    platters: [{
        _id: {type: String, required: true},
        name: {type: String, required: true},
        path: {type: String, required: true},
        badge: {type: String, required: true},
        category: {type: String, required: true},
        offerPrice: {type: Number, required: true},
        // guests: {type: Number, required: true},
        // menu: {type: Array,default: [], required: true},
       details: { type : Object, required: true},
       selectedOptions: { type : Object, required: true},
       menu: { type : Array, required: true}
        // product: {type: String, required: true, ref: 'product'},
        // quantity: {type: Number, required: true},
    }],
    // amount: {type: Number, required: true},
    address: {type: String, required: true, ref:'address'},
    status: {type: String, default: 'Order Placed'},
    paymentType: {type: String, required: true},
    isPaid: {type: Boolean, required: true, default: false},
}, { timestamps: true, minimize: false })

const Order = mongoose.models.order || mongoose.model('order', orderSchema)

export default Order