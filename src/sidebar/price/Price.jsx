import React from "react";
import { GiPriceTag } from "react-icons/gi";
import Input from "../../components/input/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="mt-10 ml-5">
        <h2 className=" text-xl flex items-center gap-2 font-semibold mb-5">
          <span>
            <GiPriceTag />
          </span>
          Price
        </h2>
        <div>
          <label className=" flex items-center gap-3 justify-start ">
            <input
              onChange={handleChange}
              type="radio"
              value=""
              name="test2"
              className=" w-4 h-4"
            />
            <span className=" font-medium">All</span>
          </label>

          <Input
            handleChange={handleChange}
            value={50}
            title="$0 -50"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={100}
            title="$50 -100"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={150}
            title="$100 -150"
            name="test2"
          />
          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </div>
      </div>
    </>
  );
};

export default Price;
