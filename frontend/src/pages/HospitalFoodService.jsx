import React from 'react'

const HospitalFoodService = () => {
  return (
   <section className="flex flex-col items-center justify-center px-6 py-12 md:py-20 text-center bg-white">
      {/* Image */}
      <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60"
          alt="Hospital and Corporate Food Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="mt-8 text-2xl md:text-4xl font-bold text-orange-500">
        Hospital and Corporate Food Services
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
        We take contracts for Hospital and Corporate food services wherein we
        serve therapeutic diets to patients, daily food to your staff and run
        the cafeteria. We focus on quality and flavor, and cook
        health-conscious meals. See the menu for this week in the table below.
      </p>

      {/* Button */}
      <div className="mt-6">
        <a
          href="https://docs.google.com/spreadsheets/d/1DJqJcnMMP9TXjNdcx3A8SKYP79gj0xO9kkcgURyJ0JU/edit?usp=sharing" target='_blank'
          className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
        >
          Weekly Menu
        </a>
      </div>
    </section>
  )
}

export default HospitalFoodService