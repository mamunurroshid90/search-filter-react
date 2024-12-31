import React from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import Input from "../../components/input/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="mt-10 ml-10">
        <h2 className=" text-xl flex items-center gap-2 font-semibold mb-5">
          <span>
            <AiOutlineBgColors />
          </span>
          Colors
        </h2>
        <div>
          <label>
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span>All</span>
          </label>

          <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test2"
            color="black"
          />
          <Input
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test2"
            color="green"
          />
          <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test2"
            color="blue"
          />
          <Input
            handleChange={handleChange}
            value="red"
            title="Red"
            name="test2"
            color="red"
          />
          <Input
            handleChange={handleChange}
            value="white"
            title="White"
            name="test2"
            color="white"
          />
        </div>
      </div>
    </>
  );
};

export default Colors;
