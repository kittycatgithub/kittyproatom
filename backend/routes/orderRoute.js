import express from 'express'
import authUser from '../middlewares/authUser.js'
import authSeller from '../middlewares/authSeller.js'
import { getAllOrders, getUserOrders, initRazorpayOrder, placeOrderCOD, placeOrderRazorpay, placeOrderStore, updateOrder } from '../controllers/orderController.js'

const orderRouter = express.Router()

orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.post('/store', authUser, placeOrderStore)
orderRouter.post('/razorpay/confirm', authUser, placeOrderRazorpay)
orderRouter.post('/razorpay/init', authUser, initRazorpayOrder )
orderRouter.get('/user', authUser, getUserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)
orderRouter.put('/status', authSeller , updateOrder)

export default orderRouter