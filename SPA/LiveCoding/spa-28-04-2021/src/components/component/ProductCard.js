import React from "react";

export default function ProductCard() {
  return (
    <div className="card" style={{ marginBottom: "15px" }}>
      <img
        src="https://mediapool.bmwgroup.com/cache/P9/202010/P90403620/P90403620-bmw-m4-competition-x-kith-10-2020-2002px.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>

        <a href="#" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
}
