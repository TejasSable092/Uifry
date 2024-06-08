import React from "react";
import { MdSms } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-start">
        <div className="flex flex-col">
            <div className="flex items-center mb-6 md:mb-0">

          <img src={"src/assets/Frame.png"} alt="logo" className="mr-3" />
          <h1 className="text-2xl font-bold">uifry</h1>
            </div>
          <div className="flex flex-col">
            <div className=" flex items-center gap-2 mt-4">
            <span className=" text-[#FF5555]"><MdSms /></span>
            <p className="text-[10px]">help@frybix.com</p>
            </div>
            <div className=" flex items-center gap-2 mt-2">
              <span className=" text-[#FF5555]"><IoIosCall /></span>
            <p className="text-[10px]">+1 234 456 678 89</p>
            </div>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h1 className="font-bold text-2xl mb-3">Link</h1>
          <div className="space-y-2">
            <p>Home</p>
            <p>About Us</p>
            <p>Booking Us</p>
            <p>Blog</p>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h1 className="font-bold text-2xl mb-3">Legal</h1>
          <div className="space-y-2">
            <p>Terms Of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h1 className="font-bold text-2xl mb-3">Product</h1>
          <div className="space-y-2">
            <p>Take Tour</p>
            <p>Live Chat</p>
            <p>Reviews</p>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h1 className="font-bold text-2xl mb-3">Newsletter</h1>
          <div className="space-y-2">
            <p>Stay Up to Date</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="px-3 py-2 bg-black text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-2 mt-4 w-[600px] mx-auto"/>
      <p className=" text-center text-[10px] mt-5">Copyright 2022 uifry.com all rights reserved</p>
    </footer>
  );
};

export default Footer;
