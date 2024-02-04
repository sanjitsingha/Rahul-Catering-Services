import React from "react";
import { NavLink } from "react-router-dom";
import Button from '../components/anmatedBtn'
import Logo from '../../public/Images/Rahul Catering Services.png'

const Navbar = () => {
  return (
    <div className=" h-[75px] w-full flex items-center justify-between  md:px-20 gap-10 px-6 border-b-[1px] ">
      <div className="md:mr-10">
        <NavLink to={"/"}>
          <img src={Logo} alt="logo" className="w-[80px]" />
          {/* <h1 className="font-mig text-4xl text-primary-0">Logo</h1> */}
        </NavLink>
      </div>
      
{/* 
      <div className="hidden md:flex items-center justify-between w-full">
        <ul className="flex gap-10 text-primary-0">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-primary-0 ${isActive ? "font-bold" : ""}`
              }
              to={"gallery"}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-primary-0 ${isActive ? "font-bold" : ""}`
              }
              to={"contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div> */}
      {/* <div className="md:hidden">
      <HiOutlineMenuAlt1 />

      </div> */}

<div className="hidden md:block">
        <Button />
        </div>
    </div>
  );
};

export default Navbar;
