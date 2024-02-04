import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const inputfield = () => {
  return (
    <div className="bg-gray-200  px-2 py-3 flex items-center rounded-md text-center flex-1">
      <MdOutlineAccountCircle className="text-primary-0 text-2xl mr-2" />
      <input
        type="text"
        name="name"
        required
        placeholder="Enter your Name"
        className="outline-none  w-full bg-gray-200"
      />
    </div>
  );
};

export default inputfield;
