import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import CustomizeBar from "../components/CustomizeBar";
import toast from "react-hot-toast";
import { actualProducts } from "../assets/assets";

const SelectOptionsHighTea = () => {
  const { selectedPlatter, setSelectedPlatter, navigate, currency } =
    useAppContext();
  // console.log("select Platter" , selectedPlatter)
  const [selectedOptions, setSelectedOptions] = useState({
    Menu1: null,
    Menu2: null,
    Menu3: null,
    Menu4: null,
    Menu5: null,
    Menu6: null,

    AdditionalOptions: null,
  });

  const snacks = [
    {
      name: "Menu1",
      value: [
        {
          name: "Dhokla",
          img: "/images/high-tea/dhokla.jpg",
        },
        {
          name: "Cutlet",
          img: "/images/high-tea/cutlet.jpg",
        },
        {
          name: "Tea",
          img: "/images/high-tea/tea.jpg",
        },
        {
          name: "Coffee",
          img: "/images/high-tea/coffee.jpg",
        },
        {
          name: "Tea Cake",
          img: "/images/high-tea/tea-cake.jpg",
        },
      ],
    },
    {
      name: "Menu2",
      value: [
        {
          name: "Sandwich",
          img: "/images/high-tea/sandwich.jpg",
        },
        {
          name: "Mini Samosa",
          img: "/images/high-tea/mini-samosa.jpg",
        },
        {
          name: "Tea",
          img: "/images/high-tea/tea.jpg",
        },
        {
          name: "Coffee",
          img: "/images/high-tea/coffee.jpg",
        },
        {
          name: "Tea Cake",
          img: "/images/high-tea/tea-cake.jpg",
        },
      ],
    },
    {
      name: "Menu3",
      value: [
        {
          name: "Spring Roll",
          img: "/images/high-tea/spring-roll.jpg",
        },
        {
          name: "Veg Momo",
          img: "/images/high-tea/veg-momo.webp",
        },
        {
          name: "Tea",
          img: "/images/high-tea/tea.jpg",
        },
        {
          name: "Coffee",
          img: "/images/high-tea/coffee.jpg",
        },
        {
          name: "Tea Cake",
          img: "/images/high-tea/tea-cake.jpg",
        },
      ],
    },
    {
      name: "Menu4",
      value: [
        {
          name: "Papdi Chaat",
          img: "/images/high-tea/papdi-chaat.jpg",
        },
        {
          name: "Ragda Pattis",
          img: "/images/high-tea/ragda-patties.jpg",
        },
        {
          name: "Tea",
          img: "/images/high-tea/tea.jpg",
        },
        {
          name: "Coffee",
          img: "/images/high-tea/coffee.jpg",
        },
        {
          name: "Tea Cake",
          img: "/images/high-tea/tea-cake.jpg",
        },
      ],
    },
    {
      name: "Menu5",
      value: [
        {
          name: "Usal Chiwda",
          img: "/images/high-tea/usal.jpg",
        },
        {
          name: "Aloo Bonda",
          img: "/images/high-tea/aloo-bonda.jpg",
        },
        {
          name: "Tea",
          img: "/images/high-tea/tea.jpg",
        },
        {
          name: "Coffee",
          img: "/images/high-tea/coffee.jpg",
        },
        {
          name: "Tea Cake",
          img: "/images/high-tea/tea-cake.jpg",
        },
      ],
    },
    {
      name: "Menu6",
      value: [
        {
          name: "Vada Pao",
          img: "/images/high-tea/vada-pav.jpg",
        },
        {
          name: "Green Peas Kachori",
          img: "/images/high-tea/green-peas-kachori.jpg",
        },
        {
          name: "Tea",
          img: "/images/high-tea/tea.jpg",
        },
        {
          name: "Coffee",
          img: "/images/high-tea/coffee.jpg",
        },
        {
          name: "Tea Cake",
          img: "/images/high-tea/tea-cake.jpg",
        },
      ],
    },
  ];

  const [isActive, setIsActive] = useState("Menu1");
  const activeSnack = snacks.find((item) => item.name === isActive);
  //   console.log(activeSnack)

  const handleSelectedOptions = (isActive) => {
    const selectedMenu = snacks.filter((item) => item.name === isActive);
    // console.log(selectedMenu);
    if (isActive === "Menu1") {
      setSelectedOptions({
        Menu1: [
          "Dhokla",
          "Cutlet",
          "Tea",
          "Coffee",
          "Tea Cake",
          "BottledWater",
        ],
        Menu2: null,
        Menu3: null,
        Menu4: null,
        Menu5: null,
        Menu6: null,
      });
    }
    if (isActive === "Menu2") {
      setSelectedOptions({
        Menu2: [
          "Sandwich",
          "Mini Samosa",
          "Tea",
          "Coffee",
          "Tea Cake",
          "BottledWater",
        ],
        Menu1: null,

        Menu3: null,
        Menu4: null,
        Menu5: null,
        Menu6: null,
      });
    }
    if (isActive === "Menu3") {
      setSelectedOptions({
        Menu3: [
          "Spring Roll",
          "Veg Momo",
          "Tea",
          "Coffee",
          "Tea Cake",
          "BottledWater",
        ],
        Menu1: null,
        Menu2: null,

        Menu4: null,
        Menu5: null,
        Menu6: null,
      });
    }
    if (isActive === "Menu4") {
      setSelectedOptions({
        Menu4: [
          "Papdi Chaat",
          "Ragda Pattis",
          "Tea",
          "Coffee",
          "Tea Cake",
          "BottledWater",
        ],
        Menu1: null,
        Menu2: null,
        Menu3: null,

        Menu5: null,
        Menu6: null,
      });
    }
    if (isActive === "Menu5") {
      setSelectedOptions({
        Menu5: [
          "Usal Chiwda",
          "Aloo Bonda",
          "Tea",
          "Coffee",
          "Tea Cake",
          "BottledWater",
        ],
        Menu1: null,
        Menu2: null,
        Menu3: null,
        Menu4: null,

        Menu6: null,
      });
    }
    if (isActive === "Menu6") {
      setSelectedOptions({
        Menu6: [
          "Vada Pao",
          "Green Peas Kachori",
          "Tea",
          "Coffee",
          "Tea Cake",
          "BottledWater",
        ],
        Menu1: null,
        Menu2: null,
        Menu3: null,
        Menu4: null,
        Menu5: null,
      });
    }
    toast.success(`${isActive} is Selected`);
    // setSelectedOptions( (prev)=> {
    // const updated = {...prev, [category]: itemName};
    // console.log("selected options:", updated);
    // return updated;
    // } )
    setSelectedPlatter((prev) => ({
      ...prev,
      selectedOptions: selectedOptions,
    }));
  };
  useEffect(() => {
    setSelectedPlatter((prev) => ({
      ...prev,
      selectedOptions: selectedOptions,
    }));
    //  console.log("selectedOptions",selectedOptions)
  }, [selectedOptions]);

  const productDetail = actualProducts.filter(
    (product) => product._id === "ek54j45r",
  );

  return (
    <div className="h-screen ">
      {/* {  console.log("selectedPlatter", selectedPlatter)}  */}
      {Object.keys(selectedPlatter).length !== 0 &&
      selectedPlatter._id !== undefined ? (
        <div className="grid grid-cols-6 lg:max-w-7xl justify-between mx-auto">
          {selectedPlatter.keyword == "snacks" ||
            (selectedPlatter.keyword == "catering" && (
              <div className="md:col-span-1 col-span-2 p-1 text-md md:text-lg space-y-8 md:space-y-6 md:py-10">
                <div>
                  <button
                    onClick={() => {
                      setIsActive("Menu1");
                    }}
                    className={`pt-5 rounded-md transition  justify-start text-start  ${isActive === "Menu1" ? " text-primary" : " text-black"}`}
                  >
                    {" "}
                    Menu1{" "}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsActive("Menu2");
                    }}
                    className={` rounded-md transition  justify-start text-start  leading-4 ${isActive === "Menu2" ? " text-primary" : " text-black"}`}
                  >
                    {" "}
                    Menu2{" "}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsActive("Menu3");
                    }}
                    className={` rounded-md transition ${isActive === "Menu3" ? " text-primary" : " text-black"}`}
                  >
                    {" "}
                    Menu3{" "}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsActive("Menu4");
                    }}
                    className={` rounded-md transition ${isActive === "Menu4" ? " text-primary" : " text-black"}`}
                  >
                    {" "}
                    Menu4{" "}
                  </button>
                  {/* {selectedOptions.Menu4 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu4}</p> : <p></p> } */}
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsActive("Menu5");
                    }}
                    className={` rounded-md transition ${isActive === "Menu5" ? " text-primary" : " text-black"}`}
                  >
                    {" "}
                    Menu5{" "}
                  </button>
                  {/* {selectedOptions.Menu5 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu5}</p> : <p></p> } */}
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsActive("Menu6");
                    }}
                    className={` rounded-md transition ${isActive === "Menu6" ? " text-primary" : " text-black"}`}
                  >
                    {" "}
                    Menu6{" "}
                  </button>
                  {/* {selectedOptions.Menu6 !== null ? <p className='text-xs text-gray-500'>{selectedOptions.Menu6}</p> : <p></p> } */}
                </div>
                <div>
                  <button className=" pb-40 rounded-md transition text-black">
                    {" "}
                    Bottled Water{" "}
                  </button>
                </div>
              </div>
            ))}
          <div className="md:col-span-5 col-span-4 bg-grey-50  border-l border-gray-300 bg-[#EFF6FF]">
            {isActive === "Sandwiches" && (
              <div>
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        <button
                          onClick={() =>
                            handleSelectedOptions(isActive, snackItem.name)
                          }
                        >
                          {selectedOptions.Sandwiches !== null &&
                          selectedOptions.Sandwiches == snackItem.name ? (
                            <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Selected
                            </div>
                          ) : (
                            <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Select
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {isActive === "Menu6" && (
              <div className="pb-4">
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu6 !== null && selectedOptions.Menu6 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-fit">
                  <button onClick={() => handleSelectedOptions(isActive)}>
                    {selectedOptions.Menu6 !== null ? (
                      <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Selected Menu 6
                      </div>
                    ) : (
                      <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Select Menu 6
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
            {isActive === "Menu1" && (
              <div className="pb-4">
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu1 !== null && selectedOptions.Menu1 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-fit">
                  <button onClick={() => handleSelectedOptions(isActive)}>
                    {selectedOptions.Menu1 !== null ? (
                      <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Selected Menu 1
                      </div>
                    ) : (
                      <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Select Menu 1
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
            {isActive === "Menu2" && (
              <div className="pb-4">
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu2 !== null && selectedOptions.Menu2 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-fit">
                  <button onClick={() => handleSelectedOptions(isActive)}>
                    {selectedOptions.Menu2 !== null ? (
                      <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Selected Menu 2
                      </div>
                    ) : (
                      <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Select Menu 2
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
            {isActive === "Menu3" && (
              <div className="pb-4">
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu3 !== null && selectedOptions.Menu3 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-fit">
                  <button onClick={() => handleSelectedOptions(isActive)}>
                    {selectedOptions.Menu3 !== null ? (
                      <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Selected Menu 3
                      </div>
                    ) : (
                      <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Select Menu 3
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
            {isActive === "Menu4" && (
              <div className="pb-4">
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu4 !== null && selectedOptions.Menu4 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-fit">
                  <button onClick={() => handleSelectedOptions(isActive)}>
                    {selectedOptions.Menu4 !== null ? (
                      <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Selected Menu 4
                      </div>
                    ) : (
                      <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Select Menu 4
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
            {isActive === "Menu5" && (
              <div className="pb-4">
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        {/* <button onClick={ ()=> handleSelectedOptions(isActive, snackItem.name )}>
                {selectedOptions.Menu5 !== null && selectedOptions.Menu5 ==  snackItem.name ? <div className='bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Selected</div>:<div 
                className='mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer'>Select</div>}
            </button> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-auto w-fit">
                  <button onClick={() => handleSelectedOptions(isActive)}>
                    {selectedOptions.Menu5 !== null ? (
                      <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Selected Menu 5
                      </div>
                    ) : (
                      <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                        Select Menu 5
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
            {isActive === "Starters" && (
              <div>
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        <button
                          onClick={() =>
                            handleSelectedOptions(isActive, snackItem.name)
                          }
                        >
                          {selectedOptions.Starters !== null &&
                          selectedOptions.Starters == snackItem.name ? (
                            <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Selected
                            </div>
                          ) : (
                            <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Select
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {isActive === "Salads" && (
              <div>
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        <button
                          onClick={() =>
                            handleSelectedOptions(isActive, snackItem.name)
                          }
                        >
                          {selectedOptions.Salads !== null &&
                          selectedOptions.Salads == snackItem.name ? (
                            <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Selected
                            </div>
                          ) : (
                            <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Select
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {isActive === "Chaats" && (
              <div>
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        <button
                          onClick={() =>
                            handleSelectedOptions(isActive, snackItem.name)
                          }
                        >
                          {selectedOptions.Chaats !== null &&
                          selectedOptions.Chaats == snackItem.name ? (
                            <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Selected
                            </div>
                          ) : (
                            <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Select
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {isActive === "WelcomeDrinks" && (
              <div>
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        <button
                          onClick={() =>
                            handleSelectedOptions(isActive, snackItem.name)
                          }
                        >
                          {selectedOptions.WelcomeDrinks !== null &&
                          selectedOptions.WelcomeDrinks == snackItem.name ? (
                            <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Selected
                            </div>
                          ) : (
                            <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Select
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {isActive === "Chinese" && (
              <div>
                {/* Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 p-1 md:p-4 ">
                  {activeSnack?.value.map((snackItem, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl py-2 px-1 shadow-md flex flex-col items-center  justify-between"
                    >
                      <img
                        src={snackItem.img}
                        alt={snackItem.name}
                        className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-3"
                      />
                      <div className="text-black text-md md:text-lg text-center">
                        {snackItem.name}
                      </div>
                      <div className="group">
                        <button
                          onClick={() =>
                            handleSelectedOptions(isActive, snackItem.name)
                          }
                        >
                          {selectedOptions.Chinese !== null &&
                          selectedOptions.Chinese == snackItem.name ? (
                            <div className="bg-primary text-white mt-3 px-2 py-1 border-2 border-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Selected
                            </div>
                          ) : (
                            <div className="mt-3 px-5 py-1 border-2 border-primary  text-primary group-hover:bg-primary group-hover:text-white rounded-lg cursor-pointer">
                              Select
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <hr className="border-t border-themegray/40" />
            <div className=" flex  items-start p-1 lg:p-4 pb-16 lg:pb-18 justify-start font-sans antialiased text-gray-900">
              <div className="w-full max-w-lg bg-white rounded-2xl shadow overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1">
                {/* <div className="relative lg:h-60 xl:h-65 h-40 overflow-hidden bg-gray-100">
                              <img
                                src={productDetail[0]?.path}  
                                alt="Wireless Headphones"
                                className="w-full lg:h-72 xl:h-72 h-44 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                              />                            
                            </div>                     */}
                <div className="px-3 lg:px-6 py-3">
                  <div className="text-indigo-600 font-semibold tracking-wide mb-2">
                    {productDetail[0]?.name}
                  </div>
                  {/* <h2 className="text-md text-gray-900 leading-tight mb-1 px-1">{product.name}</h2> */}
                  <div>
                    <hr className="border-t border-gray-200" />
                    <ul className="list-disc text-xs pl-2 lg:pl-4 text-themegray pt-1">
                      {productDetail[0]?.menu.map((menu, index) => (
                        <li key={index}>{menu}</li>
                      ))}
                    </ul>
                  </div>
                  <hr className="border-t border-gray-200 mt-2" />
                  {/* Price & CTA */}
                  <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-4">
                    <div className="w-full flex justify-between items-center">
                      <div className="text-xl w-3/6 text-gray-900">
                        {currency} {productDetail[0]?.offerPrice}{" "}
                        <span className="text-gray-500 text-xs">
                          {productDetail[0]?.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs">{productDetail[0]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <CustomizeBar selectedOptions={selectedOptions}/>
          {/* <CustomizeBar /> */}
        </div>
      ) : (
        // <div className='flex items-center pl-10 md:pl-0 justify-center h-screen md:h-[60vh] bg-[#EFF6FF]'>
        <div className="flex items-center pl-10 md:pl-0 justify-center h-screen bg-[#EFF6FF]">
          <p className="text-2xl font-medium">
            Kindly select the Platter Again...
            <br />
            Do not refresh the page while selecting platter
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectOptionsHighTea;
