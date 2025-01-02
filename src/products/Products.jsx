import React from "react";

const Products = ({ result }) => {
  return (
    <>
      <section className=" container flex flex-wrap gap-4 ml-10 px-3 mt-10">
        {result}
      </section>
    </>
  );
};

export default Products;
