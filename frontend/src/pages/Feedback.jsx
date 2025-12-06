import React, { useState } from 'react'
import { motion } from "framer-motion";
import FooterBar from '../components/FooterBar';
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';


const Feedback = () => {

  const {axios} = useAppContext()

  const [ formData1, setFormData1 ] = useState({
    name1 : '',
    email1 : '',
    email2 : '',
    mobile1 : '',
    mobile2 : '',
    message1 : '',
  })

  const handleChangeFeedBack = (e) => {
    const {name, value} = e.target // e.target contains value of name attribute ex: name="name1" & value of tag
    setFormData1({
      ...formData1,
      [name]: value
    })
  }

  const handleSubmitFeedback = async (e) => {
    e.preventDefault(); // ⛔ stops the page refresh

    const {data} = await axios.post('/api/user/feedback', formData1)
    if(data.success){
      console.log(data.message)
      toast.success( data.message, {duration:3000} )
      setFormData1({
        name1 : '',
        email1 : '',
        email2 : '',
        mobile1 : '',
        mobile2 : '',
        message1 : '',
      })
    } else {
      toast.error(data.message)
    }    
  }

  return (
    <>
    <div className="relative w-full h-[20vh] md:h-[50vh] min-h-[20vh]">
     <img src="./top-img.avif" alt="Background Image" className="object-cover object-center w-full h-full" />

  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: -110 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
    >
      Give Us Feedback
    </motion.h1>

  </div>
  </div>
    <section className="text-gray-800 body-font bg-blue-50/50 px-2 md:px-0">
    <div className=" flex flex-col md:flex-row lg:max-w-7xl w-full py-12 md:py-12 mx-auto section"
        id="contact-form">
        <div className=" w-full">
             <h2 className="text-3xl font-bold mb-6">
          Give Us Your <span className="text-primary">Feedback</span>
        </h2>
            <p className=" text-xl text-gray-900">
                We’d love to hear what you thought about us. It helps us to serve you better.  
                <br/>
                <br/>
                Tell us what you enjoyed or what we can do better at Kahani Cafe.
                We’d love to hear what you thought about us.

            </p>
         
            <span className="inline-flex mt-6 justify-center sm:justify-start">
             
               
            </span>
        </div>
        <div className=" w-full mt-10 md:mt-0 md:pl-28">
            <h2 className="text-3xl font-bold mb-6">
          Feedback Form 
        </h2>
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4"></h1>
            <form onSubmit={ (e)=> handleSubmitFeedback(e) }>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="name1" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                        <input type="text" id="name1" value={formData1.name1} name="name1" required="" onChange={handleChangeFeedBack}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                    </div>
                </div>                
                <div className="p-2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <label htmlFor="email1" className="leading-7 py-4 text-lg text-gray-900">Primary Email</label>
                        <input type="email" id="email1" value={formData1.email1} name="email1" required onChange={handleChangeFeedBack}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative">
                        <label htmlFor="email2" className="leading-7 py-4 text-lg text-gray-900">Secondary Email</label>
                        <input type="email" id="email2" value={formData1.email2} name="email2" required onChange={handleChangeFeedBack}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <label htmlFor="mobile1" className="leading-7 py-4 text-lg text-gray-900">Primary Mobile</label>
                        <input type="tel" id="mobile1" value={formData1.mobile1} name="mobile1" pattern="[0-9]{10}" required onChange={handleChangeFeedBack}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative">
                        <label htmlFor="mobile2" className="leading-7 py-4 text-lg text-gray-900">Secondary Mobile</label>
                        <input type="tel" id="mobile2" value={formData1.mobile2} name="mobile2" pattern="[0-9]{10}" required onChange={handleChangeFeedBack}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                   </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="message1" value={formData1.message1} className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                        <textarea id="message1" name="message1" required="" onChange={handleChangeFeedBack}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <button type="submit"
                        className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                        Send Message ✉
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>
<div className='block lg:hidden'><FooterBar/></div>
    </>
  )
}

export default Feedback