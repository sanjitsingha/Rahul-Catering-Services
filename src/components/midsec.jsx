import React from "react";
import Card from "./Card";
import Image from "../../public/Images/Vector.png";
import Image2 from "../../public/Images/birthday.png";
import Image3 from "../../public/Images/special.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const midsec = () => {
  
  return (
    <div className="  flex p-2 md:py-20 py-5 md:p-8 flex-col align-center justify-center text-center">
      <div>
        <h1 className=" text-primary-0   font-mig text-[50px] md:text-[70px] leading-[45px] md:leading-[70px]">
          Great Service <br />
          and Affordable.
        </h1>
        <p className="mt-4 px-5 text-primary-0 font-nats leading-3 text-md uppercase  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Omnis
          modi quod 
        </p>
      </div>

      <div className="flex  gap-2 md:gap-10 w-full px-2 md:px-40 mt-10 justify-evenly align-center">
        
        <Card title={"Wedding"} subtitle={"Ceremony"} Image={Image} />
        <Card title={"Birthday"} subtitle={"Party"} Image={Image2} />
        <Card title={"Special"} subtitle={"Ociasion"} Image={Image3} />
      </div>
    </div>
  );
};

export default midsec;
