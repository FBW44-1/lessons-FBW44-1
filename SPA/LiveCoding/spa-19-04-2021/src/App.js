import "./App.scss";
import { useState } from "react";
import AddProductForm from "./components/AddProductForm";
import ProductsElement from "./components/ProductsElement";
import { v4 as uuidv4 } from "uuid";

/**
 * product
 {
   id: String uuidv4(),
   title: String,
   url: String,
   details: String
 }
 */

/**
 * products
   [
    {
   id: String uuidv4(),
   title: String,
   url: String,
   details: String
   },
 ....
   ]
 */
const initProducts = [
  {
    id: uuidv4(),
    title: "nike T-shirt",
    details: "Product details ....",
    url:
      "https://www.galeria.de/dw/image/v2/karstadt/APInoauth/storage/VX-1/file/VX-15781627/0.47131861020380283/VX-15781627.jpeg?sw=1200&sh=1200&sm=fit",
  },
];

function App() {
  const [productsData, setProductsData] = useState(initProducts);
  return (
    <div className="container">
      <h1>Online Shop</h1>
      <div>
        <h2>Add Products</h2>
        <AddProductForm />
      </div>
      <hr />
      <div>
        <h2>Products</h2>
        <ProductsElement />
      </div>
    </div>
  );
}

export default App;
