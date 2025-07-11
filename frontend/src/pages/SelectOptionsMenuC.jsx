import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'



const SelectOptionsMenuC = () => {

    const {selectedPlatter, setSelectedPlatter , navigate} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      Soups: null,
      Starters: null,
      SpecialVeggies: null,
      SeasonalVeggies: null,
      Daals: null, 
      BasmatiRice: null,
      Rotis: null,    
      Savouries: null,
      Desserts: null, 
      Salads: null,
      PapadAchar: "Papad & Achar",
      BottledWater: "BottledWater"
    })
    

    const snacks = [   
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
    {   name:"Rotis",
        value: [
          {name:"Fulka", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Plain Paratha", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Baby Paratha", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Plain  Poorie", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Palak Poorie", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Masala Poorie", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Laccha Paratha", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Bhakari", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Makke Ki Roti", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
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
    {   name:"Savouries",
        value: [
          {name:"Plain Curd", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Mattha", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Kadhi", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Pakoda (Moong / Onion / Mix)", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Dahi Wada", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Dahi Bhalla", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Sandwich Dhokla", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"White Dhokla", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Cutlet", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"BatataWada", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"DaalWada", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Khandvi", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Sambar Wadi (seasonal)", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Green Peas Kachori", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Mix Veg Mini Samosa", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          {name:"Boondie Raita", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Pineapple / Mix Fruit Raita", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            ]
    },
    {   name:"Soups",
        value: [{name:"Tomato Shorba", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Cream of Tomato", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Sweet Corn Soup", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veg Clear Soup", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Cream of Mushroom", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veg Hot & Sour Soup", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veg Man Chow Soup", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
            {name:"Lemon Coriander Soup", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Minestroni", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"},
          ]
    },     
    {   name:"Starters",
        value: [{name:"Aloo Tikki Kebab", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Harabhara Kebab", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Cheese Corn Balls", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Chilly Panner", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Paneer Teriyaki", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Honey Chilli Potato Wegdes", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Crispy Veg", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veg Spring Roll", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Dry Gobi Manchurian", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veg Nuggets", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Chilly Garlic Potato Pop", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Veggie Fingers", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Cheese Cracker Bruschetta", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Paneer Tikka", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Paneer Malai Tikka", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}]
    },  
    {   name:"Salads",
        value: [{name:"Green Salad", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Sprouts Salad", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Chick Peas Salad", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Mix / Kakdi Koshimbir", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Russian Salad", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Mexican Salad", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Cheese Macaroni Salad", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}, 
            {name:"Corn Potato Salad", img:"https://img.freepik.com/premium-photo/authentic-rogan-josh-indian-curry-with-rich-spices-tender-meatauthentic-rogan-josh-indian-curry-with-rich-spices-tender-meat_781325-4886.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"}]
    },      
    ]

    const [isActive, setIsActive] = useState("SpecialVeggies")
      const activeSnack = snacks.find(item => item.name === isActive);
    //   console.log(activeSnack)

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
    <div>
      { Object.keys(selectedPlatter).length !== 0 ? (
        <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto h-full'>
             {selectedPlatter.keyword == "snacks" || selectedPlatter.keyword == "catering" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-5.5 md:space-y-6 md:py-10'>  
             <div>
                <button onClick={() => {setIsActive("SpecialVeggies")}} className={`pt-5 md:pt-0 rounded-md transition  justify-start text-start  ${isActive === "SpecialVeggies" ? " text-primary" : " text-black"}`}> Special Veggies </button>
                {/* {selectedOptions.SpecialVeggies !== null ? <p className='text-xs text-gray-500'>{selectedOptions.SpecialVeggies}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("SeasonalVeggies")}} className={` rounded-md transition  justify-start text-start  leading-4 ${isActive === "SeasonalVeggies" ? " text-primary" : " text-black"}`}> Seasonal Veggies </button>
                {/* {selectedOptions.SeasonalVeggies !== null ? <p className='text-xs text-gray-500'>{selectedOptions.SeasonalVeggies}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Rotis")}} className={` rounded-md transition ${isActive === "Rotis" ? " text-primary" : " text-black"}`}> Rotis </button>
                {/* {selectedOptions.Rotis !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Rotis}</p> : <p></p> } */}
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
                <button onClick={() => {setIsActive("Savouries")}} className={` rounded-md transition ${isActive === "Savouries" ? " text-primary" : " text-black"}`}> Savouries </button>
                {/* {selectedOptions.Savouries !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Savouries}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Soups")}} className={` rounded-md transition ${isActive === "Soups" ? " text-primary" : " text-black"}`}> Soups </button>
                {/* {selectedOptions.Soups !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Soups}</p> : <p></p> } */}
             </div>
             <div>
                <button onClick={() => {setIsActive("Starters")}} className={` rounded-md transition ${isActive === "Starters" ? " text-primary" : " text-black"}`}> Starters </button>
                {/* {selectedOptions.Starters !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Starters}</p> : <p></p> } */}

             </div>
             <div>
                <button onClick={() => {setIsActive("Salads")}} className={` rounded-md transition ${isActive === "Salads" ? " text-primary" : " text-black"}`}> Salads </button>
                {/* {selectedOptions.Salads !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Salads}</p> : <p></p> } */}

             </div>
             <div>
                <button className="rounded-md transition text-black"> Papad & Achar </button>
             </div>
             <div>
                <button className="rounded-md transition text-black"> Bottled Water </button>
             </div>
             </div>             
             )}
             <div className='md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300 bg-[#EFF6FF]  pb-16'>
                 {isActive === "Sandwiches" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
                 {isActive === "Rotis" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Rotis !== null && selectedOptions.Rotis ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
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
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
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
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.BasmatiRice !== null && selectedOptions.BasmatiRice ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Savouries" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Savouries !== null && selectedOptions.Savouries ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Soups" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Soups !== null && selectedOptions.Soups ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Starters" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Starters !== null && selectedOptions.Starters ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Salads" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Salads !== null && selectedOptions.Salads ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Chaats" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Chaats !== null && selectedOptions.Chaats ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "WelcomeDrinks" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.WelcomeDrinks !== null && selectedOptions.WelcomeDrinks ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 
                 {isActive === "Chinese" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Chinese !== null && selectedOptions.Chinese ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button>
    </div>
          </div>
        ))}
      </div>
                     
                 </div> } 

             </div>
                       <CustomizeBar/>
 
      </div>
      ) : (
                <div className='flex items-center pl-10 md:pl-0 justify-center h-screen md:h-[60vh]'>
                  <p className='text-2xl font-medium'>Kindly select the Platter Again...<br/>Do not refresh the page while selecting platter</p>
                </div>) }
    </div>   
  )
}

export default SelectOptionsMenuC