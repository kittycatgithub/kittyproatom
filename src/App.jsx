import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes, useLocation } from 'react-router-dom'
import MealThaliSnackBoxes from './pages/MealThaliSnackBoxes'
import Catering from './pages/Catering'
import BulkDelivery from './pages/BulkDelivery'
import FrozenProducts from './pages/FrozenProducts'
import {Toaster} from "react-hot-toast" 
import Footer from './components/Footer'
import FooterBar from './components/FooterBar'
import Login from './components/Login'
import { useAppContext } from './context/AppContext'
import AllProducts from './pages/AllProducts'
import SelectOptions from './pages/SelectOptions'
import SelectOptionsSnackBoxB from './pages/SelectOptionsSnackBoxB'
import SelectOptionsBulkDelivery from './pages/SelectOptionsBulkDelivery'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin} = useAppContext()



  return (<>
  {/* This Navbar will be displayed in all pages */}
    {isSellerPath ? null : <Navbar/> }
    {showUserLogin ? <Login/> : null}


    <Toaster />
    
  {/* Routing Goes Here inside single div*/}
  <div className={`${isSellerPath} ? "px-0" : "px-0"`}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/categories/meal-thali-snack-boxes' element={<MealThaliSnackBoxes/>}/>
      <Route path='/categories/catering' element={<Catering/>}/>
      <Route path='/categories/bulk-delivery' element={<BulkDelivery/>}/>
      <Route path='/categories/frozen-products' element={<FrozenProducts/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/select-options' element={<SelectOptions/>}/>
      <Route path='/select-optionsb' element={<SelectOptionsSnackBoxB/>}/>
      <Route path='/select-options-veg' element={<SelectOptionsBulkDelivery/>}/>
      {/* <Route path='/services' element={<Services/>}/> */}
      {/* <Route path='/contact' element={<Contact/>}/> */}
      {/* <Route path='/' element={}/>
      <Route path='/' element={}/> */}
    </Routes>
  </div> 
    {!isSellerPath && <Footer/> }
    {!isSellerPath && <FooterBar/> }

  </>
  )
}

export default App

// npm run dev -- --port 300 --strictPort
