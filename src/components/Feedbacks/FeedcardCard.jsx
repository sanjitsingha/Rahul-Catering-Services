import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

const FeedcardCard = (props) => {
  return (
    <div className="w-fit h-fit md:w-[450px] bg-white rounded-lg p-4 outline outline-1 outline-white ">
      <div className="flex flex-col ">
        <div className="text-start text-primary-0">
          <ImQuotesLeft size={40} />
        </div>
        <p className="text-center font-nats text-[22px] leading-6 text-primary-0">
          {props.content}
        </p>
        <div className="text-center flex flex-col items-center mt-2">
          <p className="text-[24px] font-nats">{props.name}</p>
          <div className=" flex items-center  px-4  w-fit p-2 text-[20px] gap-2 justify-center text-[#FFC802]  mt-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedcardCard;
