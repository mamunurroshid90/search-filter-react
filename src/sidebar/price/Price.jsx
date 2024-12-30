import React from "react";
import { GiPriceTag } from "react-icons/gi";

const Price = () => {
  return (
    <>
      <div className="mt-10 ml-10">
        <h2 className=" text-xl flex items-center gap-2 font-semibold mb-5">
          <span>
            <GiPriceTag />
          </span>
          Price
        </h2>
        <div className="flex flex-col gap-3 ">
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">All</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">$0-50</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">$50-100</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">$100-150</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">$Over-150</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Price;
