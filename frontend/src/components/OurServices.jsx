import React from "react";

const services = [
  {
    title: "Packed Meal Thalis",
    description: "Convenient and tasty they are your go to meal solutions.",
    button: "Thali Brochure",
    image: "https://static.wixstatic.com/media/45b4de_ccb3da722465441693fd027280a14a96~mv2.png/v1/fill/w_620,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Thali_Baron_website.png", // Replace with actual path
  },
  {
    title: "Outdoor Catering / Delivery",
    description:
      "Ask for complete buffet service or just deliveries. Click to download the menu.",
    button: "ODC Menu 2025",
    image: "https://static.wixstatic.com/media/45b4de_e7f0d0c411914ce997527c60659effd9~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ODC_Baron.jpg",
  },
  {
    title: "Hospital / Corporate Catering",
    description:
      "We focus on quality and flavor, and cook health-conscious meals",
    button: "Week's Menu",
    image: "https://static.wixstatic.com/media/45b4de_9ce4816c06814881a6fc26c109961573~mv2.jpg/v1/crop/x_24,y_0,w_743,h_676/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/hospital_tray.jpg",
  },
  {
    title: "Food Processing",
    description:
      "If you have a food business and want to bring in consistency and ease in your business get in touch with us.",
    button: "Ask Us",
    image: "https://static.wixstatic.com/media/45b4de_9ce4816c06814881a6fc26c109961573~mv2.jpg/v1/crop/x_24,y_0,w_743,h_676/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/hospital_tray.jpg",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gray-50 px-4 lg:px-12 py-12 text-gray-800">
      <h2 className="text-3xl text-center text-orange-600 pb-12 font-bold tracking-tight sm:text-5xl md:text-5xl">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-orange-50 rounded-lg overflow-hidden shadow-md flex flex-col sm:flex-row transition-all transform hover:-translate-y-1.5"
          >
            <div className="w-full sm:w-1/2 h-56 sm:h-auto">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2 p-4 flex flex-col justify-between text-center sm:text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  {service.description}
                </p>
              </div>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 w-fit mx-auto sm:mx-0">
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
