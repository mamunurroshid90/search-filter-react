import React from "react";
import Button from "../components/buttons/Button";

const Recomended = ({ handleClick }) => {
  return (
    <>
      <div className=" container mx-auto max-w-[1280px] py-6 ">
        <h2 className=" text-2xl font-bold font-sans">Recommended</h2>
        <div className=" flex gap-4 mt-4">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recomended;
