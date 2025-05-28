import { useState } from "react";
import { Calendar, Clock, MapPin, Minus, Plus, X } from "lucide-react";
import { User, SlidersHorizontal, Truck } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';


export default function FillDetails () {
    const {products, cart} = useAppContext()
    const {_id} = useParams()
    
    const filteredProduct = products.filter( (product)=> product._id.toLowerCase() === _id )

    const handleGuestChange = (delta) => {
    setGuests((prev) => Math.max(minGuests, Math.min(maxGuests, prev + delta)));
  };
  const originalPrice = 249;
  const [guests, setGuests] = useState(129);
  const minGuests = 10;
  const maxGuests = 2000;

  // Dynamic pricing logic (example: simple discount by guest count)
  const getPricePerPlate = () => {
    if (guests >= 130) return 160;
    if (guests >= 100) return 170;
    return originalPrice;
  };

  const pricePerPlate = getPricePerPlate();
  const discount = (((originalPrice - pricePerPlate) / originalPrice) * 100).toFixed(2);

  // Date Format Component

 const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');
  const [showModal, setShowModal] = useState(false);

 const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      setFormattedDate(format(date, 'dd/MM/yyyy'));
      setShowModal(false); // Close modal after selection
    }
  };

  // Select Time Slots

   const [showModalTime, setShowModalTime] = useState(false);
  const [activeTab, setActiveTab] = useState('morning');
  const [selectedSlot, setSelectedSlot] = useState('');

  const morningSlots = ['7:30 AM - 8:30 AM', '8:30 AM - 9:30 AM', '9:30 AM - 10:30 AM'];
  const eveningSlots = ['3:30 PM - 4:30 PM', '4:30 PM - 5:30 PM', '5:30 PM - 6:30 PM'];

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setShowModalTime(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-center mb-4">
        {/* <button className="text-2xl">&#8592;</button> */}
        <h2 className="text-xl font-semibold">Fill Details</h2>
        <div></div>
      </div>

      {/* Service Title */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-medium">
          📦 {filteredProduct[0].name}
        </div>
        <button className="text-gray-500 text-sm">Edit ✏️</button>
      </div>

      {/* Occasion */}
      <div className="mb-4">
        <label className="text-gray-600">Choose Your Occasion (Optional)</label>
        <select className="w-full border rounded px-3 py-2 mt-1">
          <option>Engagement</option>
          <option>Workshops</option>
          <option>House Warming</option>
          <option>Kitty Party</option>
          <option>Cocktail Party</option>
          <option>Wedding</option>
          <option>Haldi</option>
          <option>Reception</option>
          <option>Farm House Party</option>
          <option>Puja</option>
          <option>Family Get-Together</option>
          <option>Birthday Party</option>
          <option>Corporate Events</option>
          <option>House Party</option>
          {/* Add more options if needed */}
        </select>
      </div>
       {/* Date and Time */}
      <div className="grid grid-cols-2 gap-0.5 md:gap-4 mb-4">
        <div>
          <label className="text-gray-600">Date</label>
          <div className="flex items-center border  rounded px-3 py-2 mt-1 shadow-sm">
        {/* <Calendar className="w-5 h-5 mr-2 text-pink-500" /> */}
         <button
        onClick={() => setShowModal(true)}
        className="flex items-center w-full text-left"
      >
        <Calendar className="w-5 h-5 mr-2 text-pink-500" />
        <span className="text-gray-700 text-sm">
          {formattedDate || 'dd/mm/yyyy'}
        </span>
      </button>

      {/* {formattedDate && (
        <p className="mt-3 text-green-600">
          Selected Date: <strong>{formattedDate}</strong>
        </p>
      )} */}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg  mb-4">Pick a date</h2>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              inline
            />
            <div className="text-right mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-red-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </div>   
    </div>

  {/* Select TimeSlot Component */}

   
        <div>
          <label className="text-gray-600">Time</label>
          <div className="flex items-center border rounded px-1 py-2 mt-1">
            <Clock className="w-5 h-5 mr-1 text-pink-500" />

      <button
        onClick={() => setShowModalTime(true)}
        className="rounded"
      >
        <h2 className="text-sm">{selectedSlot || 'Select Time Slot'}</h2>
      </button>


      {showModalTime && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-md p-5 shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setShowModalTime(false)}
            >
              <X size={20} />
            </button>

            <h3 className="mb-4">Select Time Slot</h3>

            <div className="flex border-b mb-4">
              <button
                className={`flex-1 py-2 font-medium ${
                  activeTab === 'morning' ? 'border-b-2 border-pink-500 text-pink-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('morning')}
              >
                Morning Slot
              </button>
              <button
                className={`flex-1 py-2 font-medium ${
                  activeTab === 'evening' ? 'border-b-2 border-pink-500 text-pink-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('evening')}
              >
                Evening Slot
              </button>
            </div>

            <div className="grid gap-3">
              {(activeTab === 'morning' ? morningSlots : eveningSlots).map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleSlotSelect(slot)}
                  className="w-full border border-pink-500 text-pink-600 font-medium py-2 rounded hover:bg-pink-50"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
            {/* <span className="text-sm md:text-md">9:30 AM - 10:30 AM</span> */}
          </div>
        
        </div>
      </div>

    
     

{/* Price Per Plate */}
      <div className="bg-white flex justify-between border rounded-xl p-4 mb-4 shadow-sm">
        <div className="text-sm font-medium text-gray-500 mb-1">Price Per Plate :</div>
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm text-green-600 font-semibold">
            {discount}% <span className="text-green-600">&#8595;</span>
          </div>
          <div className="line-through text-sm text-gray-400">₹{originalPrice}</div>
          <div className="text-xl text-purple-700 font-bold">₹{pricePerPlate}</div>
        </div>
      </div>

      {/* Guest Selector */}
      <div className="bg-white  border rounded-xl p-4 mb-2 shadow-sm">
        <div className="grid grid-cols-2">
             <div className="text-sm font-medium text-gray-700 content-center mb-2">Total Guests</div>
        <div className="flex flex-row items-center justify-between mb-2">
          <button
            className="bg-gray-100 p-2 rounded-full"
            onClick={() => setGuests(Math.max(minGuests, guests - 1))}
          >
            <Minus className="w-4 h-4 text-purple-700" />
          </button>
          <input
            type="text"
            value={guests}
            readOnly
            className="text-center w-20 py-1 rounded-lg border text-purple-700 font-bold"
          />
          <button
            className="bg-purple-100 p-2 rounded-full"
            onClick={() => setGuests(Math.min(maxGuests, guests + 1))}
          >
            <Plus className="w-4 h-4 text-purple-700" />
          </button>
        </div>
        </div>
       

        {/* Slider */}
        <div className="relative">
          <input
            type="range"
            min={minGuests}
            max={maxGuests}
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full h-1 rounded-full bg-purple-300 accent-purple-600"
          />
          {/* <User className="absolute right-0 -top-4 text-purple-600 w-4 h-4 mt-5" /> */}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>10 (min)</span>
          <span>2000</span>
        </div>

        <div className="text-xs text-purple-700 text-center mt-2">
          ✨ <strong>DYNAMIC PRICING</strong> more guests, more savings.
        </div>
      </div>

      {/* Preferences Section */}
      {/* <div className="bg-white border rounded-xl p-4 mb-2 flex justify-between items-center shadow-sm">
        <div className="flex items-start gap-2">
          <SlidersHorizontal className="text-purple-600 w-5 h-5 mt-1" />
          <div>
            <div className="font-medium text-sm text-gray-700">Set your preferences</div>
            <div className="text-xs text-gray-500">(optional) Spice level, veg count and more</div>
          </div>
        </div>
        <div className="text-gray-400">{">"}</div>
      </div> */}

      {/* Doorstep Toggle */}
      {/* <div className="bg-white border rounded-xl p-4 mb-4 flex justify-between items-center shadow-sm">
        <div className="flex gap-2">
          <Truck className="text-purple-600 w-5 h-5 mt-1" />
          <div>
            <div className="font-medium text-sm text-gray-700">DoorStep Service</div>
            <div className="text-xs text-gray-500">(Optional) Enable to get delivery to your door. Extra charges apply.</div>
          </div>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-purple-600"></div>
        </label>
      </div> */}

      {/* Address */}
      <div className="bg-white border rounded-xl p-4 mb-24 shadow-sm">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <MapPin className="w-5 h-5 text-gray-600 mt-1" />
            <div>
              <div className="text-sm font-semibold text-gray-700">Home</div>
              <div className="text-xs text-gray-500">
                45, CF4G+HWR, Basheer Bagh, Hyderabad, Telangana, India, Pin - 500029
              </div>
            </div>
          </div>
          <button className="text-pink-500 text-sm font-medium">Change</button>
        </div>
      </div>

      {/* Bottom Cart Bar */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-4 flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <img
            src="/platter.png"
            alt="platter"
            className="w-10 h-10 rounded-full border"
          />
          <span className="text-sm font-medium text-gray-700">2 Platter In Cart</span>
        </div>
        <button className="bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold">
          Update Details
        </button>
      </div> */}
    </div>
  );
}
