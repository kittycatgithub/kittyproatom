import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import CustomizeBar from '../components/CustomizeBar'

const SelectOptionsMenuA = () => {

    const {selectedPlatter, setSelectedPlatter , navigate} = useAppContext()
    // console.log("select Platter" , selectedPlatter)
    const [selectedOptions, setSelectedOptions] = useState({
      SpecialVeggies: null,
      SeasonalVeggies: null,
      Daals: null,
      BasmatiRice: null,
      Rotis: null,
      Savouries: null,      
      Desserts: null,
      Salads: null,
      AdditionalOptions: null,
      PapadAchar: "Papad & Achar",
      BottledWater: "BottledWater"
    })
    console.log("Selected Platter - ", selectedPlatter, "selectedOptions - ", selectedOptions )
    const snacks = [   
    {   name:"SpecialVeggies",
        value: [
          { name:"Paneer Butter Masala", img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.webp"},
            { name:"Paneer Tikka Masala", img:"https://bellephant.com/wp-content/uploads/2024/10/0_0-3-2.png"},
            { name:"Palak Paneer", img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/palak-paneer-recipe.webp"},
            { name:"Kadhai Paneer", img:"https://vegecravings.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions-500x500.jpg"},
            { name:"Mutter Paneer", img:"data:image/jpeg;base64,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"},
            { name:"Paneer Passanda", img:"https://jeyporedukaan.in/wp-content/uploads/2022/09/images-8.jpeg"},
            { name:"Paneer Do Pyaza", img:"https://araizrasoi.com/wp-content/uploads/2024/06/72.webp"},
            { name:"Paneer Adraki / Garlic", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtTfqIdbhExB8jfDGXUEiUbzxQNG380WGMQ&s"},
            { name:"Paneer Saoji", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpvCg26cTU1Fp2ZhSnLhxGIwBMldkIyIa9Q&s"},
            { name:"Paneer Bhurji", img:"https://profusioncurry.com/wp-content/uploads/2025/02/Paneer_bhurji_spiced_cottage_cheese_scramble_high_protein_recipe_feature.jpg"},
            { name:"Shahi Paneer", img:"https://profusioncurry.com/wp-content/uploads/2022/07/Shahi-paneer-recipe-served-with-garnishes.jpg"},
            { name:"Paneer Lababdar", img:"https://www.whiskaffair.com/wp-content/uploads/2021/10/Paneer-Lababdar-3-3.jpg"},
            { name:"Laccha Paneer", img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-recipe.webp"},
            { name:"Afgani Paneer", img:"https://dailyreveries.com/wp-content/uploads/2023/07/IMG_20230723_192652.jpg"},
            { name:"Paneer Bhuna Masala", img:"https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-paneer-bhuna-masala.jpg"},
            { name:"Paneer Makhani", img:"https://vegecravings.com/wp-content/uploads/2018/10/Paneer-Makhani-Recipe-Step-By-Step-Instructions-scaled.jpg"},
            { name:"Malai Methi Mutter Kaju", img:"https://pipingpotcurry.com/wp-content/uploads/2022/11/Methi-matar-malai-recipe-Piping-Pot-Curry.jpg"},
            { name:"Kashmiri Kofta", img:"https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/malai-kofta-2-500x500.jpg"},
            { name:"Shaam Savera", img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/tanushree-aich2016081312295984.jpeg"},
            { name:"Veg Makhanwala", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGP7coUqXiSuI-Nwaw4kEyVM8I9zwVbUJUg&s"},
            { name:"Veg Keema Kasturi", img:"https://shriannapurnahospitality.com/wp-content/uploads/2025/01/Kadai-Paneer-e1738142614862-300x300.jpg"},
            { name:"Veg Egg Curry", img:"https://myfoodstory.com/wp-content/uploads/2023/02/dhaba-style-egg-curry-square-1-500x500.jpg"},
            { name:"Sarso Ka Saag", img:"https://images.herzindagi.info/image/2020/Oct/sarso-ka-saag-benefits-main.jpg"},
            ]
    },
    {       name:"SeasonalVeggies",
        value: [{name:"Aloo Gobi Mutter / Mix Veg",img:"https://www.whiskaffair.com/wp-content/uploads/2020/06/Aloo-Gobi-Matar-2-3.jpg"}, 
            {name:"Veg Hydrabadi",img:"https://www.cookshideout.com/wp-content/uploads/2013/04/Mix-Vegetable-Salan_FI.jpg"},
            {name:"Veg Jaipuri",img:"https://images.slurrp.com/prod/recipe_images/transcribe/lunch/Jaipuri-Aloo-pyaaz-ki-sabji.webp"}, 
            {name:"Veg Kolhapuri",img:"https://www.tandooriculture.com.sg/wp-content/uploads/2022/06/Veg-Kolhapuri.jpg"}, 
            {name:"Kofta Curry",img:"https://untoldrecipesbynosheen.com/wp-content/uploads/2020/09/kofta-curry-featured-1.jpg"},
            {name:"Green Tawa / Tawa Veg",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnWlMo8-U5uMQ6kQyf_CTc-G2NLBzOw3NMQ&s"},
            {name:"Baby Corn Mutter",img:"https://foodoncall.co.in/wp-content/uploads/2017/09/mushroom-baby-corn-masala.jpg"}, 
            {name:"Dum Aloo / Achari Aloo",img:"https://www.whiskaffair.com/wp-content/uploads/2018/06/Achari-Aloo-2-3.jpg"}, 
            {name:"Jeera Aloo",img:"https://www.pavaniskitchen.com/wp-content/uploads/2021/04/jeera-aloo.jpg"},
            {name:"Bhindi Fry/ Masala",img:"https://aromaticessence.co/wp-content/uploads/2022/06/punjabi_bhindi_masala_gravy_featured.jpg"},
            {name:"Veg 65",img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65-recipe.jpg"}, 
            {name:"Achari Bhindi / Achari Gobi",img:"https://www.recipesworld.co.uk/images/167335698756975476.webp"}, 
            {name:"Gatte Ki Sabji",img:"https://vegecravings.com/wp-content/uploads/2017/06/Gatte-Ki-Sabzi-Recipe-Step-By-Step-Instructions.jpg"},
            {name:"Rajma / Chana Masala",img:"https://www.indianveggiedelight.com/wp-content/uploads/2020/02/instant-pot-rajma-masala-featured.jpg"},
            {name:"Kadhai Corn",img:"https://lh4.googleusercontent.com/proxy/uuE70kVdqqjWDd1VltJuk-8t-xPW19aPo7Ut_e6gJOC6z3UE9y14VeuSDckxEaQYYBnmOGeIR6D8DncHFL32KloF64mdB81rdhe9wLgx3HxiNUPFk8vx15Ju-fOmddiTpps"}, 
            {name:"Pindi Chola",img:"https://www.vidhyashomecooking.com/wp-content/uploads/2021/01/PindiCholeRecipe.jpg"}, 
            {name:"Patodi Rassa",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Slk0zf8DmGAmUyizYtNto9B9KbuomALyVQ&s"},
            {name:"All Types of Usal",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFYMdsv9qWRrLm8hPL-RgWPZdA94lqZzGbg&s"},
            {name:"Masala Baingan",img:"https://feastwithsafiya.com/wp-content/uploads/2021/04/image-8.jpg"}, 
            {name:"Baingan Bharta",img:"https://sinfullyspicy.com/wp-content/uploads/2024/07/1200-by-1200-images-3.jpg"}, 
            {name:"Zunka / Pithla",img:"https://www.whiskaffair.com/wp-content/uploads/2020/03/Zunka-2-3.jpg"},
            {name:"Patad Bhaji / Dal Bhaji",img:"https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/dal-bhaji.jpg"}, 
           ]
    },
    {   name:"Rotis",
        value: [
          {name:"Fulka", img:"https://cdn.dotpe.in/longtail/store-items/3338392/e6ucSFbZ.jpeg"}, 
            {name:"Plain Paratha", img:"https://vegehomecooking.com/wp-content/uploads/2024/08/TriangleParathaFeaturedImage.jpg"}, 
            {name:"Baby Paratha", img:"https://simpleindianmeals.com/wp-content/uploads/2023/02/Palak-Paratha-500x500.jpg"},
          {name:"Plain  Poorie", img:"https://www.indianveggiedelight.com/wp-content/uploads/2020/10/poori-recipe-featured-360x360.jpg"}, 
            {name:"Palak Poorie", img:"https://tiffinservicepatna.com/wp-content/uploads/2023/04/palak-Poori.jpg"}, 
            {name:"Masala Poorie", img:"https://dinedelicious.in/wp-content/uploads/2021/06/Whole-Wheat-Masala-Puri-8.jpg"},
          {name:"Laccha Paratha", img:"https://5.imimg.com/data5/ANDROID/Default/2021/8/YR/CH/UF/26801620/1628707032485-jpg-500x500.jpg"}, 
            {name:"Bhakari", img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/-4920171003111515355.jpeg"}, 
            {name:"Makke Ki Roti", img:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Sarso_ka_Saag_and_Makki_ki_Roti.webp"},
          ]
    },
    {   name:"Daals",
        value: [
           {name:"Plain Daal", img:"https://cookdeshi.com/wp-content/uploads/2023/07/Plain-Dal.png"}, 
            {name:"Daal Tadka", img:"https://vegecravings.com/wp-content/uploads/2018/01/Dal-Tadka-Recipe-Step-By-Step-Instructions-500x500.jpg"}, 
            {name:"Daal Fry", img:"https://spicecravings.com/wp-content/uploads/2021/05/Dal-Tadka-Featured-500x500.jpg"},
          {name:"Daal Kolhapuri", img:"https://gurukripahotel.com/wp-content/uploads/2025/05/dal-kolhapuri.jpg"}, 
            {name:"Daal Dhabha", img:"https://namastebharattaste.com/wp-content/uploads/2023/08/daal-dhawa.png"}, 
            {name:"Daal Lasani", img:"https://jeyporedukaan.in/wp-content/uploads/2025/03/Dal-Tadka-Featured-768x768-1.jpg"},
          {name:"Daal Makhani", img:"https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog-500x500.jpg"}, 
            {name:"Daal Nawabi", img:"https://img-global.cpcdn.com/steps/d85024405e82b41c/400x400cq80/photo.jpg"}, 
            {name:"Daal Panchratna", img:"https://pipingpotcurry.com/wp-content/uploads/2022/03/pressure-cooker-panchmel-dal.jpg"},
          
          ]
    },     
    {   name:"BasmatiRice",
        value: [
          { name:"Steamed Rice", img:"https://static.toiimg.com/thumb/54504752.cms?imgsize=205531&width=800&height=800"},
            { name:"Jeera Rice", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBRRqzcFG9V4wy7XKAjZRs4jZLPWWtCH0QQ&s"},
            { name:"Jeera Rice with Green Peas", img:"https://img-global.cpcdn.com/steps/17829733a9c6a0d1/400x400cq80/photo.jpg"}, 
          { name:"Garlic Rice", img:"https://garlicallday.com/wp-content/uploads/roasted-garlic-rice-in-clay-pot.jpg"},
            { name:"Lemon Rice", img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/03/lemon-rice-stovetop-featured.jpg"},
            { name:"Curd Rice", img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/03/lemon-rice-stovetop-featured.jpg"}, 
          { name:"Tamarind Rice", img:"https://vegecravings.com/wp-content/uploads/2018/11/Pulihora-Tamarind-Rice-Recipe-Step-By-Step-Instructions.jpg"},
            { name:"Masala Bhaat", img:"https://www.indianveggiedelight.com/wp-content/uploads/2020/03/masala-rice-new-1-featured.jpg"},
            { name:"Gola Bhaat", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsGoock6ALysUu-aeAotu5Pn_xhH0wqkTrw&s"}, 
          { name:"Bisibele Bhaat", img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/bisi-bele-bath-recipe.jpg"},
            { name:"Kashmiri Pulao", img:"https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/kashmiri-pulao-3.jpg"},
            { name:"Veg Pulao", img:"https://www.indianveggiedelight.com/wp-content/uploads/2019/07/veg-pulao-featured.jpg"}, 
            { name:"Palak Pulao", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII_bnEj03SEcP2gHlg72cO-nvL2Gvgjg9Fw&s"}, 
            { name:"Veg Biryani", img:"https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg"}, 
            { name:"Dal Khichadi", img:"https://purendesi.in/wp-content/uploads/2024/03/dal-khichdi-recipe.jpg"}, 
            { name:"Mangolian Rice", img:"https://production-media.gousto.co.uk/cms/mood-image/3206---Mongolian-inspired-Spicy-Beef-Fried-Rice0091-1603354899202.jpg"}, 
          ]
    },
    {       name:"Desserts",
        value: [
          {name:"Gulab Jamun",img:"https://www.vegrecipesofindia.com/wp-content/uploads/2022/10/gulab-jamun-recipe-01.jpg"},
{name:"Kala Jamun",img:"https://www.cookwithmanali.com/wp-content/uploads/2020/10/Kala-Jamun-500x500.jpg"},
{name:"Rasgulla",img:"https://prashantcorner.com/cdn/shop/products/RASGULLA_2457ea2c-400a-4130-b540-b77966e63d07.jpg?v=1673073151&width=1946"},
{name:"Chamcham",img:"https://cdn.ready-market.com.tw/21cd62de/Templates/pic/ANKO-Cham-Cham-1200x1200.jpg?v=4f1f0a97"},
{name:"Rasbhari",img:"https://www.govindam.co.in/wp-content/uploads/2025/01/Rasbhari-Sweet-3.webp"},
{name:"Rasmalai",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s"},
{name:"Angoorie Rasmalai",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s"},
{name:"Puran Poli",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRN8_L8bzbrsJNA3ksQpgMMD8ynTG6aUnQ&s"},
{name:"Khoa Poli",img:"https://cdn.dotpe.in/longtail/store-items/7916910/9P6QP42e.jpeg"},
{name:"Til Poli",img:"https://www.recipesworld.co.uk/images/167335704149113316.webp"},
{name:"Gajar Ka Halwa",img:"https://www.whiskaffair.com/wp-content/uploads/2019/05/Gajar-Ka-Halwa-2-3.jpg"},
{name:"Lauki Ka Halwa",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNhRjiByE7EtuOPNAwDrfnHaCkUJ5NOCHwg&s"},
{name:"Moong Daal Halwa",img:"https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-rajasthani-moong-dal-halwa.jpg"},
{name:"Basundi",img:"https://www.cookingcarnival.com/wp-content/uploads/2023/03/Basundi-4.jpg"},
{name:"Any Type of Kheer",img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg"},
{name:"Shahi Tukda",img:"https://www.whiskaffair.com/wp-content/uploads/2019/03/Shahi-Tukda-2-3.jpg"},
{name:"Jalebi",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/shubhi-mishra20171004002157988.jpeg"},
{name:"Rabadi",img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/renu-chandratre2018032020403041.jpeg"},
{name:"Ice Cream",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HhedQdurLUbPn70JFdb0jldFgv7dZQnYBw&s"},
{name:"Shree khand",img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/03/shrikhand-featured.jpg"},
{name:"Amrakhand",img:"https://ghodkesweets.com/wp-content/uploads/2020/10/amrakhand@2x.jpg"},
{name:"Fruit Custard",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqTmswFi3QeHHPSPwF2XVWiyhJiNGYeserQ&s"},
{name:"Mousse",img:"https://fullofplants.com/wp-content/uploads/2018/04/light-and-fluffy-aquafaba-strawberry-mousse-vegan-gluten-free-thumb-10.jpg"},
{name:"Cheese Cake",img:"https://preppykitchen.com/wp-content/uploads/2022/07/cheesecake-blog-2.jpg"},
{name:"Fruit Tart",img:"https://richanddelish.com/wp-content/uploads/2023/05/mini-fruit-tarts-2.jpg"},
         ]
    },
    {   name:"Savouries",
        value: [
          {name:"Plain Curd", img:"https://enjoyinfourseason.com/wp-content/uploads/2022/05/Fourseason-PLAIN-CURD.jpg"}, 
            {name:"Mattha", img:"https://miro.medium.com/v2/resize:fit:10156/1*JiIaw8B_bRZG_eKXo059QA.jpeg"}, 
            {name:"Kadhi", img:"https://www.livingsmartandhealthy.com/wp-content/uploads/2024/06/Hyderabadi-Kadhi-Pakora2.jpg"},
          {name:"Pakoda (Moong / Onion / Mix)", img:"https://www.whiskaffair.com/wp-content/uploads/2020/07/Moong-Dal-Pakoda-2-3.jpg"}, 
            {name:"Dahi Wada", img:"https://sublimerecipes.com/wp-content/uploads/2021/04/DahiVada-FI-500x500.jpg"}, 
            {name:"Dahi Bhalla", img:"https://www.prabhatkhabar.com/wp-content/uploads/2025/07/%E0%A4%B8%E0%A4%BE%E0%A4%B5%E0%A4%A8-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%A8%E0%A4%B9%E0%A5%80%E0%A4%82-%E0%A4%96%E0%A4%BE%E0%A4%A4%E0%A5%87-%E0%A4%A8%E0%A5%89%E0%A4%A8%E0%A4%B5%E0%A5%87%E0%A4%9C-5.jpg"},
          {name:"Sandwich Dhokla", img:"https://dhoklahouse.com/wp-content/uploads/2025/04/dhokla-house-sandwich-dhokla-03.jpg"}, 
            {name:"White Dhokla", img:"https://static.toiimg.com/photo/59190882.cms"}, 
            {name:"Cutlet", img:"https://www.whiskaffair.com/wp-content/uploads/2020/09/Veg-Cutlet-2-3.jpg"},
          {name:"BatataWada", img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/batata-vada-recipe.jpg"}, 
            {name:"DaalWada", img:"https://www.cookingcarnival.com/wp-content/uploads/2022/07/Dal-Vada-7.jpg"}, 
            {name:"Khandvi", img:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/disha-khurana14596966695701341ce8e8a.jpeg"},
          {name:"Sambar Wadi (seasonal)", img:"https://www.puvi.co/uploaded_images/1687243291.jpg"}, 
            {name:"Green Peas Kachori", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiD8ch-IdH-cZft0CUeae6vbJzBlmC7ZRldw&s"}, 
            {name:"Mix Veg Mini Samosa", img:"https://pataks.ca/wp-content/uploads/2022/05/homemade-vegetable-samosas.jpg"},
          {name:"Boondie Raita", img:"https://dinedelicious.in/wp-content/uploads/2021/03/Boondi-raita-Recipe-2-500x500.jpg"}, 
            {name:"Pineapple / Mix Fruit Raita", img:"https://www.tipsnrecipesblog.com/wp-content/uploads/2025/04/fruit-raita-main.jpg"}, 
            ]
    }, 
    {   name:"Salads",
        value: [{name:"Green Salad", img:"https://leelalicious.com/wp-content/uploads/2018/08/Corn-Tomato-Avocado-Salad-Recipe-500x500.jpg"}, 
            {name:"Sprouts Salad", img:"https://www.whiskaffair.com/wp-content/uploads/2020/04/Sprouts-Salad-3.jpg"}, 
            {name:"Chick Peas Salad", img:"https://www.lisashealthykitchen.com/wp-content/uploads/chickpea-feta-cucumber-tomato-salad-recipe.jpg"}, 
            {name:"Mix / Kakdi Koshimbir", img:"https://ministryofcurry.com/wp-content/uploads/2020/06/koshimbir_-4-500x500.jpg"}, 
            {name:"Russian Salad", img:"https://soupchick.s3.amazonaws.com/wp-content/uploads/2023/12/07140219/SALAD0030_1.png"}, 
            {name:"Mexican Salad", img:"https://veganheaven.org/wp-content/uploads/2020/05/Mexican-Salad-9.jpg"}, 
            {name:"Cheese Macaroni Salad", img:"https://www.eatingonadime.com/wp-content/uploads/2023/01/EasyMacaroniSalad-Square-Pic.jpg"}, 
            {name:"Corn Potato Salad", img:"https://www.peanutblossom.com/wp-content/uploads/2015/06/frenchpotatosalad-17.jpg"}]
    },
    {   name:"AdditionalOptions",
        value: [{name:"Chaat Station", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7hh_qeNemM83ninycYHcskgIBLlnrdzCeg&s"}, 
            {name:"Chinese Station", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBE5WJsIwy_ILxk5qS8UTHcJRfosDEmIaohg&s"}, 
            {name:"Live South Indian Station", img:"https://hemamagesh.com/wp-content/uploads/2019/07/South-Indian-breakfast.jpg"}, 
            {name:"Welcome Drink Station", img:"https://i.pinimg.com/222x/04/62/8d/04628db52d5c27c26b5bdf61b76b3714.jpg"}, 
            {name:"Live Egg Station", img:"https://hips.hearstapps.com/hmg-prod/images/breakfast-for-dinner-naan-best-egg-recipes-66c7aedec1268.png"}, 
            {name:"Coffee / Masala Milk Station", img:"https://madhurasrecipe.com/wp-content/uploads/2023/10/Masala-Doodh-Featured-Image-585x585.jpg"}, 
            {name:"Additional Starter", img:"https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Buffalo-cauliflower-7825216.jpg"}, 
            {name:"VIP Setting", img:"https://i.pinimg.com/236x/1e/2d/ba/1e2dba7e13cbe5c8aa86aa95bc7728e0.jpg"},
            {name:"Roomali Roti Counter", img:"https://www.cookwithkushi.com/wp-content/uploads/2016/10/rumali_roti_roomali_roti_recipe.jpg"},
            {name:"Tandoori Roti / Naan Counter", img:"https://sinfullyspicy.com/wp-content/uploads/2024/05/1200-by-1200-images.jpg"},
            {name:"Tambul", img:"https://img-global.cpcdn.com/recipes/61270455d8104404/680x781cq80/%E0%A4%A4%E0%A4%AC%E0%A4%B2-tambul-recipe-in-marathi-%E0%A4%B0%E0%A4%B8%E0%A4%AA-%E0%A4%9A-%E0%A4%AE%E0%A4%96%E0%A4%AF-%E0%A4%AB%E0%A4%9F.jpg"},
            ]
    }    
    ]

    const [isActive, setIsActive] = useState("SpecialVeggies")
      const activeSnack = snacks.find(item => item.name === isActive);
    //   console.log(activeSnack)

    const handleSelectedOptions = ( category, itemName ) =>{
      setSelectedOptions( (prev)=> {  
      const updated = {...prev, [category]: itemName};
      console.log("selected options:", updated);
      return updated;
      }
     )
     setSelectedPlatter( (prev)=> ({ ...prev, selectedOptions: selectedOptions })  )
      //  console.log("Hello",selectedOptions)
    };

  return (
    <div>
     { Object.keys(selectedPlatter).length !== 0 ? (
       <div className='grid grid-cols-6 lg:max-w-7xl justify-between mx-auto h-full md:min-h-screen'>
             {selectedPlatter.keyword == "snacks" || selectedPlatter.keyword == "catering" && (
             <div className='md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-7 pt-5 md:space-y-6 md:py-10'>  
             <div>
                <button onClick={() => {setIsActive("SpecialVeggies")}} className={` rounded-md transition  justify-start text-start  ${isActive === "SpecialVeggies" ? " text-primary" : " text-black"}`}> Special Veggies </button>
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
                <button onClick={() => {setIsActive("Salads")}} className={` rounded-md transition ${isActive === "Salads" ? " text-primary" : " text-black"}`}> Salads </button>
                {/* {selectedOptions.Salads !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Salads}</p> : <p></p> } */}

             </div>
             <div>
                <button onClick={() => {setIsActive("AdditionalOptions")}} className={` rounded-md transition ${isActive === "AdditionalOptions" ? " text-primary text-left" : " text-black text-left"}`}> Additional Options </button>
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
                 {isActive === "AdditionalOptions" && <div>
                {/* Card Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
        {activeSnack?.value.map((snackItem, index) => (
          <div key={index} className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between">
            <img src={snackItem.img} alt={snackItem.name} class="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3" />
            <div className="text-black text-md md:text-lg text-center">{snackItem.name}</div>
            <div className='group'>
            <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.AdditionalOptions !== null && selectedOptions.AdditionalOptions ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
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
                </div>
      )}
    </div>   
  )
}

export default SelectOptionsMenuA