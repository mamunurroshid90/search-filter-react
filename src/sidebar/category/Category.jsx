import React from "react";
import { TbCategoryPlus } from "react-icons/tb";
import Input from "../../components/input/Input";

const Category = ({ handleChange }) => {
  return (
    <>
      <div className=" ml-10">
        <h2 className=" text-xl flex items-center gap-2 font-semibold mb-5">
          <span>
            <TbCategoryPlus />
          </span>
          Category
        </h2>
        <div>
          <label>
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span>All</span>
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
