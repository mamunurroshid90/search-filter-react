import Nav from "./navigations/Nav";
import Products from "./products/Products";
import Recomended from "./recomended/Recomended";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className="container mx-auto max-w-[1300px] pl-5">
        <Nav />
        <Recomended />
        <Products />
      </div>
    </>
  );
}

export default App;
