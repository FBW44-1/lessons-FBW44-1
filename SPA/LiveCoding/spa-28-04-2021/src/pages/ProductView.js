import { useParams } from "react-router-dom";

export default function ProductView() {
  console.log("ProductView ==> ", useParams());
  return (
    <div className="Container">
      <h2>title</h2>
      <img
        style={{ width: "100%" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt=""
      />
      <p>price: 20 Euro</p>
      <p>body</p>
    </div>
  );
}
