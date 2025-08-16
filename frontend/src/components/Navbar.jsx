import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {

    const [open, setOpen] = React.useState(false)
    const {user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, cart, axios} = useAppContext()

    const logout = async () => {
        try {
            const {data} = await axios.get('/api/user/logout')
            if(data.success){
                toast.success(data.message)
                setUser(null);
                navigate('/')
            } else {
                toast.error(`${data.message} Hello`)
            }
        } catch (error) {
            toast.error(error.message)
            toast.error(`catch (error)`)
        }
    }

    useEffect(
        ()=> {
            if(searchQuery.length > 0 ){
                navigate("/all-menu")
            }
        },
    [searchQuery])  // [] is Dependency Array

  return (
    <nav className=" flex items-center justify-between z-35 px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to='/' onClick={()=>setOpen(false)}>
            <h1 className='text-xl font-semibold text-gray-600 lg:hidden'>Baron Kitchen</h1>
                <img className="h-9 hidden" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg" alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
            {/* Home,Services,Contact Us,Feedback */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                {/* <NavLink to='#'>Feedback</NavLink> */}

                {/* <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={ (e)=>{setSearchQuery(e.target.value)} } className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img  src={assets.search_icon} alt='search' className='w-4 h-4'/>
                </div> */}

                <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    {/* <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}
                    <img  src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80'/>

                    {/* <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button> */}
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{cart.length}</button>
                </div>

            {!user ? (<button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                Login
            </button>) : 
                (<div  className='relative group'>
                    <img src={assets.profile_icon} className='w-10' alt=""  />
                    <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border
                    border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                        <li onClick={()=>navigate('/my-orders')} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My  Orders</li>
                        <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                    </ul>
                </div>)
            }
            </div>
            
<div className="flex items-center gap-6 sm:hidden">

    <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    {/* <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> */}
                    <img  src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80'/>

                    {/* <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button> */}
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{cart.length}</button>
                </div>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                {/* <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg> */}
                <img  src={assets.menu_icon} alt='menu' />
            </button>
        </div>
            

            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md flex-col items-start gap-5 px-5 pb-4 text-sm md:hidden`}>
             {/* Home,Services,Contact Us,Feedback */}
                <NavLink to='/' onClick={()=> setOpen(false)} className="block text-lg text-gray-700">Home</NavLink>
                <NavLink to='/about' onClick={()=> setOpen(false)} className="block text-lg text-gray-700">About</NavLink>
                {/* <NavLink to='/services' onClick={()=> setOpen(false)} className="block text-lg text-gray-700">Services</NavLink> */}
                {
                   user && 
                    <NavLink to='/my-orders' onClick={()=> setOpen(false)} className="block text-lg text-gray-700">My Orders</NavLink>
                }
                <NavLink to='/contact' onClick={()=> setOpen(false)} className="block text-lg text-gray-700">Contact</NavLink>
                {/* {
                    !user ? (
                     <button onClick={()=>{setOpen(false); setShowUserLogin(true)}} className="text-lg font-semibold cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                        Login
                     </button>                        
                    ):(
                     <button onClick={logout} className="text-lg font-semibold cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                        Logout
                     </button>
                    )
                } */}
                {!user ? (<button onClick={()=> {setShowUserLogin(true); setOpen(false)}} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-lg">
                Login
            </button>) : 
                (  <div  className='grid grid-cols-2'>
                    <img src={assets.profile_icon} className='w-10' alt=""  />
                        <button onClick={logout} className="-ml-6 text-md cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                            Logout
                        </button>
                   </div>
                // <div  className='relative group'>
                //     <img src={assets.profile_icon} className='w-10' alt=""  />
                //     <ul className=' group-hover:block absolute bg-white shadow border
                //     border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                //         <li onClick={()=>navigate('/my-orders')} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My  Orders</li>
                //         <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                //     </ul>
                // </div>
                )
            }
            </div>
        )}

        </nav>
  )
}

export default Navbar