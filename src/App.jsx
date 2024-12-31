import { useState } from "react";
import Nav from "./navigations/Nav";
import Products from "./products/Products";
import Recomended from "./recomended/Recomended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/card/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        company,
        color,
        category,
      }) => (
        <Card
          key={Math.random}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          company={company}
          color={color}
          category={category}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <div className="container mx-auto w-[1300px] pl-5">
        <Nav query={query} handleInputChange={handleInputChange} />
        <Recomended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </>
  );
}

export default App;
