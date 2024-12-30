import React from "react";
import { TbCategoryPlus } from "react-icons/tb";

const Category = () => {
  return (
    <>
      <div className=" ml-10">
        <h2 className=" text-xl flex items-center gap-2 font-semibold mb-5">
          <span>
            <TbCategoryPlus />
          </span>
          Category
        </h2>
        <div className="flex flex-col gap-3">
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-semibold">All</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-semibold">Sneakers</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-semibold">Sandals</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-semibold">Flats</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-semibold">Heels</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Category;
