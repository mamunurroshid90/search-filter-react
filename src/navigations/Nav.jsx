import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className=" container flex justify-between mx-auto max-w-[1280px] py-6 ">
        <div className=" w-[250px]">
          <input
            type="text"
            placeholder="Enter your search shows"
            className=" border-none bg-gray-100 rounded py-2 px-3 w-full"
          />
        </div>
        <div className=" flex items-center gap-10">
          <a href="#" className=" text-2xl">
            <FaHeart />
          </a>
          <a href="#" className=" text-2xl">
            <FaShoppingCart />
          </a>
          <a href="#" className=" text-2xl">
            <HiOutlineUserAdd />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
