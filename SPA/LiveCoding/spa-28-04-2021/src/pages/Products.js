import ProductCard from "../components/component/ProductCard";
export default function Products(props) {
  return (
    <div>
      <h1>Products</h1>
      <div className="Container">
        {props.productsData.map((productObj, index) => (
          <ProductCard key={index} productObj={productObj} />
        ))}
      </div>
    </div>
  );
}
