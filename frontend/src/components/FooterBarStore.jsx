import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterBarStore = () => {
  return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
         <div
    className="flex h-14 justify-around border-t border-gray-200 bg-white shadow-lg"
  >
    <NavLink to={"tel:+919822990025"} onClick={() => window.scrollTo(0, 0)} className="flex flex-col items-center justify-center text-gray-950">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg> */}      
        <div
        className="text-sm"
      > <span><svg fill="#000000" className="h-5 w-5 my-0.5 mx-auto" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.107 512.107" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0.053c-141.12,0-256,114.88-256,256s114.88,256,255.893,256h2.773c101.973,0,137.387-46.827,145.813-61.333 c9.493-16.32,11.093-33.28,4.16-45.44c-4.053-6.933-10.667-11.84-18.453-13.76l4.48-4.48c14.293-14.293,14.187-37.44-0.107-51.733 c-1.067-1.067-2.133-2.027-3.307-2.987l-43.093-33.6c-13.227-10.347-31.893-10.347-45.013,0.107l-9.6,7.573 c-5.973,4.8-14.613,4.267-20.053-1.173L196.48,228c-5.44-5.44-5.973-14.187-1.173-20.16l7.573-9.6 c10.453-13.227,10.56-31.787,0.213-45.12l-33.493-43.2c-6.4-8.213-16.107-13.333-26.56-13.973 c-10.453-0.64-20.693,3.2-28.053,10.667l-27.52,27.52c-15.893,16-39.36,66.773,86.827,193.28 C256,409.333,306.24,426.507,334.08,426.507c17.493,0,27.627-6.507,33.173-12.053l5.973-5.973c1.92,1.813,4.48,2.773,7.147,2.88 c4.907,0,8.213,1.493,9.92,4.48c2.24,4.053,2.667,12.693-4.053,24.107c-14.613,24.96-56.213,51.52-130.133,50.667 c-129.387,0-234.667-105.28-234.667-234.667S126.613,21.387,256,21.387s234.667,105.28,234.667,234.667 c0,43.093-11.84,85.227-34.133,122.027c-3.307,4.907-2.133,11.52,2.773,14.827c4.907,3.307,11.52,2.133,14.827-2.773 c0.213-0.32,0.427-0.64,0.64-0.96c24.427-40.107,37.333-86.187,37.333-133.12C512,114.933,397.12,0.053,256,0.053z M380.587,370.72c-0.32,0.427-0.747,0.96-1.173,1.387L352,399.627c-3.733,3.733-10.133,5.76-18.027,5.76 c-19.413,0-64.107-12.053-144.64-92.8c-121.28-121.6-90.667-159.253-86.827-163.2l27.52-27.52c2.773-2.88,6.613-4.48,10.667-4.48 h0.96c4.373,0.213,8.427,2.347,10.987,5.867l33.493,43.2c4.267,5.547,4.267,13.333-0.107,18.773l-7.573,9.6 c-11.413,14.507-10.24,35.307,2.773,48.427l77.013,77.227c13.12,13.12,33.92,14.293,48.427,2.88l9.6-7.573 c5.44-4.373,13.227-4.373,18.667-0.107l43.093,33.6C384.64,354.507,385.813,364.107,380.587,370.72z"></path> </g> </g> </g></svg></span>
        Call Us
      </div>
    </NavLink>
    <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)} className="flex flex-col items-center justify-center text-gray-950">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <div className="text-sm">Home</div>
    </NavLink>
    {/* <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)} className="flex flex-col items-center justify-center text-gray-950">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
      <div className="text-sm">Categories</div>
    </NavLink> */}
    <NavLink to={"/storecart"} onClick={() => window.scrollTo(0, 0)}
       className="flex flex-col items-center justify-center text-gray-950">
      <img src="https://www.svgrepo.com/show/440930/cart-add.svg" className='h-6.5' alt="" />
      
      <div className="text-sm">Cart</div>
    </NavLink>
    <NavLink to={"/my-orders"} onClick={() => window.scrollTo(0, 0)}
      className="flex flex-col items-center justify-center text-gray-950">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
 
      <div className="text-sm">Orders</div>
    </NavLink>
  </div>
  </div>
  )
}

export default FooterBarStore