import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <>
      <div className=" w-[12%] border p-3 fixed text-center">
        <h2 className=" text-black mt-6 text-3xl">🛒</h2>
        <div className=" mt-10">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
