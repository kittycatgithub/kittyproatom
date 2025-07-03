import express from 'express'
import { getUserOrders, placeOrderCOD } from '../controllers/orderController.js'
import authUser from '../middlewares/authUser.js'

// selectedRouter is variable, that will store an object of Router Constructor created via Router()
const selectedRouter = express.Router() 

// selectedRouter.post('/set', authUser, setPlatter)
// selectedRouter.get('/get', authUser, getPlatter)
 
export default selectedRouter