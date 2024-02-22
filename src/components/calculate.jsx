import { useState } from "react";
import React from "react";
import Button from "./Button";

const calculate = () => {
  

  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = () => {
    let multipliedResult;
    if (number >= 3000) {
      multipliedResult = number * 6;
    } else {
      multipliedResult = number * 8;
    }
    setResult(multipliedResult < 4000 ? 4000 : multipliedResult);
    document.getElementById("approx").style.display = "flex";
                document.getElementById("rupee").style.display = "block";
                document.getElementById("maindiv").style.display = "block";
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div className=" w-full flex justify-center align-middle items-center mt-20 mb-20 ">
      <div className=" w-[95%] md:w-[60%] p-2 md:p-10 ">
        <div className="bg-white p-4 md:p-10 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">
          <h2 className="text-pimary-0 font-mig text-[50px] md:text-[70px] text-primary-0">
            Calculate
          </h2>
          <p className=" text-primary-0 font-nats leading-3 text-md uppercase ">
            This calculate function helps you to get the catering budget for
            your event.
          </p>
          <div className="md:flex md:gap-5">
            <input
              type="number"
              value={number}
              className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mt-4 text-md w-full py-2 px-2 rounded-lg font-nats md:text-[22px] text-bold focus:outline-primary-0 bg-gray-200"
              placeholder="Enter the number of the Guest"
              onChange={handleChange}
            />
            <button
              onClick={ handleButtonClick}
              className="bg-primary-0 px-2 md:w-[180px]  py-1 w-full mt-4 rounded-lg text-white font-mig 
              text-md md:text-xl "
            >
              Calculate
            </button>
          </div>
          <div id="maindiv" className="relative mt-10 hidden  w-fit">
            <h1
              id="rupee"
              className="text-primary-0 mr-4 font-mig text-bold hidden text-2xl mt-2"
            >
              ₹<span className="ml-2">{result} </span>
            </h1>
            <div
              id="approx"
              className="hidden absolute items-center  -top-4 -right-8"
            >
              <p className="text-primary-0 text-xs  ">(approx)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default calculate;
