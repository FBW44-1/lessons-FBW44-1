import Card from "./Card";

const ProductsElement = (props) => {
  console.log("Products from ProductsElement ==> ", props.productsData);
  return (
    <div>
      ProductsElement
      {props.productsData.map((prod) => (
        <Card key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductsElement;
