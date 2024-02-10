import React from "react";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Feedback = () => {
  const settings = {
    infinite: true,
    speed:2000,
    autoplay: true,
    autoplaySpeed:3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
    ]
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-200 p-4 md:p-10 h-fit">
      <div className="flex flex-col text-center items-center">
        <h1 className="font-mig text-[50px] md:text-[70px] text-primary-0">Reviews</h1>
        <p className=" text-primary-0 font-nats leading-3 text-md uppercase ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="bg-white flex items-center  px-6 rounded-2xl w-fit p-2 text-[20px] gap-2 justify-center text-[#FFC802] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] mt-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
      <div className="w-[90%] m-auto ">
        <div className="mt-10 ">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="bg-white rounded-xl p-4   ">
                <div>
                  <div className="text-primary-0/20 text-[40px]">
                  <BiSolidQuoteAltLeft />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-nats text-[18px]">{d.content}</p>
                  <p className="mt-6  font-nats text-[16px] font-bold ">
                    {d.name}
                  </p>
                  <div className="flex text-[#FFC802]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    name: "Biswajit Singha",
    content:
      "Extremely loved the services ... great work ",
  },
  {
    name: "Bishnu Roy",
    content:
      "serives khub darun, caterers der modhe cordination khubi valo",
  },
  {
    name: "Rama Barman",
    content:
      "very affaordable and best serivces ",
  },
  {
    name: "Pabitra Singha",
    content:
      "khub valo laglo Rahul Catering er services",
  },
 
];

export default Feedback;
