import React from "react";
import { IoStar } from "react-icons/io5";
import { BsBagPlusFill } from "react-icons/bs";

const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
}) => {
  return (
    <>
      <div className=" border border-gray-200 rounded-md p-4 w-[280px]">
        <div className=" w-full h-[200px] flex justify-center items-center">
          <img src={img} alt={title} width={220} height={200} />
        </div>
        <div className=" mt-6">
          <h2 className=" text-xl font-bold">{title}</h2>
          <div className=" flex items-center gap-2 mt-3">
            <span className="  text-yellow-500 flex items-center gap-1">
              {Array(star)
                .fill()
                .map((_, i) => (
                  <IoStar key={i} />
                ))}
            </span>
            <span>{reviews}</span>
          </div>
          <div className=" flex items-center mt-2">
            <del>{prevPrice}</del>
            <span className=" font-semibold mx-3"> {newPrice}</span>
            <BsBagPlusFill />
          </div>
          <div className=" flex items-center gap-5 mt-2 text-xs">
            <span>{company}</span>
            <span>{color}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
