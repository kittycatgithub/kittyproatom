// API coming from Frontend will be received in Controllers
// API will send to Frontend from Controller

import axios from "axios"
import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { response } from "express";
import {google} from 'googleapis'
import nodemailer from 'nodemailer'

// User Registration Api Controller Function
// Register User : /api/user/register
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if( !name || !email || !password ){
            return res.json({success: false, message: "Missing Details"})
        }
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.json({success: false, message:"User Already Exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10) // 10 = salt rounds
        const user = await User.create({name, email, password: hashedPassword })

        // After user creation, send token (validity 10 days) in response
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '10d'})

        res.cookie('token', token, {
            httpOnly: true, // Prevent Javascript to access cookie
            secure: process.env.NODE_ENV === 'production', //Use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF 
            maxAge: 10 * 24 * 60 * 60 * 1000, //Cookie expiration time
        })
        return res.json({success: true, user: {email: user.email, name: user.name}})
        
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// Login User : /api/user/login

export const login = async ( req, res ) => {
    try {
        const {email, password} = req.body; 

        if( !email || !password ){
            return res.json({ success: false, message: "Email and Password are required" })
        }
        const user = await User.findOne({email})

        if(!user){
            return res.json({ success: false, message: "Invalid Email or Password" })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.json({ success: false, message: "Invalid Email or Password" })
        }
        const token = jwt .sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '10d'})

        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF 
            maxAge: 10 * 24 * 60 * 60 * 1000, 
        })
        return res.json({success: true, user: {email: user.email, name: user.name}})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})       
    }
}
// export const feedback = async (req, res) => {
//   try {
//     const { name1, email1, email2, mobile1, mobile2, message1 } = req.body;

//     const oauth2Client = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground" 
//     );

//     oauth2Client.setCredentials({
//       refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
//     });

//     const accessToken = await oauth2Client.getAccessToken();

//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.GMAIL_USER,
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//         accessToken: accessToken.token,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Feedback" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       subject: "Feedback Received",
//       text: message1,
//       html: `<b>${message1}</b>`,
//     });

//     res.json({ success: true, message: "Email sent successfully" });

//   } catch (err) {
//     console.log(err);
//     res.json({ success: false, message: err.message });
//   }
// };

// export const contact = async (req, res) => {
//   try {
//     const { name2, email3, email4, mobile3, mobile4, message2 } = req.body;

//     const oauth2Client = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground" 
//     );

//     oauth2Client.setCredentials({
//       refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
//     });

//     const accessToken = await oauth2Client.getAccessToken();

//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.GMAIL_USER,
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//         accessToken: accessToken.token,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Feedback" <${process.env.GMAIL_USER}>`,
//       to: process.env.GMAIL_USER,
//       subject: "Feedback Received",
//       text: message2,
//       html: `<b>${message2}</b>`,
//     });

//     res.json({ success: true, message: "Email sent successfully" });

//   } catch (err) {
//     console.log(err);
//     res.json({ success: false, message: err.message });
//   }
// };

// const smtpTransporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
// });
const smtpTransporter1 = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_BARON,
    pass: process.env.GMAIL_APP_PASSWORD_BARON,
  },
});

// export const feedback = async (req, res) => {
//   try {
//     const { name1, email1, email2, mobile1, mobile2, message1 } = req.body;

//     await smtpTransporter1.sendMail({
//       from: `"Feedback" <${process.env.GMAIL_BARON}>`,
//       // to: process.env.GMAIL_USER,
//       to: [
//         process.env.GMAIL_USER,
//         process.env.GMAIL_BARON,
//       ],
//       subject: "Feedback Received",
//       html: `
//         <h3>New Feedback</h3>
//         <p><strong>Name:</strong> ${name1}</p>
//         <p><strong>Email 1:</strong> ${email1}</p>
//         <p><strong>Email 2:</strong> ${email2}</p>
//         <p><strong>Mobile 1:</strong> ${mobile1}</p>
//         <p><strong>Mobile 2:</strong> ${mobile2}</p>
//         <p><strong>Message:</strong> ${message1}</p>
//       `,
//     });

//     res.json({ success: true, message: "Feedback sent successfully" });

//   } catch (err) {
//     console.log(err);
//     res.json({ success: false, message: err.message });
//   }
// };

export const feedback = async (req, res) => {
  try {
    const { name1, email1, mobile1, message1 } = req.body;

    await smtpTransporter1.sendMail({
      from: `"Feedback" <${process.env.GMAIL_BARON}>`,
      // to: process.env.GMAIL_USER,
      to: [
        process.env.GMAIL_USER,
        process.env.GMAIL_BARON,
      ],
      subject: "Feedback Received",
      html: `
        <h3>New Feedback</h3>
        <p><strong>Name:</strong> ${name1}</p>
        <p><strong>Email 1:</strong> ${email1}</p>
        <p><strong>Mobile 1:</strong> ${mobile1}</p>
        <p><strong>Message:</strong> ${message1}</p>
      `,
    });

    res.json({ success: true, message: "Feedback sent successfully" });

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export const contact = async (req, res) => {
  try {
    const { name2, email3, email4, mobile3, mobile4, message2 } = req.body;

    await smtpTransporter1.sendMail({
      from: `"Contact Request" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Contact Request Received",
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name2}</p>
        <p><strong>Email 1:</strong> ${email3}</p>
        <p><strong>Email 2:</strong> ${email4}</p>
        <p><strong>Mobile 1:</strong> ${mobile3}</p>
        <p><strong>Mobile 2:</strong> ${mobile4}</p>
        <p><strong>Message:</strong> ${message2}</p>
      `,
    });

    res.json({ success: true, message: "Contact message sent successfully" });

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};



// Check Auth : /api/user/is-auth
export const isAuth = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId).select("-password")
        return res.json({ success: true, user })
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})  
    }
}

// Logout User : /api/user/logout
export const logout = async ( req, res ) => {
    try {
        res.clearCookie('token',{
            // httpOnly: true,
            secure: process.env.NODE_ENV === 'production', //Browser will block the cookie on localhost (because localhost is HTTP, not HTTPS).
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        return res.json({success: true, message: "Logged Out"})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})  
    }
}

