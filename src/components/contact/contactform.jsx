import React from "react";
import InputNameField from "./inputfield";
import InputPhoneField from "./inputphone";
import Button from "../Button";

const contactform = () => {
  return (
    <div className="w-full md:w-[50%]">
      <form action="https://formspree.io/f/mayreern" method="POST">
      <p className="font-nats text-primary-0 text-xl">Name</p>
      <InputNameField />
      <p className="font-nats text-primary-0 text-xl mt-4">Phone Number</p>
      <InputPhoneField />

      <p className="font-nats text-primary-0 text-xl mt-4">Describe</p>
      <textarea
        rows="5"
        required
        name="message"
        className="bg-gray-200 w-full mb-4 outline-none p-2  resize-none"
      ></textarea>
      <input className="bg-primary-0  cursor-pointer text-white font-nats py-2 rounded-xl w-full text-[22px]"  type="submit" value={"Send"} />
      </form>
    </div>
  );
};

export default contactform;
