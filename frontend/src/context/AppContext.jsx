import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { actualProducts, menu, saleProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const AppContext = createContext();


export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const [isSeller, setIsSeller] = useState(false)

    const [showUserLogin, setShowUserLogin] = useState(false)


    const [products, setProducts] = useState([])
    const [storeProducts, setStoreProducts] = useState([])
    
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    // Global array to store cart data
    const [cart, setCart] = useState([])
    const [ storeCart, setStoreCart ] = useState([])

    const [storeCartItems, setStoreCartItems] = useState({})

    // Add product to store cart 
    const addToStoreCart = (itemId) => {
        let storeCartData = structuredClone(storeCartItems)
        
        if(storeCartData[itemId]){       // storeCartData[itemId] means the value of key itemId
            storeCartData[itemId] += 1   //if itemId exists in storeCartData, then increment key's value by 1
        } else {
            storeCartData[itemId] = 1
        }
        setStoreCartItems(storeCartData)
        toast.success("Product Added To Cart")
    }

    // Update Cart Item Quantity
    const updateStoreCartItem = ( itemId, quantity ) => {
        let storeCartData = structuredClone(storeCartItems)
        storeCartData[itemId] = quantity
        setStoreCartItems(storeCartData)
        toast.success("Cart Updated")
    }

    // Remove Product from Cart
    const removeFromStoreCart = (itemId) => {
        let storeCartData = structuredClone(storeCartItems)
        if(storeCartData[itemId]){
            storeCartData[itemId] -= 1
            if(storeCartData[itemId] === 0){
                delete storeCartData[itemId]
            }
        } 
        toast.success("Removed From Cart")
        setStoreCartItems(storeCartData)
    }


    // Fetch Seller Status
    const fetchSeller = async () => {
        try {
            const { data } = await axios.get('/api/seller/is-auth')
            if(data.success){
                setIsSeller(true)
            }
            else {
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }

    // Fetch User Auth Status, User Data and Cart Items
    const fetchUser = async () => {
        try {
            const {data} = await axios.get('/api/user/is-auth');
            if(data.success){
                setUser(data.user)
                setCart(data.user.cart)  // Setting Cart Data here
                console.log(data.user)
                setStoreCartItems(data.user.storeCartItems)
            }
        } catch (error) {
            setUser(null)
        }
    }

    // Order Product ki Global State
    const [selectedPlatter, setSelectedPlatter] = useState({});

// fetch All Products
    const fetchProducts = () => {
        setProducts(actualProducts)
    }

    // Fetch Store Products
    const fetchStoreProducts = async () => {
        setStoreProducts(saleProducts)
    }

    // Add Product to Cart
const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){
        cartData[itemId] += 1
    } else {
        cartData[itemId] = 1;
    }
    setCartItems(cartData)
    toast.success("Added to Cart")
}

// Update Cart Item Quantity
const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData)
    toast.success("Cart Updated")
}

// Remove Product from Cart
const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0 ){
                delete cartData[itemId]
            }
        }
        toast.success("Removed From Cart")
        setCartItems(cartData)
}

    useEffect( ()=> {
        fetchUser()
        fetchSeller()
        fetchProducts()
        fetchStoreProducts()
    }, [] )

    // Update Database Cart Items
    useEffect( ()=>{
        const updateCart = async () => {
            try {
                const {data} = await axios.post('/api/cart/update', { cart })
                if(!data.success){
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        if(user) {
            updateCart()
        }
    }, [cart] )
    // Update Database StoreCart Items
    useEffect( ()=>{
        const updateStoreCart = async () => {
            try {
                const {data} = await axios.post('/api/storecart/update', { storeCartItems })
                if(!data.success){
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        if(user) {
            updateStoreCart()
        }
    }, [storeCartItems] )

    // Get Cart Item Count
    const getCartCount = () =>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item]
        }
        return totalCount;
    }

// Get cart Total Amount
const getCartAmount = () =>{
    let totalAmount = 0;
    for (const items in cartItems){
        let itemInfo = products.find((product)=> product._id === items);
        if(cartItems[items] > 0 ){
            totalAmount += itemInfo.offerPrice * cartItems[items]
        }
    }
    return Math.floor(totalAmount * 100 )/100;
}
    // Get Store Cart Item Count
    const getStoreCartCount = () =>{
        let totalCount = 0;
        for(const item in storeCartItems){
            // totalCount += storeCartItems[item]
            totalCount += Number(storeCartItems[item]);
        }
        return totalCount;
    }

// Get Store cart Total Amount
const getStoreCartAmount = () =>{
    let totalAmount = 0;
    for (const items in storeCartItems){
        let itemInfo = products.find((product)=> product._id === items);
        if(storeCartItems[items] > 0 ){
            totalAmount += itemInfo.offerPrice * storeCartItems[items]
        }
    }
    return Math.floor(totalAmount * 100 )/100;
}

    const value = {navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin, products, storeProducts, currency, addToCart, updateCartItem
        , removeFromCart, cartItems , searchQuery , setSearchQuery, selectedPlatter, setSelectedPlatter, cart, setCart, getCartAmount, getCartCount
        , axios,storeCartItems, addToStoreCart, updateStoreCartItem, removeFromStoreCart, storeCartItems, getStoreCartCount
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () =>{
    return useContext(AppContext)
}
