import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

const Nav = ({ handleInputChange, query }) => {
  return (
    <>
      <nav className="  flex justify-between ml-10 px-3 mt-5">
        <div className=" w-[250px]">
          <input
            onChange={handleInputChange}
            value={query}
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
