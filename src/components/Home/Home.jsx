import React from "react";
import BackGround from "../../../public/Images/HeroBg.png";
// import Button from "../Button";
import Button from "../anmatedBtn";
const Home = () => {
  return (
    <div className="w-full ">
      <div  style={{
      backgroundImage: `url(${BackGround})`,
    }}
       className="w-full h-[460px] text-center  bg-no-repeat flex items-center md:items-start justify-center p-4 md:p-10 flex-col md:text-left">
        <h1 className="  font-mig text-[50px] md:text-[70px] leading-[45px] text-white md:leading-[70px]">
          Good Serving makes <br className="hidden md:block" /> food more Tasty.
        </h1>
        <p className="font-nats uppercase md:text-[20px] mt-3 leading-5 text-[18px] text-white/70 md:leading-5">
          It is a long established fact that a reader will be <br /> distracted
          by the readable content of a page when looking at its layout.
        </p>
        <div className="md:hidden mt-4">
        <Button />
        </div>
      </div>
    </div>
  );
};

export default Home;
