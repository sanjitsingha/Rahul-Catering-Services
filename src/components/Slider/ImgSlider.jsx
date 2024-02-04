import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuGalleryHorizontalEnd } from "react-icons/lu";


const ImgSlider = () => {
  const SliderImages = [
    {
      image: "https://placehold.co/900x400",
    },
    {
      image: "https://placehold.co/900x400",
    },
    {
      image: "https://placehold.co/900x400",
    },
    {
      image: "https://placehold.co/900x400",
    },
    {
      image: "https://placehold.co/900x400",
    },
   
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true
  };
  return (
    <div className="pl-8 pr-8 mt-[80px]">
      <h1 className="font-mig text-[50px] md:text-[70px] text-primary-0 leading-[60px] md:leading-[80px]">Showcase</h1>
      <p className="font-nats text-[19px] md:text-[22px] text-primary-0/80 leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, recusandae!</p>
      <div className="w-full flex justify-end mt-2 mb-2">
        <div className="text-primary-0 md:text-[18px] text-[14px]  font-nats flex items-center gap-2 py-1 md:py-2 md:px-4 px-2 bg-primary-0/30 cursor-pointer rounded-2xl">
          <LuGalleryHorizontalEnd /> <p> Visit Gallery</p>
        </div>
      </div>
      <Slider {...settings}>
        {SliderImages.map((img, index) => {
          return (
            <div className="text-center w-full object-contain " >
              <img className=" " key={index} src={img.image} alt={img.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImgSlider;
