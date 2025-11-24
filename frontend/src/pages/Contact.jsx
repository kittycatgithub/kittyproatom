import React, { useState } from 'react'
import { motion } from "framer-motion";
import FooterBar from '../components/FooterBar';
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';


const Contact = () => {

  const {axios} = useAppContext()

  const [ formData1, setFormData1 ] = useState({
    name1 : '',
    email1 : '',
    email2 : '',
    mobile1 : '',
    mobile2 : '',
    message1 : '',
  })
  const [ formData2, setFormData2 ] = useState({
    name2 : '',
    email3 : '',
    email4 : '',
    mobile3 : '',
    mobile4 : '',
    message2 : '',
  })

  const handleChangeFeedBack = (e) => {
    const {name, value} = e.target // e.target contains value of name attribute ex: name="name1" & value of tag
    setFormData1({
      ...formData1,
      [name]: value
    })
  }

  const handleChangeContact = (e) => {
      const { name, value } = e.target // e.target contains value of name attribute & value of tag
      setFormData2({
        ...formData2, 
        [name]:value       // value of attribute is extracted using []
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

  const handleSubmitContact = async (e) => {
    e.preventDefault(); // ⛔ stops the page refresh
    const {data} = await axios.post('/api/user/contact', formData2)
      console.log("Response:", data)   // ← check this
    if(data.success){
      toast.success( data.message, {duration:3000} )
      setFormData2({
        name2 : '',
        email3 : '',
        email4 : '',
        mobile3 : '',
        mobile4 : '',
        message2 : '',
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
      Contact Us
    </motion.h1>

  </div>
  </div>
      <div className='max-w-7xl mx-auto w-fit'>
      <section id="contact" className="py-10 md:py-20 text-black">
  <div className="container-custom">
    <div className="grid md:grid-cols-2 px-2 md:px-0 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-xl text-gray-700">
          Have questions or ready to book? Reach out to us anytime.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          We love our customers, so feel free to visit during normal business hours.
        </p>
        <div className="space-y-6">
          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-400 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zm0 1c-2.667 0-8 1.333-8 4v2h16v-2c0-2.667-5.333-4-8-4z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Office</h3>
              <p className="text-gray-700">Chandra Nagar Lane Number 2, <br/>Bhagwan Nagar, Chandranagar, <br/>Rameshwari, Nagpur, Maharashtra - 440027, India</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-400 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zm0 1c-2.667 0-8 1.333-8 4v2h16v-2c0-2.667-5.333-4-8-4z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Baron Kitchen Processing Unit</h3>
              <p className="text-gray-700">Plot No 8 B-2 Sector 21, MIHAN,<br/>near Mahindra Bloomdale,<br/>Nagpur, Maharashtra 441108</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-400 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h1l2 5-2 1a11 11 0 006 6l1-2 5 2v1a2 2 0 01-2 2h-1c-6.627 0-12-5.373-12-12V5z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Phone</h3>
              <p className="text-gray-700">+91 98229 90025 / +91 9975094003</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-400 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M16 12l-4-4-4 4m8 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m0-4a2 2 0 012-2h8a2 2 0 012 2v4z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Hours</h3>
              <p className="text-gray-700">Everyday - 10:30 AM – 04:00 AM</p>
            </div>
            {/* <div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-gray-700">kuldeepprajapati2111@gmail.com</p>
            </div> */}
          </div>
          <div className="flex items-start">
            <svg className="h-6 w-6 text-amber-400 mt-1 mr-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M16 12l-4-4-4 4m8 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m0-4a2 2 0 012-2h8a2 2 0 012 2v4z" />
            </svg>
            <div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-gray-700">manager@baronkitchen.com</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 flex space-x-1">
          <a href="https://www.facebook.com/profile.php?id=61576334605332" target='_blank' className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Facebook">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1c-1 0-1 .5-1 1v1h3l-1 3h-2v7A10 10 0 0022 12z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/urbnsmoke.sa/" target='_blank' className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Instagram">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1 1 0 100 2 1 1 0 000-2z"/>
            </svg>
          </a>
           <a href="https://wa.me/966568121930" target='_blank' className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-amber-500 transition-colors" aria-label="Instagram">
            <svg className='h-5 w-5' fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
          </a>
        </div> */}
      </div>

      <div className="bg-gray-800 rounded-xl text-white">
       {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3321775898467!2d46.64637647519992!3d24.852501977934445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee53309f0714b%3A0x73d5a70884187687!2sURBN%20Smoke!5e0!3m2!1sen!2sin!4v1750833857677!5m2!1sen!2sin" width="345" md:width="616" height="450" md:height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59552.86913202819!2d79.06749522369854!3d21.110400411913435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf44ff20e98f%3A0xc14734eb6e812078!2sBaron%20Kitchen!5e0!3m2!1sen!2sin!4v1752695418422!5m2!1sen!2sin"
       className='w-[345px] md:w-[616px] h-[450px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* <div className="bg-gray-800 p-8 rounded-xl text-white">
        <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-primary text-black font-bold py-3 px-6 rounded-lg transition-colors">
            Send Message
          </button>
        </form>
      </div> */}
    </div>
  </div>
</section>
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
<section className="text-gray-600 body-font px-2 md:px-0">
    <div className="text-gray-900 flex flex-col md:flex-row lg:max-w-7xl w-full py-12 md:py-12 mx-auto section"
        id="contact-form">
        <div className=" w-full">
            <h2 className="text-3xl font-bold mb-6">
          Get In Touch <span className="text-primary">With Us</span>
        </h2>
            <p className=" text-xl">
                We’re just a message away. Whether you have questions, suggestions, or business inquiries — we’d love to connect with you.  
                <br/>
                <br/>
                Let us know how we can help or collaborate. We’ll get back to you as soon as possible.

            </p>
         
            <span className="inline-flex mt-6 justify-center sm:justify-start">
             
               
            </span>
        </div>
        <div className=" w-full mt-10 md:mt-0 md:pl-28">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4"></h1>
            <h2 className="text-3xl font-bold mb-6">
          Contact Form
        </h2>
            <form onSubmit={ (e)=> handleSubmitContact(e) }>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="name2" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                        <input type="text" id="name2" value={formData2.name2} name="name2" required="" onChange={handleChangeContact}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                    </div>
                </div>
                <div className="p-2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <label htmlFor="email3" className="leading-7 py-4 text-lg text-gray-900">Primary Email</label>
                        <input type="email" id="email3" value={formData2.email3} name="email3" required onChange={handleChangeContact}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative">
                        <label htmlFor="email4" className="leading-7 py-4 text-lg text-gray-900">Secondary Email</label>
                        <input type="email" id="email4" value={formData2.email4} name="email4" required onChange={handleChangeContact}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <label htmlFor="mobile3" className="leading-7 py-4 text-lg text-gray-900">Primary Mobile</label>
                        <input type="tel" id="mobile3" value={formData2.mobile3} name="mobile3" pattern="[0-9]{10}" required onChange={handleChangeContact}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative">
                        <label htmlFor="mobile4" className="leading-7 py-4 text-lg text-gray-900">Secondary Mobile</label>
                        <input type="tel" id="mobile4" value={formData2.mobile4} name="mobile4" pattern="[0-9]{10}" required onChange={handleChangeContact}
                            className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white 
                                   focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 
                                   leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="message2" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                        <textarea id="message2" value={formData2.message2} name="message2" required="" onChange={handleChangeContact}
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

export default Contact