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
import AllMenus from './pages/AllMenus'
import ProductCategory from './pages/ProductCategory'
import Cart from './pages/Cart'
import FillDetails from './pages/FillDetails'
import OrderReview from './pages/OrderReview'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import SellerLogin from './components/seller/SellerLogin'
import SellerLayout from './pages/seller/SellerLayout'
import AddProduct from './pages/seller/AddProduct'
import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'
import Dashboard from './pages/seller/Dashboard'
import SelectOptionsMenuA from './pages/SelectOptionsMenuA'
import SelectOptionsMenuB from './pages/SelectOptionsMenuB'
import SelectOptionsMenuC from './pages/SelectOptionsMenuC'
import SelectOptionsShortMenu from './pages/SelectOptionsShortMenu'
import SelectOptionsBreakfast from './pages/SelectOptionsBreakfast'
import Veg from './pages/Veg'
import NonVeg from './pages/NonVeg'
import Contact from './pages/Contact'
import NavbarStore from './components/ecommerce/NavbarStore'
import Store from './pages/ecommerce/Store'
import StoreCart from './pages/ecommerce/StoreCart'
import ProductOrders from './pages/seller/ProductOrders'
import HospitalFoodService from './pages/HospitalFoodService'
import Feedback from './pages/Feedback'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller")
  const isSelectPath = useLocation().pathname.includes("select")
  const isStorePath = useLocation().pathname.includes("store")
  const {showUserLogin, isSeller} = useAppContext()



  return (<div className='text-default min-h-screen text-gray-700 bg-white'>
  {/* This Navbar will be displayed in all pages */}
    {isSellerPath || isSelectPath || isStorePath ? null : <Navbar/> }
        {/* {!isSellerPath && !isSelectPath && <Navbar/> } */}

    { isStorePath && <NavbarStore/> }
    
    {showUserLogin ? <Login/> : null}

    <Toaster toastOptions={{
          // Default styles for all toasts
          style: {
          //  padding: '12px 16px',
              fontSize: '20px', 
          },
         }}/>
    
  {/* Routing Goes Here inside single div*/}
  <div className={`${isSellerPath} ? "px-0" : "px-0"`}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/storecart' element={<StoreCart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/general-1' element={<Feedback/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/fill-details/:_id' element={<FillDetails/>}/>
      <Route path='/order-review' element={<OrderReview/>}/>
      {/* <Route path='/order-review/:_id' element={<OrderReview/>}/> */}
      <Route path='/categories/meal-thali-snack-boxes' element={<MealThaliSnackBoxes/>}/>
      <Route path='/categories/catering' element={<Catering/>}/>
      <Route path='/categories/bulk-delivery' element={<BulkDelivery/>}/>
      <Route path='/categories/frozen-products' element={<FrozenProducts/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/select-options/:_id' element={<SelectOptions/>}/>
      <Route path='/select-optionsb/:_id' element={<SelectOptionsSnackBoxB/>}/>
      <Route path='/select-options-veg/:_id' element={<SelectOptionsBulkDelivery/>}/>
      <Route path='/select-menu-a/:_id' element={<SelectOptionsMenuA/>}/>
      <Route path='/select-menu-b/:_id' element={<SelectOptionsMenuB/>}/>
      <Route path='/select-menu-c/:_id' element={<SelectOptionsMenuC/>}/>
      <Route path='/select-short-menu/:_id' element={<SelectOptionsShortMenu/>}/>
      <Route path='/select-breakfast/:_id' element={<SelectOptionsBreakfast/>}/>
      <Route path='/hospital-and-corporate-food-service' element={<HospitalFoodService/>}/>

      {/* Bulk Delivery */}
      <Route path='/select-veg/:_id' element={<Veg/>}/>
      <Route path='/select-bulk/:_id' element={<NonVeg/>}/>      
      <Route path='/all-menu' element={<AllMenus/>}/>
      <Route path='/all-menu/:category' element={<ProductCategory />}/>
      <Route path='/add-address' element={<AddAddress />}/>
      <Route path='/my-orders' element={<MyOrders />}/>
      <Route path='/seller' element={ isSeller ? <SellerLayout/> : <SellerLogin/> }>
        <Route index element={ <AddProduct/> } />
        <Route path='dashboard' element={ <Dashboard/> } />
        <Route path='product-list' element={ <ProductList/> } />
        <Route path='orders' element={ <Orders/> } />
        <Route path='productorders' element={ <ProductOrders/> } />
      </Route>
      {/* <Route path='/services' element={<Services/>}/> */}
      {/* <Route path='/contact' element={<Contact/>}/> */}
      {/* <Route path='/' element={}/>
      <Route path='/' element={}/> */}
    </Routes>
  </div> 
    {!isSellerPath && !isSelectPath && <Footer/> }
    {/* {!isSellerPath && <div className='block lg:hidden'><FooterBar/></div> } */}

  </div>
  )
}

export default App

// npm run dev -- --port 300 --strictPort


// fund managemnet , investment ms,  pms, 
// no payment gateway
// informative website 
// blogs shold be dynamic