import { useParams } from "react-router-dom";

export default function ProductView(props) {
  const params = useParams();
  const productsData = props.productsData;
  const targetObject = productsData[params.productId];
  //console.log("ProductView useParams()==> ", params);
  //console.log("ProductView props==> ", props);
  // console.log("ProductView target object ==> ", productsData[params.productId]);

  return (
    <div className="Container">
      <h2>{targetObject.title}</h2>
      <img style={{ width: "100%" }} src={targetObject.image} alt="" />
      <p>price: {targetObject.price} Euro</p>
      <p>{targetObject.body}</p>
    </div>
  );
}
