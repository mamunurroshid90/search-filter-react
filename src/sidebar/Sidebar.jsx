import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <>
      <div className=" w-[12%] border p-3 fixed text-center">
        <h2 className=" text-black mt-6 text-3xl">🛒</h2>
        <div className=" mt-10">
          <Category />
          <Price />
          <Colors />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
