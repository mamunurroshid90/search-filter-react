import React from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import Input from "../../components/input/Input";

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
        <div>
          <Input />
        </div>
      </div>
    </>
  );
};

export default Colors;
