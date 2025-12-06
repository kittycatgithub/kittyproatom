import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Meal Thali & Snack Boxes",
    desc: "Classic delight with 100% real mozzarella cheese.",
    price: "₹95",
    link: "/all-menu/meal-thali-snack-boxes",
    images: [
      "/categories/tha-img1.jpeg",
      "/categories/sna-img1.jpeg",
      "/categories/tha-img2.jpeg",
      // "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
      // "https://media.istockphoto.com/id/174973324/photo/non-vegetarian-indian-thali.jpg?s=612x612&w=0&k=20&c=Z9hP8XVJ3KZaBlOutIEiOshPY7rzZdkoEAVabusE15o=",
      // "https://media.istockphoto.com/id/515894660/photo/indian-vegetarian-thali-indian-thali-parcel-indian-take-home-food.jpg?s=612x612&w=0&k=20&c=VTfjgDM-BqjIvPkQJ29UUB-vrU-MDXWpgRhPcEwmsOY=",
    ],
  },
  {
    title: "Bulk Delivery",
    desc: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika.",
    price: "₹259",
    link:"/",
    // link:"/select-bulk/ek56j67k",
    images: [
      "/categories/bulk/bulk-img1.jpeg",
      "/categories/bulk/bulk-img2.jpg",
      "/categories/bulk/bulk-img3.jpeg",
      // "https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.jpg?s=612x612&w=0&k=20&c=gbfAu17L1gtHmuo5biByhfCefAtYUtGQpyxMmi9_Mus=",
      // "https://media.istockphoto.com/id/2185257273/photo/indian-curry-tikka-masala-chicken-lamb-mutton-rogan-josh-with-rice-and-naan-bread-dark.jpg?s=612x612&w=0&k=20&c=-yHrDXUjpBv0RkD8hP2IQbiW-RNE8L1sQCpv-l09yAA=",
      // "https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.jpg?s=612x612&w=0&k=20&c=tBMCVZt7CW0KRBqkRg-MDySzxMiQqzUamGU9IHnH13Q=",
    ],
  },
  {
    title: "Frozen Products",
    desc: "The awesome foursome! Golden corn, black olives, capsicum, red paprika.",
    price: "₹259",
    link:"/store/",
    images: [
      // "https://media.istockphoto.com/id/1225535094/photo/pre-packaged-sandwiches-displayed-in-a-commercial-refrigerator.jpg?s=612x612&w=0&k=20&c=Hl7XtSZb-oSFWjg2hTifYJZ_Q6BWqGn6A0SBeScDKOU=",
      '/categories/frozen/img2.jpeg',
      '/categories/frozen/img1.jpeg',
      '/categories/frozen/img3.jpeg',
      // "https://media.istockphoto.com/id/1446875650/photo/boxes-with-pre-packaged-vegetable-salads-in-a-commercial-fridge.jpg?s=612x612&w=0&k=20&c=fLqq9mk-ERwGD0ivnTH7k9m8_gySywWp2M6ogq3guSk=",
      // "https://media.istockphoto.com/id/497634049/photo/pre-packaged-ready-to-eat-food.jpg?s=612x612&w=0&k=20&c=DvMDKkHR8CrSXmj5CxZaW4z2zK6EfMQ36JLcv4CCp2Q=",
    ],
  },
  {
    title: "Catering",
    desc: "Delightful combination of onion, capsicum, tomato & grilled mushroom.",
    price: "₹259",
    link: "/all-menu/catering",
    images: [
      "https://media.istockphoto.com/id/1249206724/photo/banquet-catering-buffet-food.jpg?s=612x612&w=0&k=20&c=EDQZDZDQYeWT0UYasMivgDXwEa-QWPWEQn62szACVVM=",
      "/categories/cat-img2.jpeg",
      "/categories/cat-img3.jpeg",
    ],
  },
];

const TopBestsellers = () => {

  const navigate = useNavigate()

  return (
    // <div className="bg-gradient-to-b from-yellow-50 via-yellow-50 to-yellow-100">
    <div>
      <div className="max-w-7xl mx-auto w-full  py-10">
      {/* Cards Container */}
      <div className="flex gap-6 overflow-x-auto px-4 pb-6 scrollbar">
        {cards.map((item, index) => (
          <div
            key={index}
            // className="min-w-[290px] sm:min-w-[320px] md:min-w-[360px] bg-white rounded-lg shadow-lg overflow-hidden relative group"
            className="min-w-[290px] sm:min-w-[320px] md:min-w-[290px] bg-white rounded-lg shadow-lg overflow-hidden relative group"
            onClick={() => navigate(`${item.link}`)}
          >
            {/* Image Carousel */}
            <div className="relative h-48 md:h-56 lg:h-64">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                className="h-full w-full"
              >
                {item.images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt={`${item.title}-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Badge */}
              <div className="absolute z-1 top-0 left-3 bg-yellow-400 text-xs font-medium rounded-b-md px-2 py-1 shadow-md flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 7L20 7.5L15.5 11L17 16L12 13.5L7 16L8.5 11L4 7.5L9.5 7L12 2Z" />
                </svg>
                Baron's TOP Menu
              </div>
              {/* Customise Button */}
              {/* <button className="absolute z-50 right-3 bottom-3 bg-black/60 text-white text-sm px-3 py-1.5 rounded-md hover:bg-black/70">
                Customise ➤
              </button> */}
            </div>
            {/* Card Text */}
            <div className="px-4 pb-4 pt-3">
              <div className="flex items-center gap-2 mb-1">
                {/* <div className="w-4 h-4 border border-green-600 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-sm"></div>
                </div> */}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <div className="text-xl font-semibold">{item.price} <span className="font-normal text-sm">onwards</span></div>
                  {/* <div className="text-xs text-gray-500">
                    Regular | New Hand Tossed
                  </div> */}
                </div>
                { item.title !== 'Catering' ? (
                  <Link to={item.link} onClick={()=> scrollTo(0,0)} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-2 py-2 rounded-md shadow-md">
                    Place Order
                  </Link>
                ):(
                  <Link to={item.link} onClick={()=> scrollTo(0,0)} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-2 py-2 rounded-md shadow-md">
                    Ask For Quotation
                  </Link>
                ) }
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default TopBestsellers;
