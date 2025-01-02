import React from "react";
import { TbCategoryPlus } from "react-icons/tb";
import Input from "../../components/input/Input";

const Category = ({ handleChange }) => {
  return (
    <>
      <div className=" ml-5">
        <h2 className=" text-xl flex gap-2 font-semibold mb-5">
          <span>
            <TbCategoryPlus />
          </span>
          Category
        </h2>
        <div>
          <label className=" flex items-center gap-3 justify-start ">
            <input
              onChange={handleChange}
              type="radio"
              value=""
              name="test"
              className=" w-4 h-4"
            />
            <span className=" font-medium">All</span>
          </label>

          <Input
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
