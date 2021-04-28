import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(" ProductCard ==> ", props);
  return (
    <div className="card" style={{ marginBottom: "15px" }}>
      <img src={props.productObj.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.productObj.title}</h5>

        <Link
          to={"/products/" + props.productObj.id}
          className="btn btn-primary"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
