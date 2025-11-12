import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext.jsx'
import toast from 'react-hot-toast'


// Input Field Component
const InputField =  ( {type, placeholder, name, handleChange, address} )=> (
    <input 
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-black focus:border-primary transition'
    type={type} 
    placeholder={placeholder} 
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
    />
) 

const AddAddress = () => {

    const { axios, user, navigate } = useAppContext()

    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: 'Nagpur',
        state: 'Maharashtra',
        // pincode: '',
        // country: '',
        // phone: '',
    })

    const handleChange = async (e) => {
        const {name, value} = e.target;

        setAddress( (prevAddress)=> ({
            ...prevAddress, 
            [name]: value,
        }) )
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/address/add', {address})

            if(data.success){
                toast.success(data.message)
                navigate('/order-review')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect( ()=> {
        if( !user ){
            navigate('/cart')
        }
    }, [] )

  return (
    <div className='mt-16 pb-16  max-w-5xl mx-auto px-4 lg:px-0'>
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping 
            <span className='font-semibold text-primary'> Address</span></p>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
            <div className='flex-1 max-w-md'>
                <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                    <div className='grid grid-cols-2 gap-4'>
                        <InputField handleChange={handleChange} address={address} name='firstName'  type="text" placeholder="First Name"/>

                        <InputField handleChange={handleChange} address={address} name='lastName' type="text" placeholder="Last Name"/>
                    </div>

                    <InputField handleChange={handleChange} address={address} name='email' type="email" placeholder="Email Address"/>

                    <InputField handleChange={handleChange} address={address} name='address' type="text" placeholder="Address"/>

                    <div className='grid grid-cols-2 gap-4'>
                        <input handleChange={handleChange} address={address} name='city' value='Nagpur'  type="text" placeholder="City" readOnly
                        className='border border-gray-300 rounded p-2'/>
                        
                        {/* <InputField handleChange={handleChange} address={address} name='state' type="text" placeholder="State"/> */}
                        <input handleChange={handleChange} address={address} name='state' value='Maharashtra'  type="text" placeholder="City" readOnly
                        className='border border-gray-300 rounded p-2'/>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        {/* <InputField handleChange={handleChange} address={address} name='pincode'  type="number" placeholder="Pincode"/> */}

                        {/* <InputField handleChange={handleChange} address={address} name='country' type="text" placeholder="Country"/> */}
                    </div>

                    <InputField handleChange={handleChange} address={address} name='phone' type="text" placeholder="Phone Number"/>

                    <button className='w-full mt-6 bg-primary text-white py-3 
                    hover:bg-primary-dull transition cursor-pointer uppercase
                    '>
                        Save Address</button>
                    
                </form>
                <div className='grid grid-cols-2'> 
                        {/* <button onClick={()=>navigate('/store')} className='w-1/2 mt-6 bg-button text-white py-3 
                    hover:bg-button-dull transition cursor-pointer uppercase
                    '>
                        Go To Store</button> */}
                        <button onClick={()=>navigate('/order-review')} className='w-full mt-6 bg-button text-white py-2 
                    hover:bg-primary transition cursor-pointer uppercase rounded-full
                    '>
                        Go To Order Review</button></div>
            </div>
            <img className='md:mr-16 mb-16 md:mt-0' src={assets.add_address_iamge} alt="Add Address" />
            
        </div>
    </div>
  )
}

export default AddAddress