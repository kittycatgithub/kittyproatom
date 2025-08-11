import express from 'express'
import authUser from '../middlewares/authUser.js'
import { updateStoreCart } from '../controllers/storecartController.js'

const storecartRouter = express.Router()

storecartRouter.post('/update', authUser, updateStoreCart)

export default storecartRouter