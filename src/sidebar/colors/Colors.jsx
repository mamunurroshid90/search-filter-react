import React from "react";
import { AiOutlineBgColors } from "react-icons/ai";

const Colors = () => {
  return (
    <>
      <div className="mt-10 ml-10">
        <h2 className=" text-xl flex items-center gap-2 font-semibold mb-5">
          <span>
            <AiOutlineBgColors />
          </span>
          Colors
        </h2>
        <div className="flex flex-col gap-3 ">
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">All</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">Black</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">Blue</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">Green</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">Red</span>
          </label>
          <label className=" flex items-center gap-3 justify-start ">
            <input className=" w-4 h-4" type="radio" name="test" />
            <span className=" font-medium">White</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Colors;
