import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";

import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const contactdetails = () => {
  return (
    <div className="w-full md:w-[50%] flex-col flex  md:items-start mt-10">
      <p className="font-nats text-2xl text-primary-0">Follow us on</p>
      <div className="flex text-xl text-primary-0 gap-10">
        <a href="https://www.instagram.com/rahul_services.in/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/people/Rahul-services/61556331444528/?mibextid=ZbWKwL" target="_blank">
          <FaFacebook />
        </a>

        <a href="https://wa.me/7478827023" target="_blank">
          <IoLogoWhatsapp />
        </a>
      </div>
      <div className="font-nats text-primary-0 text-md flex items-center gap-4 mt-2">
        <BsFillTelephoneOutboundFill />
        <p className="text-2xl">+91 7478827023</p>
      </div>

      <div className="font-nats text-primary-0 text-xl flex items-center  gap-4 mt-2">
        <TbMapSearch />
        <p className="text-xl leading-5 ">
          Mailani Jote,Ghoshpukur, Darjeeling,734426
        </p>
      </div>
    </div>
  );
};

export default contactdetails;
