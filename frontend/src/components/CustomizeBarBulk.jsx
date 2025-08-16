import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const CustomizeBarBulk = ({ selectedOptions }) => {
  const { cart, setCart, selectedPlatter, setSelectedPlatter, navigate } = useAppContext();
  const { _id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  // Check if any selection exists
  const hasSelectedItems = Object.values(selectedOptions || {}).some(
  (items) => Array.isArray(items) && items.length > 0
);


  // Proceed button
  const handleProceed = () => {
    if (!hasSelectedItems) {
      toast.error("Please select at least one product before proceeding.");
      return;
    }
    setShowModal(true);
  };

  // Handle input change
  const handleInputChange = (category, item, field, value) => {
    const key = `${category}:${item}`;
    setProductDetails((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  // Add to cart after modal form
  const handleCart = () => {
    if (!hasSelectedItems) {
      toast.error("No products selected to add to cart.");
      return;
    }

    // Validate qty & unit before adding
    const invalidItems = Object.entries(selectedOptions).flatMap(
      ([category, items]) =>
        items
          .map((item) => {
            const key = `${category}:${item}`;
            const details = productDetails[key] || {};
            if (!details.qty || !details.unit) {
              return `${item} (${category})`;
            }
            return null;
          })
          .filter(Boolean)
    );

    if (invalidItems.length > 0) {
      toast.error(
        `All Fields are Required*`
        // `Please fill Qty & Unit for: ${invalidItems.join(", ")}`
      );
      return;
    }

    const alreadyInCart = cart.some((item) => item._id === selectedPlatter._id);
    if (alreadyInCart) {
      toast.error("Already in Cart");
      navigate(`/fill-details/${_id}`);
      return;
    }

    const platterWithDetails = {
      ...selectedPlatter,
      productDetails,
      selectedOptions: {}
    };

    setCart((prev) => [...prev, platterWithDetails]);
    toast.success("Added To Cart");
    setSelectedPlatter({})
    setShowModal(false);
    navigate(`/fill-details/${_id}`);
  };

  return (
    <>
      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 shadow-md">
        <div className="flex h-14 justify-between md:justify-around px-5 border-t border-gray-200 bg-green-300 shadow-lg">
          <div></div>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleProceed}
              className="flex flex-row gap-2 items-center w-fit cursor-pointer px-4 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
            >
              <img
                src="https://www.svgrepo.com/show/440930/cart-add.svg"
                className="h-6.5"
                alt="Add to cart"
              />
              <span>Proceed</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-1">
    <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[95vh] overflow-y-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Your Selected Items</h2>

      {Object.entries(selectedOptions).map(([category, items]) =>
        items.length > 0 ? (
          <div key={category} className="mb-4">
            <h3 className="text-lg mb-2">{category}</h3>
            {items.map((item, idx) => {
              const key = `${category}:${item}`;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-[1fr_auto_auto] gap-3 items-center mb-2 border border-gray-400 rounded p-3 bg-gray-50"
                >
                  {/* Product Name */}
                  <span className="text-gray-800 font-medium">{item}</span>

                  {/* Qty */}
                  <input
                    type="number"
                    min="1"
                    placeholder="Qty"
                    className="border p-2 rounded w-16"
                    value={productDetails[key]?.qty || ""}
                    required
                    onChange={(e) =>
                      handleInputChange(category, item, "qty", e.target.value)
                    }
                  />

                  {/* Unit */}
                  <select
                    className="border p-2 rounded w-16"
                    value={productDetails[key]?.unit || ""}
                    required
                    onChange={(e) =>
                      handleInputChange(category, item, "unit", e.target.value)
                    }
                  >
                    <option value="">Unit</option>
                    <option value="pcs">pcs</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="ltr">ltr</option>
                  </select>
                </div>
              );
            })}
          </div>
        ) : null
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-primary text-white rounded"
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default CustomizeBarBulk;
