import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Minus, Plus, X } from "lucide-react";
import { User, SlidersHorizontal, Truck } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { actualProducts } from "../assets/assets";
import toast from "react-hot-toast";
import { addDays } from "date-fns"; // for date calculation


export default function FillDetails () {
    const {products, cart, setCart,  navigate} = useAppContext()
    const {_id} = useParams()
    
    const filteredProduct = actualProducts.filter( (product)=> product._id.toLowerCase() === _id )
    // console.log("filteredProduct", filteredProduct[0]?.name)
    // console.log("cart", cart)

    // let minGuests = 15;
    let maxGuests = 2000;
    const originalPrice = 249;

    const [minGuests, setMinGuests] = useState(5)
       const [guests, setGuests] = useState(5); 
    
    useEffect( ()=> {
        if( filteredProduct[0]?.name === 'Snack Box A' || filteredProduct[0]?.name === 'Snack Box B') {
          // console.log('if code executed',  filteredProduct[0]?.name)
          setMinGuests(10)
          setGuests(10)
        }
        if( filteredProduct[0]?.name === 'Breakfast' || filteredProduct[0]?.name === 'Short Menu'|| filteredProduct[0]?.name === 'Menu A'|| filteredProduct[0]?.name === 'Menu B'|| filteredProduct[0]?.name === 'Menu C') {
          // console.log('if code executed',  filteredProduct[0]?.name)
          setMinGuests(15)
          setGuests(15)
        }
        if( filteredProduct[0]?.name === 'Bulk Delivery') {
          // console.log('if code executed',  filteredProduct[0]?.name)
          setMinGuests(1)
          setGuests(1)
        }
    },[] )
       useEffect(() => {
      handleFormChange('guests',guests)
    }, [guests]);

    

    const handleGuestChange = (delta) => {
    setGuests((prev) => Math.max(minGuests, Math.min(maxGuests, prev + delta)));
    };
      
  // Dynamic pricing logic (example: simple discount by guest count)
  const getPricePerPlate = () => {

    if (filteredProduct[0].name == "Working Meal"){     
      if (guests <= 50) return 180
      if (guests > 50 && guests <= 100) return (180 - (180 * 0.05)); // 5% discount
      if ( guests > 100) return (180 - (180 * 0.10)); // 10% discount
    }
    if (filteredProduct[0].name == "Special Meal"){
      // if (guests <=2000) return 220
      if (guests <= 50) return 220
      if (guests > 50 && guests <= 100) return (220 - (220 * 0.05)); // 5% discount
      if ( guests > 100) return (220 - (220 * 0.10)); // 10% discount
    }
    if (filteredProduct[0].name == "Snack Box A"){
      // if (guests <=2000) return 210
      if (guests <= 50) return 95
      if (guests > 50 && guests <= 100) return (95 - (95 * 0.05)); // 5% discount
      if ( guests > 100) return (95 - (95 * 0.10)); // 10% discount
    }
    if (filteredProduct[0].name == "Snack Box B"){
      // if (guests <=2000) return 210
      if (guests <= 50) return 120
      if (guests > 50 && guests <= 100) return (120 - (120 * 0.05)); // 5% discount
      if ( guests > 100) return (120 - (120 * 0.10)); // 10% discount
    }

    // No Discounts given to other Categories i.e. Catering And Bulk Delivery
    if (filteredProduct[0].name == "Menu A"){
      if ( guests >= 15 && guests <= 24 ) return 430
      if ( guests >= 25 && guests <= 49 ) return 400
      if ( guests >= 50 && guests <= 100 ) return 360
      if ( guests > 100 ) return 340
      // return 430  
    }
    if (filteredProduct[0].name == "Menu B"){
      if ( guests >= 15 && guests <= 24 ) return 540
      if ( guests >= 25 && guests <= 49 ) return 510
      if ( guests >= 50 && guests <= 100 ) return 470
      if ( guests > 100 ) return 450
      // return 540   
    }
    if (filteredProduct[0].name == "Menu C"){
      if ( guests >= 15 && guests <= 24 ) return 670
      if ( guests >= 25 && guests <= 49 ) return 640
      if ( guests >= 50 && guests <= 100 ) return 600
      if ( guests > 100 ) return 580
      // return 670   
    }
    if (filteredProduct[0].name == "Short Menu"){
      if ( guests >= 15 && guests <= 24 ) return 380
      if ( guests >= 25 && guests <= 49 ) return 350
      if ( guests >= 50 && guests <= 100 ) return 310
      if ( guests > 100 ) return 290
      // return 380   
    }
    if (filteredProduct[0].name == "Breakfast"){
      // console.log('condition executed')
      if ( guests >= 15 && guests <= 24 ) return 190
      if ( guests >= 25 && guests <= 49 ) return 170
      if ( guests >= 50 ) return 150
      // return 190   
    }

    // if (guests >= 130) return 160;
    // if (guests >= 100) return 170;
    // return originalPrice;
    return 0;
  };
  
  let pricePerPlate = getPricePerPlate();
  const discount = (((originalPrice - pricePerPlate) / originalPrice) * 100).toFixed(2);

  // Occasion Logic
  const [occassion, setOccassion] = useState( "" ) 
  const [details, setDetails] = useState({
    occasion:  null,
    date: null,
    time: null,
    guests: null,
    totalPrice: pricePerPlate,
    // totalPrice: filteredProduct[0].offerPrice,
    // address:null
  }) 

    useEffect( ()=>{
    let updatedPrice = getPricePerPlate()
    setDetails( (prev)=> ({ ...prev, totalPrice: updatedPrice }) )
  },[details.guests] )

// Date Format Component
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      setFormattedDate(format(date, 'dd/MM/yyyy'));
      setShowModal(false); // Close modal after selection
      handleFormChange('date', format(date, 'dd/MM/yyyy'))
    }
  };

  // Select Time Slots
  const [showModalTime, setShowModalTime] = useState(false);
  const [activeTab, setActiveTab] = useState('morning');
  const [selectedSlot, setSelectedSlot] = useState('');

  const morningSlots = ['8:30 AM - 9:30 AM', '9:30 AM - 10:30 AM', '10:30 AM - 11:30 AM'];
  const afternoonSlots = ['12:30 PM - 1:30 PM', '1:30 PM - 2:30 PM', '2:30 PM - 3:30 PM'];
  const eveningSlots = ['4:30 PM - 5:30 PM', '5:30 PM - 6:30 PM','6:30 PM - 7:30 PM'];

  // Choose slots based on activeTab
const slots =
  activeTab === "morning"
    ? morningSlots
    : activeTab === "afternoon"
    ? afternoonSlots
    : eveningSlots;

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setShowModalTime(false);
    handleFormChange('time', slot)
  };

  // Function for form changes

  const handleFormChange = (field, value) => {
    setDetails(
      (prev) => { const newDetails = {...prev, [field]:value} ;  
                                      console.log(newDetails) ; 
                                      return newDetails}
    ) 
   }

   const handleSubmit = () => {
    const missingFields = Object.entries(details).filter(
      // ([key, value]) => value === null || value === ""
      ([key, value]) => 
        (key !== "occasion") && (value === null || value === "")
    );

    if (missingFields.length > 0) {
      const missingNames = missingFields.map(([key]) => key).join(", ");
      toast.error(`Please fill all fields. Missing: ${missingNames}`);
    } else {
      const mergedObject = { ...filteredProduct[0], details };
    // console.log("mergedObject",mergedObject)
     const existingIndex = cart.findIndex(item => item._id === mergedObject._id);

  if (existingIndex !== -1) {
    // Replace existing item only
    const updatedCart = [...cart];
    updatedCart[existingIndex] = {...updatedCart[existingIndex], ...mergedObject};
    // console.log(updatedCart[existingIndex], "hello")
setCart((prev) => [
  ...prev.filter((item) => item._id !== updatedCart[existingIndex]._id),
  updatedCart[existingIndex],
]);    
// console.log(updatedCart[0], "Updated Cart")
    navigate(`/order-review`);
  } else {
    // Do nothing if the item is not in cart
    // console.log('Item not in cart, so not updating.');
  }
    // navigate(`/order-review`)
    // navigate(`/order-review/${_id}`)
    
      toast.success("All fields are filled! Proceeding...");
      // Your form submission logic here
    }
//     const mergedObject = { ...filteredProduct[0], details };
//     console.log("mergedObject",mergedObject)
//      const existingIndex = cart.findIndex(item => item._id === mergedObject._id);

//   if (existingIndex !== -1) {
//     // Replace existing item only
//     const updatedCart = [...cart];
//     updatedCart[existingIndex] = {...updatedCart[existingIndex], ...mergedObject};
//     console.log(updatedCart[existingIndex], "hello")
// setCart((prev) => [
//   ...prev.filter((item) => item._id !== updatedCart[existingIndex]._id),
//   updatedCart[existingIndex],
// ]);    
// // console.log(updatedCart[0], "Updated Cart")
//     navigate(`/order-review`);
//   } else {
//     // Do nothing if the item is not in cart
//     console.log('Item not in cart, so not updating.');
//   }
//     // navigate(`/order-review`)
//     // navigate(`/order-review/${_id}`)
    
   }
  const now = new Date();
const hours = now.getHours();

// If before 6PM → 1 day ahead, else → 2 days ahead
const minSelectableDate = addDays(now, hours < 18 ? 1 : 2);

  return (
    <div className="p-4 max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className=" text-center justify-center mb-4">
        <h2 className="text-xl font-semibold">Fill Details</h2><br/>
      </div>

      {/* Service Title */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-medium">
          📦 {filteredProduct[0].name}
        </div>
        {/* <button className="text-gray-500 text-sm">Edit ✏️</button> */}
      </div>
   {/* Occasion */}
      <div className="mb-4">
        <label className="text-gray-600">Choose Your Occasion</label>
        <select value={details.occasion || ""} onChange={(e) => handleFormChange('occasion', e.target.value)} className="w-full border rounded px-3 py-2 mt-1">
          <option value="" >Select</option>
          <option value="Travel" >Travel</option>
          <option value="Engagement" >Engagement</option>
          <option value="Workshops">Workshops</option>
          <option value="House Warming">House Warming</option>
          <option value="Kitty Party">Kitty Party</option>
          <option value="Cocktail Party">Cocktail Party</option>
          <option value="Wedding">Wedding</option>
          <option value="Haldi">Haldi</option>
          <option value="Reception">Reception</option>
          <option value="Farm House Party">Farm House Party</option>
          <option value="Puja">Puja</option>
          <option value="Family Get-Together">Family Get-Together</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Corporate Events">Corporate Events</option>
          <option value="House Party">House Party</option>
        </select>
      </div>

       {/* Date and Time */}
      <div className="grid grid-cols-2 gap-0.5 md:gap-4 mb-4">
        <div>
          <label className="text-gray-600">Date<span className="text-red-500">*</span></label>
          <div className="flex items-center border  rounded px-3 py-2 mt-1 shadow-sm">
        {/* <Calendar className="w-5 h-5 mr-2 text-orange-600" /> */}
         {/* <button
        onClick={() => setShowModal(true)}
        className="flex items-center w-full text-left"
      >
        <Calendar className="w-5 h-5 mr-2 text-orange-600" />
        <span  className="text-gray-700 text-sm">
          {formattedDate || 'dd/mm/yyyy'}
        </span>
      </button> */}
      <button
  onClick={() => setShowModal(true)}
  className="flex items-center w-full text-left"
>
  <Calendar className="w-5 h-5 mr-2 text-orange-600" />
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
      {/* {showModal && (
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
      )} */}
      {showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-lg mb-4">Pick a date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        inline
        minDate={minSelectableDate} // dynamically set
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
          <label className="text-gray-600">Time<span className="text-red-500">*</span></label>
          <div className="flex items-center border rounded px-1 py-2 mt-1">
            <Clock className="w-5 h-5 mr-1 text-orange-600" />
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
                  activeTab === 'morning' ? 'border-b-2 border-orange-600 text-orange-900' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('morning')}
              >
                Morning
              </button>
              <button
                className={`flex-1 py-2 font-medium ${
                  activeTab === 'afternoon' ? 'border-b-2 border-orange-600 text-orange-900' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('afternoon')}
              >
                Afternoon
              </button>
              <button
                className={`flex-1 py-2 font-medium ${
                  activeTab === 'evening' ? 'border-b-2 border-orange-600 text-orange-900' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('evening')}
              >
                Evening
              </button>
            </div>

            {/* <div className="grid gap-3">
              {(activeTab === 'morning' ? morningSlots : eveningSlots).map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleSlotSelect(slot)}
                  className="w-full border border-orange-600 text-orange-900 font-medium py-2 rounded hover:bg-orange-50"
                >
                  {slot}
                </button>
              ))}
            </div> */}
            <div className="grid gap-3">
  {slots.map((slot, index) => (
    <button
      key={index}
      onClick={() => handleSlotSelect(slot)}
      className="w-full border border-orange-600 text-orange-900 font-medium py-2 rounded hover:bg-orange-50"
    >
      {slot}
    </button>
  ))}
</div>
          </div>
        </div>
      )}
          </div>        
        </div>
      </div>
      {/* Guest Selector */}
      {
        filteredProduct[0]?.name !== 'Bulk Delivery' && 
        <div className="bg-white  border rounded-xl p-4 mb-2 shadow-sm">
        <div className="grid grid-cols-2">
             <div className="text-sm font-medium text-gray-700 content-center mb-2">Total Guests<span className="text-red-500">*</span></div>
        <div className="flex flex-row items-center justify-between mb-2">
          <button
            className="bg-gray-100 p-2 rounded-full"
            onClick={() => {setGuests(Math.max(minGuests, guests - 1)); handleFormChange('guests', guests-1)}}
          >
            <Minus className="w-4 h-4 text-orange-700" />
          </button>
          <input
            type="text"
            value={guests}
            // readOnly
            onChange={ (e)=> setGuests(e.target.value) }
            className="text-center w-20 py-1 rounded-lg border text-orange-700 font-bold"
          />
          <button
            className="bg-orange-100 p-2 rounded-full"
            onClick={() => {setGuests(Math.min(maxGuests, guests + 1)); handleFormChange('guests', guests+1)}}
          >
            <Plus className="w-4 h-4 text-orange-700" />
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
            // onChange={(e) => {setGuests(parseInt(e.target.value));handleFormChange('guests', guests)}}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="w-full h-1 rounded-full bg-orange-300 accent-orange-600"
          />
          {/* <User className="absolute right-0 -top-4 text-orange-600 w-4 h-4 mt-5" /> */}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{minGuests} (min)</span>
          <span>2000</span>
        </div>

        <div className="text-xs text-orange-700 text-center mt-2">
          ✨ <strong>DYNAMIC PRICING</strong> more guests, more savings.
        </div>
      </div>
      }
      {
        filteredProduct[0]?.name !== 'Bulk Delivery' && 
          <div className="bg-white flex border rounded-xl p-4 mb-4 shadow-sm">
        <div className="text-sm font-medium content-center text-gray-500">Price Per Plate :</div>
        <div className="gap-4">
        {/* <div className="flex items-center justify-between gap-4"> */}
          {/* <div className="text-sm text-green-600 font-semibold">
            {discount}% <span className="text-green-600">&#8595;</span>
          </div> */}
          {/* <div className="line-through text-sm text-gray-400">₹{originalPrice}</div> */}
          <div className="text-lg text-orange-700 pl-1">₹{pricePerPlate}</div>
        </div>
      </div>
      }
      
      {/* Price Per Plate */}
      
      {/* Address */}
      {/* <div className="bg-white border rounded-xl p-4 mb-2 shadow-sm">
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
          <button className="text-orange-600 text-sm font-medium">Change</button>
        </div>
      </div> */}
      {/* <div className="mt-4">
  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
    Address
  </label>
  <textarea
    type="text"
    id="address"
    name="address"
    value={details.address || ""}
    onChange={(e) => handleFormChange('address', e.target.value) }
    placeholder="Enter your address"
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
  />
</div> */}

       <div className="py-5">
  <button onClick={handleSubmit} className="text-lg bg-primary  px-6 py-1 rounded-full text-white shadow-xl shadow-gray-200 hover:shadow-sm">
    Submit 
  </button>
</div>     

      {/* Preferences Section */}
      {/* <div className="bg-white border rounded-xl p-4 mb-2 flex justify-between items-center shadow-sm">
        <div className="flex items-start gap-2">
          <SlidersHorizontal className="text-orange-600 w-5 h-5 mt-1" />
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
          <Truck className="text-orange-600 w-5 h-5 mt-1" />
          <div>
            <div className="font-medium text-sm text-gray-700">DoorStep Service</div>
            <div className="text-xs text-gray-500">(Optional) Enable to get delivery to your door. Extra charges apply.</div>
          </div>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 rounded-full peer peer-checked:bg-orange-600"></div>
        </label>
      </div> */}

      
    </div>
  );
}
