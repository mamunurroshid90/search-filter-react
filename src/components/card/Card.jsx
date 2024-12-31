import React from "react";
import { IoStar } from "react-icons/io5";
import { BsBagPlusFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

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
      <div className=" border border-gray-200 rounded-md p-4 w-[300px]">
        <div>
          <img src={img} alt={title} />
        </div>
        <div className=" mt-6">
          <h2 className=" text-2xl font-bold">{title}</h2>
          <div className=" flex items-center gap-2 mt-3">
            <span className="  text-yellow-500 flex items-center gap-1">
              {
                Array(star)
                  .fill()
                  .map((_, i) => (
                    <IoStar key={i} />
                  )) // render star
              }
            </span>
            <span>{reviews}</span>
          </div>
          <div className=" flex items-center justify-around mt-2">
            <del>{prevPrice}</del>
            <span className=" font-semibold">{newPrice}</span>
            <BsBagPlusFill />
          </div>
          <div className=" flex items-center gap-5 mt-2 font-semibold">
            <span>{company}</span>
            <span>{color}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
