import React from "react";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const inputfield = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    const limitedValue = numericValue.slice(0, 10);
    setPhoneNumber(limitedValue);
  };

  return (
    <div className="bg-gray-200  px-2 py-3 flex items-center rounded-lg text-center mt-2 flex-grow">
      <FaPhoneAlt className="text-primary-0 text-xl mr-2" />
      <input
        type="number"
        name="number"
        required
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="Enter your Phone Number"
        className="outline-none  w-full bg-gray-200  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
};

export default inputfield;
