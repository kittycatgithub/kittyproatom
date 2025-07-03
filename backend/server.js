// Server.js is main file (Entry Point) of Backend Server

import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js'
import 'dotenv/config'
import userRouter from './routes/userRoute.js'
import sellerRouter from './routes/sellerRoute.js'
import cartRouter from './routes/cartRoute.js'
import addressRouter from './routes/addressRoute.js'
import orderRouter from './routes/orderRoute.js'
import selectedRouter from './routes/selectedRoute.js'

const app = express() //created app using Express Package
const port = process.env.PORT || 4000 

await connectDB()

// Allow multiple origins
const allowedOrigins = ['https://147.93.27.50','http://localhost:5173', 'https://www.baronkitchen.com', 'https://riyabawane.site', 'http://riyabawane.site', "http://www.riyabawane.site",  'https://www.riyabawane.site', 'http://www.riyabawane.site']

// Middleware configuration
app.use(express.json()) // all requests coming to server, will be parsed into JSON format using json method
app.use( cookieParser() )
app.use( cors( {origin: allowedOrigins, credentials: true} ) )

app.get('/', ( req, res )=> res.send("API is Working") )        // Creating Route
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)
app.use('/api/platter', selectedRouter) //Router for selectedPlatter

app.listen(port, ()=> {
    console.log(`Server is Running on http://localhost:${port}`)
})







