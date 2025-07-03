import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'

const Veg = () => {
    const {selectedPlatter, setSelectedPlatter , navigate} = useAppContext()

    console.log( selectedPlatter)

    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      SpecialVeggies: null,
      SeasonalVeggies: null,
      Daals: null,
      BasmatiRice : null,
      Biryani:null,
      Pulao:null,
      Chapati: null,
      LacchaParatha: null,
      Desserts: null    
    }) 

    const veg = [   
    {   name:"SpecialVeggies",
        value: [{ name:"Paneer Butter Masala", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Tikka Masala", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Palak Paneer", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Kadhai Paneer", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Mutter Paneer", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Passanda", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Do Pyaza", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Adraki / Garlic", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Saoji", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Bhurji", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Shahi Paneer", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Lababdar", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Laccha Paneer", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Afgani Paneer", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Bhuna Masala", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Paneer Makhani", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Malai Methi Mutter Kaju", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Kashmiri Kofta", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Shaam Savera", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Veg Makhanwala", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Veg Keema Kasturi", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Veg Egg Curry", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Sarso Ka Saag", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            ]
    },   
    {       name:"SeasonalVeggies",
        value: [{name:"Aloo Gobi Mutter / Mix Veg",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veg Hydrabadi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Veg Jaipuri",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veg Kolhapuri",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Kofta Curry",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Green Tawa / Tawa Veg",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Baby Corn Mutter",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Dum Aloo / Achari Aloo",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Jeera Aloo",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Bhindi Fry/ Masala",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Veg 65",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Achari Bhindi / Achari Gobi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Gatte Ki Sabji",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Rajma / Chana Masala",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Kadhai Corn",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Pindi Chola",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Patodi Rassa",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"All Types of Usal",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Masala Baingan",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Baingan Bharta",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Zunka / Pithla",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Patad Bhaji / Dal Bhaji",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
           ]
    },
    {   name:"Daals",
        value: [
           {name:"Plain Daal", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Daal Tadka", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Daal Fry", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Daal Kolhapuri", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Daal Dhabha", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Daal Lasani", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Daal Makhani", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Daal Nawabi", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Daal Panchratna", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          
          ]
    },     
    {   name:"BasmatiRice",
        value: [
          { name:"Steamed Rice", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Jeera Rice", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Jeera Rice with Green Peas", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          { name:"Garlic Rice", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Lemon Rice", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Curd Rice", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          { name:"Tamarind Rice", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Masala Bhaat", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Gola Bhaat", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          { name:"Bisibele Bhaat", img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Kashmiri Pulao", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            { name:"Veg Pulao", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            { name:"Palak Pulao", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            { name:"Veg Biryani", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            { name:"Dal Khichadi", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            { name:"Mangolian Rice", img:"https://img.freepik.com/free-photo/top-view-delicious-soup-assortment_23-2148634458.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
          ]
    },
    {       name:"Desserts",
        value: [
          {name:"Gulab Jamun",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Kala Jamun",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rasgulla",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Chamcham",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rasbhari",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rasmalai",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Angoorie Rasmalai",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Puran Poli",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Khoa Poli",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Til Poli",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Gajar Ka Halwa",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Lauki Ka Halwa",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Moong Daal Halwa",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Basundi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Any Type of Kheer",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Shahi Tukda",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Jalebi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Rabadi",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Ice Cream",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Shree khand",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Amrakhand",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Fruit Custard",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Mousse",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Cheese Cake",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
{name:"Fruit Tart",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         ]
    },
    {       name:"Biryani",     
        value: [
          {name:"Biryani",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         ]
    },
    {       name:"Pulao",
        value: [
          {name:"Pulao",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         ]
    },
    {       name:"Chapati",
        value: [
          {name:"Chapati",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         ]
    },
    {       name:"LacchaParatha",
        value: [
          {name:"Laccha Paratha",img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
         ]
    }
    ]

    const [isActive, setIsActive] = useState("SpecialVeggies")
      const activeVeg = veg.find(item => item.name === isActive);
    //   console.log(activeVeg)

    const handleSelectedOptions = ( category, itemName ) =>{
      setSelectedOptions( (prev)=> {  
      const updated = {...prev, [category]: itemName};
      console.log("selected options:", updated);
      return updated;
      } )
      setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions })  )
      //  console.log("Hello",selectedOptions)
    };



  return (
    <div className='bg-[#EFF6FF]'>
      {
         Object.keys(selectedPlatter).length !== 0 ? 
      (<div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto h-full mb-16'>
             {selectedPlatter.category == "bulk-delivery" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-4 md:space-y-6 md:py-10'>  
             <div>
                <button onClick={() => {setIsActive("SpecialVeggies")}} className={` rounded-md transition  justify-start text-start  ${isActive === "SpecialVeggies" ? " text-primary" : " text-black"}`}> Special Veggies </button>
                {/* {selectedOptions.SpecialVeggies !== null ? <p className='text-xs text-gray-500'>{selectedOptions.SpecialVeggies}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("SeasonalVeggies")}} className={` rounded-md transition  justify-start text-start  leading-4 ${isActive === "SeasonalVeggies" ? " text-primary" : " text-black"}`}> Seasonal Veggies </button>
                {/* {selectedOptions.SeasonalVeggies !== null ? <p className='text-xs text-gray-500'>{selectedOptions.SeasonalVeggies}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Daals")}} className={` rounded-md transition ${isActive === "Daals" ? " text-primary" : " text-black"}`}> Daals </button>
                {/* {selectedOptions.Daals !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Daals}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("BasmatiRice")}} className={` rounded-md transition ${isActive === "BasmatiRice" ? " text-primary" : " text-black"}`}> BasmatiRice </button>
                {/* {selectedOptions.BasmatiRice !== null ? <p className='text-xs text-gray-500'>{selectedOptions.BasmatiRice}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Desserts")}} className={` rounded-md transition ${isActive === "Desserts" ? " text-primary" : " text-black"}`}> Desserts </button>
                {/* {selectedOptions.Desserts !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Desserts}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Biryani")}} className={` rounded-md transition ${isActive === "Biryani" ? " text-primary" : " text-black"}`}> Biryani </button>
                {/* {selectedOptions.Biryani !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Biryani}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Pulao")}} className={` rounded-md transition ${isActive === "Pulao" ? " text-primary" : " text-black"}`}> Pulao </button>
                {/* {selectedOptions.Pulao !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Pulao}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Chapati")}} className={` rounded-md transition ${isActive === "Chapati" ? " text-primary" : " text-black"}`}> Chapati </button>
                {/* {selectedOptions.Chapati !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Chapati}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("LacchaParatha")}} className={` rounded-md transition ${isActive === "LacchaParatha" ? " text-primary" : " text-black"}`}> Laccha Paratha </button>
                {/* {selectedOptions.LacchaParatha !== null ? <p className='text-xs text-gray-500'>{selectedOptions.LacchaParatha}</p> : <p></p> } */}
             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300'>
                 {isActive === "Sandwiches" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
             <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Sandwiches !== null && selectedOptions.Sandwiches ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                 </div> }
                 {isActive === "Desserts" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Desserts !== null && selectedOptions.Desserts ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "SpecialVeggies" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.SpecialVeggies !== null && selectedOptions.SpecialVeggies ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "SeasonalVeggies" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.SeasonalVeggies !== null && selectedOptions.SeasonalVeggies ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> }
                 {isActive === "Daals" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Daals !== null && selectedOptions.Daals ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "BasmatiRice" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.BasmatiRice !== null && selectedOptions.BasmatiRice ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> </div> </div>
        ))}
      </div></div> }   
                 {isActive === "Biryani" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Biryani !== null && selectedOptions.Biryani ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> </div> </div>
        ))}
      </div></div> }  
                 {isActive === "Pulao" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Pulao !== null && selectedOptions.Pulao ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> </div> </div>
        ))}
      </div></div> }  
                 {isActive === "Chapati" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Chapati !== null && selectedOptions.Chapati ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> </div> </div>
        ))}
      </div></div> } 
                 {isActive === "LacchaParatha" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeVeg?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.LacchaParatha !== null && selectedOptions.LacchaParatha ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> </div> </div>
        ))}
      </div></div> } 
             </div>
        <CustomizeBar/>
      </div> ) : (<div className='flex items-center justify-center h-[60vh]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>)
      }
    </div>
    
  )
}

export default Veg