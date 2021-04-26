import React from "react";

const Card = () => {
  return (
    <div>
      <p>card title</p>
      <img
        style={{ width: "100%" }}
        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
        alt=""
      />
    </div>
  );
};

export default function CardsForm() {
  return (
    <div className="CardsForm">
      <h2>Cards form</h2>
      <form>
        <h3>Form</h3>
      </form>
      <div>
        <h3>Cards</h3>
        <Card />
      </div>
    </div>
  );
}
