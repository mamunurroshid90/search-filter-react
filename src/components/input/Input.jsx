import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <>
      <div className=" ml-10">
        <div className="flex flex-col gap-3">
          <label className=" flex items-center gap-3 justify-start ">
            <input
              onChange={handleChange}
              value={value}
              className=" w-4 h-4"
              type="radio"
              name={name}
              style={{ backgroundColor: color }}
            />
            <span className=" font-semibold">{title}</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Input;
