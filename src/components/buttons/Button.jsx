import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <div>
      <button
        className=" border px-6 py-2 rounded font-medium"
        onClick={onClickHandler}
        value={value}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
