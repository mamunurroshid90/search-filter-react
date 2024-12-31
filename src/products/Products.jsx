import React from "react";

const Products = ({ result }) => {
  return (
    <>
      <section className=" container flex flex-wrap gap-6 mx-auto max-w-[1280px] py-6 ">
        {result}
      </section>
    </>
  );
};

export default Products;
