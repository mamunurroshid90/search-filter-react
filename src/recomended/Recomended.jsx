import React from "react";

const Recomended = () => {
  return (
    <>
      <div className=" container mx-auto max-w-[1280px] py-6 ">
        <h2 className=" text-2xl font-bold font-sans">Recommended</h2>
        <div className=" flex gap-4 mt-4">
          <button className=" border rounded px-6 py-2 font-semibold">
            All Products
          </button>
          <button className=" border rounded px-6 py-2 font-semibold">
            Nike
          </button>
          <button className=" border rounded px-6 py-2 font-semibold">
            Adidas
          </button>
          <button className=" border rounded px-6 py-2 font-semibold">
            Puma
          </button>
          <button className=" border rounded px-6 py-2 font-semibold">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recomended;
